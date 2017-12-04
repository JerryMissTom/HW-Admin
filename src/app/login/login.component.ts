import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  login(event) {
    this.router.navigate(['admin'], { replaceUrl: true }); // 点击浏览器的后退按钮，无法返回至登录页
  }


  
  register() {

  }
}
