import AppLoading from "expo-app-loading";
import * as Font from "expo-font";
import { Text, View, Image, StyleSheet } from "react-native";
import Display from "./Components/Display";
import Input from "./Components/Input";
import { useState } from "react";
// import API_URL from "./config";

export default function App() {
  const [fontsLoaded] = Font.useFonts({
    "Inter-SemiBoldItalic":
      "https://rsms.me/inter/font-files/Inter-SemiBoldItalic.otf?v=3.12",
  });
  const [poses, setPoses] = useState([]);
  const [error, setError] = useState("");

  const API_URL = "https://yoga-database.herokuapp.com/poses";

  async function fetchData(data) {
    console.log(API_URL);
    if (data.pose.slice(data.pose.length - 5) === "asana") {
      const response = await fetch(`${API_URL}/sanskrit/${data.pose}`);
      const poseData = await response.json();
      setPoses(poseData.payload);
      setError(`No results for ${data.pose}, please search again `);
    } else if (data.pose !== "") {
      const response = await fetch(`${API_URL}/english/${data.pose}`);
      const poseData = await response.json();

      setPoses(poseData.payload);
      setError(`No results for ${data.pose}, please search again `);
    } else if (
      data.other === "Standing" ||
      data.other === "Primary" ||
      data.other === "Intermediate" ||
      data.other === "Third"
    ) {
      const response = await fetch(`${API_URL}/series/${data.other}`);
      const poseData = await response.json();
      setPoses(poseData.payload);
    } else if (data.other.slice(data.other.length - 7) === "stretch") {
      const search = data.other.slice(0, data.other.length - 7);
      const response = await fetch(`${API_URL}/stretches/${search}`);
      const poseData = await response.json();
      setPoses(poseData.payload);
    } else if (data.other !== "") {
      const response = await fetch(`${API_URL}/strengthens/${data.other}`);
      const poseData = await response.json();
      setPoses(poseData.payload);
    }
  }

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "flex-start",
        alignItems: "center",
        backgroundColor: "#AAF85A",
      }}
    >
      <Text
        className="mainheading"
        style={{
          fontFamily: "Inter-SemiBoldItalic",
          fontSize: "2rem",
          marginTop: "6%",
        }}
      >
        Ashtanga Companion
      </Text>
      <Input onSubmit={fetchData} />
      <Display poseData={poses} error={error} />
    </View>
  );
}
