import { NgModule } from '@angular/core'
import { FlexLayoutModule } from '@angular/flex-layout'
import { FormsModule } from '@angular/forms'
import { BrowserModule } from '@angular/platform-browser'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { AppRouteModule } from './app-route.module'
import { AppComponent } from './app.component'
import { LoginComponent } from './auth/login/login.component'
import { SignupComponent } from './auth/signup/signup.component'
import { MaterialModule } from './material.module'
import { CurrentTraningComponent } from './traning/current-traning/current-traning.component'
import { NewTraningComponent } from './traning/new-traning/new-traning.component'
import { PastTraningComponent } from './traning/past-traning/past-traning.component'
import { TraningComponent } from './traning/traning/traning.component'
import { WelcomeComponent } from './welcome/welcome.component'


@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    LoginComponent,
    TraningComponent,
    CurrentTraningComponent,
    NewTraningComponent,
    PastTraningComponent,
    WelcomeComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MaterialModule,
    AppRouteModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
