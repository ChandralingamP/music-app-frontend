import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.musicapp.app',
  appName: 'music-app',
  webDir: 'dist',
  bundledWebRuntime: false
};

// import { Camera, CameraResultType } from '@capacitor/camera';

// // Take a picture or video, or load from the library
// const picture = await Camera.getPicture({
//   resultType: CameraResultType.Uri
// });
export default config;
