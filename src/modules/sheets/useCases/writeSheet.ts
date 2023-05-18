interface WriteSheet {
  execute(req: writeSheetRequest): void;
}

interface writeSheetRequest {
  // storeSheet: GoogleAppsScript.Spreadsheet.Sheet;
  updatedSSheets: Sheet[];
}
