import { NearEarthObject } from './NearEarthObject';
import { Page } from './Page';
import { Links } from './Links';
export interface ResponseData {
    links: Links;
    page: Page;
    near_earth_objects: NearEarthObject[];
}
