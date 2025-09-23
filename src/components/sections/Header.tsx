import { Input } from '@/components/ui/input';
import { Search, Globe } from 'lucide-react';

const Header = () => {
	const nav = [
		'Dimensional Letters',
		'Regulatory Signs',
		'ADA Signage',
		'Banners',
		'Vehicle Graphics',
		'Illuminated Signs',
		'Digital Printing',
		'Plaques',
		'Storefronts',
		'Portable Signage',
	];

	return (
		<header className='border-b'>
			{/* top row (logo + utilities) stays contained */}
			<div className='mx-auto max-w-7xl px-4 lg:px-8'>
				<div className='flex items-center justify-between py-3'>
					{/* Logo / Brand */}
					<div className='flex items-center gap-2'>
						<img
							src='/images/logo.png'
							alt='SignCo USA Logo'
							className='h-24 w-auto'
						/>
					</div>

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
						<ul className='flex w-full flex-wrap items-center gap-6 py-3 text-sm font-medium text-muted-foreground'>
							{nav.map((item) => (
								<li key={item}>
									<a href='#' className='hover:text-foreground'>
										{item}
									</a>
								</li>
							))}
						</ul>
					</nav>
				</div>
			</div>
		</header>
	);
};

export default Header;
