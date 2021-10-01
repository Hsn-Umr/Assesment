import React from 'react'
import { View, Image } from 'react-native'
import { styles } from './ReusableStyle'


const Avatar = ({ source, online, story, post }) => {
	return (
		<View style={styles.container}>
			{!post && <Image style={styles.image} source={source} story={story} />}
			{post && <Image style={styles.image} source={{uri: source}} story={story} />}
			{online && <View style={styles.userActive} />}
		</View>
	)
}

export default Avatar
