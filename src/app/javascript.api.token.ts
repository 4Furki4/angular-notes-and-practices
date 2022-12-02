import { InjectionToken } from "@angular/core";

export const localstorage = new InjectionToken<any>('localstorage', {
    providedIn:'root',
    factory() {
        return localStorage;
    },
});

export const sessionstorage = new InjectionToken<any>('sessionStorage',{
    providedIn:'root',
    factory() {
        return sessionStorage;
    },
});