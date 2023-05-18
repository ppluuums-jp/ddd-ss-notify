interface PostMessage {
  execute: (req: PostMessageRequest) => void;
}

interface PostMessageRequest {
  updatedSSheets: Sheet[];
}
