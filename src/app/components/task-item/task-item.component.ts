import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Task } from 'src/app/Task';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css'],
})
export class TaskItemComponent implements OnInit {
  @Input() mytask: Task;
  @Output() callBackDelete: EventEmitter<Task> = new EventEmitter();
  @Output() callBackToogleReminder: EventEmitter<Task> = new EventEmitter();
  faTimes = faTimes;
  constructor() {}

  ngOnInit(): void {}

  onDelete(task: Task): void {
    this.callBackDelete.emit(task);
  }

  onToggleReminder(task: Task): void {
    this.callBackToogleReminder.emit(task);
  }
}
