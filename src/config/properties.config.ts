import path from "path";
import PropertiesReader from "properties-reader";

export class PropertiesData  {

private static _instance: PropertiesData;
    public properties: PropertiesReader.Reader;
    public static get instance()  {
        if(!this._instance){
            this._instance = new PropertiesData();

            this._instance.properties = PropertiesReader(path.join(__dirname,'/../app.ini') as string,'utf8');
        }

        return this._instance;
    }


    private  constructor(){
    }

}
