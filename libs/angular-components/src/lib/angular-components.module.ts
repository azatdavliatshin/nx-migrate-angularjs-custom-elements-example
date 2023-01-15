import {
  NgModule,
  enableProdMode,
  DoBootstrap,
  ApplicationRef,
} from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  imports: [BrowserModule],
})
export class AngularComponentsModule implements DoBootstrap {
  ngDoBootstrap(appRef: ApplicationRef): void {}
}

export const initLibrary = async () => {
  enableProdMode();
  try {
    await platformBrowserDynamic().bootstrapModule(AngularComponentsModule);
    console.log('Library module is bootstraped');
    return;
  } catch (error) {
    throw error;
  }
};
