# 🧠🎈 MomDom - API Contract (MVP 1)

## Purpose
Defines the initial API surface for MomDom MVP 1.  
This contract outlines how the frontend interacts with backend services.

---

## Families

GET /families/{family_id}  
Retrieve family data

---

## Users

GET /users/{user_id}  
Retrieve user data

---

## Children

GET /children  
Retrieve all children for a family

POST /children  
Create a child profile

---

## Daily Entries

GET /daily-entries  
Retrieve daily entries

POST /daily-entries  
Create a new daily entry

---

## Entry Items

POST /entry-items  
Add item to a daily entry

---

## Meals

GET /meals  
Retrieve meal library

POST /meals  
Create a meal

---

## Meal Entries

POST /meal-entries  
Log a meal for a day

---

## Tasks

GET /tasks  
Retrieve tasks

POST /tasks  
Create task

---

## Events

GET /events  
Retrieve household events

POST /events  
Create event

---
