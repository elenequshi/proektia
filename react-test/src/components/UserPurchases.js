import React, { Component } from 'react';
import axios from 'axios';
import CartProduct from './common/CartProduct';

class UserPurchases extends Component {

    state = {
        purchases: [

        ],
        purchased: true
    }

    //admin gets the products  purchased by the user
    getPurchases() {
        axios.get('http://localhost:5000/admin/users/purchases/' + this.props.match.params.id)
            .then(response => {
                this.setState({ purchases: response.data });
            })
    }
    
    componentDidMount() {
        this.getPurchases();
    }

    render() {
        return (
            <div>
                {this.state.purchases.length === 0 && <h1 className="noItems">No Items To Be Displayed</h1>}
                {this.state.purchases.length !== 0 &&
                    this.state.purchases.map((el, index) => (
                        <CartProduct
                            key={index}
                            price={el.price}
                            name={el.name}
                            url={el.url}
                            purchased={this.state.purchased}
                        />
                    ))}
            </div>
        )
    }
}


export default UserPurchases;