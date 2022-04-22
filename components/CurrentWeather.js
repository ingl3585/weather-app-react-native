import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

const CurrentWeather = ({ currentWeatherData, capitalizeDescription }) => {
	// Render Current Weather Data or Null
	if (currentWeatherData) {
		return (
			<View style={styles.topSection}>
				<View>
					<Text style={styles.text}>Icon</Text>
					<Text style={styles.text}>{capitalizeDescription()}</Text>
					<Text style={styles.text}>{currentWeatherData.temp}°F</Text>
				</View>
				<View style={styles.extraWeatherInfo}>
					<Text>{currentWeatherData.wind_spd} mph</Text>
					<Text>{currentWeatherData.rh}%</Text>
				</View>
			</View>
		);
	} else {
		return null;
	}
};
// Styles
const styles = StyleSheet.create({
	topSection: {
		flex: 0.8,
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
	},
	extraWeatherInfo: {
		display: 'flex',
		flexDirection: 'row',
	},
	text: {
		color: '#405C63',
		fontSize: 25,
		textAlign: 'center',
	},
});

export default CurrentWeather;
