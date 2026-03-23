# 🧠🎈 MomDom - System Overview (MVP 1)

## Purpose
Provides a high-level understanding of how MomDom MVP 1 is structured, how data flows, and how the system components interact.

---

## System Summary

MomDom is a family management platform designed to reduce mental load by centralizing daily life tracking, planning, and execution.

The system is built around three core layers:
- Core family structure
- Daily capture (logging system)
- Supporting systems (health, meals, tasks, events)

---

## Core Structure

At the center of the system is the **family**.

Each family contains:
- Users (authenticated access)
- Family members (all individuals)
- Child profiles (child-specific data)

This structure ensures all data is scoped correctly and supports multi-user households.

---

## Daily Capture Layer

The system revolves around **daily_entries** and **entry_items**.

- A **daily_entry** represents a single day.
- **entry_items** represent individual logs (meals, notes, events, etc.).

This allows flexible, low-friction input while building structured data over time.

---

## Supporting Systems

Additional systems plug into daily capture and child profiles:

### Health
- health_records
- allergies
- child_growth_logs

### Meals
- meals (library)
- meal_entries (logged meals)

### Tasks
- household task tracking

### Scheduling
- household_events

---

## Data Relationships

- All data is scoped to a **family**
- Child-specific data connects through **child_profiles**
- Daily logs connect through **daily_entries → entry_items**
- Structured systems (meals, health, tasks) connect into daily capture

---

## MVP Design Principles

- Keep input simple and flexible
- Build structured data over time
- Avoid over-complexity
- Enable future intelligence (pattern recognition, automation)

---

## Future Expansion (Post-MVP)

- Smart recommendations based on patterns
- Automated reminders and insights
- Deeper health and meal tracking
- AI-assisted daily planning

---

## Summary

MomDom MVP 1 is designed as a flexible but structured system that captures daily life while building a long-term data foundation.

This approach allows the system to evolve into a powerful assistant that reduces mental load over time.
