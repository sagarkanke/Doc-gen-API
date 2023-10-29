# Book Management  API

## Introduction

The Book Management Api is a service where you can manage your books by adding new books, editing the existing the book , viewing the existing books or view a particular book 

## Features
1. **ADD:** Seamlessly generates new books from user request content.
2. **Edit:** Gives edit functionality for your books.
3. **All or One:** Provides the added all or one books in the response.


## Prerequisites

Before you begin, ensure you have met the following requirements:

- Node.js installed (version X.X.X)
- npm or yarn installed

## Getting Started

1 Clone this repository
   
   ```bash
   git clone https://github.com/sagarkanake/BookGen-API.git
   ```

2 Navigate to the project directory
 
  ```bash
   cd DocGen-API 
   ```

3 Install dependencies

  ```bash
   npm install
   ```

4 Run the server
  ```bash
   npm run dev
   ```
## Usage

## API Endpoints
List and described BookGen-API server's endpoints here. For example:

## Book Generation API Example

To Add Book  from request data using the `BookGen-api` server, you can use the following HTTP request:

- **HTTP Method**: POST
- **Endpoint**: `/api/book/add`
- **Content-Type**: application/json

Request body:

- **json**: A json data fields for creating the new book recored. Include your data  in this request body.

### Example Using cURL

```shell
curl --location 'http://localhost:4001/api/book/add' \
--data '{
    "title": " node.js 2 ",
    "author" : "sagar" 
    
}'
```


# Response Body

```json
{
    "data": {
        "title": " node.js 2 ",
        "author": "sagar",
        "summary": "",
        "_id": "653e44aad40f56ccb274222b",
        "__v": 0
    },
    "success": true,
    "message": " book created Successfully "
}
```

To Edit Book  from request data using the `BookGen-api` server, you can use the following HTTP request:

- **HTTP Method**: PUT
- **Endpoint**: `/api/book/edit`
- **Content-Type**: application/json

Request body:

- **json**: A json data fields for creating the new book recored. Include your data  in this request body.

### Example Using cURL

```shell
curl --location 'http://localhost:4001/api/book/edit' \
--data '{
    "id" : "123",
    "title": " node.js 2 ",
    "author" : "sagar" 
    
}'
```

# Response Body

```json
{
    "data": {
        "_id": "653e3214b4b5c9ff88e8bf63",
        "title": " node.js 223 ",
        "author": "sagar",
        "summary": " summary",
        "__v": 0
    },
    "success": true,
    "message": " book updated successfully "
}
```

To view All Books  from request data using the `BookGen-api` server, you can use the following HTTP request:

- **HTTP Method**: POST
- **Endpoint**: `/api/book/all`
- **Content-Type**: application/json


### Example Using cURL

```shell
curl --location 'http://localhost:4001/api/book/all'
```

# Response Body

```json
{
    "data": [
        {
            "_id": "653e3214b4b5c9ff88e8bf63",
            "title": " node.js 223 ",
            "author": "sagar",
            "summary": " summary",
            "__v": 0
        },
        {
            "_id": "653e32f3f9095b27e9d75fa0",
            "title": " Node.js 1.2 ",
            "author": "john Doe",
            "summary": " summary",
            "__v": 0
        },
        {
            "_id": "653e365d783d22ee5fb42843",
            "title": " node.js 2 ",
            "author": "sagar",
            "summary": "",
            "__v": 0
        },
        {
            "_id": "653e3aed7e763cbb714b619e",
            "title": " node.js 2 ",
            "author": "sagar",
            "summary": "",
            "__v": 0
        }
    ],
    "message": " book fetched Successfully ",
    "success": true
}
```

To get an Book  from book id  using the `BookGen-api` server, you can use the following HTTP request:

- **HTTP Method**: POST
- **Endpoint**: `/api/book`
- **Content-Type**: application/json

Request body:

- **json**: A json data fields for creating the new book recored. Include your data  in this request body.

### Example Using cURL

```shell
curl --location 'http://localhost:4001/api/book?id=653e3aed7e763cbb714b619e'
```

# Response body

```json
{
    "data": {
        "_id": "653e3aed7e763cbb714b619e",
        "title": " node.js 2 ",
        "author": "sagar",
        "summary": "",
        "__v": 0
    },
    "message": " book fetched Successfully ",
    "success": true
}
```

## Contributing
Contributions are welcome! Here's how you can contribute to this project:

## Fork the repository

Create a new branch

```bash 
  git checkout -b feature/your-feature-name
```

Commit your changes


```bash
 git commit -m 'Add some feature'
```



Push to your branch

```bash 
  git push origin feature/your-feature-name
```


Create a pull request.


## License
- This project is licensed under the MIT License - see the LICENSE file for details.
