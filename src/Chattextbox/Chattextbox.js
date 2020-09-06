import React from "react";
import TextField from "@material-ui/core/TextField";
import Send from "@material-ui/icons/Send";
import styles from "./styles";
import { withStyles } from "@material-ui/core/styles";

class ChatTextBoxComponent extends React.Component {
  constructor() {
    super();
    this.state = {
      chatText: "",
    };
  }

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.chatTextBoxContainer}>
        <TextField
          id="chattextbox"
          placeholder="Enter your message"
          onKeyUp={(e) => this.userTyping(e)}
          className={classes.chatTextBox}
          onFocus={this.userClickedInput}
        ></TextField>
        <Send onClick={this.submitMessage} className={classes.sendBtn}></Send>
      </div>
    );
  }

  userTyping = (e) =>
    // console.log(e.keyCode);
    e.keyCode == 13
      ? this.submitMessage()
      : this.setState({
          chatText: e.target.value,
        });
  messageValid = (txt) => txt && txt.replace(/\s/g, "").length;

  userClickedInput = () => {};

  submitMessage = () => {
    // console.log("HERE");
    if (this.messageValid(this.state.chatText)) {
      this.props.submitMessageFn(this.state.chatText);
    }
    document.getElementById("chattextbox").value = "";
  };
}

export default withStyles(styles)(ChatTextBoxComponent);
