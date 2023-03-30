import { Component, OnInit } from '@angular/core';
import { TasksService } from '../../services/tasks.service';

@Component({
  selector: 'app-list-tasks',
  templateUrl: './list-tasks.component.html',
  styleUrls: ['./list-tasks.component.css'],
})
export class ListTasksComponent implements OnInit {
  tasks: any[] = [];

  constructor(private service: TasksService) {}
  ngOnInit(): void {
    this.getAllTasks();
  }

  getAllTasks() {
    this.service.getAllTasks().subscribe((res: any) => {
      console.log(res);
      this.tasks = this.mappingData(res.tasks);
    });
  }

  mappingData(data: any[]) {
    let newTasks = this.tasks;
    newTasks = data.map((item) => {
      return {
        // title: item.title,
        // deadline: item.deadline,
        // image: item.image,
        // status: item.status,
        ...item,
        user: item.userId.username,
      };
    });
    return newTasks;
  }

  deleteTask(item: any) {
    this.service.deleteTask(item._id).subscribe((result) => {
      console.log(result);
      let index = this.tasks.indexOf(item);

      this.tasks.splice(index, 1);
    });
  }
}
