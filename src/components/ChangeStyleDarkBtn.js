import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux';
import { setStyleDark } from '../redux/actions/styleActions';


export class ChangeStyleDarkBtn extends Component {
  constructor(props) {
    super(props);
    this.onBtnClick = this.onBtnClick.bind(this);
  }

  onBtnClick(e) {
    e.preventDefault();
    this.props.setStyleDark(e)
  }

  render() {
    return (
      <div>
        <button onClick={this.onBtnClick}>Dark Button</button>
      </div>
    )
  }
}

// PropTypes: define
ChangeStyleDarkBtn.propTypes = {
  color: PropTypes.string.isRequired,
  setStyleDark: PropTypes.func.isRequired
};

// State To Props
const mapStateToProps = (state) => ({
  color: state.style.color,

});

// now map States To Props
const mapDispatchToProps = dispatch => ({
  setStyleDark: (e) => {
    e.preventDefault();
    dispatch(setStyleDark());
  }
});

// export the StyleBoxConnected
const ChangeStyleDarkBtnConnected = connect(
  mapStateToProps, 
  mapDispatchToProps
)(ChangeStyleDarkBtn);

export default ChangeStyleDarkBtnConnected
