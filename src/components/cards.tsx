'use client';

import styled from 'styled-components';

interface Product {
  id: number;
  name: string;
  description: string;
  photo: string;
  price: string;
}


const Card = styled.div`
  width: 250px;
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 16px;
  margin: 16px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: box-shadow 0.3s ease;

  &:hover {
    box-shadow: 0 8px 12px rgba(0, 0, 0, 0.1);
  }
`;

const ProductImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: 8px;
  margin-bottom: 16px;
`;

const Button = styled.button`
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  padding: 8px 16px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0056b3;
  }
`;

const ProductCard: React.FC<{ product: Product }> = ({ product }) => {
  const handleAddToCart = () => {
    // Adicione aqui a lógica para adicionar o produto ao carrinho
    console.log('Produto adicionado ao carrinho:', product.name);
  };

  return (
    <Card>
      <ProductImage src={product.photo} alt={product.name} />
      <h2>{product.name}</h2>
      <p>{product.description}</p>
      <p>Price: {product.price}</p>
      <Button onClick={handleAddToCart}>Adicionar ao Carrinho</Button>
    </Card>
  );
};
export default ProductCard;
