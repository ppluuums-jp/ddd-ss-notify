class ICHeaderBlock {
  readonly type: string = 'header';
  text: ICTextObject;
  blockId?: string;

  constructor(params: { text: ICTextObject; blockId?: string }) {
    this.text = params.text;
    this.blockId = params.blockId;
  }

  toMap() {
    let data = {
      type: this.type,
      text: this.text.toMap(),
      block_id: this.blockId,
    };
    if (this.blockId == undefined) {
      delete data['block_id'];
    }
    return data;
  }
}
