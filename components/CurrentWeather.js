import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import { Feather } from '@expo/vector-icons';

const CurrentWeather = ({ currentWeatherData, capitalizeDescription }) => {
	// Weather Icon Url
	const weatherIcon = currentWeatherData.weather.icon;
	console.log(weatherIcon);
	const weatherIconUrl = `https://www.weatherbit.io/static/img/icons/${weatherIcon}.png`;
	// Render Current Weather Data or Null
	if (currentWeatherData) {
		return (
			<View style={styles.container}>
				<Image style={styles.weatherIcon} source={{ uri: weatherIconUrl }} />
				<View style={styles.weatherInfo}>
					<Text style={styles.weatherDescription}>
						{capitalizeDescription()}
					</Text>
					<Text style={styles.weatherTemperature}>
						{currentWeatherData.temp}°F
					</Text>
				</View>
				<View style={styles.extraWeatherInfo}>
					<Feather name='wind' size={25} color='black' />
					<Text style={styles.extraWeatherInfoText}>
						{currentWeatherData.wind_spd} mph
					</Text>
					<Feather name='droplet' size={25} color='black' />
					<Text style={styles.extraWeatherInfoText}>
						{currentWeatherData.rh}%
					</Text>
				</View>
			</View>
		);
	} else {
		return null;
	}
};
// Styles
const styles = StyleSheet.create({
	container: {
		flex: 1,
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
	},
	weatherIcon: {
		height: 200,
		width: 200,
	},
	weatherInfo: {
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		marginTop: 30,
	},
	weatherDescription: {
		fontSize: 20,
	},
	weatherTemperature: {
		fontSize: 50,
	},
	extraWeatherInfo: {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
		marginTop: 15,
	},
	extraWeatherInfoText: {
		fontSize: 14,
		marginLeft: 7.5,
		marginRight: 7.5,
	},
	text: {
		color: '#405C63',
		fontSize: 25,
		textAlign: 'center',
	},
});

export default CurrentWeather;
