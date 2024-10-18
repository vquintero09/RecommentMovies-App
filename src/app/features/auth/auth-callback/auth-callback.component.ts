import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-auth-callback',
  template: `<p>Iniciando sesión...{{code}}</p>`
})

export class AuthCallbackComponent implements OnInit {
  private readonly _router = inject(Router);
  private readonly _HTTP = inject(HttpClient);
  private readonly _route = inject(ActivatedRoute);

  code:any;

  constructor() { }

  ngOnInit() {
    this._route.queryParams.subscribe((params) => {
      const autorizathionCode = params['code'];
      this.code = autorizathionCode;

      if(autorizathionCode) {
        this._HTTP
        .post('http://localhost:3000/auth/google-token', {code: autorizathionCode})
        .subscribe((response: any) => {
          const a = document.cookie = `access_token=${response.access_token}; path=/`;
          console.log(a);
          
          this._router.navigateByUrl('/')
        });
      }
    })
  }
}