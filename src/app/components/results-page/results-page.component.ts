import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { filter, map, Observable, tap, timer } from 'rxjs';
import { SearchService } from 'src/app/services/search.service';

@Component({
  selector: 'app-results-page',
  templateUrl: './results-page.component.html',
  styleUrls: ['./results-page.component.css'],
})
export class ResultsPageComponent implements OnInit, OnDestroy {
  symbol: string | null = '';
  prices: any = [];
  timer$ = timer(60000, 60000);

  constructor(
    private route: ActivatedRoute,
    private searchService: SearchService
  ) {}

  convertPrices(): void {
    this.searchService
      .getIntradayPrices(this.symbol!)
      .subscribe((intradayPrices) => {
        const filteredPrices = intradayPrices.filter(
          (priceInfo: any) => priceInfo.close !== null
        );
        this.prices = {
          datasets: [
            {
              data: filteredPrices.map((priceInfo: any) => priceInfo.close),
              label: 'Intraday stock price',
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
      });
  }

  ngOnInit(): void {
    this.symbol = this.route.snapshot.paramMap.get('symbol');
    this.convertPrices();
  }

  timerSubscribe = this.timer$.subscribe((val) => {
    console.log(val);
    this.convertPrices();
  });

  ngOnDestroy(): void {
    this.timerSubscribe.unsubscribe();
  }
}
