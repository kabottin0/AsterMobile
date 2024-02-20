import { useNavigation } from '@react-navigation/native';
import React, { useState, useRef, useEffect } from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  StatusBar,
} from 'react-native';
import { Camera, CameraApi, CameraType, Orientation } from 'react-native-camera-kit';



const BarcodeReader = ({ getBarCode }: any) => {
  const cameraRef = useRef<CameraApi>(null);
  const [torchMode, setTorchMode] = useState(false);
  const [cameraType, setCameraType] = useState(CameraType.Back);
  const [barcode, setBarcode] = useState<string>('');
  const navigation = useNavigation()

  useEffect(() => {
    getBarCode(barcode)
    const t = setTimeout(() => {
      setBarcode('');
    }, 2000);
    return () => {
      clearTimeout(t);
      navigation.navigate('Terminalino')
    };
  }, [barcode]);

  return (
    <View style={styles.screen}>
      <StatusBar />
        <Camera
          ref={cameraRef}
          style={styles.cameraPreview}
          cameraType={cameraType}
          //   flashMode={flashData?.mode}
          zoomMode="on"
          focusMode="on"
          torchMode={torchMode ? 'on' : 'off'}
          onOrientationChange={(e) => {
            // We recommend locking the camera UI to portrait (using a different library)
            // and rotating the UI elements counter to the orientation
            // However, we include onOrientationChange so you can match your UI to what the camera does
            switch (e.nativeEvent.orientation) {
              case Orientation.LANDSCAPE_LEFT:
                console.log('orientationChange', 'LANDSCAPE_LEFT');
                break;
              case Orientation.LANDSCAPE_RIGHT:
                console.log('orientationChange', 'LANDSCAPE_RIGHT');
                break;
              case Orientation.PORTRAIT:
                console.log('orientationChange', 'PORTRAIT');
                break;
              case Orientation.PORTRAIT_UPSIDE_DOWN:
                console.log('orientationChange', 'PORTRAIT_UPSIDE_DOWN');
                break;
              default:
                console.log('orientationChange', e.nativeEvent);
                break;
            }
          }}
          // ratioOverlay={ratios[ratioArrayPosition]}
          laserColor="red"
          frameColor="white"
          scanBarcode
          showFrame
          onReadCode={(event) => {
            setBarcode(event.nativeEvent.codeStringValue)
          }}
        />
      </View>
  );
};

export default BarcodeReader;

const styles = StyleSheet.create({
  screen: {
    flex:1,
  },

  topButtons: {
    margin: 10,
    zIndex: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  topButton: {
    padding: 10,
  },

  cameraContainer: {
    flex:1,
  },
  cameraPreview: {
    aspectRatio: 3 / 4,
    width: '100%',
    justifyContent:'center'
  },
  bottomButtons: {
    margin: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  backBtnContainer: {
    alignItems: 'flex-start',
  },
  textNumberContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
  barcodeContainer: {
    flex: 1,
    alignItems: 'flex-end',
    justifyContent: 'center',
    borderColor: 'red',
    borderWidth:5,
  },
  textStyle: {
    padding: 10,
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    
  },
});