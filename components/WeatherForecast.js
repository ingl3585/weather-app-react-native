import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

const WeatherForecast = () => {
	return (
		<View style={styles.section}>
			<Text style={styles.text}>Weather Forecast</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	section: {
		display: 'none',
		// height: 200,
		// display: 'flex',
		// alignItems: 'center',
		// justifyContent: 'center',
	},
	text: {
		color: 'white',
		fontSize: 25,
		textAlign: 'center',
	},
});

export default WeatherForecast;
