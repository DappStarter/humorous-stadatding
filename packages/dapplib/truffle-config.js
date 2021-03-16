require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'half problem forward tooth warrior ridge remind hub gesture cart fringe similar'; 
let testAccounts = [
"0xbee9dc81dcac9f9989e71d03b794f1bca833b9a576439ac94ad16bb84b0a1046",
"0xf638d8ca60206af176fe41937aeb0edc97095ed0a4c32eb47a40af701b1847d8",
"0xe9841c77f3e12e89cfbe826b0f3369d26f16ec710783d8c1930a5054efb1d91c",
"0xe30d29912b38184f8cd0daabf33ccfd0cf41354892f115e7ce2ab84d2d2a620d",
"0x7b662daa5be64b275ed1e8645efe8a1a81c47d88976a113cab70f28278caa19f",
"0x4297653360d48f885596bb764420ffdfb1d36d56c6109e12a1f9de495cc83fab",
"0x9f82eda4c4cd77c0966f1cd785eb7ba8f1e48b967767759983aa489b6d8c3234",
"0xe6ef9dd5877c3577f95a88f71c0d2490e5d7d62e007e555b3f55d873fab8f094",
"0xc60134910cf92253940b9046133dcda860272db32e66abd54381b98ef2616cb7",
"0xd76bbf0bc8cb3bdabbaf673b233eee6aed08cf4036c7a667d40e07045e8cb97f"
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
            version: '^0.5.11'
        }
    }
};
