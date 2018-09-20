import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  editAuthor: any;
  errors = []
  selectedId : any;

  constructor(private _httpService: HttpService, private _route: ActivatedRoute,private _router: Router) {
    this.editAuthor = {name:"",quote:""}
  }

  ngOnInit() {
    this._route.params.subscribe((params: Params) => {
        console.log("SELECTED ID",params['id'])
        this.selectedId = params['id'];
        this.getSelectedAuthor(this.selectedId);
    });

  }

  goHome() {
    this._router.navigate(['/']);
  }


  onSubmit(){
    console.log("IN COMPONENT EDIT")
    let observable = this._httpService.updateAuthor(this.editAuthor);
    observable.subscribe(info => {
      if (info['status'] == true){
        console.log("updated AUTHOR INFO", info);
        this.editAuthor = info['author']
        this.goHome();
      }else{
        console.log("ERROR WHEN Updating AUTHOR",info);
        this.errors = info['messages']
      }
    })
  }

  getSelectedAuthor(id){
    console.log("SELECTED ID 2",id);
    let observable = this._httpService.findAuthor(id);
    observable.subscribe(info => {
      if (info['status'] == true){
        console.log("Found AUTHOR INFO", info);
        this.editAuthor = info['author'];
      }else{
        console.log("Cannot find author");
        this.errors = info['messages']
      }
    })

  }

}
