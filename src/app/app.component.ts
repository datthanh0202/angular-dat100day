import { EventHandlerVars } from '@angular/compiler/src/compiler_util/expression_converter';
import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  //name = 'Angular ' + VERSION.major;
  // DATA BINDING 
  //InputType = 'text';
  
  //EVENT BINDING
  //handler(event){
  //console.log('clicked',event);
//};
  //user = {
    //name: 'Dat',
    //age: 32
  //};
  name = 'Angular' + VERSION.major;
  show = false;
  user = {
    name : 'John Snow', 
    age : 25
  }

}
