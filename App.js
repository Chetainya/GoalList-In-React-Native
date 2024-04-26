import { useState } from "react";
import {
  Button,
  FlatList,
  
  StyleSheet,
  Text,
  
  View,
} from "react-native";
import GoalItem from "./Components/GoalItem";
import GoalInput from "./Components/GoalInput";
import { StatusBar } from 'expo-status-bar'




export default function App() {
 
  const [userGoals, setUserGoals] = useState([]);
  const [modelIsOpen , setModalIsOpen] = useState(false);

  
  function addGoalHandeler(inputGoal) {
    
    setUserGoals((prevGoals) => [
      ...prevGoals,
      { text: inputGoal, id: Date.now().toString() },
    ]);
  }
  function onDeleteHandeler(id){
    console.log(userGoals)
    setUserGoals((currUserGoals) => {
      return currUserGoals.filter(goal => goal.id !== id);
    })
  }
  function modelHandeler(){
    setModalIsOpen(true);
  }
  function closeModal(){
    setModalIsOpen(false);
  }
  return (
    <>
    <StatusBar style="auto" ></StatusBar>
    <View style={styles.appContainer}>
      <View style={styles.addGoalButton}>
      <Button title="Add Goal" color='purple' onPress={modelHandeler}></Button>
      </View>
      <GoalInput closeModal={closeModal} modelIsOpen={modelIsOpen} addGoalHandeler={addGoalHandeler} />

      <View style={styles.goalsContainer}>

        <Text style={{ marginBottom: 10 }}>Goals Here</Text>

        <FlatList
          data={userGoals}
          renderItem={(itemData) => <GoalItem item={itemData.item.text} id={itemData.item.id} onDeleteHandeler={onDeleteHandeler} />}
          keyExtractor={(item) => item.id}
        ></FlatList>

      </View>
    </View>
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    padding: 20,
    marginTop: 50,
  },
  
  goalsContainer: {
    flex: 6,
    marginTop: 5,
  },
  addGoalButton : {
    padding : 10,
    marginBottom : 10,
    borderBottomWidth : 1
  }
});
