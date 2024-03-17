import {builder} from "../builder";

builder.prismaObject("Message", {
    fields: t => ({
        id: t.exposeID("id"),
        body: t.exposeString("body"),
        createdAt: t.expose("createdAt", {
            type: "Date"
        })
    })
})

//This function will result in the following GraphQL object type:
// type Message {
//     body: String!
//     createdAt: Date!
//     id: ID!
// }