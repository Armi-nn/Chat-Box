import React, { Component } from "react";
import Header from "./Header";
import Body from "./Body";
import Footer from "./Footer";

export default class CleanChat extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "clean chat",
      messageList: [
        {
          type: "receive",
          message: "Good morning, sir.What can I do for you?",
          time: "11:37:08 am",
        },
        {
          type: "sent",
          message: "Well, I am just looking around.",
          time: "11:39:08 am",
        },
        {
          type: "receive",
          message: "If necessary, please ask me.",
          time: "11:40:08 am",
        },
      ],
      avatar: {
        client: "https://bootdey.com/img/Content/avatar/avatar2.png",
        support: "https://bootdey.com/img/Content/avatar/avatar1.png",
      },
    };
  }
  handleMessage(txt) {
    this.setState({
      ...this.state,
      messageList: [
        ...this.state.messageList,
        {
          type: 'sent',
          message: txt,
          time: new Date().toLocaleTimeString()
        }
      ]
    })
  }
  render() {
    return (
      <div className="container bootstrap snippets">
        <div className="col-md-7 col-xs-12 col-md-offset-2">
          <div className="panel" id="chat">
            <Header title={this.state.title} />
            <Body
              avatars={this.state.avatar}
              messages={this.state.messageList}
            />
            <Footer handleMessage={this.handleMessage.bind(this)} />
          </div>
        </div>
      </div>
    );
  }
}
