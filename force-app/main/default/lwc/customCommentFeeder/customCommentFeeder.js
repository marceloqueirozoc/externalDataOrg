import { LightningElement, api, wire } from 'lwc';
import { getRecord, getFieldValue } from 'lightning/uiRecordApi';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import { NavigationMixin } from 'lightning/navigation';
import { refreshApex } from '@salesforce/apex';
import BODY_FIELD from '@salesforce/schema/FeedItem.Body';
import PARENTID_FIELD from '@salesforce/schema/FeedItem.ParentId';
import STATUS_FIELD from '@salesforce/schema/Case.Status';
import createFeedItemRec from '@salesforce/apex/CustomCommentFeederController.createFeedItemRec';
import getFeedItemList from '@salesforce/apex/CustomCommentFeederController.getFeedItemList';

export default class CustomCommentFeeder extends NavigationMixin(LightningElement) {

    @api recordId;
    commnetBody = BODY_FIELD;
    @api text = 'Texts';    
    @api atMentions = [
                        {
                            Id: 1,
                            Name: "User 1"
                        },
                        {
                            Id: 2,
                            Name: "User 2"
                        }
                    ];

    @wire(getRecord, { recordId: '$recordId', fields: [STATUS_FIELD] })
    caseRecord;

    get caseStatus() {
        return getFieldValue(this.caseRecord.data, STATUS_FIELD);
    }

    @wire(getFeedItemList, { status: '$caseStatus', parentId: '$recordId' })
    comments;

    recFeedItem = {
        Body: this.commnetBody,
        ParentId: this.recordId,
        IsRichText: true
    };

    handleChange(event) {
        this.recFeedItem.Body = event.target.value;
    }

    handleSelect(event) {
        const userCommentId = event.detail;
        let userId = this.comments.data.find(
            (comment) => comment.Id === userCommentId
        ).CreatedBy.Id;

        this[NavigationMixin.Navigate]({
            type: 'standard__recordPage',
            attributes: {
                recordId: userId,
                objectApiName: 'User',
                actionName: 'view'
            }
        });
    }

    handlePostClick(event) {
        this.recFeedItem.ParentId = this.recordId;
        console.log('Value--> ' + JSON.stringify(this.recFeedItem));
        createFeedItemRec({ 'feedItemRec': this.recFeedItem })
            .then((response) => {
                this.commnetBody = '';
                this.dispatchEvent(
                    new ShowToastEvent({
                        title: 'Success',
                        message: 'Commnet Posted!',
                        variant: 'success'
                    })
                );
                refreshApex(this.comments);
            })
            .catch((error) => {
                this.dispatchEvent(
                    new ShowToastEvent({
                        title: 'Error!',
                        message: error.body.message,
                        variant: 'error'
                    })
                );
            });
    }
}