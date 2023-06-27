import { Model } from "../models/User";

export interface Docker {
    getUser(id: number): Model.User
}