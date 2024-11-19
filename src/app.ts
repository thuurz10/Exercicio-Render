import fastify from "fastify";
import Cors  from "@fastify/cors";

export const app = fastify()

app.register(Cors, {
    origin: true
})

app.get('/home', ()=> {
    const user = {"nome": "Arthur Schmidt"}
    return user
})

app.setErrorHandler((error, request, reply)=> {
    console.error(error)
    reply.status(500).send({ message: "Internal Server Error" })
    
})