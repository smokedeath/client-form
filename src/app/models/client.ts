import { Selectors } from './selectors';

export interface Client {
    firstName: string;
    lastName: string;
    secondName: string;
    birthDay: Date;
    phone: number;
    sex: Selectors,
    clientsGroup: Selectors[];
    coordinator: Selectors;
    dontSentSms: boolean;
}
