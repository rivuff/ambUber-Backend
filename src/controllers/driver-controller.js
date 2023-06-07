const {DriverRepository} = require('../repository/index');

const driverRepository = new DriverRepository();

const createDriver = async(req, res)=>{

    try {
        const response = await driverRepository.createDriver(req.body);
        console.log(response);
        return res.status(201).json({
            success: true,
            message: "successfully added driver",
            data: response,
            err:{}
        })
         
    } catch (error) {
        console.log(error);
        return res.status(201).json({
            success: false,
            message: "Something went wrong in repoitory layer",
            data: response,
            err:{}
        })
    }

}

const getDriver = async(req, res)=>{
    try {
        const response = await driverRepository.getDriver(req.query.id);
        return res.status(201).json({
            success: true,
            message: "successfully deleted driver",
            data: response,
            err:{}
        })
    } catch (error) {
        console.log(error);
        return res.status(201).json({
            success: false,
            message: "Something went wrong in repoitory layer",
            data: response,
            err:{}
        })
    }
}

// const findDriver = async(req, res)=>{

// }

const deleteDriver = async(req, res)=>{
    
    try {
        const driverId = req.query.id;
        const response = await driverRepository.delete(driverId);
        return res.status(201).json({
            success: true,
            message: "successfully deleted driver",
            data: response,
            err:{}
        })
    } catch (error) {
        console.log(error);
        return res.status(201).json({
            success: false,
            message: "Something went wrong in repoitory layer",
            data: response,
            err:{}
        })
    }
}

module.exports = {createDriver, deleteDriver, getDriver}