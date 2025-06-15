declare module "pdf-parse" {
  interface PDFInfo {
    text: string;
    numpages: number;
    numrender: number;
    info: any;
    metadata: any;
    version: string;
  }

  function pdf(dataBuffer: Buffer | Uint8Array): Promise<PDFInfo>;

  export = pdf;
}
