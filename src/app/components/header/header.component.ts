import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {

  @Input() pageTitle :string;
  @Input() isNotHome :boolean;
  @Input() sideMenu :boolean;

  constructor(private router:Router) { }

  goAbout(){
    this.router.navigate(['/about']);
  }
  
  ngOnInit() {}

}
