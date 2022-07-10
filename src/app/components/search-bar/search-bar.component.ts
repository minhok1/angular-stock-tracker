import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { SearchService } from 'src/app/services/search.service';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css'],
})
export class SearchBarComponent implements OnInit {
  options: any[] = ['option 1', 'option 2', 'option 3'];
  searchText: string = '';
  filteredOptions: any[] = [];
  symbols: any[] = [
    {
      symbol: 'A',
      exchange: 'XNYS',
      exchangeSuffix: '',
      exchangeName: 'New York Stock Exchange Inc',
      exchangeSegment: 'XNYS',
      exchangeSegmentName: 'New York Stock Exchange Inc',
      name: 'Agilent Technologies Inc.',
      date: '2022-07-10',
      type: 'cs',
      iexId: 'IEX_46574843354B2D52',
      region: 'US',
      currency: 'USD',
      isEnabled: true,
      figi: 'BBG000C2V3D6',
      cik: '0001090872',
      lei: 'QUIX8Y7A2WP0XRMW7G29',
    },
    {
      symbol: 'AA',
      exchange: 'XNYS',
      exchangeSuffix: '',
      exchangeName: 'New York Stock Exchange Inc',
      exchangeSegment: 'XNYS',
      exchangeSegmentName: 'New York Stock Exchange Inc',
      name: 'Alcoa Corp',
      date: '2022-07-10',
      type: 'cs',
      iexId: 'IEX_4238333734532D52',
      region: 'US',
      currency: 'USD',
      isEnabled: true,
      figi: 'BBG00B3T3HD3',
      cik: '0001675149',
      lei: '549300T12EZ1F6PWWU29',
    },
    {
      symbol: 'AA+',
      exchange: 'XNYS',
      exchangeSuffix: '',
      exchangeName: 'New York Stock Exchange Inc',
      exchangeSegment: 'XNYS',
      exchangeSegmentName: 'New York Stock Exchange Inc',
      name: 'Accelerate Acquisition Corp - Warrants (15/03/2028)',
      date: '2022-06-13',
      type: 'wt',
      iexId: null,
      region: 'US',
      currency: 'USD',
      isEnabled: true,
      figi: 'BBG00ZKDZ510',
      cik: '0001838883',
      lei: null,
    },
    {
      symbol: 'AA-A',
      exchange: 'XNYS',
      exchangeSuffix: '',
      exchangeName: 'New York Stock Exchange Inc',
      exchangeSegment: 'XNYS',
      exchangeSegmentName: 'New York Stock Exchange Inc',
      name: 'Apollo Asset Management Inc - 6.375% PRF PERPETUAL USD 25 - Ser A',
      date: '2022-06-13',
      type: 'ps',
      iexId: null,
      region: 'US',
      currency: 'USD',
      isEnabled: true,
      figi: 'BBG00G3T8TP8',
      cik: '0001411494',
      lei: '54930054P2G7ZJB0KM79',
    },
    {
      symbol: 'AA-C',
      exchange: 'XNYS',
      exchangeSuffix: '',
      exchangeName: 'New York Stock Exchange Inc',
      exchangeSegment: 'XNYS',
      exchangeSegmentName: 'New York Stock Exchange Inc',
      name: 'Arlington Asset Investment Corp - FXDFR PRF PERPETUAL USD 25 - Ser C',
      date: '2022-06-13',
      type: 'ps',
      iexId: null,
      region: 'US',
      currency: 'USD',
      isEnabled: true,
      figi: 'BBG00NJBVG40',
      cik: '0001209028',
      lei: '549300LA9ZT7L8G7IT53',
    },
    {
      symbol: 'AAA',
      exchange: 'ARCX',
      exchangeSuffix: '',
      exchangeName: 'Nyse Arca',
      exchangeSegment: 'ARCX',
      exchangeSegmentName: 'Nyse Arca',
      name: 'Listed Funds Trust - AAF First Priority CLO Bond ETF',
      date: '2022-07-10',
      type: 'et',
      iexId: 'IEX_5030314338392D52',
      region: 'US',
      currency: 'USD',
      isEnabled: true,
      figi: 'BBG00X5FSP48',
      cik: '0001683471',
      lei: null,
    },
    {
      symbol: 'AAAU',
      exchange: 'BATS',
      exchangeSuffix: '',
      exchangeName: 'Cboe Bzx U S Equities Exchange',
      exchangeSegment: 'BATS',
      exchangeSegmentName: 'Cboe Bzx U S Equities Exchange',
      name: 'Goldman Sachs Physical Gold ETF Trust - Goldman Sachs Physical Gold ETF',
      date: '2022-07-10',
      type: 'et',
      iexId: 'IEX_474B433136332D52',
      region: 'US',
      currency: 'USD',
      isEnabled: true,
      figi: 'BBG00LPXX872',
      cik: '0001708646',
      lei: null,
    },
    {
      symbol: 'AAC',
      exchange: 'XNYS',
      exchangeSuffix: '',
      exchangeName: 'New York Stock Exchange Inc',
      exchangeSegment: 'XNYS',
      exchangeSegmentName: 'New York Stock Exchange Inc',
      name: 'Ares Acquisition Corporation - Class A',
      date: '2022-07-10',
      type: 'cs',
      iexId: null,
      region: 'US',
      currency: 'USD',
      isEnabled: true,
      figi: 'BBG00YZC2Z91',
      cik: '0001829432',
      lei: null,
    },
  ];
  myControl = new FormControl('');

  constructor(private searchService: SearchService) {}

  ngOnInit(): void {
    // this.searchService
    //   .getStockList()
    //   .subscribe((stocks: any[]) => (this.symbols = stocks));
  }

  onSearchTextChange() {
    this.filteredOptions = this.symbols.filter((stock) => {
      return stock.symbol.includes(this.searchText);
    });
  }
}
