export class  QR{
    text: string;
    imageBase64: string;

    constructor(text:string, imageBase64:string){
        this.text = text;
        this.imageBase64 = imageBase64;
    }
}