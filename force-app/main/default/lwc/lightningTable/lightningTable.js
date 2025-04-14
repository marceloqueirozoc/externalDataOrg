import { LightningElement, track, wire, api } from 'lwc';
//import the helper javascript module/file
import fetchDataHelper from './fetchDataHelper';
import getusercallout from '@salesforce/apex/CalloutController.getusercallout';

const columns = [
    { label: 'ID', fieldName: 'id' },
    { label: 'First Name', fieldName: 'first_name' },
    { label: 'Last Name', fieldName: 'last_name' },
    { label: 'email', fieldName: 'email' },
    { label: 'gender', fieldName: 'gender' },
    { label: 'IP Adress', fieldName: 'ip_address' },
];

export default class LightningTable extends LightningElement {

    @api recordId;
    data = [];
    columns = columns;
    
    /* async-await method 
    async connectedCallback() {
        const data = await fetchDataHelper({ amountOfRecords: 10 });
        this.data = data;
    }
    */

    connectedCallback() {
        getusercallout()
        .then(result => {
            this.data = result;
        });
    }
}