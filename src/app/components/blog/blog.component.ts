import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { RegistrationService } from 'src/app/services/registration.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss'],
})
export class BlogComponent implements OnInit {

  submitted=false;

  ideaModel= new User('','',undefined ,'', undefined ,'','',false,'','');

  constructor(private _registrationService: RegistrationService) { }

  onSubmit(){
    this.submitted = true;
    this._registrationService.register(this.ideaModel)
    .subscribe(
      data => console.log('Success !', data),
      error => console.error('Error !',error)
    )
  }

  ngOnInit() {}

}
