import axios from "axios";

export interface FeedbackTicket {
    content: string;
    email?: string;
    userId?: string;
    gaId?: string;
    createdAt?: string;
}

export default class Feedback {
    private feedbackPostingUrl = "https://qg6wp4ze48.execute-api.us-east-1.amazonaws.com/prod/feedbacks/new";
    public async sendFeedback(feedbackTicket: FeedbackTicket) {
        await axios.post(this.feedbackPostingUrl, feedbackTicket);
    }
}

