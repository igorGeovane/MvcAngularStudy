import { Component } from '@angular/core';
import { Message } from 'primeng/components/common/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'app';
    clicks: number = 0;
    msgs: Message[] = [];

    count() {
        this.clicks++;
    }

    show() {
        this.msgs.push({ severity: 'info', summary: 'Info Message', detail: 'PrimeNG rocks' });
    }

    clear() {
        this.msgs = [];
    }
}
