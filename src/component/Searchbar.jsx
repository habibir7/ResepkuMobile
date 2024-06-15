import * as React from 'react';
import { Searchbar } from 'react-native-paper';
import { Keyboard } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';

const Search = () => {
  const [searchQuery, setSearchQuery] = React.useState('');
  const searchbarRef = React.useRef();
  const navigation = useNavigation();

  const handleSearchbarPress = () => {
    // Focus the input field
    Keyboard.dismiss(); // Dismiss the keyboard if it's already open
    setSearchQuery(''); // Clear the search query
    setTimeout(() => {
      setSearchQuery(searchQuery); // This is a hacky way to force a re-render
    }, 0);
    console.log(searchQuery)
    navigation.navigate('Search', { searchQuery });
  };

  return (
    <Searchbar
    placeholder="Search Pasta, Nasi, etc"
    onChangeText={setSearchQuery}
    value={searchQuery}
    
    icon={() => <Ionicons name="search-outline" size={26} onPress={handleSearchbarPress}/> }
    style={{marginBottom: 20,}}
    />
  );
};

export default Search;