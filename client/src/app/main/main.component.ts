import { Component, OnInit } from '@angular/core';
import { TaskService } from '../services/task.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  tasks;
  name = 'aminsadsdsdssd'
  constructor(private taskService:TaskService) { }

  ngOnInit(): void {
    this.getAllTasks()
  }

  getAllTasks() {
    this.taskService.getTasks()
        .subscribe(
          (res) => {
            if(res.success) {
              this.tasks = res.data
            }
          }
        )
  }

}
