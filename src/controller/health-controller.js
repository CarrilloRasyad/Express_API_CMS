const ping = async(req, res, next) => {
    try{
        res.send('PING');
    } catch (e) {
        next(e);
    }
}

export default {
    ping
}