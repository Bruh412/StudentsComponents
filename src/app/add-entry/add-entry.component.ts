import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-add-entry',
  templateUrl: './add-entry.component.html',
  styleUrls: ['./add-entry.component.css']
})
export class AddEntryComponent implements OnInit {
  @Output() sendArr = new EventEmitter<any>();
  @Input() student;
  studentColl = [];
  constructor() { }

  ngOnInit() {
  }

  addData(){
    this.studentColl.push(this.student);
    this.sendArr.emit(this.studentColl);
  }

  getArr(){
    return this.studentColl;
  }

}
