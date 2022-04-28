import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import CreateComponent from './components/CreateComponent';
import ReadComponent from './components/ReadComponent';
import UpdateComponent from './components/UpdateComponent';

const Stack = createStackNavigator();

import { initializeApp } from 'firebase/app';

const firebaseConfig = {
  apiKey: "AIzaSyDjjbFkxdZh-aejw2QPei9DyBXnCNahkYo",
  authDomain: "integration-example-706e1.firebaseapp.com",
  projectId: "integration-example-706e1",
  storageBucket: "integration-example-706e1.appspot.com",
  messagingSenderId: "532811998659",
  appId: "1:532811998659:web:032f8e1fe38b98e07cc976",
};

initializeApp(firebaseConfig);

function CrudStack() {
  return (
    <Stack.Navigator
      screenOptions={{
          headerStyle: {
            backgroundColor: 'blue',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      >
      <Stack.Screen 
        name="ReadComponent" 
        component={ReadComponent} 
        options={{ title: 'List' }}
      />
    </Stack.Navigator>
  );
}

const data = {
  content: {
    body: [
      {
        _uid: "BUY6Drn9e1",
        component: "foo",
        headline: "Foo"
      },
      {
        _uid: "gJZoSLkfZV",
        component: "bar",
        title: "Bar"
      },
      {
        _uid: "X1JAfdsZxy",
        component: "foo",
        headline: "Another headline"
      }
    ]
  }
};

export default function App() {
  return (
    <NavigationContainer>
      <CrudStack />
    </NavigationContainer>
  );
}