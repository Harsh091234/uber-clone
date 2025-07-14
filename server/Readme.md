# API Documentation

## Overview
This document provides comprehensive information about the User and Captain API endpoints for authentication and profile management.

## Base URLs
```
Users: http://localhost:3000/api/users
Captains: http://localhost:3000/api/captains
```

## Table of Contents
### User Endpoints
- [User Registration](#user-registration)
- [User Login](#user-login)
- [Get User Profile](#get-user-profile)
- [User Logout](#user-logout)

### Captain Endpoints
- [Captain Registration](#captain-registration)
- [Captain Login](#captain-login)
- [Get Captain Profile](#get-captain-profile)
- [Captain Logout](#captain-logout)

---

## User Registration

Register a new user account.

### Endpoint
```http
POST /api/users/register
```

### Request Body

Send data as `application/json`.

### Required Fields

| Field                | Type     | Required | Validation                    |
| -------------------- | -------- | -------- | ----------------------------- |
| `fullname.firstname` | `string` | Yes      | Minimum 3 characters          |
| `fullname.lastname`  | `string` | No       | Optional                      |
| `email`              | `string` | Yes      | Must be a valid email address |
| `password`           | `string` | Yes      | Minimum 6 characters          |

**Example Request:**
```json
{
  "fullname": {
    "firstname": "Jane",
    "lastname": "Doe"
  },
  "email": "jane@example.com",
  "password": "securePassword123"
}
```

### Response

**Success (201 Created):**
```json
{
  "token": "jwt_token_here",
  "user": {
    "_id": "64b69e5b8ffb4b1b8dbccfea",
    "fullname": {
      "firstname": "Jane",
      "lastname": "Doe"
    },
    "email": "jane@example.com"
  }
}
```

**Error (400 Bad Request):**
```json
{
  "errors": [
    {
      "msg": "First name must 3 letters",
      "path": "fullname.firstname",
      "location": "body"
    }
  ]
}
```

### Authentication
No authentication required.

---

## User Login

Authenticate a user and receive access token.

### Endpoint
```http
POST /api/users/login
```

### Request Body

Send data as `application/json`.

### Required Fields

| Field      | Type     | Required | Validation                    |
| ---------- | -------- | -------- | ----------------------------- |
| `email`    | `string` | Yes      | Must be a valid email address |
| `password` | `string` | Yes      | Minimum 6 characters          |

**Example Request:**
```json
{
  "email": "jane@example.com",
  "password": "securePassword123"
}
```

### Response

**Success (200 OK):**
```json
{
  "token": "jwt_token_here",
  "user": {
    "_id": "64b69e5b8ffb4b1b8dbccfea",
    "fullname": {
      "firstname": "Jane",
      "lastname": "Doe"
    },
    "email": "jane@example.com"
  }
}
```

**Error (400 Bad Request):**
```json
{
  "errors": [
    {
      "msg": "Invalid Email",
      "path": "email",
      "location": "body"
    }
  ]
}
```

**Error (401 Unauthorized):**
```json
{
  "message": "invalid email or password"
}
```

### Authentication
No authentication required.

---

## Get User Profile

Retrieve authenticated user's profile information.

### Endpoint
```http
GET /api/users/profile
```

### Request Body
No request body required.

### Response

**Success (200 OK):**
```json
{
  "user": {
    "_id": "64b69e5b8ffb4b1b8dbccfea",
    "fullname": {
      "firstname": "Jane",
      "lastname": "Doe"
    },
    "email": "jane@example.com"
  }
}
```

**Error (401 Unauthorized):**
```json
{
  "message": "Unauthorized"
}
```

### Authentication
Requires authentication. Include JWT token in:
- **Cookie:** `token=jwt_token_here`
- **Header:** `Authorization: Bearer jwt_token_here`

---

## User Logout

Logout user and invalidate their token.

### Endpoint
```http
GET /api/users/logout
```

### Request Body
No request body required.

### Response

**Success (200 OK):**
```json
{
  "message": "Logged out"
}
```

**Error (401 Unauthorized):**
```json
{
  "message": "Unauthorized"
}
```

### Authentication
Requires authentication. Include JWT token in:
- **Cookie:** `token=jwt_token_here`
- **Header:** `Authorization: Bearer jwt_token_here`

---

## Error Codes

| Status Code | Description |
|-------------|-------------|
| 200 | Success |
| 201 | Created |
| 400 | Bad Request - Invalid input |
| 401 | Unauthorized - Invalid credentials or missing token |

---

## Captain Registration

Register a new captain account with vehicle information.

### Endpoint
```http
POST /api/captains/register
```

### Request Body

Send data as `application/json`.

### Required Fields

| Field                    | Type     | Required | Validation                           |
| ------------------------ | -------- | -------- | ------------------------------------ |
| `fullname.firstname`     | `string` | Yes      | Minimum 3 characters                 |
| `fullname.lastname`      | `string` | No       | Minimum 3 characters (if provided)  |
| `email`                  | `string` | Yes      | Must be a valid email address        |
| `password`               | `string` | Yes      | Minimum 6 characters                 |
| `vehicle.color`          | `string` | Yes      | Minimum 3 characters                 |
| `vehicle.plate`          | `string` | Yes      | Minimum 3 characters                 |
| `vehicle.capacity`       | `number` | Yes      | Integer, minimum value 1             |
| `vehicle.vehicletype`    | `string` | Yes      | Must be: "car", "bike", or "auto"    |

**Example Request:**
```json
{
  "fullname": {
    "firstname": "John",
    "lastname": "Doe"
  },
  "email": "john.doe@example.com",
  "password": "password123",
  "vehicle": {
    "color": "Red",
    "plate": "ABC123",
    "capacity": 4,
    "vehicletype": "car"
  }
}
```

### Response

**Success (201 Created):**
```json
{
  "token": "jwt_token_here",
  "captain": {
    "_id": "64b69e5b8ffb4b1b8dbccfea",
    "fullname": {
      "firstname": "John",
      "lastname": "Doe"
    },
    "email": "john.doe@example.com",
    "vehicle": {
      "color": "Red",
      "plate": "ABC123",
      "capacity": 4,
      "vehicletype": "car"
    },
    "status": "inactive"
  }
}
```

**Error (400 Bad Request - Validation):**
```json
{
  "errors": [
    {
      "msg": "First name must 3 letters",
      "path": "fullname.firstname",
      "location": "body"
    }
  ]
}
```

**Error (400 Bad Request - Captain Exists):**
```json
{
  "message": "Captain already exists"
}
```

### Authentication
No authentication required.

---

## Captain Login

Authenticate a captain and receive access token.

### Endpoint
```http
POST /api/captains/login
```

### Request Body

Send data as `application/json`.

### Required Fields

| Field      | Type     | Required | Validation                    |
| ---------- | -------- | -------- | ----------------------------- |
| `email`    | `string` | Yes      | Must be a valid email address |
| `password` | `string` | Yes      | Minimum 6 characters          |

**Example Request:**
```json
{
  "email": "john.doe@example.com",
  "password": "password123"
}
```

### Response

**Success (200 OK):**
```json
{
  "token": "jwt_token_here",
  "captain": {
    "_id": "64b69e5b8ffb4b1b8dbccfea",
    "fullname": {
      "firstname": "John",
      "lastname": "Doe"
    },
    "email": "john.doe@example.com",
    "vehicle": {
      "color": "Red",
      "plate": "ABC123",
      "capacity": 4,
      "vehicletype": "car"
    },
    "status": "inactive"
  }
}
```

**Error (400 Bad Request):**
```json
{
  "errors": [
    {
      "msg": "Invalid email",
      "path": "email",
      "location": "body"
    }
  ]
}
```

**Error (401 Unauthorized):**
```json
{
  "message": "Invalid email or password"
}
```

### Authentication
No authentication required.

---

## Get Captain Profile

Retrieve authenticated captain's profile information.

### Endpoint
```http
GET /api/captains/profile
```

### Request Body
No request body required.

### Response

**Success (200 OK):**
```json
{
  "captain": {
    "_id": "64b69e5b8ffb4b1b8dbccfea",
    "fullname": {
      "firstname": "John",
      "lastname": "Doe"
    },
    "email": "john.doe@example.com",
    "vehicle": {
      "color": "Red",
      "plate": "ABC123",
      "capacity": 4,
      "vehicletype": "car"
    },
    "status": "inactive"
  }
}
```

**Error (401 Unauthorized):**
```json
{
  "message": "Unauthorized"
}
```

### Authentication
Requires authentication. Include JWT token in:
- **Cookie:** `token=jwt_token_here`
- **Header:** `Authorization: Bearer jwt_token_here`

---

## Captain Logout

Logout captain and invalidate their token.

### Endpoint
```http
GET /api/captains/logout
```

### Request Body
No request body required.

### Response

**Success (200 OK):**
```json
{
  "message": "Logged out"
}
```

**Error (401 Unauthorized):**
```json
{
  "message": "Unauthorized"
}
```

### Authentication
Requires authentication. Include JWT token in:
- **Cookie:** `token=jwt_token_here`
- **Header:** `Authorization: Bearer jwt_token_here`

---

## Notes

- All requests must include `Content-Type: application/json` header
- JWT tokens expire after 15 days
- Tokens are automatically blacklisted upon logout
- Captain status defaults to "inactive" upon registration
- Captain email must be unique across all captains
