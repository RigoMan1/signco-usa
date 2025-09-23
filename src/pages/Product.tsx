import { useMemo, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { products } from '@/data/products';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { CheckCircle2 } from 'lucide-react';

const Product = () => {
	const { productId } = useParams();
	const product = useMemo(
		() => products.find((p) => p.id === productId),
		[productId],
	);

	const [mainImage, setMainImage] = useState(product?.highlightImage.src);

	if (!product) {
		return (
			<div className='mx-auto max-w-3xl px-4 py-16 text-center'>
				<h1 className='text-3xl font-bold'>Product not found</h1>
				<p className='mt-3 text-muted-foreground'>
					We couldn’t find a product with that identifier.
				</p>
				<Button asChild size='lg' className='mt-6'>
					<Link to='/'>Go back home</Link>
				</Button>
			</div>
		);
	}

	return (
		<div className='mx-auto max-w-6xl px-4 py-12'>
			{/* Breadcrumb */}
			<nav className='flex items-center gap-2 text-sm text-muted-foreground'>
				<Link to='/' className='hover:underline'>
					Home
				</Link>
				<span>/</span>
				<span className='text-foreground'>{product.name}</span>
			</nav>

			{/* Layout */}
			<div className='mt-10 grid gap-10 md:grid-cols-2'>
				{/* Image Gallery */}
				<div>
					<Card className='overflow-hidden rounded-2xl shadow-md aspect-square'>
						<img
							src={mainImage}
							alt={product.highlightImage.alt}
							className='h-full w-full object-cover transition-transform duration-500 hover:scale-105'
						/>
					</Card>

					{/* Thumbnails */}
					<div className='mt-4 grid grid-cols-4 gap-3'>
						{[product.highlightImage, ...(product.gallery ?? [])]
							.slice(0, 4)
							.map((img, i) => (
								<button
									key={i}
									onClick={() => setMainImage(img.src)}
									className={`overflow-hidden rounded-lg border transition-all duration-300 ${
										mainImage === img.src
											? 'ring-2 ring-primary'
											: 'hover:opacity-75'
									}`}>
									<img
										src={img.src}
										alt={img.alt}
										className='h-20 w-full object-cover'
									/>
								</button>
							))}
					</div>
				</div>

				{/* Product Info */}
				<div>
					<h1 className='text-4xl font-bold tracking-tight'>{product.name}</h1>
					<p className='mt-4 text-lg text-muted-foreground leading-relaxed'>
						{product.shortDescription}
					</p>

					{/* Primary CTAs kept simple */}
					<div className='mt-6 flex flex-wrap gap-4'>
						<Button size='lg'>Request Quote</Button>
						<Button size='lg' variant='outline'>
							Call Now
						</Button>
					</div>

					<Separator className='my-6' />

					{/* Tabs for content disclosure */}
					<Tabs defaultValue='overview' className='w-full'>
						<TabsList className='grid grid-cols-3 max-w-md'>
							<TabsTrigger value='overview'>Overview</TabsTrigger>
							<TabsTrigger value='benefits'>Benefits</TabsTrigger>
							<TabsTrigger value='specs'>Specifications</TabsTrigger>
						</TabsList>

						<TabsContent value='overview' className='mt-4'>
							<p className='text-sm leading-relaxed text-muted-foreground'>
								{product.longDescription}
							</p>
						</TabsContent>

						{product.benefits && (
							<TabsContent value='benefits' className='mt-4'>
								<ul className='space-y-3'>
									{product.benefits.map((b, i) => (
										<li
											key={i}
											className='flex items-start gap-2 text-sm text-muted-foreground'>
											<CheckCircle2 className='h-5 w-5 text-primary shrink-0' />
											{b}
										</li>
									))}
								</ul>
							</TabsContent>
						)}

						{product.specifications && (
							<TabsContent value='specs' className='mt-4'>
								<ul className='list-inside list-disc space-y-2 text-sm text-muted-foreground'>
									{product.specifications.map((s, i) => (
										<li key={i}>{s}</li>
									))}
								</ul>
							</TabsContent>
						)}
					</Tabs>
				</div>
			</div>
		</div>
	);
};

export default Product;
