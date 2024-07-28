import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch(`https://cars-pagination.onrender.com/products/${id}`)
      .then(response => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error('Failed to fetch data');
        }
      })
      .then(data => {
        setProduct(data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error:', error);
        setLoading(false);
      });
  }, [id]);
  


  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div style={{display:'flex', width:'550px', border:'1px solid black',padding:'25px', borderRadius:'15px', gap:'50px', marginLeft:'400px', marginTop:'50px'}}>
      <img style={{borderRadius:'8px'}} src={product.image || 'default-image.jpg'} alt={product.name || 'Product image'} />
      <div className="info" style={{textAlign:'center', marginTop:'35px'}}>
        <h3 style={{marginBottom:'15px'}}>Name: {product.name || 'No Name Available'}</h3> 
        <h3 style={{marginBottom:'15px'}}>ID: {product.id || 'N/a'}</h3>
        <h3 style={{marginBottom:'15px'}}>New Price: {product.newPrice || 'N/A'}</h3>
        <h3 style={{textDecoration:'line-through', marginBottom:'15px', color:'gray'}}>Old Price: {product.oldPrice || 'N/A'}</h3>
        <h3>Category: {product.category || 'N/A'}</h3>
      </div>
    </div>
  );
}

export default ProductDetails;
