import { Directive, ElementRef, HostListener, Input } from '@angular/core';
/*
图片不存在时使用默认的图片
用法：

<img [src]='product?.goodsImg' appErrorImg>
<img [src]="product?.act_img" appErrorImg="https://demo.com/xxx.png">

*/

@Directive({
  selector: '[appErrorImg]'
})
export class ErrorImgDirective {

  @Input() errorImagSrc: string;
  constructor(private elementRef: ElementRef) { }

  @HostListener('error', ['$event.target'])
  ImageError(event) {
    if (this.errorImagSrc) {
      event.src = this.errorImagSrc;
    } else {
      event.src = '../../../assets/xx.png';
    }
  }

}
