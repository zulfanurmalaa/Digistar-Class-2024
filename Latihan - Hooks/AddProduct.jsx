import React, { useState } from 'react';

const AddProduct = () => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    price: '',
    brand: '',
    sku: '',
    weight: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Submitted: ', formData);
  };

  return (
    <div className="form-container">
      <h1>Create New Product</h1>
      <form onSubmit={handleSubmit}>
        <label>Title:</label>
        <input
          type="text"
          name="title"
          value={formData.title}
          onChange={handleInputChange}
          required
        />

        <label>Description:</label>
        <input
          type="text"
          name="description"
          value={formData.description}
          onChange={handleInputChange}
          required
        />

        <label>Price:</label>
        <input
          type="number"
          name="price"
          value={formData.price}
          onChange={handleInputChange}
          required
        />

        <label>Brand:</label>
        <input
          type="text"
          name="brand"
          value={formData.brand}
          onChange={handleInputChange}
          required
        />

        <label>SKU:</label>
        <input
          type="text"
          name="sku"
          value={formData.sku}
          onChange={handleInputChange}
          required
        />

        <label>Weight:</label>
        <input
          type="number"
          name="weight"
          value={formData.weight}
          onChange={handleInputChange}
          required
        />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default AddProduct;

