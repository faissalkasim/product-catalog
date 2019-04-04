import React, {Component} from 'react';
import './ProductListHeader.css';
import TableCell from '@material-ui/core/TableCell';
import TableSortLabel from '@material-ui/core/TableSortLabel';
import Tooltip from '@material-ui/core/Tooltip';

class ProductListHeader extends Component {
  
  onSortChange = () => {
    if ( !this.props.column ) return false;
    let direction = this.props.sortDirection === 'asc' ? 'desc' : 'asc';
    let sortData = {
      sortColumn: this.props.column.toLowerCase(),
      sortDirection: direction
    };
    this.props.onSort(sortData);
  }

  render() {
    let isColActive = this.props.sortColumn === this.props.column.toLowerCase();

    return (
        <TableCell 
          sortDirection={this.props.sortColumn === this.props.column ? this.props.sortDirection : false}
          >
          <Tooltip
              title="Sort"
              enterDelay={300}
            >
              <TableSortLabel
                active={ isColActive }
                direction={this.props.sortDirection}
                onClick={this.onSortChange}
              >
                {this.props.column}
              </TableSortLabel>
            </Tooltip>
        </TableCell>
    );
  }
}

export default ProductListHeader;