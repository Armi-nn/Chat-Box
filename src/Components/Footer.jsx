import React, { Component } from "react";

export default class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inp: "",
    };
  }
  handleClick(e) {
    e.preventDefault();
    this.props.handleMessage(this.state.inp);
    this.setState({
      inp: "",
    });
  }
  render() {
    return (
      <div className="panel-footer">
        <form>
          <div className="input-group">
            <input
              type="text"
              className="form-control"
              value={this.state.inp}
              onChange={(e) => this.setState({ inp: e.target.value })}
              placeholder="Say something"
            />
            <span className="input-group-btn">
              <button
                disabled={this.state.inp ? false : true}
                onClick={this.handleClick.bind(this)}
                className="btn btn-primary"
                type="button"
              >
                Send
              </button>
            </span>
          </div>
        </form>
      </div>
    );
  }
}
