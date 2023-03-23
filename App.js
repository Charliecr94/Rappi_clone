import React from "react";
import { Searchbar } from "react-native-paper";
import { StatusBar, StyleSheet, SafeAreaView, Text, View } from "react-native";

import { RestaurantsScreen } from "./src/components/test";

export default function App() {
  return (
    <>
      <SafeAreaView style={styles.container}>
        <View style={styles.search}>
          <Searchbar />
        </View>
        <View style={styles.list}>
          <Text> xddd </Text>
        </View>
      </SafeAreaView>
      <RestaurantsScreen style={styles.container} />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight,
    padding: 0,
    flexDirection: "column",
    backgroundColor: "black",
  },
  search: {
    backgroundColor: "white",
    padding: 24,
  },
  list: {
    flex: 1,
    backgroundColor: "blue",
    padding: 16,
  },
});
