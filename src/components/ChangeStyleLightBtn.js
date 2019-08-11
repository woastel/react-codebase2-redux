import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux';
import { setStyleLight } from '../redux/actions/styleActions';



class ChangeStyleLightBtn extends Component {
  constructor(props) {
    super(props);
    this.onBtnClick = this.onBtnClick.bind(this);
  }

  onBtnClick(e) {
    e.preventDefault();
    this.props.setStyleLight(e)
  }

  render() {
    return (
      <div>
        <button onClick={this.onBtnClick}>Light Button</button>
      </div>
    )
  }
}

// Define Prop Types
ChangeStyleLightBtn.propTypes = {
  color: PropTypes.string.isRequired,
  setStyleLight: PropTypes.func.isRequired
};

// now map States To Props
const mapStateToProps = (state) => ({
  color: state.style.color,
});

// now map States To Props
const mapDispatchToProps = dispatch => ({
  setStyleLight: (e) => {
    e.preventDefault();
    dispatch(setStyleLight());
  }
});

// export the StyleBoxConnected
const ChangeStyleLightBtnConnected = connect(
  mapStateToProps, 
  mapDispatchToProps
)(ChangeStyleLightBtn);

export default ChangeStyleLightBtnConnected;
