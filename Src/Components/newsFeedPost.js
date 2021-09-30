import React from 'react'
import images from '../Assets/Images'
import Post from './Reusable/Post'


function NewsFeedPost() {
	return (<>
		<Post 
            sourceUser={images.User1}
            userName={'Test User'}
            time={'9PM'}
            postDetail={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."}
            sourcePost={images.Post1}
            likes={'200 likes'}
            comments={'2k comments'}
        />
        <Post 
        sourceUser={images.User1}
        userName={'Test User'}
        time={'9PM'}
        postDetail={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."}
        sourcePost={images.Post2}
        likes={'200 likes'}
        comments={'2k comments'}
    />
	</>)
}

export { NewsFeedPost }
