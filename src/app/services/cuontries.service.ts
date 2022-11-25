import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CountryModel } from '../models/country.model';

@Injectable({
  providedIn: 'root',
})
export class CuontriesService {
  constructor(private readonly http: HttpClient) {}

  ENDPOINT$ =
    'https://world-s-cup-favorite-back-henna.vercel.app/api/v1/countries';

  getCoutries(): Observable<CountryModel[]> {
    return this.http.get<CountryModel[]>(this.ENDPOINT$);
  }
}
