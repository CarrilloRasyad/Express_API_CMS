import { ResponseError } from "../error/response-error.js";

const validate = (schema, request) => {
    const hasil = schema.validate(request, {
        abortEarly: false,
        allowUnknown: false
    })
    if (hasil.error) {
        throw new ResponseError(400, hasil.error.message);
    } else {
        return hasil.value;
    }
}

export {
    validate
}