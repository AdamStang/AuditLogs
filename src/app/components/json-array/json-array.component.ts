import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { fromEvent } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import { Arrays } from 'src/app/arrays/Arrays';
import { IRow } from 'src/app/models/interfaces/Row';

@Component({
  selector: 'app-json-array',
  templateUrl: './json-array.component.html',
  styleUrls: ['./json-array.component.scss']
})
export class JsonArrayComponent implements OnInit, AfterViewInit {
  private arrays = new Arrays();
  readonly agreements = this.arrays.agreements;
  public currentPayload = this.agreements[1];
  public previousPayload = this.agreements[0];
  public rows: IRow[] = [];

  // @ViewChild('scrollOne') grid: ElementRef;
  // @ViewChild('scrollTwo') grid2: ElementRef;

  constructor() { }

  ngAfterViewInit(): void {
    // fromEvent(this.grid.nativeElement, 'scroll').subscribe((e: Event) => {
    //   this.grid2.nativeElement.scrollTop = e.target['scrollTop'];
    //   this.grid2.nativeElement.scrollLeft = e.target['scrollLeft'];
    // });
    
    // fromEvent(this.grid2.nativeElement, 'scroll').subscribe((e: Event) => {
    //   this.grid.nativeElement.scrollTop = e.target['scrollTop'];
    //   this.grid.nativeElement.scrollLeft = e.target['scrollLeft'];
    // });
  }

  ngOnInit() {
    this.parsePayload(this.currentPayload, this.previousPayload, 0);
  }

  public parsePayload(curPay: object | null, prePay: object | null, level: number) {
    if(!curPay && !prePay) return;
    let keys: string[] = [];
    if(curPay) Object.keys(curPay).forEach(key => (!keys.includes(key)) ? keys.push(key) : '');
    if(prePay) Object.keys(prePay).forEach(key => (!keys.includes(key)) ? keys.push(key) : '');

    keys.forEach(key => {
      const curValue = (curPay) ? curPay[key as keyof object] : null;
      const preValue = (prePay) ? prePay[key as keyof object] : null;
      if ((typeof curValue === 'object' && curValue !== null) || (typeof preValue === 'object' && preValue !== null)) {
        this.rows.push({
          name: key,
          value: curValue,
          valueBefore: preValue,
          level: level,
          nodeType: 'parent'
        });
        this.parsePayload(curValue, preValue, level + 1);
      } else { 
        console.log(`${key}: Current: ${curValue}, Previous: ${preValue}`);
        this.rows.push({
          name: key,
          value: curValue,
          valueBefore: preValue,
          level: level,
          nodeType: 'child'
        });
      }
    });
  }

  updateLeftScroll(scrollOne: HTMLElement, scrollTwo: HTMLElement){
    scrollTwo.scrollTop = scrollOne.scrollTop;
    scrollTwo.scrollLeft = scrollOne.scrollLeft;
    scrollTwo.scrollBy = scrollOne.scrollBy;
  } 
  updateRightScroll(scrollTwo: HTMLElement, scrollOne: HTMLElement) {
    scrollOne.scrollTop = scrollTwo.scrollTop;
    scrollOne.scrollLeft = scrollTwo.scrollLeft;
    scrollOne.scrollBy = scrollTwo.scrollBy;
  }

}
