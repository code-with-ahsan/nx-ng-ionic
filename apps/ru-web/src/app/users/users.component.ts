import { Component, OnInit } from '@angular/core';
import { IUser, RandomuserService } from '@nx-ng-ionic/random-user';
import { Observable } from 'rxjs';

@Component({
  selector: 'ruw-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class UsersComponent implements OnInit {
  users$!: Observable<IUser[]>;
  constructor(private ruService: RandomuserService) {}

  ngOnInit(): void {
    this.users$ = this.ruService.getRandomUsers();
  }
}
