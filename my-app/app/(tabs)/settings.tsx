import { Text, StyleSheet, ScrollView, SafeAreaView } from "react-native";
import Setting from "@/components/Setting";

export default function Settings() {
  return (
    <SafeAreaView style={{flex: 1}}>
      <ScrollView style={styles.container}>
        <Text style={{fontSize: 24, fontWeight: "bold", width: "100%", textAlign: "left", color: '#8952df'}}>
            Settings
        </Text>
        <Setting text="Personal information" icon="person-outline"/>
        <Setting text="Change password" icon="shield-half-outline"/>
        <Setting text="Video settings" icon="videocam-outline"/>
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