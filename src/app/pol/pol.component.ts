import {Component, OnInit} from '@angular/core';
import {Pole} from "../models/Pole.model";
import {PoleService} from "../services/pole.service";

@Component({
  selector: 'app-pol',
  templateUrl: './pol.component.html',
  styleUrl: './pol.component.css'
})
export class PolComponent implements OnInit{
  poles: Pole[] = [];

  constructor(private poleService: PoleService) {}

  ngOnInit(): void {
    this.loadPoles();
  }

  loadPoles(): void {
    this.poleService.getPoles().subscribe(
      (data: Pole[]) => {
        this.poles = data;
        console.log(this.poles); // Vérifiez les données ici
      },
      error => {
        console.error('Erreur lors de la récupération des pôles', error);
      }
    );
  }
}
