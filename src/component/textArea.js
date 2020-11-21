import React, { Component } from 'react';

class textArea extends Component {
  state = {
    value: "Ulasan saya"
  };
  handleChange = e => {
    this.setState({ value: e.target.value });
  };
  render() {
    return (
      <div>
        <form>
          <textarea value={this.state.value} onChange=
          {this.handleChange} />
        </form>
      </div>
    );
  }
}

export default textArea;