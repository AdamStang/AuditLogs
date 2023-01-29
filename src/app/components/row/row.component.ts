import { Component, Input, OnInit } from '@angular/core';
import { ChangeTypeEnum } from 'src/app/models/enums/ChangeTypeEnum.enum';
import { IRow } from 'src/app/models/interfaces/Row';

@Component({
  selector: 'app-row',
  templateUrl: './row.component.html',
  styleUrls: ['./row.component.scss']
})
export class RowComponent implements OnInit {
  @Input() data: IRow;
  @Input() current: boolean = true;
  public indent: string;
  public error: string = '#ff928a';
  public success: string = '#8aff8c';
  public change: ChangeTypeEnum;
  public icon: string;

  public prevStyle: object;
  public currStyle: object;
  public styl: object;

  constructor() { }

  ngOnInit() {
    this.indent = `${this.data?.level * 25}px`;
    this.prevStyle = {
      'background': (this.data?.value?.toString() === this.data?.valueBefore?.toString()) ? 'none' : (this.data.value?.toString() && !this.data.valueBefore?.toString()) ? this.error : this.success
    };
    this.currStyle = {
      'background': (this.data?.value?.toString() === this.data?.valueBefore?.toString()) ? 'none' : (!this.data.value?.toString() && this.data.valueBefore?.toString()) ? this.error : this.success
    };
    this.styl = (this.current) ? this.currStyle : this.prevStyle;

    if (this.current) {
      if (this.data?.value === null && this.data?.valueBefore === null) this.change = ChangeTypeEnum.None;
      else if (this.data?.value !== null && this.data?.valueBefore === null) this.change = ChangeTypeEnum.Added;
      else if (this.data?.value === null && this.data?.valueBefore !== null) this.change = ChangeTypeEnum.Deleted;
      else this.change = (this.data?.value?.toString() === this.data?.valueBefore?.toString()) ? ChangeTypeEnum.None : ChangeTypeEnum.Changed; 
    } else {
      if (this.data?.value === null && this.data?.valueBefore === null) this.change = ChangeTypeEnum.None;
      else if (this.data?.value !== null && this.data?.valueBefore === null) this.change = ChangeTypeEnum.Deleted;
      else if (this.data?.value === null && this.data?.valueBefore !== null) this.change = ChangeTypeEnum.Added;
      else this.change = (this.data?.value?.toString() === this.data?.valueBefore?.toString()) ? ChangeTypeEnum.None : ChangeTypeEnum.Changed; 
    }

    switch (this.change as ChangeTypeEnum) {
      case ChangeTypeEnum.None: this.icon = ''; break;
      case ChangeTypeEnum.Added: this.icon = 'add'; break;
      case ChangeTypeEnum.Changed: this.icon = 'swap_horiz'; break;
      case ChangeTypeEnum.Deleted: this.icon = 'remove'; break;
      default: this.icon = '';
    }
  }

}
