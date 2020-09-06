const styles = (theme) => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    height: "calc(100% - 35px)",
    position: "absolute",
    left: "0",
    width: "300px",
    boxShadow: "0px 0px 2px black",
  },
  listItem: {
    cursor: "pointer",
  },
  newChatBtn: {
    borderRadius: "0px",
  },
  unreadMessage: {
    color: "red !important",
    position: "absolute",
    top: "25%",
    right: "5px",
  },
});

export default styles;
