import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Button,
  StatusBar,
} from 'react-native';
import Auth0 from 'react-native-auth0';

const auth0 = new Auth0({
  domain: 'YOUR_DOMAIN',
  clientId: 'YOUR_CLIENT_ID',
});

const App = () => {
  const [authToken, setAuthToken] = useState(null);

  const handleLoginPress = async () => {
    try {
      let credentials = await auth0.webAuth.authorize({
        scope: 'openid profile email',
      });
      setAuthToken(credentials.accessToken);
      console.log('authToken', credentials.accessToken);
      console.log('stored authToken', authToken);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView contentInsetAdjustmentBehavior="automatic">
          <View>
            <View style={styles.sectionContainer}>
              <Button title={'Login'} onPress={handleLoginPress} />
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
});

export default App;
