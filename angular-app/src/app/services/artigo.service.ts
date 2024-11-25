import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Artigo } from '../models/artigo.model';

@Injectable({
  providedIn: 'root'
})
export class ArtigoService {

  private baseURL = 'http://localhost:3001';
  private endpoint = 'Artigo';

  constructor(private httpClient: HttpClient) { }

  listAll(): Observable<Artigo[]> {
    return this.httpClient.get<Artigo[]>(`${this.baseURL}/${this.endpoint}`);
  }

  getById(id: number) {
    return this.httpClient.get<Artigo>(`${this.baseURL}/${this.endpoint}/${id}`);
  }
  activate(id: number) {
    return this.httpClient.patch<void>(`${this.baseURL}/${this.endpoint}/activate/${id}`, {});
  }
  deactivate(id: number) {
    return this.httpClient.patch<void>(`${this.baseURL}/${this.endpoint}/deactivate/${id}`, {})
  }
  update(id: number, data: Partial<Artigo>) {
    return this.httpClient.patch<void>(`${this.baseURL}/${this.endpoint}/${id}`, data);
  }
  create(data: Artigo) {
    return this.httpClient.post<void>(`${this.baseURL}/${this.endpoint}`, data);
  }

}
