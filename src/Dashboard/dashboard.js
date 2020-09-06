import React from "react";
import ChatListComponent from "../ChatList/chatlist";
import { Button, withStyles } from "@material-ui/core";
import ChatViewComponent from "../Chatview/Chatview";
import ChatTextBoxComponent from "../Chattextbox/Chattextbox";
import NewChatComponent from "../NewChat/NewChat";
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
          <ChatTextBoxComponent
            messageReadFn={this.messageRead}
            submitMessageFn={this.submitMessage}
          />
        ) : null}
        {this.state.newChatFormVisible ? (
          <NewChatComponent
            goToChatFn={this.goToChat}
            newChatSubmitFn={this.newChatSubmit}
          />
        ) : null}
        <Button onClick={this.signOut} className={classes.signOutBtn}>
          Sign Out
        </Button>
      </div>
    );
  }

  goToChat = async (docKey, msg) => {
    const usersInChat = docKey.split(":");
    const chat = this.state.chats.find((_chat) =>
      usersInChat.every((_user) => _chat.users.includes(_user))
    );
    console.log("LEMAN", chat);
    this.setState({ newChatFormVisible: false });
    await this.selectChat(this.state.chats.indexOf(chat));
    this.submitMessage(msg);
  };

  newChatSubmit = async (chat) => {
    const docKey = this.buildDocKey(chat.sendTo);
    await firebase
      .firestore()
      .collection("chats")
      .doc(docKey)
      .set({
        receiverHasRead: false,
        users: [this.state.email, chat.sendTo],
        messages: [
          {
            message: chat.message,
            sender: this.state.email,
          },
        ],
      });
    this.setState({ newChatFormVisible: false });
    this.selectChat(this.state.chats.length - 1);
  };

  submitMessage = (msg) => {
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
          message: msg,
          sender: this.state.email,
          timestamp: new Date().toISOString(),
        }),
        receiverHasRead: false,
      });
  };

  buildDocKey = (friend) => [this.state.email, friend].sort().join(":");

  selectChat = async (chatIndex) => {
    await this.setState({
      selectedChat: chatIndex,
      newChatFormVisible: false,
    });
    await this.messageRead();
  };

  newChatButtonClicked = () => {
    console.log("HERE");
    this.setState({
      newChatFormVisible: true,
    });
  };

  messageRead = () => {
    const docKey = this.buildDocKey(
      this.state.chats[this.state.selectedChat].users.filter(
        (_usr) => _usr != this.state.email
      )[0]
    );
    if (this.clickedChatWhereNotSender(this.state.selectedChat)) {
      firebase.firestore().collection("chats").doc(docKey).update({
        receiverHasRead: true,
      });
    }
  };

  clickedChatWhereNotSender = (chatIndex) => {
    return (
      this.state.chats[chatIndex].messages[
        this.state.chats[chatIndex].messages.length - 1
      ].sender !== this.state.email
    );
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
