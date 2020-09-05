(this["webpackJsonpchat-app-react"]=this["webpackJsonpchat-app-react"]||[]).push([[0],{100:function(e,t,a){},139:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(25),o=a.n(i),s=(a(100),a(21)),c=a(8),l=a(26),u=a(27),m=a(32),p=a(30),h=a(59),d=function(e){return{main:Object(h.a)({width:"auto",display:"block",marginLeft:3*e.spacing.unit,marginRight:3*e.spacing.unit},e.breakpoints.up(400+3*e.spacing.unit*2),{width:400,marginLeft:"auto",marginRight:"auto"}),paper:{marginTop:8*e.spacing.unit,display:"flex",flexDirection:"column",alignItems:"center",padding:"".concat(2*e.spacing.unit,"px ").concat(3*e.spacing.unit,"px ").concat(3*e.spacing.unit,"px")},form:{width:"100%",marginTop:e.spacing.unit},submit:{marginTop:3*e.spacing.unit},noAccountHeader:{width:"100%"},signUpLink:{width:"100%",textDecoration:"none",color:"#303f9f",fontWeight:"bolder"},errorText:{color:"red",textAlign:"center"}}},g=a(163),f=a(172),E=a(170),b=a(162),w=a(64),v=a.n(w),y=a(159),C=a(65),x=a(164),k=a(53),S=function(e){Object(m.a)(a,e);var t=Object(p.a)(a);function a(){var e;return Object(l.a)(this,a),(e=t.call(this)).componentDidMount=function(){},e.userTyping=function(t,a){switch(t){case"email":e.setState({email:a.target.value});break;case"password":e.setState({password:a.target.value})}},e.submitLogin=function(t){t.preventDefault(),k.auth().signInWithEmailAndPassword(e.state.email,e.state.password).then((function(){e.props.history.push("/dashboard")}),(function(t){console.log(t),e.setState({loginError:t.message})}))},e.state={email:null,password:null,loginError:""},e}return Object(u.a)(a,[{key:"render",value:function(){var e=this,t=this.props.classes;return r.a.createElement("main",{className:t.main},r.a.createElement(y.a,null),r.a.createElement(b.a,{className:t.paper},r.a.createElement(C.a,{component:"h1",variant:"h5"},"Log In"),r.a.createElement("form",{className:t.form,onSubmit:function(t){return e.submitLogin(t)}},r.a.createElement(g.a,{required:!0,fullWidth:!0,margin:"normal"},r.a.createElement(f.a,{htmlFor:"login-email-input"},"Enter your email"),r.a.createElement(E.a,{autoComplete:"email",autoFocus:!0,id:"login-email-input",onChange:function(t){return e.userTyping("email",t)}})),r.a.createElement(g.a,{required:!0,fullWidth:!0,margin:"normal"},r.a.createElement(f.a,{htmlFor:"login-password-input"},"Enter your password"),r.a.createElement(E.a,{id:"login-password-input",type:"password",onChange:function(t){return e.userTyping("password",t)}})),r.a.createElement(x.a,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",className:t.submit},"Login")),this.state.loginError?r.a.createElement(C.a,{component:"h5",vairant:"h6",className:t.errorText},this.state.loginError):null,r.a.createElement(C.a,{component:"h5",variant:"h6",className:t.noAccountHeader},"Don't Have an Account?"),r.a.createElement(s.b,{className:t.signUpLink,to:"/signup"},"Sign up")))}}]),a}(r.a.Component),N=v()(d)(S),j=function(e){return{main:Object(h.a)({width:"auto",display:"block",marginLeft:e.spacing(3),marginRight:e.spacing(3)},e.breakpoints.up(400+3*e.spacing.unit*2),{width:400,marginLeft:"auto",marginRight:"auto"}),paper:{marginTop:8*e.spacing.unit,display:"flex",flexDirection:"column",alignItems:"center",padding:"".concat(2*e.spacing.unit,"px ").concat(3*e.spacing.unit,"px ").concat(3*e.spacing.unit,"px")},form:{width:"100%",marginTop:e.spacing.unit},submit:{marginTop:3*e.spacing.unit},hasAccountHeader:{width:"100%"},logInLink:{width:"100%",textDecoration:"none",color:"#303f9f",fontWeight:"bolder"},errorText:{color:"red",textAlign:"center"}}},O=function(e){Object(m.a)(n,e);var t=Object(p.a)(n);function n(){var e;return Object(l.a)(this,n),(e=t.call(this)).userTyping=function(t,a){switch(t){case"email":e.setState({email:a.target.value});break;case"password":e.setState({password:a.target.value});break;case"passwordConfirmation":e.setState({passwordConfirmation:a.target.value})}},e.formIsValid=function(){return e.state.password===e.state.passwordConfirmation},e.submitSignup=function(t){if(t.preventDefault(),e.formIsValid()){var n=a(53);a(83),n.auth().createUserWithEmailAndPassword(e.state.email,e.state.password).then((function(t){var a={email:t.user.email};n.firestore().collection("users").doc(e.state.email).set(a).then((function(){e.props.history.push("/dashboard")}),(function(t){console.log(t),e.setState({signupError:"Failed to add user"})}))}))}else e.setState({signupError:"Passwords do not match"})},e.state={email:null,password:null,passwordConfirmation:null,signupError:null},e}return Object(u.a)(n,[{key:"render",value:function(){var e=this,t=this.props.classes;return r.a.createElement("main",{className:t.main},r.a.createElement(y.a,null),r.a.createElement(b.a,{className:t.paper},r.a.createElement(C.a,{component:"h1",variant:"h5"},"Sign Up!"),r.a.createElement(C.a,{component:"h5",variant:"s6",className:t.errorText},"Please do not use passwords you have used elsewhere."),r.a.createElement("form",{className:t.form,onSubmit:function(t){return e.submitSignup(t)}},r.a.createElement(g.a,{required:!0,fullWidth:!0,margin:"normal"},r.a.createElement(f.a,{htmlFor:"signup-email-input"},"Enter your email"),r.a.createElement(E.a,{autoComplete:"email",autoFocus:!0,type:"email",id:"signup-email-input",onChange:function(t){return e.userTyping("email",t)}})),r.a.createElement(g.a,{required:!0,fullWidth:!0,margin:"normal"},r.a.createElement(f.a,{htmlFor:"signup-password-input"},"Create a Password"),r.a.createElement(E.a,{type:"password",id:"signup-password-input",onChange:function(t){return e.userTyping("password",t)}})),r.a.createElement(g.a,{required:!0,fullWidth:!0,margin:"normal"},r.a.createElement(f.a,{htmlFor:"signup-password-confirmation-input"},"Confirm Your Password"),r.a.createElement(E.a,{type:"password",id:"signup-password-confirmation-input",onChange:function(t){return e.userTyping("passwordConfirmation",t)}})),r.a.createElement(x.a,{type:"submit",variant:"contained",color:"primary",fullWidth:!0,className:t.submit},"Submit")),this.state.signupError?r.a.createElement(C.a,{component:"h5",variant:"h6",className:t.errorText},this.state.signupError):null,r.a.createElement(C.a,{component:"h5",variant:"h6",className:t.hasAccountHeader},"Already Have An Account?"),r.a.createElement(s.b,{className:t.logInLink,to:"/login"},"Log In!")))}}]),n}(r.a.Component),I=v()(j)(O),T=a(50),A=a.n(T),L=a(73),W=a(6),F=a(165),D=a(166),B=a(168),P=a(167),H=a(171),R=function(e){return{root:{backgroundColor:e.palette.background.paper,height:"calc(100% - 35px)",position:"absolute",left:"0",width:"300px",boxShadow:"0px 0px 2px black"},listItem:{cursor:"pointer"},newChatBtn:{borderRadius:"0px"},unreadMessage:{color:"red",position:"absolute",top:"0",right:"5px"}}},V=a(169),q=function(e){Object(m.a)(a,e);var t=Object(p.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).newChat=function(){},e.selectChat=function(){},e}return Object(u.a)(a,[{key:"render",value:function(){var e=this,t=this.props.classes;return this.props.chats.length>0?r.a.createElement("main",{className:t.root},r.a.createElement(x.a,{variant:"contained",fullWidth:!0,color:"primary",className:t.newChatsBtn,onClick:this.newChat},"New Message"),r.a.createElement(F.a,null,this.props.chats.map((function(a,n){return r.a.createElement("div",{key:n},r.a.createElement(D.a,{onClick:function(){return e.selectChat(n)},className:t.listItem,selected:e.props.selectedChatIndex===n,alignItems:"flex-start"},r.a.createElement(P.a,null,r.a.createElement(H.a,{alt:"Remy Sharp"},a.users.filter((function(t){return t!==e.props.userEmail}))[0].split("")[0])),r.a.createElement(B.a,{primary:a.users.filter((function(t){return t!==e.props.userEmail})),secondary:r.a.createElement(r.a.Fragment,null,r.a.createElement(C.a,{component:"span",color:"textPrimary"},a.messages[a.messages.length-1].message.substring(0,30)))})),r.a.createElement(V.a,null))})))):r.a.createElement("main",{className:t.root},r.a.createElement(C.a,{component:"h5",variant:"s5"},"No chats to display"),r.a.createElement(x.a,{variant:"contained",fullWidth:!0,color:"primary",className:t.newChatsBtn,onClick:this.newChat},"New Message"))}}]),a}(r.a.Component),M=Object(W.a)(R)(q),Q=a(53),U=function(e){Object(m.a)(a,e);var t=Object(p.a)(a);function a(){var e;return Object(l.a)(this,a),(e=t.call(this)).selectChat=function(e){console.log("Selected a chat",e)},e.newChatButtonClicked=function(){e.setState({newChatFormVisible:!0})},e.componentDidMount=function(){Q.auth().onAuthStateChanged(function(){var t=Object(L.a)(A.a.mark((function t(a){return A.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(a){t.next=4;break}e.props.history.push("/login"),t.next=7;break;case 4:return console.log(a.email),t.next=7,Q.firestore().collection("chats").where("users","array-contains",a.email).onSnapshot(function(){var t=Object(L.a)(A.a.mark((function t(n){var r;return A.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=n.docs.map((function(e){return e.data()})),t.next=3,e.setState({email:a.email,chats:r});case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}());case 7:console.log(e.state.chats);case 8:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}())},e.state={selectedChat:null,newChatFormVisible:!1,email:null,chats:[]},e}return Object(u.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(M,{history:this.props.history,newChatButtonFn:this.newChatButtonClicked,selectChatFn:this.selectChat,chats:this.state.chats,userEmail:this.state.email,selectedChatIndex:this.state.selectedChat}))}}]),a}(r.a.Component);var J=a(53);a(83),a(136).config(),J.initializeApp({apiKey:"AIzaSyCJBlahiVdzY0t4gncW7P4b203QriQaJoQ\n",authDomain:"chat-app-react-16a72.firebaseapp.com",databaseURL:"https://chat-app-react-16a72.firebaseio.com\n",projectId:"chat-app-react-16a72\n",storageBucket:"chat-app-react-16a72.appspot.com",messagingSenderId:"609682809334",appId:"1:609682809334:web:183f3c1dad2ea16f7c27d7",measurementId:"G-6DQGWQ0YV7"});var z=r.a.createElement(s.a,{basename:"/"},r.a.createElement("div",null,r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement(s.b,{to:"/"},"Home")),r.a.createElement("li",null,r.a.createElement(s.b,{to:"/signup"},"Signup")),r.a.createElement("li",null,r.a.createElement(s.b,{to:"/login"},"Login")),r.a.createElement("li",null,r.a.createElement(s.b,{to:"/dashboard"},"Dashboard"))),r.a.createElement("hr",null),r.a.createElement(c.a,{exact:!0,path:"/",component:N}),r.a.createElement(c.a,{path:"/signup",component:I}),r.a.createElement(c.a,{path:"/login",component:N}),r.a.createElement(c.a,{path:"/dashboard",component:U})));o.a.render(z,document.getElementById("root"))},95:function(e,t,a){e.exports=a(139)}},[[95,1,2]]]);
//# sourceMappingURL=main.f83ce9cf.chunk.js.map