const asyncHandler = require('express-async-handler');
const { PatientRepository } = require('../repository/index');

const patientRepository = new PatientRepository();

const createPatientProfile = asyncHandler(async(req, res) => {
    try {
        const { name, email, password, pic, mobile, address } = req.body; //accepting data from front-end
        if (!name || !email || !password) {
            res.status(400);
            throw new Error("Please Enter all the fields");
        }
        const response = await patientRepository.createPatientProfile({ name, email, password, pic, mobile, address });
        return res.status(201).json({
            success: true,
            message: "successfully added patient profile",
            data: response,
            err: {}
        })
    } catch (error) {
        console.log(error);
        return res.status(201).json({
            success: false,
            message: "Something went wrong in controller layer",
            data: response,
            err: {}
        })
    }
});
const LoginPatient = asyncHandler(async(req, res) => {
    try {
        const { email, password } = req.body;
        const user = await patientRepository.patientLogin({ email, password });
        if (user && await user.matchPassword(password)) {
            return res.status(201).json({
                success: true,
                message: "successfully added patient profile",
                data: user,
                err: {}
            })
        } else {
            console.log('Wrong password or email');
        }
    } catch (error) {
        console.log(error);
        return res.status(201).json({
            success: false,
            message: "Something went wrong in controller layer",
            data: response,
            err: {}
        })
    }

})
const getPatientProfile = asyncHandler(async(req, res) => {
    try {
        const response = await patientRepository.getPatientProfile(req.body);
        return res.status(201).json({
            success: true,
            message: "successfully get patient",
            data: response,
            err: {}
        })
    } catch (error) {
        console.log(error);
        return res.status(201).json({
            success: false,
            message: "Something went wrong in controller layer",
            data: response,
            err: {}
        })
    }
});
const deletePatientProfile = asyncHandler(async(req, res) => {
    try {
        const patientId = req.params.id;
        const response = await patientRepository.deletePatientProfile({ patientId });
        return res.status(201).json({
            success: true,
            message: "successfully deleted patient",
            data: response,
            err: {}
        })
    } catch (error) {
        console.log(error);
        return res.status(201).json({
            success: false,
            message: "Something went wrong in controller layer",
            data: response,
            err: {}
        })
    }
})
module.exports = { deletePatientProfile, getPatientProfile, LoginPatient, createPatientProfile };