import { prismaClient } from "../src/application/database"
import bcrypt from "bcrypt";


export const removeTestUser = async () => {
    await prismaClient.user.deleteMany({
        where: {
            username: "Carrillo"
        }
    })
}

export const createTestUser = async() => {
    await prismaClient.user.create({
        data: {
            username: "Carrillo",
            password: await bcrypt.hash("123", 10),
            name: "Carrillo Rasyad",
            token: "test"
        }
    })
}

export const getTestUser = async() => {
    await prismaClient.user.findUnique({
        where: {
            username: "Carrillo"
        }
    })
}