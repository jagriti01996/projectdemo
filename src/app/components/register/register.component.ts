import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {

  profiles:['Student', 'Professor', 'Alumina', 'Helper']
  ages:['0 - 30', '31 - 60', '61 - 100']
  constructor() { }

  ngOnInit() {}

}
