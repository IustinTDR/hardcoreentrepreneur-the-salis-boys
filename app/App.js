import * as React from'react';
import { enableScreens, ReactNativeScreens } from 'react-native-screens';
import MainContainer from './navigation/MainContainer';

function App(){
  enableScreens()
  return(
    <MainContainer/>
  );
}
 
export default App;