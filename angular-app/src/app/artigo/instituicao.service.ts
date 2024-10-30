import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Instituicao } from './instituicao.model';

@Injectable({
  providedIn: 'root'
})
export class InstituicaoService {

  private baseURL = 'http://localhost:3000';
  private endpoint = 'instituicao';

  constructor(private httpClient: HttpClient) { }

  listAll(): Observable<Instituicao[]> {
    return this.httpClient.get<Instituicao[]>(`${this.baseURL}/${this.endpoint}`);
  }

  getById(id: number) {
    return this.httpClient.get<Instituicao>(`${this.baseURL}/${this.endpoint}/${id}`);
  }
  activate(id: number) {
    return this.httpClient.patch<void>(`${this.baseURL}/${this.endpoint}/activate/${id}`, {});
  }
  deactivate(id: number) {
    return this.httpClient.patch<void>(`${this.baseURL}/${this.endpoint}/deactivate/${id}`, {})
  }
  update(id: number, data: Partial<Instituicao>) {
    return this.httpClient.patch<void>(`${this.baseURL}/${this.endpoint}/${id}`, data);
  }
  create(data: Instituicao) {
    return this.httpClient.post<void>(`${this.baseURL}/${this.endpoint}`, data);
  }

}
