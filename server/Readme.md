🔐 User Registration API
POST /api/users/register
Registers a new user and returns a JWT token along with the created user object.

📥 Request Body
json
Copy
Edit
{
  "fullname": {
    "firstname": "John",
    "lastname": "Doe"
  },
  "email": "john@example.com",
  "password": "securePass123"
}
Field	Type	Required	Description
fullname.firstname	string	✅ Yes	Minimum 3 characters
fullname.lastname	string	❌ No	Optional
email	string	✅ Yes	Must be a valid email
password	string	✅ Yes	Minimum 6 characters

✅ Successful Response 201 Created
json
Copy
Edit
{
  "token": "jwt_token_here",
  "user": {
    "_id": "64b69e5b8ffb4b1b8dbccfea",
    "fullname": {
      "firstname": "John",
      "lastname": "Doe"
    },
    "email": "john@example.com"
  }
}
❌ Validation Error 400 Bad Request
json
Copy
Edit
{
  "errors": [
    {
      "msg": "First name must 3 letters",
      "path": "fullname.firstname",
      "location": "body"
    }
  ]
}
