import { Text, StyleSheet, ScrollView, SafeAreaView } from "react-native";
import Setting from "@/components/Setting";
import React, { useState } from 'react';

export default function Settings() {
  // Very basic state management
  const [privacy, setPrivacy] = useState(false);
  
  return (
    <SafeAreaView style={{flex: 1}}>
      {/* Mock settings menu */}
      <ScrollView style={styles.container}>
        <Text style={{fontSize: 24, fontWeight: "bold", width: "100%", textAlign: "left", color: '#8952df'}}>
            Settings
        </Text>
        <Setting text="Personal information" icon="person-outline"/>
        <Setting text="Change password" icon="shield-half-outline"/>
        {/* Toggling privacy mode with state management */}
        <Setting 
          onPress={() =>setPrivacy(!privacy)}
          text={privacy ? 'Exit privacy mode' : 'Enter privacy mode'} 
          icon={privacy ? 'videocam-off-outline' : 'videocam-outline'}
        />
        <Setting text="Language" icon="language-outline"/>
        <Setting text="Notification preferences" icon="notifications-outline"/>
        <Setting text="Help" icon="help-buoy-outline"/>
        <Setting text="Logout" icon="log-out-outline"/>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
    container: {
      paddingTop: 24,
      paddingLeft: 15,
      paddingRight: 15,
      paddingBottom: 24
    },
  });