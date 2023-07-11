import { Component } from '@angular/core';

import { ActivatedRoute } from "@angular/router"
import { UsersService } from '../../services/users.service';
import { UserModel } from 'src/app/models/user.model';
@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent {
  id: number;
  userData: UserModel;

  constructor(private route: ActivatedRoute, private userService: UsersService) {
  }

  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.id = params['id'];
      //log or {{}}
    })

    this.userService.getUserById(this.id).subscribe((response: any) => {
      //console.log(response);
      this.userData = {
        id: response.data.id,
        firstName: response.data.first_name,
        lastName: response.data.last_name,
        email: response.data.email,
        imageUrl: response.data.avatar
      }

    })


  }

}
