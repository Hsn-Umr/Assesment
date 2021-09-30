//packages
import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
// importing styles
import { styles } from './ComponetStyles'
//importing icons
import Icon from 'react-native-vector-icons/FontAwesome';
import IconMesenger from 'react-native-vector-icons/MaterialCommunityIcons';

function HomeTopBar() {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>facebook</Text>
            <View style={{flexDirection: 'row'}}>
                <TouchableOpacity style={styles.btn}>
                    <Icon name={'search'} size={20} color='black' />
                </TouchableOpacity>
                <TouchableOpacity style={styles.btn}>
                    <IconMesenger name={'facebook-messenger'} size={20} color='black' />
                </TouchableOpacity>
            </View>
        </View>
    )
}

export { HomeTopBar };
