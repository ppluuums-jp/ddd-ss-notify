class WriteSheetImpl implements WriteSheet {
  readonly _sheetRepository: SheetRepos;
  constructor(private readonly sheetRepository: SheetRepos) {
    this.sheetRepository = sheetRepository;
  }
  execute(req: writeSheetRequest): void {
    try {
      this.sheetRepository.writeSheet(req);
    } catch (e) {
      throw new Error(`Failed to writeSheet(). Error message: ${e.message}`);
    }
  }
}
