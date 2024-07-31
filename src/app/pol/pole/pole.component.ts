import {Component, OnInit} from '@angular/core';
import {Formateur} from "../../models/formateur.model";
import {FormateurService} from "../../services/formateur.service";
import {Equipement} from "../../models/Equipement.model";
import {EquipementService} from "../../services/equipement.service";
import {ChefPol} from "../../models/chef-pol.model";
import {ChefPolService} from "../../services/chef-pol.service";

@Component({
  selector: 'app-pole',
  templateUrl: './pole.component.html',
  styleUrl: './pole.component.css'
})
export class PoleComponent implements OnInit {
  formateurs: Formateur[] = [];
  equipements: Equipement[] = [];
  chefsPol: ChefPol[] = [];

  constructor(private formateurService: FormateurService,private equipementService: EquipementService,private chefPolService: ChefPolService
  ) {}

  ngOnInit(): void {
    this.loadFormateurs();
    this.loadEquipements();
    this.loadChefsPol();
  }

  loadFormateurs(): void {
    this.formateurService.getAllFormateurs().subscribe(
      (data: Formateur[]) => {
        this.formateurs = data;
      },
      (error: any) => {
        console.error('Failed to load formateurs', error);
      }
    );
  }
  loadEquipements(): void {
    this.equipementService.getAllEquipements().subscribe(
      (data: Equipement[]) => {
        this.equipements = data;
      },
      (error: any) => {
        console.error('Failed to load equipements', error);
      }
    );
  }
  deleteEquipement(id: number): void {
    this.equipementService.deleteEquipement(id).subscribe(
      () => {
        this.equipements = this.equipements.filter(equipement => equipement.id !== id);
      },
      (error: any) => {
        console.error('Failed to delete equipement', error);
      }
    );
  }
  loadChefsPol(): void {
    this.chefPolService.getAllChefsPol().subscribe(
      (data: ChefPol[]) => {
        this.chefsPol = data;
      },
      (error: any) => {
        console.error('Failed to load chefs de pôle', error);
      }
    );
  }
}
