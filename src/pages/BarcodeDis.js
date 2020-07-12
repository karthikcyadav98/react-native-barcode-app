import React, { Component } from 'react';
import { View, Text } from 'react-native';

export class BarcodeDis extends Component {
	render() {
		return (
			<View>
				{console.log(this.props.route.params.barcode)}
				<Text>barcode {this.props.route.params.barcode}</Text>
			</View>
		);
	}
}

export default BarcodeDis;
