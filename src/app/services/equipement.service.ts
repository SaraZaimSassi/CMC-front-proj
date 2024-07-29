import { Injectable } from '@angular/core';
import {Equipement} from "../models/Equipement.model";
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class EquipementService {
  private apiURL = 'http://localhost:3000/equipements'; // URL de l'API

  constructor(private http: HttpClient) {}

  getAllEquipements(): Observable<Equipement[]> {
    return this.http.get<Equipement[]>(this.apiURL);
  }

  getEquipementById(id: number): Observable<Equipement> {
    return this.http.get<Equipement>(`${this.apiURL}/${id}`);
  }

  updateEquipement(equipement: Equipement): Observable<void> {
    return this.http.put<void>(`${this.apiURL}/${equipement.id}`, equipement);
  }

  searchEquipementsByName(name: string): Observable<Equipement[]> {
    return this.http.get<Equipement[]>(`${this.apiURL}?name_like=${name}`);
  }

  addEquipement(equipement: FormData): Observable<Equipement> {
    return this.http.post<Equipement>(this.apiURL, equipement);
  }




  deleteEquipement(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiURL}/${id}`);
  }
}
