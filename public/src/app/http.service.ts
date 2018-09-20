import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) { }

  getAllAuthors(){
    return this._http.get('/authors');
  }

  addNewAuthor(newTask){
    return this._http.post('/authors/new',newTask);
  }

  findAuthor(id){
    console.log("IN SERVICE",id)
    return this._http.get('/authors/show/'+ id);
  }

  updateAuthor(editAuthor){
    console.log("IN SERVICE EDIT")
    return this._http.put('/authors/update/'+editAuthor._id,editAuthor);
  }

  deleteAuthor(id){
    return this._http.delete('/authors/delete/'+id);
  }

}
