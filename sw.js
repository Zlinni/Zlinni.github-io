/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","25163bc800d1c40a64781cf310ac6447"],["/about/index.html","087aa3b2410518892e763a96708878f1"],["/archives/2021/11/index.html","03aaf4cff3a81203fd233825119d00fb"],["/archives/2021/12/index.html","477c004adaf2e1fc4935fd313fb367ae"],["/archives/2021/index.html","dd795c3dd44a0ce1628ef08cd30a1092"],["/archives/2021/page/2/index.html","827fc2b16b8807076e6c8b4f9c40e3c8"],["/archives/index.html","b39dfb355d7913cc77accbd6c25e674a"],["/archives/page/2/index.html","73ca2e9e8837de5e4b482f73255eae67"],["/artitalk/index.html","e74ebf42a7038b1c65864e8354b9036a"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/atom.xml","cda7087669272a58369609ce43a2b8cc"],["/bb/index.html","4b51a9f5560af7b36aee21da06e5e751"],["/categories/index.html","0f271d618e696502b7185934fa47ccc0"],["/categories/前端基础/index.html","b45f908407ded7484a6eb5091b3f3cc8"],["/categories/前端进阶/index.html","09868f62e563042371d40420b851973f"],["/categories/程序员必修/index.html","3580fef2c359fa0dde4033895c2ce734"],["/categories/面试/index.html","896a8f4e0f7f77e6ef0972ac659820ec"],["/categories/魔改/index.html","c04e0ac9dbf86c6c100091ccb6d4e1eb"],["/css/aplayer.css","ddcbd79780067c3941f243a7bebdd559"],["/css/bgc.css","fff99143e9fd5d0504ea8241c1cf3fa4"],["/css/custom.css","ba55f423a7cb6d329a503a799ca66f34"],["/css/index.css","cba88bb1bde0df25fa78c4173267afaa"],["/css/neonlight.css","ed144df7b8cce7251d6f15fbbdae5a46"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/157b9e6bd3841296e9df46651f8bec6-removebg-preview.png","bb308ab2ed4cf5731f1d0d15a7f9030d"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/4444.png","65f700e782700cb3dfd7af0db59ca2ca"],["/img/9050f3deb48f8c54cbb518ec34292df5e1fe7f94.png","c743ccd196007aeb31f107b4b493e6b5"],["/img/9465034f78f0f7366b3d9ec20455b319eac41337.png","842236aac7ef690d5960784795424544"],["/img/aaa.jpg","6a5a7844633c5bb81b35b0a914d35547"],["/img/afternew.png","5d5fb374e7d442f980ffc785fecbea25"],["/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["/img/beforenew.png","69f79b27b5abcf1d4b8cf4be3559db39"],["/img/bgc.jpg","1b811783648f9ef2352ada176a7c33cf"],["/img/bgc/after.png","49c02bb1923852d9601475c5b10d00b2"],["/img/bgc/ajax.jpg","8ef30977d157906f2126a99e1f16638b"],["/img/bgc/aplayer.jpg","8c51696ccecbed9cffbf72a4ec803ee8"],["/img/bgc/before.png","8a4f781e45a7012eec83c1cd5fd001cc"],["/img/bgc/bgc.jpg","9e1143d8811a106682783667ac03d3e1"],["/img/bgc/css.png","6500e8c6985e7e7cff88d28d7f557aa4"],["/img/bgc/cyberpunk.jpg","0c1cbb6ff13bb6208a0d2de2ff7e724f"],["/img/bgc/echarts.jpg","d76bf330d4f884be61a58f621a8f036f"],["/img/bgc/es6.jpg","f6ef52f88effeb006200656835768019"],["/img/bgc/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/bgc/gio.png","a00059489569b62202eb060425b74efd"],["/img/bgc/hexo.jpg","0b1b2ff5b44a7c7fd487aaee3ec96095"],["/img/bgc/html.jpg","73f93ca9faf2d530ecce1e950d934c59"],["/img/bgc/javaweb.png","90e836a17db8d912128bb829760dd4bf"],["/img/bgc/jojo.jpg","4cc6826e697ca7cffee5c6e5f88a8801"],["/img/bgc/jojologo-removebg-preview.png","30822d43dc3df2211c9ee69e17000feb"],["/img/bgc/jojologo.jpg","891c94a8315f9cbe68c5b9a57a7b19c6"],["/img/bgc/jojologo3.jpg","4034512526151f4aef0833bead8e91c4"],["/img/bgc/jolin.png","90bd8c8e1b3773ba73bd0558a2f287c7"],["/img/bgc/jolinlogo.png","122d0439ba02ecde40362522cb35d800"],["/img/bgc/jquery.jpg","558f23b412317052dec339ffa779abed"],["/img/bgc/jquery.png","4b5c2de1fa3c9e03af2ca364c1c04d12"],["/img/bgc/js.png","022ef01c84264cabd9b65bdf1310e363"],["/img/bgc/logo2.png","98c8dec7017d4bfb2640834b4182dd32"],["/img/bgc/ms1.jpg","8677cb2fd1f824fdd3209bd91742dbcf"],["/img/bgc/neonbgc.jpg","20ac7a2f702e0b3483f95c13db1141d7"],["/img/bgc/neonlight.jpg","73659802c4f1753a96edc8b02f73cc2d"],["/img/bgc/neonlight8.jpg","f6ef52f88effeb006200656835768019"],["/img/bgc/nodejs.jpg","dcb12a05b76399f72874ae3c8f2e7d4d"],["/img/bgc/sjk.jpg","e85eb753b55fbb55e42edfdd8265935a"],["/img/bgc/ubuntu.jpg","9a16f876d342ae944e1593d681a65087"],["/img/bgc/vue.jpg","9997f39f0b25e4763b148e0760ceb946"],["/img/bgc/wallhaven-39wq39.jpg","2db511cd9efde5229ed25ad874fda54f"],["/img/bgc/wallhaven-6q39ew.jpg","53fd3b8a75ea94db2f4da75cff0c4398"],["/img/bgc/wallhaven-76m9z9.jpg","b67e445a762237098181cc36aec5a0ca"],["/img/bgc/wallhaven-962ogx.jpg","6c1d294a191bcf83a50e7537559e2f71"],["/img/bgc/wallhaven-j5kdmp.jpg","3c32f90457d77df1750141bccef2aafb"],["/img/bgc/wallhaven-xlpx3z.jpg","a00c00ed18d5d42f392a98b749fca0ba"],["/img/bgc/wallhaven-ymly3x.jpg","7a6c3c226f5c48ec1beaac0cfe3d2575"],["/img/bgc/whitejotailang.png","4563015d9226472186c297a0217946a5"],["/img/bgc/xinfengjotaro.png","a82cf6d179ebe79e4d776f9717765d77"],["/img/empire.png","f93146076c2cd52c440843a1d473bffd"],["/img/f7fdc3cec3fdfc030a0a3e7bda3f8794a5c22680.png","48a7b669a21511b076116aba376342ca"],["/img/favicon.png","9a3f70c3d35fa52f4c506aca79ad3ecc"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/head/boji.jpg","2f4a0ec31d68cbba1a4dd8feb79e62b1"],["/img/head/jojo.png","cdb4b455a1328b2293446e226fe8472d"],["/img/head/jotaro.jpg","38c37b3c624e637b366bb387e9bce0f5"],["/img/head/jotarofire.png","b54c5a3f45fb40f17d8ad2ebebc4cc82"],["/img/joji.png","1b5797a3744888577f385739acce641d"],["/img/jojiimg.png","3991e6710f446a26c3640e04be9ba851"],["/img/joker.png","34cc2d991e42c8ff6bcaa94c4aeb997b"],["/img/sjk.jpg","360f2a555d5e53805e1aae70c9583152"],["/img/wallhaven-x8jl83.jpg","0141db506a6b4556789c4bb700132de4"],["/img/图层 1.png","d0d35e3b8b3e53ec54452a4d80f2563e"],["/index.html","a48b8cc2d3a31a4bd9704d2b620e900d"],["/js/addele.js","8d1b4ed3f52fde1123e2419a1bf8011f"],["/js/addnodestory.js","d5cddd7fe34e38e0782ff0fa2e477e2c"],["/js/collection.js","3c008c6c91d7adbdc49c77a67c9fa008"],["/js/eve.js","b4562c009f587b76dbe487567d3885df"],["/js/main.js","240e062def7897dd4c03a12bf07fdc65"],["/js/pwanewdir.js","08ac73a973855be130adaf469df1de8c"],["/js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["/js/search/local-search.js","33b3c0e197c029d5b198059220bbd5ab"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","12cef07c2e9bc8841a5380df4fd342f5"],["/lib/Meting.min.js","7b5e05378aa5c4dbdccbe9a34cf30adb"],["/link/index.html","048f9afb05e51b95299a7ae933ef4488"],["/live2d-widget/README.html","3d7233f7971913d0ec0f363a14a11cc3"],["/live2d-widget/assets/screenshot-1.png","30b70e6cd9be9812adcb347536f0da85"],["/live2d-widget/assets/screenshot-2.png","1295844e29a6d6dc3a4aa0db8faa7da7"],["/live2d-widget/assets/screenshot-3.png","4aa1995daf77bc19803648fe6a65c33e"],["/live2d-widget/autoload.js","6d9b31af84be07871c628328d4162048"],["/live2d-widget/demo/demo.html","ddabed04896079696623255ca934c5de"],["/live2d-widget/demo/login.html","69b5f251f312135cbb5dd1b9ff59b7d8"],["/live2d-widget/live2d.min.js","ee7efff8ff5d1d4bd4a0ff99affd3ec7"],["/live2d-widget/waifu-tips.js","e01c75f70a9465389471f638b1356bf8"],["/live2d-widget/waifu.css","0a4a7474046ce58dde9d78670e7514c4"],["/messageboard/index.html","44f2cc9ae954185fa5298000af2faddc"],["/page/2/index.html","ec64005a61fbb4c6694afc95d38e7a92"],["/posts/19f6c59c8434/Snipaste_2021-12-03_14-14-06.png","5125de571ac01ef350a996b2d6cb9b70"],["/posts/19f6c59c8434/image-20211123140552158.png","c24bd7ef1881445a8bb582dc58543fd5"],["/posts/19f6c59c8434/image-20211123160511823.png","878e7f5616415fe0362d1f4e8c5307d2"],["/posts/19f6c59c8434/index.html","6c21534d5c51e3d5a0fba828857ee4c4"],["/posts/2d51252021cb/index.html","0b9ee5f7fcaa3c3a47bfda494f13370e"],["/posts/2d6e53cb4ffb/image-20211121093831494.png","606516bfbb052843ca49c9579c924f4e"],["/posts/2d6e53cb4ffb/image-20211121094229851.png","80d99aa4e99993ff204df6b59e831367"],["/posts/2d6e53cb4ffb/image-20211121102128005.png","8b428e3eb1cae426d356af5f66a8e4a7"],["/posts/2d6e53cb4ffb/image-20211121144014486.png","4374e41f09a61debb20d706fa6f7d965"],["/posts/2d6e53cb4ffb/image-20211121144125322.png","dc082aa67e70839c844b917acd173f24"],["/posts/2d6e53cb4ffb/image-20211121144206836.png","1ee7337a7b43d7bcdd2fa8fa3af51b45"],["/posts/2d6e53cb4ffb/image-20211121153753552.png","b24189fde45bc6b6ec0a48bcb8aa2fc5"],["/posts/2d6e53cb4ffb/image-20211121153829064.png","b24189fde45bc6b6ec0a48bcb8aa2fc5"],["/posts/2d6e53cb4ffb/index.html","f274beb7ba7c40bad8796c7d44a0c901"],["/posts/5531b9d5d73a/index.html","8adc5cfa784c09b4a0488c63fbf7a208"],["/posts/5e431dbde90b/image-20211112170315535.png","1f01a82e78d11572833dc390cf435262"],["/posts/5e431dbde90b/image-20211112200611060.png","bd3a2616989a39ebbab94bc64ec60b65"],["/posts/5e431dbde90b/image-20211112200614264.png","bd3a2616989a39ebbab94bc64ec60b65"],["/posts/5e431dbde90b/image-20211112200649688.png","2887b9499632f585d743226ed0569571"],["/posts/5e431dbde90b/image-20211119204501828.png","bca7cf8d34685bea1f1f028aaf6a4cea"],["/posts/5e431dbde90b/index.html","db36f30575562085b5a881db0c98c68a"],["/posts/6327a1b7c765/index.html","a6cd8edf09a129d858bcfbcf27ba62a4"],["/posts/66e2d24f7085/index.html","2b8d4ac0c016d1d5cbe419b12f5c004d"],["/posts/708096096efb/index.html","c2d54dc4bd0b66126483ede68c34ccb0"],["/posts/708096096efb/naotu.png","ff925da00ca84be8a8f480f070480980"],["/posts/7eec245b196a/image-20210304143938049.png","5bf9d6a182e96c14983b492040590187"],["/posts/7eec245b196a/image-20210304143956297.png","5bf9d6a182e96c14983b492040590187"],["/posts/7eec245b196a/image-20210304150047242.png","292382ad524be5b537d3ffb2dc7b6909"],["/posts/7eec245b196a/image-20210310104620892.png","ab64d9bd3db3097630b22402a61f227f"],["/posts/7eec245b196a/image-20210310104651162.png","2c2328da1b8aa51bbc92cf2b2c1df05c"],["/posts/7eec245b196a/image-20210609203750536.png","c0574d10f55f8b88aa44f348b1cd22e6"],["/posts/7eec245b196a/image-20210610211429412.png","e62b08fd45f32a18421dcadf5a0c70bc"],["/posts/7eec245b196a/index.html","055cfa6217cbd714cc473256d62708c5"],["/posts/7fffe8d5dfea/index.html","a656f2b7e605c844308ad70c76149508"],["/posts/8a2953565bdb/index.html","5b53455f2bb4684e14682322ca7ca7ca"],["/posts/d7ed1be8a814/index.html","778be78e970fe6a54231b66aaaafb3a0"],["/posts/dc3e93748a4e/image-20210305202437206.png","0a07f8f3f352e09ac1201187718aa7d2"],["/posts/dc3e93748a4e/image-20210305202452493.png","018f2fc4bfcc9d408638419ceebcdecf"],["/posts/dc3e93748a4e/image-20210313152227462.png","2157be8c6551f40b9f290723ef3e72ed"],["/posts/dc3e93748a4e/image-20210328143759285.png","8ae2ca208331de2b53ba88b0b513a13d"],["/posts/dc3e93748a4e/image-20210328143929798.png","eb17bbe1ff5b7e5c0091299cb45a0e9d"],["/posts/dc3e93748a4e/image-20210328144031516.png","4221ba64ed5daed67df70082c971b2af"],["/posts/dc3e93748a4e/image-20210328153545692.png","b3196ecee9e98e8cfa4acaa0e226bf99"],["/posts/dc3e93748a4e/image-20210328153559582.png","b3196ecee9e98e8cfa4acaa0e226bf99"],["/posts/dc3e93748a4e/image-20210328153739807.png","3f596ff6f8448d4174bd36e297cb38ba"],["/posts/dc3e93748a4e/index.html","c3254bc3d13fcff4efa6bacc6de40903"],["/posts/df2fc0ed9242/image-20210324154900183.png","000ce91c28984a5c6b4d5957fd56508b"],["/posts/df2fc0ed9242/index.html","dffbb09b606b1d4757d308815e1faabc"],["/posts/f4f0b9164a1b/index.html","548544da92894998a6409447648da855"],["/posts/fd25b874aed6/index.html","2bfb4c83c81e9cbf25f557ada17bd616"],["/posts/fe8be42e029f/image-20210309185356772.png","fbafadc2e5dc4f9696e4d344619bb1c0"],["/posts/fe8be42e029f/image-20210309185737919.png","b8a260628281f8f247e0b76bfa457cd6"],["/posts/fe8be42e029f/image-20210316214659649.png","1fb2e25c9d13f72cecdf80836dd072d9"],["/posts/fe8be42e029f/image-20210316214817698.png","b5643b40ce1481f4daed5e246bfabc36"],["/posts/fe8be42e029f/image-20210419152356373.png","242232840a098c1a9bb6ec929469fad4"],["/posts/fe8be42e029f/image-20210419152900682.png","88d06334ea5a3a968ced3104daa39d86"],["/posts/fe8be42e029f/image-20210609090933593.png","dd9309af7cd030a74d859979b571946f"],["/posts/fe8be42e029f/image-20210609092445195.png","bce413b2999cdc72a655a40b46b9f4a0"],["/posts/fe8be42e029f/image-20210609094059704.png","61b02d209496e3eda76421ce4c722c6d"],["/posts/fe8be42e029f/image-20210609094109208.png","61b02d209496e3eda76421ce4c722c6d"],["/posts/fe8be42e029f/image-20210612110516345.png","3eee6d9afc2f72ed0419bab74eed6877"],["/posts/fe8be42e029f/image-20210612110553199.png","479348c44acef8a96ca1ff0e42ae87b1"],["/posts/fe8be42e029f/image-20210612110618411.png","95cddfb25420f6a7e8ec6686610e976f"],["/posts/fe8be42e029f/image-20210612110853429.png","acc0b086e28ecd5c1e87376802035298"],["/posts/fe8be42e029f/image-20210614154358625.png","4a3eeed8a454a346abad4c3640638c28"],["/posts/fe8be42e029f/image-20210614154559529.png","b566f8c61165bca0630cbc7b54d48e67"],["/posts/fe8be42e029f/index.html","0a63e01795d3a5f25dbc72e070689e97"],["/search.xml","efcb0ea918e187ca4b3d8d4f37b70480"],["/sitemap.xml","d76d6740a17f5438de5f21fb69e954d0"],["/sw-register.js","5d0838205becbd3213d36b41784b53ec"],["/tags/Ajax/index.html","77e4ae4dff60e9034fc19728ed75e10d"],["/tags/Echarts/index.html","39c1fe00f7abd31520e7af577ef0e848"],["/tags/HTML/index.html","de8b3935a3859da1e7b756d1fe600e36"],["/tags/Jquery/index.html","a9c4b6e309de3cd7c4c200019349fd56"],["/tags/Linux/index.html","028395c269b4aa462434284659def61e"],["/tags/Vue/index.html","32d04c221c20b2660f7ede4cd7803f57"],["/tags/css/index.html","cc7b244374fb266748fb8cab4909371c"],["/tags/es6/index.html","e8d3fc9f1a41c5c3a99116207050fb62"],["/tags/hexo/index.html","3ecfca46efea392b0a308c4af90f5279"],["/tags/http/index.html","d2f60f7f8251124139afe8b48a0ad8bb"],["/tags/index.html","9ef7ff122d9e532628d14d085b2f7385"],["/tags/javaweb/index.html","d70f36acfbb92aa1262eea2df1adfab2"],["/tags/js/index.html","42c5289f65bb23a652ae66ff061ecbce"],["/tags/mongodb/index.html","efbdb99ed220a16a9bbdcad470f74018"],["/tags/mysql/index.html","e64187aafa2f764cd12aea4574077368"],["/tags/nodejs/index.html","5e0f3ade08d5ba47d751f364b2fd69be"],["/tags/前端/index.html","88818e292205d3f832408b9b8c974ef5"],["/tags/网络/index.html","2c26d5e98c572056f7c9d1a0a3a1e611"],["/tags/面试/index.html","818d5c74e705992bb43ad4d362b8736f"],["/tags/魔改/index.html","925847f801b7518953114bb0a03ecda1"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');
var firstRegister = 1; // 默认1是首次安装SW， 0是SW更新


var ignoreUrlParametersMatching = [/^utm_/];


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var cleanResponse = function (originalResponse) {
    // 如果没有重定向响应，不需干啥
    if (!originalResponse.redirected) {
        return Promise.resolve(originalResponse);
    }

    // Firefox 50 及以下不知处 Response.body 流, 所以我们需要读取整个body以blob形式返回。
    var bodyPromise = 'body' in originalResponse ?
        Promise.resolve(originalResponse.body) :
        originalResponse.blob();

    return bodyPromise.then(function (body) {
        // new Response() 可同时支持 stream or Blob.
        return new Response(body, {
            headers: originalResponse.headers,
            status: originalResponse.status,
            statusText: originalResponse.statusText
        });
    });
};

var createCacheKey = function (originalUrl, paramName, paramValue,
    dontCacheBustUrlsMatching) {

    // 创建一个新的URL对象，避免影响原始URL
    var url = new URL(originalUrl);

    // 如果 dontCacheBustUrlsMatching 值没有设置，或是没有匹配到，将值拼接到url.serach后
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
        url.search += (url.search ? '&' : '') +
            encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
};

var isPathWhitelisted = function (whitelist, absoluteUrlString) {
    // 如果 whitelist 是空数组，则认为全部都在白名单内
    if (whitelist.length === 0) {
        return true;
    }

    // 否则逐个匹配正则匹配并返回
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function (whitelistedPathRegex) {
        return path.match(whitelistedPathRegex);
    });
};

var stripIgnoredUrlParameters = function (originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // 移除 hash; 查看 https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // 是否包含 '?'
        .split('&') // 分割成数组 'key=value' 的形式
        .map(function (kv) {
            return kv.split('='); // 分割每个 'key=value' 字符串成 [key, value] 形式
        })
        .filter(function (kv) {
            return ignoreUrlParametersMatching.every(function (ignoredRegex) {
                return !ignoredRegex.test(kv[0]); // 如果 key 没有匹配到任何忽略参数正则，就 Return true
            });
        })
        .map(function (kv) {
            return kv.join('='); // 重新把 [key, value] 格式转换为 'key=value' 字符串
        })
        .join('&'); // 将所有参数 'key=value' 以 '&' 拼接

    return url.toString();
};


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
    precacheConfig.map(function (item) {
        var relativeUrl = item[0];
        var hash = item[1];
        var absoluteUrl = new URL(relativeUrl, self.location);
        var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
        return [absoluteUrl.toString(), cacheKey];
    })
);

function setOfCachedUrls(cache) {
    return cache.keys().then(function (requests) {
        // 如果原cacheName中没有缓存任何收，就默认是首次安装，否则认为是SW更新
        if (requests && requests.length > 0) {
            firstRegister = 0; // SW更新
        }
        return requests.map(function (request) {
            return request.url;
        });
    }).then(function (urls) {
        return new Set(urls);
    });
}

self.addEventListener('install', function (event) {
    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return setOfCachedUrls(cache).then(function (cachedUrls) {
                return Promise.all(
                    Array.from(urlsToCacheKeys.values()).map(function (cacheKey) {
                        // 如果缓存中没有匹配到cacheKey，添加进去
                        if (!cachedUrls.has(cacheKey)) {
                            var request = new Request(cacheKey, { credentials: 'same-origin' });
                            return fetch(request).then(function (response) {
                                // 只要返回200才能继续，否则直接抛错
                                if (!response.ok) {
                                    throw new Error('Request for ' + cacheKey + ' returned a ' +
                                        'response with status ' + response.status);
                                }

                                return cleanResponse(response).then(function (responseToCache) {
                                    return cache.put(cacheKey, responseToCache);
                                });
                            });
                        }
                    })
                );
            });
        })
            .then(function () {
            
            // 强制 SW 状态 installing -> activate
            return self.skipWaiting();
            
        })
    );
});

self.addEventListener('activate', function (event) {
    var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return cache.keys().then(function (existingRequests) {
                return Promise.all(
                    existingRequests.map(function (existingRequest) {
                        // 删除原缓存中相同键值内容
                        if (!setOfExpectedUrls.has(existingRequest.url)) {
                            return cache.delete(existingRequest);
                        }
                    })
                );
            });
        }).then(function () {
            
            return self.clients.claim();
            
        }).then(function () {
                // 如果是首次安装 SW 时, 不发送更新消息（是否是首次安装，通过指定cacheName 中是否有缓存信息判断）
                // 如果不是首次安装，则是内容有更新，需要通知页面重载更新
                if (!firstRegister) {
                    return self.clients.matchAll()
                        .then(function (clients) {
                            if (clients && clients.length) {
                                clients.forEach(function (client) {
                                    client.postMessage('sw.update');
                                })
                            }
                        })
                }
            })
    );
});



    self.addEventListener('fetch', function (event) {
        if (event.request.method === 'GET') {

            // 是否应该 event.respondWith()，需要我们逐步的判断
            // 而且也方便了后期做特殊的特殊
            var shouldRespond;


            // 首先去除已配置的忽略参数及hash
            // 查看缓存简直中是否包含该请求，包含就将shouldRespond 设为true
            var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
            shouldRespond = urlsToCacheKeys.has(url);

            // 如果 shouldRespond 是 false, 我们在url后默认增加 'index.html'
            // (或者是你在配置文件中自行配置的 directoryIndex 参数值)，继续查找缓存列表
            var directoryIndex = 'index.html';
            if (!shouldRespond && directoryIndex) {
                url = addDirectoryIndex(url, directoryIndex);
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 仍是 false，检查是否是navigation
            // request， 如果是的话，判断是否能与 navigateFallbackWhitelist 正则列表匹配
            var navigateFallback = '';
            if (!shouldRespond &&
                navigateFallback &&
                (event.request.mode === 'navigate') &&
                isPathWhitelisted([], event.request.url)
            ) {
                url = new URL(navigateFallback, self.location).toString();
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 被置为 true
            // 则 event.respondWith()匹配缓存返回结果，匹配不成就直接请求.
            if (shouldRespond) {
                event.respondWith(
                    caches.open(cacheName).then(function (cache) {
                        return cache.match(urlsToCacheKeys.get(url)).then(function (response) {
                            if (response) {
                                return response;
                            }
                            throw Error('The cached response that was expected is missing.');
                        });
                    }).catch(function (e) {
                        // 如果捕获到异常错误，直接返回 fetch() 请求资源
                        console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
                        return fetch(event.request);
                    })
                );
            }
        }
    });



// *** Start of auto-included sw-toolbox code. ***
/* 
 Copyright 2016 Google Inc. All Rights Reserved.

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

     http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/!function(e){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var t;t="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this,t.toolbox=e()}}(function(){return function e(t,n,r){function o(c,s){if(!n[c]){if(!t[c]){var a="function"==typeof require&&require;if(!s&&a)return a(c,!0);if(i)return i(c,!0);var u=new Error("Cannot find module '"+c+"'");throw u.code="MODULE_NOT_FOUND",u}var f=n[c]={exports:{}};t[c][0].call(f.exports,function(e){var n=t[c][1][e];return o(n?n:e)},f,f.exports,e,t,n,r)}return n[c].exports}for(var i="function"==typeof require&&require,c=0;c<r.length;c++)o(r[c]);return o}({1:[function(e,t,n){"use strict";function r(e,t){t=t||{};var n=t.debug||m.debug;n&&console.log("[sw-toolbox] "+e)}function o(e){var t;return e&&e.cache&&(t=e.cache.name),t=t||m.cache.name,caches.open(t)}function i(e,t){t=t||{};var n=t.successResponses||m.successResponses;return fetch(e.clone()).then(function(r){return"GET"===e.method&&n.test(r.status)&&o(t).then(function(n){n.put(e,r).then(function(){var r=t.cache||m.cache;(r.maxEntries||r.maxAgeSeconds)&&r.name&&c(e,n,r)})}),r.clone()})}function c(e,t,n){var r=s.bind(null,e,t,n);d=d?d.then(r):r()}function s(e,t,n){var o=e.url,i=n.maxAgeSeconds,c=n.maxEntries,s=n.name,a=Date.now();return r("Updating LRU order for "+o+". Max entries is "+c+", max age is "+i),g.getDb(s).then(function(e){return g.setTimestampForUrl(e,o,a)}).then(function(e){return g.expireEntries(e,c,i,a)}).then(function(e){r("Successfully updated IDB.");var n=e.map(function(e){return t.delete(e)});return Promise.all(n).then(function(){r("Done with cache cleanup.")})}).catch(function(e){r(e)})}function a(e,t,n){return r("Renaming cache: ["+e+"] to ["+t+"]",n),caches.delete(t).then(function(){return Promise.all([caches.open(e),caches.open(t)]).then(function(t){var n=t[0],r=t[1];return n.keys().then(function(e){return Promise.all(e.map(function(e){return n.match(e).then(function(t){return r.put(e,t)})}))}).then(function(){return caches.delete(e)})})})}function u(e,t){return o(t).then(function(t){return t.add(e)})}function f(e,t){return o(t).then(function(t){return t.delete(e)})}function h(e){e instanceof Promise||p(e),m.preCacheItems=m.preCacheItems.concat(e)}function p(e){var t=Array.isArray(e);if(t&&e.forEach(function(e){"string"==typeof e||e instanceof Request||(t=!1)}),!t)throw new TypeError("The precache method expects either an array of strings and/or Requests or a Promise that resolves to an array of strings and/or Requests.");return e}function l(e,t,n){if(!e)return!1;if(t){var r=e.headers.get("date");if(r){var o=new Date(r);if(o.getTime()+1e3*t<n)return!1}}return!0}var d,m=e("./options"),g=e("./idb-cache-expiration");t.exports={debug:r,fetchAndCache:i,openCache:o,renameCache:a,cache:u,uncache:f,precache:h,validatePrecacheInput:p,isResponseFresh:l}},{"./idb-cache-expiration":2,"./options":4}],2:[function(e,t,n){"use strict";function r(e){return new Promise(function(t,n){var r=indexedDB.open(u+e,f);r.onupgradeneeded=function(){var e=r.result.createObjectStore(h,{keyPath:p});e.createIndex(l,l,{unique:!1})},r.onsuccess=function(){t(r.result)},r.onerror=function(){n(r.error)}})}function o(e){return e in d||(d[e]=r(e)),d[e]}function i(e,t,n){return new Promise(function(r,o){var i=e.transaction(h,"readwrite"),c=i.objectStore(h);c.put({url:t,timestamp:n}),i.oncomplete=function(){r(e)},i.onabort=function(){o(i.error)}})}function c(e,t,n){return t?new Promise(function(r,o){var i=1e3*t,c=[],s=e.transaction(h,"readwrite"),a=s.objectStore(h),u=a.index(l);u.openCursor().onsuccess=function(e){var t=e.target.result;if(t&&n-i>t.value[l]){var r=t.value[p];c.push(r),a.delete(r),t.continue()}},s.oncomplete=function(){r(c)},s.onabort=o}):Promise.resolve([])}function s(e,t){return t?new Promise(function(n,r){var o=[],i=e.transaction(h,"readwrite"),c=i.objectStore(h),s=c.index(l),a=s.count();s.count().onsuccess=function(){var e=a.result;e>t&&(s.openCursor().onsuccess=function(n){var r=n.target.result;if(r){var i=r.value[p];o.push(i),c.delete(i),e-o.length>t&&r.continue()}})},i.oncomplete=function(){n(o)},i.onabort=r}):Promise.resolve([])}function a(e,t,n,r){return c(e,n,r).then(function(n){return s(e,t).then(function(e){return n.concat(e)})})}var u="sw-toolbox-",f=1,h="store",p="url",l="timestamp",d={};t.exports={getDb:o,setTimestampForUrl:i,expireEntries:a}},{}],3:[function(e,t,n){"use strict";function r(e){var t=a.match(e.request);t?e.respondWith(t(e.request)):a.default&&"GET"===e.request.method&&0===e.request.url.indexOf("http")&&e.respondWith(a.default(e.request))}function o(e){s.debug("activate event fired");var t=u.cache.name+"$$$inactive$$$";e.waitUntil(s.renameCache(t,u.cache.name))}function i(e){return e.reduce(function(e,t){return e.concat(t)},[])}function c(e){var t=u.cache.name+"$$$inactive$$$";s.debug("install event fired"),s.debug("creating cache ["+t+"]"),e.waitUntil(s.openCache({cache:{name:t}}).then(function(e){return Promise.all(u.preCacheItems).then(i).then(s.validatePrecacheInput).then(function(t){return s.debug("preCache list: "+(t.join(", ")||"(none)")),e.addAll(t)})}))}e("serviceworker-cache-polyfill");var s=e("./helpers"),a=e("./router"),u=e("./options");t.exports={fetchListener:r,activateListener:o,installListener:c}},{"./helpers":1,"./options":4,"./router":6,"serviceworker-cache-polyfill":16}],4:[function(e,t,n){"use strict";var r;r=self.registration?self.registration.scope:self.scope||new URL("./",self.location).href,t.exports={cache:{name:"$$$toolbox-cache$$$"+r+"$$$",maxAgeSeconds:null,maxEntries:null},debug:!1,networkTimeoutSeconds:null,preCacheItems:[],successResponses:/^0|([123]\d\d)|(40[14567])|410$/}},{}],5:[function(e,t,n){"use strict";var r=new URL("./",self.location),o=r.pathname,i=e("path-to-regexp"),c=function(e,t,n,r){t instanceof RegExp?this.fullUrlRegExp=t:(0!==t.indexOf("/")&&(t=o+t),this.keys=[],this.regexp=i(t,this.keys)),this.method=e,this.options=r,this.handler=n};c.prototype.makeHandler=function(e){var t;if(this.regexp){var n=this.regexp.exec(e);t={},this.keys.forEach(function(e,r){t[e.name]=n[r+1]})}return function(e){return this.handler(e,t,this.options)}.bind(this)},t.exports=c},{"path-to-regexp":15}],6:[function(e,t,n){"use strict";function r(e){return e.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&")}var o=e("./route"),i=e("./helpers"),c=function(e,t){for(var n=e.entries(),r=n.next(),o=[];!r.done;){var i=new RegExp(r.value[0]);i.test(t)&&o.push(r.value[1]),r=n.next()}return o},s=function(){this.routes=new Map,this.routes.set(RegExp,new Map),this.default=null};["get","post","put","delete","head","any"].forEach(function(e){s.prototype[e]=function(t,n,r){return this.add(e,t,n,r)}}),s.prototype.add=function(e,t,n,c){c=c||{};var s;t instanceof RegExp?s=RegExp:(s=c.origin||self.location.origin,s=s instanceof RegExp?s.source:r(s)),e=e.toLowerCase();var a=new o(e,t,n,c);this.routes.has(s)||this.routes.set(s,new Map);var u=this.routes.get(s);u.has(e)||u.set(e,new Map);var f=u.get(e),h=a.regexp||a.fullUrlRegExp;f.has(h.source)&&i.debug('"'+t+'" resolves to same regex as existing route.'),f.set(h.source,a)},s.prototype.matchMethod=function(e,t){var n=new URL(t),r=n.origin,o=n.pathname;return this._match(e,c(this.routes,r),o)||this._match(e,[this.routes.get(RegExp)],t)},s.prototype._match=function(e,t,n){if(0===t.length)return null;for(var r=0;r<t.length;r++){var o=t[r],i=o&&o.get(e.toLowerCase());if(i){var s=c(i,n);if(s.length>0)return s[0].makeHandler(n)}}return null},s.prototype.match=function(e){return this.matchMethod(e.method,e.url)||this.matchMethod("any",e.url)},t.exports=new s},{"./helpers":1,"./route":5}],7:[function(e,t,n){"use strict";function r(e,t,n){return n=n||{},i.debug("Strategy: cache first ["+e.url+"]",n),i.openCache(n).then(function(t){return t.match(e).then(function(t){var r=n.cache||o.cache,c=Date.now();return i.isResponseFresh(t,r.maxAgeSeconds,c)?t:i.fetchAndCache(e,n)})})}var o=e("../options"),i=e("../helpers");t.exports=r},{"../helpers":1,"../options":4}],8:[function(e,t,n){"use strict";function r(e,t,n){return n=n||{},i.debug("Strategy: cache only ["+e.url+"]",n),i.openCache(n).then(function(t){return t.match(e).then(function(e){var t=n.cache||o.cache,r=Date.now();if(i.isResponseFresh(e,t.maxAgeSeconds,r))return e})})}var o=e("../options"),i=e("../helpers");t.exports=r},{"../helpers":1,"../options":4}],9:[function(e,t,n){"use strict";function r(e,t,n){return o.debug("Strategy: fastest ["+e.url+"]",n),new Promise(function(r,c){var s=!1,a=[],u=function(e){a.push(e.toString()),s?c(new Error('Both cache and network failed: "'+a.join('", "')+'"')):s=!0},f=function(e){e instanceof Response?r(e):u("No result returned")};o.fetchAndCache(e.clone(),n).then(f,u),i(e,t,n).then(f,u)})}var o=e("../helpers"),i=e("./cacheOnly");t.exports=r},{"../helpers":1,"./cacheOnly":8}],10:[function(e,t,n){t.exports={networkOnly:e("./networkOnly"),networkFirst:e("./networkFirst"),cacheOnly:e("./cacheOnly"),cacheFirst:e("./cacheFirst"),fastest:e("./fastest")}},{"./cacheFirst":7,"./cacheOnly":8,"./fastest":9,"./networkFirst":11,"./networkOnly":12}],11:[function(e,t,n){"use strict";function r(e,t,n){n=n||{};var r=n.successResponses||o.successResponses,c=n.networkTimeoutSeconds||o.networkTimeoutSeconds;return i.debug("Strategy: network first ["+e.url+"]",n),i.openCache(n).then(function(t){var s,a,u=[];if(c){var f=new Promise(function(r){s=setTimeout(function(){t.match(e).then(function(e){var t=n.cache||o.cache,c=Date.now(),s=t.maxAgeSeconds;i.isResponseFresh(e,s,c)&&r(e)})},1e3*c)});u.push(f)}var h=i.fetchAndCache(e,n).then(function(e){if(s&&clearTimeout(s),r.test(e.status))return e;throw i.debug("Response was an HTTP error: "+e.statusText,n),a=e,new Error("Bad response")}).catch(function(r){return i.debug("Network or response error, fallback to cache ["+e.url+"]",n),t.match(e).then(function(e){if(e)return e;if(a)return a;throw r})});return u.push(h),Promise.race(u)})}var o=e("../options"),i=e("../helpers");t.exports=r},{"../helpers":1,"../options":4}],12:[function(e,t,n){"use strict";function r(e,t,n){return o.debug("Strategy: network only ["+e.url+"]",n),fetch(e)}var o=e("../helpers");t.exports=r},{"../helpers":1}],13:[function(e,t,n){"use strict";var r=e("./options"),o=e("./router"),i=e("./helpers"),c=e("./strategies"),s=e("./listeners");i.debug("Service Worker Toolbox is loading"),self.addEventListener("install",s.installListener),self.addEventListener("activate",s.activateListener),self.addEventListener("fetch",s.fetchListener),t.exports={networkOnly:c.networkOnly,networkFirst:c.networkFirst,cacheOnly:c.cacheOnly,cacheFirst:c.cacheFirst,fastest:c.fastest,router:o,options:r,cache:i.cache,uncache:i.uncache,precache:i.precache}},{"./helpers":1,"./listeners":3,"./options":4,"./router":6,"./strategies":10}],14:[function(e,t,n){t.exports=Array.isArray||function(e){return"[object Array]"==Object.prototype.toString.call(e)}},{}],15:[function(e,t,n){function r(e,t){for(var n,r=[],o=0,i=0,c="",s=t&&t.delimiter||"/";null!=(n=x.exec(e));){var f=n[0],h=n[1],p=n.index;if(c+=e.slice(i,p),i=p+f.length,h)c+=h[1];else{var l=e[i],d=n[2],m=n[3],g=n[4],v=n[5],w=n[6],y=n[7];c&&(r.push(c),c="");var b=null!=d&&null!=l&&l!==d,E="+"===w||"*"===w,R="?"===w||"*"===w,k=n[2]||s,$=g||v;r.push({name:m||o++,prefix:d||"",delimiter:k,optional:R,repeat:E,partial:b,asterisk:!!y,pattern:$?u($):y?".*":"[^"+a(k)+"]+?"})}}return i<e.length&&(c+=e.substr(i)),c&&r.push(c),r}function o(e,t){return s(r(e,t))}function i(e){return encodeURI(e).replace(/[\/?#]/g,function(e){return"%"+e.charCodeAt(0).toString(16).toUpperCase()})}function c(e){return encodeURI(e).replace(/[?#]/g,function(e){return"%"+e.charCodeAt(0).toString(16).toUpperCase()})}function s(e){for(var t=new Array(e.length),n=0;n<e.length;n++)"object"==typeof e[n]&&(t[n]=new RegExp("^(?:"+e[n].pattern+")$"));return function(n,r){for(var o="",s=n||{},a=r||{},u=a.pretty?i:encodeURIComponent,f=0;f<e.length;f++){var h=e[f];if("string"!=typeof h){var p,l=s[h.name];if(null==l){if(h.optional){h.partial&&(o+=h.prefix);continue}throw new TypeError('Expected "'+h.name+'" to be defined')}if(v(l)){if(!h.repeat)throw new TypeError('Expected "'+h.name+'" to not repeat, but received `'+JSON.stringify(l)+"`");if(0===l.length){if(h.optional)continue;throw new TypeError('Expected "'+h.name+'" to not be empty')}for(var d=0;d<l.length;d++){if(p=u(l[d]),!t[f].test(p))throw new TypeError('Expected all "'+h.name+'" to match "'+h.pattern+'", but received `'+JSON.stringify(p)+"`");o+=(0===d?h.prefix:h.delimiter)+p}}else{if(p=h.asterisk?c(l):u(l),!t[f].test(p))throw new TypeError('Expected "'+h.name+'" to match "'+h.pattern+'", but received "'+p+'"');o+=h.prefix+p}}else o+=h}return o}}function a(e){return e.replace(/([.+*?=^!:${}()[\]|\/\\])/g,"\\$1")}function u(e){return e.replace(/([=!:$\/()])/g,"\\$1")}function f(e,t){return e.keys=t,e}function h(e){return e.sensitive?"":"i"}function p(e,t){var n=e.source.match(/\((?!\?)/g);if(n)for(var r=0;r<n.length;r++)t.push({name:r,prefix:null,delimiter:null,optional:!1,repeat:!1,partial:!1,asterisk:!1,pattern:null});return f(e,t)}function l(e,t,n){for(var r=[],o=0;o<e.length;o++)r.push(g(e[o],t,n).source);var i=new RegExp("(?:"+r.join("|")+")",h(n));return f(i,t)}function d(e,t,n){return m(r(e,n),t,n)}function m(e,t,n){v(t)||(n=t||n,t=[]),n=n||{};for(var r=n.strict,o=n.end!==!1,i="",c=0;c<e.length;c++){var s=e[c];if("string"==typeof s)i+=a(s);else{var u=a(s.prefix),p="(?:"+s.pattern+")";t.push(s),s.repeat&&(p+="(?:"+u+p+")*"),p=s.optional?s.partial?u+"("+p+")?":"(?:"+u+"("+p+"))?":u+"("+p+")",i+=p}}var l=a(n.delimiter||"/"),d=i.slice(-l.length)===l;return r||(i=(d?i.slice(0,-l.length):i)+"(?:"+l+"(?=$))?"),i+=o?"$":r&&d?"":"(?="+l+"|$)",f(new RegExp("^"+i,h(n)),t)}function g(e,t,n){return v(t)||(n=t||n,t=[]),n=n||{},e instanceof RegExp?p(e,t):v(e)?l(e,t,n):d(e,t,n)}var v=e("isarray");t.exports=g,t.exports.parse=r,t.exports.compile=o,t.exports.tokensToFunction=s,t.exports.tokensToRegExp=m;var x=new RegExp(["(\\\\.)","([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))"].join("|"),"g")},{isarray:14}],16:[function(e,t,n){!function(){var e=Cache.prototype.addAll,t=navigator.userAgent.match(/(Firefox|Chrome)\/(\d+\.)/);if(t)var n=t[1],r=parseInt(t[2]);e&&(!t||"Firefox"===n&&r>=46||"Chrome"===n&&r>=50)||(Cache.prototype.addAll=function(e){function t(e){this.name="NetworkError",this.code=19,this.message=e}var n=this;return t.prototype=Object.create(Error.prototype),Promise.resolve().then(function(){if(arguments.length<1)throw new TypeError;return e=e.map(function(e){return e instanceof Request?e:String(e)}),Promise.all(e.map(function(e){"string"==typeof e&&(e=new Request(e));var n=new URL(e.url).protocol;if("http:"!==n&&"https:"!==n)throw new t("Invalid scheme");return fetch(e.clone())}))}).then(function(r){if(r.some(function(e){return!e.ok}))throw new t("Incorrect response status");return Promise.all(r.map(function(t,r){return n.put(e[r],t)}))}).then(function(){})},Cache.prototype.add=function(e){return this.addAll([e])})}()},{}]},{},[13])(13)});


// *** End of auto-included sw-toolbox code. ***



// Runtime cache 配置转换后的 toolbox 代码.

toolbox.router.get("/*", toolbox.cacheFirst, {"origin":"cdn.jsdelivr.net"});





/* eslint-enable */
