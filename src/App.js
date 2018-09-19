// https://www.youtube.com/watch?v=YaZg8wg39QQ
import React, { Component } from 'react';

class Mouse extends Component {
  state = {x: 0, y: 0}

  handleMouseMove = (event) => {
    this.setState({
      x: event.clientX,
      y: event.clientY
    })
  }

  render() {
    return (
      <div onMouseMove={this.handleMouseMove}>
        {this.props.children(this.state)}
      </div>
    );
  }
}

class App extends Component {
  render() {
    return (
      <Mouse>
        {mouse => (
          <div style={{height: "100%"}}>
            <div style={{height: "200px"}}>
              <h2>
                mouse position is {mouse.x}, {mouse.y}
              </h2>
            </div>
          </div>
        )}
      </Mouse>
    );
  }
}

export default (App);
