import { Injectable } from "@angular/core";

import { Http, Response, Headers, RequestOptions } from "@angular/http";
import { Observable } from "rxjs/Rx";
import { Minions } from "../components/minions";

@Injectable()
export class SaltService {

  constructor(private http: Http) {
  }

  getMinions(): Observable<Minions[]> {
    const API_URL = "http://172.20.23.6:8000/run";
    const headers = new Headers({ "Content-Type": "application/json" });
    const options = new RequestOptions({ headers: headers });
    const body = JSON.stringify({
      client: "local",
      username: "usjc",
      password: "c0ck#U",
      tgt: "*",
      fun: "test.ping",
      eauth: "pam"
    });
    return this.http
      .post(API_URL, body, options)
      .map((response: Response) => {
        return <Minions[]>response.json();
      })
      .catch(this.handleError);
  }
  private handleError(error: Response) {
    return Observable.throw(error.statusText);
  }
}
