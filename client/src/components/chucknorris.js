import React, { Component } from 'react'

export default class chucknorris extends Component {
        constructor(props){
            super(props);
            this.State = {joke: ""}
        }
        
    callAPI(){
        fetch("https://localhost:9000/chucknorris")
        .then(res => res.json())
        .then(res => this.setState({
            joke: res.value
        }))
    }    
    
    render() {
        return (
            <div>
            <h1>Chuck Norris joke generator</h1>
           <p>i am chuck norris </p>
           <p>joke: {this.state.joke}</p>
            </div>
        )
    }
}
