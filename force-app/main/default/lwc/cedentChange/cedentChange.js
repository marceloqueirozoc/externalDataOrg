import { LightningElement } from 'lwc';

export default class CedentChange extends LightningElement {
    value = '11857 - Bradesco Auto/Re Companhia de Seguros';

    get options() {
        return [
            { label: '11857 - Bradesco Auto/Re Companhia de Seguros', value: '11857 - Bradesco Auto/Re Companhia de Seguros' },
            { label: '11865 - Bradesco Saúde S.A.', value: '11865 - Bradesco Saúde S.A.' },
        ];
    }

    handleChange(event) {
        this.value = event.detail.value;
    }
}