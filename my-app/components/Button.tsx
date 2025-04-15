import React from 'react';
import { Text, StyleSheet, TouchableOpacity } from "react-native";

type ButtonProps = {
    text: string; // Prop to pass the button text
    onPress: () => void; // Prop to pass button action
};

// Custom button component
const Button: React.FC<ButtonProps> = ({text, onPress}) => {

    return (
        <TouchableOpacity style={styles.container} onPress={onPress}>
            <Text style={{color: '#f1f1f1', fontSize: 16}}>
                {text}
            </Text>
        </TouchableOpacity>
    );
}

export default Button;

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#8952df',
        paddingHorizontal: 16,
        paddingVertical: 8,
        borderRadius: 16,
        marginVertical: 16
  },
});