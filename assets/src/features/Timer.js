import React, { useState } from 'react';
import { View, Text, StyleSheet, Vibration } from 'react-native';
import { useKeepAwake } from 'expo-keep-awake';
import { ProgressBar } from 'react-native-paper';
import { Countdown } from '../components/CountDown';
import { RoundedButton } from '../components/RoundedButton';
import { Timing } from './Timing';
import { spacing, fontSizes } from '../utils/sizes';
import { colors } from '../utils/colors';

const ONE_SECOND_IN_MS = 1000;

const PATTERN = [
  1 * ONE_SECOND_IN_MS,
  1 * ONE_SECOND_IN_MS,
  1 * ONE_SECOND_IN_MS,
  1 * ONE_SECOND_IN_MS,
  1 * ONE_SECOND_IN_MS,
];


export const Timer = ({ focusSubject, clearSubject, onTimerEnd }) => {
  useKeepAwake();
  const [isStarted, setIsStarted] = useState(false);
  const [progress, setProgress] = useState(1);
  const [minutes, setMinutes] = useState(0.1);

  const onEnd = (reset) => {
  Vibration.vibrate(PATTERN);
  setProgress(1);
  setIsStarted(false);
  reset();
  onTimerEnd(focusSubject);
  
};
  return (
    <View style={styles.container}>
      <View style={styles.countDown}>
        <Countdown
          minutes={minutes}
          isPaused={!isStarted}
          onProgress={(progress) => {
            setProgress(progress);
          }}
          onEnd={onEnd}
        />
        <View style={{ paddingTop: spacing.xxl }}>
          <Text style={styles.title}> Focusing on : </Text>
          <Text style={styles.task}> {focusSubject} </Text>
        </View>
      </View>
      <View style={{ paddingTop: spacing.xxl }}>
        <ProgressBar
          progress={progress}
          style={{ height: spacing.sm }}
          color={colors.progressBar}
        />
      </View>
      <View style={styles.timingWrapper}>
        <Timing onChangeTime={setMinutes} />
      </View>
      <View style={styles.buttonWrapper}>
        {!isStarted && (
          <RoundedButton
            title="Start"
            onPress={() => {
              setIsStarted(true);
            }}
          />
        )}
        {isStarted && (
          <RoundedButton
            title="Pause"
            onPress={() => {
              setIsStarted(false);
            }}
          />
        )}
      </View>
      <View style = {styles.clearSubjectWrapper}>
        <RoundedButton size={50} title="-" onPress={clearSubject}/>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  countDown: {
    flex: 0.5,
    alignItems: 'center',
    justifyContent: 'center',
  },

  buttonWrapper: {
    flex: 0.3,
    flexDirection: 'row',
    paddingTop: spacing.xxl,
    margin: 10,
    justifyContent: 'center',
  },
  timingWrapper: {
    flex: 0.1,
    alignItems: 'center',
    flexDirection: 'row',
    paddingTop: spacing.xxl,
  },
  clearSubjectWrapper: {
    flexDirection: 'row',
    justifyContent:'center'
  },
  title: {
    color: colors.white,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  task: {
    color: colors.white,
    textAlign: 'center',
  },
});
