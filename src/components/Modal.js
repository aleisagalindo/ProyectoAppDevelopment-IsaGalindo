import {
    StyleSheet,
    Text,
    View,
    Modal as NewModal,
    Button,
  } from "react-native";
  import React from "react";
  
  const Modal = ({ isVisible, actionDeleteItem, itemSelected }) => {
    return (
      <NewModal visible={isVisible} animationType="fade" transparent={false}>
        <View style={styles.modalContainer}>
          <View>
            <Text style={styles.warningColor}>Are you sure you want to delete this item?</Text>
            <Text style={styles.modalTextStyle}>{itemSelected.name}</Text>
            <Button
              title="Delete"
              color={"red"}
              onPress={() => actionDeleteItem()}
            />
          </View>
        </View>
      </NewModal>
    );
  };
  
  export default Modal;
  
  const styles = StyleSheet.create({
    modalContainer: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "black",
    },
    modalStyle: {
      margin: 20,
      color:"white", 
      borderRadius: 20,
      padding: 40,
      alignItems: "center",
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 4,
      elevation: 5,
    },
    modalTextStyle: {
      marginTop: 15,
      marginBottom: 15,
      paddingTop: 5,
      paddingBottom: 5,
      backgroundColor: "gray",
      color: "white",
      fontSize: 20,
      textAlign: "center",
      borderRadius: 8,
    },
    warningColor: {
      color: "white",
      fontSize: 15
    }

  });