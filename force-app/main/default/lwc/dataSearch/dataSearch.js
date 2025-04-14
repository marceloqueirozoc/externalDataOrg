import { LightningElement } from 'lwc';
import fetchDataHelper from './fetchDataHelper';

const columns = [
    { label: 'ID', fieldName: 'id' },
    { label: 'First Name', fieldName: 'first_name' },
    { label: 'Last Name', fieldName: 'last_name' },
    { label: 'email', fieldName: 'email' },
    { label: 'gender', fieldName: 'gender' },
    { label: 'IP Adress', fieldName: 'ip_address' },
];

export default class DataSearch extends LightningElement {

    data = [];
    columns = columns;

    async connectedCallback() {
        const data = await fetchDataHelper({ amountOfRecords: 10 });
        this.data = data;
    }

    updateSearch(event) {
        var regex = new RegExp(event.target.value,'gi')
        this.data = this.data.filter(
            row => regex.test(row.first_name)
        );
    }
}