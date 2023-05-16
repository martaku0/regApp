import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Main from "./components/Main"
import List from "./components/List"
import User from "./components/User"

const Stack = createNativeStackNavigator();

function App() {
  return (
        <NavigationContainer>
            <Stack.Navigator>
              <Stack.Screen
                name="s1"
                component={Main}
                options={{
                    headerShown: false
              }} />
                <Stack.Screen name="s2" component={List}
                  options={{
                    title: "admin page",
                    headerStyle: {
                      backgroundColor: 'green',
                    },
                    headerTintColor: '#ffffff',
                    headerTitleStyle: {
                      fontWeight: 'bold',
                    },
                  }}
                />      
                <Stack.Screen name="s3" component={User}
                options={{
                  title: "details page",
                  headerStyle: {
                    backgroundColor: 'green',
                  },
                  headerTintColor: '#ffffff',
                  headerTitleStyle: {
                    fontWeight: 'bold',
                  },
                }}
              />             
            </Stack.Navigator>
        </NavigationContainer>
  );
}

export default App;


