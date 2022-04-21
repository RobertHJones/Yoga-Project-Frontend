import React from "react";
import { useState } from "react";
import { SafeAreaView, StyleSheet, TextInput, Button } from "react-native";
import DropDownPicker from "react-native-dropdown-picker";

export default function Input({ onSubmit }) {
  const [text, onChangeText] = useState("");
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [stretchValue, setStretchValue] = useState(null);
  const [seriesValue, setSeriesValue] = useState(null);
  const [items, setItems] = useState([
    { label: "Area Stretched", value: "Area Stretched" },
    { label: "Area Strengthend", value: "Area Strengthend" },
    { label: "Series", value: "Series" },
    { label: "Back", value: "Back", parent: "Area Strengthend" },
    { label: "Abdomen", value: "Abdomen", parent: "Area Strengthend" },
    { label: "Thigh", value: "Thigh", parent: "Area Strengthend" },
    { label: "Hip", value: "Hip", parent: "Area Strengthend" },
    { label: "Knee", value: "Knee", parent: "Area Strengthend" },
    { label: "Back", value: "Backstretch", parent: "Area Stretched" },
    { label: "Abdomen", value: "Abdomenstretch", parent: "Area Stretched" },
    { label: "Thigh", value: "Thighstretch", parent: "Area Stretched" },
    { label: "Hip", value: "Hipstretch", parent: "Area Stretched" },
    {
      label: "Hamstring",
      value: "Hamstringstretch",
      parent: "Area Stretched",
    },
    { label: "Third", value: "Third", parent: "Series" },
    { label: "Second", value: "Intermediate", parent: "Series" },
    { label: "Primary", value: "Primary", parent: "Series" },
    { label: "Standing", value: "Standing", parent: "Series" },
  ]);

  function searchData() {
    console.log(text, value);
    const data = Object.assign({ pose: text }, { other: value });
    console.log(data);
    onSubmit(data);
  }

  return (
    <SafeAreaView>
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
        placeholder="Search for a pose"
      />
      <DropDownPicker
        style={{
          backgroundColor: "white",
          border: "solid 1px black",
        }}
        open={open}
        value={value}
        items={items}
        setOpen={setOpen}
        setValue={setValue}
        setItems={setItems}
        placeholder="Search by other fields"
      />

      <Button onPress={searchData} title="Search" color="#6608B6" />
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
