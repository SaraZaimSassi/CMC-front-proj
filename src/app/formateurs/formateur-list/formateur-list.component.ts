import {Component, OnInit, ViewChild} from '@angular/core';
import {Formateur} from "../../models/formateur.model";
import {FormateurService} from "../../services/formateur.service";
import {FormateurEditComponent} from "../formateur-edit/formateur-edit.component";
import { ActivatedRoute } from '@angular/router';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-formateur-list',
  templateUrl: './formateur-list.component.html',
  styleUrl: './formateur-list.component.css'
})
export class FormateurListComponent implements OnInit {
  formateurs: Formateur[] = [];
  searchTerm: string = '';
  selectedFormateurIndex: number | null = null;
  formateurFormGroup!: FormGroup;
  @ViewChild(FormateurEditComponent) editFormateurComponent!: FormateurEditComponent;
  private router: any;

  constructor(private formateurService: FormateurService, private fb: FormBuilder) {
    this.formateurFormGroup = this.fb.group({
      nom: ['', Validators.required],
      prenom: ['', Validators.required],
      cin: ['', Validators.required],
      civilite: ['', Validators.required],
      dateNaissance: ['', Validators.required],
      situationFamiliale: ['', Validators.required],
      nombreEnfants: ['', Validators.required],
      dateAffectation: ['', Validators.required],
      dateDebut: ['', Validators.required],
      id: ['', Validators.required],
      pole: ['', Validators.required],
      emailPro: ['', Validators.required],
      emailPerso: ['', Validators.required],
      telephonePro: ['', Validators.required],
      telephonePerso: ['', Validators.required],
      adresse: ['', Validators.required],
      ville: ['', Validators.required],
      codePostal: ['', Validators.required],
      pays: ['', Validators.required]
    });
  }



  ngOnInit(): void {
    this.loadFormateurs();
  }

  loadFormateurs(): void {
    this.formateurService.getAllFormateurs().subscribe(
      (data: Formateur[]) => {
        console.log(data);
        this.formateurs = data;
      },
      (error: any) => {
        console.error('Failed to load formateurs', error);
      }
    );
  }

  onSearch(): void {
    this.formateurService.searchFormateursByName(this.searchTerm).subscribe(
      (data: Formateur[]) => {
        this.formateurs = data;
        console.log(this.formateurs)

      },
      (error: any) => {
        console.error('Failed to search formateurs', error);
      }
    );
  }




  onEditFormateur(index: number): void {
    this.selectedFormateurIndex = index;
    const selectedFormateur = this.formateurs[index];
    console.log(selectedFormateur);
    this.formateurFormGroup.patchValue(selectedFormateur);
  }

  closeEditForm(): void {
    this.selectedFormateurIndex = null;
    this.formateurFormGroup.reset();
  }

  onUpdateFormateur(): void {
    if (this.formateurFormGroup.valid) {
      const updatedFormateur = this.formateurFormGroup.value;
      if (this.selectedFormateurIndex !== null) {
        this.formateurs[this.selectedFormateurIndex] = updatedFormateur;
      }
      this.closeEditForm();
    }
  }
  onDeleteFormateur(id: number): void {
    if (confirm('Are you sure you want to delete this formateur?')) {
      this.formateurService.deleteFormateur(id).subscribe(
        () => {
          this.loadFormateurs();
          alert('Formateur deleted successfully');
        },
        (error: any) => {
          alert('Failed to delete formateur');
          console.error(error);
        }
      );
    }
  }
  viewFormateurDetails(id: number): void {
    this.router.navigate(['/formateurs', id]);
  }
}
