import pg from "pg";
const { Postgres_DB, listPerPage } = require('../../app/config.ts');
// import config = require("../../app/configs");
import LOGGER from '../config/LOGGER';

export default class PgPool{
    private static _instance : PgPool;
    poolConnection : pg.Pool;
    connected: boolean = false;
    constructor(){
        this.poolConnection = new pg.Pool(Postgres_DB);
        this.connect();
        this.poolConnection.on('error', function (err: Error, _client: any) {
            console.log(`Idle-Client Error:\n${err.message}\n${err.stack}`)
        })
    }

    public static get instance(){
        return this._instance || (this._instance = new this());
    }

    public static async execute_query( query:string, params : any[] = []) : Promise<pg.QueryResult>{
        return await this.instance.poolConnection.query(query, params);
    }

    async connect() : Promise<pg.PoolClient> {
        console.log("connect")
       return await this.poolConnection.connect();
    }
}