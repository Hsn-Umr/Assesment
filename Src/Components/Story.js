import React from 'react'
import { ScrollView, View } from 'react-native'
import images from '../Assets/Images'
import { styles } from './ComponetStyles'
import StoryCard from './Reusable/StoryCard'


function Story() {
    return (
        <>
            <View style={styles.storyContainer}>
                <ScrollView
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    style={{ paddingLeft: 11 }}>
                    <StoryCard
                        storySource={images.Story1}
                        icon
                        user={'Add To Story'}
                    />
                    <StoryCard
                        storySource={images.Story2}
                        storyUser={images.User1}
                        user={'Test 1'}
                        img
                    />
                    <StoryCard
                        storySource={images.Story3}
                        storyUser={images.User2}
                        user={'Test 2'}
                        img
                    />
                    <StoryCard
                        storySource={images.Story4}
                        storyUser={images.User3}
                        user={'Test 3'}
                        img
                    />
                    <StoryCard
                        storySource={images.Story2}
                        storyUser={images.User4}
                        user={'Test 4'}
                        img
                    />
                </ScrollView>
            </View>
            <View style={styles.bottomDivider} />
        </>
    )
}

export { Story }
