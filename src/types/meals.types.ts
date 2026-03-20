import type { ID, ISODateString, ISODateTimeString } from './core.types';

export interface Meal {
  id: ID;
  familyId: ID;
  name: string;
  description?: string;
  notes?: string;
  createdAt: ISODateTimeString;
  updatedAt: ISODateTimeString;
}

export interface MealIngredient {
  id: ID;
  mealId: ID;
  name: string;
  quantity?: number;
  unit?: string;
  notes?: string;
  createdAt: ISODateTimeString;
  updatedAt: ISODateTimeString;
}

export interface MealHistory {
  id: ID;
  familyId: ID;
  mealId: ID;
  servedOn: ISODateString;
  notes?: string;
  createdAt: ISODateTimeString;
  updatedAt: ISODateTimeString;
}
