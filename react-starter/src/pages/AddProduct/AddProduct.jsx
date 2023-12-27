import React, { useState } from 'react';
import axios from 'axios';

export default function AddProduct() {
  const [newProduct, setNewProduct] = useState({
    title: '',
    description: '',
    brand: '',
    category: '',
    discountPercentage: '',
    id: 0,
    images: [],
    price: 0,
    rating: 0,
    stock: 0,
    thumbnail: '',
  });

  const handleImageChange = (e) => {
    const files = e.target.files;
    const imagesArray = Array.from(files).map((file) => URL.createObjectURL(file));
    setNewProduct({
      ...newProduct,
      images: imagesArray,
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewProduct({
      ...newProduct,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('https://api.example.com/products', newProduct);
      console.log('Ekleme işlemi başarılı:', response);
      // Ekleme işlemi başarılı olduysa ek işlemler yapılabilir
    } catch (error) {
      console.error('Ekleme işlemi hatası:', error);
      // Hata durumunda kullanıcıya bir bildirim gösterilebilir
    }
  };

  return (
    <div className="container mt-5">
      <h2 className="mb-4">Yeni Ürün Ekle</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">Başlık:</label>
          <input
            type="text"
            className="form-control"
            id="title"
            name="title"
            value={newProduct.title}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="description" className="form-label">Açıklama:</label>
          <textarea
            className="form-control"
            id="description"
            name="description"
            value={newProduct.description}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="brand" className="form-label">Marka:</label>
          <input
            type="text"
            className="form-control"
            id="brand"
            name="brand"
            value={newProduct.brand}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="category" className="form-label">Kategori:</label>
          <input
            type="text"
            className="form-control"
            id="category"
            name="category"
            value={newProduct.category}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="price" className="form-label">Fiyat:</label>
          <input
            type="text"
            className="form-control"
            id="price"
            name="price"
            value={newProduct.price}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="thumbnail" className="form-label">Ürün Resmi:</label>
          <input
            type="file"
            className="form-control"
            id="thumbnail"
            name="thumbnail"
            onChange={handleImageChange}
            multiple
          />
        </div>
        <button type="submit" className="btn btn-primary">Ekle</button>
      </form>
      {newProduct.images.map((image, index) => (
        <img key={index} src={image} alt={`Product Image ${index}`} className="mt-3" style={{ maxWidth: '150px' }} />
      ))}
    </div>
  );
}
