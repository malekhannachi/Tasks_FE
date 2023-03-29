import { Component } from '@angular/core';
import { TasksService } from '../../services/tasks.service';

@Component({
  selector: 'app-list-tasks',
  templateUrl: './list-tasks.component.html',
  styleUrls: ['./list-tasks.component.css'],
})
export class ListTasksComponent {
  constructor(private service: TasksService) {
    this.service.getAllTasks().subscribe((res) => {
      console.log(res);
    });
  }
}
