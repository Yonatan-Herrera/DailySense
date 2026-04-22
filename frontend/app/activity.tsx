import React, { useState } from "react";
import { Text, View, FlatList, StyleSheet, TextInput, Pressable, Image} from "react-native";

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    time: '9:01am',
    title: 'Wakes Up',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    time: '9:33am',
    title: 'Let Goku out for the toilet',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    time: '9:58am',
    title: 'Morning food',
  },
];

export default function Activity() {

    const ItemSeparator = () => (
        <View style={styles.itemSeparator} />
    );

    return(
    <View
      style={{
        flex: 1,
        backgroundColor: "#f5f5f5",
        alignItems: "center",
        paddingTop: 80,
        paddingHorizontal: 30,
      }}>
      <Text style={{ 
        fontSize: 20,
        fontWeight: "600",
        marginBottom: 40,
        color: "#000",}}>Activity</Text>
      <FlatList
        data={DATA}
        renderItem={({ item }) => (
            <View style={{ flexDirection: 'row', padding: 10 }}>
                <View style={styles.itemContainer}>
                    <Text style={{ fontWeight: 'bold' }}>{item.time}</Text>
                </View>
                <View style={styles.itemContainer}>
                    <Text>{item.title}</Text>
                </View>
            </View>
        )}
        keyExtractor={item => item.id}
        ItemSeparatorComponent={ItemSeparator}
        ListHeaderComponent={ItemSeparator}
        ListFooterComponent={ItemSeparator}
      />
    </View>
    );
}

const styles = StyleSheet.create({
  item: {
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  itemContainer: {
    flex: 1, // Ensures items take equal width
    borderRadius: 5,
  },
  itemSeparator: {
    height: 1, // Line thickness
    backgroundColor: '#E6E6E6', // Line color
    width: '100%', // Line width
  },
  title: {
    fontSize: 32,
  },
});