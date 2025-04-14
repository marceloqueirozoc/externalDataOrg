import { LightningElement, track } from 'lwc';

export default class Datatable extends LightningElement {
    @track data = [
        { id: '1', name: 'John', age: 25, city: 'New York' },
        { id: '2', name: 'Jane', age: 30, city: 'Chicago' },
        { id: '3', name: 'Joe', age: 25, city: 'New York' },
        { id: '4', name: 'Anna', age: 22, city: 'Boston' },
        { id: '5', name: 'Alice', age: 25, city: 'New York' }
    ];

    @track columns = [
        { label: 'Name', fieldName: 'name' },
        { label: 'Age', fieldName: 'age' },
        { label: 'City', fieldName: 'city' }
    ];

    @track selectedRowIds = [];
    @track selectedRows = [];
    firstSelectedRowId = null; // Store the ID of the first selected row

    handleRowSelection(event) {
        // Get the currently selected rows
        const selectedRows = event.detail.selectedRows;

        // If no rows are selected, deselect all
        if (selectedRows.length === 0) {
            this.deselectAll();
            return;
        }

        // Get the currently selected row's IDs
        const newSelectedRowIds = selectedRows.map(row => row.id);

        // Update selected row IDs and selected rows data
        this.selectedRowIds = [...new Set(newSelectedRowIds)]; // Remove duplicates
        this.selectedRows = [...selectedRows];

        // If this is the first selection, set the firstSelectedRowId
        if (!this.firstSelectedRowId) {
            this.firstSelectedRowId = this.selectedRowIds[0]; // The first row selected becomes the primary
        }

        // Automatically select similar rows
        this.selectSimilarRows();
    }

    selectSimilarRows() {
        // If no rows are selected, do nothing
        if (this.selectedRowIds.length === 0) {
            return;
        }

        // Get the first selected row based on firstSelectedRowId
        const firstSelectedRow = this.data.find(row => row.id === this.firstSelectedRowId);

        // Ensure the first selected row is always included in selected rows
        if (!this.selectedRowIds.includes(firstSelectedRow.id)) {
            this.selectedRowIds.unshift(firstSelectedRow.id); // Add to the beginning
            this.selectedRows.unshift(firstSelectedRow); // Add to the beginning
        }

        // Find rows with similar values (age and city in this case)
        const similarRows = this.data.filter(row =>
            row.age === firstSelectedRow.age && row.city === firstSelectedRow.city
        );

        // Add similar rows to the selected list while ensuring duplicates are avoided
        for (const similarRow of similarRows) {
            if (!this.selectedRowIds.includes(similarRow.id)) {
                this.selectedRowIds.push(similarRow.id);
                this.selectedRows.push(similarRow);
            }
        }

        // Serialize and log the selected rows data
        console.log('Selected Rows (Serialized):', JSON.stringify(this.selectedRows));
    }

    deselectAll() {
        // Clear all selected rows
        this.selectedRowIds = [];
        this.selectedRows = [];
        this.firstSelectedRowId = null; // Reset the first selected row
        console.log('Deselected all rows');
    }
}