import { BasePage } from './basePage';

export class SelectablePage extends BasePage {
    static get url() {
        return '/selectable';
    }

    static get gridTab() {
        return cy.get('#demo-tab-grid');
    }

    static get gridItems() {
        return cy.get('#gridContainer .list-group-item');
    }
}