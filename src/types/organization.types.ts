import type { ID, ISODateTimeString } from './core.types';

export interface StorageLocation {
  id: ID;
  familyId: ID;
  name: string;
  description?: string;
  createdAt: ISODateTimeString;
  updatedAt: ISODateTimeString;
}

export interface StorageBin {
  id: ID;
  familyId: ID;
  locationId: ID;
  name: string;
  label?: string;
  description?: string;
  createdAt: ISODateTimeString;
  updatedAt: ISODateTimeString;
}

export interface StorageItem {
  id: ID;
  familyId: ID;
  binId: ID;
  name: string;
  quantity?: number;
  notes?: string;
  createdAt: ISODateTimeString;
  updatedAt: ISODateTimeString;
}
