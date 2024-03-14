const validateCreateFlight=(req,res,next)=>{
    if(
        !req.body.flightNumber ||
        !req.body.airplaneId ||
        !req.body.departureAirportId ||
        !req.body.arrivalAirportId ||
        !req.body.departureTime ||
        !req.body.arrivalTime ||
        !req.body.price
    ){
        return res.status(400).json({
            data:{},
            success:false,
            message: 'Invali request body to create a flight',
            err:'Missing mandatory properties to create a flight'
        });
    }
    next();
}
module.exports={
    validateCreateFlight
}