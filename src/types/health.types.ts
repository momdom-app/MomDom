import type { ID, ISODateString, ISODateTimeString } from './core.types';

export type AllergySeverity = 'mild' | 'moderate' | 'severe';

export interface Provider {
  id: ID;
  familyId: ID;
  childId?: ID;
  name: string;
  specialty?: string;
  phone?: string;
  email?: string;
  address?: string;
  notes?: string;
  createdAt: ISODateTimeString;
  updatedAt: ISODateTimeString;
}

export interface ProviderVisit {
  id: ID;
  familyId: ID;
  childId?: ID;
  providerId: ID;
  visitDate: ISODateString;
  reason?: string;
  notes?: string;
  followUpDate?: ISODateString;
  createdAt: ISODateTimeString;
  updatedAt: ISODateTimeString;
}

export interface HealthRecord {
  id: ID;
  familyId: ID;
  childId: ID;
  recordType: string;
  title: string;
  recordDate?: ISODateString;
  notes?: string;
  documentId?: ID;
  createdAt: ISODateTimeString;
  updatedAt: ISODateTimeString;
}

export interface Medication {
  id: ID;
  familyId: ID;
  childId: ID;
  name: string;
  dosage?: string;
  frequency?: string;
  instructions?: string;
  prescribingProviderId?: ID;
  active: boolean;
  createdAt: ISODateTimeString;
  updatedAt: ISODateTimeString;
}

export interface MedicationAdministrationLog {
  id: ID;
  medicationId: ID;
  administeredAt: ISODateTimeString;
  amount?: string;
  administeredBy?: string;
  notes?: string;
  createdAt: ISODateTimeString;
  updatedAt: ISODateTimeString;
}

export interface Allergy {
  id: ID;
  familyId: ID;
  childId: ID;
  allergen: string;
  reaction?: string;
  severity?: AllergySeverity;
  notes?: string;
  createdAt: ISODateTimeString;
  updatedAt: ISODateTimeString;
}
