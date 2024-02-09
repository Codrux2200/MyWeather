import axios from "axios";
const API_KEY = localStorage.getItem("API_KEY");

export class Network {
    header : any;
    apiUrl : string;
    constructor(header : any, apiUrl : string){
        this.header = header;
        this.apiUrl = apiUrl;
    }

    async get(params: any) {
        try {
            const response = await axios.get(this.apiUrl, {
                headers: this.header,
                params: params
            });
            return response.data;
        } catch (error : any) {
            this.errorCheck(error.response.status);
            return null;
        }
    }


    errorCheck(errStatus : number){
        console.log(errStatus, "error");
        if (errStatus == 400){
            alert("ERROR BAD REQUEST");
        } else if (errStatus == 500){
            alert("ERROR SERVER SIDE");
        }

    }


}