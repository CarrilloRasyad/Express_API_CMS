describe('POST /api/contacts', function () {

    // afterEach(async () => {
    //     await removeTestUser();
    // })

    it('should can create contacts', async () => {
        const result = await supertest(web)
            .post('/api/contacts')
            .send({
                first_name: 'Carrillo',
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