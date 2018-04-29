function carDealership() {
  var sedan = {
         price:50,
         availability:2
      };
      
     if (sedan.availability >= 1)  {
          return "Yes, they are available"; 
        }
    else  {
         "No, they aren't available";
        } 
/* I don't think it's getting to this part of the code at all, but I don't know why 
I'm sure it's something small so that's why they're coming up undefined and only sedan is working*/

    var suv = {
        price:50,
        availability:0
      };
      
    if (suv.availability >= 1) {
          return "Yes, they are available";
        }
    else  { 
           "No, they aren't available";
        }
    
    var sports = {
        price:25,
        availability:0
     };
     
    if (sports.availability >= 1) {
          return "Yes, they are available";
        }
    else  { 
          return "No, they aren't available";
        }
}