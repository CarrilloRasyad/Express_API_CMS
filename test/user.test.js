import supertest from "supertest";
import {web} from "../src/application/web.js";
import { prismaClient } from "../src/application/database.js";
import { logger } from "../src/application/logging.js";
import { createTestUser, removeTestUser } from "./test-util.js";

describe('POST /api/users', function () {

    afterEach(async () => {
        await removeTestUser();
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

    it('should reject if request is invalid', async () => {
        const result = await supertest(web)
            .post('/api/users')
            .send({
                username: '',
                password: '',
                name: ''
            });

        logger.info(result.body);

        expect(result.status).toBe(400);
        expect(result.body.errors).toBeDefined();
    });

    it('should reject if username already registered',  async() => {
        let result = await supertest(web)
            .post('/api/users')
            .send({
                username: 'Carrillo',
                password: '123',
                name: 'Carrillo Rasyad'
            });
        logger.info(result.body);

        expect(result.status).toBe(200);
        expect(result.body.data.username).toBe("Carrillo");
        expect(result.body.data.name).toBe("Carrillo Rasyad");
        expect(result.body.data.password).toBeUndefined();

        result = await supertest(web)
            .post('/api/users')
            .send({
                username: 'Carrillo',
                password: '123',
                name: 'Carrillo Rasyad'
            });

        logger.info(result.body);
        
        expect(result.status).toBe(400);
        expect(result.body.errors).toBeDefined();
    })
});


describe('POST /api/users/login', function () {

    beforeEach(async () => {
        await createTestUser();
    })

    afterEach(async () => {
        await removeTestUser();
    })

    it('should can login', async () => {
        const result = await supertest(web)
            .post('/api/users/login')
            .send({
                username: 'Carrillo',
                password: '123'
            });

        expect(result.status).toBe(200);
        expect(result.body.data.token).toBeDefined();
        expect(result.body.data.token).not.toBe("token");
    })

    it('should reject if invalid login', async() => {
        const result = await supertest(web)
            .post('/api/users/login')
            .send({
                username: "",
                password: ""
            })
        
        logger.info(result.body);

        expect(result.status).toBe(400);
        expect(result.body.errors).toBeDefined();
    })

    it('should reject if login password wrong', async() => {
        const result = await supertest(web)
            .post('/api/users/login')
            .send({
                username: "Carrillo",
                password: "salah"
            })
        logger.info(result.body);
        
        expect(result.status).toBe(401);
        expect(result.body.errors).toBeDefined();
    })
});
