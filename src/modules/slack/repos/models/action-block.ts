class ICActionBlock {
  readonly type: string = 'actions';
  elements: ICButtonElement[];

  constructor(params: { elements: ICButtonElement[] }) {
    this.elements = params.elements;
  }

  toMap() {
    let data = {
      type: this.type,
      elements: this.elements.map((v) => v.toMap()),
    };
    return data;
  }
}
