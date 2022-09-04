import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { TaskService } from '../services/task.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  tasks;
  title = ""
  description = ""
  currentId;
  isEditing = false;
  constructor(private taskService: TaskService) { }

  ngOnInit(): void {
    this.getAllTasks()
  }

  getAllTasks() {
    this.taskService.getTasks()
      .subscribe(
        (res) => {
          if (res.success) {
            this.tasks = res.data
          }
        }
      )
  }
  deleteTaskById(id) {
    this.taskService.deleteTask(id)
      .subscribe((res) => {
        if (res.success) {
          this.getAllTasks()
        }
      })
  }
  saveTask() {
    const data = {
      title : this.title,
      description: this.description
    }
    this.taskService.addTasks(data)
      .subscribe((res) => {
        console.log(res)
        if (res.success) {
          this.getAllTasks()
          this.title = ''
          this.description = ''
        }
      })

  }
  action() {
    if(this.isEditing) {
      this.editTaskById()
    }else{
      this.saveTask()
    }
  }
  editOne(task) {
    this.currentId = task._id;
    this.title = task.title;
    this.description = task.description
    this.isEditing = true
  }

  editTaskById() {
    const data = {
      title : this.title,
      description: this.description
    }
    this.taskService.editTask(this.currentId, data)
         .subscribe((res) => {
          console.log(res)
          if(res.success) {
            this.title = ''
            this.description = ''
            this.currentId = null;
            this.isEditing = false;
            this.getAllTasks()
          }
         })
  }

}
