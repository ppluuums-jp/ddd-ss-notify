class PostMessageImpl implements PostMessage {
  readonly _slackRepos: SlackRepos;
  constructor(readonly slackRepos: SlackRepos) {
    this._slackRepos = slackRepos;
  }

  execute(req: PostMessageRequest): void {
    this._slackRepos.postMessage(req);
  }
}
