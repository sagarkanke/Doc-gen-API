# Document Generation API

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
curl --location 'https://manage.ximkart.com/doc/gen/api/internal/pdf/generate' \
--header 'Authorization: Basic eGlta2FydDp4aW1rYXJ0MTIzIw==' \
--form 'file=@"yourFile.html"'
```


# Response body

![HTML Code Screenshot](screenshots/samplePDF.png)

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
