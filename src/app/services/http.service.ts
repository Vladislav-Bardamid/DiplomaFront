import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class HttpService {
    private headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    apiUrl = 'http://localhost:59323/api/';
    error: any;
    constructor(private http: HttpClient) { }

    getViewModel(url: string) {
        return this.http.get(this.apiUrl + url);
    }

    postModel(url: string, body: any) {
        const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
        return this.http.post(this.apiUrl + url, JSON.stringify(body), { headers: headers }).subscribe(
            () => window.location.reload(),
            error => console.log(error));
    }
}
