import {
  NgModule,
  enableProdMode,
  DoBootstrap,
  ApplicationRef,
  Injector,
} from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { BrowserModule } from '@angular/platform-browser';
import { createCustomElement } from '@angular/elements';
import { SignInModule, ListErrorsComponent } from './pages';

const components = [ListErrorsComponent];

@NgModule({
  declarations: [],
  imports: [BrowserModule, SignInModule],
  exports: [],
})
export class AngularComponentsModule implements DoBootstrap {
  constructor(private injector: Injector) {}

  ngDoBootstrap(appRef: ApplicationRef): void {
    components.forEach((c) => {
      const element = createCustomElement(c, { injector: this.injector });
      customElements.define(c.ComponentName, element);
    });
  }
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
