import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  StatusBar,
  TouchableOpacity,
  ImageBackground,
  Animated,
} from 'react-native';
import React from 'react';
import {COLORS} from '../../assets/theme/theme';
import {horizontalScale, verticalScale} from '../constants/constants';
import Icons from 'react-native-vector-icons/FontAwesome';
import * as Animatable from 'react-native-animatable';

const Main = ({navigation}) => {

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar />
      <View style={styles.firstContainer}>
        <ImageBackground
          source={require('../../assets/images/splash.jpg')}
          style={styles.image}>
          <View style={styles.buttonCard}>
            <Text style={styles.heading}>
              Find your best outfit {'\n'}and look great
            </Text>
            <Text style={styles.subHeading}>
              Shop here and get benefits and {'\n'} world quality goods{' '}
            </Text>
            <TouchableOpacity
              style={styles.btnConatiner}
              onPress={() => navigation.navigate('Home')}>
              <Text style={styles.btnText}>Get Started </Text>
              <Animatable.Text
              style={{color:COLORS.CARDBACKGROUND}}
                animation={'lightSpeedOut'}
                easing={'linear'}
                iterationCount={'infinite'}>
                <Icons name="long-arrow-right" size={30} />
              
              </Animatable.Text>
            </TouchableOpacity>
          </View>
        </ImageBackground>
      </View>
    </SafeAreaView>
  );
};

export default Main;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.BACKGROUND,
  },
  firstContainer: {
    width: '100%',
    height: '100%',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  buttonCard: {
    width: '90%',
    backgroundColor: COLORS.CARDBACKGROUND,
    marginHorizontal: 20,
    position: 'absolute',
    bottom: 40,
    borderRadius: 15,
  },
  heading: {
    color: COLORS.TEXT,
    fontSize: 28,
    textAlign: 'center',
    paddingTop: 25,
    paddingHorizontal: 25,
    fontWeight: '600',
    fontFamily: 'Montserrat-SemiBold',
  },
  subHeading: {
    color: COLORS.TEXT,
    opacity: 0.7,
    fontWeight: '300',
    fontSize: 18,
    padding: 15,
    fontFamily: 'Montserrat-Regular',
    textAlign: 'center',
  },
  btnConatiner: {
    backgroundColor: COLORS.BTNCOLOR,
    width: '80%',
    alignSelf: 'center',
    borderRadius: 25,
    height: 68,
    marginBottom: 30,
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  btnText: {
    textAlign: 'center',
    padding: 20,
    color: COLORS.CARDBACKGROUND,
    fontWeight: '500',
    fontFamily: 'Montserrat-Regular',
    fontSize: 25,
    marginLeft:70
  },
  arrow:{
    
  }
});
