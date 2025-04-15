import { Text, View, StyleSheet } from "react-native";
import { Ionicons } from '@expo/vector-icons';

type SettingProps = {
    text: string;
    icon: 'person-outline' | 'shield-half-outline' | 'videocam-outline' | 'language-outline' | 'notifications-outline' | 'help-buoy-outline' | 'log-out-outline';
};

const Setting: React.FC<SettingProps> = ({text, icon}) => {  
    return (
    <View style={styles.container}>
        <View style={styles.border}>
            <Ionicons name={icon} size={22} color={'#424242'} />
        </View>
        <Text style={{fontSize: 16, width: "100%", marginLeft: 16, color: '#424242'}}>{text}</Text>
    </View>
  );
}

export default Setting;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      backgroundColor: "#baa4db",
      width: "100%",
      marginVertical: 16,
      borderRadius: 24,
      paddingHorizontal: 20,
      paddingVertical: 16,
    },
    border: {
        backgroundColor: "#ccc1db",
        borderRadius: 16,
        paddingHorizontal: 18,
        paddingVertical: 16,
      },
  });