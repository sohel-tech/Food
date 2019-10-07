import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';


const ResultsList = ({ title, results }) => {
    return (

        <View>
            <Text style={styles.title}>{title}</Text>
            <FlatList
                horizontal
                data={results}
                
            />
        </View>
    );
};

const styles = StyleSheet.create({
    title: {
        fontSize: 18,
        fontWeight: 'bold'
    }
});

export default ResultsList;