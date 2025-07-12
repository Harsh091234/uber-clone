# API DOCUMENTATION


## Content
### User
- [Register User](#Authentication)
- [Login User](#Authentication)
- [Logout User](#Authentication)

#  User Registration API

This API allows users to register a new account in the system.

---

##  Endpoint

**POST** `/api/users/register`
Registers a new user and returns a JSON Web Token (JWT) along with user data.

---

##  Request Body

Send data as `application/json`.

### Required Fields

| Field                | Type     | Required | Validation                    |
| -------------------- | -------- | -------- | ----------------------------- |
| `fullname.firstname` | `string` | Yes      | Minimum 3 characters          |
| `fullname.lastname`  | `string` | No       | Optional                      |
| `email`              | `string` | Yes      | Must be a valid email address |
| `password`           | `string` | Yes      | Minimum 6 characters          |

### Example

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

---

## Success Response

### Status: 201 Created

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

---

## Error Responses

### Status: 400 Bad Request

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

---

## Authentication

This route is public — no token is required.
