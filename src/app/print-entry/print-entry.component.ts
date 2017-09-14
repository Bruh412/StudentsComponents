import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-print-entry',
  templateUrl: './print-entry.component.html',
  styleUrls: ['./print-entry.component.css']
})
export class PrintEntryComponent implements OnInit {
  @Output() print = new EventEmitter<any>();
  @Input() students;
  printgo: boolean;
  constructor() { }

  ngOnInit() {
  }

  allowPrint(){
    this.printgo = true;
    this.print.emit(this.printgo);
  }

}
