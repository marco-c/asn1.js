var assert = require('assert');
var asn1 = require('../../../');
var rfc3280 = require('..');

var Buffer = require('buffer').Buffer;

describe('asn1.js RFC3280', function() {
  it('should decode Certificate', function() {
    var data = new Buffer(
      '308204763082035ea0030201020208462e4256bb1194dc300d06092a864886f70d0101' +
      '0505003049310b300906035504061302555331133011060355040a130a476f6f676c65' +
      '20496e63312530230603550403131c476f6f676c6520496e7465726e65742041757468' +
      '6f72697479204732301e170d3134303733303132303434305a170d3134313032383030' +
      '303030305a3068310b30090603550406130255533113301106035504080c0a43616c69' +
      '666f726e69613116301406035504070c0d4d6f756e7461696e20566965773113301106' +
      '0355040a0c0a476f6f676c6520496e633117301506035504030c0e7777772e676f6f67' +
      '6c652e636f6d30820122300d06092a864886f70d01010105000382010f003082010a02' +
      '82010100b7894e02f9ba01e07889d670fd3618d6022efc96c9d9deae2e800aa19f4b17' +
      '20c371b9996b2efc12fa191b60a92afe76e80e5d9d47280cbc46a4cd9cf454503fefcf' +
      'cd2e1c8b113a89bcd1f1427ae793bbd0d1e077bc963ff2ceb2b0c9ab68196fce1b2f40' +
      '0dc77d6294a7c0d50ff104cf92ee837d5c484a3ba0ce76b9c018cf96545f7e27518232' +
      '57874945f87b69bac902ce4b378746953c619db909e73fd2f5e2dd009c5c748ec22fcb' +
      'd6648fe60a5805e98ab8cd65ab0eb0772d7a19aefdc24c9a3933692ca695e7b493f8ac' +
      '7aab8e5d1229f071cf08ac0b6c641704a74747faacfb857b68359fc1a98c777fb5eb3e' +
      '9c90d6a13b78f42d6d797fd74f03c30203010001a38201413082013d301d0603551d25' +
      '0416301406082b0601050507030106082b0601050507030230190603551d1104123010' +
      '820e7777772e676f6f676c652e636f6d306806082b06010505070101045c305a302b06' +
      '082b06010505073002861f687474703a2f2f706b692e676f6f676c652e636f6d2f4749' +
      '4147322e637274302b06082b06010505073001861f687474703a2f2f636c69656e7473' +
      '312e676f6f676c652e636f6d2f6f637370301d0603551d0e04160414e43d6cc20c12e9' +
      '7c1920533676ef287737d8884a300c0603551d130101ff04023000301f0603551d2304' +
      '18301680144add06161bbcf668b576f581b6bb621aba5a812f30170603551d20041030' +
      '0e300c060a2b06010401d67902050130300603551d1f042930273025a023a021861f68' +
      '7474703a2f2f706b692e676f6f676c652e636f6d2f47494147322e63726c300d06092a' +
      '864886f70d010105050003820101002d5501bd33f7b6e06117e53ccf21703565f29ab7' +
      '8642a771effa4369f32938b45f04208d88a1046ba0a726622e864143c8dac38392430d' +
      'fbea1b7d41c1e27dd43438a47d36c4a048de318be442abed5f60373687d01b7fefc43e' +
      '0aacf620b11a69fb237aaa4dc33b97bc0eb39b1abe6902b1518253addda25037389c26' +
      '0ef2808be7f702f47a6466d6f3b35764f088c94e0a2b9ee403602ae21cbad3fd8e873e' +
      '9e817945a3d23fd2b35579cce19ea7f8815d166f3e46d53eed25ef391a912bb715af64' +
      'e43e124f98be487f9d222954a5bebc8d5ca384c7128c6dabffb11150a7d2a62ce565b8' +
      'a02a6c4c8ecfc7ac7065c1979cb8d50eabd5d36c72a5396e712e',
      'hex');

    var res = rfc3280.Certificate.decode(data, 'der');

    var tbs = res.tbsCertificate;
    assert.equal(tbs.version, 'v3');
    assert.deepEqual(tbs.serialNumber,
                     new asn1.bignum('462e4256bb1194dc', 16));
    assert.equal(tbs.signature.algorithm.join('.'),
                 '1.2.840.113549.1.1.5');
    assert.equal(tbs.signature.parameters.toString('hex'), '0500');
  });
});
