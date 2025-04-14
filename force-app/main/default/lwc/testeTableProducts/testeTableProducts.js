import { LightningElement } from 'lwc';

export default class TesteTableProducts extends LightningElement {
    data = {
        products: [
            {
                product: {
                    activationStatus: 'ACTIVE',
                    state: 'ASSIGNED',
                    id: '11979006297',
                    assignedBillingOffers: [
                        { assignedBillingOffer: { name: 'TITULAR VIVO FAMILIA 60GB - MENSAL', orderId: '1015413534', id: '600506791', parentComponentName: 'Plano' } },
                        { assignedBillingOffer: { name: 'Vivo Travel América', orderId: '1015413680', id: '600506806', parentComponentName: 'Pacote Adicional' } },
                        { assignedBillingOffer: { name: 'Apps Ilimitados', orderId: '1015413678', id: '600506805', parentComponentName: 'Pacote Adicional' } },
                        { assignedBillingOffer: { name: 'Bônus Conta Digital Pós', orderId: '1015422269', id: '600508792', parentComponentName: 'Pacote Adicional' } },
                        { assignedBillingOffer: { name: 'Vivo Avisa Grátis', orderId: '1015413541', id: '600506792', parentComponentName: 'Voz' } }
                    ]
                }
            },
            {
                product: {
                    activationStatus: 'ACTIVE',
                    state: 'PENDING',
                    id: '1136187186',
                    assignedBillingOffers: [
                        { assignedBillingOffer: { name: 'Equipamento', orderId: '1015413535', id: '600506790', parentComponentName: 'Componente Principal de Equipamento' } },
                    ]
                }
            }
        ]
    };

    groupByParentComponent(offers) {
        const groupedOffers = {};
        offers.forEach((offer) => {
            const parentComponentName = offer.assignedBillingOffer.parentComponentName || 'Unknown';
            if (!groupedOffers[parentComponentName]) {
                groupedOffers[parentComponentName] = [];
            }
            groupedOffers[parentComponentName].push({
                name: offer.assignedBillingOffer.name,
                orderId: offer.assignedBillingOffer.orderId,
                offerId: offer.assignedBillingOffer.id
            });
        });
        return groupedOffers;
    }

    get treeGridData() {
        const allProductsData = this.data.products.map((productData) => {
            const product = productData.product;
            const groupedOffers = this.groupByParentComponent(product.assignedBillingOffers);

            const offerChildren = Object.keys(groupedOffers).map((parentComponentName) => ({
                id: parentComponentName,
                name: parentComponentName,
                _children: groupedOffers[parentComponentName].map((offer) => ({
                    id: offer.name,
                    name: offer.name
                }))
            }));

            return {
                id: product.id,
                activationStatus: product.activationStatus,
                state: product.state,
                _children: offerChildren
            };
        });

        console.log('Tree Grid Data:', allProductsData); // Log all product data for inspection

        return allProductsData;
    }

    treeGridColumns = [
        { label: 'Product ID', fieldName: 'id', type: 'text' },
        { label: 'Activation Status', fieldName: 'activationStatus', type: 'text' },
        { label: 'State', fieldName: 'state', type: 'text' }
    ];
}