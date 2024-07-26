import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ChefPol} from "../../models/chef-pol.model";
import {ChefPolService} from "../../services/chef-pol.service";

@Component({
  selector: 'app-chef-pol-add',
  templateUrl: './chef-pol-add.component.html',
  styleUrl: './chef-pol-add.component.css'
})
export class ChefPolAddComponent  implements OnInit {
  chefPolFormGroup!: FormGroup;
  submitted = false;
  chefsPol: ChefPol[] = [];

  constructor(private formBuilder: FormBuilder, private chefPoleService: ChefPolService) {}

  ngOnInit(): void {
    this.chefPolFormGroup = this.formBuilder.group({
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

  onSaveChefPole() {
    this.submitted = true;
    if (this.chefPolFormGroup.invalid) {
      console.log('Form is invalid');
      return;
    }

    const chefPole: ChefPol = this.chefPolFormGroup.value;
    this.chefPoleService.save(chefPole).subscribe(
      (data) => {
        alert('Chef de Pôle saved successfully');
        console.log(data);
        this.chefsPol.push(data);  // Update the local list with the saved chef de pôle
        this.chefPolFormGroup.reset();
        this.submitted = false;
      },
      (error) => {
        alert('Failed to save Chef de Pôle');
        console.error(error);
      }
    );
  }
}
