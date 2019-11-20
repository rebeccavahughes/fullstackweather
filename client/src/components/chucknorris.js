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
            <h1 className="chuckheader">Chuck Norris joke generator</h1>
           <button className="chuckbtn" onClick={() => this.callAPI()}>Get new joke</button>
           <p className="joke">{this.state.joke}</p>
            </div>
        )
    }
}
