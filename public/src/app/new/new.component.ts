import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';



@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {
  newAuthor : any;
  messages = [];


  constructor(private _httpService: HttpService,private _route: ActivatedRoute,private _router: Router)
  { this.newAuthor = {name:"",quote:""}
  }

  ngOnInit() {
  }

  goHome() {
    this._router.navigate(['/']);
  }

  onSubmit(){
    let observable = this._httpService.addNewAuthor(this.newAuthor);
    observable.subscribe(info => {
      if (info['status'] == true){
        this.goHome();
      }else{
        console.log("ERROR WHEN CREATING AUTHOR",info);
        this.messages = info['messages']
      }
    })
  }
}
