import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Formateur} from "../models/formateur.model";

@Injectable({
  providedIn: 'root'
})
export class FormateurService {

  private apiURL = 'http://localhost:3000/formateurs';  // Assurez-vous que c'est la bonne URL de votre serveur JSON

  constructor(private http: HttpClient) {}
  getAllFormateurs(): Observable<Formateur[]> {
    return this.http.get<Formateur[]>(this.apiURL);
  }

  searchFormateursByName(name: string): Observable<Formateur[]> {
    return this.http.get<Formateur[]>(`${this.apiURL}?nom=${name}`); // Utilisez le paramètre `nom_like` pour rechercher par nom
  }

  save(formateur: Formateur): Observable<Formateur> {
    return this.http.post<Formateur>(this.apiURL, formateur);
  }
  update(formateur: Formateur): Observable<Formateur> {
    return this.http.put<Formateur>(`${this.apiURL}/${formateur.id}`, formateur);
  }

  getFormateurById(id: number): Observable<Formateur> {
    return this.http.get<Formateur>(`${this.apiURL}/${id}`);
  }
  deleteFormateur(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiURL}/${id}`);
  }


}
