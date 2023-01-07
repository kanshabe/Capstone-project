import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import {HttpClientModule} from '@angular/common/http';
import { ProductService } from './services/product.service';

import { Routes, RouterModule} from '@angular/router';
import { ProductCategoryMenuComponent } from './components/product-category-menu/product-category-menu.component';
import { SearchComponent } from './components/search/search.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CartStatusComponent } from './components/cart-status/cart-status.component';
import { CartDetailsComponent } from './components/cart-details/cart-details.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UnauthorizedComponent } from './components/error/unauthorized/unauthorized.component';
import { NotFoundComponent } from './components/error/not-found/not-found.component';
import { AuthGuard } from './guards/auth.guard';
import { Role } from './common/role';
import { LoginComponent } from './components/user/login/login.component';
import { RegisterComponent } from './components/user/register/register.component';
import { ProfilesComponent } from './components/user/profiles/profiles.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DashboardComponent } from './components/admin/dashboard/dashboard.component';
import { UserListComponent } from './components/admin/user-list/user-list.component';
import { TransactionListComponent } from './components/admin/transaction-list/transaction-list.component';
import { ItemListComponent } from './components/admin/item-list/item-list.component';
import { UserTemplateComponent } from './components/template/user-template/user-template.component';
import { AdminTemplateComponent } from './components/template/admin-template/admin-template.component';





const routes: Routes = [
  { path: '404', component: NotFoundComponent },
  { path: '401', component: UnauthorizedComponent },

  {
    path: 'checkout',
    component: CheckoutComponent,
    canActivate: [AuthGuard],
    data: { roles: [Role.ADMIN, Role.USER] },
  },
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

  {path: 'cart-details', component: CartDetailsComponent},
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  {path: 'search/:keyword', component: ProductListComponent},
  {path: 'category/:id', component: ProductListComponent},
  {path: 'category', component: ProductListComponent},
  {path: 'products', component: ProductListComponent},
  {path: '', redirectTo: '/products', pathMatch: 'full'},
  { path: '**', component: NotFoundComponent },
  
   
  
];

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ProductCategoryMenuComponent,
    SearchComponent,
    ProductDetailsComponent,
    CartStatusComponent,
    CartDetailsComponent,
    CheckoutComponent,
    UnauthorizedComponent,
    NotFoundComponent,
    LoginComponent,
    ProfilesComponent,
    RegisterComponent,
    DashboardComponent,
    UserListComponent,
    TransactionListComponent,
    ItemListComponent,
    UserTemplateComponent,
    AdminTemplateComponent,
      
    
  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    HttpClientModule,
    NgbModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule
  
  
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
