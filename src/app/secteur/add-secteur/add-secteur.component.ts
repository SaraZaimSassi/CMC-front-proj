import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Secteur} from "../../models/Secteur.model";
import {SecteurService} from "../../services/secteur.service";

@Component({
  selector: 'app-add-secteur',
  templateUrl: './add-secteur.component.html',
  styleUrl: './add-secteur.component.css'
})
export class AddSecteurComponent implements OnInit {
  secteurFormGroup!: FormGroup;
  submitted = false;
  secteurs: Secteur[] = [];

  constructor(private formBuilder: FormBuilder, private secteurService: SecteurService) {}

  ngOnInit(): void {
    this.secteurFormGroup = this.formBuilder.group({
      id: ['', Validators.required],
      nom: ['', Validators.required],
      desc: ['', Validators.required],
      image: [null, Validators.required]
    });
  }

  onSaveSecteur() {
    this.submitted = true;
    if (this.secteurFormGroup.invalid) {
      console.log('Form is invalid');
      return;
    }

    const secteur: Secteur = this.secteurFormGroup.value;
    console.log('Saving secteur:', secteur);  // Log to verify the form values

    this.secteurService.save(secteur).subscribe(
      (data) => {
        alert('Secteur saved successfully');
        console.log('Saved secteur:', data);
        this.secteurs.push(data);  // Update the local list with the saved secteur
        this.secteurFormGroup.reset();
        this.submitted = false;
      },
      (error) => {
        alert('Failed to save Secteur');
        console.error('Error saving secteur:', error);
      }
    );
  }
}
