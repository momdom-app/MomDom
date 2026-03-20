import type { ID, ISODateString, ISODateTimeString } from './core.types';

export type DocumentPermissionLevel = 'view' | 'edit' | 'owner';

export interface DocumentCategory {
  id: ID;
  familyId: ID;
  name: string;
  description?: string;
  createdAt: ISODateTimeString;
  updatedAt: ISODateTimeString;
}

export interface DocumentStorageLocation {
  id: ID;
  familyId: ID;
  name: string;
  description?: string;
  createdAt: ISODateTimeString;
  updatedAt: ISODateTimeString;
}

export interface DocumentPermission {
  id: ID;
  documentId: ID;
  userId: ID;
  permissionLevel: DocumentPermissionLevel;
  createdAt: ISODateTimeString;
  updatedAt: ISODateTimeString;
}

export interface Document {
  id: ID;
  familyId: ID;
  childId?: ID;
  categoryId?: ID;
  storageLocationId?: ID;
  title: string;
  fileUrl?: string;
  fileType?: string;
  issueDate?: ISODateString;
  expirationDate?: ISODateString;
  notes?: string;
  uploadedAt: ISODateTimeString;
  updatedAt: ISODateTimeString;
}
