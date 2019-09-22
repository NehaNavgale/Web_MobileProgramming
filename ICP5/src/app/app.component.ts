import { Component } from '@angular/core';
import { FormGroup} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  items = []; // define list of pending items
  comItems = []; // define list of completed items

  // code to push new item
  submitNewItem(event) {
    const index: number = this.items.indexOf(event.taskName);
    if (index !== -1) {
      alert('Item already exists');
    } else {
      this.items.push(event.taskName);
    }
  }

  // code to complete item and push it into complete item list
  completeItem(item: string) {
    const index: number = this.items.indexOf(item);
    if (index !== -1) {
      this.items.splice(index, 1);
      this.comItems.push(item);
    }
  }

  // code to delete item either from completed or pending items list
  deleteItem(item: string) {
    let index: number = this.items.indexOf(item);
    if (index !== -1) {
      this.items.splice(index, 1);
    } else {
      index = this.comItems.indexOf(item);
      if (index !== -1) {
        this.comItems.splice(index, 1);
      }
    }
  }

}
