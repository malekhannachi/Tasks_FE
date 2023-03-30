import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { TasksService } from '../../services/tasks.service';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css'],
})
export class AddTaskComponent implements OnInit {
  taskForm!: FormGroup;
  loading: boolean = false;
  users: any[] = [{ name: 'malek', id: '64246f33be3742ab78455e51' }];

  constructor(
    private fb: FormBuilder,
    private service: TasksService,
    private router: Router
  ) {
    this.taskForm = fb.group({
      title: new FormControl('', Validators.required),
      user: new FormControl('', Validators.required),
      image: new FormControl('', Validators.required),
      date: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required),
    });
  }

  ngOnInit(): void {}
  SelectImage(event: any) {
    let value = event.target.files[0];

    this.taskForm.get('image')?.setValue(value);
  }

  onSubmit() {
    if (this.taskForm.invalid) {
      return;
    }

    let data = this.taskForm.value;
    console.log(data);

    let formData = new FormData();
    formData.append('title', data['title']);
    formData.append('userId', data['user']);
    formData.append('image', data['image']);
    formData.append('description', data['description']);
    formData.append('deadline', data['date']);

    formData.forEach((value, key) => {
      console.log(key + ' ' + value);
    });
    this.loading = true;
    this.service.addTask(formData).subscribe(
      (res) => {
        console.log(res);
        this.router.navigate(['/tasks']);
        this.loading = false;
      },
      (error) => {
        console.log(error);
        this.loading = false;
      }
    );
  }
}
