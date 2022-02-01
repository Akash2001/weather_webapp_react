import React from "react";
import axios from 'axios';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/css/styles.css'
import rain from '../assets/images/rain.jpg';
import clear from '../assets/images/clear.png';
import cloud from '../assets/images/cloud.jpg';

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
    temp -= 273.5;
    temp = Math.ceil(temp);
    var img = cloud;
    if (weather === 'Clear') {
        img = clear;
    }
    if (weather === 'Rain' || weather === 'Thunderstorm') {
        img = rain;
    }
    const date = new Date(props.dt * 1000);
    return (
        <div id="weatherCart">
            <div id="weatherCondition">
                {weather}<br />
                <img src={img} alt={weather} />
            </div>
            <div id="cityName" className="row">
                <div className="col-sm-8 topBox">
                    {props.name}<br />
                    <div id="date">{date.toString()}</div>
                </div>
                <div className="col-sm-4 temp">
                    {temp} deg C
                </div>
            </div>
        </div>
    );
}

const getInput = (e) => {
    getData(e.target.value);
}

const getData = (city) => {
    ReactDOM.render(<div id="loading"><h4>...Loading</h4></div>, document.getElementById('weather'));
    axios.get('https://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=3cfc2f0517db7bc62b4eed703982342d')
        .then(res => {
            ReactDOM.render(<Weather {...res.data} />, document.getElementById('weather'));
        })
        .catch((err) => {
            ReactDOM.render(<center><h4>City not found!</h4></center>, document.getElementById('weather'));
        });
}

const Home = () => {
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
                        return <Cities key={city.id} {...city} getData={(city) =>getData(city)} />
                    })}
                </div>

                <div id="cityInput">
                    <center><h4>Or</h4></center>
                    <center><h4>Enter a city</h4></center>
                    <form>
                        <input type="text" onInput={getInput} />
                    </form>
                </div>

                <div id="weather">

                </div>
            </>
        );
}

export default Home;