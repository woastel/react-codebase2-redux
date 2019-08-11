import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class HeadLine extends Component {
  render() {
    return (
      <div>
        <ul className="navigation">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/backside">Backside</Link>
          </li>
        </ul>
      </div>
    )
  }
}

export default HeadLine
