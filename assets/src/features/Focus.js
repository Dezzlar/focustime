import React,{useState} from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { TextInput } from 'react-native-paper';
import { colors } from '../utils/colors';
import {RoundedButton} from '../components/RoundedButton';
import {spacing, fontSizes} from '../utils/sizes';

export const Focus = ({addSubject}) => {
  const[subject, setSubject] = useState(null);
  console.log(subject);
  return (
  <View style={styles.container}>
    <View style={styles.inputContainer}>
      <TextInput onChangeText={setSubject} style={styles.textInput} label="What would you like to focus on?" />
      <View>
      <RoundedButton style={styles.buttonStyle} title = '+' size = {60} onPress={() => {addSubject(subject)}}/>
      </View>
    </View>
    
  </View>
)};

const styles = StyleSheet.create({
  container: {

  },
  inputContainer: {
    padding: spacing.lg,
    justifyContent: 'top',
    flexDirection : 'row',
  },
  textInput : {
    flex : 1,
    marginRight: spacing.md,

  },
  buttonStyle : {
    justifyContent: 'center',
  }
});
