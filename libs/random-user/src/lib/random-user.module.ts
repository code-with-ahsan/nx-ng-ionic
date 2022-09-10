import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RandomuserService } from './randomuser.service';

@NgModule({
  imports: [CommonModule, HttpClientModule],
})
export class RandomUserModule {
  static forRoot(): ModuleWithProviders<RandomUserModule> {
    return {
      ngModule: RandomUserModule,
      providers: [RandomuserService],
    };
  }
}
