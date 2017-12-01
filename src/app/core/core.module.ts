import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HttpService } from './http.service';
import { ErrorService } from './error.service';
import { BroadcastService } from './broadcast.service';
import { UtilsService } from './utils.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  providers: [HttpService, ErrorService, BroadcastService, UtilsService]
})
export class CoreModule { }
