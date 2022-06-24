import { Selectors } from './selectors';

export interface Identity {
    documentType: Selectors;
    serial: string;
    documentNumber: string;
    whoIssued: string;
    issuedDate: Date;
    file: File;
}
