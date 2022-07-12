import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { filter, map, Observable, tap } from 'rxjs';
import { SearchService } from 'src/app/services/search.service';

@Component({
  selector: 'app-results-page',
  templateUrl: './results-page.component.html',
  styleUrls: ['./results-page.component.css'],
})
export class ResultsPageComponent implements OnInit {
  symbol: string | null = '';
  prices: any = [];
  labels: any[] = [];

  constructor(
    private route: ActivatedRoute,
    private searchService: SearchService
  ) {}

  ngOnInit(): void {
    this.symbol = this.route.snapshot.paramMap.get('symbol');
    this.searchService
      .getIntradayPrices(this.symbol!)
      .subscribe((intradayPrices) => {
        const filteredPrices = intradayPrices.filter(
          (priceInfo: any) => priceInfo.close !== null
        );
        // this.prices = filteredPrices.map((priceInfo: any) => priceInfo.close);
        this.prices = {
          datasets: [
            {
              data: filteredPrices.map((priceInfo: any) => priceInfo.close),
              label: 'Series A',
              backgroundColor: 'rgba(148,159,177,0.2)',
              borderColor: 'rgba(148,159,177,1)',
              pointBackgroundColor: 'rgba(148,159,177,1)',
              pointBorderColor: '#fff',
              pointHoverBackgroundColor: '#fff',
              pointHoverBorderColor: 'rgba(148,159,177,0.8)',
              fill: 'origin',
            },
          ],
          labels: filteredPrices.map((priceInfo: any) => priceInfo.label),
        };
        this.labels = filteredPrices.map((priceInfo: any) => priceInfo.label);
      });
  }
}
