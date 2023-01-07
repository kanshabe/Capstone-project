import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import User from 'src/app/common/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent  implements OnInit {
  user: User = new User;

  errorMessage?: string;

  constructor(private userService: UserService, private router: Router) {}

  ngOnInit() {}

  register() {
    this.userService.register(this.user).subscribe({
      next: () => {
        this.router.navigate(['/login']);
      },
      error: () => {
        this.errorMessage = 'Username is already exist';
      },
      complete: () => {},
    });
  }

}{
  

}
