require('dotenv').config(); // Load environment variables from .env file

// Rest of your application code goes here...
const env = process.env;

module.exports = {
    Postgres_DB: {
        host: env.MASTER_DB_HOST || '',
        user: env.MASTER_DB_USER || '',
        password: env.MASTER_DB_PASSWORD || '',
        database: env.MASTER_DB_NAME || '',
        connectionLimit: 10,
        port: 5432,
        // ssl: {
        //     rejectUnauthorized: false
        // }
    },
    listPerPage: env.LIST_PER_PAGE || 10,
    EXTERNALAPIURLS: {
        "validateUser": `${env.BASE_URL}/ums/api/auth/v1/internal/validate`,
        "vendorListByOrganizationId": `${env.BASE_URL}/ums/api/v1/internal/organization/get-vendors/`

    }
};
  
