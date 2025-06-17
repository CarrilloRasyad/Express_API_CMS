import supertest from "supertest";
import {web} from "../src/application/web.js";
import { prismaClient } from "../src/application/database.js";

describe('POST /api/users', function () {

    afterEach(async () => {
        await prismaClient.user.deleteMany({
            where: {
                username: "Carrillo"
            }
        })
    })

    it('should can register new user', async () => {
        const result = await supertest(web)
            .post('/api/users')
            .send({
                username: 'Carrillo',
                password: '123',
                name: 'Carrillo Rasyad'
            });

        expect(result.status).toBe(200);
        expect(result.body.data.username).toBe("Carrillo");
        expect(result.body.data.name).toBe("Carrillo Rasyad");
        expect(result.body.data.password).toBeUndefined();
    });
});
