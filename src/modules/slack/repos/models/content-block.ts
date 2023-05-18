class ICContextBlock {
  readonly type: string = 'context';
  elements: (ICTextObject | ICImageElement)[];
  blockId?: string;

  constructor(params: { elements: (ICTextObject | ICImageElement)[]; blockId?: string }) {
    this.elements = params['elements'];
    this.blockId = params['blockId'];
  }

  toMap() {
    let data = {
      type: this.type,
      elements: this.elements.map((v) => v.toMap()),
      block_id: this.blockId,
    };
    if (this.blockId == undefined) {
      delete data['block_id'];
    }
    return data;
  }
}
