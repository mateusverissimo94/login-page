import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DefaultLoginLayoutComponent } from './components/default-login-layout/default-login-layout.component';
import { LoginComponent } from './pages/login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { PrimaryInputComponent } from './components/primary-input/primary-input.component';
import { provideHttpClient } from '@angular/common/http';
import {
  BrowserAnimationsModule,
  provideAnimations,
} from '@angular/platform-browser/animations';
import { SingupComponent } from './pages/singup/singup.component';
import { UserComponent } from './pages/user/user.component';

@NgModule({
  declarations: [
    AppComponent,
    DefaultLoginLayoutComponent,
    LoginComponent,
    PrimaryInputComponent,
    SingupComponent,
    UserComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
  ],
  providers: [provideHttpClient(), provideAnimations()],
  bootstrap: [AppComponent],
})
export class AppModule {}
