import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AlunosService {



  constructor(private httpClient: HttpClient) {
  }
  getAlunos(): Observable<any[]> {

    return this.httpClient.get<any[]>('http://localhost:3000/');
  }
}
