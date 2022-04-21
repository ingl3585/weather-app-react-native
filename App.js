import React from 'react';
import { StyleSheet, View } from 'react-native';
import CurrentWeather from './components/CurrentWeather';
import Header from './components/Header';
import WeatherForecast from './components/WeatherForecast';
import Footer from './components/Footer';

const App = () => {
	return (
		<View style={styles.container}>
			<Header />
			<CurrentWeather />
			<WeatherForecast />
			<Footer />
		</View>
	);
};
// Styles
const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#3C4F76',
		paddingTop: 30,
	},
});

export default App;
