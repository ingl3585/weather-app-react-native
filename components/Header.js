import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

const Header = ({ currentWeatherData }) => {
	if (currentWeatherData) {
		return (
			<View style={styles.header}>
				<View style={styles.leftNav}>
					<Text style={styles.text}>Pin</Text>
					<Text style={styles.text}>
						{currentWeatherData.city_name}, {currentWeatherData.state_code}
					</Text>
				</View>
				<View style={styles.rightNav}>
					<Text style={styles.text}>Calendar</Text>
				</View>
			</View>
		);
	} else {
		return null;
	}
};
// Styles
const styles = StyleSheet.create({
	header: {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		height: 75,
	},
	leftNav: {
		display: 'flex',
		flexDirection: 'row',
		marginLeft: 25,
	},
	rightNav: {
		display: 'flex',
		flexDirection: 'row',
		marginRight: 25,
	},
	text: {
		color: '#405C63',
		fontSize: 25,
	},
});

export default Header;
