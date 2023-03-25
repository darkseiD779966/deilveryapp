import { Text ,View,Image, TextInput, ScrollView } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import {  SafeAreaView} from 'react-native-safe-area-context';
import {UserIcon,ChevronDownIcon,AdjustmentsVerticalIcon,MagnifyingGlassIcon} from 'react-native-heroicons/outline'
import Categories from "../components/Categories";
const Homescreen = () => {
  


  return (
    <SafeAreaView className="bg-white pt-5">
{/*header */}
        <View className="flex-row pb-3 mx-2 items-center space-x-2 ">
          <Image 
          source={require("../assets/sting.png")}
          className="h-7 w-7 bg-gray-300 rounded-full "/>

        <View className="flex-1">
        <Text className="font-bold text-gray-400  text-xs">Deliver Now!</Text>
        
        <Text className="font-bold text-xl">Current Location <ChevronDownIcon size={20} color="#00CCBB" /></Text>

</View>
<UserIcon size={35} color="#00CCBB" />
</View>
{/*search */}
<View className="flex-row items-center space-x-2 pb-2 px-4">
<View className="flex-row flex-1 space-x-2 p-3 bg-gray-200">
    <MagnifyingGlassIcon color="gray" size={20} />
    <TextInput placeholder="Restaurants and Dishes" keyboardType="default" />
  </View>

  <AdjustmentsVerticalIcon color="#00CCBB" />
</View>
{/* body*/}
<ScrollView className="bg-gray-100" contentContainerStyle={{
  paddingBottom:100,
}}>
 
  <Categories />
</ScrollView>

        </SafeAreaView>
   
  )
}

export default Homescreen