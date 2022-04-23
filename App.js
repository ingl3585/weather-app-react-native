import React, { useState, useEffect } from 'react';
import { StyleSheet, View, StatusBar } from 'react-native';
import Header from './components/Header';
import CurrentWeather from './components/CurrentWeather';
import WeatherForecast from './components/WeatherForecast';
import * as Location from 'expo-location';
import { API_KEY } from 'react-native-dotenv';

const BASE_WEATHER_URL = `https://api.weatherbit.io/v2.0`;

const App = () => {
	// Current Weather Data State
	const [currentWeatherData, setCurrentWeatherData] = useState(null);
	// Forecast Weather Data State
	const [forecastWeatherData, setForecastWeatherData] = useState(null);
	// Error Message State
	const [error, setError] = useState(null);
	// Weather API Call
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
			const forecastWeatherEndpoint = `${BASE_WEATHER_URL}/forecast/daily?lat=${latitude}&lon=${longitude}&key=${API_KEY}&units=I&days=5`;
			const [currentWeatherEndpointResponse, forecastWeatherEndpointResponse] =
				await Promise.all([
					fetch(currentWeatherEndpoint),
					fetch(forecastWeatherEndpoint),
				]);
			const [currentData, forecastData] = await Promise.all([
				currentWeatherEndpointResponse.json(),
				forecastWeatherEndpointResponse.json(),
			]);
			if (
				currentWeatherEndpointResponse.ok &&
				forecastWeatherEndpointResponse.ok
			) {
				setForecastWeatherData(forecastData.data);
				setCurrentWeatherData(currentData.data[0]);
			} else {
				setError(forecastData.message);
				setError(currentData.message);
			}
		} catch (error) {
			console.log(error.message);
		}
	};
	// Call APIs on Page Load
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
	if (currentWeatherData && forecastWeatherData) {
		return (
			<>
				<StatusBar barStyle='dark-content' translucent={true} />
				<View style={styles.container}>
					<Header currentWeatherData={currentWeatherData} />
					<CurrentWeather
						currentWeatherData={currentWeatherData}
						capitalizeDescription={capitalizeDescription}
					/>
					<WeatherForecast forecastWeatherData={forecastWeatherData} />
				</View>
			</>
		);
	} else {
		return null;
	}
};
// Styles
const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#4BE2E3',
		paddingTop: 30,
	},
});

export default App;
