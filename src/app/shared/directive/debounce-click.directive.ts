import { Directive, EventEmitter, HostListener, OnInit, Output, OnDestroy, Input } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Subscription } from 'rxjs/Subscription';
import 'rxjs/add/operator/debounceTime';

/*
  功能：该指令用于处理短时间内的多次点击事件，防止重复的操作
  用法：
  <button hwDebounceClick (debounceClick)="log($event)" [debounceTime]="300">Debounced Click</button>
*/

@Directive({
  selector: '[hwDebounceClick]'
})
export class DebounceClickDirective implements OnInit, OnDestroy {

  @Input() debounceTime = 500;
  @Output() debounceClick = new EventEmitter();
  private clicks = new Subject<any>();
  private subscription: Subscription;

  constructor() { }


  // 借助 rxjs 中的 debounceTime 操作符进行处理
  ngOnInit() {
    this.subscription = this.clicks
      .debounceTime(this.debounceTime)
      .subscribe(e => this.debounceClick.emit(e));
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();  // 取消订阅，防止内存泄漏
  }

  // 监听宿主元素的点击事件,阻止浏览器的默认行为和事件冒泡
  @HostListener('click', ['$event'])
  clickEvent(event: MouseEvent) {
    event.preventDefault();
    event.stopPropagation();
    this.clicks.next(event);
  }

}
