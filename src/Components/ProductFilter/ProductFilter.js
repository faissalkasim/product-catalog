import React, {Component} from 'react';
import { withStyles } from '@material-ui/core/styles';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import TextField from '@material-ui/core/TextField';

const styles = theme => ({
    textField: {
      marginTop: theme.spacing.unit,
      marginLeft: theme.spacing.unit,
      marginRight: theme.spacing.unit,
    },
});

class ProductFilter extends Component {

    handleChange = (name) => (e) => {
        let value = e.target[e.target.type === 'text' ? 'value' : 'checked'];
        this.props.onFilter({
            [name]: value
        });
    }

    render() {
        const { classes } = this.props;

        return (
            <form>
                <TextField
                    className={classes.textField}
                    placeholder="Search..."
                    onChange={this.handleChange('inputFilter')}
                    fullWidth
                />
                <FormGroup>
                    <FormControlLabel
                        control={
                            <Checkbox
                                onChange={this.handleChange('inStockOnly')}
                            />
                        }
                        label="Only show stocked products"
                    />
                </FormGroup>
            </form>
        );
    }
}

export default withStyles(styles)(ProductFilter);