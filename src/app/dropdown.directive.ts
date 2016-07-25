import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[rbDropdown]'
})
export class DropdownDirective {
	@HostBinding('class.open') get opened() {
		return this.isOpen
	}
	@HostListener('click') open() {
		console.log("clicked")
		this.isOpen = true
	}
	@HostListener('mouseleave') close() {
		console.log('mouse left')
		this.isOpen = false
	}


	private isOpen = false
}
