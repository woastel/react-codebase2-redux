import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux';


class IconBox extends Component {
  render() {
    return (
      <div className="icon">
        <div style={{width: "32px", height: "32px", backgroundColor: this.props.backgroundColor}}>
          icon
        </div>
      </div>
    )
  }
}

// Define Prop Types
IconBox.propTypes = {
  backgroundColor: PropTypes.string.isRequired,
};

// now map States To Props
const mapStateToProps = (state) => ({
  backgroundColor: state.style.backgroundColor,
});


// export the StyleBoxConnected
const IconBoxConnected = connect(
  mapStateToProps, 
  null
)(IconBox);

export default IconBoxConnected;
