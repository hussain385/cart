import React from 'react';
import AntDesign from 'react-native-vector-icons/dist/AntDesign';
import {Header} from 'react-native-elements';
import Ionicons from 'react-native-vector-icons/dist/Ionicons';
import {Provider} from 'react-redux';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {Text, View} from 'react-native';
import Home from './views/home/Home';
import {store} from './store/store';
import {persistStore} from 'redux-persist';
import {PersistGate} from 'redux-persist/integration/react';

function App() {
  const persist = persistStore(store);
  return (
    <Provider store={store}>
      <PersistGate persistor={persist}>
        <SafeAreaProvider>
          <Header
            containerStyle={{
              shadowOpacity: 100,
              elevation: 5,
            }}
            leftComponent={
              <Text
                style={{
                  fontFamily: 'Poppins-Medium',
                  fontWeight: '500',
                  color: 'black',
                  fontSize: 15,
                  marginLeft: 4,
                }}>
                Stadium
              </Text>
            }
            rightComponent={
              <View
                style={{flexDirection: 'row', justifyContent: 'space-evenly'}}>
                <AntDesign name="message1" size={15} />
                <Text
                  style={{
                    fontFamily: 'Poppins-Medium',
                    fontWeight: '500',
                    color: 'black',
                    fontSize: 15,
                    marginLeft: 12,
                    marginRight: 11.39,
                    marginTop: -3,
                  }}>
                  Oslo
                </Text>
                <Ionicons name="ios-location-outline" size={15} />
              </View>
            }
            backgroundColor="white"
          />
          <Home />
        </SafeAreaProvider>
      </PersistGate>
    </Provider>
  );
}

export default App;
