import React, { Component } from 'react';

class ConditionLoop extends Component {
    constructor(props){
        super(props)
        this.state={
            showTitle:true
        }
        setTimeout(() => {
            this.setState({
                showTitle:false
            })
        },3000);
    }
    render() {
        return (
            <div>
               <h1>条件渲染</h1> 
        {this.state.showTitle?<h2>{this.props.title}</h2>:null}
            </div>
        );
    }
}

export default ConditionLoop;