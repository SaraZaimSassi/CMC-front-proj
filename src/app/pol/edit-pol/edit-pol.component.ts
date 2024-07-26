import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Secteur} from "../../models/Secteur.model";
import {PoleService} from "../../services/pole.service";
import {SecteurService} from "../../services/secteur.service";
import {ActivatedRoute} from "@angular/router";
import {Pole} from "../../models/Pole.model";

@Component({
  selector: 'app-edit-pol',
  templateUrl: './edit-pol.component.html',
  styleUrl: './edit-pol.component.css'
})
export class EditPolComponent implements OnInit {
  poleFormGroup!: FormGroup;
  submitted = false;
  secteurs: Secteur[] = [];
  poleId!: number;

  constructor(
    private formBuilder: FormBuilder,
    private poleService: PoleService,
    private secteurService: SecteurService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.poleId = this.route.snapshot.params['id'];
    this.poleFormGroup = this.formBuilder.group({
      id: ['', Validators.required],
      nom: ['', Validators.required],
      desc: ['', Validators.required],
      image: [null, Validators.required],
      secteur: [null, Validators.required]
    });

    this.loadSecteurs();
    this.loadPole();
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

  loadPole() {
    this.poleService.getById(this.poleId).subscribe(
      (data) => {
        this.poleFormGroup.patchValue(data);
      },
      (error) => {
        console.error('Failed to load pole:', error);
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
    this.poleService.update(pole).subscribe(
      (data) => {
        alert('Pole updated successfully');
        console.log('Updated pole:', data);
        this.poleFormGroup.reset();
        this.submitted = false;
      },
      (error) => {
        alert('Failed to update pole');
        console.error('Error updating pole:', error);
      }
    );
  }
}
