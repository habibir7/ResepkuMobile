import * as React from 'react';
import { Searchbar } from 'react-native-paper';
import { Keyboard } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Search = () => {
  const [searchQuery, setSearchQuery] = React.useState('');
  const searchbarRef = React.useRef();

  const handleSearchbarPress = () => {
    // Focus the input field
    Keyboard.dismiss(); // Dismiss the keyboard if it's already open
    setSearchQuery(''); // Clear the search query
    setTimeout(() => {
      setSearchQuery(searchQuery); // This is a hacky way to force a re-render
    }, 0);
  };

  return (
    <Searchbar
    placeholder="Search Pasta, Nasi, etc"
    onChangeText={setSearchQuery}
    value={searchQuery}
    onPress={handleSearchbarPress}
    icon={() => <Ionicons name="search-outline" size={26}/>}
    style={{marginBottom: 20,}}
    />
  );
};

export default Search;