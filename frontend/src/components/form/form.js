import React, { Component } from 'react';
import './Form.css';

class Form extends Component {
    constructor(props) {
        super(props);

        this.state = {value: ''}
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    handleSubmit(event) {
        alert('A name was submitted: ' + this.state.value);
        event.preventDefault();
    }
   
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <h1>Form Title</h1>
                <label>
                    <input type="text" placeholder="name" vlaue={this.state.value} onChange={this.handleChange} />
                </label>
                <input className="submit" type="submit" value="submit"/>
            </form>
        );
    }
}

export default Form;
