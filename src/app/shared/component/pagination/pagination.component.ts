import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';

/*
功能：分页组件
用法：
html：<hw-pagination [currentPage]="currentPage" [totalPage]="totalPage" (pageChange)="changePage($event)"> </hw-pagination>
ts：   private changePage(event){
        this.currentPage=event;
      }
注意：currentPage 从0开始
*/

@Component({
  selector: 'hw-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent implements OnInit {

  @Input() totalPage: number;
  @Input() currentPage: number;
  @Output() pageChange = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {
  }

  changePage(pageNum) {
    this.pageChange.emit(pageNum);
  }

  goPrevious(pageNum) {
    if (pageNum >= 1) {
      this.changePage(pageNum - 1);
    }
  }

  goNext(pageNum) {
    if (pageNum <= this.totalPage - 2) {
      this.changePage(pageNum + 1);
    }
  }

}
