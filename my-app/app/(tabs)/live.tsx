import React from 'react';
import { StyleSheet, SafeAreaView } from 'react-native';
import { WebView } from 'react-native-webview';

export default function Live() {
  const channel = 'meteoestrelawebcams'; // Replace with actual channel

  return (
    <SafeAreaView style={styles.container}>
        {/* <View style={{ width: 400, height: 300, backgroundColor: 'blue' }}></View> */}
        <WebView
            style={{ width: 400, height: 300, paddingBottom: 30 }}
            
            source={{
                uri: `https://player.twitch.tv/?channel=${channel}&parent=localhost`,
            }}
            />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center"
  },
});