import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '@auth0/auth0-angular';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'WhizCare';
  email:any;
  name:any;
  name1:string="doctor";
  name2:string="nurse";
  name3:string="admin";
  docname:string|any="";
  docmail:string|any="";
  status:string="login";
  constructor(public auth: AuthService,private router: Router) {}
  ngOnInit(): void {
    this.auth.user$.subscribe((profile)=> {
      this.email=profile?.email;
      this.name=profile?.name;
      this.docmail=profile?.email;
      this.docname=profile?.name;
      
      if(this.email.includes(this.name1))
      {
        this.router.navigate(['/doctor'],{state:{email:this.docmail,dname:this.docname}})
      }
      if(this.email.includes(this.name2))
      {
        this.router.navigate(['/nurse'],{replaceUrl:true})
      }
      if(this.email.includes(this.name3))
      {
        this.router.navigate(['/admin'],{replaceUrl:true}) 
      }
  })
};

  loginWithRedirect(){
    this.auth.loginWithRedirect();
  }

  logout(){
    sessionStorage.clear();
    this.auth.logout();
  }
  new(){
    this.router.navigate(['/landed'])
  }

  loggedIn: boolean = false;

  isLoggedIn() {
    return this.loggedIn;
}

PatientLogin(){
  this.status="logout";
  this.router.navigate(['/plogin']);
}

logoutpatient(){
  this.status="login";
  this.router.navigate(['/']);
}
logoutpatient1(){
  this.status="ploggedin";
  this.router.navigate(['/']);
}
}
