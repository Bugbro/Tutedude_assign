import { resHandler } from "../utils/resHandler.js";


//admin and organization admin register
export const registerAdmin = async (req, res) => {
    try {
        const { name, email, password, mobile, orgName } = req.body;
    } catch (error) {
        console.log("Error while register admin");
        return resHandler(res, 500, error.message);
    }
}