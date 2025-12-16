# Chemical PFD Builder

## Overview

**Chemical PFD Builder** is a cross-platform system for creating and managing **Process Flow Diagrams (PFDs)**.
The system consists of a **Web Application**, a **Desktop Application**, and a **Backend Service**, all sharing a common diagram data model.

---

## System Architecture

The project is structured into three main modules:

* **Web Application**
  Browser-based interface focused on accessibility, dashboard-driven workflows, and quick diagram interactions.

* **Desktop Application**
  High-performance, offline-capable editor designed for detailed engineering workflows.

* **Backend Service**
  Centralized service responsible for authentication, diagram persistence, and data validation.

All modules operate on a **shared JSON-based diagram schema**, ensuring consistency across platforms.

---

## Repository Structure

```
Chemical-PFD-Builder/
 ├── web-frontend/      # Web Application
 ├── desktop-app/       # Desktop Application
 ├── backend/           # Backend Service
```

---

## Getting Started

1. Clone the repository
2. Navigate to the required module
3. Follow setup instructions in the module-specific README

* Web App: `web-frontend/README.md`
* Desktop App: `desktop-app/README.md`
* Backend: `backend/README.md`

---

## Project Status

🚧 Under active development

---

## Ownership & Contribution

This project is maintained as part of an academic/industrial development initiative.
Contributions follow defined module-level guidelines.
