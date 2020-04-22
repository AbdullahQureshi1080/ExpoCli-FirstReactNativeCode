import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <View style = {styles.rowCont}>
      <Text style = {styles.text}>Full Name : </Text>
      <Text style = {styles.text}>Father Name: </Text>
      <Text style = {styles.text}>Birthdate: </Text>
      <Text style = {styles.text}>Education: </Text>
      </View>
      <View>
      <Text style = {styles.text}>Abdullah Najam Qureshi</Text>
      <Text style = {styles.text}>Najam Ahmed Qureshi</Text>
      <Text style = {styles.text}>06/02/1999</Text>
      <Text style = {styles.text}>BCS</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display:"flex",
    flexDirection:"row",
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor:"crimson",
  },
  name:{
    display:"flex",
    flexDirection:"row",
  },
  text:{
    fontSize:20,
    fontWeight:"600",
    color:"white",
  },
  rowCont:{
    marginRight:20,
  }
});
