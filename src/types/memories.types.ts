import type { ID, ISODateString, ISODateTimeString } from './core.types';

export interface Memory {
  id: ID;
  familyId: ID;
  childId?: ID;
  title: string;
  description?: string;
  memoryDate?: ISODateString;
  createdAt: ISODateTimeString;
  updatedAt: ISODateTimeString;
}

export interface MemoryPhoto {
  id: ID;
  memoryId: ID;
  fileUrl: string;
  caption?: string;
  createdAt: ISODateTimeString;
  updatedAt: ISODateTimeString;
}
