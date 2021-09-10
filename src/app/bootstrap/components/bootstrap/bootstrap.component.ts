import { Component } from "@angular/core";
import { FormGroup, FormControl } from "@angular/forms";
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';

@Component({
  selector:'app-bootstrap',
  templateUrl:'./bootstrap.component.html',
  styleUrls:['./bootstrap.component.css']
})

export class BootstrapComponent {
  public modalRef: BsModalRef
  constructor(private modalService:BsModalService){}
  reportForm = new FormGroup({
    repNo:        new FormControl(),
    reqNo:        new FormControl(),
    repStatus:    new FormControl(),
    statusDate:   new FormControl(),
    appraiser:    new FormControl(),
    reqBy:        new FormControl(),
    devName:      new FormControl(),
    repDate:      new FormControl(),
    reqDate:      new FormControl(),
    projName:     new FormControl(),
    propLocation: new FormControl(),
    province:     new FormControl(),
    city:         new FormControl(),
    scheme:       new FormControl(),
    purpose:      new FormControl()
  })


  handleButtonClick(event:any) {
    event.preventDefault();
    window.alert(`${event.target.name} button clicked!`);
  }

  handleInput(event:any) {
    console.log(event);
    
  }

  onSubmit(template: any) {
    console.log('submit');
    this.modalRef = this.modalService.show(template)
  }

}