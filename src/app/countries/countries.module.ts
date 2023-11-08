import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CountriesRoutingModule } from './countries-routing.module';

import { ByCapitalPageComponent } from './compontents/by-capital-page/by-capital-page.component';
import { ByCountryPageComponent } from './compontents/by-country-page/by-country-page.component';
import { ByRegionPageComponent } from './compontents/by-region-page/by-region-page.component';
import { CountryPageComponent } from './compontents/country-page/country-page.component';
import { SearchBoxComponent } from '../shared/components/search-box/search-box.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    ByCapitalPageComponent,
    ByCountryPageComponent,
    ByRegionPageComponent,
    CountryPageComponent
  ],
  imports: [
    CommonModule,
    CountriesRoutingModule,
    SharedModule
  ],
  exports: [
  ]
})
export class CountriesModule { }
