import { Button, StyleSheet, TextInput, View, Text, FlatList } from 'react-native';
import { useState } from 'react';
import Modal from "./src/components/Modal";

export default function App() {
  const [textItem, setTextItem] = useState("");
  const [list, setList] = useState([]);
  const [itemSelected, setItemSelected] = useState({});
  const [modalVisible, setModalVisible] = useState(false);

  const onHandleChangeText = (text) => {
    setTextItem(text);
    console.log(text);
  }

  const addItem = () => {
    console.log(`Aqui agregué el item ${textItem}`);
    setList(prevState => [...prevState,
    { name: textItem, id: Math.random().toString() },
    ]);
    setTextItem("")
  };

  const onHandleModal = item => {
    console.log("En ésta función seteo (usando el useState) el item y abro el modal");
    setItemSelected(item);
    setModalVisible(true);
  };

  const onHandleDelete = item => {
    console.log("eliminar este item", item);
    setList(prevState =>
      prevState.filter(element => element.name !== item.name)
    );
    setModalVisible(false);
  };

  const renderItem = ({ item }) => (
    <View style={styles.renderItemStyle}>
      <Text style={styles.itemTitleStyle} >{item.name}</Text>
      <Button title="X" onPress={() => onHandleModal(item)} color={"red"}  />
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <Text style={styles.titleContainer}>My shopping list</Text>
        <View style={styles.addItemContainer}>
          <TextInput
            placeholder=" List element"
            style={styles.input}
            onChangeText={onHandleChangeText}
            value={textItem}
          />
          <Button color={"#21e802"} title="Add to list" onPress={addItem} />
        </View>
      </View>
      <View style={styles.listContainer}>
        <FlatList
          data={list}
          renderItem={renderItem}
          keyExtractor={item => item.id}
        />
      </View>
      <Modal
        isVisible={modalVisible}
        actionDeleteItem={() => onHandleDelete(itemSelected)}
        itemSelected={itemSelected}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#050505",
  },
  inputContainer: {
    height: 200,
    paddingHorizontal: 30,
    paddingTop: 80,
  },
  titleContainer: {
    marginBottom: 30,
    fontSize: 40,
    fontWeight: "500",
    color: "#ffffff",
  },
  addItemContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  input: {
    backgroundColor: "gray",    
    borderColor: "#b3b1b1",
    borderRadius: 8, 
    borderBottomWidth: 2,
    width: 200,
    paddingLeft: 7,
  },
  listContainer: {
    flex: 2,
    marginHorizontal: 30,
    marginTop: 20,
    padding: 3,
  },
  renderItemStyle: {
    height: 60,
    flexDirection: "row",
    marginBottom: 25,
    backgroundColor: "whitesmoke",
    borderColor: "gray",
    borderRadius: 10,
    padding: 10,
    justifyContent: "space-around",
    alignItems: "center",
    shadowColor: "black",
    shadowOpacity: 0.3,
    shadowOffset: { width: 0, height: 1 },
    shadowRadius: 2,
    elevation: 3,
  },
  itemTitleStyle: {
    textAlign: "left",
    color: "black",
    fontSize: 16,
    fontWeight: 500,
  },
});
