import { PropertiesData } from './properties.config';
export class DBConfig {

    public static  HOST?: string = PropertiesData.instance.properties.get('datasource.webwallet.host') as string;
    public  static USER?: string = PropertiesData.instance.properties.get('datasource.webwallet.user') as string;
    public  static PASSWORD?: string = PropertiesData.instance.properties.get('datasource.webwallet.pwd') as string;
    public  static DB: string = PropertiesData.instance.properties.get('datasource.webwallet.db') as string;
    public static dialect?: string = PropertiesData.instance.properties.get('datasource.webwallet.dialect') as string;
    public static pool= {
      max: PropertiesData.instance.properties.get('datasource.webwallet.pool.max') as number,
      min: PropertiesData.instance.properties.get('datasource.webwallet.pool.min') as number,
      acquire: PropertiesData.instance.properties.get('datasource.webwallet.pool.acquire') as number,
      idle: PropertiesData.instance.properties.get('datasource.webwallet.pool.idle') as number,
    };
    static PORT: number = PropertiesData.instance.properties.get('datasource.webwallet.port') as number;

    constructor() {
        
    }

}