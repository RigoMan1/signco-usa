import * as React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';

export type IntermediarySectionProps = {
	className?: string;
	onPrimaryAction?: () => void;
	primaryCtaLabel?: string;
	secondaryCtaHref?: string;
	secondaryCtaLabel?: string;
};

export default function IntermediarySection({
	className,
	onPrimaryAction,
	primaryCtaLabel = 'Request Free Estimate',
	secondaryCtaHref,
	secondaryCtaLabel = 'Book an On-Site Survey',
}: IntermediarySectionProps) {
	const wrapper = [
		'relative left-1/2 right-1/2 ml-[-50vw] mr-[-50vw] w-screen border bg-gray-50',
		'md:rounded-none',
		className,
	]
		.filter(Boolean)
		.join(' ');

	return (
		<section aria-labelledby='services_title' className={wrapper}>
			<div className='mx-auto max-w-7xl px-4 py-14 lg:px-8 space-y-12'>
				{/* Header */}
				<div className='max-w-3xl'>
					{/* <p className='text-sm uppercase tracking-widest text-gray-600'>
						Services
					</p> */}
					<h2
						id='services_title'
						className='mt-2 text-3xl font-semibold leading-tight md:text-4xl'>
						Free estimates, surveys & installation
					</h2>
					<p className='mt-3 text-base leading-relaxed text-gray-700 md:text-lg'>
						Keep momentum after choosing a product. Get pricing clarity, confirm
						specs on-site, and have everything installed by a trained team.
					</p>
				</div>

				{/* Panels side by side */}
				<div className='grid gap-6 md:grid-cols-2'>
					<Card className='border-gray-200 bg-white'>
						<CardHeader className='p-6'>
							<CardTitle className='text-lg font-semibold md:text-xl'>
								01 — Free Estimates & On-Site Surveys
							</CardTitle>
						</CardHeader>
						<CardContent className='p-6 pt-0 text-base leading-7 text-gray-700'>
							We know every project is different, so we start by coming out to
							your location. Our team will measure, review your space, and talk
							through options so you get clear pricing before anything is made.
							No guesswork — just straightforward advice to help you choose the
							right sign for your business.
						</CardContent>
					</Card>

					<Card className='border-gray-200 bg-white'>
						<CardHeader className='p-6'>
							<CardTitle className='text-lg font-semibold md:text-xl'>
								02 — Complete Installation Service
							</CardTitle>
						</CardHeader>
						<CardContent className='p-6 pt-0 text-base leading-7 text-gray-700'>
							From storefront signs to interior graphics, our installers make
							sure your project is set up safely and securely. Whether it’s a
							single banner or a full set of dimensional letters, we’ll handle
							the heavy lifting so your signs look professional and last for
							years to come.
						</CardContent>
					</Card>
				</div>

				<Separator className='bg-gray-200' />

				{/* Footer row with CTAs + reassurance points */}
				<div className='flex flex-col gap-6 md:flex-row md:items-center md:justify-between'>
					<div className='flex flex-wrap gap-3'>
						<Button
							type='button'
							onClick={onPrimaryAction}
							className='bg-primary text-white'>
							{primaryCtaLabel}
						</Button>

						{secondaryCtaHref ? (
							<a
								href={secondaryCtaHref}
								className='inline-flex items-center justify-center rounded-md border border-gray-300 bg-transparent px-4 py-2 text-sm font-medium text-gray-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-500'>
								{secondaryCtaLabel}
							</a>
						) : null}
					</div>

					<span className='text-sm text-gray-600'>
						Professional installation you can trust.
					</span>
				</div>
			</div>
		</section>
	);
}
