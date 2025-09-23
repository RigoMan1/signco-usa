import ServiceHighlightsBar from '@/components/sections/HeroServiceHighlights';
import ProductHighlightSection from '@/components/sections/ProductHighlightSection';
import HeroCarousel from '@/components/sections/HeroCarousel';
import Header from '@/components/sections/Header';

export default function MooInspiredPage() {
	return (
		<div className='bg-background text-foreground'>
			{/* HEADER */}
			<Header />

			{/* HERO */}
			<section className='relative isolate overflow-hidden border-b'>
				<HeroCarousel />

				<ServiceHighlightsBar />
			</section>

			<ProductHighlightSection />
		</div>
	);
}
