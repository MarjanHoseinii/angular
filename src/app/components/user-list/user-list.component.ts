import { Component } from '@angular/core';
import { UsersService } from "../../services/users.service";
import { Router } from '@angular/router';
import { UserModel } from '../../models/user.model';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent {
  userList: UserModel[] = [
  ]

  constructor(private userService: UsersService, private router: Router) { }

  ngOnInit() {


    this.userService.getUsersList().subscribe((resopnse: any) => {

      console.log(resopnse.data);
      this.userList = resopnse.data.map((user: any) => {

        return {
          id: user.id,
          firstName: user.first_name,
          lastName: user.last_name,
          email: user.email,
          imageUrl: user.avatar
        }

      });

    });

  }


  getUserdetails(userId: number) {
    //console.log("clicked!");


    return this.router.navigate(['/user-detail', userId]);

      
  }

}
