import React from 'react'
import { View, Image, Text, TouchableOpacity } from 'react-native'
import { styles } from './ReusableStyle'
import Avatar from './Avatar'
import AntDesign from 'react-native-vector-icons/AntDesign'

const StoryCard = ({ storySource, storyUser, user, icon, img }) => {
    return (<>
        {img && (<TouchableOpacity style={styles.storyCard}>
            <Image style={styles.storyImg}
                source={storySource}
            />
            <View style={styles.storyUser}>
                <Avatar
                    source={storyUser}
                    story={true}
                />
            </View>

            <View style={styles.storyFooter}>
                <Text style={styles.storyText}>{user}</Text>
            </View>
        </TouchableOpacity>
        )}
        {icon && (<TouchableOpacity style={styles.storyCardUser}>
            <Image style={styles.storyIconImg}
                source={storySource}
            />
            <View style={styles.storyUserIcon}>
                <AntDesign
                    name='plus'
                    size={26}
                    color={'white'}
                />
            </View>
            <View style={styles.storyFooter}>
                <Text style={[styles.storyText, styles.iconText]}>Add To Story</Text>
            </View>
        </TouchableOpacity>
        )}

    </>)
}

export default StoryCard
