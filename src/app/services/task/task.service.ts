import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { TASKS } from '../../mock-tasks';
import { Task } from '../../Task';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  apiUrl = 'http://localhost:1982/tasks';
  constructor(private http: HttpClient) {}
  getTask(): Observable<Task[]> {
    return this.http.get<Task[]>(this.apiUrl);
    /*const tasks = of(TASKS);
    return tasks;*/
  }

  deleteTask(task: Task): Observable<boolean> {
    const deleteUrl = `${this.apiUrl}/${task.id}`;
    return this.http.delete<boolean>(deleteUrl);
  }

  toggleReminder(task: Task): Observable<void> {
    const toggleReminderUrl = `${this.apiUrl}`;
    return this.http.put<void>(toggleReminderUrl, task);
  }
}
