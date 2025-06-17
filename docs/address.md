# Address API Spec

## Create Address API

Endpoint : POST /api/contacts/:contactId/addresses

Headers :
- Authorization : token

Request Body :

```json
{
  "street" : "Jalan apa",
  "city" : "Kota apa",
  "province" : "Provinsi apa",
  "country" : "Negara apa",
  "postal_code" : "Kode pos"
}
```

Response Body Success :

```json
{
  "data" : {
    "id" : 1,
    "street" : "Jalan apa",
    "city" : "Kota apa",
    "province" : "Provinsi apa",
    "country" : "Negara apa",
    "postal_code" : "Kode pos"
  }
}
```

Response Body Error :

```json
{
  "errors" : "Country wajib di isi" 
}
```

## Update Address API

Endpoint : PUT /api/contacts/:contactId/addresses/:addressId

Headers :
- Authorization : token

Request Body :

```json
{
  "street" : "Jalan apa",
  "city" : "Kota apa",
  "province" : "Provinsi apa",
  "country" : "Negara apa",
  "postal_code" : "Kode pos"
}
```

Response Body Success :

```json
{
  "data" : {
    "id" : 1,
    "street" : "Jalan apa",
    "city" : "Kota apa",
    "province" : "Provinsi apa",
    "country" : "Negara apa",
    "postal_code" : "Kode pos"
  }
}
```

Response Body Error :

```json
{
  "errors" : "Country wajib di isi"
}
```

## Get Address API

Endpoint : GET /api/contacts/:contactId/addresses/:addressId

Headers :
- Authorization : token

Response Body Success :

```json
{
  "data" : {
    "id" : 1,
    "street" : "Jalan apa",
    "city" : "Kota apa",
    "province" : "Provinsi apa",
    "country" : "Negara apa",
    "postal_code" : "Kode pos"
  }
}
```

Response Body Error :

```json
{
  "errors" : "kontak tidak ditemukan"
}
```

## List Addresses API

Endpoint : GET /api/contacts/:contactId/addresses

Headers :
- Authorization : token

Response Body Success :

```json 
{
  "data" : [
    {
      "id" : 1,
      "street" : "Jalan apa",
      "city" : "Kota apa",
      "province" : "Provinsi apa",
      "country" : "Negara apa",
      "postal_code" : "Kode pos"
    },
    {
      "id" : 1,
      "street" : "Jalan apa",
      "city" : "Kota apa",
      "province" : "Provinsi apa",
      "country" : "Negara apa",
      "postal_code" : "Kode pos"
    }
  ]
}
```

Response Body Error :

```json
{
  "errors" : "kontak tidak ditemukan"
}
```

## Remove Address API

Endpoint : DELETE /api/contacts/:contactId/addresses/:addressId

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
  "errors" : "alamat tidak ditemukan"
}
```
