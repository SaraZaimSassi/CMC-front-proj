import {Component, OnInit} from '@angular/core';
import {Formateur} from "../../models/formateur.model";
import {FormateurService} from "../../services/formateur.service";

@Component({
  selector: 'app-pole',
  templateUrl: './pole.component.html',
  styleUrl: './pole.component.css'
})
export class PoleComponent implements OnInit {
  formateurs: Formateur[] = [];

  constructor(private formateurService: FormateurService) {}

  ngOnInit(): void {
    this.loadFormateurs();
  }

  loadFormateurs(): void {
    this.formateurService.getAllFormateurs().subscribe(
      (data: Formateur[]) => {
        this.formateurs = data;
      },
      (error: any) => {
        console.error('Failed to load formateurs', error);
      }
    );
  }
}
