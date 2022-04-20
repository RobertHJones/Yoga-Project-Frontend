import AppLoading from "expo-app-loading";
import * as Font from "expo-font";
import { Text, View, Image, StyleSheet } from "react-native";
import Display from "./Components/Display";
import Input from "./Components/Input";
import { useState } from "react";
// import API_URL from "./config";

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
  },

  logo: {
    width: 200,
    height: 160,
  },
});

export default function App() {
  const [fontsLoaded] = Font.useFonts({
    "Inter-SemiBoldItalic":
      "https://rsms.me/inter/font-files/Inter-SemiBoldItalic.otf?v=3.12",
  });
  const [poses, setPoses] = useState([]);

  const API_URL = "https://yoga-database.herokuapp.com/poses";

  async function fetchData(data) {
    console.log(API_URL);
    if (data.pose !== "") {
      const response = await fetch(`${API_URL}/english/${data.pose}`);
      const poseData = await response.json();
      console.log(poseData.payload[0]);
      setPoses(poseData.payload[0]);
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
      <Display />
      <Text>{poses.english}</Text>
      <Image
        style={styles.logo}
        source={{
          uri: poses.image,
        }}
      />
    </View>
  );
}
