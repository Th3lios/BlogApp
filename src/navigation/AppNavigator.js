import 'react-native-gesture-handler';
import * as React from 'react';
import {Platform} from 'react-native';
import {
  NavigationContainer,
  getFocusedRouteNameFromRoute,
} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

// screens
import HomeScreen from '../screens/HomeScreen/HomeScreen';
import SectionScreen from '../screens/SectionScreen/SectionScreen';

// icons
import Icon from 'react-native-vector-icons/Ionicons';
import IconF from 'react-native-vector-icons/FontAwesome';
Icon.loadFont();
IconF.loadFont();

const activeColor = '#4775f2';
const inactiveColor = '#b8bece';
const tabVisible = {
  Home: true,
  Courses: true,
  Projects: true,
};

const Stack = createStackNavigator();
const BottomTab = createBottomTabNavigator();

const createHomeStack = () => (
  <Stack.Navigator
    screenOptions={Platform.OS === 'android' && {animationEnabled: false}}>
    <Stack.Screen
      name="Home"
      component={HomeScreen}
      options={{
        headerShown: false,
      }}
    />
  </Stack.Navigator>
);

const createCoursesStack = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="Section"
      component={SectionScreen}
      options={{
        headerShown: false,
      }}
    />
  </Stack.Navigator>
);

const createProjectsStack = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="Section"
      component={SectionScreen}
      options={{
        headerShown: false,
      }}
    />
  </Stack.Navigator>
);

const HomeTabs = () => (
  <BottomTab.Navigator
    screenOptions={({route}) => ({
      tabBarVisible: tabVisible[route.name],
      tabBarIcon: ({color, size, focused}) => {
        const icons = {
          Home: 'home',
          Courses: 'albums',
          Projects: 'folder',
        };
        return (
          <>
            <Icon
              name={icons[route.name]}
              color={focused ? activeColor : inactiveColor}
              size={size}
            />
          </>
        );
      },
    })}>
    <BottomTab.Screen name="Home" component={createHomeStack} />
    <BottomTab.Screen name="Courses" component={createCoursesStack} />
    <BottomTab.Screen name="Projects" component={createProjectsStack} />
  </BottomTab.Navigator>
);

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeTabs}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Section"
          component={SectionScreen}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
