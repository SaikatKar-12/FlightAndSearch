//const { CityService } = require('.');
const { AirportRepository }=require('../repository/index');
class AirportService{
    constructor(){
        this.airportRepository = new AirportRepository();
    }
    async createAirport(data){
        try {
            const airport= await this.airportRepository.createAirport(data);
            return airport;
        } catch (error) {
            console.log("something went wrong in service layer");
            throw {error};
        }
    }
    async deleteAirport(airportId){
        try {
            const response= this.airportRepository.deleteAirport(airportId);
            return response;
        } catch (error) {
            console.log("something went wrong in service layer");
            throw {error};
        }
    }
    async updateAirport(airportId,data){
        try {
            const airport= await this.airportRepository.updateAirport(airportId,data);
            return airport;
        } catch (error) {
            console.log("something went wrong in service layer");
            throw {error};
        }
    }
    async getAirport(airportId){
        try {
            const airport= await this.airportRepository.getAirport(airportId);
            return airport;
        } catch (error) {
            console.log("something went wrong in service layer");
            throw {error};
        }
    }
}
module.exports = AirportService;
