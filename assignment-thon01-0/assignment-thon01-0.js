var carDealership = {
   "sedan" : {    
         price:50,
         availability:2
      },

    "suv" : {
        price:50,
        availability:0
      },
      
    "sports" : {
        price:25,
        availability:0
     },
     
     checkAvailability(typeOfCar) {
    if (this[typeOfCar].availability > 0) {
          return `Yes, there are ${this[typeOfCar].availability} ${typeOfCar}'s available. Each cost ${this[typeOfCar].price}.`;
        }
         return `There are no ${typeOfCar}'s available.`;
        }

};



