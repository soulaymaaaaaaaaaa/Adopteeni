import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdopteeniComponent } from './adopteeni/adopteeni.component';
import { AdopterComponent } from './adopter/adopter.component';
import { AjouterComponent } from './ajouter/ajouter.component';
import { ConsulterComponent } from './consulter/consulter.component';
import { HomeComponent } from './home/home.component';
import { ModifierComponent } from './modifier/modifier.component';
import { SeconnecterComponent } from './seconnecter/seconnecter.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'adopteeni',component:AdopteeniComponent},
  {path:'adopter',component:AdopterComponent},
  {path:'ajouter',component:AjouterComponent},
  {path:'consulter',component:ConsulterComponent},
  {path:'modifier',component:ModifierComponent},
  {path:'connecter',component:SeconnecterComponent},
  {path:'signup',component:SignupComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
