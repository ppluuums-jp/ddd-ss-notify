class ICImageElement {
  readonly type = 'image';
  imageUrl: string;
  altText: string;

  constructor(params: { imageUrl: string; altText: string }) {
    this.imageUrl = params.imageUrl;
    this.altText = params.altText;
  }

  toMap() {
    let data = {
      type: this.type,
      image_url: this.imageUrl,
      alt_text: this.altText,
    };
    return data;
  }
}
