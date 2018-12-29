import React from 'react';
import axios from 'axios';
import Form from './common/form';
import Joi from 'joi-browser';
import '../css/contact.css';


class Contact extends Form {

    state = {};

    state = {
        data: {
            name: "",
            phone: "",
            email: "",
            message: "",
        },
        errors: {},
        animation: false,
        display:'hide'
    }
    // validation of the input data
    schema = {
        name: Joi.string()
            .required()
            .label('Name'),
        phone: Joi.number()
            .required()
            .label("Phone"),
        email: Joi.string()
            .email()
            .required()
            .label("Email"),
        message: Joi.string()
            .required()
            .label("Message")
    }
    // add the message sent by the user to the admin in the user's message box
    addMessage = (newMessage) => {
        axios.post('http://localhost:5000/message', newMessage)
    }
    // sned the message when the user clicks the submit button
    doSubmit = () => {
        const data = localStorage.getItem('authorized');
        const message = this.state.data.message;
        this.addMessage({ message, data });
        this.setState({animation:true})
        setTimeout(() => this.setState({display:"show"}), 500)
    }

 generateClass = () => {
    return this.state.animation ? " slide-out-top" : "";

 }
 display = () =>{
     return this.state.display;
 }

 

    render() {
        return (
            <div className="contact--container">
                <div className="contact--container__head">
                    <h2>CONTACT</h2>
                </div>
                <div className="contact--container__body">
                    <div className="left--container">
                        <div className="left--container__address">
                            <div>
                                <h4>Address</h4><br />
                                The company name <br />
                                lorem inpsum dolor<br />
                                Glasgow Dr, 140
						</div>
                        </div>
                        <div className="left--container__address1">
                            <div>
                                <h4>Address1</h4> <br />
                                Tel:1117770001, <br />
                                Fax:190-4509-494 <br />
                                Email: contact@example.com
						</div>
                        </div>
                    </div>
                    
            
                    <div className = "right--container">
                    <h2 className={this.display()}>Thanks for feedback!</h2> 
                        <form onSubmit={this.handleSubmit} className={this.generateClass()}>
                            <div className="right--container__item1">
                                {this.renderInput("name", "Name")}
                                {this.renderInput("phone", "Phone")}
                                {this.renderInput("email", "Email")}
                            </div>
                            <div className="right--container__item2">
                                {this.renderTextArea("message", "Message")}
                            </div>
                            <div className="right--container__item3">
                                {this.renderButton("Submit")}
                            </div>

                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default Contact;