import { Subscription } from 'rxjs';
import { NavbarService } from './../../services/navbar.service';
import { Pagination } from './../../models/Pagination';
import { Links } from './../../models/Links';
import { environment } from './../../../environments/environment';
import { Page } from './../../models/Page';
import { NeoBrowseService } from './../../services/neo-browse.service';
import { ResponseData } from './../../models/ResponseData';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NearEarthObject } from 'src/app/models/NearEarthObject';

@Component({
  selector: 'app-asteroid-browse',
  templateUrl: './asteroid-browse.component.html',
  styleUrls: ['./asteroid-browse.component.css']
})
export class AsteroidBrowseComponent implements OnInit, OnDestroy {

  responeseData: ResponseData;
  apiKey: string;
  links: Links;
  page: Page;
  queryParams: string;
  nearEarthObject: NearEarthObject[];
  pagination: Pagination;
  isHazard: boolean;
  readonly = false;
  editStatusArray: boolean[][] = [];
  private initSubscription: Subscription;
  private onChangeSubscription: Subscription;
  constructor(private neoBrowseService: NeoBrowseService,
              private activatedRoute: ActivatedRoute,
              private navbarService: NavbarService, ) {
    this.page = { size: 20, total_elements: 0, total_pages: 0, number: 0 } as Page;
    this.apiKey = '';
    this.links = { next: '', prev: '', self: '' };
    this.nearEarthObject = [ ] as NearEarthObject[];
    this.responeseData = { links: this.links, page: this.page, near_earth_objects: this.nearEarthObject } as ResponseData;
    this.pagination = { prev: 0, current: 0, next: 0, totalElements: 0, totalPage: 0, pageSize: 0, path: '' } as Pagination;
    this.isHazard = false;
    this.editStatusArray[0] = [];
    for (let  i = 0; i < 20 ; i++ ) {
        this.editStatusArray[i] = [true, true, true, true, true, true, true];
        this.editStatusArray.push([]);
    }
   }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(par => this.page.number = + par.get('index') );
    this.queryParams = `?page=${this.page.number - 1}&size=${this.page.size}&api_key=${environment.apikey}`;
    this.initSubscription = this.neoBrowseService.neoBrowse(environment.asteroidBrowseBaseUrl + this.queryParams)
      .subscribe(response => {
        this.responeseData = response as ResponseData;
      });
    this.neoBrowseService.navPage.next(this.page.number);
    this.navbarService.show();
  }

  getPageData(): Pagination {
    this.pagination.current = this.page.number;
    this.pagination.next = this.page.number >= this.responeseData.page.total_pages
                                          ? this.responeseData.page.total_pages
                                          : this.page.number + 1;
    this.pagination.prev = this.page.number <= 1 ? 1 : this.page.number - 1;
    this.pagination.pageSize = this.responeseData.page.size;
    return this.pagination;
  }

  pageChanged(event): Pagination {
    this.page.number = event;
    this.queryParams = `?page=${this.page.number - 1}&size=${this.page.size}&api_key=${environment.apikey}`;
    this.onChangeSubscription = this.neoBrowseService.neoBrowse(environment.asteroidBrowseBaseUrl + this.queryParams)
      .subscribe(response => {
        this.responeseData = response as ResponseData;
      });
    this.neoBrowseService.navPage.next(this.page.number);
    return this.getPageData();
  }

  editadble(index: number, column: number) {
    this.editStatusArray[index][column] = !this.editStatusArray[index][column] ;
  }

  iterateEditStatusTable(index: number, column: number) {
    for (let  i = 0; i < column ; i++ ) {
      this.editStatusArray[index][i] = false;
    }
  }
  ngOnDestroy(): void {
    if (this.initSubscription !== undefined) {
    this.initSubscription.unsubscribe();
    }
    if (this.onChangeSubscription !== undefined) {
    this.onChangeSubscription.unsubscribe();
    }
  }
}
