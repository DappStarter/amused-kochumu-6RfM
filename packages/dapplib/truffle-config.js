require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gesture hill fresh skull drift remember rural home install hill equal genre'; 
let testAccounts = [
"0x799e3e491b28889825a706598539c68d43fc43e27a86cd9f3c96815679fa7ee7",
"0x59e36f36ee06ab0ab6b7f633e465dce02d433e337ac3a708c06908bf71db7782",
"0xd5dd5ea46ffaaa60f470084b01c5ebc61716e355984919e915c59ccbffd956c2",
"0x8ca9e145d36f4198ec1cae68ff9d6859505110c5d5d9f513384ca320c95dbbd1",
"0x92bafd97c8411d6a8078f91bea2dbea33f84c2746cdda7772b8f325282bdd8bd",
"0x4b06405f38f8eefc2cf4a890b7aa5cbbe04d6d3ae928555e94d36ef5353ed050",
"0xea084898d4d3e3b3ca03f4d04c28755cc615f8d9159379846811f06df057f989",
"0xade266f7b6d440637c58780a218f5e91ea6af2bcba7dc57ac9235309f4ef4543",
"0x28da68ee0ae75b7b482720bc969eb85678381a21017d52750ec46d72dc477dcb",
"0x263bd7824637584f295952d0d52483144dc5620206dee84c75fd359b92a7d718"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

