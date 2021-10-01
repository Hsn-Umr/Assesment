import React from 'react'
import { ScrollView, View, TouchableOpacity, Text } from 'react-native'
import Avatar from './Reusable/Avatar'
import images from '../Assets/Images'
import { styles } from './ComponetStyles'
import User from './Reusable/User'
import Entypo from 'react-native-vector-icons/Entypo'
import Ionicon from 'react-native-vector-icons/Ionicons'
import PeopleYouMayKnowCard from './Reusable/PeopleYouMayKnowCard'

function PeopleYouMayKnow() {
    return (<View style={{backgroundColor: '#fff'}}>
        <View style={styles.peopleKnowContainer}>

            <View style={{ flexDirection: 'row' }}>
                <Text style={styles.roomHeadingText}>People You May Know</Text>
                <Entypo
                    name={'dots-three-horizontal'}
                    size={15}
                    color='#222121'
                    onPress={() => {alert('pressed')}}
                    style={{ paddingTop: 10, position: 'absolute', right: 10 }}
                />
            </View>
            <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
            >
                <PeopleYouMayKnowCard
                    peopleSource={images.User1}
                    name={'Test User'}
                    location={'From Lahore, Pakistan'}
                />
                <PeopleYouMayKnowCard
                    peopleSource={images.User2}
                    name={'User Two'}
                    location={'From Lahore, Punjab'}
                />
                <PeopleYouMayKnowCard
                    peopleSource={images.User3}
                    name={'User Three'}
                    location={'New to Facebook'}
                />
                <PeopleYouMayKnowCard
                    peopleSource={images.User4}
                    name={'User Three'}
                    location={'From Lahore, Punjab'}
                />
                <PeopleYouMayKnowCard
                    peopleSource={images.User5}
                    name={'User Three'}
                    location={'From Karachi, Sindh'}
                />
            </ScrollView>
        </View>
        <TouchableOpacity style={styles.peopleSeeAll}>
            <Text>See All</Text>
            <Ionicon
                name={'chevron-forward'}
                size={15}
                color='#222121'
                style={{ paddingTop: 1 }}
            />
        </TouchableOpacity>
        <View style={styles.bottomDivider} />

    </View>)
}

export { PeopleYouMayKnow }
