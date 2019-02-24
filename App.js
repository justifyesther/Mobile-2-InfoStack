//Catatan :
// import Common from './src/components/common';
/* <Common.HeaderPage headerText="Info Stack" /> */

import React, { Component } from 'react';
import { View } from 'react-native';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { HeaderPage } from './src/components/common';
import reducers from './src/reducers';
import LibraryList from './src/components/LibraryList';


class App extends Component {
  render() {
    console.disableYellowBox = true;

    return (
      <Provider store={createStore(reducers)}> 
      <View style={{ flex: 1}}>
       <HeaderPage headerText="Info Stack" /> 
       <LibraryList />
      </View>
      </Provider>
    )
  }
}

export default App;