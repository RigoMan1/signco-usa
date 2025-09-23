import { Input } from '@/components/ui/input';
import { Search, Globe } from 'lucide-react';
import { categories } from '@/data/categories';
import {
	NavigationMenu,
	NavigationMenuList,
	NavigationMenuItem,
	NavigationMenuTrigger,
	NavigationMenuContent,
} from '@/components/ui/navigation-menu';
import { products } from '@/data/products';
import { Link } from 'react-router-dom';

const Header = () => {
	return (
		<header className='border-b'>
			{/* top row (logo + utilities) stays contained */}
			<div className='mx-auto max-w-7xl px-4 lg:px-8'>
				<div className='flex items-center justify-between py-3'>
					{/* Logo / Brand */}
					<Link to='/' className='flex items-center gap-2'>
						<img
							src='/images/logo.png'
							alt='SignCo USA Logo'
							className='h-24 w-auto'
						/>
					</Link>

					{/* Utilities */}
					<div className='flex items-center gap-4 text-sm text-muted-foreground'>
						<button className='flex items-center gap-1 hover:text-foreground'>
							<Globe className='h-4 w-4' />
							United States (English)
						</button>
						<div className='relative'>
							<Search className='pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground' />
							<Input
								className='pl-9'
								placeholder='Search products & services'
							/>
						</div>
					</div>
				</div>
			</div>

			{/* NAV */}
			<div className='w-full bg-gray-100'>
				<div className='mx-auto max-w-7xl px-4 lg:px-8'>
					<nav className='flex items-center'>
						<NavigationMenu className='w-full'>
							<NavigationMenuList className='flex w-full flex-wrap items-center gap-2 py-3 text-sm font-medium text-muted-foreground justify-start'>
								{categories.map((category) => {
									const items = products.filter(
										(p) => p.categoryId === category.id,
									);
									return (
										<NavigationMenuItem key={category.id}>
											<NavigationMenuTrigger className='bg-transparent px-4 py-0 hover:bg-transparent data-[state=open]:bg-transparent hover:text-foreground'>
												{category.name}
											</NavigationMenuTrigger>
											<NavigationMenuContent>
												<div className='w-[1200px] lg:w-[1200px] p-6'>
													<div className='mb-4 flex items-end justify-between gap-4'>
														<h3 className='text-base font-semibold text-foreground'>
															{category.name}
														</h3>
														<Link
															to={`/categories/${category.id}`}
															className='text-sm text-primary hover:underline'
														>
															View all
														</Link>
													</div>

													<div className='grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3'>
														{items.map((product) => (
															<Link
																key={product.id}
																to={`/products/${product.id}`}
																className='group flex items-start gap-4 rounded-xl p-3 transition hover:bg-white hover:shadow-sm'>
																{/* Left: thumbnail */}
																<div className='relative size-20 shrink-0 aspect-square  overflow-hidden rounded-lg bg-muted'>
																	<img
																		src={product.highlightImage.src}
																		alt={product.highlightImage.alt}
																		className='h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.03]'
																	/>
																</div>

																{/* Right: text */}
																<div className='min-w-0'>
																	<div className='text-sm font-semibold leading-snug text-foreground'>
																		{product.name}
																	</div>
																	<p className='mt-1 text-sm text-muted-foreground line-clamp-2'>
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
