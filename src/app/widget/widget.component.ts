import { NeoBrowseService } from './../services/neo-browse.service';
import { NavbarService } from './../services/navbar.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-widget',
  templateUrl: './widget.component.html',
  styleUrls: ['./widget.component.css']
})
export class WidgetComponent implements OnInit {

  constructor(private navbarService: NavbarService, private neoBrowseService: NeoBrowseService) { }

  ngOnInit() {
    this.navbarService.show();
    this.neoBrowseService.navPage.next(1);
  }

}
