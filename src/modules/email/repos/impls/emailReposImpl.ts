class EmailsReposImpl implements EmailRepos {
  sendEmails(req: SendEmailRequest): void {
    const subject = '[Notification System]Spreadsheet Updated';
    const body = req.updatedSSheets
      .map((v) => {
        return `- ${v.props.title}\n - url: ${v.props.url}\n - owner: ${v.props.owner}\n - lastModified: ${(
          v.props.lastModified as Date
        ).toLocaleString('ja-JP', {
          timeZone: 'Asia/Tokyo',
        })}\n`;
      })
      .join('\n');
    const emails = config.emails;

    emails.forEach((v) => {
      MailApp.sendEmail(v, subject, `${'The following spreadsheets have been updated:\n\n'}${body}`);
    });
  }
}
