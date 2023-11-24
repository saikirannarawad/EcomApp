import React from "react";
import { View } from "react-native";
import { Searchbar } from "react-native-paper";
import { colors } from "../styles/styles";

const Search = () => {
  const [searchQuery, setSearchQuery] = React.useState("");

  const onChangeSearch = (query) => setSearchQuery(query);

  return (
    <View style={{ marginTop: 20 }}>
      <Searchbar
        placeholder="Search Products or store"
        onChangeText={onChangeSearch}
        value={searchQuery}
        style={{ backgroundColor: colors.color1 }} placeholderTextColor= "#8891A5" iconColor="#F8F9FB"
      />
    </View>
  );
};

export default Search;
