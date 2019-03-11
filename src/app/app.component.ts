import { Component } from '@angular/core';
import {generate} from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  lists = JSON.parse(localStorage.getItem('lists')) || [];
  newListText: string;
  generateId() {
      return `${Date.now()}-${Math.random()}`
  }
  saveModel() {
      localStorage.setItem('lists', JSON.stringify(this.lists));
  }
  addList() {
     const newName = this.newListText.trim();
     if (newName !== '') {
         const  newList = {
             id: this.generateId(),
             name: newName,
             tasks: []
         }
         this.lists.push(newList);
         this.saveModel();
         this.newListText = '';
     }
  }
  addTask(event) {
      this.lists.forEach(list => {
          if (list.id === event.listId) {
              const newTask = {
                  text: event.text,
                  id: this.generateId(),
                  listId: event.listId
              };
              list.tasks.push(newTask);
          }
      })
      this.saveModel();
  }
  removeList(id) {
      this.lists = this.lists.filter( list => list.id !== id);
      this.saveModel();
  };
  removeTask(taskObj) {
      this.lists = this.lists.map( list => {
          if (list.id === taskObj.listId) {
              list.tasks = list.tasks.filter(task => task.id !== taskObj.id);
          } return list;
      })
      this.saveModel();
  } removeAllLists() {
      if (confirm('Estás seguro de que quieres borrar todas las listas?')){
          this.lists = [];
          this.saveModel();
      }

    }
}
