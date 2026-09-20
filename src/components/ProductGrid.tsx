import { Container, SimpleGrid } from '@mantine/core';
import type { Product } from './data';
import ProductCard from './ProductCard';

type Props = {
  id?: string;
  products: Product[];
  liked: number[];
  onLike: (id: number) => void;
  onAdd: (p: Product) => void;
  onView: (p: Product) => void;
};

export default function ProductGrid({
  id,
  products,
  liked,
  onLike,
  onAdd,
  onView,
}: Props) {
  return (
    <section
      id={id}
      style={{
        padding: '10px 0 45px',
        background: '#fff',
      }}
    >
      <Container
        size="xl"
        style={{
          paddingLeft: 32,
          paddingRight: 32,
        }}
      >
        <SimpleGrid
          cols={{
            base: 1,
            xs: 2,
            md: 3,
          }}
          spacing={{
            base: 28,
            sm: 34,
            md: 42,
          }}
          verticalSpacing={{
            base: 48,
            sm: 52,
            md: 58,
          }}
        >
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              liked={liked.includes(product.id)}
              onLike={() => onLike(product.id)}
              onAdd={() => onAdd(product)}
              onView={() => onView(product)}
            />
          ))}
        </SimpleGrid>
      </Container>
    </section>
  );
}