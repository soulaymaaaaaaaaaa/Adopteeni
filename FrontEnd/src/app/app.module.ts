import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdopteeniComponent } from './adopteeni/adopteeni.component';
import { AdopterComponent } from './adopter/adopter.component';
import { AjouterComponent } from './ajouter/ajouter.component';
import { ConsulterComponent } from './consulter/consulter.component';
import { HomeComponent } from './home/home.component';
import { ModifierComponent } from './modifier/modifier.component';
import { OhComponent } from './oh/oh.component';
import { SeconnecterComponent } from './seconnecter/seconnecter.component';
import { SignupComponent } from './signup/signup.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    AdopteeniComponent,
    AdopterComponent,
    AjouterComponent,
    ConsulterComponent,
    HomeComponent,
    ModifierComponent,
    OhComponent,
    SeconnecterComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
