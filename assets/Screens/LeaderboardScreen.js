import React from 'react';
import {
  Text,
  View,
  Modal,
  KeyboardAvoidingView,
  SafeAreaView,
  ScrollView,
  StyleSheet,
} from 'react-native';
export default function LeaderBoardsScreen() {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}
      enabled
    >
      <SafeAreaView
        style={{
          backgroundColor: '#F3F2F7',
          width: '100%',
          // marginTop: 30,
        }}
      >
        <ScrollView
          style={{
            width: '100%',
            alignSelf: 'center',
            backgroundColor: '#F3F2F7',
          }}
          showsVerticalScrollIndicator={false}
        >
          <View>
            <Text>LeaderBoard</Text>
          </View>
        </ScrollView>
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#2B8ADA',
  },
});
