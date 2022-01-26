import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnInit,
  Output,
  Renderer2,
  SimpleChanges,
} from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-e-button',
  templateUrl: './e-button.component.html',
  styleUrls: ['./e-button.component.scss'],
})
export class EButtonComponent implements OnInit {
  @Input() public color = 'primary';
  @Input() public buttonClasses = ['btn', 'btn-block'];
  @Input() public hasIcon = false;
  @Input() public iconClasses!: Array<string>;
  @Input() public customCaption!: string;
  @Input() public type = 'button';
  @Input() public model!: 'Create' | 'Edit' | 'Delete';

  @Output() public buttonClicked = new EventEmitter();

  // /* -------------------------------------------------------------------------- */
  // /*                               bootstrap grid                               */
  // /* -------------------------------------------------------------------------- */

  @Input() public col = '12'; // mobile
  @Input() public sm = '12'; // small
  @Input() public md = '6'; // medium
  @Input() public lg = '4'; // medium
  @Input() public xl = '3'; // extra large
  @Input() public floatRight = true; // add ml-auto class
  @Input() public hasMY3 = true; // add my-3 class

  @Input() public formGroup!: FormGroup;
  @Input() public disabledInvalidForm = true;

  constructor(private elementRef: ElementRef, private renderer: Renderer2) {}

  ngOnInit(): void {
    if (this.hasMY3) {
      this.renderer.addClass(this.elementRef.nativeElement, 'my-3');
    }

    this.renderer.addClass(this.elementRef.nativeElement, 'no-outline');
    this.renderer.addClass(this.elementRef.nativeElement, 'col-' + this.col);
    this.renderer.addClass(this.elementRef.nativeElement, 'col-sm-' + this.sm);
    this.renderer.addClass(this.elementRef.nativeElement, 'col-md-' + this.md);
    this.renderer.addClass(this.elementRef.nativeElement, 'col-lg-' + this.lg);
    this.renderer.addClass(this.elementRef.nativeElement, 'col-xl-' + this.xl);
    if (this.floatRight) {
      this.renderer.addClass(this.elementRef.nativeElement, 'ml-auto');
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['model']) {
      switch (this.model) {
        case 'Create':
          this.customCaption = this.customCaption ? this.customCaption : 'Create';
          this.color = this.color ? this.color : 'primary';
          this.hasIcon = true;
          this.iconClasses = ['fas', 'fa-plus'];
          break;
        case 'Edit':
          this.customCaption = this.customCaption ? this.customCaption : 'Update';
          this.color = this.color ? this.color : 'accent';
          this.hasIcon = true;
          this.iconClasses = ['fas', 'fa-edit'];
          break;
        case 'Delete':
          this.customCaption = this.customCaption ? this.customCaption : 'Remove';
          this.color = this.color ? this.color : 'warn';
          this.hasIcon = true;
          this.iconClasses = ['fas', 'fa-times'];
          break;
        default:
          this.color = this.color ? this.color : 'primary';
          this.hasIcon = false;
          this.iconClasses = [];
          break;
      }
    }
  }
}
