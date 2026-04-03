import { SelectablePage } from "../pageObjects/SelectablePage";

describe('Selectable Grid', () => {
    beforeEach(() => {
        SelectablePage.visit();
        SelectablePage.gridTab.click();
    });

    it('Click even numbers and validate highlighted and not highlighted items', () => {
        // Click "Two", "Four", "Six", "Eight"
        SelectablePage.gridItems.contains('Two').click();
        SelectablePage.gridItems.contains('Four').click();
        SelectablePage.gridItems.contains('Six').click();
        SelectablePage.gridItems.contains('Eight').click();

        // Validate that "Two", "Four", "Six", "Eight" are highlighted
        SelectablePage.gridItems.contains('Two').should('have.class', 'active');
        SelectablePage.gridItems.contains('Four').should('have.class', 'active');
        SelectablePage.gridItems.contains('Six').should('have.class', 'active');
        SelectablePage.gridItems.contains('Eight').should('have.class', 'active');

        // Validate that "One", "Three", "Five", "Seven", "Nine" are not highlighted
        SelectablePage.gridItems.contains('One').should('not.have.class', 'active');
        SelectablePage.gridItems.contains('Three').should('not.have.class', 'active');
        SelectablePage.gridItems.contains('Five').should('not.have.class', 'active');
        SelectablePage.gridItems.contains('Seven').should('not.have.class', 'active');
        SelectablePage.gridItems.contains('Nine').should('not.have.class', 'active');
    });
});