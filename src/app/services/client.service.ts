import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Selectors } from '../models/selectors';

@Injectable({
    providedIn: 'root'
})

export class ClientService {
    
    public getClientsGroup(): Observable<Selectors[]> {
        return of([
            {id: '1', value: 'VIP клиенты'},
            {id: '2', value: 'Постоянные клиенты'},
            {id: '3', value: 'Новые клиенты'}
        ]);
    }
    
    public getCoordinators(): Observable<Selectors[]> {
        return of([
            {id: '1', value: 'Иванов'},
            {id: '2', value: 'Захаров'},
            {id: '3', value: 'Чернышева'}
        ]);
    }
    
    public getSex(): Observable<Selectors[]> {
        return of([
            {id: '0', value: 'не выбран'},
            {id: '1', value: 'Мужской'},
            {id: '2', value: 'Женский'}
        ]);
    }
}
