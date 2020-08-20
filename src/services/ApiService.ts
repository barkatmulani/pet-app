import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable()
export class ApiService {
    private url = 'http://agl-developer-test.azurewebsites.net/people.json';

    constructor(protected http: HttpClient) {
    }

    public getPeersonAndPets() : Observable<any> {
        return this.http.get(this.url);
    }
}
