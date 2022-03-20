import React, {Component} from 'react';
import {SafeAreaView,View,Text,StyleSheet,Button,TouchableOpacity,FlatList,ScrollView,Image,Dimensions} from 'react-native';
import news_data from './news_data.json';
import NewsCard from './components/NewsCard';
import news_banner_data from './news_banner_data.json';
import LogBoxInspectorContainer from 'react-native/Libraries/LogBox/LogBoxInspectorContainer';

function App(){

  const renderNews = ({item}) => <NewsCard news={item} />
  const edit_index = (item,index) => item.u_id.toString()
  const banner = () =><ScrollView horizontal showsHorizontalScrollIndicator={false}>
  {
    news_banner_data.map(bannerNews => <Image style={style.banner_image} source={{uri: bannerNews.imageUrl}} />)
  }
</ScrollView>

  return(
      <SafeAreaView style={style.container}>
        <View>
          <Text style={style.header}>NEWS</Text>



          <FlatList
          ListHeaderComponent={banner}
          keyExtractor={edit_index}
            data={news_data}
            renderItem={renderNews}
          />

        </View>
      </SafeAreaView>
  );

}


const style = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'bisque',
  },
  banner_image:{
    height: Dimensions.get("window").height / 5,
    width: Dimensions.get("window").width / 2,
  },
  header:{
    fontSize:50,
    fontWeight:'bold',
    fontStyle:'italic',
    
  },  
})

export default App;