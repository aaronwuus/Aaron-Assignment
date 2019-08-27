export interface Pagination {
    prev: number;
    current: number;
    next: number;
    totalPage: number;
    pageSize: number;
    totalElements: number;
    path: string;
}
