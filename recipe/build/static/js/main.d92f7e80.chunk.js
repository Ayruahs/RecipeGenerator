(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{114:function(e,a,t){e.exports=t(301)},119:function(e,a,t){},121:function(e,a,t){},298:function(e,a,t){},301:function(e,a,t){"use strict";t.r(a);var l=t(0),n=t.n(l),o=t(15),i=t.n(o),r=(t(119),t(16)),c=t(17),s=t(19),u=t(18),b=t(20),p=(t(121),t(71)),h=t(105),d=t(113),g=t(112),m=t(106),f=t.n(m),v=t(70),y=t.n(v),E=t(110),S=t.n(E),C=t(25),w=t.n(C),k=t(35),O=t.n(k),I=t(109),j=t.n(I),P=t(26),T=t.n(P),R=t(22),B=function e(){Object(r.a)(this,e)};B.APP_ID="aeb288a4",B.APP_KEY="dd6bb8b3c9ef4e621423490e73e05563";var x=B,L=t(69),A=t.n(L),D=t(46),F=t.n(D),N=t(33),H=t.n(N),M=t(48),W=t.n(M),_=t(47),G=t.n(_),V=t(49),K=t.n(V),J=t(108),z=t.n(J),U=function(e){function a(){var e,t;Object(r.a)(this,a);for(var l=arguments.length,n=new Array(l),o=0;o<l;o++)n[o]=arguments[o];return(t=Object(s.a)(this,(e=Object(u.a)(a)).call.apply(e,[this].concat(n)))).state={tileData:[]},t.openLink=function(e){console.log("the url is: "+e),window.open(e,"_blank")},t.saveRecipe=function(e){var a=e.label,t=e.image,l=e.url;return fetch("/saveRecipe/"+a+"&"+t+"&"+l,{headers:{Accept:"application/json"}}).then(function(e){return e.json()}).then(function(e){console.log("Message: "+e.message)}).catch(function(e){console.log(e)})},t}return Object(b.a)(a,e),Object(c.a)(a,[{key:"render",value:function(){var e=this,a=this.props.classes;return n.a.createElement("div",{className:a.root},n.a.createElement(F.a,{cellHeight:200,className:a.gridList},n.a.createElement(H.a,{key:"Subheader",cols:2,style:{height:"auto"}},n.a.createElement(G.a,{component:"div"},"Recipes you can make")),this.props.tileData.map(function(t){return n.a.createElement(H.a,{key:t.label,onClick:function(){return e.openLink(t.url)}},n.a.createElement("img",{src:t.image,alt:t.label}),n.a.createElement(W.a,{title:t.label,subtitle:n.a.createElement("span",null,t.calories," Calories"),actionIcon:n.a.createElement(K.a,{className:a.icon,onClick:function(){return e.saveRecipe(t)}},n.a.createElement(z.a,null))}))})))}}]),a}(l.Component),q=Object(R.withStyles)(function(e){return{root:{display:"flex",flexWrap:"wrap",justifyContent:"space-around",overflow:"hidden",backgroundColor:"#EFEFEF",align:"center"},gridList:{width:"40vw",height:"95vh"},icon:{color:"rgba(255, 255, 255, 0.54)"}}})(U),Y=function(e){function a(){var e,t;Object(r.a)(this,a);for(var l=arguments.length,n=new Array(l),o=0;o<l;o++)n[o]=arguments[o];return(t=Object(s.a)(this,(e=Object(u.a)(a)).call.apply(e,[this].concat(n)))).state={open:!0,tileData:t.props.tileData},t.handleOpen=function(){t.setState({open:!0})},t.handleClose=function(){t.setState({open:!1}),t.props.closeHandler()},t}return Object(b.a)(a,e),Object(c.a)(a,[{key:"render",value:function(){return n.a.createElement("div",{style:{alignContent:"center"}},n.a.createElement(A.a,{style:{width:"50%",marginTop:"20px",marginLeft:"25%"},"aria-labelledby":"simple-modal-title","aria-describedby":"simple-modal-description",open:this.state.open,onClose:this.handleClose},n.a.createElement("div",null,n.a.createElement(q,{tileData:this.state.tileData}))))}}]),a}(l.Component),$=[{label:"Egg"},{label:"Milk"},{label:"Parmesan"},{label:"Cheese"},{label:"Yogurt"},{label:"Onion"},{label:"Garlic"},{label:"Tomato"},{label:"Carrot"},{label:"Bell Peppers"},{label:"Broccoli"},{label:"Spinach"},{label:"Lettuce"},{label:"Mushroom"},{label:"Ginger"},{label:"Avocado"},{label:"Cabbage"},{label:"Cauliflower"},{label:"Pumpkin"},{label:"Turnip"},{label:"Apple"},{label:"Banana"},{label:"Lemon"},{label:"Grape"},{label:"Orange"},{label:"Blackberry"},{label:"Mango"},{label:"Cranberry"},{label:"Watermelon"},{label:"Strawberry"},{label:"Rice"},{label:"Pasta"},{label:"Bread"},{label:"Oats"},{label:"Noodle"},{label:"Cornstarch"},{label:"Ramen"},{label:"Bagel"},{label:"Hot Dog Bun"},{label:"Chips"},{label:"Risotto"},{label:"Ravioli"},{label:"Sugar"},{label:"Honey"},{label:"Maple Syrup"},{label:"Brown Sugar"},{label:"Cinnamon"},{label:"Turmeric"},{label:"Paprika"},{label:"Cayenne"},{label:"Cumin"},{label:"Herbs"},{label:"Chicken Breast"},{label:"Ground Beef"},{label:"Ham"},{label:"Hot Dog"},{label:"Bacon"},{label:"Sausage"},{label:"Pork Chops"},{label:"Ground Turkey"},{label:"Chorizo"},{label:"Chicken Wing"},{label:"Salami"},{label:"Lamb"},{label:"Sliced Turkey"},{label:"Tuna"},{label:"Salmon"},{label:"Tilapia"},{label:"Cod"},{label:"Anchovies"},{label:"Sardines"},{label:"Mackerel"},{label:"Halibut"},{label:"Trout"},{label:"Red Snapper"},{label:"Shrimp"},{label:"Crab"},{label:"Lobster"},{label:"Scallop"},{label:"Prawns"},{label:"Squid"},{label:"Oyster"},{label:"Mayonnaise"},{label:"Ketchup"},{label:"Mustard"},{label:"Vinegar"},{label:"Hot Sauce"},{label:"Soy Sauce"},{label:"Tortilla"},{label:"Salsa"},{label:"Tabasco"},{label:"Ranch"},{label:"BBQ Sauce"},{label:"Sweet N Sour Sauce"},{label:"Sriracha"},{label:"Buffalo Sauce"},{label:"Olive Oil"},{label:"Vegetable Oil"},{label:"Coconut Oil"},{label:"Peanut Oil"},{label:"Wasabi"},{label:"Tomato Sauce"},{label:"Pesto"},{label:"Alfredo Sauce"},{label:"Gravy"},{label:"Refried Beans"},{label:"Pinto Beans"},{label:"Black Beans"},{label:"Lentil"},{label:"Kidney Beans"},{label:"White Wine"},{label:"Beer"},{label:"Red Wine"},{label:"Vodka"},{label:"Rum"},{label:"Whiskey"},{label:"Tequila"},{label:"Bourbon"},{label:"Brandy"},{label:"Gin"},{label:"Sake"},{label:"Schnapps"},{label:"Broth"},{label:"Almonds"},{label:"Peanut Butter"},{label:"Walnut"},{label:"Cashew"},{label:"Peanut"},{label:"Chocolate"},{label:"Apple Sauce"},{label:"Jam"},{label:"Marmalade"},{label:"Nutella"},{label:"Fudge"},{label:"Pie"},{label:"Pudding"},{label:"Jelly"},{label:"Coffee"},{label:"Orange Juice"},{label:"Tomato Juice"},{label:"Apple Juice"},{label:"Club Soda"},{label:"Soda pop"}];var Q=function(e){function a(){var e,t;Object(r.a)(this,a);for(var l=arguments.length,n=new Array(l),o=0;o<l;o++)n[o]=arguments[o];return(t=Object(s.a)(this,(e=Object(u.a)(a)).call.apply(e,[this].concat(n)))).state={inputValue:"",selectedItem:[],open:!1,APIRecipes:[]},t.handleKeyDown=function(e){var a=t.state,l=a.inputValue,n=a.selectedItem;n.length&&!l.length&&"backspace"===w()(e)&&t.setState({selectedItem:n.slice(0,n.length-1)})},t.handleInputChange=function(e){t.setState({inputValue:e.target.value})},t.handleChange=function(e){var a=t.state.selectedItem;-1===a.indexOf(e)&&(a=Object(p.a)(a).concat([e])),t.setState({inputValue:"",selectedItem:a})},t.handleDelete=function(e){return function(){t.setState(function(a){var t=Object(p.a)(a.selectedItem);return t.splice(t.indexOf(e),1),{selectedItem:t}})}},t.setStateToOff=function(){t.setState({open:!1})},t.getRecipes=function(){var e=t.state.selectedItem;if(console.log(e),console.log(x.APP_ID),console.log(x.APP_KEY),0!==e.length){var a='https://api.edamam.com/search?q="'+e.join(" ")+'"&app_id='+x.APP_ID+"&app_key="+x.APP_KEY+"&from=0&to=10";return console.log(a),fetch(a).then(function(e){return e.json()}).then(function(e){if(0===e.count)console.log("number of recipes: "+e.count);else{console.log("number of recipes: "+e.count);for(var a=e.hits,l=[],n=0;n<a.length;n++)l.push(a[n].recipe);t.setState({open:!0,APIRecipes:l})}}).catch(function(e){console.log(e)})}console.log("Please select ingredients")},t}return Object(b.a)(a,e),Object(c.a)(a,[{key:"render",value:function(){var e=this,a=this.props.classes,t=this.state,l=t.inputValue,o=t.selectedItem;return n.a.createElement("div",{style:{margin:"10px",marginTop:"35%"}},n.a.createElement(g.a,{id:"downshift-multiple",inputValue:l,onChange:this.handleChange,selectedItem:o},function(t){var l=t.getInputProps,i=t.getItemProps,r=t.isOpen,c=t.inputValue,s=t.selectedItem,u=t.highlightedIndex;return n.a.createElement("div",{className:a.container},function(e){var a=e.InputProps,t=e.classes,l=e.ref,o=Object(d.a)(e,["InputProps","classes","ref"]);return n.a.createElement(O.a,Object.assign({InputProps:Object(h.a)({inputRef:l,classes:{root:t.inputRoot,input:t.inputInput}},a)},o))}({fullWidth:!0,classes:a,InputProps:l({startAdornment:o.map(function(t){return n.a.createElement(S.a,{key:t,tabIndex:-1,label:t,className:a.chip,onDelete:e.handleDelete(t)})}),onChange:e.handleInputChange,onKeyDown:e.handleKeyDown,placeholder:"Select multiple ingredients"}),label:"Ingredient Search"}),r?n.a.createElement(y.a,{className:a.paper,square:!0},function(e){var a=f()(e.trim()).toLowerCase(),t=a.length,l=0;return 0===t?[]:$.filter(function(e){var n=l<5&&e.label.slice(0,t).toLowerCase()===a;return n&&(l+=1),n})}(c).map(function(e,a){return function(e){var a=e.suggestion,t=e.index,l=e.itemProps,o=e.highlightedIndex===t,i=(e.selectedItem||"").indexOf(a.label)>-1;return n.a.createElement(j.a,Object.assign({},l,{key:a.label,selected:o,component:"div",style:{fontWeight:i?500:400}}),a.label)}({suggestion:e,index:a,itemProps:i({item:e.label}),highlightedIndex:u,selectedItem:s})})):null)}),n.a.createElement(T.a,{style:{marginTop:"20%"},variant:"contained",color:"secondary",onClick:this.getRecipes},"Search Recipes"),this.state.open&&n.a.createElement(Y,{closeHandler:this.setStateToOff,tileData:this.state.APIRecipes}))}}]),a}(l.Component),X=Object(R.withStyles)(function(e){return{root:{flexGrow:1,height:250},container:{flexGrow:1,position:"relative"},paper:{position:"absolute",zIndex:1,marginTop:e.spacing.unit,left:0,right:0},chip:{margin:"".concat(e.spacing.unit/2,"px ").concat(e.spacing.unit/4,"px")},inputRoot:{flexWrap:"wrap"},inputInput:{width:"auto",flexGrow:1},divider:{height:2*e.spacing.unit}}})(Q),Z=t(44),ee=(t(298),t(111)),ae=t.n(ee),te=Object(R.createMuiTheme)({overrides:{MuiInput:{underline:{"&:hover:not($disabled):not($error):not($focused):before":{borderBottomColor:"#CAEBF2"}},disabled:{},error:{},focused:{}},MuiButton:{root:{backgroundColor:"#FF3B3F",color:"white"}}},palette:{primary:{main:"#FF3B3F"},secondary:{main:"#F5F5F5"}}}),le=function(e){function a(){var e,t;Object(r.a)(this,a);for(var l=arguments.length,n=new Array(l),o=0;o<l;o++)n[o]=arguments[o];return(t=Object(s.a)(this,(e=Object(u.a)(a)).call.apply(e,[this].concat(n)))).state={email:"",password:"",isLoggedIn:!1,snackbarOpen:!1,savedRecipes:[],gotRecipes:!1},t.inputStyle={borderRadius:4,backgroundColor:"white",border:"1px solid #FF3B3F",fontSize:13,padding:"10px 12px",width:"250px",alignSelf:"center",borderColor:"#CAEBF2",boxShadow:"0 0 0 0.05rem #4CCCB3",marginTop:"5%",marginBottom:"5%",fontFamily:["Roboto","-apple-system","BlinkMacSystemFont","Roboto",'"Helvetica Neue"',"sans-serif",'"Apple Color Emoji"','"Segoe UI Emoji"','"Segoe UI Symbol"'].join(","),"&:focus":{borderColor:"#4CCCB3",boxShadow:"0 0 0 0.05rem #4CCCB3"}},t.handleChange=function(e){e.preventDefault(),t.setState(Object(Z.a)({},e.target.name,e.target.value))},t.onLogin=function(e){return e.preventDefault(),fetch("/login/"+t.state.email+"&"+t.state.password).then(function(e){return e.json()}).then(function(e){400===e.HTTPcode?console.log("Error1: "+e.message):401===e.HTTPcode?console.log("Error2: "+e.message):(console.log("Message3: "+e.message),t.setState({isLoggedIn:!0}))}).catch(function(e){console.log(e)})},t.onRegister=function(e){return e.preventDefault(),fetch("/register/"+t.state.email+"&"+t.state.password).then(function(e){return e.json()}).then(function(e){400===e.HTTPcode?console.log("Error: "+e.message):401===e.HTTPcode?console.log("Error: "+e.message):(console.log("Message: "+e.message),t.setState({isLoggedIn:!0}))}).catch(function(e){console.log(e)})},t.handleSnackbarClick=function(){t.setState({snackbarOpen:!0})},t.handleSnackbarClose=function(e,a){"clickaway"!==a&&t.setState({snackbarOpen:!1})},t.signOut=function(e){return e.preventDefault(),fetch("/logout").then(function(e){return e.json()}).then(function(e){400===e.HTTPcode?console.log("Error: "+e.message):401===e.HTTPcode?console.log("Error: "+e.message):(console.log("Message: "+e.message),t.setState({isLoggedIn:!1}))}).catch(function(e){console.log(e)})},t.getRecipes=function(){if(t.state.isLoggedIn)return fetch("/getRecipes").then(function(e){return e.json()}).then(function(e){if(console.log(e),400===e.HTTPcode)console.log("Message: "+e.message);else{console.log("RECES: "+e);var a=e.recipeList;t.setState({savedRecipes:a,gotRecipes:!0})}}).catch(function(e){console.log(e)})},t.deleteRecipe=function(e){var a=e.recipe_url;return fetch("/deleteSavedRecipe/"+a,{headers:{Accept:"application/json"}}).then(function(e){return e.json()}).then(function(e){console.log("Message: "+e.message)}).catch(function(e){console.log(e)})},t}return Object(b.a)(a,e),Object(c.a)(a,[{key:"openLink",value:function(e){window.open(e,"_blank").focus()}},{key:"render",value:function(){var e=this;if(this.state.isLoggedIn){var a={root:{display:"flex",flexWrap:"wrap",justifyContent:"space-around",overflow:"hidden",backgroundColor:"#EFEFEF",align:"center"},gridList:{width:"40vw",height:"95vh"},icon:{color:"rgba(255, 255, 255, 0.54)"}};return n.a.createElement(R.MuiThemeProvider,{theme:te},n.a.createElement("div",null,this.state.gotRecipes&&n.a.createElement(F.a,{cellHeight:200,className:a.gridList},n.a.createElement(H.a,{key:"Subheader",cols:2,style:{height:"auto"}},n.a.createElement(G.a,{component:"div"},"Recipes you have saved")),this.state.savedRecipes.map(function(t){return n.a.createElement(H.a,{key:t.recipe_name,onClick:function(){return e.openLink(t.recipe_url)}},n.a.createElement("img",{src:t.image_url,alt:t.recipe_name}),n.a.createElement(W.a,{title:t.recipe_name,actionIcon:n.a.createElement(K.a,{className:a.icon,onClick:function(){return e.deleteRecipe(t)}},n.a.createElement(ae.a,null))}))})),n.a.createElement(T.a,{onClick:this.getRecipes,style:{alignSelf:"center",height:"50px",width:"280px",marginTop:"10%"}},"GET SAVED RECIPES"),n.a.createElement(T.a,{onClick:this.signOut,style:{alignSelf:"center",height:"50px",width:"280px",marginTop:"10%"}},"SIGN OUT")))}return n.a.createElement(R.MuiThemeProvider,{theme:te},n.a.createElement("div",{className:"RightHalf"},n.a.createElement("div",{className:"LoginDiv"},n.a.createElement("div",{className:"LogInEmail"},"Login with your username"),n.a.createElement("div",{className:"InputClass"},n.a.createElement(O.a,{onChange:this.handleChange,InputProps:{disableUnderline:!0},style:this.inputStyle,name:"email",value:this.state.email,placeholder:"username"}),n.a.createElement(O.a,{onChange:this.handleChange,InputProps:{disableUnderline:!0},style:this.inputStyle,name:"password",type:"password",value:this.state.password,placeholder:"password"}),n.a.createElement(T.a,{onClick:this.onLogin,style:{alignSelf:"center",height:"50px",width:"280px",marginTop:"10%"}},"LOGIN"),n.a.createElement(T.a,{onClick:this.onRegister,style:{alignSelf:"center",height:"50px",width:"280px",marginTop:"10%"}},"REGISTER")))))}}]),a}(l.Component),ne=function(e){function a(){return Object(r.a)(this,a),Object(s.a)(this,Object(u.a)(a).apply(this,arguments))}return Object(b.a)(a,e),Object(c.a)(a,[{key:"render",value:function(){return n.a.createElement("div",{className:"App"},n.a.createElement("div",null,n.a.createElement("div",{className:"ingredients-select"},n.a.createElement("div",{style:{marginTop:"20%",fontSize:"300%"}},"What's in your fridge?"),n.a.createElement(X,null),n.a.createElement("div",{style:{marginTop:"20%",fontSize:"150%"}},"Enter the ingredients you have and we'll",n.a.createElement("br",null)," tell you what you can make!"))),n.a.createElement("div",null,n.a.createElement("div",{className:"recipe-display"},n.a.createElement(le,null))))}}]),a}(l.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(n.a.createElement(ne,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[114,2,1]]]);
//# sourceMappingURL=main.d92f7e80.chunk.js.map