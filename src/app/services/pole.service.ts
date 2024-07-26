import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Pole} from "../models/Pole.model";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class PoleService {
  private apiURL = 'http://localhost:3000/poles';  // Assurez-vous que c'est la bonne URL de votre serveur JSON

constructor(private http: HttpClient) {}

save(pole: Pole): Observable<Pole> {
  return this.http.post<Pole>(this.apiURL, pole);
}

update(pole: Pole): Observable<Pole> {
  return this.http.put<Pole>(`${this.apiURL}/${pole.id}`, pole);
}

getById(id: number): Observable<Pole> {
  return this.http.get<Pole>(`${this.apiURL}/${id}`);
}
  getPoles(): Observable<Pole[]> {
    return this.http.get<Pole[]>(this.apiURL);
  }
}
