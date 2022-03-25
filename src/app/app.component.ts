import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
/*@Component({
  selector: 'app-item',
  templateUrl: './item.component.ts',
  styleUrls: ['./item.component.css']
})*/
export class AppComponent {
  title = 'todo';
  filter: 'all' | 'active' | 'done' = 'all';

  allItems = [
    {description: 'eat', done: true},
    {description: 'sleep', done: false},
    {description: 'play', done: false},
    {description: 'laugh', done: false},
  ];

  get items(){
    if (this.filter === 'all'){
      return this.allItems;
    }
    return this.allItems.filter(item => this.filter === 'done' ? item.done : !item.done);
  }
  
  //instead of unshift() which adds a new item at the beginnig of the list, 
  //push(), that adds a new item at the end of the list, can be used too
  addItem(description: string) {
    this.allItems.unshift({
      description,
      done: false
    });
  } 

  remove(item){
    this.allItems.splice(this.allItems.indexOf(item), 1);
  }
}
