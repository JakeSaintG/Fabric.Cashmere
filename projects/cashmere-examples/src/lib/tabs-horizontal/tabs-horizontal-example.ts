import {Component} from '@angular/core';
import { TabChangeEvent } from '@healthcatalyst/cashmere';

/**
 * @title Horizontal Tabs with Event Handling
 */
@Component({
    selector: 'tabs-horizontal-example',
    templateUrl: 'tabs-horizontal-example.html',
    styleUrls: ['tabs-horizontal-example.css']
})
export class TabsHorizontalExample {
    selectedIndex: number = 0;

    selectionChanged(event: TabChangeEvent) {
        this.selectedIndex = event.index;
    }
}
