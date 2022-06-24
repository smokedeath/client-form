import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})

export class StorageProvider {
    public get(key: string): any {
        const item: string = localStorage.getItem(key);

        return item ? JSON.parse(item) : null;
    }

    public set(key: string, obj: any): void {
        localStorage.setItem(key, JSON.stringify(obj));
    }

    public delete(key: string): void {
        localStorage.removeItem(key);
    }

    public clear(): void {
        localStorage.clear();
    }
}
