import React from 'react'
import Starter from "./screen/Starter"
import Login from "./screen/Login"
import Home from "./screen/Home"
import Details from "./screen/Details"
import CourseContent from "./screen/CourseContent"
import {createStackNavigator} from "@react-navigation/stack"
const Stack=createStackNavigator();
export default function App() {
  return (

    <CourseContent />
  )
}