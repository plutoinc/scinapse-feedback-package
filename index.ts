import axios from "axios";

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
  private feedbackPostingUrl =
    "https://qg6wp4ze48.execute-api.us-east-1.amazonaws.com/prod";

  public async sendFeedback(feedbackTicket: FeedbackTicket) {
    await axios.post(
      this.feedbackPostingUrl + "/feedbacks/new",
      feedbackTicket
    );
  }

  public async sendTicketToFreshdesk(freshdeskTicket: FreshdeskTicket) {
    await axios.post(this.feedbackPostingUrl + "/ticket/new", freshdeskTicket);
  }
}
