import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {ChefPol} from "../models/chef-pol.model";

@Injectable({
  providedIn: 'root'
})
export class ChefPolService {
  private apiURL = 'http://localhost:3000/chefs-pole';  // Assurez-vous que c'est la bonne URL de votre serveur JSON

  constructor(private http: HttpClient) {}

  getAllChefsPol(): Observable<ChefPol[]> {
    return this.http.get<ChefPol[]>(this.apiURL);
  }

  searchChefsPoleByName(name: string): Observable<ChefPol[]> {
    return this.http.get<ChefPol[]>(`${this.apiURL}?nom=${name}`);
  }

  save(chefPol: ChefPol): Observable<ChefPol> {
    return this.http.post<ChefPol>(this.apiURL, chefPol);
  }

  update(chefPol: ChefPol): Observable<ChefPol> {
    return this.http.put<ChefPol>(`${this.apiURL}/${chefPol.id}`, chefPol);
  }

  getChefPoleById(id: number): Observable<ChefPol> {
    return this.http.get<ChefPol>(`${this.apiURL}/${id}`);
  }

  deleteChefPole(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiURL}/${id}`);
  }
}
