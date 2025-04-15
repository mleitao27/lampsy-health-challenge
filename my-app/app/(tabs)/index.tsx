import React, { useEffect } from 'react';
import { Text, SafeAreaView, StyleSheet, View } from "react-native";
import { format } from 'date-fns';
import Button from "@/components/Button";
import History from "@/components/History";
import * as Notifications from 'expo-notifications';

// Home screen
export default function Index() {
  const hours = 6;
  const newDate = new Date(new Date());
  newDate.setHours(newDate.getHours() + hours);

  // Ask for notification permissions and set handler with useEffect
  useEffect(() => {
    requestPermission();
    
    Notifications.setNotificationHandler({
      handleNotification: async () => ({
        shouldShowAlert: true,
        shouldPlaySound: true,
        shouldSetBadge: false,
      }),
    });
  }, []);

  const sendNotification = async () => {
    Notifications.scheduleNotificationAsync({
      content: {
        title: '📩 Incident alert!',
        body: 'Please check live stream.',
      },
      trigger: null, // Immediately
    });
  };

  // Request notification permission function
  const requestPermission = async () => {
    const { status } = await Notifications.requestPermissionsAsync();
    if (status !== 'granted') {
      alert('Permission not granted!');
      return;
    }
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.container}>
        <View style={{width: "auto"}}>
          <Text style={{width: "100%", fontSize: 32, textAlign: "left", color: "#424242"}}>
            Welcome <Text style={{color: "#8952df"}}>user</Text>!
          </Text>
          {/* Recent activity message */}
          <Text style={{width: "100%", fontSize: 16, textAlign: "justify", paddingVertical: 8, color: "#424242"}}>
            Last incident was {hours} hours ago at {format(newDate, 'yyyy-MM-dd HH:mm')}.
          </Text>
          {/* Statistics with charts */}
          <History/>
        </View>
        {/* Press to send notification */}
        <Button
          onPress={sendNotification}
          text="Send notification"
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
    paddingVertical: 16,
    paddingHorizontal: 24,
  },
});