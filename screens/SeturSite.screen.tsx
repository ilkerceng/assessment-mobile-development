import React from "react";
import { WebView } from "react-native-webview";
import { View } from "../components/Themed";
import { SafeAreaView } from "react-native-safe-area-context";
import { StyleSheet } from "react-native";

export const SeturSite = (props: any) => {
  return (
    <SafeAreaView style={styles.flexContainer}>
      <WebView source={{ uri: "https://setur.com.tr/" }} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  flexContainer: {
    flex: 1,
  },
});
