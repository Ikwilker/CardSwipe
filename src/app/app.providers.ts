import { ErrorHandler } from '@angular/core';
import { IonicErrorHandler } from 'ionic-angular';
import { AuthData } from '../providers/auth-data';



// import { SplashScreen } from '@ionic-native/splash-screen';
// import { StatusBar } from '@ionic-native/status-bar';


export function GetProviders() {
  let providers;
  if(document.URL.includes('https://') || document.URL.includes('http://')){
    // Use browser providers
    providers = [

      {provide: ErrorHandler, useClass: IonicErrorHandler},
      AuthData
    ];
  } else {
    // Use device providers
    providers = [

      {provide: ErrorHandler, useClass: IonicErrorHandler},
      AuthData
    ];
  }
  return providers;
}
