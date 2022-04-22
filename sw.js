/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","58ba760e02fbb811e964156d12b386ab"],["/about/index.html","3fe07203fcd3cdf9f96b75538cf150f3"],["/archives/2021/11/index.html","6fb661f30216e2ec60b79416cd91294d"],["/archives/2021/12/index.html","7aebc68a3f9d2c7fadb955896d31c98a"],["/archives/2021/index.html","a66ea94d66461c93d5989840d33c72a1"],["/archives/2021/page/2/index.html","d26aafb058398e7d1b0cc92dc934a1c4"],["/archives/2022/01/index.html","4282ac20e2cc8f9d422468b26c878eca"],["/archives/2022/01/page/2/index.html","06b4e8e272a4be802da7230d4ad7594c"],["/archives/2022/02/index.html","6b53e378ccc33924232be39c29c025e5"],["/archives/2022/03/index.html","5c46be904506331c09be4b5311490c2c"],["/archives/2022/04/index.html","ad803f5bdd6ab9aa03f8c97dd72c3e68"],["/archives/2022/04/page/2/index.html","9b29c585c32c89b25f8e26028edc9e70"],["/archives/2022/index.html","c50accd53e498f7b4d3139dbdf01271d"],["/archives/2022/page/2/index.html","d3623b17a8fb436106a0d26ce9ff1ee3"],["/archives/2022/page/3/index.html","47d41d53b118741dfe5bead0c5cd31b8"],["/archives/2022/page/4/index.html","42916e8d3bc31527d5a036d26945cd2c"],["/archives/index.html","bc2428ddf00adafe3b8d3e6c9380b078"],["/archives/page/2/index.html","5fe7c2e1eb13e71a3acaf17a5790f292"],["/archives/page/3/index.html","7a4cb9b737ae2847224aabf6de7185a6"],["/archives/page/4/index.html","7f00b9a1d9aae7e4b49752003e3209cd"],["/archives/page/5/index.html","976f5b40afabb0a580ac7e3179a85282"],["/archives/page/6/index.html","15bffc351f0b2e24767315a0759a2205"],["/artitalk/index.html","f372d4e1905626f00da40557cc74c295"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/atom.xml","3186166d993b58705184c0a85cd8f8d4"],["/bb/index.html","d30fd69f3f0018eba061810cc0fbeecc"],["/categories/index.html","e7f8df798d15569f0cc805bd20aea7ea"],["/categories/前端基础/index.html","36ac63aae78204e9444fcbf60ae5fd47"],["/categories/前端进阶/index.html","07030f8a91bc12c1091b617d6dd071e3"],["/categories/前端进阶/page/2/index.html","f55030d3f0b6efc612bc46963215aa3c"],["/categories/前端进阶/page/3/index.html","f550168444da62e14f94440a674a7ae0"],["/categories/工具/index.html","69b45beca373cf23adafc00722f234a6"],["/categories/程序员必修/index.html","7a796f265c2db95eca2d86faef21598c"],["/categories/面试/index.html","e77d9426e9f69cc212db2af4112eb749"],["/categories/面试/page/2/index.html","050fc7cee0c0527003310efa5fc22512"],["/categories/魔改/index.html","bd200fa6347e35399643b1429b588fcd"],["/css/animate.min.css","55009d64191e6f9e712a841773ee6611"],["/css/aplayer.css","ddcbd79780067c3941f243a7bebdd559"],["/css/bgc.css","479cdfb8d6b64fccf95153ccc2ebc928"],["/css/custom.css","ba55f423a7cb6d329a503a799ca66f34"],["/css/index.css","a6c0cb436d593d1fe803def26a691ebb"],["/css/neonlight.css","da78e969661c4d6e9f4c1213eba8b8d6"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/157b9e6bd3841296e9df46651f8bec6-removebg-preview.png","bb308ab2ed4cf5731f1d0d15a7f9030d"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/4444.png","65f700e782700cb3dfd7af0db59ca2ca"],["/img/9050f3deb48f8c54cbb518ec34292df5e1fe7f94.png","c743ccd196007aeb31f107b4b493e6b5"],["/img/aaa.jpg","6a5a7844633c5bb81b35b0a914d35547"],["/img/afternew.png","5d5fb374e7d442f980ffc785fecbea25"],["/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["/img/beforenew.png","69f79b27b5abcf1d4b8cf4be3559db39"],["/img/bgc.jpg","1b811783648f9ef2352ada176a7c33cf"],["/img/bgc/1.png","4586c5fa0183b05b7452cb5373c0c60d"],["/img/bgc/2.png","a7c142f1bc2ab6a76e8187c2272cae1e"],["/img/bgc/3.png","087631d84d82550e4292baf6653e0bcf"],["/img/bgc/4.png","7826c94c76e084de3df4cc54055683b2"],["/img/bgc/5.png","3716efdaf9a0d6cdf08576e5239e2e0c"],["/img/bgc/MileStone项目杂谈.jpg","5cf842d5df8a84981ecc60bc446e862a"],["/img/bgc/after.png","9fabcb0ed02d2c28a8dd76a9fb7a5bcf"],["/img/bgc/ajax.jpg","f058544f8a1d9565d0fcbba2beeb77b6"],["/img/bgc/before.png","d42e0836dc7aeb5c6ac3036047d5f1d9"],["/img/bgc/bgc.jpg","d3823f30edf3b54a4dda8968c050d9fb"],["/img/bgc/code2.jpg","f6ef52f88effeb006200656835768019"],["/img/bgc/css.png","6500e8c6985e7e7cff88d28d7f557aa4"],["/img/bgc/cyberpunk.jpg","72b2ed74a64f89915c5504a7905456b8"],["/img/bgc/default.jpg","d47700fa220cbda3101d7d51137c3338"],["/img/bgc/echarts.jpg","ca9cff91ec072fde7477863a1861406a"],["/img/bgc/es6.jpg","d29e7de6f6eec69bfe754aa9838785cf"],["/img/bgc/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/bgc/gio.png","9c5e50718601d3774f3b33d09af388f8"],["/img/bgc/html.jpg","f77f736241eae0e090eb336a50918a74"],["/img/bgc/index.jpg","b8c3debd17dc84991778826d8bcddf40"],["/img/bgc/javaweb.png","90e836a17db8d912128bb829760dd4bf"],["/img/bgc/jojologo-removebg-preview.png","30822d43dc3df2211c9ee69e17000feb"],["/img/bgc/jojologo.jpg","068874ae20beffb79fedacb43cc85fd9"],["/img/bgc/jojologo3.jpg","9bdc7f6dde78a90a8925aba6bfe4199e"],["/img/bgc/jolin.png","90bd8c8e1b3773ba73bd0558a2f287c7"],["/img/bgc/jolinlogo.png","97a9083e5a819fef92c7c35fd009d2e6"],["/img/bgc/jquery.jpg","558f23b412317052dec339ffa779abed"],["/img/bgc/jquery.png","4b5c2de1fa3c9e03af2ca364c1c04d12"],["/img/bgc/js.png","022ef01c84264cabd9b65bdf1310e363"],["/img/bgc/landingpage.jpg","ab88217fb76d9e40c573c2fc3cf24a45"],["/img/bgc/logo2.png","98c8dec7017d4bfb2640834b4182dd32"],["/img/bgc/meiriyimian.jpg","541d97c206eb47370fbe664fc13d59bb"],["/img/bgc/milestone.jpg","8f43613c730f4d2c970819c39ff54b29"],["/img/bgc/ms1.jpg","00c7088badb76fbef0bed92e9ddb4626"],["/img/bgc/neonlight.jpg","3566a1e4cd2c598aa06723541ad98c32"],["/img/bgc/neonlight8.jpg","d29e7de6f6eec69bfe754aa9838785cf"],["/img/bgc/nodejs.jpg","b190f2f48b3fab7557ba2d631154e1fd"],["/img/bgc/onepiece.jpg","63441a8c9e6a4a4e550dcfd404530b4f"],["/img/bgc/op2.png","9d5104b349c6158cfa6dfa538ac9c9a2"],["/img/bgc/picgo.jpg","7db7ea9485a1c89e88fc64dfa740fc65"],["/img/bgc/rgb.jpg","c005c879eda29330c0585adac2bd9596"],["/img/bgc/shuzuquchong.jpg","fbf2db16cd99b76ab50b01b6fc64be60"],["/img/bgc/sjk.jpg","8b2ded959ee7d10ff589a4a81a71863a"],["/img/bgc/standard.jpg","058bcd3e8ac10ab50b0b7bf89c9f4e9a"],["/img/bgc/ubuntu.jpg","e2d49e81d44b8f301fc19c9e01c36393"],["/img/bgc/vue.jpg","ebd691a3825d42e739ab1cf368a85cb9"],["/img/bgc/wallhaven-39wq39.jpg","8d580decfec38587f2c4686104b6b79b"],["/img/bgc/wallhaven-76m9z9.jpg","7e7928239f7251ec6f594dca854239b6"],["/img/bgc/wallhaven-962ogx.jpg","1d0757ba5b17159318d0b5ac3f5fede0"],["/img/bgc/wallhaven-xlpx3z.jpg","af9114f7b84f0fe62e46c59e5587f678"],["/img/bgc/wallhaven-ymly3x.jpg","d72691420acd959ea9f506ae7e0afb14"],["/img/bgc/whitejotailang.png","3d61863dc9eb0847385a5e7052d117b0"],["/img/bgc/xinfengjotaro.png","a82cf6d179ebe79e4d776f9717765d77"],["/img/bgc/牛客网刷题record.jpg","4925e7cdba5881aab3cfa850d6d748dd"],["/img/css系列/flex布局.jpg","7a1e7eb07b07bd5cf287cfddd0e7d6bf"],["/img/empire.png","f93146076c2cd52c440843a1d473bffd"],["/img/favicon.png","9a3f70c3d35fa52f4c506aca79ad3ecc"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/head/boji.jpg","2f4a0ec31d68cbba1a4dd8feb79e62b1"],["/img/head/jojo.png","cdb4b455a1328b2293446e226fe8472d"],["/img/head/jotaro.jpg","38c37b3c624e637b366bb387e9bce0f5"],["/img/head/jotarofire.png","b54c5a3f45fb40f17d8ad2ebebc4cc82"],["/img/joji.png","1b5797a3744888577f385739acce641d"],["/img/jojiimg.png","3991e6710f446a26c3640e04be9ba851"],["/img/joker.png","34cc2d991e42c8ff6bcaa94c4aeb997b"],["/img/js系列/你所不知道的JavaScript①--数据类型及周边.jpg","4d8ee06e0dc984a8f351a621ae2aea20"],["/img/js系列/你所不知道的JavaScript②--this及周边.jpg","e2790de1ce93ce5893472897c9a3b473"],["/img/js系列/你所不知道的JavaScript③--原型及周边.jpg","eafcd233982048eba211a6a79f01b644"],["/img/js系列/你所不知道的JavaScript④--异步任务与事件.jpg","2e904af9ff7f84df1fe9ff92dbfb53ce"],["/img/js系列/你所不知道的JavaScript⑤--垃圾回收与内存泄漏.jpg","4e49c961c784ae73b478e077d20dd011"],["/img/js系列/你所不知道的JavaScript⑥--面向对象与模块化.jpg","9ed9b5f248f731f0c4a548537af7b9e4"],["/img/js系列/你所不知道的JavaScript总集篇.jpg","08030c6cd5637b003ecbf6433d7347d6"],["/img/killerqueen.gif","9f182907f87f5cbfbc03ee8e5504cc3b"],["/img/sjk.jpg","360f2a555d5e53805e1aae70c9583152"],["/img/standCharts.png","842236aac7ef690d5960784795424544"],["/img/standCharts2.png","48a7b669a21511b076116aba376342ca"],["/img/vue系列/MileStone项目杂谈.jpg","aacd762c2899625ad308ff6f088af10f"],["/img/vue系列/Vuejs灵魂之问.jpg","880c47119778e9066b34583a2d06d9c9"],["/img/vue系列/Vue打包优化+可视化js体积.jpg","cabbb875df6e2c16ec54f71bf21b2763"],["/img/vue系列/Vue核心.jpg","7638a76373417712a7cb52ebfa770e65"],["/img/vue系列/Vue组件化编程+Vuex.jpg","624e5fcca5f0d118afb66f65c7089b31"],["/img/vue系列/Vue静态资源.jpg","e39835506d1b002e19b61ec0cb4f576b"],["/img/vue系列/footok项目杂谈.jpg","80585b7fb1146615250a40e54e8a4c7b"],["/img/vue系列/logo.svg","01a7ce770df00bd2fbd87203503f44ad"],["/img/vue系列/vue-router.jpg","544078211c524c5018eef2da39517c6e"],["/img/vue系列/vue3.jpg","46cadf17d61e9199c742ff202410df38"],["/img/vue系列/深入浅出vuejs.jpg","a7d10a483af63bec8024d1d9c5b77d6b"],["/img/wallhaven-x8jl83.jpg","0141db506a6b4556789c4bb700132de4"],["/img/webpack系列/webpack5实战指南.jpg","d0af6e1536d7d0e54fba7923c7074f78"],["/img/下载.png","8c081ca3fdd80d66d0ec62c12d242c0c"],["/img/吉良吉影.jpg","68cb01b6f0e01ba60a163ff7af0d12f7"],["/img/图层 1.png","d0d35e3b8b3e53ec54452a4d80f2563e"],["/img/日常系列/春招落幕暑期已至.jpg","9714a4e60e8672532aac0c9a6d226f88"],["/img/科普系列/CDN内容分发网络.jpg","7cce6689d8b34192c6f02c99280cf061"],["/img/科普系列/CSRF跨站点请求伪造.jpg","b1c4173cb48d16a379bed17ce34a3dd8"],["/img/科普系列/DNS域名系统.jpg","d14b3b30bb10b14bc87aa3bd27aedeac"],["/img/科普系列/XSS跨站脚本攻击.jpg","4844b3c4e8c56543aa53fd0b557b0f84"],["/img/科普系列/flex布局.jpg","b815adc390cf668a3a4a3c5467b76239"],["/img/科普系列/landingpage落地页.jpg","0903e38f94756133bd42a30a0f5d049d"],["/img/面试系列/Algorithm算法日记.jpg","7eb70bebd39b2c2bac671adff918728a"],["/img/面试系列/HTTP灵魂之问.jpg","ef02c6140da16f1ba893c6f1b98d8657"],["/img/面试系列/aplayer.jpg","95f4692dc4396aef2d73a47adfa5e38d"],["/img/面试系列/三道题入门async和await.jpg","79102c0a4eae6a9fafcf3620df8da962"],["/img/面试系列/八种方法掌握数组去重.jpg","d9b7a3d7d0dcd5ebaf2199b63cef3a43"],["/img/面试系列/手撕万物js篇.jpg","e98065be31e11fbf9f561079a44f21af"],["/img/面试系列/每日一面快乐无限.jpg","42a8d301ba1878c0eef11e5a9eda25f8"],["/img/面试系列/牛客网刷题record.jpg","b03550166db26459d06fba580b0f2626"],["/img/面试系列/秋招面试杂谈.jpg","7a93c3248a2dc8e079495102365895b0"],["/img/面试系列/计算机网络不完全指南.jpg","e384ec0fefe86454751f60484ffb5519"],["/img/魔改系列/Animation主页动画处理.jpg","b04a30d0bf7171f88f57a7687b45c703"],["/img/魔改系列/Aplayer设置与优化.jpg","d18aefd742b64e2262d50a3dde2fd7d9"],["/img/魔改系列/Butterfly魔改合集.jpg","51be4175939ece7c21959fdf1e8f0043"],["/img/魔改系列/Cyberpunk配色魔改.jpg","97325e7ec64d6bc1fab1f76a61337a46"],["/img/魔改系列/Hexo搭建+Github.jpg","78cee75c37210b8a404f32950f6689e0"],["/img/魔改系列/JOJO石之海信封魔改.jpg","6683c250843f9d0a019531be07e77de5"],["/img/魔改系列/PicoGo图床.jpg","76cfd51be4e6d4d12df2bd63c7fc28c8"],["/img/魔改系列/RGB头像魔改.jpg","0c6f45f451ea2ad4586a3b34085f342f"],["/img/魔改系列/hexo.jpg","0b1b2ff5b44a7c7fd487aaee3ec96095"],["/index.html","37df816ede42e8772d4b7acd461f6a22"],["/js/addele.js","94536e349616a11f5cd6008913459d6c"],["/js/addnodestory.js","d5cddd7fe34e38e0782ff0fa2e477e2c"],["/js/collection.js","3c008c6c91d7adbdc49c77a67c9fa008"],["/js/eve.js","cbadadeff4a46fe1ce17d953908df467"],["/js/fadeIn.js","f4ddb49cb2efe27b756f423aec60a279"],["/js/jljy.js","f3d21b134ccc9d0dfdbd610a4ca93d66"],["/js/main.js","240e062def7897dd4c03a12bf07fdc65"],["/js/pwanewdir.js","08ac73a973855be130adaf469df1de8c"],["/js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["/js/search/local-search.js","33b3c0e197c029d5b198059220bbd5ab"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","12cef07c2e9bc8841a5380df4fd342f5"],["/js/wow.min.js","4b253cabaafa86647183695c4c4365e7"],["/lib/Meting.min.js","7b5e05378aa5c4dbdccbe9a34cf30adb"],["/link/index.html","1bfd2eb6238e3dca10fe0566609e8640"],["/live2d-widget/README.html","3d7233f7971913d0ec0f363a14a11cc3"],["/live2d-widget/assets/screenshot-1.png","30b70e6cd9be9812adcb347536f0da85"],["/live2d-widget/assets/screenshot-2.png","1295844e29a6d6dc3a4aa0db8faa7da7"],["/live2d-widget/assets/screenshot-3.png","4aa1995daf77bc19803648fe6a65c33e"],["/live2d-widget/autoload.js","6d9b31af84be07871c628328d4162048"],["/live2d-widget/demo/demo.html","ddabed04896079696623255ca934c5de"],["/live2d-widget/demo/login.html","69b5f251f312135cbb5dd1b9ff59b7d8"],["/live2d-widget/live2d.min.js","ee7efff8ff5d1d4bd4a0ff99affd3ec7"],["/live2d-widget/waifu-tips.js","e01c75f70a9465389471f638b1356bf8"],["/live2d-widget/waifu.css","0a4a7474046ce58dde9d78670e7514c4"],["/messageboard/index.html","86ff9ff6c511fc4d0a7ac5b2d793464d"],["/page/2/index.html","7f5acd3664f2121c9a2a8aa0652c1996"],["/page/3/index.html","8afb76b20b5d884977ae0472d471c987"],["/page/4/index.html","08d7b1e8e54bbe406e2bd1f07a1ad8fb"],["/page/5/index.html","06359eafddacd8f1bd494f78fc5615af"],["/page/6/index.html","88dd74bfb52ec64ddebebbde9cbc9206"],["/posts/01f1f2b3c139/index.html","37dbe152f05ffe92404b5fce6bb4b88e"],["/posts/0368fe1c5ab9/index.html","3401ea941c5d6b59c110f554cde852c1"],["/posts/08ebb908b528/index.html","a43ac4d480cbf72751a93f6d31f5df08"],["/posts/0941e8fc9dd3/index.html","bf039efa02cfbbae2b1cbc13cdfbfacf"],["/posts/0c4c7b52a0ab/index.html","1deebea811794000ba08bd3831ff2015"],["/posts/105e254930e2/index.html","362cf76d710044294ab8ec6c7bcc7fe4"],["/posts/139818545f14/index.html","c071c486249cceab066f6b2f399991f1"],["/posts/18a3127ce1f3/index.html","d19d433e5346bb850d98a8610a078d87"],["/posts/19f6c59c8434/Snipaste_2021-12-03_14-14-06.png","5125de571ac01ef350a996b2d6cb9b70"],["/posts/19f6c59c8434/image-20211123140552158.png","c24bd7ef1881445a8bb582dc58543fd5"],["/posts/19f6c59c8434/image-20211123160511823.png","878e7f5616415fe0362d1f4e8c5307d2"],["/posts/19f6c59c8434/index.html","6ffdb88a9e4b67942f627bd7a0aa805d"],["/posts/1bdac88a9cd9/index.html","0b325f314c6afe973a325c903395082b"],["/posts/1e69f2f0c754/index.html","4d03cacc376296d9628f3e279d91dd30"],["/posts/2d20c31c4911/index.html","60d0d0313bf00ecd0190fa0e8da07818"],["/posts/2d51252021cb/index.html","fdf4e8c14d926e194b8bb1cbb98a6fba"],["/posts/2d6e53cb4ffb/image-20211121093831494.png","606516bfbb052843ca49c9579c924f4e"],["/posts/2d6e53cb4ffb/image-20211121094229851.png","80d99aa4e99993ff204df6b59e831367"],["/posts/2d6e53cb4ffb/image-20211121102128005.png","8b428e3eb1cae426d356af5f66a8e4a7"],["/posts/2d6e53cb4ffb/image-20211121144014486.png","4374e41f09a61debb20d706fa6f7d965"],["/posts/2d6e53cb4ffb/image-20211121144125322.png","dc082aa67e70839c844b917acd173f24"],["/posts/2d6e53cb4ffb/image-20211121144206836.png","1ee7337a7b43d7bcdd2fa8fa3af51b45"],["/posts/2d6e53cb4ffb/image-20211121153753552.png","b24189fde45bc6b6ec0a48bcb8aa2fc5"],["/posts/2d6e53cb4ffb/image-20211121153829064.png","b24189fde45bc6b6ec0a48bcb8aa2fc5"],["/posts/2d6e53cb4ffb/index.html","0639c74f625dff0455e1b8b5b39baa1f"],["/posts/427f696eb6e1/index.html","92b39987df91abd4b28b3d0d57c6b411"],["/posts/47a379b80246/index.html","86abf7920dad6b84e329a6b1d321932b"],["/posts/49adaa848c45/index.html","8dd76551096b5c01014515aa899c686f"],["/posts/4a3d108576f2/index.html","ce47b95f5578cae43060390fbd0eb454"],["/posts/5531b9d5d73a/index.html","098bb938a9e400bf9bf90c5d88a5b739"],["/posts/5a2ea4345d0a/index.html","b9abe03e1c6be8395a763fb930cf5d62"],["/posts/5e2ce1604d71/index.html","705e4ddceece095f43e69b50f65a1c20"],["/posts/5e431dbde90b/image-20211112170315535.png","1f01a82e78d11572833dc390cf435262"],["/posts/5e431dbde90b/image-20211112200611060.png","bd3a2616989a39ebbab94bc64ec60b65"],["/posts/5e431dbde90b/image-20211112200614264.png","bd3a2616989a39ebbab94bc64ec60b65"],["/posts/5e431dbde90b/image-20211112200649688.png","2887b9499632f585d743226ed0569571"],["/posts/5e431dbde90b/image-20211119204501828.png","bca7cf8d34685bea1f1f028aaf6a4cea"],["/posts/5e431dbde90b/index.html","be7cefa3d39cf2593f1c715f2dfea09a"],["/posts/62a0bd444c41/index.html","a72820f5b98d2b98f45f1dae2b9f2f8f"],["/posts/6327a1b7c765/index.html","04df2c2def9a75c1fc7e77fedd350375"],["/posts/660fac1a5939/index.html","079fed4895b3238d6b6126472d6bb33e"],["/posts/66e2d24f7085/index.html","2d8af4d0efb814c75f0f0afafc4223fa"],["/posts/708096096efb/index.html","3467873b5ac948dffeec45bfa78daeb7"],["/posts/708096096efb/naotu.png","ff925da00ca84be8a8f480f070480980"],["/posts/7236227d0d1e/index.html","f180999371024a5b1a2c6c5c5d3c0584"],["/posts/725dcb7bbb15/index.html","29addcebfd32f5560d4fd4f1ae3b742d"],["/posts/73e8e77b5cac/index.html","d0864f10dee2f00df587d013003e05df"],["/posts/74c7a4e0dbbc/index.html","ae4e7737f3809ebdcf611d29f667d113"],["/posts/78bce575aa3c/index.html","85e77d1fa435a1b7bbce53999e3a3821"],["/posts/7eec245b196a/image-20210304143938049.png","5bf9d6a182e96c14983b492040590187"],["/posts/7eec245b196a/image-20210304143956297.png","5bf9d6a182e96c14983b492040590187"],["/posts/7eec245b196a/image-20210304150047242.png","292382ad524be5b537d3ffb2dc7b6909"],["/posts/7eec245b196a/image-20210310104620892.png","ab64d9bd3db3097630b22402a61f227f"],["/posts/7eec245b196a/image-20210310104651162.png","2c2328da1b8aa51bbc92cf2b2c1df05c"],["/posts/7eec245b196a/image-20210609203750536.png","c0574d10f55f8b88aa44f348b1cd22e6"],["/posts/7eec245b196a/image-20210610211429412.png","e62b08fd45f32a18421dcadf5a0c70bc"],["/posts/7eec245b196a/index.html","809451a5eb581cbf2dd0b25768c04a6e"],["/posts/7fc1593f40ed/index.html","974179354640b5ec50b5fb5708695854"],["/posts/7fffe8d5dfea/index.html","c7760055bfc76bb081500a4497db3d6a"],["/posts/844c2cfdc4a5/index.html","fb17d92b86218d0d55617f4543a63328"],["/posts/885b6d5d3821/index.html","2b2688749a1286f41b37aa6675a0fe86"],["/posts/8a2953565bdb/index.html","807db73a51ebf9e3b2f2fe3cfdb6744d"],["/posts/8bf806511a1a/Snipaste_2022-01-19_19-30-10.png","10608d6491c4fa5f7c396b054a39b0ff"],["/posts/8bf806511a1a/index.html","9d04cc322d74c8d7c88faa08b6d8f712"],["/posts/910d3920d22d/index.html","03f49a3cd594a40f5b46b67df1d047e5"],["/posts/92dd6276498c/index.html","33c21c265d8743a9b5462c124a182627"],["/posts/9a9b91333798/index.html","01476fecbd54251f2934247870a919ab"],["/posts/9d84a5b2f0ac/index.html","c31a1d71592d91cddeebe4beb671e3b6"],["/posts/9f52b30fe4c5/index.html","a6731e1291a6bb7d0d0c0421e6989d0a"],["/posts/ceb26206ef16/index.html","f5476334910ce809339ed5b47e24cb07"],["/posts/d7ed1be8a814/index.html","f54fe4a8114caca94c675d2fa82908d9"],["/posts/dc3e93748a4e/image-20210305202437206.png","0a07f8f3f352e09ac1201187718aa7d2"],["/posts/dc3e93748a4e/image-20210305202452493.png","018f2fc4bfcc9d408638419ceebcdecf"],["/posts/dc3e93748a4e/image-20210313152227462.png","2157be8c6551f40b9f290723ef3e72ed"],["/posts/dc3e93748a4e/image-20210328143759285.png","8ae2ca208331de2b53ba88b0b513a13d"],["/posts/dc3e93748a4e/image-20210328143929798.png","eb17bbe1ff5b7e5c0091299cb45a0e9d"],["/posts/dc3e93748a4e/image-20210328144031516.png","4221ba64ed5daed67df70082c971b2af"],["/posts/dc3e93748a4e/image-20210328153545692.png","b3196ecee9e98e8cfa4acaa0e226bf99"],["/posts/dc3e93748a4e/image-20210328153559582.png","b3196ecee9e98e8cfa4acaa0e226bf99"],["/posts/dc3e93748a4e/image-20210328153739807.png","3f596ff6f8448d4174bd36e297cb38ba"],["/posts/dc3e93748a4e/index.html","6fefcd2fc1d429769dc6494ce5650e6a"],["/posts/df2fc0ed9242/image-20210324154900183.png","000ce91c28984a5c6b4d5957fd56508b"],["/posts/df2fc0ed9242/index.html","6c59e3d2e0358cf4603f313619b15c2d"],["/posts/e1434c3cc724/index.html","1c15e38d129fe7a9abebbafb87be8edc"],["/posts/f49019ed9855/index.html","8d0ca938f937d6c75d601296d59d009e"],["/posts/f4f0b9164a1b/index.html","64701c12248ebc36af2b0c1157562a95"],["/posts/fa1981f36489/index.html","56afb751392a78699f1dc41d9fddbfdf"],["/posts/fe8be42e029f/image-20210309185356772.png","fbafadc2e5dc4f9696e4d344619bb1c0"],["/posts/fe8be42e029f/image-20210309185737919.png","b8a260628281f8f247e0b76bfa457cd6"],["/posts/fe8be42e029f/image-20210316214659649.png","1fb2e25c9d13f72cecdf80836dd072d9"],["/posts/fe8be42e029f/image-20210316214817698.png","b5643b40ce1481f4daed5e246bfabc36"],["/posts/fe8be42e029f/image-20210419152356373.png","242232840a098c1a9bb6ec929469fad4"],["/posts/fe8be42e029f/image-20210419152900682.png","88d06334ea5a3a968ced3104daa39d86"],["/posts/fe8be42e029f/image-20210609090933593.png","dd9309af7cd030a74d859979b571946f"],["/posts/fe8be42e029f/image-20210609092445195.png","bce413b2999cdc72a655a40b46b9f4a0"],["/posts/fe8be42e029f/image-20210609094059704.png","61b02d209496e3eda76421ce4c722c6d"],["/posts/fe8be42e029f/image-20210609094109208.png","61b02d209496e3eda76421ce4c722c6d"],["/posts/fe8be42e029f/image-20210612110516345.png","3eee6d9afc2f72ed0419bab74eed6877"],["/posts/fe8be42e029f/image-20210612110553199.png","479348c44acef8a96ca1ff0e42ae87b1"],["/posts/fe8be42e029f/image-20210612110618411.png","95cddfb25420f6a7e8ec6686610e976f"],["/posts/fe8be42e029f/image-20210612110853429.png","acc0b086e28ecd5c1e87376802035298"],["/posts/fe8be42e029f/image-20210614154358625.png","4a3eeed8a454a346abad4c3640638c28"],["/posts/fe8be42e029f/image-20210614154559529.png","b566f8c61165bca0630cbc7b54d48e67"],["/posts/fe8be42e029f/index.html","4560b1ba2a93d5acad7d9ffa0e84bb97"],["/posts/fee85c52fd07/index.html","88fe1779542d93218a8b13a371ed1521"],["/search.xml","546a324da03727ef8bd5ee5ef43d7b5f"],["/sitemap.xml","6cb2ad8eabdae16820a849a90c5cabdf"],["/sw-register.js","f59220a80d9859a4f5cfeed17e920a1f"],["/tags/Ajax/index.html","7a71ad7a78c685ec60ecc10ea19c29bf"],["/tags/Echarts/index.html","b37ad496607857854960b9a368e142cd"],["/tags/HTML/index.html","3c222614893bc089248e57cef9f2f260"],["/tags/Jquery/index.html","680822dd3ebe7164012f3de40f075ea5"],["/tags/Linux/index.html","94321c13303bf7a45189e5aa8edbe9ac"],["/tags/Webpack/index.html","6bda389cfc26fe2625fe408219fd8276"],["/tags/css/index.html","09352bebde2d2e4f316b14617db38088"],["/tags/es6/index.html","3e67aa1fe7164f93e701fd4d29468c77"],["/tags/hexo/index.html","39a05c7289a775b001f7c8ea389e1036"],["/tags/http/index.html","2a7a421107eb4f12165b3104f3c1b59c"],["/tags/index.html","fece94fedc991d929817328b098776fc"],["/tags/javaweb/index.html","d5ce985fd37a66779407ad1ee5269968"],["/tags/js/index.html","88fecccf6709897498452f81d910c6d0"],["/tags/mongodb/index.html","4ea4057f6b0c6a0df62ef8461cfd3eb5"],["/tags/mysql/index.html","e6f6f697db12078ec207d0f0bcb1c180"],["/tags/nodejs/index.html","864cb91271adb681695a6074854bdea7"],["/tags/vue/index.html","75cd2aca8335505304ad9a04f062e4a0"],["/tags/前端/index.html","7d83d7628da3b0eb3461a7262f479e38"],["/tags/前端/page/2/index.html","ba1a24866ca7ffd370b2f2df4dcabb9e"],["/tags/前端/page/3/index.html","5b8d99cb5196bf10a7eadd0041025353"],["/tags/前端/page/4/index.html","e4482b9c3d66ea7637c0f843e07ceeca"],["/tags/工具/index.html","ddbe10d9b2f35e35b6992b8ffa84eb81"],["/tags/日常/index.html","556a22cf514b3510f1068c22c687391f"],["/tags/网络/index.html","a685712efa60daaf3ba97b59dc5f6d48"],["/tags/网络安全/index.html","380072890c6f1186b91b6b9c00305f99"],["/tags/计算机网络/index.html","b50f634e94995e981cfdac1deffbe3c4"],["/tags/设计/index.html","09fecb6aa5f2b4d49c970a6610e3ebc6"],["/tags/面试/index.html","ad316cfa5426ebe918f2b6e290a37088"],["/tags/魔改/index.html","9f6526c35256e0e61defab718fd01b06"]];
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
