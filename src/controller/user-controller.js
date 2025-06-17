import userService from "../service/user-service.js";

const register = async (req, res, next) => {
    try {
        const hasil = await userService.register(req.body);
        res.status(200).json({
            data: hasil
        });
    } catch (e) {
        next(e);
    }

}

export default {
    register
}