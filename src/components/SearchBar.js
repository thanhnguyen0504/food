import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import { Feather } from '@expo/vector-icons';

const SearchBar = ({term, onSearchTerm, onSubmit}) => {
    return (
        <View style={styles.background}>
            <Feather name='search' style={styles.iconStyle} size={30} />
            <TextInput 
                style={styles.imputStyle}
                placeholder='Seach'
                value={term}
                onChangeText={newText => onSearchTerm(newText)}
                onEndEditing={() => onSubmit()}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    background: {
        backgroundColor: '#F0EEEE',
        height: 50,
        marginHorizontal: 15,
        marginTop: 10,
        borderRadius: 5,
        flexDirection: 'row',
    },
    imputStyle: {
        flex: 1,
        fontSize: 18,
    },
    iconStyle: {
        marginHorizontal: 15,
        fontSize: 35,
        alignSelf: 'center'
    }


});

export default SearchBar;
