import { JsonPipe } from '@angular/common';
import { Component, model, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-test-object-update-in-forms',
  standalone: true,
  imports: [JsonPipe, FormsModule],
  templateUrl: './test-object-update-in-forms.component.html',
  styleUrl: './test-object-update-in-forms.component.scss'
})
export class TestObjectUpdateInFormsComponent implements OnInit {



  nameObject = model(<any>{});
  inp : any = {};
  constructor() {
   
  }
  ngOnInit(): void {

    this.nameObject.set({name: 'bob', city:'dallas'});


    // play with these two lines, enabling one and disabling the other.
    this.inp = this.nameObject(); // this ties them together. think a reference assign. makes coding easier
    // this.inp = {... this.nameObject()} // this COPIES the values from one to the other. they are separate. not reference.
                                       // useful for forms


    console.log(this.nameObject());
    // alert('1');

    console.log('name: ', this.nameObject().name)
    // alert(2);

    this.nameObject().name = 'mary';

    console.log('step 2', this.nameObject())



  }

  setInpToModel() {
    this.nameObject.set({... this.inp})
  }

}
