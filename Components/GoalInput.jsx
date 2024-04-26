import React from "react";
import { StyleSheet, View, TextInput, Button, Modal, Image } from "react-native";
import { useState } from "react";
function goalInput({ addGoalHandeler , modelIsOpen  , closeModal }) {
  const [inputGoal, setInputGoal] = useState("");
  function goalsInputHandeler(value) {
    setInputGoal(value);
  }
  function addGoal() {
    addGoalHandeler(inputGoal);
    setInputGoal("");
    closeModal();
  }
  return (
    <Modal visible={modelIsOpen} animationType="slide" >
        
      <View style={styles.inputContainet}>
        <Image style={styles.image} source={require('../assets/images/goal.png')} />
        <TextInput
          style={styles.inputArea}
          value={inputGoal}
          onChangeText={goalsInputHandeler}
          placeholder="Enter Goal"
          placeholderTextColor = 'black'
        />
        <View style={styles.ButtonContainer}>
          <View style={styles.Buttom}>
            <Button title="Add Goal" onPress={addGoal}></Button>
          </View>
          <View style={styles.Buttom}>
            <Button title="Close" onPress={closeModal}></Button>
          </View>
        </View>
      </View>
    </Modal>
  );
}

export default goalInput;

const styles = StyleSheet.create({
  inputContainet: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingBottom: 20,
    borderBottomWidth: 1,
    padding: 15,
    backgroundColor : 'purple'
  },
  inputArea: {
    width: "100%",
    color : 'black',
    backgroundColor : '#cccccc',
    borderWidth: 2,
    borderRadius: 10,
    padding: 10,
  },
  ButtonContainer: {
    marginTop: 10,
    flexDirection: "row",
    
  },
  Buttom: {
    width: 100,
    marginHorizontal: 10,
  },
  image : {
    width : 100,
    height : 100
  }
});
