class Provider {
  readonly sheetRepos: SheetRepos;
  readonly emailRepos: EmailRepos;
  readonly slackRepos: SlackRepos;
  readonly getSheets: GetSSheets;
  readonly writeSheet: WriteSheet;
  readonly sendEmails: SendEmails;
  readonly postMessage: PostMessage;

  constructor() {
    this.sheetRepos = new SheetReposImpl();
    this.emailRepos = new EmailsReposImpl();
    this.slackRepos = new SlackReposImpl();
    this.getSheets = new GetSSheetsImpl(this.sheetRepos);
    this.writeSheet = new WriteSheetImpl(this.sheetRepos);
    this.sendEmails = new SendEmailsImpl(this.emailRepos);
    this.postMessage = new PostMessageImpl(this.slackRepos);
  }
}
