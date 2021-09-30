import React from 'react'
import { View, Image } from 'react-native'
import { styles } from './ReusableStyle'


const Avatar = ({ source, online, story }) => {
	return (
		<View style={styles.container}>
			<Image style={styles.image} source={source} story={story} />
			{online && <View style={styles.userActive} />}
		</View>
	)
}

export default Avatar
