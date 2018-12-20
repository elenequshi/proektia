import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import '../css/navigation.css';
import { Input } from '../../node_modules/antd';

const URL = 'http://localhost:5000/products';



class Navigation extends Component {
    state = {
       products:[

       ]
    }
   
    
    logOut = () => {
        this.props.showLogin(true);
        this.props.showAdmin(false);
        localStorage.removeItem('authorized');
    }
    change = (e) =>{
        this.state.products.forEach(el=>{
            if(e.target.value === el.name){
                this.props.history.push('/products/' + el.id)
                e.target.value=''
            }
        })
    }
    getProducts = () => {
    axios.get('http://localhost:5000/products')
    .then(response => {
       this.setState({products:response.data})
    })
  }
  componentDidMount() {
    this.getProducts()
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
                      <form onSubmit={(e) => e.preventDefault()}>
                      <Input
                      onChange={this.change}
                      list="products"
                      type="text"
                      placeholder="search"/>
                      <datalist id="products">
                      {this.state.products.map(el =>{
                          return <option key={el.id} value={el.name}/>
                      })}
                      </datalist>
                      </form>
                        </div>




                    </div>
                </div>

            </div>

        )
    }
}

export default Navigation;