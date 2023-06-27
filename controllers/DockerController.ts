import { inject } from "inversify";
import { interfaces, controller, httpGet, TYPE } from "inversify-koa-utils";
import type { IRouterContext } from "koa-router";
import TAGS from "../constant/tags";
import { Docker } from "../interface/Docker";
import { providerThrowable } from '../ioc';

function titleCase(str: string) {
    let newStr = str.slice(0, 1).toLowerCase() + str.slice(1);
    return newStr;
}


@providerThrowable(TYPE.Controller, 'DockerController')
@controller('/')
export default class DockerController implements interfaces.Controller {
    private dockerService: Docker;

    constructor(@inject(TAGS.DockerService) dockerService: Docker) {
        for (let i in arguments) {
            this[titleCase(arguments[i].__proto__.constructor.name)] = arguments[i];
        };
    }

    @httpGet('')
    private async docker(ctx: IRouterContext): Promise<void> {
        const data = this.dockerService.getUser(0);
        ctx.body = {
            data,
        };
    }

    @httpGet(':id')
    private async dockerId(ctx: IRouterContext): Promise<void> {
        const data = this.dockerService.getUser(Number(ctx.params.id));
        ctx.body = {
            data,
        };
    }
}