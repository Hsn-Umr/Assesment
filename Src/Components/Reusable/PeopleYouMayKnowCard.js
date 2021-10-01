import React from 'react'
import { View, Image, TouchableOpacity, Text } from 'react-native'
import { styles } from './ReusableStyle'
import Icon from 'react-native-vector-icons/MaterialIcons'

const PeopleYouMayKnowCard = ({ peopleSource, location, name }) => {
    return (
        <View style={styles.peopleCardContainer}>
            <View style={styles.storyCardUser}>
                <Image style={styles.peopleIconImg}
                    source={peopleSource}
                />
                <View style={styles.peopleFooter}>
                    <Text style={styles.peopleText}>{name}</Text>
                    <Text> {location} </Text>
                </View>
                <View style={{ flexDirection: 'row' }}>
                    <TouchableOpacity style={styles.addFriend}>
                        <Icon name={'person-add-alt-1'} size={20} color={'#fff'} />
                        <Text style={styles.btnText}>Add Friend</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.remove}>
                        <Text style={styles.removeText}>Remove</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

export default PeopleYouMayKnowCard
