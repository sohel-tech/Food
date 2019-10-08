import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import ResultsDetails from '../components/ResultsDetails';


const ResultsList = ({ title, results }) => {
    return (

        <View style={styles.container}>
            <Text style={styles.title}>{title}</Text>
            <FlatList
                horizontal
                showsHorizontalScrollIndicator={false}
                data={results}
                keyExtractor={(result) => result.id}
                renderItem={({ item }) => {
                    return <ResultsDetails result={item} />
                }}
            />
        </View>
    );
};

const styles = StyleSheet.create({

    container: {
        marginBottom: 10
    },

    title: {
        fontSize: 18,
        fontWeight: 'bold',
        marginLeft: 15,
        marginBottom: 5

    }
});

export default ResultsList;