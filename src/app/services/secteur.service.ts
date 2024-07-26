import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Secteur} from "../models/Secteur.model";
import { Observable } from "rxjs";
import {ChefPol} from "../models/chef-pol.model";


@Injectable({
  providedIn: 'root'
})
export class SecteurService {
  private apiURL = 'http://localhost:3000/secteurs';


  constructor(private http: HttpClient) {}

  save(secteur: Secteur): Observable<Secteur> {
    return this.http.post<Secteur>(this.apiURL, secteur);
  }
  update(secteur: Secteur): Observable<Secteur> {
    return this.http.put<Secteur>(`${this.apiURL}/${secteur.id}`, secteur);
  }
  getById(id: number): Observable<Secteur> {
    return this.http.get<Secteur>(`${this.apiURL}/${id}`);
  }

  getAll(): Observable<Secteur[]> {
    return this.http.get<Secteur[]>(this.apiURL);
  }
  getSecteurs(): Observable<Secteur[]> {
    return this.http.get<Secteur[]>(this.apiURL);
  }

}
