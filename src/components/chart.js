import React from 'react';
import { Sparklines, SparklinesLine } from 'react-sparklines';

const Chart = (props) => {
	return (
		<div>
			<Sparklines data={props.temp}>
				<SparklinesLine />
			</Sparklines>
		</div>
	)
}

export default Chart;