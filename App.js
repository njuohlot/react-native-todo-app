import { useState } from "react";
import {
  Platform,
  StyleSheet,
  Text,
  TextInput,
  View,
  StatusBar,
 ScrollView,
  FlatList,
  KeyboardAvoidingView,
  TouchableOpacity,
  Keyboard,
} from "react-native";
import Task from "./src/components/Task";

export default function App() {
  const [todo, setTodo] = useState("");
  const [todolist, setTodoList] = useState([]);

  const addTodo = () => {
    Keyboard.dismiss();
    setTodoList((currentTodo) => [
      ...currentTodo,
      { todo: todo, id: Math.random() },
    ]);
    setTodo("");
  };
  const cancelTodo = (id) => {
    setTodoList(currentTodo =>{
      return todolist.filter((x) => x.id !== id)
    });
  };
  return (
    <View style={styles.container}>
      {/**todays task */}
      <View style={styles.taskWrapper}>
        <Text style={styles.title}>Today's tasks</Text>

        <View style={styles.items}>
          <FlatList
            data={todolist}
            renderItem={({ item }) => (
              <Task item={item} cancelTodo={cancelTodo} />
            )}
            keyExtractor={(item) => item.id}
          />
        </View>
      </View>

      {/**input Task */}
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.writeTaskWrapper}
      >
        <TextInput
          placeholder="Insert a task....."
          style={styles.Input}
          onChangeText={(newText) => setTodo(newText)}
          defaultValue={todo}
        />
        <TouchableOpacity onPress={addTodo}>
          <View style={styles.addbtn}>
            <Text style={styles.plus}>+</Text>
          </View>
        </TouchableOpacity>
      </KeyboardAvoidingView>

      <StatusBar style="dark" hidden={false} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#EBEAED",
    flex: 1,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
  },
  taskWrapper: {
    paddingTop: 80,
    paddingHorizontal: 20,
    alignItems: "center",
    marginBottom: 30,
  },
  items: {
    marginTop: 30,
    height: 350
  },
  writeTaskWrapper: {
    position: "absolute",
    bottom: 60,
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 20,
  },
  addbtn: {
    width: 60,
    height: 60,
    backgroundColor: "#fff",
    borderRadius: 60,
    justifyContent: "center",
    alignItems: "center",
    borderColor: "#C0C0C0",

    borderWidth: 1,
  },
  plus: {},
  Input: {
    paddingVertical: 15,
    paddingHorizontal: 15,
    width: 250,
    backgroundColor: "#fff",
    borderRadius: 60,
    borderColor: "#C0C0C0",
    borderWidth: 1,
  },
});
