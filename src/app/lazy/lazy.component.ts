import { Component, Inject } from '@angular/core';
import { RouteConfig } from '../AppConfig/routeConfig';
import { RouteConfigToken } from '../AppConfig/routeConfig.service';

@Component({
  selector: 'hinv-lazy',
  templateUrl: './lazy.component.html',
  styleUrls: ['./lazy.component.scss']
})
export class LazyComponent {
  constructor(@Inject(RouteConfigToken) private routeConfig : RouteConfig){
    console.log(this.routeConfig);
    
  }

}
