import React, {Component} from 'react';
import { withStyles } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormGroup';
import FormLabel from '@material-ui/core/FormLabel';
import FormGroup from '@material-ui/core/FormGroup';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Button from '@material-ui/core/Button';

const PRODUCT = {
    category: '', 
    price: '', 
    stocked: false, 
    name: ''
};

const styles = theme => ({
    textField: {
      marginTop: theme.spacing.unit,
      marginLeft: theme.spacing.unit,
      marginRight: theme.spacing.unit,
    },
    formControl: {
        marginTop: 20
    }
  });

class ProductForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            product: Object.assign( {}, PRODUCT )
        }
    }

    handleChange = name => e => {
        let value = e.target.type === 'text' ? e.target.value : e.target.checked;
        this.setState( (prevState) => {
            let product = prevState.product;
            product[name] = value;
            return { product };
        });
    };

    addProduct = (e) => {
        e.preventDefault();
        this.props.addProduct(this.state.product);
        this.setState({
            product: Object.assign( {}, PRODUCT )
        });
    };

    render() {
        const { classes } = this.props;

        return (
            <FormControl component="fieldset" className={classes.formControl}>
                <FormLabel component="legend">New product</FormLabel>
                <form noValidate autoComplete="off">
                    <FormGroup>
                        <TextField
                            label="Name"
                            className={classes.textField}
                            value={this.state.product.name}
                            onChange={this.handleChange('name')}
                        />
                        <TextField
                            label="Category"
                            className={classes.textField}
                            value={this.state.product.category}
                            onChange={this.handleChange('category')}
                        />
                        <TextField
                            label="Price"
                            className={classes.textField}
                            value={this.state.product.price}
                            onChange={this.handleChange('price')}
                        />
                        <FormControlLabel
                            control={
                                <Checkbox
                                    checked={this.state.product.stocked}
                                    onChange={this.handleChange('stocked')}
                                />
                            }
                            label="In stock !"
                        />
                        <Button 
                            variant="contained"
                            color="secondary"
                            onClick={this.addProduct}>
                            Save
                        </Button>
                    </FormGroup>
                </form>
            </FormControl>
        );
    }
}

export default withStyles(styles)(ProductForm);
