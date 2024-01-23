import React, { useEffect, useState } from 'react'
import './ProductsUser.scss'
import { ProductHttp } from '../../../api/http-services/products.http';
import ProductsListUser from './products-list-user/products-list/ProductsListUser';
import { ProductUser } from '../../../models/entities/ProductUser';

const ProductsUser = () => {

    const [products, setProducts] = useState<ProductUser[]>([]);

    const productHttp = new ProductHttp()

    const fetchProducts = async () => {
        try {
            const response = await productHttp.getProductsUser();
            setProducts(response.data);
        } catch (error) {
            console.error('Error fetching products:', error);
        }
    };

    useEffect(() => {
        fetchProducts();
    }, []);

    return (
        <div className="page-container-user-products">
            <div className="products-container">
                <h1 className="caption">Products</h1>
                <ProductsListUser products={products} />
            </div>
        </div>
    )
}

export default ProductsUser;
