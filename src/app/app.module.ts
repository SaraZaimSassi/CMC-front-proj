import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponentsComponent } from './components/components.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { HeaderComponent } from './components/header/header.component';
import { FormateursComponent } from './formateurs/formateurs.component';
import { FormateurEditComponent } from './formateurs/formateur-edit/formateur-edit.component';
import { FormateurAddComponent } from './formateurs/formateur-add/formateur-add.component';
import { FormateurListComponent } from './formateurs/formateur-list/formateur-list.component';
import { MainComponent } from './components/main/main.component';
import { FooterComponent } from './components/footer/footer.component';
import {HttpClientModule} from "@angular/common/http";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { FormateurDetailsComponent } from './formateurs/formateur-details/formateur-details.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { ChefPolAddComponent } from './chef-pole/chef-pol-add/chef-pol-add.component';
import { ChefPolListComponent } from './chef-pole/chef-pol-list/chef-pol-list.component';
import { ChefPolDetailComponent } from './chef-pole/chef-pol-detail/chef-pol-detail.component';
import { ChefPolEditComponent } from './chef-pole/chef-pol-edit/chef-pol-edit.component';
import { SecteurComponent } from './secteur/secteur.component';
import { AddSecteurComponent } from './secteur/add-secteur/add-secteur.component';
import { PolComponent } from './pol/pol.component';
import { EditSecteurComponent } from './secteur/edit-secteur/edit-secteur.component';
import { AddPolComponent } from './pol/add-pol/add-pol.component';
import { EditPolComponent } from './pol/edit-pol/edit-pol.component';
import { StagiaireComponent } from './stagiaire/stagiaire.component';
import { AddStagiereComponent } from './stagiaire/add-stagiere/add-stagiere.component';
import { EditStagiereComponent } from './stagiaire/edit-stagiere/edit-stagiere.component';
import { ListStagiereComponent } from './stagiaire/list-stagiere/list-stagiere.component';
import { DetailStagiereComponent } from './stagiaire/detail-stagiere/detail-stagiere.component';
import { PoleComponent } from './pol/pole/pole.component';
import { EquipementsComponent } from './equipements/equipements.component';
import { EquipemantAddComponent } from './equipements/equipemant-add/equipemant-add.component';
import { EquipemantEditComponent } from './equipements/equipemant-edit/equipemant-edit.component';
import { EquipemantListComponent } from './equipements/equipemant-list/equipemant-list.component';

@NgModule({
  declarations: [
    AppComponent,
    ComponentsComponent,
    SidebarComponent,
    NavBarComponent,
    HeaderComponent,
    FormateursComponent,
    FormateurEditComponent,
    FormateurAddComponent,
    FormateurListComponent,
    MainComponent,
    FooterComponent,
    FormateurDetailsComponent,
    ChefPolAddComponent,
    ChefPolListComponent,
    ChefPolDetailComponent,
    ChefPolEditComponent,
    SecteurComponent,
    AddSecteurComponent,
    PolComponent,
    EditSecteurComponent,
    AddPolComponent,
    EditPolComponent,
    StagiaireComponent,
    AddStagiereComponent,
    EditStagiereComponent,
    ListStagiereComponent,
    DetailStagiereComponent,
    PoleComponent,
    EquipementsComponent,
    EquipemantAddComponent,
    EquipemantEditComponent,
    EquipemantListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
