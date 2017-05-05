import { ErrorHandler } from '@angular/core';
import { IonicErrorHandler } from 'ionic-angular';
import { AuthData } from '../providers/auth-data';
import { ProfileData } from '../providers/profile-data';
import { EventData } from '../providers/event-data';


// import { SplashScreen } from '@ionic-native/splash-screen';
// import { StatusBar } from '@ionic-native/status-bar';


export function GetProviders() {
  let providers;
  if(document.URL.includes('https://') || document.URL.includes('http://')){
    // Use browser providers
    providers = [

      {provide: ErrorHandler, useClass: IonicErrorHandler},
      AuthData,
      ProfileData,
      EventData
    ];
  } else {
    // Use device providers
    providers = [

      {provide: ErrorHandler, useClass: IonicErrorHandler},
      AuthData,
      ProfileData,
      EventData
    ];
  }
  return providers;
}
