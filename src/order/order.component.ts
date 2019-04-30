import { Component } from '@angular/core';

@Component({
templateUrl:"./order.component.html"
})
export class OrderComponent{
    restaurants= 
    [
        {
            "id": 101,
            "name": "Suruchi Hotel",
            "address":"Mumbai",
            
            "dishes": [

    
           {"dish":"Dosa"},
           {"dish":"Sandwitches"},
           {"dish":"Juice"}
      ],
            "rating": 3.2,
         
        }
    ];


   
    
}
