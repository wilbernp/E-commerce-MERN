import { ExampleModel } from "../schemas/example.schema"
import { CreateExample, UpdateExample } from "../types/example.d.t"

export default {
    create: async (example:CreateExample) => {
        return {message:"create example", data:example}
    },
    getAll: async () => {
        return {message:"getAll examples"}
    },

    getById: async (id:string) => {
        return {message:"getById example", data:id}
    },
    update: async (id:string, updateProperties:UpdateExample) => {
        return {message:"update example", data:{id,...updateProperties}}
    },
    delete: async (id:string) => {
        return {message:"delete example", data:id}
    }

}