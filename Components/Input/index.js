import React from "react";
import { useState } from "react";
import { SafeAreaView, StyleSheet, TextInput } from "react-native";

export default function Input() {
  const [text, onChangeText] = useState("");
  return (
    <SafeAreaView>
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
        placeholder="Search for a pose"
      />
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    backgroundColor: "white",
  },
});
