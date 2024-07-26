import {Component, OnInit} from '@angular/core';
import {ChefPol} from "../../models/chef-pol.model";
import {ActivatedRoute} from "@angular/router";
import {ChefPolService} from "../../services/chef-pol.service";

@Component({
  selector: 'app-chef-pol-detail',
  templateUrl: './chef-pol-detail.component.html',
  styleUrl: './chef-pol-detail.component.css'
})
export class ChefPolDetailComponent implements OnInit {
  ChefPol: ChefPol | undefined;

  constructor(
    private route: ActivatedRoute,
    private chefPolService: ChefPolService
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.chefPolService.getChefPoleById(+id).subscribe(
        (data: ChefPol) => {
          this.ChefPol = data;
        },
        (error: any) => {
          console.error('Failed to load chef de pôle', error);
        }
      );
    }
  }
}
