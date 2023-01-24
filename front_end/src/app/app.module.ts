import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import { DashboardComponent } from './components/admin/dashboard/dashboard.component';
import { ItemListComponent } from './components/admin/item-list/item-list.component';
import { TransactionListComponent } from './components/admin/transaction-list/transaction-list.component';
import { UserListComponent } from './components/admin/user-list/user-list.component';
import { LoginComponent } from './components/user/login/login.component';
import { ProfilesComponent } from './components/user/profiles/profiles.component';
import { RegisterComponent } from './components/user/register/register.component';
import { AdminTemplateComponent } from './components/template/admin-template/admin-template.component';
import { UserTemplateComponent } from './components/template/user-template/user-template.component';
import { NotFoundComponent } from './components/error/not-found/not-found.component';
import { UnauthorizedComponent } from './components/error/unauthorized/unauthorized.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatSelectModule } from '@angular/material/select';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
import { Role } from './common/role';
import { HomeComponent } from './components/home/home.component';


const routes: Routes = [

  {
    path: 'profiles',
    component: ProfilesComponent,
    canActivate: [AuthGuard],
    data: { roles: [Role.ADMIN, Role.USER] },
  },

  {path: 'dashboard',
  component: DashboardComponent,
  canActivate: [AuthGuard],
  data: { roles: [Role.ADMIN] },
},
{
  path: 'user-list',
  component: UserListComponent,
  canActivate: [AuthGuard],
  data: { roles: [Role.ADMIN] },
},
{
  path: 'item-list',
  component: ItemListComponent,
  canActivate: [AuthGuard],
  data: { roles: [Role.ADMIN] },
},

{
  path: 'transaction-list',
  component: TransactionListComponent,
  canActivate: [AuthGuard],
  data: { roles: [Role.ADMIN] },
},

{ path: '404', component: NotFoundComponent },
{ path: '401', component: UnauthorizedComponent },
{ path: '', redirectTo: 'home', pathMatch: 'full' },
{ path: 'home', component: HomeComponent },
{ path: 'login', component: LoginComponent },
{ path: 'register', component: RegisterComponent },


  
   
  
];


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    ItemListComponent,
    TransactionListComponent,
    UserListComponent,
    LoginComponent,
    ProfilesComponent,
    RegisterComponent,
    AdminTemplateComponent,
    UserTemplateComponent,
    NotFoundComponent,
    UnauthorizedComponent,
    HomeComponent,
  
  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatSlideToggleModule,
    MatListModule,
    MatSidenavModule,
    MatIconModule,
    MatToolbarModule,
    MatCardModule,
    MatInputModule,
    MatTableModule,
    MatProgressBarModule,
    MatPaginatorModule,
    MatSortModule,
    MatSelectModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
