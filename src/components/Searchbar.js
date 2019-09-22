import React, { Component } from "react";

export default class Searchbar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      inputvalue: ""
    };
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }
  onInputChange = event => {
    this.setState({
      inputvalue: event.target.value
    });
  };
  onFormSubmit(event) {
    event.preventDefault();
    this.props.onFormSubmit(this.state.inputvalue);
  }
  render() {
    return (
      <div className="searchbar ui segment">
        <form onSubmit={this.onFormSubmit} className="ui form">
          <div className="field">
            <label className="ui large red label">Youtube Searchbar</label>
            <input
              type="text"
              onChange={this.onInputChange}
              value={this.state.inputvalue}
            />
          </div>
        </form>
      </div>
    );
  }
}
