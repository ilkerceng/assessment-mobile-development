import * as React from "react";
import { Ionicons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";

import Colors from "../constants/Colors";
import useColorScheme from "../hooks/useColorScheme";
import { FormGenerator } from "../screens/Forms/FormGenerator";
import { BottomTabParamList, FormParamList } from "../types";
import { SeturSite } from "../screens/SeturSite.screen";

const BottomTab = createBottomTabNavigator<BottomTabParamList>();

export default function BottomTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      initialRouteName="Setur Site"
      tabBarOptions={{ activeTintColor: Colors[colorScheme].tint }}
    >
      <BottomTab.Screen name="Setur Site" component={SeturSite} />
      <BottomTab.Screen
        name="Form"
        component={FormNavigator}
      />
    </BottomTab.Navigator>
  );
}

function TabBarIcon(props: { name: string; color: string }) {
  return <Ionicons size={30} style={{ marginBottom: -3 }} {...props} />;
}

const FormStack = createStackNavigator<FormParamList>();

function FormNavigator() {
  return (
    <FormStack.Navigator>
      <FormStack.Screen
        name="Forms"
        component={FormGenerator}
        options={{ headerTitle: "Forms" }}
      />
    </FormStack.Navigator>
  );
}
