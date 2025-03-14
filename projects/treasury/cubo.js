const { sumTokensExport, } = require('../helper/unwrapLPs')

const DAI = '0x8f3Cf7ad23Cd3CaDbD9735AFf958023239c6A063'

const DRAGON_QUICK = '0xf28164a485b0b2c90639e47b0f377b4a438a16b1'
const CUBO_TOKEN = '0x381d168DE3991c7413d46e3459b48A5221E3dfE4'
const MOO_CRV_TriCrypto = '0x5A0801BAd20B6c62d86C566ca90688A6b9ea1d3f'
const MOO_AM3CRV = '0xAA7C2879DaF8034722A0977f13c343aF0883E92e'

const treasuryAddress = '0xb495ffc5acd7e2fd909c23c30d182e6719fbe9ec'
const treasuryTokens = [DAI, DRAGON_QUICK, MOO_CRV_TriCrypto, MOO_AM3CRV,]

module.exports = {
  polygon: {
    tvl: sumTokensExport({ owner: treasuryAddress, tokens: treasuryTokens}),
    ownTokens: sumTokensExport({ owner: treasuryAddress, tokens: [CUBO_TOKEN]}),
  },
}
