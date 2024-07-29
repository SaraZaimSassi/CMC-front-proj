import {Component, NgModule} from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {FormateurAddComponent} from "./formateurs/formateur-add/formateur-add.component";
import {FormateurListComponent} from "./formateurs/formateur-list/formateur-list.component";
import {FormateurEditComponent} from "./formateurs/formateur-edit/formateur-edit.component";
import {FormateurDetailsComponent} from "./formateurs/formateur-details/formateur-details.component";
import {ChefPolListComponent} from "./chef-pole/chef-pol-list/chef-pol-list.component";
import {ChefPolAddComponent} from "./chef-pole/chef-pol-add/chef-pol-add.component";
import {ChefPolEditComponent} from "./chef-pole/chef-pol-edit/chef-pol-edit.component";
import {ChefPolDetailComponent} from "./chef-pole/chef-pol-detail/chef-pol-detail.component";
import {SecteurComponent} from "./secteur/secteur.component";
import {AddSecteurComponent} from "./secteur/add-secteur/add-secteur.component";
import {EditSecteurComponent} from "./secteur/edit-secteur/edit-secteur.component";
import {AddPolComponent} from "./pol/add-pol/add-pol.component";
import {EditPolComponent} from "./pol/edit-pol/edit-pol.component";
import {PolComponent} from "./pol/pol.component";
import {PoleComponent} from "./pol/pole/pole.component";
import {EquipemantListComponent} from "./equipements/equipemant-list/equipemant-list.component";
import {EquipemantAddComponent} from "./equipements/equipemant-add/equipemant-add.component";
import {EquipemantEditComponent} from "./equipements/equipemant-edit/equipemant-edit.component";

const routes: Routes = [
  { path: "newformateur", component:FormateurAddComponent},
  { path: "listformateur", component:FormateurListComponent},
  { path: 'formateur/:id/edit', component: FormateurEditComponent },
  { path: 'formateurs/:id', component: FormateurDetailsComponent },
  { path: "listchefpol", component:ChefPolListComponent},
  { path: "newchefpol", component:ChefPolAddComponent},
  { path: 'chefpol/:id/edit', component: ChefPolEditComponent },
  { path: 'chefpol/:id', component: ChefPolDetailComponent },
  { path: 'listsecteur', component: SecteurComponent },
  { path: 'newsecteur', component: AddSecteurComponent },
  { path: 'secteurs/:id/edit', component: EditSecteurComponent },
  { path: 'listpol', component: PolComponent },
  { path: 'newpol', component: AddPolComponent },
  { path: 'pol/:id/edit', component: EditPolComponent },
  { path: 'pol/:id/show', component: PoleComponent},
  { path: 'listequipement', component: EquipemantListComponent },
  { path: 'newequipement', component: EquipemantAddComponent },
  {path: 'equipement/:id/edit', component: EquipemantEditComponent },



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
