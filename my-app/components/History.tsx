import React from 'react';
import { Text, StyleSheet, View, Dimensions } from "react-native";
import { BarChart } from 'react-native-chart-kit';


const History = () => {
    const screenWidth = Dimensions.get('window').width - 48;

    return (
        <View style={styles.container}>
            <Text style={{fontSize: 24, fontWeight: "bold", color: "#8952df"}}>
                History
            </Text>
            <Text style={{width: "100%", fontSize: 14, textAlign: "justify", paddingVertical: 8}}>
                Here is the history of incidents from the past 5 months.
            </Text>
            <BarChart
                data={{
                    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
                    datasets: [
                        {
                        data: [5, 0, 3, 6, 3],
                        },
                    ],
                }}
                width={screenWidth}
                height={220}
                yAxisLabel=""
                yAxisSuffix=""
                chartConfig={{
                    backgroundColor: '#fff',
                    backgroundGradientFrom: '#fff',
                    backgroundGradientTo: '#fff',
                    decimalPlaces: 0,
                    color: () => "#8952df",
                    labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
                    propsForBackgroundLines: {
                        stroke: 'transparent', // Hides background grid lines
                      },
                }}
                style={{
                    marginVertical: 16,
                    marginHorizontal: "auto",
                    borderRadius: 16
                }}
            />
        </View>
    );
}

export default History;

const styles = StyleSheet.create({
    container: {
        marginVertical: 16
  },
});