export class ResponseData {
  public readonly status: boolean;
  public readonly message: string;
  public constructor(status: boolean, message: string) {
    this.status = status;
    this.message = message;
  }
}
