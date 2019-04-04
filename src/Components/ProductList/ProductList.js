import React, {Component} from 'react';
import ProductListHeader from './ProductListHeader/ProductListHeader';
import { withStyles } from '@material-ui/core/styles';
import ProductRow from './ProductRow/ProductRow';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

const styles = theme => ({
    table: {
      minWidth: 'auto',
      background: '#f9f9f9'
    },
  });

class ProductList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            sortColumn: 'name',
            sortDirection: 'asc'
        };
    }
    
    deleteProduct = (id) => {
        this.props.deleteProduct(id);
    }

    handleSort = (sortedCol) => {
        this.setState(sortedCol);
    }

    sortProducts = (firstKey, secondKey) => {
        let productA = this.props.products[firstKey];
        let productB = this.props.products[secondKey];
        let direction = this.state.sortDirection === 'asc' ? -1 : 1;
        if (productA[this.state.sortColumn].toLowerCase() > productB[this.state.sortColumn].toLowerCase()) {
            return -1 * direction;
        } else {
            return 1 * direction;
        }
    }

    render() {
        let { classes } = this.props;

        let rows = 
            Object.keys(this.props.products)
                .filter( (key) => this.props.products[key].name.toLowerCase().indexOf(this.props.inputFilter.toLowerCase()) !== -1 && ( this.props.products[key].stocked === this.props.inStockOnly || !this.props.inStockOnly))
                .sort( this.sortProducts )
                .map( (key) => <ProductRow onDeleteProduct={this.deleteProduct} key={key} product={this.props.products[key]}></ProductRow>);

        return (
            <div>
                <Table className={classes.table}>
                    <TableHead>
                        <TableRow>
                            <ProductListHeader column="Name" sortDirection={this.state.sortDirection} sortColumn={this.state.sortColumn} onSort={this.handleSort} ></ProductListHeader>
                            <ProductListHeader column="Price" sortDirection={this.state.sortDirection} sortColumn={this.state.sortColumn} onSort={this.handleSort} ></ProductListHeader>
                            <ProductListHeader column="" ></ProductListHeader>
                        </TableRow>
                    </TableHead>
                    <TableBody>{rows}</TableBody>
                </Table>
            </div>
        );
    }
}

export default withStyles(styles)(ProductList);