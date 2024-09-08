import React, { useState } from 'react';

const CreateProduct = () => {
  const [form, setForm] = useState({
    title: '',
    description: '',
    price: '',
    brand: '',
    sku: '',
    weight: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Mencegah reload halaman
    console.log(form); // Tampilkan isi form di console
    // Lakukan tindakan yang diperlukan setelah submit form
  };

  return (
    <div style={{ padding: '2rem', maxWidth: '400px', margin: 'auto', fontFamily: 'Arial, sans-serif' }}>
      <h1 style={{ textAlign: 'center', fontFamily: "'Poppins', sans-serif", fontSize: '2rem', marginBottom: '1.5rem' }}>
        Create New Product
      </h1>
      
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        <div>
          <label style={{ fontSize: '1rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>Title:</label>
          <input
            type="text"
            name="title"
            value={form.title}
            onChange={handleChange}
            required
            style={{
              width: '100%',
              padding: '0.75rem',
              borderRadius: '6px',
              border: '1px solid #ccc',
              boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
            }}
          />
        </div>
        
        <div>
          <label style={{ fontSize: '1rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>Description:</label>
          <input
            type="text"
            name="description"
            value={form.description}
            onChange={handleChange}
            required
            style={{
              width: '100%',
              padding: '0.75rem',
              borderRadius: '6px',
              border: '1px solid #ccc',
              boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
            }}
          />
        </div>
        
        <div>
          <label style={{ fontSize: '1rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>Price:</label>
          <input
            type="number"
            name="price"
            value={form.price}
            onChange={handleChange}
            required
            style={{
              width: '100%',
              padding: '0.75rem',
              borderRadius: '6px',
              border: '1px solid #ccc',
              boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
            }}
          />
        </div>
        
        <div>
          <label style={{ fontSize: '1rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>Brand:</label>
          <input
            type="text"
            name="brand"
            value={form.brand}
            onChange={handleChange}
            required
            style={{
              width: '100%',
              padding: '0.75rem',
              borderRadius: '6px',
              border: '1px solid #ccc',
              boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
            }}
          />
        </div>
        
        <div>
          <label style={{ fontSize: '1rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>SKU:</label>
          <input
            type="text"
            name="sku"
            value={form.sku}
            onChange={handleChange}
            required
            style={{
              width: '100%',
              padding: '0.75rem',
              borderRadius: '6px',
              border: '1px solid #ccc',
              boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
            }}
          />
        </div>
        
        <div>
          <label style={{ fontSize: '1rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>Weight:</label>
          <input
            type="number"
            name="weight"
            value={form.weight}
            onChange={handleChange}
            required
            style={{
              width: '100%',
              padding: '0.75rem',
              borderRadius: '6px',
              border: '1px solid #ccc',
              boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
            }}
          />
        </div>

        <button
          type="submit"
          style={{
            marginTop: '1rem',
            padding: '0.75rem',
            backgroundColor: '#4CAF50',
            color: 'white',
            border: 'none',
            borderRadius: '8px',
            cursor: 'pointer',
            boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
            fontSize: '1rem',
            transition: 'background-color 0.3s ease',
          }}
          onMouseOver={(e) => (e.target.style.backgroundColor = '#45a049')}
          onMouseOut={(e) => (e.target.style.backgroundColor = '#4CAF50')}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default CreateProduct;


