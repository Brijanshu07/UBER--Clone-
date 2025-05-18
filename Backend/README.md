# User Registration Endpoint Documentation

## Endpoint

`POST /users/register`

## Description

This endpoint allows a new user to register by providing their first name, last name, email, and password. On successful registration, it returns a JWT authentication token.

---

## Request Body

Send a JSON object with the following structure:

```json
{
  "fullname": {
    "firstname": "John",
    "lastname": "Doe"
  },
  "email": "john.doe@example.com",
  "password": "yourpassword"
}
```

- `fullname.firstname` (string, required): Minimum 3 characters.
- `fullname.lastname` (string, optional): Minimum 3 characters if provided.
- `email` (string, required): Must be a valid email.
- `password` (string, required): Minimum 6 characters.

---

## Responses

### Success

- **Status Code:** `201 Created`
- **Body:**
  ```json
  {
    "token": "<JWT_TOKEN>",
    "user": {
      "_id": "<user_id>",
      "fullname": {
        "firstname": "John",
        "lastname": "Doe"
      },
      "email": "john.doe@example.com",
      "socketId": null
    }
  }
  ```

### Validation Error

- **Status Code:** `400 Bad Request`
- **Body:**
  ```json
  {
    "errors": [
      {
        "msg": "First name should be minimum 3 characters long",
        "param": "fullname.firstname",
        "location": "body"
      }
      // ...other errors
    ]
  }
  ```

---

## Example Request

```bash
curl -X POST http://localhost:PORT/users/register \
  -H "Content-Type: application/json" \
  -d '{
    "fullname": { "firstname": "John", "lastname": "Doe" },
    "email": "john.doe@example.com",
    "password": "yourpassword"
  }'
```

---

## Notes

- All required fields must be provided for successful registration.
- The password is securely hashed before storage.
- The response includes a JWT token for authentication in subsequent requests.

---

# User Login Endpoint Documentation

## Endpoint

`POST /users/login`

## Description

This endpoint allows an existing user to log in using their email and password. On successful authentication, it returns a JWT authentication token and user details.

---

## Request Body

Send a JSON object with the following structure:

```json
{
  "email": "john.doe@example.com",
  "password": "yourpassword"
}
```

- `email` (string, required): Must be a valid email.
- `password` (string, required): Minimum 6 characters.

---

## Responses

### Success

- **Status Code:** `200 OK`
- **Body:**
  ```json
  {
    "token": "<JWT_TOKEN>",
    "user": {
      "_id": "<user_id>",
      "fullname": {
        "firstname": "John",
        "lastname": "Doe"
      },
      "email": "john.doe@example.com",
      "socketId": null
    }
  }
  ```

### Validation Error

- **Status Code:** `400 Bad Request`
- **Body:**
  ```json
  {
    "errors": [
      {
        "msg": "Invalid Email",
        "param": "email",
        "location": "body"
      }
      // ...other errors
    ]
  }
  ```

### Authentication Error

- **Status Code:** `401 Unauthorized`
- **Body:**
  ```json
  {
    "message": "Invalid email or password"
  }
  ```

---

## Example Request

```bash
curl -X POST http://localhost:PORT/users/login \
  -H "Content-Type: application/json" \
  -d '{
    "email": "john.doe@example.com",
    "password": "yourpassword"
  }'
```

---

## Notes

- Both email and password are required for login.
- The response includes a JWT token for authentication in subsequent requests.
