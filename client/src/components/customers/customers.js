import React, { Component } from 'react';
import './customers.css';

class Customers extends Component {

    constructor() {

        super();

        this.state = {
            customers: []
        }
    }

    componentDidMount() {

        //  Fetch the data from "/client/package.json -> proxy" /api/customers
        fetch('/api/customers')

            //  convert result to json
            .then(res => res.json())

            //  Set the customers-array of the state to match the fetched result in json form.
            .then(customers => this.setState({customers}, () => console.log('Customers fetched...', customers)));
    }

    render() {
        return (
        <div>
            <h2>Customers</h2>
            <ul>
                {this.state.customers.map(customer =>
                    <li key={customer.id}>{ customer.firstName} { customer.lastName }</li>
                )}
            </ul>
        </div>
        );
    }
}

export default Customers;