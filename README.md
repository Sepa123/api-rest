# api-rest

Proyecto de prueba para desarrollar API Rest

desplegado en render como https://apii.onrender.com/

# API Reference

## Autentificación

### Registrar usuario

```http
  POST https://apii.onrender.com/api/v1/auth/register
```

#### Body Content

```json
{
  "email": "white@gmail.com",
  "password": "qwerty",
  "repassword": "qwerty"
}
```
#### Response

```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiI2MzJjYTU1MmZlMGQ3YjMyZTg2ZGNlZTMiLCJpYXQiOjE2NjM4NzAyOTIsImV4cCI6MTY2Mzg3MTE5Mn0.pe6CkKRDxj2QQWyFsl0DK6xg9E2wojQTNZ-xkZIWcI8",
  "expiresIn": 900
}
```

### Login de usuario

```http
  POST https://apii.onrender.com/api/v1/auth/login
```

#### Body Content

```json
{
  "email": "white@gmail.com",
  "password": "qwerty"
}
```
#### Response

```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiI2MzJjYTU1MmZlMGQ3YjMyZTg2ZGNlZTMiLCJpYXQiOjE2NjM4NzAyOTIsImV4cCI6MTY2Mzg3MTE5Mn0.pe6CkKRDxj2QQWyFsl0DK6xg9E2wojQTNZ-xkZIWcI8",
  "expiresIn": 900
}
```

## Urls
