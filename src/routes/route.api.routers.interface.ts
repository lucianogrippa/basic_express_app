import { CommonController } from "../common/controller,common.config";

export default class RouteConfig {

    constructor(
    public method: string,
    public route: string,
    public controller: any,
    public action: string
    ){}
}