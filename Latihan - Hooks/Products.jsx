import React, { useState, useEffect } from 'react';
import styles from './cycle.module.css';
import { Link } from 'react-router-dom'; // Import Link untuk navigasi

const Products = () => {
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);
  const [params, setParams] = useState({
    limit: 9,
    skip: 0,
  });

  useEffect(() => {
    const fetchProducts = async () => {
      const { limit, skip } = params;
      try {
        setLoading(true);
        const response = await fetch(`https://dummyjson.com/products?limit=${limit}&skip=${skip}`);
        const data = await response.json();
        setProducts(data.products);
      } catch (error) {
        console.log('Error fetching products:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [params]); // fetchProducts dijalankan setiap kali params berubah

  return (
    <div className={styles.container}>
      <h1>Products</h1>

      {/* Tambahkan tombol di bawah judul */}
      <div style={{ textAlign: 'right', marginBottom: '1rem' }}>
        <Link to="/products/add">
          <button
            style={{
              padding: '0.75rem 1.5rem',
              backgroundColor: '#4CAF50',
              color: 'white',
              border: 'none',
              borderRadius: '8px',
              cursor: 'pointer',
            }}
          >
            Create New Product
          </button>
        </Link>
      </div>

      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className={styles.productsContainer}>
          {products.map((product, index) => (
            <div key={index} className={styles.productsItem}>
              <img
                className={styles.productsItemCover}
                src={product.thumbnail}
                alt={product.title}
              />
              <p>{product.title}</p>
            </div>
          ))}
        </div>
      )}

      <div className={styles.paginationContainer}>
        <button
          disabled={params.skip === 0}
          onClick={() =>
            setParams((prev) => ({
              ...prev,
              skip: Math.max(prev.skip - prev.limit, 0),
            }))
          }
        >
          Prev
        </button>
        <button
          onClick={() =>
            setParams((prev) => ({
              ...prev,
              skip: prev.skip + prev.limit,
            }))
          }
        >
          Next
        </button>
      </div>

      <footer style={{ textAlign: 'center', marginTop: '2rem', fontSize: '14px', color: '#333' }}>
        <p>Zulfa Nurmala - Hacker Front End 8</p>
      </footer>
    </div>
  );
};

export default Products;

