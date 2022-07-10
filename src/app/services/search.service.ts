import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const searchUrl = 'https://cloud.iexapis.com/stable/ref-data/symbols';
const priceUrl =
  'https://cloud.iexapis.com/stable//stock/{symbol}/intraday-prices';
const apiKey = '?token=pk_230972a6fa6c4837af4ecf8ad75b3f61';

@Injectable({
  providedIn: 'root',
})
export class SearchService {
  constructor(private http: HttpClient) {}

  getStockList(): Observable<any> {
    return this.http.get(searchUrl + apiKey);
  }

  getIntradayPrices(stock: string): Observable<any> {
    return this.http.get(priceUrl.replace('{symbol}', stock) + apiKey);
  }
}
