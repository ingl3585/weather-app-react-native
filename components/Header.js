import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Entypo, FontAwesome } from '@expo/vector-icons';

const Header = ({ currentWeatherData }) => {
	if (currentWeatherData) {
		return (
			<View style={styles.header}>
				<View style={styles.leftNav}>
					<Entypo name='location-pin' size={25} color='black' />
					<Text style={styles.text}>
						{currentWeatherData.city_name}, {currentWeatherData.state_code}
					</Text>
				</View>
				<View style={styles.rightNav}>
					<FontAwesome name='calendar' size={25} color='black' />
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
		alignItems: 'center',
		marginLeft: 25,
	},
	rightNav: {
		display: 'flex',
		flexDirection: 'row',
		marginRight: 25,
	},
	text: {
		color: '#405C63',
		fontSize: 20,
	},
});

export default Header;
