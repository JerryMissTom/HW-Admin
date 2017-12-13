import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaginationComponent } from './component/pagination/pagination.component';
import { DebounceClickDirective } from './directive/debounce-click.directive';
import { ErrorImgDirective } from './directive/error-img.directive';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [PaginationComponent, DebounceClickDirective, ErrorImgDirective],
  exports: [PaginationComponent, DebounceClickDirective]
})
export class SharedModule { }
