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
201
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
201
```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiI2MzJjYTU1MmZlMGQ3YjMyZTg2ZGNlZTMiLCJpYXQiOjE2NjM4NzAyOTIsImV4cCI6MTY2Mzg3MTE5Mn0.pe6CkKRDxj2QQWyFsl0DK6xg9E2wojQTNZ-xkZIWcI8",
  "expiresIn": 900
}
```

## Urls

### Obtener urls de un usuario

```http
  GET https://apii.onrender.com/api/v1/urls
```

#### Autentificación 

requiere de un usuario que haya iniciado sesión previamente
con un token de verificación 

| Parameter    | Type     | Description                |
| :--------    | :------- | :------------------------- |
| `token`      | `string` | **Required**. 

#### 

#### Response
200
```json
{
  "urls": [
    {
      "_id": "632370d10da4a89b92e7b17e",
      "url": "https://stackoverflow.com/questions/19480008/javascript-merging-objects-by-id",
      "shortUrl": "jMBLc-",
      "uid": "63236c81c62c9ed57ac59c52",
      "__v": 0
    },
    {
      "_id": "632370d70da4a89b92e7b180",
      "url": "https://www.youtube.com/watch?v=VrLvbzHVT9A&t=19545s",
      "shortUrl": "jlYwRw",
      "uid": "63236c81c62c9ed57ac59c52",
      "__v": 0
    } 
  ]
}
```

### Obtener una url de un usuario por su id

```http
  GET https://apii.onrender.com/api/v1/urls/{_id}
```

#### Autentificación 

requiere de un usuario que haya iniciado sesión previamente
con un token de verificación 

| Parameter   | Type     | Description                |
| :--------   | :------- | :------------------------- |
| `token`     | `string` | **Required**. 
| `_id`       | `string` | **Required**. id de la url 

#### Response
200
```json
{
  "urls": [
    {
      "_id": "632370d10da4a89b92e7b17e",
      "url": "https://stackoverflow.com/questions/19480008/javascript-merging-objects-by-id",
      "shortUrl": "jMBLc-",
      "uid": "63236c81c62c9ed57ac59c52",
      "__v": 0
    } 
  ]
}
```
### Crear un shortUrl

```http
  POST https://apii.onrender.com/api/v1/urls
```

#### Autentificación 

requiere de un usuario que haya iniciado sesión previamente
con un token de verificación 

| Parameter    | Type     | Description                |
| :--------    | :------- | :------------------------- |
| `token`      | `string` | **Required**. 

#### Require body

```json
{
  "url": "https://www.youtube.com/watch?v=VrLvbzHVT9A&t=19545s"
}
```

#### Response
201

```json
{
  "url": "https://www.youtube.com/watch?v=VrLvbzHVT9A&t=19545s"
}
```
