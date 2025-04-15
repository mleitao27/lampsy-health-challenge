import React from 'react';
import { StyleSheet, SafeAreaView } from 'react-native';
import { WebView } from 'react-native-webview';

export default function Live() {
  const channel = 'meteoestrelawebcams';

  return (
    <SafeAreaView style={styles.container}>
      {/* Integrate twitch live stream with webview */}
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