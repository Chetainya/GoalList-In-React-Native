import { StyleSheet, View, Text, Pressable } from "react-native";

function GoalItem(props) {
  return (
    <View style={styles.goalItemContainer}>
      <Pressable
        android_ripple={{ color: "#210644" }}
        onPress={() => props.onDeleteHandeler(props.id)}
        style={({pressed}) => pressed && styles.pressedItem}
      >
        <Text style={styles.goalItem}>{props.item}</Text>
      </Pressable>
    </View>
  );
}

export default GoalItem;
const styles = StyleSheet.create({
  goalItem: {
    color: "white",
    fontWeight: "bold",
    padding: 6,
  },
  goalItemContainer: {
    borderRadius: 3,
    backgroundColor: "purple",
    margin: 6,
    // padding: 6,
  },
  pressedItem : {
    backgroundColor : '#210644'
  }
});
