import { Component, ElementRef, Input, ViewChild } from '@angular/core';

@Component({
  selector: 'shared-search-box',
  templateUrl: './search-box.component.html',
  styles: [
  ]
})
export class SearchBoxComponent {

  @ViewChild('txtInput')
  public txtInput!: ElementRef<HTMLInputElement>

  @Input()
  placeholder!: string;

}
