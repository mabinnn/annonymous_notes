import { Component } from '@angular/core';
import { MyserviceService } from  './myservice.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private _ser: MyserviceService){}
  
  //storing all entried from database in this array
  allnotes : Array<object>

  // This is how we create the notes object to pass in the database.
  mynote = {
    biography: ""
  }
  

  onSubmit(form){
    console.log("Add note clicked");

    // // //Do an if check if the form is valid before we insert into the database
    if(!form.valid){
      console.log("Form invalid")
      return;
    }

     // If form is valid, we can start loggin into the database.
        this._ser.create(this.mynote)
        .then( data => {
          console.log("The object: ", data)
          this.showAll();
          this.mynote = {
            biography: ""
          }
        })
        .catch( err => {
          console.log("Error in submitting!")
        })   
        console.log("Made it to the end of onSubmit()")
        form.resetForm();          

    }


  showAll(){
    console.log("We are at show all in app.component.ts")
    this._ser.getNotes()
    .then( info => {
      console.log("this is the INFO: ", info)
      this.allnotes = info
    })
    .catch(err => {
      console.log("ERROR in showAll()", err)
    })
  }

  ngOnInit(){
    this.showAll()
  }

}

