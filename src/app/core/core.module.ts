import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpService } from './http.service';
import { ErrorService } from './error.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  providers: [HttpService, ErrorService]
})
export class CoreModule { }
