import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { categories } from '@/data/categories';
import { products } from '@/data/products';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
	NavigationMenu,
	NavigationMenuList,
	NavigationMenuItem,
	NavigationMenuTrigger,
	NavigationMenuContent,
} from '@/components/ui/navigation-menu';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Search, Phone, Mail, MapPin, Clock, Menu } from 'lucide-react';

const Header = () => {
	return (
		<header className='sticky top-0 z-50 border-b'>
			{/* Top band with location, hours, and contact */}
			<div className='bg-gradient-to-r from-blue-600 to-blue-700 text-white'>
				<div className='mx-auto flex max-w-7xl flex-col gap-2 px-4 py-2 text-xs lg:flex-row lg:items-center lg:justify-between lg:px-8'>
					<div className='flex flex-wrap items-center gap-4'>
						<span className='flex items-center gap-1'>
							<MapPin className='h-3.5 w-3.5' /> 1350 University Ave, Berkeley,
							CA 94702
						</span>
						<span className='hidden h-3 w-px bg-white/40 lg:inline' />
						<span className='flex items-center gap-1'>
							<Clock className='h-3.5 w-3.5' /> Mon–Fri 9:00–5:00
						</span>
					</div>
					<div className='flex flex-wrap items-center gap-4'>
						<a
							href='tel:+15108487446'
							className='inline-flex items-center gap-1 hover:underline'>
							<Phone className='h-3.5 w-3.5' /> (510) 848-7446
						</a>
						<span className='hidden h-3 w-px bg-white/40 lg:inline' />
						<a
							href='mailto:info@signcousa.com'
							className='inline-flex items-center gap-1 hover:underline'>
							<Mail className='h-3.5 w-3.5' /> info@signcousa.com
						</a>
					</div>
				</div>
			</div>

			{/* Main header row */}
			<div className='bg-white'>
				<div className='mx-auto max-w-7xl px-4 lg:px-8'>
					<div className='flex items-center justify-between py-3'>
						<div className='flex items-center gap-3 lg:gap-6'>
							<Sheet>
								<SheetTrigger asChild>
									<Button
										variant='ghost'
										size='icon'
										className='lg:hidden text-gray-700 hover:bg-gray-100'
										aria-label='Open menu'>
										<Menu className='h-6 w-6' />
									</Button>
								</SheetTrigger>
								<SheetContent side='left' className='w-[320px] p-0'>
									<div className='border-b px-4 py-3'>
										<Link to='/' className='flex items-center gap-2'>
											<img
												src='/images/logo.webp'
												alt='SignCo USA Logo'
												className='h-10 w-auto'
											/>
										</Link>
									</div>
									<div className='space-y-1 p-2'>
										<MobileLink to='/products' label='Products & Services' />
										<MobileLink to='/contact' label='Contact' />
										<div className='px-2 pt-2'>
											<Link to='/quote' className='block'>
												<Button className='w-full'>Get a Free Estimate</Button>
											</Link>
										</div>
									</div>
								</SheetContent>
							</Sheet>

							<Link
								to='/'
								className='flex items-center gap-2'
								aria-label='SignCo USA home'>
								<img
									src='/images/logo.webp'
									alt='SignCo USA Logo'
									className='h-12 w-auto lg:h-16'
								/>
							</Link>
						</div>

						<div className='flex items-center gap-2 sm:gap-4'>
							<div className='relative hidden sm:block'>
								<Search className='pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400' />
								<Input
									className='w-64 pl-9 bg-gray-50 text-black placeholder:text-gray-500'
									placeholder='Search products & services'
									aria-label='Search products and services'
								/>
							</div>

							<div className='hidden items-center gap-3 lg:flex'>
								<a
									href='tel:+15108487446'
									className='inline-flex items-center gap-2 text-sm font-medium text-gray-700 hover:underline'>
									<Phone className='h-4 w-4' /> Call
								</a>
								<Link to='/quote' className='block'>
									<Button size='sm'>Get a Free Estimate</Button>
								</Link>
							</div>

							<Button
								variant='ghost'
								size='icon'
								className='sm:hidden text-gray-700 hover:bg-gray-100'
								aria-label='Search'>
								<Search className='h-5 w-5' />
							</Button>
							<Link to='/quote' className='block lg:hidden'>
								<Button size='sm'>Free Estimate</Button>
							</Link>
						</div>
					</div>
				</div>
			</div>

			{/* NAV (desktop) */}
			<div className='hidden border-t bg-gray-50 text-foreground lg:block'>
				<div className='mx-auto max-w-7xl px-4 lg:px-8'>
					<nav aria-label='Primary' className='flex items-center'>
						<NavigationMenu className='w-full'>
							<NavigationMenuList className='flex w-full items-center gap-2 py-2 text-sm font-medium text-muted-foreground'>
								{categories.map((category) => {
									const items = products.filter(
										(p) => p.categoryId === category.id,
									);
									return (
										<NavigationMenuItem key={category.id}>
											<NavigationMenuTrigger className='bg-transparent px-3 py-2 hover:bg-transparent hover:text-foreground data-[state=open]:text-foreground'>
												{category.name}
											</NavigationMenuTrigger>

											<NavigationMenuContent>
												<div className='w-[min(1200px,90vw)] p-6'>
													<div className='mb-4 flex items-end justify-between gap-4'>
														<h3 className='text-base font-semibold text-foreground'>
															{category.name}
														</h3>
														<Link
															to={`/categories/${category.id}`}
															className='text-sm text-primary hover:underline'>
															View all
														</Link>
													</div>
													<div className='grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4'>
														{items.map((product) => (
															<Link
																key={product.id}
																to={`/products/${product.id}`}
																className='group flex items-start gap-4 rounded-xl p-3 transition hover:bg-background hover:shadow-sm'>
																<div className='relative aspect-square size-20 shrink-0 overflow-hidden rounded-lg bg-muted'>
																	<img
																		src={product.highlightImage.src}
																		alt={product.highlightImage.alt}
																		className='h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.03]'
																		loading='lazy'
																	/>
																</div>
																<div className='min-w-0'>
																	<div className='text-sm font-semibold leading-snug text-foreground'>
																		{product.name}
																	</div>
																	<p className='mt-1 line-clamp-2 text-sm text-muted-foreground'>
																		{product.shortDescription}
																	</p>
																</div>
															</Link>
														))}
													</div>
												</div>
											</NavigationMenuContent>
										</NavigationMenuItem>
									);
								})}
							</NavigationMenuList>
						</NavigationMenu>
					</nav>
				</div>
			</div>
		</header>
	);
};

export default Header;

function NavItem({ to, children }: { to: string; children: React.ReactNode }) {
	return (
		<NavLink
			to={to}
			className={({ isActive }) =>
				[
					'rounded-md px-3 py-2 hover:text-foreground',
					isActive ? 'text-foreground' : 'text-muted-foreground',
				].join(' ')
			}>
			{children}
		</NavLink>
	);
}

function MobileLink({ to, label }: { to: string; label: string }) {
	return (
		<Link
			to={to}
			className='flex items-center justify-between rounded-md px-3 py-2 text-sm hover:bg-muted'>
			<span>{label}</span>
		</Link>
	);
}
