import { Docker } from "../interface/Docker";
import { Model } from "../models/User";
import { provide } from "inversify-binding-decorators";
import TAGS from "../constant/tags";

@provide(TAGS.DockerService)
export class DockerService implements Docker {
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