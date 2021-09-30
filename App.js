//packages
import React from 'react'
import { StatusBar, SafeAreaView, ScrollView } from 'react-native'
// components
import { HomeTopBar, ToolBar, CreateRoom, Story, NewsFeedPost } from './Src/Components';
// style
import { styles } from './Src/Theme/style';

function App() {
	return (
		<>
			<StatusBar
				backgroundColor='#FFFFFF'
				barStyle='dark-content'
			/>
			<SafeAreaView style={styles.body}>
				<ScrollView>
					<HomeTopBar />
					<ToolBar />
					<CreateRoom />
					<Story />
					<NewsFeedPost />
				</ScrollView>
			</SafeAreaView>
		</>
	);
}

export default App;
