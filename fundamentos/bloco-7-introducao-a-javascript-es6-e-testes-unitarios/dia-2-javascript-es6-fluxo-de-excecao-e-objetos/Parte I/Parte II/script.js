const order = {
  name: 'Rafael Andrade',
  phoneNumber: '11-98763-1416',
  address: {
    street: 'Rua das Flores',
    number: '389',
    apartment: '701',
  },
  order: {
    pizza: {
      marguerita: {
        amount: 1,
        price: 25,
      },
      pepperoni: {
        amount: 1,
        price: 20,
      }
    },
    drinks: {
      coke: {
        type: 'Coca-Cola Zero',
        price: 10,
        amount: 1,
      }
    },
    delivery: {
      deliveryPerson: 'Ana Silveira',
      price: 5,
    }
  },
  payment: {
    total: 60,
  },
};

const customerInfo = (order) => {
  // Adicione abaixo as informações necessárias.
  console.log(`Olá ${Object.values(order.order.delivery.deliveryPerson).join('')}, entrega para: ${Object.values(order)[0]}, Telefone: ${Object.values(order)[1]},${Object.values(order.address)[0]}, Nº ${Object.values(order.address)[1]}, AP. ${Object.values(order.address)[2]}`)
}

customerInfo(order);

const orderModifier = (order) => {
// Adicione abaixo as informações necessárias.
  const newName = order.name = 'Luiz Silva';
  const newValue = order.payment.total = '50,00';

  console.log(`Olá ${newName}, o total do seu pedido de ${Object.keys(order.order.pizza)[0]}, ${Object.keys(order.order.pizza)[1]} e ${Object.keys(order.order.drinks)[0]} é R$ ${Object.values(order.payment)[0]}.`)
}

orderModifier(order);
