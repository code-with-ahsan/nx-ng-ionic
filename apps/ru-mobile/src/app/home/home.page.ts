import { Component, OnInit } from '@angular/core';
import { IUser, RandomuserService } from '@nx-ng-ionic/random-user';
import { Observable } from 'rxjs/internal/Observable';

@Component({
  selector: 'nx-ng-ionic-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  users$!: Observable<IUser[]>;
  constructor(private ruService: RandomuserService) {}

  ngOnInit(): void {
    this.users$ = this.ruService.getRandomUsers();
  }
}
