import { Component, EventEmitter, Input, Output } from '@angular/core';

export interface MenuIndex {
  menuIndex: number;
  submenuIndex: number;
}

export interface MenuItem {
  icon: string;
  text: string;
  value: string;
  subMenu: Array<{
    text: string;
    value: string;
  }>
}

@Component({
  selector: 'dropdown-menu',
  templateUrl: './dropdown-menu.component.html',
  styleUrls: ['./dropdown-menu.component.css']
})
export class DropdownMenuComponent {
  @Input()  public menuItems: Array<MenuItem> = [];
  @Output() public itemSelected = new EventEmitter<MenuIndex>();


  public onClick(event: MouseEvent, menuIndex: number, submenuIndex: number) {
    event.stopPropagation();
    this.itemSelected.emit({
      menuIndex: menuIndex,
      submenuIndex: submenuIndex
    });
  }
}
