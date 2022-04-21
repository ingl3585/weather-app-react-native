import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

const Footer = () => {
	return (
		<View style={styles.footer}>
			<Text style={styles.text}>Footer</Text>
		</View>
	);
};
// Styles
const styles = StyleSheet.create({
	footer: {
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

export default Footer;
