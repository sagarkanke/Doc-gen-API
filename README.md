# <p align="center">Document Generation Server</p>

## Introduction

The Document Generation Server is a cutting-edge solution that seamlessly converts HTML content into PDF documents, harnessing the power of modern CSS features like flexbox and grid for dynamic layouts. Upon successful generation, it promptly delivers the resulting document in PDF format, streamlining the document creation process with precision and efficiency.

## Features
1. **HTML to PDF Conversion:** Seamlessly generates PDF documents from HTML content.
2. **Modern CSS Support:** Utilizes contemporary CSS features like flexbox and grid for dynamic layouts.
3. **Immediate PDF Delivery:** Provides the generated PDF file promptly upon successful document generation.


## Prerequisites

Before you begin, ensure you have met the following requirements:

- Node.js installed (version X.X.X)
- npm or yarn installed

## Getting Started

1 Clone this repository

   ```bash
   cd DocGen-API 
   ```

2 Navigate to the project directory
 
  ```bash
   git clone git@bitbucket.org:ximkart/sl-doc-gen.git
   ```

3 Install dependencies

  ```bash
   npm install
   ```


## Usage

## API Endpoints
List and described DocGen-API server's endpoints here. For example:

## Document Generation API Example

To generate PDF documents from HTML files using the `DocgGen-api` server, you can use the following HTTP request:

- **HTTP Method**: POST
- **Endpoint**: `/doc/gen/api/internal/pdf/generate`
- **Content-Type**: multipart/form-data

Request body:

- **htmlFile**: A multipart form field for uploading the HTML file. Include your HTML file in this field.

### Example Using cURL

```shell
curl -X POST -F "htmlFile=@yourfile.html" http://13.233.98.232/doc/gen/api/internal/pdf/generate
```


# Response body
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Example PDF</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            max-width: 600px;
            margin: 0 auto;
            padding: 20px;
            background-color: #f9f9f9;
        }
        h1 {
            color: #333;
        }
        p {
            color: #555;
        }
    </style>
</head>
<body>
    <h1>Hello, this is an example PDF</h1>
    <p>This is some sample content in HTML format.</p>
</body>
</html>
```



```json
{
    "messageId": "1234cc",
    "channelId": "64c24cb48c5095e20c87200b",
    "senderId": "101",
    "new": "s",
    "so": 1231,
    "receiverId": "102",
    "accountId": "7890",
    "conversationId": "abc123",
    "channelType": "email",
    "contactId": "64c500f9ea3a97d664e3c002",
    "localMessageId": "lmn456",
    "whatsapp": {
        "from": "918637212489",
        "id": "wamid.HBgMOTE4NjM3MjEyNDg5FQIAEhggRkQ5OTFCNzVDNjc3QUY0Mzc4RjIxOTZCOUM5NEVFNTAA",
        "retryable": false,
        "status": "received",
        "statusGroup": "pending",
        "statusLog": [],
        "statusTime": "2023-08-09T13:59:24.000Z",
        "text": {
            "body": "Hi sagar"
        },
        "time": "2023-08-10T13:59:24.000Z",
        "type": "text"
    }
   
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
