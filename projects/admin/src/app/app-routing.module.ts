import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/components/login/login.component';
import { UsersComponent } from './manage-users/components/users/users.component';
import { AddTaskComponent } from './tasks-admin/components/add-task/add-task.component';
import { ListTasksComponent } from './tasks-admin/components/list-tasks/list-tasks.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'users', component: UsersComponent },
  { path: 'tasks', component: ListTasksComponent },
  { path: 'add-task', component: AddTaskComponent },
  { path: '**', redirectTo: 'login', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
