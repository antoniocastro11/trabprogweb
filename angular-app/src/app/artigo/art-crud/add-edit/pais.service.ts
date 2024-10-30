import { Injectable } from '@angular/core';
import axios, { AxiosInstance } from 'axios';

@Injectable({
  providedIn: 'root'
})
export class PaisService {

  private axios: AxiosInstance
  constructor() {
    this.axios = axios.create({
      baseURL: 'https://restcountries.com/v3.1'
    })
  }

  async getPaises() {
    return (await this.axios.get(`/all?fields=name,flags`)).data;

  }
}
