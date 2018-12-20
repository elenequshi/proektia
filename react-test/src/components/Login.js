import { BrowserRouter,browserHistory, Router, Link, Route, Redirect } from 'react-router-dom';
import axios from 'axios'
import React from 'react'
import Joi from "joi-browser";
import Form from "./common/form";
import "../css/form.css"

class Login extends Form {
    state = {
        data: {
            username: "",
            password:"",
        },
        errors: {}
    }

    schema ={
        _id: Joi.string(),
        username: Joi.string()
           .required()
           .label('Username'),
        password: Joi.string()
           .required()
           .label("Password"),
    }

    
    login = (user) => {
        axios.post('http://localhost:5000/login', user)
        .then(response => response.data)
        .then(result => {
            if( result.auth ){
                localStorage.setItem('authorized', result.username);
                const username = localStorage.getItem('authorized')
                if(username === 'admin'){
                    this.props.showAdmin(true)
                    this.props.history.replace("/admin")
                }else{
                    this.props.showLogin(false)
                    this.props.history.replace("/profile")
                }
            }
            else {
                localStorage.removeItem('authorized');
            }

        })
        .catch(err => console.log(err))
    }


    doSubmit = () => {
        // saveMovie(this.state.data)
        const data = this.state.data
        const username= data.username
        const password = data.password
        this.login({username,password})
        // this.props.register(data)

        // this.props.history.replace("/profile")
        // <Redirect to={`/`} />
        // return (<Redirect to={`/`} />) 
    }

   

    render() {
        return (
            <div className="container-div">
              <h1 className="main-title">Login</h1>
              <form className="main-form" onSubmit={this.handleSubmit}>
              {this.renderInput("username", "Username")}
              {this.renderInput("password", "Password", "password")}
              {this.renderButton("Login")}
              </form>
             </div>
             
        )
        }
    }

export default Login;