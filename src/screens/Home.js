import { StyleSheet, Text, View, TextInput, StatusBar,ScrollView, SafeAreaView,FlatList } from 'react-native'
import React from 'react'
import { horizontalScale, verticalScale } from '../constants/constants'
import { COLORS } from '../../assets/theme/theme'
import Icon from 'react-native-vector-icons/Ionicons';

const MOCKDATA = [
  {
    id:1,
    name:"Clothes",
  },
  {
    id:2,
    name:"Clothes",
  },
  {
    id:3,
    name:"Clothes",
  },
  {
    id:4,
    name:"Clothes",
  },
  {
    id:5,
    name:"Clothes",
  },

]
const Home = () => {
  return (
    <ScrollView style={styles.container}>
    <SafeAreaView>
      <StatusBar/>
     <View style={styles.searchBarContainer}>
     <View style={styles.circle}></View>
     <View style={styles.innercircle}></View>
      <Text style={styles.searchText}>Find the best {'\n'}Items for you</Text>

      <TextInput style={styles.searchInput} placeholderTextColor="black"  placeholder='Search Here'/>
      <Icon style={styles.icon} name='search' size={22} color="black"/>
     </View>
     <View style={styles.secondCard}>
      <Text style={styles.categoryText}>Categories</Text>
      <FlatList data={MOCKDATA} horizontal={true} keyExtractor={item=>item.id} renderItem={(e)=>{
        return(
          <View>
            <Text style={{color:"black"}}>{e.name}</Text>
          </View>
        )
      }} />
     </View>
     
    </SafeAreaView>
    </ScrollView>
  )
}

export default Home

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:COLORS.CARDBACKGROUND
  },
  searchBarContainer:{
    width:"80%",
    backgroundColor:"#BEC2FF",
    height:verticalScale(180),
    borderRadius:18,
    alignSelf:"center",
    marginTop:30,
  },
  circle:{
    height:verticalScale(180),
    width:horizontalScale(180),
    borderRadius:120,
    borderWidth:18,
    opacity:0.5,
    borderLeftColor:"white",
    borderRightColor:"white",
    borderTopColor:"white",
    borderBottomColor:"white",
   position:"absolute",
   top:-20,
   right:-65,

  },
  innercircle:{
    height:verticalScale(150),
    width:horizontalScale(150),
    borderRadius:100,
    borderWidth:3,
    opacity:0.5,
    borderColor:"white",
   position:"absolute",
  top:-75,
  right:-20
  },
  searchText:{
    fontFamily:"Montserrat-Bold",
    fontSize:30,
    color:"#3C42A5",
    marginTop:28,
    marginLeft:18,
    padding:5
  },
  searchInput:{
    padding:15,
    borderColor:"white",
    borderRadius:50,
    width:"90%",
    alignSelf:"center",
    marginTop:25,
   backgroundColor:"white",
   color:COLORS.TEXT,
  },
  icon:{
    position:"absolute",
    bottom:41,
    right:40,
    opacity:0.7
  }
})