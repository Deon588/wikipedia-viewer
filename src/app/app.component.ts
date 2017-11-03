import { Component, OnInit } from '@angular/core';

import { RestService } from './services/rest.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
	title: string = '';
	body: string = '';
	searchTerm: string = '';
	
	constructor(private restService: RestService) {}
	
	getRandomArticle() {
		this.restService.getRandomArticle()
		.subscribe(
			(res) => {
				console.log(res);
				let arr = Object.keys(res.query.pages)
				this.title = res.query.pages[arr[0]].title;
				this.body = res.query.pages[arr[0]].extract;
				this.searchTerm = '';
				console.log(this.body);
			}, (err) => {
				console.log(err);
			});
	}
	
	getArticle() {}
	
	
	ngOnInit() {
		
	}
  

  
}
