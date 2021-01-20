import  PropertiesReader from 'properties-reader';
import { PropertiesData } from './properties.config';
export class Global {

    public static serverPort: number = PropertiesData.instance.properties.get('server.port') as number;
    public static loggerFolder: string = PropertiesData.instance.properties.get('logger.folder') as string;
    public static loggerFile: string = PropertiesData.instance.properties.get('logger.file') as string;
    public static loggerDatePattern: string = PropertiesData.instance.properties.get('logger.datePattern') as string;
    public static loggerZippedArchive: boolean = PropertiesData.instance.properties.get('logger.zippedArchive') as boolean;
    public static loggerMaxSize: string = PropertiesData.instance.properties.get('logger.maxSize') as string;
    public static loggerMaxFiles: string = PropertiesData.instance.properties.get('logger.maxFiles') as string;
    public static loggerErrorFile: string = PropertiesData.instance.properties.get('logger.errorFile') as string;
    public static loggerLevel: string = PropertiesData.instance.properties.get('logger.level') as string;
    public static appLoggerFile: string = PropertiesData.instance.properties.get('logger.appLoggerFile') as string;
    public static apiPrefix: string = PropertiesData.instance.properties.get('app.apiprefix') as string;

    public static serverMode: boolean = PropertiesData.instance.properties.get('server,mode') as boolean;
    
    public static getParam(key: string): PropertiesReader.Value {
        return PropertiesData.instance.properties.get(key);
    }
}
