class SendEmailsImpl implements SendEmails {
  readonly _emailRepository: EmailRepos;
  constructor(readonly emailRepository: EmailRepos) {
    this._emailRepository = emailRepository;
  }
  execute(req: SendEmailRequest): void {
    try {
      this._emailRepository.sendEmails(req);
    } catch (e) {
      throw new Error(`Failed to sendEmails(). Error message: ${e.message}`);
    }
  }
}
