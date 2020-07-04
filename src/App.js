import React, { Component } from 'react';
import PropsDome from './PropsDome'
import ConditionLoop from './ConditionLoop'
import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p >
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </ a>
//       </header>
//     </div>
//   );
// }

// export default App;

//组件写法
 export default class App extends React.Component{
   state = {
    msg1:'hellowebworld',
   count:0
   }
componentDidMount(){
  this.setState({
    count:this.state.count+1

  },()=>{
    console.log("222");
    console.log(this.state.count)
  })
  console.log(this.state.count)
}
   render() {
     const msg='zhangpengwang';
     return (
       <div className="App">
         {msg}
         <p>{this.state.msg1}</p >
         <PropsDome title="time"></PropsDome>
         
         <ConditionLoop title="我牛逼"></ConditionLoop>
      </div>
      
    );
   }
 }