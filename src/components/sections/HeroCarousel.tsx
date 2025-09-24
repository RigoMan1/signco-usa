'use client';

import { useRef, useState, useEffect } from 'react';
import Autoplay from 'embla-carousel-autoplay';

import { Button } from '@/components/ui/button';
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
	type CarouselApi,
} from '@/components/ui/carousel';
import { ArrowLeft, ArrowRight } from 'lucide-react';

export default function HeroCarousel() {
	const heroSlides = [
		{
			image:
				'https://i0.wp.com/signcousa.com/wp-content/uploads/2019/06/ada1.jpg?w=1080&ssl=1',
			title: 'Custom signs, built to last.',
			text: 'From ADA and regulatory signage to illuminated storefronts and vehicle graphics—designed, fabricated, and installed by the Sign Professionals.',
			buttons: [
				{ label: 'Get a Free Estimate', variant: 'default' },
				{ label: 'Book On-Site Survey', variant: 'outline' },
			],
		},
		{
			image:
				'https://i0.wp.com/signcousa.com/wp-content/uploads/2019/06/dl5.jpg?w=1080&ssl=1',
			title: 'Dimensional Letters & Logos',
			text: 'Elevate your brand visibility with bold, durable dimensional signage.',
			buttons: [{ label: 'Explore Options', variant: 'default' }],
		},
		{
			image:
				'https://i0.wp.com/signcousa.com/wp-content/uploads/2019/06/banner5.jpg?w=1080&ssl=1',
			title: 'Banners & Event Signage',
			text: 'Make your promotions stand out with vibrant, large-format printing.',
			buttons: [
				{ label: 'Get Started', variant: 'default' },
				{ label: 'See Gallery', variant: 'outline' },
			],
		},
		{
			image:
				'https://i0.wp.com/signcousa.com/wp-content/uploads/2019/06/vgra1.jpg?w=1080&ssl=1',
			title: 'Vehicle Graphics',
			text: 'Turn your fleet into rolling billboards with our custom wraps and decals.',
			buttons: [{ label: 'Request a Quote', variant: 'default' }],
		},
	];

	const autoplay = useRef(Autoplay({ delay: 5000, stopOnInteraction: false }));

	const [api, setApi] = useState<CarouselApi>();
	const [current, setCurrent] = useState(0);

	useEffect(() => {
		if (!api) return;
		const updateCurrent = () => setCurrent(api.selectedScrollSnap());
		api.on('select', updateCurrent);
		updateCurrent();
		return () => {
			api.off('select', updateCurrent);
		};
	}, [api]);

	return (
		<section className='relative w-full overflow-hidden border-b'>
			<Carousel className='w-full' plugins={[autoplay.current]} setApi={setApi}>
				<CarouselContent>
					{heroSlides.map((slide, i) => (
						<CarouselItem key={i}>
							<div className='relative w-full aspect-square sm:aspect-video lg:aspect-[21/6]'>
								<img
									src={slide.image}
									alt={slide.title}
									className='h-full w-full object-cover'
									loading={i === 0 ? 'eager' : 'lazy'}
								/>
								{/* Gradient overlay */}
								<div className='absolute inset-0 bg-gradient-to-r from-slate-900/70 via-blue-950/50 to-transparent' />

								{/* Text container */}
								<div className='absolute inset-0 flex items-center'>
									<div className='mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8'>
										<div className='max-w-2xl text-left text-white py-8 lg:py-16'>
											<h1 className='text-4xl sm:text-7xl font-bold tracking-tight drop-shadow-lg'>
												{slide.title}
											</h1>
											<p className='mt-4 text-lg sm:text-xl text-white/80 leading-relaxed'>
												{slide.text}
											</p>
											<div className='mt-6 flex flex-wrap gap-4'>
												{slide.buttons.map((btn, j) => (
													<Button
														key={j}
														size='lg'
														variant={btn.variant as 'default' | 'outline'}
														className={
															btn.variant === 'default'
																? 'px-6 shadow-lg hover:scale-105 transition-transform'
																: 'px-6 bg-white/10 border-white/40 text-white hover:bg-white/20'
														}>
														{btn.label}
													</Button>
												))}
											</div>
										</div>
									</div>
								</div>
							</div>
						</CarouselItem>
					))}
				</CarouselContent>

				{/* Controls */}
				<CarouselPrevious className='left-4 sm:left-6 lg:left-8'>
					<ArrowLeft className='h-5 w-5' />
				</CarouselPrevious>
				<CarouselNext className='right-4 sm:right-6 lg:right-8'>
					<ArrowRight className='h-5 w-5' />
				</CarouselNext>
			</Carousel>

			{/* Rectangular Delimiters */}
			<div className='absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2'>
				{heroSlides.map((_, i) => (
					<button
						key={i}
						onClick={() => api?.scrollTo(i)}
						className={`h-1 rounded-full transition-all duration-300 ${
							current === i
								? 'w-14 bg-white shadow-md'
								: 'w-10 bg-white/40 hover:bg-white/60'
						}`}
					/>
				))}
			</div>
		</section>
	);
}
