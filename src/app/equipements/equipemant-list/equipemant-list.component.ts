import {Component, OnInit, ViewChild} from '@angular/core';
import {Equipement} from "../../models/Equipement.model";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {EquipementService} from "../../services/equipement.service";
import {EquipemantEditComponent} from "../equipemant-edit/equipemant-edit.component";



@Component({
  selector: 'app-equipemant-list',
  templateUrl: './equipemant-list.component.html',
  styleUrl: './equipemant-list.component.css'
})
export class EquipemantListComponent implements OnInit {
  equipements: any[] = []; // Correction du nom de la propriété
  equipementFormGroup!: FormGroup;
  fileToUpload: File | null = null;
  categories = ['Category1', 'Category2', 'Category3']; // Liste des catégories

  constructor(
    private fb: FormBuilder,
    private equipementService: EquipementService
  ) {
    this.equipementFormGroup = this.fb.group({
      nom: ['', Validators.required],
      codeProduit: ['', Validators.required],
      miniature: [null],
      status: ['', Validators.required],
      categories: [[], Validators.required],
      model: ['', Validators.required],
      marque: ['', Validators.required],
      famille: ['', Validators.required],
      type: ['', Validators.required],
      desc: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.loadEquipements(); // Charger les équipements
  }

  loadEquipements() {
    this.equipementService.getAllEquipements().subscribe(
      data => {
        this.equipements = data;
      },
      error => {
        console.error('Error loading equipments', error);
      }
    );
  }

  onFileChange(event: any) {
    if (event.target.files.length > 0) {
      this.fileToUpload = event.target.files[0];
    }
  }

  onSubmit() {
    if (this.equipementFormGroup.valid) {
      const formData = new FormData();
      Object.keys(this.equipementFormGroup.controls).forEach(key => {
        formData.append(key, this.equipementFormGroup.get(key)?.value);
      });
      if (this.fileToUpload) {
        formData.append('miniature', this.fileToUpload);
      }

      this.equipementService.addEquipement(formData).subscribe(
        response => {
          alert('Equipement saved successfully');
          this.equipementFormGroup.reset();
          this.loadEquipements(); // Recharger les équipements après l'ajout
        },
        error => {
          console.error('Error saving equipement', error);
          alert('Failed to save equipement');
        }
      );
    }
  }
  deleteEquipement(id: number) {
    this.equipementService.deleteEquipement(id).subscribe(
      response => {
        alert('Equipement deleted successfully');
        this.loadEquipements(); // Recharger les équipements après la suppression
      },
      error => {
        console.error('Error deleting equipement', error);
        alert('Failed to delete equipement');
      }
    );
  }
}
