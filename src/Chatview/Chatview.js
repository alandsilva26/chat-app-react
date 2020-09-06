import React from "react";
import styles from "./styles";
import { withStyles } from "@material-ui/core/styles";

class ChatViewComponent extends React.Component {
  componentDidUpdate = () => {
    const container = document.getElementById("chatview-container");
    if (container) {
      container.scrollTo(0, container.scrollHeight);
    }
  };
  formatDate = (dateString) => {
    const options = {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
      second: "numeric",
    };
    return new Date(dateString).toLocaleDateString("en-in", options);
  };
  render() {
    const { classes, chat, user } = this.props;
    if (chat == undefined) {
      return <main id="chatview-container" className={classes.content}></main>;
    } else {
      return (
        <div>
          <div className={classes.chatHeader}>
            Your conversation with{" "}
            {chat.users.filter((_usr) => _usr !== user)[0]}
          </div>
          <main id="chatview-container" className={classes.content}>
            {chat.messages.map((_msg, _index) => {
              console.log(this.formatDate(_msg.timestamp));
              return (
                <div
                  key={_index}
                  className={
                    _msg.sender == user ? classes.userSent : classes.friendSent
                  }
                  style={
                    _msg.timestamp == undefined
                      ? { paddingBottom: "10px" }
                      : null
                  }
                >
                  {_msg.message}
                  {_msg.timestamp == undefined ? null : (
                    <div
                      style={{
                        display: "flex",
                        fontSize: "0.8em",
                        justifyContent: "flex-end",
                        padding: "8px",
                      }}
                    >
                      {this.formatDate(_msg.timestamp)}
                    </div>
                  )}
                </div>
              );
            })}
          </main>
        </div>
      );
    }
  }
}

export default withStyles(styles)(ChatViewComponent);
