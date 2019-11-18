import React from 'react';
import ThunderStormIcon from '../assets/thunderstorm_icon.png';
import RainIcon from '../assets/rain_icon.png';
import SnowIcon from '../assets/snow_icon.png';
import ClearIcon from '../assets/clear_icon.png';
import CloudsIcon from '../assets/clouds_icon.png';

export default class getWeather extends React.Component {
  constructor(props){
    super(props);
    this.state = { inputCity: "",
    input: "", apiHumidity: "", apiName: "", apiTemp: ""};
  }

  callAPI() {
    fetch(`http://localhost:9000/getWeather?city=${this.state.inputCity}`)
    .then(res => res.json())
    .then(res => {
        let weatherId = res.list[0].weather[0].id;

      if(weatherId <= 232) {
           this.setState({ weatherIcon: ThunderStormIcon })
      } else if(weatherId >= 300 && weatherId <= 531) {
           this.setState({ weatherIcon: RainIcon });
      } else if(weatherId >= 600 && weatherId <= 622 ) {
           this.setState({ weatherIcon: SnowIcon });
      } else if(weatherId === 800) {
           this.setState({ weatherIcon: ClearIcon });
      } else if(weatherId >= 801 && weatherId <= 804) {
           this.setState({ weatherIcon: CloudsIcon });
      }
      this.setState({ apiHumidity: res.list[0].main.humidity, apiTemp: (Math.round(res.list[0].main.temp)), apiName:res.list[0].name});
  })
  }

  myCHangeHandler = (event) =>{
      this.setState({
          input: event.target.value
      });
  }

  addTask = () => {

      this.setState({
          inputCity: this.state.input,
          input: ''
      })
      this.callAPI();
  }

  render() {
    return (
      <div className="App">
      <header className="App-header">
      <h1 className="Api-Project">Welcome to my API project</h1>
        <p className="Api-project">The Weather in {this.state.apiName}</p>
        Enter City <input className="inputbox" value={this.state.input} onChange={this.myCHangeHandler}placeholder="city" />
        <button className="myButton" onClick={this.addTask}>Add Task</button>
        <img src={this.state.weatherIcon}/>
        <p> Temperature: {this.state.apiTemp}C </p> 
        <p> Humidity: {this.state.apiHumidity}</p>
        </header>
      </div>
    )
  }
}



