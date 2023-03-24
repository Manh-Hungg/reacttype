declare type HttpResponse<C> = {
  statusCode: number;
  content: C;
  dateTime: string;
}
// chuyen dang bien toan cuc = .d.ts