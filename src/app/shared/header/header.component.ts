import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  collapsed = false;
  name: any;
  tier: any;
  pointsBalance: any;
  toggleCollapsed(): void {
    this.collapsed = !this.collapsed;
  }

  constructor() {}

  ngOnInit(): void {}


}
