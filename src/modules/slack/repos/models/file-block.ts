class ICFileBlock {
  readonly type: string = 'file';

  externalId: string;
  source: string = 'remote';
  blockId?: string;

  constructor(params: { externalId: string; blockId?: string }) {
    this.externalId = params.externalId;
    this.blockId = params['blockId'];
  }

  toMap() {
    let data = {
      type: this.type,
      external_id: this.externalId,
      source: this.source,
      block_id: this.blockId,
    };
    if (this.blockId == undefined) {
      delete data['block_id'];
    }
    return data;
  }
}
