# User API Spec

## Register User API

Endpoint :  POST /api/users 

Request Body :

```json
{
  "username" : "aril",
  "password" : "123",
  "name" : "Carrillo1"
}
```

Response Body Success :

```json
{
  "data" : {
    "username" : "aril",
    "name" : "Carrillo1"
  }
}
```

Response Body Error : 

```json
{
  "errors" : "Username sudah terdaftar"
}
```

## Login User API

Endpoint : POST /api/users/login

Request Body :

```json
{
  "username" : "aril",
  "password" : "123"
}
```

Response Body Success : 

```json
{
  "data" : {
    "token" : "unique-token"
  }
}
```

Response Body Error :

```json
{
  "errors" : "Username atau Password salah"
}
```

## Update User API

Endpoint : PATCH /api/users/current

Headers :
- Authorization : token 

Request Body :

```json
{
  "name" : "Carrillo1", 
  "password" : "321" // Password baru 
}
```

Response Body Success : 

```json
{
  "data" : {
    "username" : "aril",
    "name" : "Carrillo1"
  }
}
```

Response Body Error : 

```json
{
  "errors" : "nama maksimal 100 kata"
}
```

## Get User API

Endpoint : GET /api/users/current

Headers :
- Authorization : token

Response Body Success:

```json
{
  "data" : {
    "username" : "aril",
    "name" : "Carrillo1"
  }
}
```

Response Body Error : 

```json
{
  "errors" : "Unauthorized"
}
```

## Logout User API

Endpoint : DELETE /api/users/logout

Headers :
- Authorization : token

Response Body Success : 

```json
{
  "data" : "OK"
}
```

Response Body Error : 

```json
{
  "errors" : "Unauthorized"
}
```
