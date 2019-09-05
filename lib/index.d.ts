export interface FeedbackTicket {
    content: string;
    referer: string;
    email?: string;
    userId?: string;
    gaId?: string;
    createdAt?: string;
}
export interface FreshdeskTicket {
    email: string;
    subject: string;
    description: string;
    status: number;
    priority: number;
    source: number;
}
export default class Feedback {
    private feedbackPostingUrl;
    sendFeedback(feedbackTicket: FeedbackTicket): Promise<void>;
    sendTicketToFreshdesk(freshdeskTicket: FreshdeskTicket): Promise<void>;
}
