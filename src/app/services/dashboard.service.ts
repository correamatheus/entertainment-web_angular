import { HttpClient } from '@angular/common/http';
import { ResourceLoader } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { info } from '../models/info';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {
  private baseURL: string;
  constructor(private httpClient: HttpClient) {
    this.baseURL = environment.baseURL;
  }

  getTrending(): Observable<info[]> {
    return this.httpClient.get<info[]>(`${this.baseURL}`).pipe(
      map((result) => result.filter((result) => result.isTrending === true))
    );
  }

  getRecommended(): Observable<info[]> {
    return this.httpClient.get<info[]>(`${this.baseURL}`).pipe(
      map((result)=> result.filter((result) => result.isTrending === false))
    )
  }

  getSearched(movieAndSerieSearched: string): Observable<info[]> {
    return this.httpClient.get<info[]>(`${this.baseURL}`).pipe(
      map((result) => result.filter((filtered) => filtered.title.toLowerCase().includes(movieAndSerieSearched.toLowerCase())))
    )
  }

  changeBookmark(itensAtualizados: info[]){
    return this.httpClient.put<info[]>(`${this.baseURL}`, itensAtualizados)
  }
}
