class SheetReposImpl implements SheetRepos {
  findSSheets(req: GetSSheetsRequest): Sheet[] {
    let sSheets: Sheet[] = [];
    req.ids.forEach((v) => {
      sSheets.push(
        Sheet.create({
          id: v,
          title: SpreadsheetApp.openById(v).getName(),
          owner: SpreadsheetApp.openById(v).getOwner().getEmail(),
          url: SpreadsheetApp.openById(v).getUrl(),
          lastModified: DriveApp.getFileById(v).getLastUpdated(),
          lastModifiedBy: Drive.Files.get(v).lastModifyingUserName,
        })
      );
    });
    return sSheets;
  }
  writeSheet(req: writeSheetRequest): void {
    const storeSheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(config.sheetName);
    req.updatedSSheets.forEach((v) => {
      storeSheet.appendRow([
        (v.lastModified as Date).toLocaleString('ja-JP', {
          timeZone: 'Asia/Tokyo',
        }),
        v.title,
        v.owner,
        v.url,
      ]);
    });
  }
}
