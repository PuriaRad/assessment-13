import {
  ChangeDetectorRef,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnInit,
  Output,
  Renderer2,
} from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-e-input',
  templateUrl: './e-input.component.html',
  styleUrls: ['./e-input.component.scss'],
})
export class EInputComponent implements OnInit {
  @Input() public label!: string;
  @Input() public required = false;
  @Input() public startIcon!: string; // start icon

  @Output() public inputEvent = new EventEmitter(); // ending icon click event

  @Input() public col = '12'; // mobile
  @Input() public sm = '12'; // small
  @Input() public md = '6'; // medium
  @Input() public lg = '4'; // medium
  @Input() public xl = '4'; // extra large
  @Input() public hasMy3 = true; // my-3
  @Input() public zeroPadding = false; // p-0

  @Input() public formGroup!: FormGroup;
  @Input() public controlName!: string;
  @Input() public control!: any;
  @Input() public autocomplete = 'on';
  @Input() public type = 'text';
  @Input() public placeholder = '';

  @Input() public minlength: any;
  @Input() public maxlength: any;
  @Input() public pattern: any;
  @Input() public min: any;
  @Input() public max: any;

  @Input() public precision = 0;
  @Input() public suffix = ' $';

  constructor(
    private elementRef: ElementRef,
    private renderer: Renderer2
  ) {}

  ngOnInit(): void {
    if (this.hasMy3) {
      this.renderer.addClass(this.elementRef.nativeElement, 'my-3');
    }
    if (this.zeroPadding) {
      this.renderer.addClass(this.elementRef.nativeElement, 'p-0');
    }
    this.renderer.addClass(this.elementRef.nativeElement, 'no-outline');
    this.renderer.addClass(this.elementRef.nativeElement, 'col-' + this.col);
    this.renderer.addClass(this.elementRef.nativeElement, 'col-sm-' + this.sm);
    this.renderer.addClass(this.elementRef.nativeElement, 'col-md-' + this.md);
    this.renderer.addClass(this.elementRef.nativeElement, 'col-lg-' + this.lg);
    this.renderer.addClass(this.elementRef.nativeElement, 'col-xl-' + this.xl);
  }
}
