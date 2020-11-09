import { Component, OnInit } from '@angular/core';
import {Recipe } from '../recipes.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe [] = [new Recipe ('A test Recipe', 'Test description', 'https://www.mtpr.org/sites/kufm/files/styles/x_large/public/201703/Stuffed-Cabbage_Steven-Depolo_CC-BY-20.jpg')
,new Recipe ('A  Second test Recipe', 'Test  description two', 'https://www.mtpr.org/sites/kufm/files/styles/x_large/public/201703/Stuffed-Cabbage_Steven-Depolo_CC-BY-20.jpg')
];
  constructor() { 
  }
  ngOnInit(){

  }

}
