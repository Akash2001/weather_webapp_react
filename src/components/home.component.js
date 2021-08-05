import { Component } from "react";
import axios from 'axios';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/css/styles.css'
import rain from '../assets/images/rain.jpg';
import clear from '../assets/images/clear.png';
import cloud from '../assets/images/cloud.jpg';
import { getAllByPlaceholderText, getDefaultNormalizer } from "@testing-library/react";

const Cities = (props) => {
    return (
        <div id="cities" className="col-lg-3 col-md-4 col-sm-6" onClick={() => props.getData(props.name)}>
            <div>
                {props.name}
            </div>
        </div>
    );
}

const Weather = (props) => {
    const weather = props.weather[0].main;
    var temp = props.main.temp;
    temp-=273.5;
    temp=Math.ceil(temp);
    var img = cloud;
    if (weather === 'Clear') {
        img = clear;
    }
    if (weather === 'Rain'|| weather==='Thunderstorm') {
        img = rain;
    }
    const date = new Date(props.dt*1000);
    return (
        <div id="weatherCart">
            <div id="weatherCondition">
                {weather}<br />
                <img src={img} alt={weather} />
            </div>
            <div id="cityName" className="row">
                <div className="col-sm-8">
                    {props.name}<br/>
                    <div id="date">{date.toString()}</div>
                </div>
                <div className="col-sm-4">
                    {temp} deg C
                </div>
            </div>
        </div>
    );
}

export default class Home extends Component {
    constructor(props) {
        super(props);

        this.state={
            city: ''
        }

        this.getData = this.getData.bind(this);
        this.getInput = this.getInput.bind(this);
    }
    getInput(e){
        this.getData(e.target.value);
    }
    getData(city) {
        ReactDOM.render(<div id="loading"><h4>...Loading</h4></div>, document.getElementById('weather'));
        axios.get('https://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=3cfc2f0517db7bc62b4eed703982342d')
            .then(res => {
                console.log(res.data);

                ReactDOM.render(<Weather {...res.data} />, document.getElementById('weather'));

            })
            .catch((err) => {
                console.log('Hi');
                console.log(err);

                ReactDOM.render(<center><h4>Something went wrong!</h4></center>, document.getElementById('weather'));
            });
    }
    render() {
        const cities = [
            { name: 'Jalna' },
            { name: 'London' },
            { name: 'Paris' },
            { name: 'Mumbai' },
            { name: 'Delhi' },
            { name: 'Singapore' },
            { name: 'Kolkata' },
            { name: 'Chennai' },
            { name: 'Bangalore' },
            { name: 'Chandigarh' },
            { name: 'Pune' },
            { name: 'Nagpur' },
            { name: 'Aurangabad' },
            { name: 'Nashik' },
            { name: 'Surat' },
            { name: 'Kota' },
            { name: 'Latur' },
            { name: 'Lucknow' },
            { name: 'Indore' },
            { name: 'Dhule' }
        ];
        return (
            <>
            <center><h3>Select a city</h3></center>
                <div id="cityList" className="row">
                    {cities.map((city) => {
                        return <Cities key={city.id} {...city} getData={this.getData} />
                    })}
                </div>

                <div id="cityInput">
                    <center><h4>Enter a city</h4></center>
                    <form>
                        <input type="text" onInput={this.getInput}/>
                    </form>
                </div>

                <div id="weather">

                </div>
            </>
        );
    }
}