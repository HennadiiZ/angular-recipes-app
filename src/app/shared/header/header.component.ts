import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Output() toggler = new EventEmitter();

  collapsed = false;

  constructor() { }

  ngOnInit(): void {
  }

  onRecipe() {
    this.toggler.emit(false);
  }

  onShoppingList() {
    this.toggler.emit(true);
  }

}
