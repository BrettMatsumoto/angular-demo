import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  users: {
    username: string,
    age: number
  }[] = [
    {
      username: 'brett',
      age: 17,
  },
  {
    username: 'frank',
    age: 47,
  },
  {
    username: 'luke',
    age: 55,
  },
]

usernames: string[] = ['brett', 'frank', 'luke'];

currentUser: string | object = 'brett'

green: string = 'blue';

  constructor() { }

  ngOnInit() {
  }

}
