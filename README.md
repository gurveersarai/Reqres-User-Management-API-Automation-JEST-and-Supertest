# Reqres User Management API Automation with Jest and Supertest

[![Node.js](https://img.shields.io/badge/Node.js-v14+-brightgreen)](https://nodejs.org/)
[![Jest](https://img.shields.io/badge/Jest-v29+-c21313)](https://jestjs.io/)
[![Supertest](https://img.shields.io/badge/Supertest-v6+-blue)](https://www.npmjs.com/package/supertest)
[![License](https://img.shields.io/badge/License-MIT-green)](LICENSE)

---

## Overview

This repository contains an automated API testing framework built using **Jest** and **Supertest** for testing the [Reqres.in](https://reqres.in/) API. It demonstrates how to perform CRUD operations and validate API responses effectively.

---

## 🚀 Project Setup

### Prerequisites

- Node.js v14 or higher
- npm (Node Package Manager)

### Installation

Clone the repository and install dependencies:

```bash
git clone https://github.com/gurveersarai/Reqres-User-Management-API-Automation-JEST-and-Supertest.git
cd Reqres-User-Management-API-Automation-JEST-and-Supertest
npm install
```
## 🧪 Running Tests

Run the test suite:

```bash
npm test
```
---

## 📁 Project Structure
```
├── helpers/ # Utility functions for API requests
├── tests/ # Test cases for various API endpoints
├── jest.config.js # Jest configuration file
├── package.json # Project metadata and dependencies
└── package-lock.json # Exact versions of installed packages
```

---

## ✅ Test Suite Overview

### Users API Tests

- **GET /api/users**: Retrieve a list of users.
- **GET /api/users/:id**: Fetch a user by ID.
- **POST /api/users**: Create a new user.
- **PUT /api/users/:id**: Update an existing user.
- **DELETE /api/users/:id**: Delete a user by ID.

### Resources API Tests

- **GET /api/unknown**: Fetch a list of resources.
- **GET /api/unknown/:id**: Retrieve a resource by ID.

---

## 🔧 Technologies Used

- **Jest**: JavaScript testing framework for running and structuring tests.
- **Supertest**: HTTP assertions library for testing REST APIs.
- **Node.js**: JavaScript runtime environment.

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 📌 Useful Links

- [Reqres API Documentation](https://reqres.in/)


