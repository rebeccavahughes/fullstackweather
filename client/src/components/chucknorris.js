import React, { Component } from 'react'

export default class chucknorris extends Component {
        constructor(props){
            super(props);
            this.state = {joke: ''}
        }
        
    callAPI(){
        fetch("http://localhost:9000/chucknorris")
        .then(res => res.json())
        .then(res => this.setState({
            joke: res.value
        }))
    }    

    
    componentWillMount(){
        this.callAPI()
    }
    render() {
        return (
            <div>
            <h1>Chuck Norris joke generator</h1>
           <p>i am chuck norris </p>
           <button className="chuck" onClick={() => this.callAPI()}>Get joke</button>
           <p>joke: {this.state.joke}</p>
            </div>
        )
    }
}
