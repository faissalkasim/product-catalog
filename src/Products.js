import React, { Component } from 'react';
import ProductFilter from './Components/ProductFilter/ProductFilter';
import ProductList from './Components/ProductList/ProductList';
import ProductForm from './Components/ProductForm/ProductForm';

const PRODUCTS = {
    '1': {id: 1, category: 'Musical Instruments', price: '$900.34', stocked: true, name: 'Clarinet'},
    '2': {id: 2, category: 'Musical Instruments', price: '$900', stocked: true, name: 'Harpsicord'},
    '3': {id: 3, category: 'Musical Instruments', price: '$110', stocked: false, name: 'Fortepiano'},
    '4': {id: 4, category: 'Musical Instruments', price: '$400', stocked: false, name: 'Afortepiano'},
    '5': {id: 5, category: 'Musical Instruments', price: '$800', stocked: false, name: 'Bfortepiano'}
};

class Products extends Component {
    constructor (props) {
        super(props);
        this.state = {
            inputFilter: '',
            inStockOnly: false,
            products: PRODUCTS
        };
    }

    handleFilter = (filter) => {
        this.setState(filter);
    }

    addProduct = (product) => {
        this.setState( (prevState) => {
            let products = prevState.products;
            let productId = Object.keys(products).length + 1;
            product.id = productId;
            products[productId] = product;
            return { products };
        });
    }

    deleteProduct = (id) => {
        this.setState((prevState) => {
            let products = prevState.products;
            delete products[id];
            return { products };
        });
    }
    
    render() {
        return (
            <div>
            <ProductFilter 
                onFilter={this.handleFilter} 
            />
            <ProductList 
                products={this.state.products}
                inputFilter={this.state.inputFilter} 
                inStockOnly={this.state.inStockOnly}
                deleteProduct={this.deleteProduct}
                />
            <ProductForm 
                addProduct={this.addProduct}
            />
            </div>
        );
    }
}

export default Products;
