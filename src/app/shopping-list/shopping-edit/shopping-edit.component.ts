import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Ingredient } from 'src/app/_models/ingredient.model';
import { ShoppingListService } from 'src/app/_services/shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.scss']
})
export class ShoppingEditComponent implements OnInit {

  // @ViewChild('nameInput') nameInput: ElementRef;
  // @ViewChild('amountInput') amountInput: ElementRef;
  // @Output() onAdd = new EventEmitter<Ingredient>();

  constructor(private shoppingListService: ShoppingListService) {}

  ngOnInit(): void {}

  onAddItem(form: NgForm): void {
    // this.onAdd.emit({nameInput: this.nameInput.nativeElement.value, amountInput: this.amountInput.nativeElement.value});
    // console.log(this.nameInput.nativeElement.value, this.amountInput.nativeElement.value);

    // this.onAdd.emit(new Ingredient(this.nameInput.nativeElement.value, this.amountInput.nativeElement.value));
    // this.shoppingListService.onAdd.emit(new Ingredient(this.nameInput.nativeElement.value, this.amountInput.nativeElement.value));

    // this.shoppingListService.addIngredient(new Ingredient(this.nameInput.nativeElement.value, this.amountInput.nativeElement.value))
    
    if ( form.value.name && form.value.amount) {
      this.shoppingListService.addIngredient(new Ingredient(form.value.name, form.value.amount));
      form.value.name = '';
      form.value.amount = '';
    }
  }
}
