import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { searchWeather } from '../actions';

class SearchBar extends Component {
	constructor(props){
		super(props)

		this.state = {
			term: ''
		}
		this.submitForm = this.submitForm.bind(this);
		this.onInputChange = this.onInputChange.bind(this);
	}

	submitForm(event) {
		event.preventDefault();
		this.props.searchWeather(this.state.term);
		this.setState({ term: ''})
	}

	onInputChange(event) {
		this.setState({term: event.target.value})
	}

	render(){
		return (
			<div>
				<form onSubmit={ this.submitForm }>
					<input onChange={this.onInputChange}
						placeholder="Enter a city" value={this.state.term} />
					<button type="submit">Enter</button>
				</form>
			</div>
		)
	}
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({searchWeather: searchWeather}, dispatch);
}

export default connect(null, mapDispatchToProps)(SearchBar)