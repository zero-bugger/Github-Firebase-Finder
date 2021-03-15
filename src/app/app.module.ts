import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './layouts/header/header.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { ReposComponent } from './components/repos/repos.component';
import { UsercardComponent } from './components/usercard/usercard.component';
import { HomeComponent } from './pages/home/home.component';
import { PagenotfoundComponent } from './pages/pagenotfound/pagenotfound.component';
import { SigninComponent } from './pages/signin/signin.component';
//import { SignoutComponent } from './pages/signout/signout.component';

import {environment} from '../environments/environment'

//forms and http
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

//firebase
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireModule } from '@angular/fire';

//toast
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { SignupComponent } from './pages/signup/signup.component'



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ReposComponent,
    UsercardComponent,
    HomeComponent,
    PagenotfoundComponent,
    SigninComponent, 
    SignupComponent,
	  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
	HttpClientModule,
    FormsModule,
	BrowserAnimationsModule,
	ToastrModule.forRoot(),
	AngularFireModule.initializeApp(environment.firebase),
	AngularFireAuthModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
