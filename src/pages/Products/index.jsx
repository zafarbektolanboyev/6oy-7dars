import React, { useState, useEffect } from 'react';
import Card from '../../components/Card';

function Products({ category }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch(`https://cars-pagination.onrender.com/products/category?/category=${category}`)
      .then(res => res.json())
      .then(data => {
        if (category) {
          const filteredProducts = data.filter(product => product.category === category);
          setProducts(filteredProducts);
        } else {
          setProducts(data);
        }
      })
      .catch(error => console.error('Error fetching data:', error));
  }, [category]);

  return (
    <div>
      <Card></Card>
    </div>
  );
}

export default Products;
