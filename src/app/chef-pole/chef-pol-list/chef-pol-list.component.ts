import {Component, OnInit, ViewChild} from '@angular/core';
import {ChefPol} from "../../models/chef-pol.model";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ChefPolEditComponent} from "../chef-pol-edit/chef-pol-edit.component";
import {ChefPolService} from "../../services/chef-pol.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-chef-pol-list',
  templateUrl: './chef-pol-list.component.html',
  styleUrl: './chef-pol-list.component.css'
})
export class ChefPolListComponent implements OnInit {
  chefsPol: ChefPol[] = [];
  searchTerm: string = '';
  selectedChefPolIndex: number | null = null;
  chefPolFormGroup!: FormGroup;
@ViewChild(ChefPolEditComponent) editChefPolComponent!: ChefPolEditComponent;

  constructor(
    private chefPolService: ChefPolService,
    private fb: FormBuilder,
    private router: Router
) {
    this.chefPolFormGroup = this.fb.group({
      id: ['', Validators.required],
      civilite: ['', Validators.required],
      nom: ['', Validators.required],
      prenom: ['', Validators.required],
      cin: ['', Validators.required],
      emailPro: ['', Validators.required],
      tel1: ['', Validators.required],
      matricule: ['', Validators.required],
      pole: ['', Validators.required],
      dateDebut: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.loadChefsPol();
  }

  loadChefsPol(): void {
    this.chefPolService.getAllChefsPol().subscribe(
      (data: ChefPol[]) => {
        this.chefsPol = data;
      },
      (error: any) => {
        console.error('Failed to load chefs de pôle', error);
      }
    );
  }

  onSearch(): void {
    this.chefPolService.searchChefsPoleByName(this.searchTerm).subscribe(
      (data: ChefPol[]) => {
        this.chefsPol = data;
      },
      (error: any) => {
        console.error('Failed to search chefs de pôle', error);
      }
    );
  }

  onEditChefPol(index: number): void {
    this.selectedChefPolIndex = index;
    const selectedChefPol = this.chefsPol[index];
    this.chefPolFormGroup.patchValue(selectedChefPol);
  }

  closeEditForm(): void {
    this.selectedChefPolIndex = null;
    this.chefPolFormGroup.reset();
  }

  onUpdateChefPol(): void {
    if (this.chefPolFormGroup.valid) {
    const updatedChefPol = this.chefPolFormGroup.value;
    if (this.selectedChefPolIndex !== null) {
      this.chefsPol[this.selectedChefPolIndex] = updatedChefPol;
      this.chefPolService.update(updatedChefPol).subscribe(
        () => {
          this.closeEditForm();
          alert('Chef de pôle updated successfully');
        },
        (error: any) => {
          alert('Failed to update chef de pôle');
          console.error(error);
        }
      );
    }
  }
}

  onDeleteChefPol(id: number): void {
    if (confirm('Are you sure you want to delete this chef de pôle?')) {
    this.chefPolService.deleteChefPole(id).subscribe(
      () => {
        this.loadChefsPol();
        alert('Chef de pôle deleted successfully');
      },
      (error: any) => {
        alert('Failed to delete chef de pôle');
        console.error(error);
      }
    );
  }
}

  viewChefPolDetails(id: number): void {
    this.router.navigate(['/chefs-pole', id]);
  }

  protected readonly ChefPol = ChefPol;
}
