class GetSSheetsImpl implements GetSSheets {
  readonly _sheetRepository: SheetRepos;
  constructor(private readonly sheetRepository: SheetRepos) {
    this._sheetRepository = sheetRepository;
  }
  execute(req: GetSSheetsRequest): Sheet[] {
    try {
      return this._sheetRepository.findSSheets(req);
    } catch (e) {
      throw new Error(`Failed to getSSheets(). Error message: ${e.message}`);
    }
  }
}
