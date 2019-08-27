import { NavbarService } from './../../../services/navbar.service';
import { NeoBrowseService } from './../../../services/neo-browse.service';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Input()
  current: number;
  constructor(private neoBrowseService: NeoBrowseService, public navbarService: NavbarService) { this.current = 0; }

  ngOnInit() {
    this.neoBrowseService.navPage.subscribe(data => {
      this.current = data;
    });
  }
}
