import { InjectionToken } from "@angular/core";
import { environment } from "src/environment/environment";
import { IAppconfig } from "./appconfig.interface";

export const APP_SERVICE_CONFIG = new InjectionToken<IAppconfig>('app.config');

export const APP_CONFIG : IAppconfig = {
    apiEndpoint: environment.apiEndpoint
};