import 'reflect-metadata'
import express, { response } from "express"
import "./database"
import { router } from './routes'
import { createConnection } from 'typeorm'

createConnection()
const app = express()
app.use(express.json())
app.use(router)

export { app }