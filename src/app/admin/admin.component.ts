import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'hw-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  loginOut() {
    this.router.navigate(['login'], { replaceUrl: true }); // 点击浏览器的后退按钮，无法返回至登录页
  }

}
