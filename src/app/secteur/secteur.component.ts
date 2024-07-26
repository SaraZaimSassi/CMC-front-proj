import {Component, OnInit} from '@angular/core';
import {SecteurService} from "../services/secteur.service";
import {Secteur} from "../models/Secteur.model";

@Component({
  selector: 'app-secteur',
  templateUrl: './secteur.component.html',
  styleUrl: './secteur.component.css'
})
export class SecteurComponent implements OnInit {
  secteurs: Secteur[] = [];

  constructor(private secteurService: SecteurService) {}

  ngOnInit(): void {
    this.secteurService.getSecteurs().subscribe((data: Secteur[]) => {
      this.secteurs = data;
    });
  }
}
