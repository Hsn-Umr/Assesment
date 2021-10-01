import React from 'react'
import { FlatList, View } from 'react-native'
import { PeopleYouMayKnow } from '.'
import Post from './Reusable/Post'


function NewsFeedPost({ posts }) {
    console.log('news', posts)
    return (<View style={{backgroundColor: '#fff'}}>
        <PeopleYouMayKnow />
        <FlatList
            data={posts}
            keyExtractor={(item, index) => index}
            renderItem={({ item }) => {
                //console.log('news', item.owner.picture)
                let date = new Date(item.publishDate);
                return (
                    <Post
                        sourceUser={item.owner.picture}
                        userName={item.owner.firstName + ' ' + item.owner.lastName}
                        time={date.toLocaleString('en-US', { hour: 'numeric', hour12: true })}
                        postDetail={item.text}
                        tags={item.tags}
                        sourcePost={item.image}
                        likes={item.likes + ' likes'}
                        comments={'2k comments'}
                    />
                );
            }}
        />
    </View>)
}

export { NewsFeedPost }
