class ICButtonElement {
  readonly type: string = 'button';
  readonly value: string = 'click_me_123';
  text: ICTextObject;
  url: string;

  constructor(params: { text: ICTextObject; url: string }) {
    this.text = params.text;
    this.url = params.url;
  }

  toMap() {
    let data = {
      type: this.type,
      text: this.text.toMap(),
      value: this.value,
      url: this.url,
    };
    return data;
  }
}
