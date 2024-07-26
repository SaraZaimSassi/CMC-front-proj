import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {PoleService} from "../../services/pole.service";
import {SecteurService} from "../../services/secteur.service";
import {Secteur} from "../../models/Secteur.model";
import {Pole} from "../../models/Pole.model";

@Component({
  selector: 'app-add-pol',
  templateUrl: './add-pol.component.html',
  styleUrl: './add-pol.component.css'
})
export class AddPolComponent implements OnInit {
  poleFormGroup!: FormGroup;
  submitted = false;
  secteurs: Secteur[] = [];

  constructor(
    private formBuilder: FormBuilder,
    private poleService: PoleService,
    private secteurService: SecteurService
  ) {}

  ngOnInit(): void {
    this.poleFormGroup = this.formBuilder.group({
      id: ['', Validators.required],
      nom: ['', Validators.required],
      desc: ['', Validators.required],
      image: [null, Validators.required],
      secteur: [null, Validators.required]
    });

    this.loadSecteurs();
  }

  loadSecteurs() {
    this.secteurService.getAll().subscribe(
      (data) => {
        this.secteurs = data;
      },
      (error) => {
        console.error('Failed to load secteurs:', error);
      }
    );
  }

  onSavePole() {
    this.submitted = true;
    if (this.poleFormGroup.invalid) {
      console.log('Form is invalid');
      return;
    }

    const pole: Pole = this.poleFormGroup.value;
    this.poleService.save(pole).subscribe(
      (data) => {
        alert('Pole saved successfully');
        console.log('Saved pole:', data);
        this.poleFormGroup.reset();
        this.submitted = false;
      },
      (error) => {
        alert('Failed to save pole');
        console.error('Error saving pole:', error);
      }
    );
  }
}
