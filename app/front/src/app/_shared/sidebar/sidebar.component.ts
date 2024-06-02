import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/_services/auth.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  logged = false;

  constructor(private auth: AuthService, private router : Router) { }

  ngOnInit(): void {
    this.logged = this.auth.isLogged();
  }

  /**
   * Méthode de déconnexion
   */
  logout(){
    this.auth.logout();
    this.logged = this.auth.isLogged();
    this.router.navigateByUrl('');
  }

}
