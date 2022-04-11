import React from "react";
import { useState } from "react";
import { SafeAreaView, StyleSheet, TextInput, Button } from "react-native";
import DropDownPicker from "react-native-dropdown-picker";

export default function Input({ onSubmit }) {
  const [text, onChangeText] = useState("");
  const [open, setOpen] = useState(false);
  const [strongValue, setStrongValue] = useState(null);
  const [stretchValue, setStretchValue] = useState(null);
  const [seriesValue, setSeriesValue] = useState(null);
  const [strongItems, setStrongItems] = useState([
    { label: "Back", value: "Back" },
    { label: "Abdomen", value: "Abdomen" },
    { label: "Thigh", value: "Thigh" },
    { label: "Hip", value: "Hip" },
    { label: "Knee", value: "Knee" },
  ]);
  const [stretchItems, setStretchItems] = useState([
    { label: "Back", value: "Back" },
    { label: "Abdomen", value: "Abdomen" },
    { label: "Thigh", value: "Thigh" },
    { label: "Hip", value: "Hip" },
    { label: "Hamstring", value: "Hamstring" },
  ]);
  const [series, setSeries] = useState([
    { label: "Standing", value: "Standing" },
    { label: "Primary", value: "Primary" },
    { label: "Second", value: "Second" },
    { label: "Third", value: "Third" },
  ]);

  function searchData() {}

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
        value={strongValue}
        items={strongItems}
        setOpen={setOpen}
        setValue={setStrongValue}
        setItems={setStrongItems}
        placeholder="Search by area strengthened"
      />
      <DropDownPicker
        style={{
          backgroundColor: "white",
          border: "solid 1px black",
        }}
        open={open}
        value={stretchValue}
        items={stretchItems}
        setOpen={setOpen}
        setValue={setStretchValue}
        setItems={setStretchItems}
        placeholder="Search by area stretched"
      />
      <DropDownPicker
        style={{
          backgroundColor: "white",
          border: "solid 1px black",
        }}
        open={open}
        value={seriesValue}
        items={series}
        setOpen={setOpen}
        setValue={setSeriesValue}
        setItems={setSeries}
        placeholder="Search by series"
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
