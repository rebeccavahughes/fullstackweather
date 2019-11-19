import React, { Component } from 'react'

export default class gameofthrones extends Component {
        constructor(props){
            super(props);
            this.state = {House: "", Region: "", coatOfArms: ""}
        }
        
    callAPI = () => {
        fetch(`http://localhost:9000/gameofthrones?house=${this.refs.house.value}`)
        .then(res => res.json())
        .then(res => this.setState({
            House: res.name, Region: res.region, coatOfArms: res.coatOfArms
        }))
    }    

    
    // componentWillMount(){
    //     this.callAPI()
    // }
    render() {
        return (
            <div>
            <div>
            <h1>Game of thrones Houses</h1>
          <select name="value" ref="house">
              <option value="House Algood">House Algood</option>
              <option value="House Allyrion of Godsgrace">House Allyrion of Godsgrace</option>
              <option value="House Amber">House Amber</option>
              <option value="House Ambrose">House Ambrose</option>
              <option value="House Appleton of Appleton">House Appleton of Appleton</option>
              <option value="House Arryn of Gulltown">House Arryn of Gulltown</option>
              <option value="House Arryn of the Eyrie">House Arryn of the Eyrie</option>
              <option value="House Ashford of Ashford">House Ashford of Ashford</option>
              <option value="House Ashwood">House Ashwood</option>
              <option value="House Baelish of Harrenhal">House Baelish of Harrenhal</option>
          </select>
          <button className="Ghouse" onClick={this.callAPI}>submit house</button>
            </div>
            <div>
            <p> House: {this.state.House} </p> 
            <p>Region: {this.state.Region}</p>
            <p>Coat of Arms: {this.state.coatOfArms}</p>
        </div>
        </div>
        )
    }
}
