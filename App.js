import AppLoading from "expo-app-loading";
import * as Font from "expo-font";
import { Text, View } from "react-native";
import Display from "./Components/Display";
import Input from "./Components/Input";
import { useState, useEffect } from "react";

import { API_URL } from "@env";

export default function App() {
  const [fontsLoaded] = Font.useFonts({
    "Inter-SemiBoldItalic":
      "https://rsms.me/inter/font-files/Inter-SemiBoldItalic.otf?v=3.12",
  });
  const [poses, setPoses] = useState([]);
  const [error, setError] = useState("");
  const [featured, setFeatured] = useState("Featured Pose");

  async function fetchData(data) {
    setFeatured("");
    // Sanskrit search
    if (data.pose.slice(data.pose.length - 5) === "asana") {
      const response = await fetch(`${API_URL}/sanskrit/${data.pose}`);
      const poseData = await response.json();
      setPoses(poseData.payload);
      setError(`No results for ${data.pose}, please search again `);
    } // English search
    else if (data.pose !== "") {
      const response = await fetch(`${API_URL}/english/${data.pose}`);
      const poseData = await response.json();
      console.log(poseData.payload[0]);
      setPoses(poseData.payload);
      setError(`No results for ${data.pose}, please search again `);
    } // Series search
    else if (
      data.other === "Standing" ||
      data.other === "Primary" ||
      data.other === "Intermediate" ||
      data.other === "Third"
    ) {
      const response = await fetch(`${API_URL}/series/${data.other}`);
      const poseData = await response.json();
      console.log(poseData.payload);
      setPoses(poseData.payload);
    } // Stretch search
    else if (data.other.slice(data.other.length - 7) === "stretch") {
      const search = data.other.slice(0, data.other.length - 7);
      const response = await fetch(`${API_URL}/stretches/${search}`);
      const poseData = await response.json();
      setPoses(poseData.payload);
    } // Strengthen search
    else if (data.other !== "") {
      const response = await fetch(`${API_URL}/strengthens/${data.other}`);
      const poseData = await response.json();
      setPoses(poseData.payload);
    }
  }
  // Random search for featured pose
  useEffect(async () => {
    const randomSearch = Math.ceil(Math.random() * 20);
    const response = await fetch(`${API_URL}/position/${randomSearch}`);
    const pose = await response.json();
    console.log(randomSearch);
    console.log(pose);
    setPoses(pose.payload);
  }, []);

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
      <Display poseData={poses} error={error} featured={featured} />
    </View>
  );
}
