import { Component, OnInit } from '@angular/core';
import { Task } from 'src/app/Task';
import { TaskService } from '../../services/task/task.service';
@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css'],
})
export class TasksComponent implements OnInit {
  tasks: Task[] = [];
  constructor(private taskService: TaskService) {}

  ngOnInit() {
    this.taskService.getTask().subscribe((tasks) => {
      this.tasks = tasks;
    }); // toDo - Rxjs
  }

  onDelete(task: Task): void {
    this.taskService.deleteTask(task).subscribe((success: boolean) => {
      this.tasks = this.tasks.filter((x) => x.id !== task.id);
      console.log(success);
    });
  }
}
