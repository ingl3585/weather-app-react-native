import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

const Header = () => {
	return (
		<View style={styles.header}>
			<Text style={styles.text}>Header</Text>
		</View>
	);
};
// Styles
const styles = StyleSheet.create({
	header: {
		height: 75,
		display: 'flex',
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-evenly',
	},
	text: {
		color: 'white',
		fontSize: 30,
		textAlign: 'center',
	},
});

export default Header;
