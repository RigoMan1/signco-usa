import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from '@/components/ui/carousel';
import { ArrowLeft, ArrowRight } from 'lucide-react';

const productCards = [
	{
		title: 'Regulatory Signage',
		desc: 'Code-compliant safety & parking signs for sites and campuses.',
	},
	{
		title: 'Dimensional Letters',
		desc: 'Acrylic, metal & formed plastic letters for standout identity.',
	},
	{
		title: 'Banners',
		desc: 'Durable, full-color with hems, grommets, and pole pockets.',
	},
	{
		title: 'Plaques',
		desc: 'Cast & etched bronze, brass, aluminum and stainless options.',
	},
	{
		title: 'Storefronts',
		desc: 'Exterior branding that turns foot traffic into customers.',
	},
	{
		title: 'Vehicle Graphics',
		desc: 'High-impact advertising for solo vehicles or fleets.',
	},
	{
		title: 'Illuminated Signs',
		desc: 'Lighted solutions to boost nighttime visibility.',
	},
	{
		title: 'Digital Printing',
		desc: 'Large-format graphics for events, POP, and displays.',
	},
	{
		title: 'Portable Signage',
		desc: 'A-frames, swing frames, and roll-aways for on-the-go.',
	},
];

export default function ProductHighlightSection() {
	return (
		<section className='mx-auto max-w-7xl px-4 py-14 lg:px-8'>
			<div className='text-center'>
				<h2 className='text-2xl font-bold sm:text-3xl'>
					Full-service signage, end-to-end.
				</h2>
				<p className='mx-auto mt-2 max-w-2xl text-sm text-muted-foreground'>
					Design, fabrication, digital printing, and installation—everything
					you need to make your business stand out.
				</p>
			</div>

			<div className='mt-8'>
				<Carousel className='w-full'>
					<CarouselContent>
						{productCards.map((card, i) => (
							<CarouselItem
								key={i}
								className='basis-3/4 sm:basis-1/2 md:basis-1/3 lg:basis-1/4 xl:basis-1/5'>
								<article className='group h-full rounded-3xl border bg-card p-2 shadow-sm transition-transform hover:-translate-y-1'>
									<div className='overflow-hidden rounded-2xl bg-muted'>
										<div className='aspect-[4/5] w-full' />
									</div>
									<div className='px-2 pb-3 pt-3'>
										<h3 className='text-sm font-semibold leading-tight'>
											{card.title}
										</h3>
										<p className='mt-1 text-xs text-muted-foreground'>
											{card.desc}
										</p>
									</div>
								</article>
							</CarouselItem>
						))}
					</CarouselContent>
					<CarouselPrevious className='-left-4 hidden sm:flex'>
						<ArrowLeft className='h-4 w-4' />
					</CarouselPrevious>
					<CarouselNext className='-right-4 hidden sm:flex'>
						<ArrowRight className='h-4 w-4' />
					</CarouselNext>
				</Carousel>
			</div>
		</section>
	);
}


