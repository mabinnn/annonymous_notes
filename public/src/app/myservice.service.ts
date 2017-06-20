import { Injectable } from '@angular/core';
import { Http } from  '@angular/http';
import 'rxjs';

@Injectable()
export class MyserviceService {



  constructor(private _http: Http) { }

  getNotes(){
    console.log("This is the getNotes()")
    return this._http.get('/allnotes')
    .map(data => data.json() )
    .toPromise();
  }

  create(note){
    console.log("the note in the service is a type of: ", typeof(note), note);
    
    return this._http.post('/addnew', note)
    .map(data => data.json() )
    .toPromise();
  }





}
