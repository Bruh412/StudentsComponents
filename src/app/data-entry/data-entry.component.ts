import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-data-entry',
  templateUrl: './data-entry.component.html',
  styleUrls: ['./data-entry.component.css']
})
export class DataEntryComponent implements OnInit {
  @Output() addentry = new EventEmitter<any>();
  @Output() printentry = new EventEmitter<any>();
  @Output() sendData = new EventEmitter<any>();
  student;
  studid: number;
  studfname: string;
  studlname: string;
  studprog: string;
  studyr: number;
  constructor() { }
  

  ngOnInit() {
  }


  private check_RE(value:any, pattern:RegExp): boolean{
    if (pattern.test(value))
      return true;
    else
      return false;
  }

  private clearVal(){
    this.studid=null; 
    this.studfname=null; 
    this.studlname=null; 
    this.studprog=null;
    this.studyr=null;  
  }

  getstudent(){
    const stringpattern = /^[A-z\s]+$/;
    const intpattern = /^[0-9]+$/;
    const yrpattern = /^[0-5]$/;

        if (this.check_RE(this.studid, intpattern) &&
          this.check_RE(this.studfname, stringpattern) &&
          this.check_RE(this.studlname, stringpattern) &&
          this.check_RE(this.studprog, stringpattern) &&
          this.check_RE(this.studyr, yrpattern))
          {
            this.student={
              id: this.studid,
              fname: this.studfname,
              lname: this.studlname,
              prog: this.studprog,
              yr: this.studyr
            }
            this.clearVal();
            this.sendData.emit(this.student);
            return this.student;
          }
        }

    addClicked(event){
      this.addentry.emit(event);
    }

    printClicked(event){
      this.printentry.emit(event);
    }
    }
    

