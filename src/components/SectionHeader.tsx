export default function SectionHeader({ title, text }) {
	return (
		<div className='text-center'>
			<h2
				id='section-header-heading'
				className='text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl'>
				{title}
			</h2>
			<p className='mt-3 max-w-2xl mx-auto text-lg text-gray-600'>{text}</p>
		</div>
	);
}
