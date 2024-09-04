import React, { Component } from 'react';
import styles from './cycle.module.css';  // Mengimport CSS module

class Products extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      products: [],
      params: {
        limit: 9,
        skip: 0,
      },
    };
  }

  async componentDidMount() {
    await this.fetchProducts(this.state.params);
  }

  async componentDidUpdate(prevProps, prevState) {
    if (this.state.params.skip !== prevState.params.skip) {
      await this.fetchProducts(this.state.params);
    }
  }

  async fetchProducts(params) {
    const { limit, skip } = params;
    try {
      this.setState({ loading: true });
      const response = await fetch(`https://dummyjson.com/products?limit=${limit}&skip=${skip}`);
      const data = await response.json();
      this.setState({ products: data.products });
    } catch (error) {
      console.log('Error fetching products:', error);
    } finally {
      this.setState({ loading: false });
    }
  }

  render() {
    return (
      <div className={styles.container}>
        <h1>Products</h1>
        {this.state.loading ? (
          <p>Loading...</p>
        ) : (
          <div className={styles.productsContainer}>
            {this.state.products.map((product, index) => (
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
            disabled={this.state.params.skip === 0}
            onClick={() =>
              this.setState((state) => ({
                params: {
                  ...state.params,
                  skip: Math.max(state.params.skip - state.params.limit, 0),
                },
              }))
            }
          >
            Prev
          </button>
          <button
            onClick={() =>
              this.setState((state) => ({
                params: {
                  ...state.params,
                  skip: state.params.skip + state.params.limit,
                },
              }))
            }
          >
            Next
          </button>
        </div>

        {/* Tambahkan tulisan di bagian bawah */}
        <footer style={{ textAlign: 'center', marginTop: '2rem', fontSize: '14px', color: '#333' }}>
          <p>Zulfa Nurmala - Hacker Front End 8</p>
        </footer>
      </div>
    );
  }
}

export default Products;