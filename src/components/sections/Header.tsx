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
import {
	Search,
	Phone,
	Mail,
	MapPin,
	Clock,
	Menu,
	Info,
	ArrowRight,
} from 'lucide-react';

const Header = () => {
	return (
		<header className='sticky top-0 z-50 border-b'>
			{/* ===== Top band ===== */}
			<div className='hidden sm:block bg-gradient-to-r from-blue-600 to-blue-700 text-white'>
				<div className='mx-auto flex max-w-7xl flex-col gap-2 px-4 py-1.5 text-xs md:flex-row md:items-center md:justify-between md:px-8'>
					<div className='flex flex-wrap items-center gap-4'>
						<span className='flex items-center gap-1.5'>
							<MapPin className='h-3.5 w-3.5' /> 1350 University Ave, Berkeley,
							CA 94702
						</span>
						<span className='hidden h-3 w-px bg-white/40 md:inline' />
						<span className='flex items-center gap-1.5'>
							<Clock className='h-3.5 w-3.5' /> Mon–Fri 9:00–5:00
						</span>
					</div>
					<div className='flex flex-wrap items-center gap-4'>
						<a
							href='tel:+15108487446'
							className='inline-flex items-center gap-1.5 hover:underline'>
							<Phone className='h-3.5 w-3.5' /> (510) 848-7446
						</a>
						<span className='hidden h-3 w-px bg-white/40 md:inline' />
						<a
							href='mailto:info@signcousa.com'
							className='inline-flex items-center gap-1.5 hover:underline'>
							<Mail className='h-3.5 w-3.5' /> info@signcousa.com
						</a>
					</div>
				</div>
			</div>

			{/* Mobile: slim utility bar */}
			<div className='sm:hidden bg-blue-600 text-white'>
				<div className='mx-auto flex max-w-7xl items-center justify-between px-3 py-1'>
					<a
						href='tel:+15108487446'
						className='inline-flex items-center gap-1 text-xs font-medium hover:underline'
						aria-label='Call SignCo USA'>
						<Phone className='h-4 w-4' /> Call
					</a>

					<Link to='/quote' className='block'>
						<Button
							size='sm'
							variant='secondary'
							className='h-7 px-2 text-[11px]'>
							Free Estimate
						</Button>
					</Link>

					<Sheet>
						<SheetTrigger asChild>
							<Button
								variant='ghost'
								size='icon'
								className='h-7 w-7 text-white/90 hover:bg-white/10'
								aria-label='Open contact & hours'>
								<Info className='h-4 w-4' />
							</Button>
						</SheetTrigger>
						<SheetContent side='bottom' className='h-auto p-4'>
							<div className='space-y-3 text-sm'>
								<div className='font-semibold'>Contact & Hours</div>
								<a
									href='https://maps.google.com/?q=1350+University+Ave,+Berkeley,+CA+94702'
									target='_blank'
									rel='noopener noreferrer'
									className='flex items-start gap-2 rounded-lg bg-muted p-2'>
									<MapPin className='mt-0.5 h-4 w-4 text-muted-foreground' />
									<span>1350 University Ave, Berkeley, CA 94702</span>
								</a>
								<div className='flex items-start gap-2 rounded-lg bg-muted p-2'>
									<Clock className='mt-0.5 h-4 w-4 text-muted-foreground' />
									<span>Mon–Fri 9:00–5:00</span>
								</div>
								<a
									href='tel:+15108487446'
									className='flex items-start gap-2 rounded-lg bg-muted p-2'>
									<Phone className='mt-0.5 h-4 w-4 text-muted-foreground' />
									<span>(510) 848-7446</span>
								</a>
								<a
									href='mailto:info@signcousa.com'
									className='flex items-start gap-2 rounded-lg bg-muted p-2'>
									<Mail className='mt-0.5 h-4 w-4 text-muted-foreground' />
									<span>info@signcousa.com</span>
								</a>
							</div>
						</SheetContent>
					</Sheet>
				</div>
			</div>

			{/* ===== Main header row ===== */}
			<div className='bg-white'>
				<div className='mx-auto max-w-7xl px-4 lg:px-8'>
					<div className='flex items-center justify-between py-2 lg:py-3'>
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
									className='h-10 w-auto lg:h-20'
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

			{/* ===== NAV (desktop) ===== */}
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
											<NavigationMenuTrigger className='bg-transparent'>
												<Link
													to={`/categories/${category.id}`}
													>
													{category.name}
												</Link>
											</NavigationMenuTrigger>

											<NavigationMenuContent>
												<div className='w-[min(1200px,90vw)] p-6'>
													<div className='mb-4 flex items-end justify-between gap-4'>
														<h3 className='text-base font-semibold text-foreground'>
															{category.name}
														</h3>
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
													{/* Full-bleed footer "View all" bar */}
													<div className='mt-6 -mx-6 -mb-6'>
														<Link
															to={`/categories/${category.id}`}
															className='block rounded-b-xl border-t bg-muted/60 transition hover:bg-muted'>
															<span className='inline-flex w-full items-center justify-center gap-1.5 py-3 text-sm font-medium text-primary whitespace-nowrap'>
																Shop all {category.name}
																<ArrowRight className='h-4 w-4' />
															</span>
														</Link>
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
