export type ID = string;
export type ISODateString = string;
export type ISODateTimeString = string;

export type UserRole = 'mom' | 'partner' | 'caregiver' | 'admin';
export type FamilyMemberType = 'adult' | 'child' | 'dependent' | 'other';

export interface Family {
  id: ID;
  name: string;
  createdAt: ISODateTimeString;
  updatedAt: ISODateTimeString;
}

export interface User {
  id: ID;
  familyId: ID;
  firstName: string;
  lastName?: string;
  email: string;
  role: UserRole;
  isPrimaryAccountHolder: boolean;
  createdAt: ISODateTimeString;
  updatedAt: ISODateTimeString;
}

export interface FamilyMember {
  id: ID;
  familyId: ID;
  firstName: string;
  lastName?: string;
  displayName?: string;
  memberType: FamilyMemberType;
  birthdate?: ISODateString;
  notes?: string;
  createdAt: ISODateTimeString;
  updatedAt: ISODateTimeString;
}

export interface Child {
  id: ID;
  familyId: ID;
  familyMemberId?: ID;
  firstName: string;
  lastName?: string;
  birthdate?: ISODateString;
  notes?: string;
  createdAt: ISODateTimeString;
  updatedAt: ISODateTimeString;
}
