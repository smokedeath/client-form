import { Selectors } from './selectors';

export interface Address {
    addressIndex: string;
    country: Selectors;
    region: string;
    city: Selectors;
    streetName: string;
    building: string;
}
