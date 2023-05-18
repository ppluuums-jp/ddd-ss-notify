enum ICTextType {
  Markdown = 'mrkdwn',
  Plain = 'plain_text',
}

class ICTextObject {
  type: ICTextType;
  text: string;
  emoji?: boolean;
  verbatim?: boolean;

  constructor(params: { text: string; type: ICTextType; emoji?: boolean; verbatim?: boolean }) {
    this.type = params.type;
    this.text = params.text;
    this.emoji = params.emoji;
    this.verbatim = params.verbatim;
  }

  toMap() {
    let data = {
      type: this.type,
      text: this.text,
      emoji: this.emoji,
      verbatim: this.verbatim,
    };
    if (this.emoji == undefined) {
      delete data['emoji'];
    }
    if (this.verbatim == undefined) {
      delete data['verbatim'];
    }
    return data;
  }
}
