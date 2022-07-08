import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatAutocompleteModule } from '@angular/material/autocomplete';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css'],
})
export class SearchBarComponent implements OnInit {
  options: any[] = ['option 1', 'option 2', 'option 3'];
  myControl = new FormControl('');

  constructor() {}

  ngOnInit(): void {}
}
