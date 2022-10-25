import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { Ingredient } from 'src/app/_models/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.scss']
})
export class ShoppingEditComponent implements OnInit {

  @ViewChild('nameInput') nameInput: ElementRef;
  @ViewChild('amountInput') amountInput: ElementRef;
  @Output() onAdd = new EventEmitter<Ingredient>();

  constructor() {}

  ngOnInit(): void {}

  onSubmit(): void {
    // this.onAdd.emit({nameInput: this.nameInput.nativeElement.value, amountInput: this.amountInput.nativeElement.value});
    // console.log(this.nameInput.nativeElement.value, this.amountInput.nativeElement.value);

    this.onAdd.emit(new Ingredient(this.nameInput.nativeElement.value, this.amountInput.nativeElement.value));
  }
}
