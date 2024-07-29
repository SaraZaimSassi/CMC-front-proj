import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {EquipementService} from "../../services/equipement.service";

@Component({
  selector: 'app-equipemant-add',
  templateUrl: './equipemant-add.component.html',
  styleUrl: './equipemant-add.component.css'
})
export class EquipemantAddComponent implements OnInit {
  equipementFormGroup!: FormGroup;
  fileToUpload: File | null = null;
  categories = ['Category1', 'Category2', 'Category3']; // Liste des catégories
  submitted = false;

  constructor(
    private fb: FormBuilder,
    private equipementService: EquipementService
  ) { }

  ngOnInit(): void {
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

  onFileChange(event: any) {
    if (event.target.files.length > 0) {
      this.fileToUpload = event.target.files[0];
    }
  }

  onSubmit() {
    this.submitted = true;
    if (this.equipementFormGroup.valid) {
      const formData = new FormData();
      Object.keys(this.equipementFormGroup.controls).forEach(key => {
        const value = this.equipementFormGroup.get(key)?.value;
        if (Array.isArray(value)) {
          value.forEach(item => formData.append(key, item));
        } else {
          formData.append(key, value);
        }
      });
      if (this.fileToUpload) {
        formData.append('miniature', this.fileToUpload);
      }

      this.equipementService.addEquipement(formData).subscribe(
        response => {
          alert('Equipement ajouté avec succès');
          this.equipementFormGroup.reset();
        },
        error => {
          console.error('Erreur lors de l\'ajout de l\'équipement', error);
          alert('Échec de l\'ajout de l\'équipement');
        }
      );
    }
  }
}
