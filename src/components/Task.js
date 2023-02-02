import { View, Text, StyleSheet, TouchableOpacity, Pressable } from 'react-native'
import React from 'react'

const Task = ({ item, cancelTodo }) => {
  const deleteTodo = (id) => {
    cancelTodo(id)
  };
  return (
    <View style={styles.item}>
      <View style={styles.itemLeft}>
        <View style={styles.square}></View>

        <Text style={styles.text}>{item.todo}</Text>
      </View>
      <Pressable onPress={() => deleteTodo(item.id)}>
        <View style={styles.circle}></View>
      </Pressable>
    </View>
  );
};
const styles = StyleSheet.create({
  item: {
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  itemLeft: {
    flexDirection: "row",
    alignItems: "center",
    flexWrap: "wrap",

  },
 
  square: {
    width: 24,
    height: 24,
    backgroundColor: "#55BCE6",
    opacity: 0.4,
    borderRadius: 5,
    marginRight: 15,
  },
  text: {
    maxWidth: "80%",
  },
  circle: {
    width: 20,
    height: 20,
    borderRadius: 5,
    borderWidth: 2,
    borderColor: "#55BCE6",
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 10
  },
 
});


export default Task