import React from "react";
import ChatListComponent from "../ChatList/chatlist";
import { Button, withStyles } from "@material-ui/core";
import ChatViewComponent from "../Chatview/Chatview";
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
        <Button onClick={this.signOut} className={classes.signOutBtn}>
          Sign Out
        </Button>
      </div>
    );
  }

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
            // console.log(res);
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
