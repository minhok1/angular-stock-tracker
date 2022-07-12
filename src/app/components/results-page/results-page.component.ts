import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-results-page',
  templateUrl: './results-page.component.html',
  styleUrls: ['./results-page.component.css'],
})
export class ResultsPageComponent implements OnInit {
  symbol: string | null = '';

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.symbol = this.route.snapshot.paramMap.get('symbol');
  }
}
