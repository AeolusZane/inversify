import { IIndex } from "../interface/IIndex";
import { Model } from "../models/User";
import { provide } from "inversify-binding-decorators";
import TAGS from "../constant/tags";

@provide(TAGS.IndexService)
export class IndexService implements IIndex {
    private userStorage: Model.User[] = [
        {
            email: '123@qq.com',
            name: 'zjz'
        },
        {
            email: '333@qq.com',
            name: 'crj'
        },
        {
            email: '222@qq.com',
            name: 'wzw'
        }
    ]
    public getUser(id: number): Model.User {
        let result: Model.User;
        result = this.userStorage[id];
        return result;
    }
}