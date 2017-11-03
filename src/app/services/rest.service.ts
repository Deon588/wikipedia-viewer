import { Injectable } from '@angular/core';
import { Http, Response, } from '@angular/http';
import { Observable } from 'rxjs/Rx';


 
@Injectable()
export class RestService {
	API_URL: string = 'https://whispering-island-62110.herokuapp.com/https://en.wikipedia.org/w/api.php';

  constructor(private http: Http) { }
  
  public getRandomArticle() : Observable<any> {
	  let params = [
	  'action=query',
	  'generator=random',
	  'grnnamespace=0',
	  'prop=extracts',
	  'exlimit=max',
	  'format=json'
	  ];
	  let qParams = params.join('&');
		return this.http.get(`${this.API_URL}?${qParams}`)
		.map((res: Response) => res.json())
		.catch((err: any) => Observable.throw(err || 'server error'));
  }

}
