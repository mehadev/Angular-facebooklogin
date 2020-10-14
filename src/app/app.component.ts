import { Component } from '@angular/core';
import { FacebookLoginProvider, SocialAuthService,GoogleLoginProvider } from "angularx-social-login";
import { SocialUser } from "angularx-social-login";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'facebooklogin';
  user: SocialUser;
  loggedIn: boolean;

  constructor(private authService: SocialAuthService) { }
 
  signInWithGoogle(): void {
    console.log("google");
    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID);
  }
 
  signOut(): void {
    this.authService.signOut();
  }
  ngOnInit() {
    console.log("HI")
    this.authService.authState.subscribe((user) => {
      this.user = user;
      console.log("hi")
      console.log(user)
      this.loggedIn = (user != null);
      console.log(this.user)
    });
    console.log(this.user)
  }
  
  
}
