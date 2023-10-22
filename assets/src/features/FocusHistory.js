import React from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import {colors} from '../utils/colors';
import {fontSizes, spacing} from '../utils/sizes'



export const FocusHistory = ({history}) => {
  if(!history || !history.length) return null;
  const renderItems = ({item}) => <Text style ={styles.item}> - {item}</Text>
  return(
    <View style={styles.container}>
      <Text style ={styles.title}> Focus history so far</Text>
      <FlatList
        data ={history}
        renderItem={renderItems}
      />
    </View>
  )
}





const styles = StyleSheet.create({
  container: {
    flex:1,
    padding: spacing.md,
  },
  item : {
    paddingTop: spacing.md,
     color: colors.white,
    fontSize: fontSizes.md,

  },
  title:{
    color: colors.white,
    fontSize: fontSizes.lg,
    fontWeight:'bold',
    

  }
})