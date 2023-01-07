import { Component } from '@angular/core';
import { Router } from '@angular/router';
import User from 'src/app/common/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-profiles',
  templateUrl: './profiles.component.html',
  styleUrls: ['./profiles.component.css']
})
export class ProfilesComponent {
  currentUser: User;

  constructor(private userService: UserService, private router: Router) {
    this.currentUser = JSON.parse(
      localStorage.getItem('currentUser') as string
    );
  }

  logOut() {
    this.userService.logOut().subscribe(() => {
      this.router.navigate(['/products']);
    });
  }
}
  
  


