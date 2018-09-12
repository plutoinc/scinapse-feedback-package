declare namespace ScinapseFeedback {
    interface FeedbackTicket {
        content: string;
        email?: string;
        userId?: string;
        gaId?: string;
        createdAt?: string;
    }

    interface IFeedback {
        sendFeedback: (feedbackTicket: FeedbackTicket) => Promise<void>;
    }

}

export = ScinapseFeedback;
