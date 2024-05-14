'use client';

import { useEffect, useState } from 'react';
import ProductCard from '@/components/cards';
import styled from 'styled-components';

type Produto = {
  id: number;
  name: string;
  price: string;
  brand: string;
  description: string;
  photo: string;
};

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

export default function Home() {
  const [products, setProducts] = useState<Produto[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        'https://mks-frontend-challenge-04811e8151e6.herokuapp.com/api/v1/products?page=1&rows=5&sortBy=id&orderBy=DESC',
      );
      const data = await response.json();
      setProducts(data.products);
    };

    fetchData();
  }, []);

  return (
    <Container>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </Container>
  );
}
