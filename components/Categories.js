import {ScrollView, View, Text } from 'react-native'
import React from 'react'
import CategoryCard from './CategoryCard'

const Categories = () => {
  return (
    <ScrollView contentContainerStyle={{
      paddingHorizontal:15,
      paddingTop:10,
  }}
  horizontal
  showsHorizontalScrollIndicator={false}
  >
     <CategoryCard imgUrl={require("../assets/grilled.jpg")}
     title="testing 1"/>
     <CategoryCard imgUrl={require("../assets/grilled.jpg")}
     title="testing 1"/> 
     <CategoryCard imgUrl={require("../assets/grilled.jpg")}
     title="testing 1"/>

    </ScrollView>
  )
}

export default Categories