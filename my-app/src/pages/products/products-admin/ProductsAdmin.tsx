import React, { useEffect, useState } from 'react'
import ProductsList from './products-list-admin/products-list/ProductsList'
import { ProductHttp } from '../../../api/http-services/products.http';
import { ProductAdmin } from '../../../models/entities/ProductAdmin';
import './ProductsAdmin.scss'
import Modal from '../../../components/popup/Modal';
import { Button } from '@mui/material';
import AddForm from './products-list-admin/product-card/product-options/AddForm';
import { useModalContext } from '../../../components/popup/modal-context/ModalContext';

const ProductsAdmin = () => {

const [products,setProducts] = useState<ProductAdmin[]>([]);

const productHttp = new ProductHttp()
const {open} = useModalContext();

function handleOpen() {
  open(<AddForm onAdd={addProduct} />);
}

const fetchProducts = async () => {
    try {
      const response = await productHttp.getProductsAdmin();
      setProducts(response.data); 
    } catch (error) {
      console.error('Error fetching products:', error);
    }
};

const deleteProduct = (id:number) => {
    const pr = products.filter((p) => p.id!==id);
    setProducts(pr);
}

const addProduct = (newProduct:ProductAdmin) => {
  setProducts([...products, newProduct]);
}

useEffect(() => {
    fetchProducts();
}, []);

  return (
    <>
    <div className="page-container">
      <div className="products-container">
          <h1 className="caption">All products</h1>
          <Button onClick={handleOpen} style={{backgroundColor:'rgb(214, 129, 1)'}}className="add-btn" variant="contained" color="primary">
            Add
          </Button>
          <ProductsList products={products} onEdit={fetchProducts} onDelete={deleteProduct}/>
      </div>
    </div>
    </>
  )
}

export default ProductsAdmin
