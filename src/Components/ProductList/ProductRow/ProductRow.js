import React, {Component} from 'react';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import './ProductRow.css';

class ProductRow extends Component {

  onDeleteProduct = () => this.props.onDeleteProduct(this.props.product.id);

  render() {
    return (
      <TableRow>
        <TableCell>
          <span className={this.props.product.stocked ? '' : 'ProductRow-out-of-stock'}>
            {this.props.product.name}
          </span>
        </TableCell>
        <TableCell>
           {this.props.product.price}
        </TableCell>
        <TableCell>
          <IconButton color="secondary" aria-label="Delete" onClick={this.onDeleteProduct}>
            <DeleteIcon />
          </IconButton>
        </TableCell>
      </TableRow>
    );
  }
}

export default ProductRow;