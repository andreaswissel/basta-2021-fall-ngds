import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent implements OnInit {
  @Input() label: string = 'Input Label';
  @Input() placeholder: string = 'Input Placeholder';
  @Input() type: 'text' | 'password' = 'text';

  constructor() { }

  ngOnInit(): void {
  }

  @ViewChild('input', { static: false }) input: ElementRef<HTMLInputElement> | undefined;

  get text(): string | undefined {
    return this.input?.nativeElement.value;
  }


}
