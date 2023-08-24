import pgClient from "../utilities/PgPool";

class BaseModel {
    constructor() {

    }

    async _executeQuery(query : string, params : Array<any>) {
        return await pgClient.execute_query(query, params);
    }
}

export default BaseModel;