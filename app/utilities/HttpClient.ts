import axios from 'axios';

export default class HttpClient {
    constructor() {

    }
    public static async api(method: string, url: string, options: any): Promise<any> {
        let config: any = {
            method: method,
            url: url,
            headers: options.headers || {},
            responseType: 'json',
            maxBodyLength: Infinity,
            params: options.params || {},
        };
        if (options.data) {
            try {
                config.data = JSON.parse(options.data);
            } catch (error) {
                config.data = options.data;
            }
        }
        return new Promise((resolve, reject) => {
            console.log('Sending request with config:', config); // Debugging line
            axios(config)
                .then(function (response: any) {
                    resolve(response.data);
                })
                .catch(function (error: any) {
                    reject(error.response.data);
                });
        });
    }
}