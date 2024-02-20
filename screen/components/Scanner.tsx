import { Text, View } from "native-base"
import { useEffect } from "react";
import { Camera, useCameraDevice, useCameraPermission, useCodeScanner } from "react-native-vision-camera"
import NoCameraErrorView from "./NoCameraErrorView";

const Scanner = () => {
  const { hasPermission, requestPermission } = useCameraPermission();

  const device = useCameraDevice('back')
  if (device == null) return <NoCameraErrorView />
  const codeScanner = useCodeScanner({
    codeTypes: ['qr', 'ean-13'],
    onCodeScanned: (codes) => {
      console.log(`Scanned ${codes.length} codes!`)
    }
  })


  useEffect(() => {
    requestPermission()
  }, [])

  return (
    <>
      <View justifyContent={'center'} alignItems={'center'}>
        <Text> Pagina del bar code</Text>
        <Camera
          device={device}
          isActive={true}
          codeScanner={codeScanner}
        />
      </View>
    </>
  )
}


export default Scanner