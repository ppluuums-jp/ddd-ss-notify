interface SendEmails {
  execute(req: SendEmailRequest): void;
}

interface SendEmailRequest {
  // emails: string[];
  updatedSSheets: Sheet[];
}
