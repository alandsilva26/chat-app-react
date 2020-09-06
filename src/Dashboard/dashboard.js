import React from "react";
import ChatListComponent from "../ChatList/chatlist";
import { Button, withStyles } from "@material-ui/core";
import ChatViewComponent from "../Chatview/Chatview";
import ChatTextBoxComponent from "../Chattextbox/Chattextbox";
import styles from "./styles";

const firebase = require("firebase");

class DashboardComponent extends React.Component {
  constructor() {
    super();
    this.state = {
      selectedChat: null,
      newChatFormVisible: false,
      email: null,
      chats: [],
    };
  }

  render() {
    const { classes } = this.props;
    return (
      <div>
        <ChatListComponent
          history={this.props.history}
          newChatButtonFn={this.newChatButtonClicked}
          selectChatFn={this.selectChat}
          chats={this.state.chats}
          userEmail={this.state.email}
          selectedChatIndex={this.state.selectedChat}
        />
        {!this.state.newChatFormVisible ? (
          <ChatViewComponent
            user={this.state.email}
            chat={this.state.chats[this.state.selectedChat]}
          />
        ) : null}
        {this.state.selectedChat !== null && !this.state.newChatFormVisible ? (
          <ChatTextBoxComponent submitMessageFn={this.submitMessage} />
        ) : null}
        <Button onClick={this.signOut} className={classes.signOutBtn}>
          Sign Out
        </Button>
      </div>
    );
  }

  submitMessage = (message) => {
    const docKey = this.buildDocKey(
      this.state.chats[this.state.selectedChat].users.filter(
        (_usr) => _usr !== this.state.email
      )[0]
    );
    firebase
      .firestore()
      .collection("chats")
      .doc(docKey)
      .update({
        messages: firebase.firestore.FieldValue.arrayUnion({
          message: message,
          sender: this.state.email,
          timestamp: new Date().toISOString(),
        }),
        receiverHasRead: false,
      });
  };

  buildDocKey = (friend) => [this.state.email, friend].sort().join(":");

  selectChat = (chatIndex) => {
    this.setState({
      selectedChat: chatIndex,
    });
  };

  newChatButtonClicked = () => {
    this.setState({
      newChatFormVisible: true,
    });
  };

  componentDidMount = () => {
    firebase.auth().onAuthStateChanged(async (_usr) => {
      if (!_usr) {
        this.props.history.push("/login");
      } else {
        console.log(_usr.email);
        await firebase
          .firestore()
          .collection("chats")
          .where("users", "array-contains", _usr.email)
          .onSnapshot(async (res) => {
            const chats = res.docs.map((_doc) => _doc.data());
            await this.setState({ email: _usr.email, chats: chats });
          });
      }
      console.log(this.state.chats);
    });
  };

  signOut = () => {
    firebase.auth().signOut();
  };
}

export default withStyles(styles)(DashboardComponent);
