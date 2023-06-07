const {Driver} = require('../model/index');

class DriverRepository{

    async createDriver(data){
        
        try {
            console.log(data);
            const driver = await Driver.create(data);
            return driver;
        } catch (error) {
            console.log("Something went wrong in repo layer");
            throw error;
        }
    }

    async getDriver(data){
        try {
            const driver = await Driver.findById(data);
            return driver;
        } catch (error) {
            console.log("Something went wrong in repo layer");
            throw error;
        }
    }

    async delete(data){
        try {
            console.log(data);
            const response = await Driver.findByIdAndDelete(data);
            console.log(response);
            return response;
        } catch (error) {
            console.log("Something went wrong in repo layer");
            throw error;
        }
    }
}

module.exports = DriverRepository