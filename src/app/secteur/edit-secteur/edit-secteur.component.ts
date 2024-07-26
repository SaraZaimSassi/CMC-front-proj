import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {SecteurService} from "../../services/secteur.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Secteur} from "../../models/Secteur.model";

@Component({
  selector: 'app-edit-secteur',
  templateUrl: './edit-secteur.component.html',
  styleUrl: './edit-secteur.component.css'
})
export class EditSecteurComponent implements OnInit {
  secteurFormEdit!: FormGroup;
  submitted = false;
  secteurId!: number;

  constructor(
    private formBuilder: FormBuilder,
    private secteurService: SecteurService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.secteurId = +this.route.snapshot.paramMap.get('id')!;
    this.secteurFormEdit = this.formBuilder.group({
      id: ['', Validators.required],
      nom: ['', Validators.required],
      desc: ['', Validators.required],
      image: [null]
    });

    this.secteurService.getById(this.secteurId).subscribe(
      (secteur) => {
        this.secteurFormEdit.patchValue(secteur);
      },
      (error) => {
        console.error('Error fetching secteur', error);
      }
    );
  }

  onSubmit() {
    this.submitted = true;
    if (this.secteurFormEdit.invalid) {
      console.log('Form is invalid');
      return;
    }

    const secteur: Secteur = this.secteurFormEdit.value;
    this.secteurService.update(secteur).subscribe(
      (data) => {
        alert('Secteur updated successfully');
        console.log(data);
        this.router.navigate(['/listsecteur']);
      },
      (error) => {
        alert('Failed to update Secteur');
        console.error(error);
      }
    );
  }
}
