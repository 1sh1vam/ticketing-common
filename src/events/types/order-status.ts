export enum OrderStatus {
    // When order has been created but the ticket it is trying to order has not been
    // reserved
    Created = 'created',

    // The ticket order is trying to reserve has already been reserved
    // User cancelled the order
    // The order expires before payment
    Cancelled = 'cancelled',

    // The order has successfully reserved the ticket
    AwaitingPayment = 'awaiting:payment',

    // The order has reserved the ticket and use has provided the payment successfully
    Complete = 'complete',
}