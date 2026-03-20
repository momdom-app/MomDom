import type { ID, ISODateString, ISODateTimeString } from './core.types';

export interface Pantry {
  id: ID;
  familyId: ID;
  name: string;
  description?: string;
  createdAt: ISODateTimeString;
  updatedAt: ISODateTimeString;
}

export interface ReferenceItem {
  id: ID;
  familyId: ID;
  name: string;
  itemType?: string;
  defaultUnit?: string;
  notes?: string;
  createdAt: ISODateTimeString;
  updatedAt: ISODateTimeString;
}

export interface InventoryItem {
  id: ID;
  familyId: ID;
  pantryId?: ID;
  referenceItemId?: ID;
  name: string;
  quantity?: number;
  unit?: string;
  location?: string;
  lowStockThreshold?: number;
  notes?: string;
  createdAt: ISODateTimeString;
  updatedAt: ISODateTimeString;
}

export interface InventoryPurchase {
  id: ID;
  familyId: ID;
  inventoryItemId?: ID;
  itemName: string;
  quantity?: number;
  unit?: string;
  purchaseDate: ISODateString;
  storeName?: string;
  price?: number;
  receiptId?: ID;
  createdAt: ISODateTimeString;
  updatedAt: ISODateTimeString;
}

export interface Receipt {
  id: ID;
  familyId: ID;
  purchaseDate?: ISODateString;
  vendor?: string;
  totalAmount?: number;
  fileUrl?: string;
  notes?: string;
  uploadedAt: ISODateTimeString;
  updatedAt: ISODateTimeString;
}
