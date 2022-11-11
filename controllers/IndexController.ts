import { inject } from "inversify";
import { interfaces, controller, httpGet, TYPE } from "inversify-koa-utils";
import type { IRouterContext } from "koa-router";
import TAGS from "../constant/tags";
import { IIndex } from "../interface/IIndex";
import { providerThrowable } from '../ioc';

@providerThrowable(TYPE.Controller,'IndexController')
@controller('/')
export default class IndexController implements interfaces.Controller {
    private indexService: IIndex;
    constructor(@inject(TAGS.IndexService) indexService: IIndex) {
        this.indexService = indexService;
    }
    @httpGet('/')
    private async index(ctx: IRouterContext): Promise<void> {
        const data = this.indexService.getUser(0);
        ctx.body = {
            data,
        };
    }
}