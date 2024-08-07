import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-default-login-layout',
  templateUrl: './default-login-layout.component.html',
  styleUrls: ['./default-login-layout.component.scss'],
})
export class DefaultLoginLayoutComponent {
  @Input() title: String = '';
  @Input() primaryBtnText: String = '';
  @Input() secondaryBtnText: String = '';
  @Input() disablePrimaryBtn: boolean = true;
  @Output('submit') onSubmit = new EventEmitter();

  @Output('navigate') onNavigate = new EventEmitter();

  submit() {
    this.onSubmit.emit();
  }

  navigate() {
    this.onNavigate.emit();
  }
}
