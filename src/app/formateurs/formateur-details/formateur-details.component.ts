import {Component, OnInit} from '@angular/core';
import {Formateur} from "../../models/formateur.model";
import {ActivatedRoute} from "@angular/router";
import {FormateurService} from "../../services/formateur.service";

@Component({
  selector: 'app-formateur-details',
  templateUrl: './formateur-details.component.html',
  styleUrl: './formateur-details.component.css'
})
export class FormateurDetailsComponent implements OnInit {
  formateur: Formateur | undefined;

  constructor(
    private route: ActivatedRoute,
    private formateurService: FormateurService
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.formateurService.getFormateurById(+id).subscribe(
        (data: Formateur) => {
          this.formateur = data;
        },
        (error: any) => {
          console.error('Failed to load formateur', error);
        }
      );
    }
  }
}

