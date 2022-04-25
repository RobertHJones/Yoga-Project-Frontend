import React from "react";
import { Text, View, Image, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
  },

  main: {
    width: 260,
    height: 208,
    marginBottom: 15,
    zIndex: -2,
    borderRadius: 20,
    overflow: "hidden",
    borderWidth: 2,
    borderColor: "#6608B6",
  },

  list: {
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
      {poseData.length === 0 && (
        <Text
          style={{
            fontFamily: "Inter-SemiBoldItalic",
            fontSize: "1rem",
            marginTop: "4%",
            marginBottom: "2%",
          }}
        >
          {error}
        </Text>
      )}
      {/* Display one result */}
      {poseData.length === 1 && (
        <View
          style={{
            flex: 1,
            justifyContent: "flex-start",
            alignItems: "center",
            backgroundColor: "#AAF85A",
          }}
        >
          <Text
            style={{
              fontFamily: "Inter-SemiBoldItalic",
              fontSize: "1.5rem",
              marginTop: "4%",
              marginBottom: "2%",
            }}
          >
            {featured}
          </Text>
          <Text
            style={{
              fontFamily: "Inter-SemiBoldItalic",
              fontSize: "1rem",
              marginTop: "4%",
              marginBottom: "2%",
              marginLeft: "3%",
              textAlign: "center",
            }}
          >
            {poseData[0].sanskrit}, known as {poseData[0].english} in English.
            It is part of the {poseData[0].series} series.
          </Text>
          <Image
            style={styles.main}
            source={{
              uri: poseData[0].image,
            }}
          />
          <Text
            style={{
              fontFamily: "Inter-SemiBoldItalic",
              fontSize: "1rem",
              marginTop: "4%",
              marginBottom: "2%",
              marginLeft: "3%",
              textAlign: "center",
            }}
          >
            Instructions - {poseData[0].instructions}
          </Text>
          <Text
            style={{
              fontFamily: "Inter-SemiBoldItalic",
              fontSize: "1rem",
              marginTop: "4%",
              marginBottom: "2%",
              marginLeft: "3%",
              textAlign: "center",
            }}
          >
            This pose stretches the {poseData[0].stretches} and strengthens the{" "}
            {poseData[0].strengthens}
          </Text>
        </View>
      )}
      {/* Display one result from many on the random search for featured pose */}
      {poseData.length > 1 && featured !== "" && (
        <View
          style={{
            flex: 1,
            justifyContent: "flex-start",
            alignItems: "center",
            backgroundColor: "#AAF85A",
          }}
        >
          <Text
            style={{
              fontFamily: "Inter-SemiBoldItalic",
              fontSize: "1.5rem",
              marginTop: "4%",
              marginBottom: "2%",
            }}
          >
            {featured}
          </Text>
          <Text
            style={{
              fontFamily: "Inter-SemiBoldItalic",
              fontSize: "1rem",
              marginTop: "4%",
              marginBottom: "2%",
              marginLeft: "3%",
              textAlign: "center",
            }}
          >
            {poseData[randomSeries].sanskrit}, known as{" "}
            {poseData[randomSeries].english} in English. It is part of the{" "}
            {poseData[randomSeries].series} series
          </Text>
          <Image
            style={styles.main}
            source={{
              uri: poseData[randomSeries].image,
            }}
          />
          <Text
            style={{
              fontFamily: "Inter-SemiBoldItalic",
              fontSize: "1rem",
              marginTop: "4%",
              marginBottom: "2%",
              marginLeft: "3%",
              textAlign: "center",
            }}
          >
            Instructions - {poseData[randomSeries].instructions}
          </Text>
          <Text
            style={{
              fontFamily: "Inter-SemiBoldItalic",
              fontSize: "1rem",
              marginTop: "4%",
              marginBottom: "2%",
              marginLeft: "3%",
              textAlign: "center",
            }}
          >
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
                    marginLeft: "3%",
                    textAlign: "center",
                  }}
                >
                  {item.sanskrit}/{item.english}
                </Text>
                <Image
                  style={styles.list}
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
