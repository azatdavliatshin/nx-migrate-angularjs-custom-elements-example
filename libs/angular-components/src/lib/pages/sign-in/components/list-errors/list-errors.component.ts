import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input,
  ChangeDetectorRef,
} from '@angular/core';

type Errors = {
  [field: string]: string[]
};

@Component({
  templateUrl: './list-errors.component.html',
  styleUrls: ['./list-errors.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ListErrorsComponent implements OnInit {
  private _errors?: Errors;

  get errorsList(): Errors | undefined {
    return this._errors;
  }

  @Input() set errors(value: string) {
    console.log(value);
    
    if(value && !value.includes('$ctrl') && !value.includes('{{')) {
      this._errors = JSON.parse(value) as Errors;
    }
  }

  public static ComponentName = 'app-list-errors';

  constructor(
    private _cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {}
}
