import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { RegistrationService } from 'src/app/services/registration.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {

  profiles=['Student', 'Professor', 'Alumina', 'Helper'];
  ages=['0 - 30', '31 - 60', '61 - 100'];
  submitted = false;

  userModel =  new User('','',undefined ,'', undefined ,'','',false,'','');

  constructor(private _registrationService: RegistrationService) { }

  onSubmit(){
    this.submitted = true;
    this._registrationService.register(this.userModel)
    .subscribe(
      data => console.log('Success !', data),
      error => console.error('Error !',error)
    )
  }

  ngOnInit() {}

}
