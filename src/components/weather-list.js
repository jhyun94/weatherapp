import React, { Component } from 'react';
import { connect } from 'react-redux';

import Chart from './chart';

class WeatherList extends Component {

	constructor(props){
		super(props)


	}

	weather(){
		return this.props.weathers.map( (weather) => {
			const temp = weather.list.map( (x) => {
				return x.main.temp
			})
			return (
				<li key={weather.city.name}>
					<Chart temp={temp}/>
				</li>
			)
		})
	}


	render(){
		return (
			<ul>{this.weather()}</ul>
		)
	}
}

function mapStateToProps(state){
	return {weathers: state.weathers}
}

export default connect(mapStateToProps)(WeatherList);
