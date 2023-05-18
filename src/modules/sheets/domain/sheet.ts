interface SheetProps {
  id: string;
  title: string;
  owner: string;
  url: string;
  lastModified: GoogleAppsScript.Base.Date;
  lastModifiedBy: string;
}

class Sheet {
  readonly props: SheetProps;
  constructor(props: SheetProps) {
    this.props = props;
  }
  get id(): string {
    return this.props.id;
  }

  get title(): string {
    return this.props.title;
  }

  get owner(): string {
    return this.props.owner;
  }

  get url(): string {
    return this.props.url;
  }

  get lastModified(): GoogleAppsScript.Base.Date {
    return this.props.lastModified!;
  }

  get lastModifiedBy(): string {
    return this.props.lastModifiedBy;
  }

  public static create(props: SheetProps): Sheet {
    const sheet = new Sheet(props);
    return sheet;
  }

  public isModifiedWithInThreshold(): boolean {
    const currentTime = new Date();
    const timeDiffMs = currentTime.getTime() - this.lastModified.getTime();
    const timeDiffMin = timeDiffMs / (1000 * 60);
    return timeDiffMin <= config.threshold;
  }
}
