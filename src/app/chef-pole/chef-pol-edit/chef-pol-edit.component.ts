import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {ChefPolService} from "../../services/chef-pol.service";

@Component({
  selector: 'app-chef-pol-edit',
  templateUrl: './chef-pol-edit.component.html',
  styleUrl: './chef-pol-edit.component.css'
})
export class ChefPolEditComponent implements OnInit {
  chefPole: any;
  chefPoleFormEdit!: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private chefPolService: ChefPolService, // Utilisez le service approprié
    private router: Router,
    private fb: FormBuilder
  ) {
    this.chefPoleFormEdit = this.fb.group({
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

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const chefPoleId = params['id']; // Récupérer l'ID du chef de pôle depuis les paramètres de la route
      this.loadChefPoleDetails(chefPoleId); // Charger les détails du chef de pôle en fonction de l'ID
    });
  }

  loadChefPoleDetails(id: number) {
    this.chefPolService.getChefPoleById(id).subscribe(data => {
      this.chefPole = data; // Assigner les données récupérées à l'objet local
      this.chefPoleFormEdit.patchValue(this.chefPole);
    });
  }

  onSubmit() {
    if (this.chefPoleFormEdit.valid) {
      // Soumettre les valeurs mises à jour du formulaire
      this.chefPolService.update(this.chefPoleFormEdit.value).subscribe(updatedChefPole => {
        console.log('Chef de Pôle mis à jour avec succès');
        this.router.navigate(['/listchefPole', this.chefPole.id]); // Naviguer vers la page des détails après la mise à jour réussie
      });
    }
  }

  onUpdateChefPol() {
    
  }
}
