import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import * as Location from 'expo-location';
import { API_KEY } from 'react-native-dotenv';

const BASE_WEATHER_URL = `https://api.weatherbit.io/v2.0`;

const CurrentWeather = () => {
	// Current Weather Data State
	const [currentWeatherData, setCurrentWeatherData] = useState(null);
	// Error Message State
	const [error, setError] = useState(null);
	// API Call
	const fetchWeatherData = async () => {
		try {
			let { status } = await Location.requestForegroundPermissionsAsync();
			if (status !== 'granted') {
				setError('Access to location is needed to run the app.');
				console.log('Permission to access location was denied.');
				return;
			}
			const location = await Location.getCurrentPositionAsync();
			const latitude = location.coords.latitude;
			const longitude = location.coords.longitude;
			const currentWeatherEndpoint = `${BASE_WEATHER_URL}/current?lat=${latitude}&lon=${longitude}&key=${API_KEY}&units=I`;
			const response = await fetch(currentWeatherEndpoint);
			const data = await response.json();
			if (response.ok) {
				setCurrentWeatherData(data.data[0]);
			} else {
				setError(data.message);
			}
		} catch (error) {
			console.log(error.message);
		}
	};
	// Call API on Page Load
	useEffect(() => {
		fetchWeatherData();
	}, []);
	// Capitalize Weather Description (Dynamically)
	const capitalizeDescription = () => {
		// Get Description from currentWeatherData
		const description = currentWeatherData.weather.description;
		// RegEx Transformation
		const capitalized = description.replace(/(^\w{1})|(\s+\w{1})/g, (letter) =>
			letter.toUpperCase()
		);
		// Return New Description
		return capitalized;
	};
	// Render Current Weather Data or Error Message
	if (currentWeatherData) {
		return (
			<View style={styles.section}>
				<Text style={styles.text}>{capitalizeDescription()}</Text>
				<Text style={styles.text}>{currentWeatherData.temp}°F</Text>
			</View>
		);
	} else {
		return (
			<View style={styles.section}>
				<Text style={styles.text}>Error: {error}</Text>
			</View>
		);
	}
};
// Styles
const styles = StyleSheet.create({
	section: {
		height: 50,
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
	},
	text: {
		color: 'white',
		fontSize: 25,
		textAlign: 'center',
	},
});

export default CurrentWeather;
