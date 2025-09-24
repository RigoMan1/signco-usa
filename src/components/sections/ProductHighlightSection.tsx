import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from '@/components/ui/carousel';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import SectionHeader from '@/components/SectionHeader';
import { products } from '@/data/products';

// Utility to shuffle an array (Fisher-Yates)
function shuffleArray<T>(array: T[]): T[] {
	const copy = [...array];
	for (let i = copy.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));
		[copy[i], copy[j]] = [copy[j], copy[i]];
	}
	return copy;
}

// Pick 10 random products
const featuredProducts = shuffleArray(products).slice(0, 10);

export default function ProductHighlightSection() {
	return (
		<section className='mx-auto max-w-[90vw] px-4 py-14 lg:px-8'>
			<SectionHeader
				title='Full-service signage, end-to-end.'
				text='Design, fabrication, digital printing, and installation—everything you
					need to make your business stand out.'
			/>

			<div className='mt-14'>
				<Carousel className='w-full'>
					<CarouselContent>
						{featuredProducts.map((product) => (
							<CarouselItem
								key={product.id}
								className='basis-3/4 sm:basis-1/2 md:basis-1/3 lg:basis-1/4 xl:basis-1/5'>
								<article className='bg-yellow-400 h-full rounded-3xl border bg-card p-1 shadow-sm'>
									<div className='overflow-hidden rounded-2xl bg-muted'>
										<div className='aspect-square w-full'>
											<img
												src={product.highlightImage?.src || '/placeholder.svg'}
												alt={product.highlightImage?.alt || product.name}
												className='h-full w-full object-cover object-center'
											/>
										</div>
									</div>

									<div className='px-2 pb-3 pt-4 flex justify-between items-end gap-4'>
										<div className='h-full'>
											<h3 className='text-base font-semibold leading-snug'>
												{product.name}
											</h3>
											<p className='mt-2 text-sm line-clamp-2'>
												{product.shortDescription}
											</p>
										</div>

										<div className='mt-3 flex justify-end'>
											<a
												href={`/products/${product.slug ?? product.id}`}
												aria-label={`View ${product.name}`}
												className='inline-flex h-8 w-8 items-center justify-center rounded-full bg-primary text-white'>
												<ArrowRight className='h-4 w-4' />
											</a>
										</div>
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
