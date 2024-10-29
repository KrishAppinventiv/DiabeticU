import {View, Image, ImageBackground,Text} from 'react-native';
import React, {useEffect, useState} from 'react';
import styles from './styles';
import {Images} from '../../assets';
import {useNavigation} from '@react-navigation/native';
import {ScreenNames} from '../../navigator/screenNames';
import Splash from 'react-native-splash-screen';
const SplashScreen = () => {

  const navigation: any = useNavigation();


 
  useEffect(() => {
    
    Splash.hide();
    
    const timer = setTimeout(() => {
      navigation.navigate(ScreenNames.Home);
    }, 4000);

    return () => clearTimeout(timer);
  }, []);


  
  return (
    <View
      style={styles.container}
      >
     <Text style={{fontSize:15}}>Hello Brother</Text>
      
      <Image
        resizeMethod="resize"
        style={styles.imageStyle}
        source={Images.splash_gif}
      />
    
    </View>
  );
};

export default SplashScreen;


