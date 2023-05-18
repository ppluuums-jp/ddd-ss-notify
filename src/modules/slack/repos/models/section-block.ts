class ICSectionBlock {
  readonly type: string = 'section';

  text?: ICTextObject;
  fields?: ICTextObject[];
  accessory?: ICImageElement;

  constructor(params: { text?: ICTextObject; fields?: ICTextObject[]; accessory?: ICImageElement }) {
    this.text = params.text;
    this.fields = params.fields;
    this.accessory = params.accessory;
  }

  toMap() {
    let data = {
      type: this.type,
      text: this.text?.toMap(),
      fields: this.fields?.map((v) => v.toMap()),
      accessory: this.accessory?.toMap(),
    };
    if (data['text'] == undefined) {
      delete data['text'];
    }
    if (data['fields'] == undefined) {
      delete data['fields'];
    }
    if (data['accessory'] == undefined) {
      delete data['accessory'];
    }
    return data;
  }
}
