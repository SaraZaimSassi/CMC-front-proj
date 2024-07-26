import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {FormateurService} from "../../services/formateur.service";
import {Formateur} from "../../models/formateur.model";

@Component({
  selector: 'app-formateur-add',
  templateUrl: './formateur-add.component.html',
  styleUrl: './formateur-add.component.css'
})
export class FormateurAddComponent implements OnInit {
  formateurFormGroup!: FormGroup;
  submitted = false;
  formateurs: Formateur[] = [];

  constructor(private formBuilder: FormBuilder,private formateurService:FormateurService) {}
  ngOnInit(): void {
    this.formateurFormGroup = this.formBuilder.group({
      nom: ['', Validators.required],
      prenom: ['', Validators.required],
      cin: ['', Validators.required],
      civilite: [''],
      dateNaissance: [''],
      situationFamiliale: [''],
      nombreEnfants: [''],
      dateAffectation: [''],
      photo: [null],
      dateDebut: [''],
      matricule: [''],
      pole: [''],
      emailPro: [''],
      emailPerso: [''],
      tel1: [''],
      tel2: [''],
      adresse: [''],
      ville: ['']
    });
  }


  onSaveFormateur() {
    this.submitted = true;
    if (this.formateurFormGroup.invalid) {
      console.log('test');
      return
    }

    const formateur: Formateur = this.formateurFormGroup.value;
    this.formateurService.save(formateur).subscribe(
      (data) => {
        alert('Formateur saved successfully');
        console.log(data);
        this.formateurs.push(data);  // Update the local list with the saved formateur
        this.formateurFormGroup.reset();
        this.submitted = false;
      },
      (error) => {
        alert('Failed to save formateur');
        console.error(error);
      }
    );
  }
}
