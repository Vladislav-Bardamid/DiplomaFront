import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { ContentType } from '@angular/http/src/enums';

@Injectable()
export class HttpService {
    private headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    apiUrl = 'http://localhost:59323/api/';
    error: any;
    constructor(private http: HttpClient) { }

    getData(url: string) {
        return this.http.get(this.apiUrl + url);
    }

    getFile(id: number) {
        return this.http.get(this.apiUrl + 'file/' + id);
    }

    async getDataAsync(url: string) {
        return await this.http.get(this.apiUrl + url);
    }

    postData(url: string, body: any) {
        const headers = new HttpHeaders({'Content-Type': 'application/json'});
        return this.http.post(this.apiUrl + url, JSON.stringify(body), {headers: headers});
    }
}
