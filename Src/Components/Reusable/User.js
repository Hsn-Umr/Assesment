import React from 'react'
import { TouchableOpacity } from 'react-native'
import Avatar from './Avatar'
import { styles } from './ReusableStyle'


const User = ({ source }) => {
    return (
        <TouchableOpacity style={styles.userImg}>
            <Avatar
                source={source}
                online={true}
            />
        </TouchableOpacity>
    )
}

export default User
