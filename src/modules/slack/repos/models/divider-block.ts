class ICDividerBlock {
  readonly type: string = 'divider';
  blockId?: string;

  constructor(params: { blockId?: string }) {
    this.blockId = params['blockId'];
  }

  toMap() {
    let data = {
      type: this.type,
      block_id: this.blockId,
    };
    if (this.blockId == undefined) {
      delete data['block_id'];
    }
    return data;
  }
}
