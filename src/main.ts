/**
 * @file main.ts
 * @description
 * The main entry point for the Angular application. This file bootstraps the root `AppComponent`
 * using the Angular `bootstrapApplication` method, applying the application configuration defined in `appConfig`.
 */

/// <reference types="@angular/localize" />

import {bootstrapApplication} from '@angular/platform-browser';
import {appConfig} from './app/app.config';
import {AppComponent} from './app/app.component';

/**
 * Bootstraps the root Angular application.
 *
 * @throws {Error} Logs any errors encountered during the bootstrap process.
 */
bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
