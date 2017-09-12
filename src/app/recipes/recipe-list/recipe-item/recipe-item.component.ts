import {Component, Input, OnInit} from '@angular/core';
import {Recipe} from '../../recipes.module';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
  @Input() recipesList: Recipe[];
  constructor() { }

  ngOnInit() {
  }

}
