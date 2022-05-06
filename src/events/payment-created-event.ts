import { Subjects } from "./subjects";

export interface PaymentCreatedEvent {
    subect: Subjects.PaymentCreated,
    data: {
        id: string;
        orderId: string;
        stripeId: string;
    }
}