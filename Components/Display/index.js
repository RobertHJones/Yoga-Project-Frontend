import React from "react";
import { Text, View, Image, StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native-web";
import { useState, useEffect } from "react";

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
  const API_URL = "https://yoga-database.herokuapp.com/poses";
  const [imagePose, setImagePose] = useState("");
  const randomSeries = Math.floor(Math.random() * 1); // this should become * 4 when I have more available
  console.log(randomSeries);
  async function checkImage(e) {
    console.log(e.target.src.slice(30, e.target.src.length - 4));
    let pose = e.target.src.slice(30, e.target.src.length - 4);
    const response = await fetch(`${API_URL}/sanskrit/${pose}`);
    const data = await response.json();
    console.log(data.payload);
    setImagePose(data.payload[0]);
  }

  // set imagePose back to "" on a new search so that you can display full results again
  useEffect(() => {
    setImagePose("");
  }, [poseData]);

  return (
    <View>
      {imagePose !== "" && poseData.length > 1 && (
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
            {imagePose.sanskrit}, known as {imagePose.english} in English. It is
            part of the {imagePose.series} series.
          </Text>
          <Image
            style={styles.main}
            source={{
              uri: imagePose.image,
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
            Instructions - {imagePose.instructions}
          </Text>
          {imagePose.strengthens === "" && (
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
              This pose stretches the {imagePose.stretches}
            </Text>
          )}
          {imagePose.stretches === "" && (
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
              This pose strengthens the {imagePose.strengthens}
            </Text>
          )}
          {imagePose.strengthens !== "" && imagePose.stretches !== "" && (
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
              This pose stretches the {imagePose.stretches} and strengthens the{" "}
              {imagePose.strengthens}
            </Text>
          )}
        </View>
      )}
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
          {poseData[0].strengthens === "" && (
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
              This pose stretches the {poseData[0].stretches}
            </Text>
          )}
          {poseData[0].stretches === "" && (
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
              This pose strengthens the {poseData[0].strengthens}
            </Text>
          )}
          {poseData[0].strengthens !== "" && poseData[0].stretches !== "" && (
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
              This pose stretches the {poseData[0].stretches} and strengthens
              the {poseData[0].strengthens}
            </Text>
          )}
        </View>
      )}
      {/* Display one result from several on the random search for featured pose */}
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
          {poseData[randomSeries].strengthens === "" && (
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
              This pose stretches the {poseData[randomSeries].stretches}
            </Text>
          )}
          {poseData[randomSeries].stretches === "" && (
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
              This pose strengthens the {poseData[randomSeries].strengthens}
            </Text>
          )}
          {poseData[randomSeries].strengthens !== "" &&
            poseData[randomSeries].stretches !== "" && (
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
            )}
        </View>
      )}
      {/* Display many results mapping through the array, for series etc */}
      {poseData.length > 1 &&
        imagePose === "" &&
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
                <TouchableOpacity id={item._id} onPress={checkImage}>
                  <Image
                    style={styles.list}
                    source={{
                      uri: item.image,
                    }}
                  />
                </TouchableOpacity>
              </View>
            );
          })}
    </View>
  );
}
