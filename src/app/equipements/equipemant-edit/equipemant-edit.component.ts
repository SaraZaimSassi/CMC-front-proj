import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {EquipementService} from "../../services/equipement.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-equipemant-edit',
  templateUrl: './equipemant-edit.component.html',
  styleUrl: './equipemant-edit.component.css'
})
export class EquipemantEditComponent  implements OnInit {
  equipementFormEdit!: FormGroup;
  submitted = false;
  equipementId!: number;

  constructor(
    private fb: FormBuilder,
    private equipementService: EquipementService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.equipementId = +this.route.snapshot.paramMap.get('id')!;

    this.equipementService.getEquipementById(this.equipementId).subscribe(data => {
      this.equipementFormEdit.patchValue(data);
    });

    this.equipementFormEdit = this.fb.group({
      id: [''],
      nom: ['', Validators.required],
      codeProduit: ['', Validators.required],
      miniature: [''],
      statut: [''],
      categories: [''],
      modele: [''],
      marque: [''],
      famille: [''],
      type: [''],
      description: ['']
    });
  }

  onSubmit() {
    this.submitted = true;

    if (this.equipementFormEdit.invalid) {
      return;
    }

    this.equipementService.updateEquipement(this.equipementFormEdit.value).subscribe(
      () => {
        console.log('Equipement updated successfully');
        this.router.navigate(['/equipements']); // Redirection après la mise à jour
      },
      error => {
        console.error('Error updating equipement', error);
      }
    );
  }
}
