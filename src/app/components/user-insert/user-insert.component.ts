import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UsersService } from '../../services/users.service'
import { UserModel } from 'src/app/models/user.model';




@Component({
  selector: 'app-user-insert',
  templateUrl: './user-insert.component.html',
  styleUrls: ['./user-insert.component.css']
})
export class UserInsertComponent {
  @ViewChild("userDataForm") userDataForm: NgForm;
  isSubmit: boolean = false;
  isSuccess: boolean = false;
  userData: UserModel;
  reponseData: { id: string, name: string, job: string, date: string };

  constructor(private userService: UsersService) {

  }

  onSubmit() {

    if (this.userDataForm.valid) {
      this.isSubmit = true;
      this.userData = {
        name: this.userDataForm.controls['firstName'].value + ' ' + this.userDataForm.controls['lastName'].value,
        job: this.userDataForm.controls['job'].value
      }
      //
      this.userService.postInsertUser(this.userData).subscribe({
        next: (response: any) => {
          
          this.reponseData = {
            id: response.id,
            name: response.name,
            job: response.job,
            date: response.createdAt
          }
      
          
          this.isSuccess = true;
        },
        complete: () => {

        },
        error: () => {
          console.log("Error");

        }
      });
    }
  }
}
