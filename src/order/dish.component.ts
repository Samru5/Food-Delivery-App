import { Component, OnInit } from '@angular/core';
import { Dish } from './dish';
import { DishService } from './dish.service';
import { ActivatedRoute } from '@angular/router';

@Component({
    templateUrl:"./dish.component.html"
    })
export class DishComponent implements OnInit{

    dishes:Dish[];

    constructor(private dishService: DishService,
        private route: ActivatedRoute) { }

      
 



        ngOnInit(): void {
  
            // this.route.paramMap.subscribe((map) => {
            //     let id = Number(map.get("dishId"));
            //     console.log(id);
     
            //     this.dishService.findDishById(id).subscribe((data) => {
            //         this.dishes = data;
            //         console.log(data);
            //     })
     
            // })

            this.dishService.findAllDishes().subscribe(data=>{
                console.log(data);
                this.dishes=data;

            },err=>{
                console.log(err);
            })
        
   
   
   }
   }