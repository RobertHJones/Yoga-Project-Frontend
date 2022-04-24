import React from "react";
import { Text, View, Image, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
  },

  logo: {
    width: 200,
    height: 160,
    marginBottom: 15,
    zIndex: -2,
    borderRadius: 20,
    overflow: "hidden",
    borderWidth: 2,
    borderColor: "#6608B6",
  },
});

export default function Display({ poseData, error, featured }) {
  const randomSeries = Math.floor(Math.random() * 1); // this should become * 4 when I have more available
  console.log(randomSeries);
  return (
    <View>
      {/* Error for if no results */}
      {poseData.length === 0 && <Text>{error}</Text>}
      {/* Display one result */}
      {poseData.length === 1 && (
        <View>
          <Text
            style={{
              fontFamily: "Inter-SemiBoldItalic",
              fontSize: "1rem",
              marginTop: "4%",
              marginBottom: "2%",
            }}
          >
            {featured}
          </Text>
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
      {/* Display one result from many on the random search for featured pose */}
      {poseData.length > 1 && featured !== "" && (
        <View>
          <Text
            style={{
              fontFamily: "Inter-SemiBoldItalic",
              fontSize: "1rem",
              marginTop: "4%",
              marginBottom: "2%",
            }}
          >
            {featured}
          </Text>
          <Text>
            {poseData[randomSeries].sanskrit}, known as{" "}
            {poseData[randomSeries].english} in English. It is part of the{" "}
            {poseData[randomSeries].series} series
          </Text>
          <Image
            style={styles.logo}
            source={{
              uri: poseData[randomSeries].image,
            }}
          />
          <Text>Instructions - {poseData[randomSeries].instructions}</Text>
          <Text>
            This pose stretches the {poseData[randomSeries].stretches} and
            strengthens the {poseData[randomSeries].strengthens}
          </Text>
        </View>
      )}
      {/* Display many results mapping through the array */}
      {poseData.length > 1 &&
        featured === "" &&
        poseData
          .sort((a, b) => {
            return a.position - b.position;
          })
          .map((item, index) => {
            return (
              <View
                style={{
                  flex: 1,
                  justifyContent: "flex-start",
                  alignItems: "center",
                  backgroundColor: "#AAF85A",
                }}
                key={index}
              >
                <Text
                  style={{
                    fontFamily: "Inter-SemiBoldItalic",
                    fontSize: "0.9rem",
                    marginTop: "4%",
                    marginBottom: "2%",
                  }}
                >
                  {item.sanskrit}/{item.english}
                </Text>
                <Image
                  style={styles.logo}
                  source={{
                    uri: item.image,
                  }}
                />
              </View>
            );
          })}
    </View>
  );
}
