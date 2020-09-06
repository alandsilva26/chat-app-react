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
              //   console.log(_msg.sender, user, "sender");
              _msg.timestamp !== undefined
                ? console.log(Date(_msg.timestamp))
                : console.log("undefined");
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
                      {() => _msg.timestamp.toDateString()}
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
