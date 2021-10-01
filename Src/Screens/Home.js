import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { fetchPostList } from '../Redux/postSlice';
import { RefreshControl, SafeAreaView, StyleSheet, ScrollView } from 'react-native';
import { ToolBar, CreateRoom, Story, NewsFeedPost } from '../Components'


const wait = (timeout) => {
  return new Promise(resolve => setTimeout(resolve, timeout));
}
function Home() {
  const [refreshing, setRefreshing] = React.useState(false);
  const { postList } = useSelector((state) => state);
  const dispatch = useDispatch();
  useEffect(() => {
    setRefreshing(true);
    postList.length === 0 && dispatch(fetchPostList());
    console.log('post list from store', postList.data);
    setRefreshing(false)
  }, [dispatch, postList]);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    dispatch(fetchPostList());
    wait(2000).then(() => setRefreshing(false));
  }, [dispatch]);

  return (
    <SafeAreaView style={styles.body}>
      <ScrollView refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }>
        <ToolBar />
        <CreateRoom />
        <Story />
        <NewsFeedPost posts={postList.data} />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export { Home };