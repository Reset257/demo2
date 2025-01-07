import JSEncrypt from 'jsencrypt';
// import Encrypt from 'encryptlong'
// 公钥key
const publicKey = 'MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAyAZt1WaE1qqQqpg7M0ywhBLk4SbQ+eISpAdOC/NMrzD9evtAcXvw8ScvXVEwDMpgJjI9L7mylw1BmvrqcRrVtnJeKOVc9CI19YO6q3chKF8JRGDbOwJVY8tUdTtjY9MygnKdv9SEJ5tiQ3Gt+AzmJLAfmadtXC6s2t+6Sd3WBRDFeiDdDK7YJLtX/6MKpmoPHL40pyQ0Fd0p7Bsm7seufxRMmQN/YFBxyhuDaSWQ4D3hyiZSP/rLjGurMTiMkmzq4NFzDlcf4uRjY5XecJv2keuVEstXbtrQaMQ82KTWgJ81VZ3A/1QOW6eqY13CG9wudLbQGI5D588pSXg5ZFnVuQIDAQAB'
// 完整的加密解密函数
export default {
  
  /* JSEncrypt加密 */
  rsaPublicData(data: string) {
    const jsencrypt = new JSEncrypt();
    jsencrypt.setPublicKey(publicKey);
    // 如果是对象/数组的话，需要先JSON.stringify转换成字符串
    const result = jsencrypt.encrypt(data);
    return result;
  },
  /* JSEncrypt解密 */
  rsaPrivateData(data: string, privateKey: string) {
    const jsencrypt = new JSEncrypt();
    jsencrypt.setPrivateKey(privateKey);
    // 如果是对象/数组的话，需要先JSON.stringify转换成字符串
    const result = jsencrypt.encrypt(data);
    return result;
  },
};
