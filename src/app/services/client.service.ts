import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Selectors } from '../models/selectors';

@Injectable( {
    providedIn: 'root'
} )

export class ClientService {
    
    public getClientsGroup(): Observable<Selectors[]> {
        return of( [
            { id: '1', value: 'VIP клиенты' },
            { id: '2', value: 'Постоянные клиенты' },
            { id: '3', value: 'Новые клиенты' }
        ] );
    }
    
    public getCountries(): Observable<Selectors[]> {
        return of( [
            { id: '1', value: 'Казахстан' },
            { id: '2', value: 'Украина' },
            { id: '3', value: 'Польша' }
        ] );
    }
    
    public getCities( id: string ): Observable<Selectors[]> {
        switch (id) {
            case '1':
                return of( [
                    { id: '1', value: 'Астана' },
                    { id: '2', value: 'Алматы' },
                    { id: '3', value: 'Караганда' }
                ] );
            case '2':
                return of( [
                    { id: '1', value: 'Киев' },
                    { id: '2', value: 'Днепр' },
                    { id: '3', value: 'Львов' }
                ] );
            case '3':
                return of( [
                    { id: '1', value: 'Варшава' },
                    { id: '2', value: 'Гданьск' },
                    { id: '3', value: 'Вроцлав' }
                ] );
            default:
                return of( [
                    { id: '1', value: 'Астана' },
                    { id: '2', value: 'Киев' },
                    { id: '3', value: 'Варшава' }
                ] );
        }
    }
    
    public getCoordinators(): Observable<Selectors[]> {
        return of( [
            { id: '1', value: 'Иванов' },
            { id: '2', value: 'Захаров' },
            { id: '3', value: 'Чернышева' }
        ] );
    }
    
    public getSex(): Observable<Selectors[]> {
        return of( [
            { id: '0', value: 'не выбран' },
            { id: '1', value: 'Мужской' },
            { id: '2', value: 'Женский' }
        ] );
    }
}
