import React, { Component } from 'react';
import { connect } from 'react-redux';

import Chart from './chart';

class WeatherList extends Component {

	constructor(props){
		super(props)


	}

	weather(){
		return this.props.weathers.map( (weather) => {
			return (
				<li key={weather.city.name}>{weather.city.name}</li>
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
