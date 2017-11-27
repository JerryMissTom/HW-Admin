import { Injectable } from '@angular/core';

@Injectable()
export class ErrorService {

  constructor() { }

  public handleError(errorCode) {
    const errorMessage = this.getErrorMessage(errorCode);
    layer.msg(errorMessage);
  }

  private getErrorMessage(errorCode: number): string {
    let errorMessage: string;
    switch (errorCode) {
      case 500:
        errorMessage = '服务器开小差了';
        break;
      default:
        errorMessage = '网络异常';
    }
    return errorMessage;
  }
}
