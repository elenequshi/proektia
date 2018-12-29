import React, { Component } from 'react';
import axios from 'axios';
import '../../css/details.css';


class ProductDetails extends Component {

    state = {
        data: localStorage.getItem('authorized'),
        productId: this.props.match.params.id,
        product: {

        },

    };


    //this functions fetches a single product with the unique id
    getProduct = () => {
        axios.get('http://localhost:5000/products/' + this.props.match.params.id)
            .then(response => {
                this.setState({ product: response.data })
            })
    }


    // this function adds a product into the user's cart
    addToCart(details) {
        axios.post('http://localhost:5000/addtocart', details)
            .then(response => {
            })
        this.props.history.push("/profile");
    }

    componentDidMount() {
        this.getProduct();
    }

    render() {


        return (

            <div className="details">
                <img src={this.state.product.url} alt="" className="details-image" />
                <div className="details-text">
                    <h2 className="details-name">{this.state.product.name}</h2>
                    <h3 className="details-price">${this.state.product.price}</h3>
                    <hr />
                    <p className="details-description">{this.state.product.desc} {this.state.product.desc} {this.state.product.desc}</p>

                </div>

            </div>

        )
    }
}

export default ProductDetails;