import { LightningElement, api } from 'lwc';
import getAccountList from '@salesforce/apex/AccountHelper.getAccountList';

export default class datatableComponent extends LightningElement {
    columns = [{
            label: 'Account name',
            fieldName: 'Name',
            type: 'text',
            sortable: true
        },
        {
            label: 'Shipping Country',
            fieldName: 'ShippingCountry',
            type: 'text',
            sortable: true
        },
        {
            label: 'Billing Country',
            fieldName: 'BillingCountry',
            type: 'Currency',
            sortable: true
        },
        {
            label: 'Rating',
            fieldName: 'Rating',
            type: 'text',
            sortable: true
        }
    ];
    @api accList;
}