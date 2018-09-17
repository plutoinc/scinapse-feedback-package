export interface FeedbackTicket {
    content: string;
    referer: string;
    email?: string;
    userId?: string;
    gaId?: string;
    createdAt?: string;
}
export default class Feedback {
    private feedbackPostingUrl;
    sendFeedback(feedbackTicket: FeedbackTicket): Promise<void>;
}
