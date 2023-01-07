import { Component } from '@angular/core';
import { Router } from '@angular/router';
import User from 'src/app/common/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  user: User = new User();
  errorMessage?: string;

  constructor(private userService: UserService, private router: Router) {}

  ngOnInit() {}

  login() {
    this.userService.login(this.user).subscribe({
      next: () => {
        this.router.navigate(['/profiles']);
      },
      error: () => {
        this.errorMessage = 'Username or password is incorrect.';
      },
      complete: () => {},
    });
  }

}
