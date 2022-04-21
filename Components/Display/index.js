import React from "react";
import { Text, View, Image, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
  },

  logo: {
    width: 200,
    height: 160,
    marginLeft: 50,
  },
});

export default function Display({ poseData, error }) {
  return (
    <View>
      {poseData.length === 0 && <Text>{error}</Text>}
      {poseData.length > 0 && (
        <View>
          <Text>
            {poseData[0].sanskrit}, known as {poseData[0].english} in English.
            It is part of the {poseData[0].series} series
          </Text>
          <Image
            style={styles.logo}
            source={{
              uri: poseData[0].image,
            }}
          />
          <Text>Instructions - {poseData[0].instructions}</Text>
          <Text>
            This pose stretches the {poseData[0].stretches} and strengthens the{" "}
            {poseData[0].strengthens}
          </Text>
        </View>
      )}
    </View>
  );
}
