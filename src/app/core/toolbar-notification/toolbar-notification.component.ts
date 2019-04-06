import { Component, OnInit, Input, HostListener, ElementRef } from '@angular/core';

@Component({
  selector: 'app-toolbar-notification',
  templateUrl: './toolbar-notification.component.html',
  styleUrls: ['./toolbar-notification.component.scss']
})
export class ToolbarNotificationComponent implements OnInit {
	cssPrefix = 'toolbar-notification';
  	isOpen: boolean = false;
  	@Input() notifications = [];

    // on click outside close code

    @HostListener('document:click', ['$event', '$event.target'])
    onClick(event: MouseEvent, targetElement: HTMLElement) {
        if (!targetElement) {
              return;
        }
        const clickedInside = this.elementRef.nativeElement.contains(targetElement);
        if (!clickedInside) {
             this.isOpen = false;
        }
    }

  	constructor(private elementRef: ElementRef) { }

  	ngOnInit() {
  	}

  	select() {

  	}

  	delete(notification) {

  	}

}
