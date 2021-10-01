import React from 'react'
import { StatusBar, SafeAreaView } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import AppNavigator from './Src/Navigation/AppNavigation';
//Redux
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import rootReducer from "./Src/Redux/postSlice";

const store = configureStore({
	reducer: rootReducer
});

export default function App() {
	return (

		<SafeAreaView style={{ flex: 1 }}>
			<StatusBar
				backgroundColor='#FFFFFF'
				barStyle='dark-content'
			/>
			<Provider store={store}>
				<NavigationContainer>
					<AppNavigator />
				</NavigationContainer>
			</Provider>

		</SafeAreaView>

	);
}
