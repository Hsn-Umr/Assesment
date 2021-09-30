import React from 'react'
import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import LiveIcon from 'react-native-vector-icons/Entypo';
import PhotoIcon from 'react-native-vector-icons/MaterialIcons'
import IconMesenger from 'react-native-vector-icons/MaterialCommunityIcons';
import images from '../Assets/Images'
import Avatar from './Reusable/Avatar'
import { styles } from './ComponetStyles'
import AppColor from '../Theme/colors';


function ToolBar() {
    const [details, setDetails] = React.useState('');
    return (
        <>
            <View style={styles.toolBarContainer}>
                <View style={styles.divider} />
                <View style={[styles.row, {height: 60, top: 5}]}>
                    <Avatar source={images.User1} />
                    <TextInput style={styles.input} onChange={text => setDetails(text)} value={details} placeholder="What's on your mind?" />
                </View>
                <View style={styles.divider} />
                <View style={styles.row}>
                    <TouchableOpacity style={styles.menu}>
                        <LiveIcon name={'video-camera'} size={20} color={AppColor.redLight} />
                        <Text style={styles.menuText}>Live</Text>
                    </TouchableOpacity>
                    <View style={styles.separator} />

                    <TouchableOpacity style={styles.menu}>
                        <PhotoIcon
                            name={'photo-library'} size={20} color={AppColor.greenLight} />
                        <Text style={styles.menuText}>Photo</Text>
                    </TouchableOpacity>
                    <View style={styles.separator} />

                    <TouchableOpacity style={styles.menu}>
                        <IconMesenger
                            name={'video-plus'} size={20} color={AppColor.blueLight} />
                        <Text style={styles.menuText}>Room</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.bottomDivider} />
        </>
    )
}

export { ToolBar };
