import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'countries-by-capital-page',
  templateUrl: './by-capital-page.component.html',
  styles: [
  ]
})
export class ByCapitalPageComponent {

  @Output()
  public onSearch: EventEmitter<string> = new EventEmitter();

  searchByCapital(term: string) {
    console.log('From capital component');
    console.log(term);
    // this.onSearch.emit(term);
  }

}
