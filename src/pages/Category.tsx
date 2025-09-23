import { useMemo } from 'react';
import { Link, useParams } from 'react-router-dom';
import { categories } from '@/data/categories';
import { products } from '@/data/products';

const Category = () => {
  const { categoryId } = useParams();

  const category = useMemo(() => categories.find(c => c.id === categoryId), [categoryId]);
  const items = useMemo(() => products.filter(p => p.categoryId === categoryId), [categoryId]);

  if (!category) {
    return (
      <div className="mx-auto max-w-5xl px-4 py-10">
        <h1 className="text-2xl font-semibold">Category not found</h1>
        <p className="mt-2 text-muted-foreground">We couldn't find that category.</p>
        <Link to="/" className="mt-4 inline-block text-primary underline">Go back home</Link>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-7xl px-4 py-10">
      <div className="flex items-center gap-2 text-sm text-muted-foreground">
        <Link to="/" className="hover:underline">Home</Link>
        <span>/</span>
        <span className="text-foreground">{category.name}</span>
      </div>

      <div className="mt-6">
        <h1 className="text-2xl font-bold">{category.name}</h1>
        {category.shortDescription && (
          <p className="mt-2 text-muted-foreground">{category.shortDescription}</p>
        )}
      </div>

      <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {items.map((product) => (
          <Link
            key={product.id}
            to={`/products/${product.id}`}
            className="group overflow-hidden rounded-lg border bg-card shadow-sm transition-shadow hover:shadow-md"
          >
            <div className="overflow-hidden bg-muted">
              <img
                src={product.highlightImage.src}
                alt={product.highlightImage.alt}
                className="aspect-[4/3] w-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
              />
            </div>
            <div className="p-4">
              <div className="font-semibold">{product.name}</div>
              <p className="mt-1 text-sm text-muted-foreground line-clamp-2">{product.shortDescription}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Category;


