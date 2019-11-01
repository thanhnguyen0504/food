import React, { useState} from 'react';
import { View, StyleSheet, Text } from 'react-native';
import SearchBar from '../components/SearchBar';
import yelp from '../api/yelp';

const SearchScreen = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [results, setResults] = useState([]);

    const onSearchChange = (text) => {
        setSearchTerm(text);
    };

    const onSubmit = () => {
        searchApi();
    };

    const searchApi = async () => {
        const response = await yelp.get('/search', {
            params: {
                limit: 50,
                term: searchTerm,
                location: 'san jose'
            }
        })
        console.log(response.data.businesses);
        setResults(response.data.businesses);
    };

    return (
        <View>
            <SearchBar 
                term={searchTerm} 
                onSearchTerm={onSearchChange}
                onSubmit={onSubmit}
            />
            <Text>{searchTerm}</Text>
            <Text>We have found {results.length} results</Text>

        </View>
    );
}

const styles = StyleSheet.create({
});

export default SearchScreen;
