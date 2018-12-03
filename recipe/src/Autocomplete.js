import React, {Component} from 'react';
import PropTypes from "prop-types";
import Downshift from 'downshift';
import deburr from 'lodash/deburr';
import Paper from '@material-ui/core/Paper';
import Chip from '@material-ui/core/Chip';
import keycode from 'keycode';
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";
import Button from '@material-ui/core/Button';
import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
    root: {
      flexGrow: 1,
      height: 250
    },
    container: {
      flexGrow: 1,
      position: "relative"
    },
    paper: {
      position: "absolute",
      zIndex: 1,
      marginTop: theme.spacing.unit,
      left: 0,
      right: 0
    },
    chip: {
      margin: `${theme.spacing.unit / 2}px ${theme.spacing.unit / 4}px`
    },
    inputRoot: {
      flexWrap: "wrap"
    },
    inputInput: {
      width: "auto",
      flexGrow: 1
    },
    divider: {
      height: theme.spacing.unit * 2
    }
  });

const suggestions = [
    { label: "Egg" },
    { label: "Milk" },
    { label: "Parmesan" },
    { label: "Cheese" },
    { label: "Yogurt" },
    { label: "Onion" },
    { label: "Garlic" },
    { label: "Tomato" },
    { label: "Carrot" },
    { label: "Bell Peppers" },
    { label: "Broccoli" },
    { label: "Spinach" },
    { label: "Lettuce" },
    { label: "Mushroom" },
    { label: "Ginger" },
    { label: "Avocado" },
    { label: "Cabbage" },
    { label: "Cauliflower" },
    { label: "Pumpkin" },
    { label: "Turnip" },
    { label: "Apple" },
    { label: "Banana" },
    { label: "Lemon" },
    { label: "Grape" },
    { label: "Orange" },
    { label: "Blackberry" },
    { label: "Mango" },
    { label: "Cranberry" },
    { label: "Watermelon" },
    { label: "Strawberry" },
    { label: "Rice" },
    { label: "Pasta" },
    { label: "Bread" },
    { label: "Oats" },

    { label: "Noodle" },
    { label: "Cornstarch" },
    { label: "Ramen" },
    { label: "Bagel" },
    { label: "Hot Dog Bun" },
    { label: "Chips" },
    { label: "Risotto" },
    { label: "Ravioli" },
    { label: "Sugar" },
    { label: "Honey" },
    { label: "Maple Syrup" },
    { label: "Brown Sugar" },
    { label: "Cinnamon" },
    { label: "Turmeric" },
    { label: "Paprika" },
    { label: "Cayenne" },
    { label: "Cumin" },
    { label: "Herbs" },
    { label: "Chicken Breast" },
    { label: "Ground Beef" },
    { label: "Ham" },
    { label: "Hot Dog" },
    { label: "Bacon" },
    { label: "Sausage" },

    { label: "Pork Chops" },
    { label: "Ground Turkey" },
    { label: "Chorizo" },
    { label: "Chicken Wing" },
    { label: "Salami" },
    { label: "Lamb" },
    { label: "Sliced Turkey" },
    { label: "Tuna" },
    { label: "Salmon" },
    { label: "Tilapia" },
    { label: "Cod" },
    { label: "Anchovies" },
    { label: "Sardines" },
    { label: "Mackerel" },

    { label: "Halibut" },
    { label: "Trout" },
    { label: "Red Snapper" },
    { label: "Shrimp" },
    { label: "Crab" },
    { label: "Lobster" },
    { label: "Scallop" },
    { label: "Prawns" },
    { label: "Squid" },
    { label: "Oyster" },
    { label: "Mayonnaise" },
    { label: "Ketchup" },
    { label: "Mustard" },
    { label: "Vinegar" },

    { label: "Hot Sauce" },
    { label: "Soy Sauce" },
    { label: "Tortilla" },
    { label: "Salsa" },
    { label: "Tabasco" },
    { label: "Ranch" },
    { label: "BBQ Sauce" },
    { label: "Sweet N Sour Sauce" },
    { label: "Sriracha" },
    { label: "Buffalo Sauce" },
    { label: "Olive Oil" },
    { label: "Vegetable Oil" },
    { label: "Coconut Oil" },
    { label: "Peanut Oil" },

    { label: "Wasabi" },
    { label: "Tomato Sauce" },
    { label: "Pesto" },
    { label: "Alfredo Sauce" },
    { label: "Gravy" },
    { label: "Refried Beans" },
    { label: "Pinto Beans" },
    { label: "Black Beans" },
    { label: "Lentil" },
    { label: "Kidney Beans" },
    { label: "White Wine" },
    { label: "Beer" },
    { label: "Red Wine" },
    { label: "Vodka" },
    { label: "Rum" },
    { label: "Whiskey" },
    { label: "Tequila" },
    { label: "Bourbon" },
    { label: "Brandy" },
    { label: "Gin" },
    { label: "Sake" },
    { label: "Schnapps" },
    { label: "Broth" },
    { label: "Almonds" },
    { label: "Peanut Butter" },
    { label: "Walnut" },
    { label: "Cashew" },
    { label: "Peanut" },

    { label: "Chocolate" },
    { label: "Apple Sauce" },
    { label: "Jam" },
    { label: "Marmalade" },
    { label: "Nutella" },
    { label: "Fudge" },
    { label: "Pie" },
    { label: "Pudding" },
    { label: "Jelly" },
    { label: "Coffee" },
    { label: "Orange Juice" },
    { label: "Tomato Juice" },
    { label: "Apple Juice" },
    { label: "Club Soda" },
    { label: "Soda pop" }
];

function renderSuggestion({
    suggestion,
    index,
    itemProps,
    highlightedIndex,
    selectedItem
  }) {
    const isHighlighted = highlightedIndex === index;
    const isSelected = (selectedItem || "").indexOf(suggestion.label) > -1;
  
    return (
      <MenuItem
        {...itemProps}
        key={suggestion.label}
        selected={isHighlighted}
        component="div"
        style={{
          fontWeight: isSelected ? 500 : 400
        }}
      >
        {suggestion.label}
      </MenuItem>
    );
  }
  renderSuggestion.propTypes = {
    highlightedIndex: PropTypes.number,
    index: PropTypes.number,
    itemProps: PropTypes.object,
    selectedItem: PropTypes.string,
    suggestion: PropTypes.shape({ label: PropTypes.string }).isRequired
  };

function renderInput(inputProps) {
    const { InputProps, classes, ref, ...other } = inputProps;
  
    return (
      <TextField
        InputProps={{
          inputRef: ref,
          classes: {
            root: classes.inputRoot,
            input: classes.inputInput
          },
          ...InputProps
        }}
        {...other}
      />
    );
}

function getSuggestions(value) {
    const inputValue = deburr(value.trim()).toLowerCase();
    const inputLength = inputValue.length;
    let count = 0;
  
    return inputLength === 0
      ? []
      : suggestions.filter(suggestion => {
          const keep =
            count < 5 &&
            suggestion.label.slice(0, inputLength).toLowerCase() === inputValue;
  
          if (keep) {
            count += 1;
          }
  
          return keep;
        });
}

class DownshiftMultiple extends Component {
    state = {
      inputValue: '',
      selectedItem: [],
    };
  
    handleKeyDown = event => {
      const { inputValue, selectedItem } = this.state;
      if (selectedItem.length && !inputValue.length && keycode(event) === 'backspace') {
        this.setState({
          selectedItem: selectedItem.slice(0, selectedItem.length - 1),
        });
      }
    };
  
    handleInputChange = event => {
      this.setState({ inputValue: event.target.value });
    };
  
    handleChange = item => {
      let { selectedItem } = this.state;
  
      if (selectedItem.indexOf(item) === -1) {
        selectedItem = [...selectedItem, item];
      }
  
      this.setState({
        inputValue: '',
        selectedItem,
      });
    };
  
    handleDelete = item => () => {
      this.setState(state => {
        const selectedItem = [...state.selectedItem];
        selectedItem.splice(selectedItem.indexOf(item), 1);
        return { selectedItem };
      });
    };

    printIng = () => {
        let {selectedItem} = this.state;
        console.log(selectedItem);
    }
  
    render() {
      const { classes } = this.props;
      const { inputValue, selectedItem } = this.state;
  
      return (
        <div>
        <Downshift
          id="downshift-multiple"
          inputValue={inputValue}
          onChange={this.handleChange}
          selectedItem={selectedItem}
        >
          {({
            getInputProps,
            getItemProps,
            isOpen,
            inputValue: inputValue2,
            selectedItem: selectedItem2,
            highlightedIndex,
          }) => (
            <div className={classes.container}>
              {renderInput({
                fullWidth: true,
                classes,
                InputProps: getInputProps({
                  startAdornment: selectedItem.map(item => (
                    <Chip
                      key={item}
                      tabIndex={-1}
                      label={item}
                      className={classes.chip}
                      onDelete={this.handleDelete(item)}
                    />
                  )),
                  onChange: this.handleInputChange,
                  onKeyDown: this.handleKeyDown,
                  placeholder: 'Select multiple ingredients',
                }),
                label: 'Ingredient Search',
              })}
              {isOpen ? (
                <Paper className={classes.paper} square>
                  {getSuggestions(inputValue2).map((suggestion, index) =>
                    renderSuggestion({
                      suggestion,
                      index,
                      itemProps: getItemProps({ item: suggestion.label }),
                      highlightedIndex,
                      selectedItem: selectedItem2,
                    }),
                  )}
                </Paper>
              ) : null}
            </div>
          )}
        </Downshift>

        <Button variant="contained" color="primary" onClick={this.printIng}>
            Search Recipes
        </Button>
        </div>
      );
    }
}

export default withStyles(styles)(DownshiftMultiple);