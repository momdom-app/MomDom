import type { ID, ISODateString, ISODateTimeString } from './core.types';

export interface CalendarEvent {
  id: ID;
  familyId: ID;
  childId?: ID;
  title: string;
  description?: string;
  startAt: ISODateTimeString;
  endAt?: ISODateTimeString;
  location?: string;
  eventType?: string;
  createdAt: ISODateTimeString;
  updatedAt: ISODateTimeString;
}

export interface TaskCategory {
  id: ID;
  familyId: ID;
  name: string;
  description?: string;
  createdAt: ISODateTimeString;
  updatedAt: ISODateTimeString;
}

export interface Task {
  id: ID;
  familyId: ID;
  childId?: ID;
  categoryId?: ID;
  title: string;
  description?: string;
  dueDate?: ISODateString;
  completed: boolean;
  completedAt?: ISODateTimeString;
  createdAt: ISODateTimeString;
  updatedAt: ISODateTimeString;
}

export interface Reminder {
  id: ID;
  familyId: ID;
  taskId?: ID;
  eventId?: ID;
  title: string;
  remindAt: ISODateTimeString;
  delivered: boolean;
  createdAt: ISODateTimeString;
  updatedAt: ISODateTimeString;
}

export interface NotificationPreferences {
  id: ID;
  userId: ID;
  remindersEnabled: boolean;
  emailEnabled: boolean;
  pushEnabled: boolean;
  dailySummaryEnabled?: boolean;
  updatedAt: ISODateTimeString;
}
