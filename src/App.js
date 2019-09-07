import React from 'react';
import logo from './logo.svg';
import className from './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import {Route} from "react-router-dom";
import New from "./components/News/New";
import Profile from "./components/Profile/Profile";
import Message from "./components/Message/Message";


function App(props) {
  return (
    <div className="app-page">
       <div className='container'>

            <Header logo='http://icons.iconarchive.com/icons/papirus-team/papirus-apps/256/vk-icon.png'/>

           <div className="grid">
               <Navbar />

               {/*<Route path='/message' component={Message}/>*/}
               {/*<Route path='/profile' component={Profile}/>*/}
               {/*<Route path='/news' component={New}/>*/}

                <Route path='/message' render={() => <Message state={props.state.dialogPage}
                                                              states={props.state.avatarPage}/>}/>
                <Route path='/profile' render={() => <Profile/>}/>
                <Route path='/news' render={() => <New/>}/>

           </div>

       </div>
   </div>


  );
}

export default App;
