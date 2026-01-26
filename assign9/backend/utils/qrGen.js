import QRCode from "qrcode";

export const generateQR = async(text)=>{
    return QRCode.toDataURL(text);
}