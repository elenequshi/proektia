import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import '../css/navigation.css';

const URL = 'http://localhost:5000/products';



class Navigation extends Component {
    state = {
        name: '',
        items: []
    }

    getInfo = () => {
        axios.get(URL)
            .then(data => {
                this.setState({ items: data.data })
            })
    }

    suggestions = () => {
        const options = this.state.items.map(item => (
            <li key={item.id}>
                {item.name}
            </li>
        ))
        return <ul>{options}</ul>
    }



    handleInputChange = () => {
        this.setState({
            name: this.search.value
        }, () => {
            if (this.state.name && this.state.name.length > 1) {
                this.getInfo()

            }
            else if (!this.state.name) {
            }

        })

    }

    logOut = () => {
        this.props.showLogin(true)
        this.props.showAdmin(false)
        localStorage.removeItem('authorized')
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
                            {this.props.showLog &&
                                !this.props.admin &&
                                <li className="grid">
                                    <Link to='/login'>Login</Link>
                                </li>
                            }
                            {this.props.showLog &&
                                !this.props.admin &&
                                <li className="grid">
                                    <Link to='/register'>Registration</Link>
                                </li>
                            }
                            {!this.props.showLog &&
                                !this.props.admin &&
                                <li className="grid">
                                    <Link to='/profile'>Profile</Link>
                                </li>
                            }
                            {this.props.showLog &&
                                this.props.admin &&
                                <li className="grid">
                                    <Link to='/admin'>Admin</Link>
                                </li>
                            }
                            <li className="grid">
                                <Link to='/'>About Us</Link>
                            </li>
                            {(!this.props.showLog || this.props.admin) &&
                                <li className="grid">
                                    <Link to='/' onClick={this.logOut}>Log Out</Link>
                                </li>
                            }

                        </ul>
                    </div>

                    <div className="header-right">
                        <div className="search-bar">
                        
                            <form onSubmit={this.handleInputChange}>

                                <input type="text" placeholder="search" className="searchInput" />
                                <input type="submit" className="searchBtn" value="Search" />
                                {/* <Suggestions items={this.state.items} /> */}
                                {this.suggestions()}

                            </form>
                        </div>




                    </div>
                </div>

            </div>

        )
    }
}

export default Navigation;