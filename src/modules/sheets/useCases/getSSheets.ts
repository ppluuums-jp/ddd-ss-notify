interface GetSSheets {
  execute(req: GetSSheetsRequest): Sheet[];
}

interface GetSSheetsRequest {
  ids: string[];
}
