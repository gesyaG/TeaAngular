import { Injectable } from '@angular/core';
import {CatalogType} from "../types/catalog.type";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {DataType} from "../types/data.type";

@Injectable({
  providedIn: 'root'
})
export class CardService {
  private catalog: CatalogType[] = [];

  constructor(private http: HttpClient) {}

  getCards(): Observable<CatalogType[]> {
    return this.http.get<CatalogType[]>('https://testologia.ru/tea');
  }

  getCard(id: number): Observable<CatalogType> {
    return this.http.get<CatalogType>(`https://testologia.ru/tea?id=${id}`);
  }

  createOrder (data: DataType) {
    return this.http.post<{ success: number, message?: string }>(`https://testologia.ru/order-tea`, data);
  }
}
