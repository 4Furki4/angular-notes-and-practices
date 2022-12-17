import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LazyRoutingModule } from './lazy-routing.module';
import { LazyComponent } from './lazy.component';
import { RouteConfigToken } from '../AppConfig/routeConfig.service';


@NgModule({
  declarations: [LazyComponent],
  imports: [
    CommonModule,
    LazyRoutingModule
  ],
  providers: [
    {
      provide: RouteConfigToken,
      useValue: {title: 'Lazy'}
    }
  ]
})
export class LazyModule { }
