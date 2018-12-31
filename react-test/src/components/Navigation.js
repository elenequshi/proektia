import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import '../css/navigation.css';



class Navigation extends Component {
    state = {
        products: [

        ]
    }

    // removes the username from the localstorage after log out
    logOut = () => {
        localStorage.removeItem('authorized');
    }

    //searches the product when the user types its name
    getSearch = (name) => {
        axios.get('http://localhost:5000/search/' + name)
            .then(response => {
                this.setState({ products: response.data })
            })
    }

    // get the selected product when the user clicks the search icon
    getProduct = (name) => {
        axios.get('http://localhost:5000/search/product/' + name)
            .then(response => {
                if (response.data) {
                    this.props.history.push('/')
                    this.props.history.push('/products/' + response.data)
                }

            })
    }

    // resets the value of the search input field to the empty string after the end of the search
    change = (e) => {
        if (e.target.value !== '') {
            this.getSearch(e.target.value);
        }
    }

    onSubmit = (e) => {
        e.preventDefault();
        let name = e.target.children[0].value;
        this.getProduct(name);
        e.target.children[0].value = '';
    }
    
    render() {
        return (

            <div className="navigation">
                <div className="container">

                    <div className="header-left">
                        <ul className="memenu">
                            <li className="active">
                                <Link to='/'>Home</Link>
                            </li>
                            {!localStorage.getItem('authorized') &&
                                <li className="grid">
                                    <Link to='/login'>Login</Link>
                                </li>
                            }
                            {!localStorage.getItem('authorized') &&
                                <li className="grid">
                                    <Link to='/register'>Registration</Link>
                                </li>
                            }
                            {localStorage.getItem('authorized') &&
                                localStorage.getItem('authorized') !== 'admin' &&
                                <li className="grid">
                                    <Link to='/profile'>Profile</Link>
                                </li>
                            }
                            {localStorage.getItem('authorized') &&
                                localStorage.getItem('authorized') === 'admin' &&
                                <li className="grid">
                                    <Link to='/admin'>Admin</Link>
                                </li>
                            }
                            <li className="grid">
                                <Link to='/about'>About Us</Link>
                            </li>
                            {localStorage.getItem('authorized') &&
                                <li className="grid">
                                    <Link to='/' onClick={this.logOut}>Log Out</Link>
                                </li>
                            }

                        </ul>
                    </div>

                    <div className="header-right">
                        <div className="search-bar">
                            <form onSubmit={this.onSubmit}>
                                <input className="searchInput"
                                    onChange={this.change}
                                    name="search"
                                    list="products"
                                    type="text"
                                    placeholder="search" />
                                <datalist id="products">
                                    {this.state.products.map(el => {
                                        return <option key={el.id} value={el.name} />
                                    })}
                                </datalist>
                                <button className="searchBtn"> <i className="fas fa-search"></i>  </button>
                            </form>
                        </div>




                    </div>
                </div>

            </div>

        )
    }
}

export default Navigation;