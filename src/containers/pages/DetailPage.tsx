import * as React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export default class DetailPage extends React.Component {
	constructor(props: any) {
		super(props);
		// TODO:この方法遅延があるからあんま良くなくね知らんけど
		this.props.navigator.setTitle({
			title: props.name
		});
	}
	render() {
		return (
			<View style={styles.container}>
				<Text style={styles.welcome}>ooooooooooo!!!!!!!!!</Text>
				<Text style={styles.welcome}>{this.props.full_name}</Text>
				<Text style={styles.welcome}>{this.props.login}</Text>
				<Image
					style={{ width: 20, height: 20 }}
					source={{ url: this.props.owner.avatar_url }}
				/>
				<Text>{this.props.description}</Text>
				<Text>{this.props.url}</Text>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#F5FCFF'
	},
	welcome: {
		fontSize: 20,
		textAlign: 'center',
		margin: 10
	}
});
