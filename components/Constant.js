import { Image } from "react-native";

export const Primary = '#1D92FF';
export const White = '#F6F8FC';
export const Grey = 'rgba(0, 0, 0, 0.29)';
export const Dark = 'rgba(43, 36, 36, 1)';
export const Black = 'rgba(0, 0, 0, 1)';
export const Gradient1 = 'rgba(12, 125, 228, 1)';
export const Gradient2 = 'rgba(18, 179, 201, 1)';
export const Small = 17
export const Back = '#ebf1f1ff';
export const Disney=<Image source={require('../img/Banner Disney 1.png')} style={{width:170,height:100}}/>;
export const Hulu=<Image source={require('../img/Hulu Clone4 1.png')} style={{width:170,height:100}}/>;
export const Python=<Image source={require('../img/image 6.png')}  style={{width:170,height:100}}/>;
export const React=<Image source={require('../img/image 7.png')}  style={{width:170,height:100}}/>;
export const Web=<Image source={require('../img/image 9.png')}  style={{width:170,height:100}}/>;
export const Vedio = [
    {"id":1,"img":Disney},
    {"id":2,"img":Hulu},
    {"id":3,"img":Disney},
]
export const Course = [
    {"id":1,"img":Python,"name":'Basic Python',"lesson":"16 Lesson"},
    {"id":2,"img":React,"name":'Basic React Js',"lesson":"15 Lesson"},
    {"id":3,"img":Web,"name":'Basic Web Developement',"lesson":"10 Lesson"},
]