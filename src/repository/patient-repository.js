const { PatientAuth } = require('../model/index');

class PatientRepository {
    async createPatientProfile({ name, email, password, pic, mobile, address }) {
        try {
            // console.log(data);
            const userExist = await Patient.findOne({ email }); //query my database whether it exists or not from  user model
            if (userExist) {
                res.status(400);
                throw new Error("User already Exists");
            }
            const user = await PatientAuth.create({
                name,
                email,
                password,
                pic,
                mobile,
                address
            });
            return user;
        } catch (error) {
            console.log("Something went wrong in repo layer");
            throw error;
        }
    }
    async patientLogin({ email, password }) {
        try {
            const user = await PatientAuth.findOne({ email });
            return user;
        } catch (error) {
            console.log("Something went wrong in repo layer");
            throw error;
        }
    }

    async getPatientProfile(data) {
        try {
            const response = await PatientAuth.findOne(data);
            return response;
        } catch (error) {
            console.log("Something went wrong in repo layer");
            throw error;
        }
    }
    async deletePatientProfile(data) {
        try {
            const response = await PatientAuth.deleteOne(data);
            return response;
        } catch (error) {
            console.log("Something went wrong in repo layer");
            throw error;
        }
    }
}
module.exports = PatientRepository;