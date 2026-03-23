# 🧠🎈 MomDom - Core System Objects (MVP 1)

## Purpose
This document defines the core data objects for MomDom MVP 1.  
It establishes a clear, engineering-aligned structure for how data is stored, related, and used across the system.

This document is the source of truth for backend development and API design.

---

## Core Platform

### Object: Family

Purpose:  
Represents a single family unit within the system.

Key Fields:
- family_id
- name

Relationships:
- Has many users
- Has many family_members
- Has many children

Impact:
Top-level container for all data within MomDom.

---

### Object: User

Purpose:  
Represents an authenticated user of the system.

Key Fields:
- user_id
- family_id
- email

Relationships:
- Belongs to family

Impact:
Handles authentication and system access.

---

### Object: Family Member

Purpose:  
Represents all individuals within a family (parents and children).

Key Fields:
- member_id
- family_id
- name
- role

Relationships:
- Belongs to family
- Can be linked to child_profiles

Impact:
Unified representation of all people in the household.

---

### Object: Family Relationship

Purpose:  
Defines relationships between family members (parent, child, sibling).

Key Fields:
- relationship_id
- member_id
- related_member_id
- relationship_type

Relationships:
- Connects family_members to each other

Impact:
Allows flexible modeling of family structures.

---

### Object: Contact

Purpose:  
Stores external contacts relevant to the family.

Key Fields:
- contact_id
- family_id
- name
- type (teacher, doctor, caregiver, etc.)

Relationships:
- Belongs to family
- Can be linked to children

Impact:
Centralized access to important external people.

---

### Object: Child Profile

Purpose:  
Stores quick-reference information for each child.

Key Fields:
- child_id
- family_id
- name
- date_of_birth
- shirt_size
- pant_size
- shoe_size

Relationships:
- Belongs to family
- Links to health_records
- Links to allergies
- Links to child_growth_logs
- Referenced in entry_items

Impact:
Primary object for child-specific data and UI display.

---

### Object: Task

Purpose:  
Tracks household to-dos.

Key Fields:
- task_id
- family_id
- title
- status

Relationships:
- Belongs to family

Impact:
Provides lightweight task tracking for MVP.

---

## Daily Capture

### Object: Daily Entry

Purpose:  
Represents a single day’s log.

Key Fields:
- entry_id
- family_id
- date

Relationships:
- Belongs to family
- Has many entry_items

Impact:
Central container for daily tracking.

---

### Object: Entry Item

Purpose:  
Represents individual logged items within a day.

Key Fields:
- item_id
- entry_id
- type (meal, note, event, etc.)
- content

Relationships:
- Belongs to daily_entry
- Can reference child_profiles
- Can reference meals

Impact:
Flexible logging system for all daily inputs.

---

## Scheduling

### Object: Household Event

Purpose:  
Tracks simple events and appointments.

Key Fields:
- event_id
- family_id
- title
- date_time

Relationships:
- Belongs to family

Impact:
Provides lightweight scheduling for MVP.

---

## Health

### Object: Health Record

Purpose:  
Stores general health information for a child.

Key Fields:
- record_id
- child_id
- type
- notes

Relationships:
- Belongs to child_profile

Impact:
Central health tracking system.

---

### Object: Allergy

Purpose:  
Tracks allergy information for a child.

Key Fields:
- allergy_id
- child_id
- allergen
- reaction

Relationships:
- Belongs to child_profile

Impact:
Critical safety and health tracking.

---

### Object: Child Growth Log

Purpose:  
Tracks height and weight over time.

Key Fields:
- growth_id
- child_id
- height
- weight
- date

Relationships:
- Belongs to child_profile

Impact:
Historical growth tracking for children.

---

## Meals

### Object: Meal

Purpose:  
Represents a reusable meal.

Key Fields:
- meal_id
- name
- description

Relationships:
- Can be referenced by entry_items

Impact:
Builds a reusable meal library.

---

### Object: Meal Entry

Purpose:  
Represents a meal logged during a day.

Key Fields:
- meal_entry_id
- entry_id
- meal_id

Relationships:
- Belongs to daily_entry
- References meal

Impact:
Connects meals to daily tracking.

---
