import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

const WeatherForecast = ({ forecastWeatherData }) => {
	return (
		<View style={styles.section}>
			<Text style={styles.text}>Weather Forecast</Text>
		</View>
	);
};
// Styles
const styles = StyleSheet.create({
	section: {
		height: 225,
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
	},
	text: {
		color: '#405C63',
		fontSize: 25,
		textAlign: 'center',
	},
});

export default WeatherForecast;
