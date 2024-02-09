import { Network } from "./network.class";
import { Meteo } from "../Interface/meteo.interface";
import { AxiosResponse } from "axios";
export class MeteoNetwork extends Network{
    meteo : Meteo = {
        temp : 0,
        city : "",
        img : "",
        condition : "",
        forecast : []
      };
    constructor(header : any, apiUrl: string){
        super(header, apiUrl);
    }

    async Forecast(params: any) {
        try {
            const value = await super.get(params);
          
            if (value !== undefined && value !== null) {
                console.log(value, "value");
                this.meteo = {
                    temp: value.current.temp_c,
                    city: value.location.name,
                    img: value.current.condition.icon,
                    condition: value.current.condition.text,
                    forecast: value.forecast.forecastday
                };
                return this.meteo;
            } else {
                throw new Error("the value is undefined");
            }
        } catch (error) {
            console.error(error);
            throw error;
        }
    }
    
}