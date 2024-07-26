import {Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {Formateur} from "../../models/formateur.model";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {FormateurService} from "../../services/formateur.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-formateur-edit',
  templateUrl: './formateur-edit.component.html',
  styleUrl: './formateur-edit.component.css'
})
export class FormateurEditComponent implements OnInit {
  formateur: any;
  formateurFormEdit!: FormGroup;
  // Define your formateur object type

  constructor(
    private route: ActivatedRoute,
    private formateurService: FormateurService,
    private router: Router,
    private fb:FormBuilder
) {
    this.formateurFormEdit= this.fb.group({
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
      ville: ['']});

  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const formateurId = params['id']; // Retrieve formateur ID from route parameter
      this.loadFormateurDetails(formateurId); // Load formateur details based on ID
    })
  }


  loadFormateurDetails(id: number) {
    this.formateurService.getFormateurById(id).subscribe(data => {
      this.formateur = data; // Assign fetched formateur data to local object
      this.formateurFormEdit.patchValue(this.formateur);
      //console.log(data)
    });
  }

  onSubmit() {
    console.log('test02')
    if (this.formateurFormEdit.valid) {
      // Submit the formateurForm.value which contains updated form values
      this.formateurService.update(this.formateurFormEdit.value).subscribe(updatedFormateur => {
        console.log('Formateur mis à jour avec succès:');
        //this.router.navigate(['/listformateur', this.formateur.id]); // Navigate to formateur details page after successful update
     });
    }
  }
}

