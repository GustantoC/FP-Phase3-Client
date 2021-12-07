import { StatusBar } from "expo-status-bar";
import React, { useEffect, useCallback, useRef } from "react";
import {
  SearchBar,
  Card,
  ListItem,
  Button,
  Input,
} from "react-native-elements";
import { TextInput } from "react-native-paper";

import { StyleSheet, SafeAreaView, View, Text } from "react-native";
import { SvgXml } from "react-native-svg";

import { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import {
  barButtom,
  mytrips,
  cardCustom,
  backgroundSvg,
  triplist,
  addtrips,
  logout,
} from "../../assets/mytrips";

export default function Detail() {
  const navigation = useNavigation();
  useEffect(() => {
    console.log("INI ADALAH LINK");
  }, []);

  return (
    <>
      <SvgXml
        style={{
          position: "absolute",
          left: -1,
          top: -2,
        }}
        width="100%"
        height="100%"
        xml={backgroundSvg}
      ></SvgXml>
      <SvgXml
        style={{
          position: "absolute",
          left: 10,
          top: -350,
        }}
        width="50%"
        height="100%"
        xml={mytrips}
      ></SvgXml>

      <SafeAreaView style={{ paddingTop: 10, flex: 4 }}>
        <>
          <SvgXml
            style={{
              position: "absolute",
              zIndex: 1,
              left: 0,
              top: 0,
            }}
            width="100%"
            height="100%"
            xml={cardCustom}
          ></SvgXml>
        </>
      </SafeAreaView>
      <SvgXml
        style={{
          position: "absolute",
          zIndex: 1,
          left: -50,
          top: 410,
        }}
        width="130%"
        height="100%"
        xml={barButtom}
      ></SvgXml>
      <SvgXml
        style={{
          position: "absolute",
          zIndex: 40,
          left: 50,
          top: 765,
        }}
        width="18%"
        height="18%"
        xml={triplist}
      ></SvgXml>
      <SvgXml
        onPress={() => {
          navigation.navigate("AddQuarantine");
        }}
        style={{
          position: "absolute",
          zIndex: 40,
          left: 170,
          top: 736,
        }}
        width="30%"
        height="30%"
        xml={addtrips}
      ></SvgXml>
      <SvgXml
        onPress={() => {
          navigation.navigate("AddQuarantine");
        }}
        style={{
          position: "absolute",
          zIndex: 40,
          left: 300,
          top: 795,
        }}
        width="12%"
        height="12%"
        xml={logout}
      ></SvgXml>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#F6EEFD",
    padding: 10,
    paddingTop: 60,
  },
  buttonYoutube: {
    backgroundColor: "#F6EEFD",
    textAlign: "center",
    fontSize: 25,
    fontFamily: "AvenirNextCondensed-BoldItalic",
    width: 150,
  },
  viewbuttonYoutube: {
    width: 150,
  },
  containerLoading: {
    flex: 1,
    justifyContent: "center",
  },
  horizontalLoading: {
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 10,
    marginTop: 100,
  },
});
