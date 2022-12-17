import { Inject, Injectable } from '@angular/core';
import { RouteConfig } from '../AppConfig/routeConfig';
import { RouteConfigToken } from '../AppConfig/routeConfig.service';

@Injectable({
  providedIn: 'any'
})
export class ConfigService {

  constructor(@Inject(RouteConfigToken) private configService : RouteConfig) {
    console.log("ConfigService created");
    console.log(configService);
    
   }
}
