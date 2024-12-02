import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-todo',
  imports: [
    FormsModule,
    CommonModule
  ],
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.css'
})
export class TodoComponent {
  todoLists: string[] = [
    "Learn Angular 17",
    "Study Cyber Security Lecture 4",
    "Study SAAD Lab 3"
  ];
  newTask: string = "";
  addNewTask(): void {
    if (this.newTask.trim() === "") {
      return;
    }
    this.todoLists.push(this.newTask);
    console.log(this.todoLists);
  }
  deleteTask(id: number): void {
    this.todoLists.splice(id, 1);
  }
}
