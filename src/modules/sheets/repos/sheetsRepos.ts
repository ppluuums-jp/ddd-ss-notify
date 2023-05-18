interface SheetRepos {
  findSSheets(req: GetSSheetsRequest): Sheet[];
  writeSheet(req: writeSheetRequest): void;
}
