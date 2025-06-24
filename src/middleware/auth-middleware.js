import { prismaClient } from "../application/database";

export const authMiddleWare = async(req, res, next) => {
    const token = req.get('Authorization');
    if(!token) {
        res.status(401).json({
            errors: "Unauthorized"
        });
    } else {
        const user = await prismaClient({
            where: token
        });

        if(!user) {
            res.status(401).json({
                errors: "Unauthorized"
            }).end();
        } else {
            req.user = user;
            next()
        }
    }
}