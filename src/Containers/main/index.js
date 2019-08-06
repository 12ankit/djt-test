import React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { withStyles } from "@material-ui/core/styles";
import * as actions from "./actions";
import { Grid, Typography } from "@material-ui/core";
import Select from "react-select";

const styles = theme => ({});

const defualtSelect = { value: "", label: "" };

class Main extends React.Component {
  state = {
    car: { ...defualtSelect },
    fuel: { ...defualtSelect },
    varient: { ...defualtSelect }
  };

  componentDidMount() {
    const { getCartType, getFeulType, getVarient } = this.props.actions;
    getCartType();
    getFeulType();
    getVarient();
  }

  changeHandler = event => {
    const key = event.target.name;
    const value = event.target.value;
    this.setState({ [key]: value });
  };

  render() {
    const { carTypes, fuelTypes, varientTypes } = this.props;
    return (
      <Grid xs={12} container>
        <Grid xs={4} item>
          <Typography>Your Car</Typography>
          <Select
            name="car"
            options={carTypes.payload}
            onChange={this.changeHandler}
          />
        </Grid>
        <Grid xs={4} item>
          <Typography>Feul</Typography>
          <Select
            name="fuel"
            options={fuelTypes.payload}
            onChange={this.changeHandler}
          />
        </Grid>
        <Grid xs={4} item>
          <Typography>Varient</Typography>
          <Select
            name="varient"
            options={varientTypes.payload}
            onChange={this.changeHandler}
          />
        </Grid>
      </Grid>
    );
  }
}

function mapStateToProp(state) {
  const {
    carState: { carTypes, fuelTypes, varientTypes }
  } = state;
  return {
    carTypes,
    fuelTypes,
    varientTypes
  };
}

function mapDispatchToProp(dispatch) {
  return {
    actions: bindActionCreators(
      {
        getCartType: actions.getCartType,
        getFeulType: actions.getFeulType,
        getVarient: actions.getVarient
      },
      dispatch
    )
  };
}

export default withStyles(styles)(
  connect(
    mapStateToProp,
    mapDispatchToProp
  )(Main)
);
