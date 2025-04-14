import { LightningElement } from "lwc";
 
export default class modal extends LightningElement {
    ShowModal = false;
   
    openModal() {    
        // to open modal 
        this.ShowModal = true;
    }
  
    closeModal() {    
        // to close modal 
        this.ShowModal = false;
    }
 
    handleClick(){
 
        //do something
    }
}