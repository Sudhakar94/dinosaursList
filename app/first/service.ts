import {Injectable} from '@angular/core';
import {Http, Response, Headers, RequestOptions} from "@angular/http";
import {Observable} from 'rxjs/Rx';

@Injectable()
export class itemService {

    constructor(private http:Http) {
    }

    // Uses http.get() to load a single JSON file
    getList() {
        return this.http.get('/app/first/data.json').map((res:Response) => res.json());
    }
}
