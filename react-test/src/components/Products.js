import React, { Component } from 'react';
import Product from './common/Product';
import axios from 'axios';
import { Link } from 'react-router-dom';
import '../css/products.css';


class Products extends Component {

    state = {
        products: []
    }

    // get all the products
    getProducts = () => {
        axios.get('http://localhost:5000/products')
            .then(response => {
                if (this.mounted) {
                    this.setState({ products: response.data })
                }
            })
    }

    // remove the product with the id
    removeProduct = (id) => {
        axios.delete('http://localhost:5000/admin/products/remove/' + id)
            .then(response => response.data)
            .then((newProductList) => {
                const products = newProductList;
                this.setState({ products });
            })
    }

    componentDidMount() {
        this.mounted = true
        this.getProducts();
    }
    componentWillUnmount() {
        this.mounted = false;
    }
    
    render() {
        return (
            <div className="product-container">

                {localStorage.getItem('authorized') === 'admin' &&
                    <div className="product-item">
                        <i className="far fa-image fa-7x"></i>
                        <Link to="/admin/products/add" className="btn-custom">Add</Link>
                    </div>
                }
                {
                    this.state.products.map((el) => (


                        <Product
                            addToCart={this.props.addToCart}
                            remove={this.removeProduct}
                            key={el.id}
                            id={el.id}
                            price={el.price}
                            name={el.name}
                            url={el.url}
                        />

                    ))
                }

            </div>
        )
    }
}

export default Products;