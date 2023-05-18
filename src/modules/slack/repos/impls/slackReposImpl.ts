class SlackReposImpl implements SlackRepos {
  postMessage(req: PostMessageRequest): void {
    let blocks: any[] = [
      new ICHeaderBlock({
        text: new ICTextObject({
          type: ICTextType.Plain,
          text: '[Notification System]',
        }),
      }),
      new ICSectionBlock({
        text: new ICTextObject({
          type: ICTextType.Plain,
          text: 'Sheets have been updated',
        }),
      }),
      new ICSectionBlock({
        text: new ICTextObject({
          type: ICTextType.Markdown,
          text: `${config.slackIds.map((v) => '<@' + v + '>').join(' ')}`,
        }),
      }),
    ];
    req.updatedSSheets.forEach(function (v) {
      blocks.push(new ICDividerBlock({}));
      blocks.push(
        new ICSectionBlock({
          text: new ICTextObject({
            type: ICTextType.Plain,
            text: v.title + ` (${(v.lastModified as Date).toLocaleString('ja-JP', { timeZone: 'Asia/Tokyo' })})`,
          }),
        })
      );
      blocks.push(
        new ICActionBlock({
          elements: [
            new ICButtonElement({
              text: new ICTextObject({
                type: ICTextType.Plain,
                text: 'View Sheet',
              }),
              url: v.url,
            }),
          ],
        })
      );
    });
    const data = { blocks: blocks.map((v) => v.toMap()) };
    const payload = JSON.stringify(data);
    const params: GoogleAppsScript.URL_Fetch.URLFetchRequestOptions = {
      method: 'post',
      contentType: 'application/json',
      payload: payload,
    };
    UrlFetchApp.fetch(config.webHookUrl, params);
  }
}
