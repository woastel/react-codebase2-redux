import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux';
import ChangeStyleDarkBtnConnected from './ChangeStyleDarkBtn'
import ChangeStyleLightBtnConnected from './ChangeStyleLightBtn'

class StyleBox extends Component {

  componentWillReceiveProps(nextProps) {
    console.log("nextProps Value")
    console.log(nextProps.color)
    if(nextProps.color) {
      // this.props.style.color(nextProps.color);
    }
  }

  render() {
    return (
      <div style={{color: this.props.color, backgroundColor: this.props.backgroundColor}}>
        <h1>The Color is:</h1>
        <ChangeStyleDarkBtnConnected />
        <ChangeStyleLightBtnConnected />
        <p>
          {this.props.color}
        </p>
      </div>
    )
  }
}

// Define Prop Types
StyleBox.propTypes = {
  color: PropTypes.string.isRequired,
  backgroundColor: PropTypes.string.isRequired,
};

// now map States To Props
const mapStateToProps = (state) => ({
  color: state.style.color,
  backgroundColor: state.style.backgroundColor,
});


// export the StyleBoxConnected
const StyleBoxConnected = connect(
  mapStateToProps, 
  null
)(StyleBox);

export default StyleBoxConnected;

