import { Injectable } from '@angular/core';
import axios, { AxiosInstance } from 'axios';

@Injectable({
  providedIn: 'root'
})
export class CEPService {
  private axios: AxiosInstance
  constructor() {
    this.axios = axios.create({
      baseURL: 'https://viacep.com.br/ws'
    })
   }

   async getCep(cep: string){
    return (await this.axios.get(`/${cep}/json/`)).data;
  
   }

}