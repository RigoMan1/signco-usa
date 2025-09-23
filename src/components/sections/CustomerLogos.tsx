import { Separator } from '@/components/ui/separator';
import SectionHeader from '@/components/SectionHeader';

const CustomerLogos = () => {
	return (
		<section
			aria-labelledby='customer-logos-heading'
			className='bg-white py-16 lg:py-24'>
			<div className='mx-auto max-w-6xl px-6 lg:px-8'>
				{/* Header */}
				<SectionHeader
					title='Trusted by Industry-Leading Teams'
					text='SignCo partners with innovative brands who value quality, design, and customer-first service.'
				/>

				{/* Decorative Separator */}
				<Separator className='mx-auto mt-8 w-28 bg-gray-200' />

				{/* Logos Section */}
				<div
					className='mt-12 flex items-center justify-center'
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6, ease: 'easeOut' }}>
					<img
						src='/images/signco-customer-logos.webp'
						alt='A showcase of customer logos that trust SignCo'
						className='block w-full max-w-5xl select-none opacity-95 drop-shadow-sm'
						draggable={false}
					/>
				</div>

				{/* Supporting Text */}
				<p className='mt-10 text-center max-w-3xl mx-auto text-base text-gray-600 leading-relaxed'>
					From concept design to manufacturing and installation, SignCo USA
					delivers a seamless experience—helping businesses stand out with
					premium signage built to last.
				</p>
			</div>
		</section>
	);
};

export default CustomerLogos;
