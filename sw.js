/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","0e7788768bf8558dc72ed70b316f0606"],["/about/index.html","a1c010b2d6abbf007e4cd518c0048cdb"],["/archives/2021/11/index.html","7fa9997fd5d1e19dc5cda89cdf149776"],["/archives/2021/12/index.html","13e1c2e89102852ea183a364d19c0b51"],["/archives/2021/index.html","b90fd76d150e435054daffbba3dcd967"],["/archives/2021/page/2/index.html","9a441702217152daf1b3acad516070a3"],["/archives/2022/01/index.html","682920dd229bd5824793093d45ebd2b7"],["/archives/2022/01/page/2/index.html","953c5b198f7fd00e8213525aa420e5d2"],["/archives/2022/02/index.html","ff082d2140e7e9d04d20e1c2c88200fc"],["/archives/2022/03/index.html","2360bbb87f29b975d7f46a614bc05600"],["/archives/2022/04/index.html","78f1c319c973a8e47db6a1360e57af78"],["/archives/2022/04/page/2/index.html","e566e2df53fe5fd8057b18862bd864c9"],["/archives/2022/04/page/3/index.html","36233d43002522915fbea061263d399f"],["/archives/2022/05/index.html","687cf1e9bfaa8d57cb29777f17ba1d01"],["/archives/2022/05/page/2/index.html","26ca6aea33422aa886942a005e61f618"],["/archives/2022/06/index.html","0af409850f66364ba1864dadc9d4406f"],["/archives/2022/07/index.html","3eecb25be75f5a37039e2f1110b2dd02"],["/archives/2022/08/index.html","6fccaa646b9951cb27d2369a2f67b21f"],["/archives/2022/09/index.html","44ce403eda6acd7ae2c050d1857a010e"],["/archives/2022/index.html","e90db8593ea22bbd862c3e9817911470"],["/archives/2022/page/2/index.html","84e3356ef86a99c11c6bd686c6865c38"],["/archives/2022/page/3/index.html","3562371707c4016fc3651c192e317d5b"],["/archives/2022/page/4/index.html","bea405dedf2f8f3c3683f954c101f1cc"],["/archives/2022/page/5/index.html","26aa0d680de097304a75cef810e79ccd"],["/archives/2022/page/6/index.html","12ac3cbfbdd16e0f28118b682c21808b"],["/archives/2022/page/7/index.html","807062bbc90445d8790b58c395f434e9"],["/archives/2022/page/8/index.html","30dd781da012a0a3760df98bf187a12a"],["/archives/2023/01/index.html","28270929bd74970e451324b3e39e2b61"],["/archives/2023/index.html","b3030fec93edaf1257a7f5e387ccc9b3"],["/archives/index.html","518abc6728465d50046cf95150bbae28"],["/archives/page/10/index.html","b7104b683c1f2fff880e944dc2ad4751"],["/archives/page/2/index.html","a5a779233ed19b4b731ca9b6ac8afd49"],["/archives/page/3/index.html","ac7ef67a3a57c6043c3f57c9759d7a02"],["/archives/page/4/index.html","d7a3455fd6b0871faaeb3a73696ceda2"],["/archives/page/5/index.html","dc774df4dc6bd67648d41c2db522bb0f"],["/archives/page/6/index.html","ee6180494fa5bb08fddc61cc01ecadb6"],["/archives/page/7/index.html","15d7442f854c616216b6e734c18687a3"],["/archives/page/8/index.html","45ca0c237e3ab9c5a0014bf98dfdfc11"],["/archives/page/9/index.html","6924ca5194fbdbf8bae5dbe7e0c25248"],["/artitalk/index.html","5962dcd0721b25232d60c7b8ef9f6586"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/atom.xml","2de8ec25f3b478f2a490a8e20195c0d0"],["/bb/index.html","e58fece96706574ac119eeb10c4c4e01"],["/categories/CSS系列/index.html","3ad8b176700db9d87426f1db4e447502"],["/categories/JS系列/index.html","8af90f2b0e9b942b79306b79c5a918be"],["/categories/JS系列/page/2/index.html","5d91755014000d291d7c7928cd0ade16"],["/categories/Vue系列/index.html","841c671b5c61b1950c87f9db93480020"],["/categories/Vue系列/page/2/index.html","c87eb79f7368b59162b2a390bffb7172"],["/categories/Webpack系列/index.html","7343f571e6596c33d2a697eff6d68a52"],["/categories/index.html","c6f229835c307938df354ae8f7aa6319"],["/categories/前端基础/index.html","0149649854a681b4272160ea4fe6d97c"],["/categories/前端基础/page/2/index.html","f813f5290b33c932250d3b955fb0817e"],["/categories/前端进阶/index.html","9c4ec99e408e29a69e7b26f9e26a285e"],["/categories/日常杂谈/index.html","dde89c7d0e02e897f834a73fffa84d83"],["/categories/浏览器系列/index.html","707193841eb7e25041fe861d7fe9668f"],["/categories/算法指南/Binary-Tree/index.html","0d7efe4aad4e7fe05103df5c7cfd6586"],["/categories/算法指南/index.html","0837ce4f36b7cc3cca83517675412d9b"],["/categories/算法指南/page/2/index.html","03e63a30eba1bda7650c3dc3d91c320b"],["/categories/网络系列/index.html","e9a7e2daf062bce4eba1769f8e6cdfe9"],["/categories/面试指南/index.html","7fccdf98cce50968b5bbb2333414e06a"],["/categories/魔改系列/index.html","50fa2b9f52a35ec41e1b454664f60448"],["/css/animate.min.css","55009d64191e6f9e712a841773ee6611"],["/css/aplayer.css","ddcbd79780067c3941f243a7bebdd559"],["/css/bgc.css","af61378e9e8a5b159cd5d9e729b88a4f"],["/css/custom.css","ba55f423a7cb6d329a503a799ca66f34"],["/css/index.css","6a0a3befce44551923752d0d5632af10"],["/css/neonlight.css","da78e969661c4d6e9f4c1213eba8b8d6"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/157b9e6bd3841296e9df46651f8bec6-removebg-preview.png","bb308ab2ed4cf5731f1d0d15a7f9030d"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/4444.png","65f700e782700cb3dfd7af0db59ca2ca"],["/img/9050f3deb48f8c54cbb518ec34292df5e1fe7f94.png","c743ccd196007aeb31f107b4b493e6b5"],["/img/React系列/react.png","a0c6e00a32c0c09f7767d22e1174a532"],["/img/React系列/react入门与实践.jpg","bec260ee5125459b10146c1ffc40fa49"],["/img/aaa.jpg","6a5a7844633c5bb81b35b0a914d35547"],["/img/afternew.png","5d5fb374e7d442f980ffc785fecbea25"],["/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["/img/beforenew.png","69f79b27b5abcf1d4b8cf4be3559db39"],["/img/bgc.jpg","1b811783648f9ef2352ada176a7c33cf"],["/img/bgc/1.png","4586c5fa0183b05b7452cb5373c0c60d"],["/img/bgc/2.png","a7c142f1bc2ab6a76e8187c2272cae1e"],["/img/bgc/3.png","087631d84d82550e4292baf6653e0bcf"],["/img/bgc/4.png","7826c94c76e084de3df4cc54055683b2"],["/img/bgc/5.png","3716efdaf9a0d6cdf08576e5239e2e0c"],["/img/bgc/MileStone项目杂谈.jpg","5cf842d5df8a84981ecc60bc446e862a"],["/img/bgc/after.png","9fabcb0ed02d2c28a8dd76a9fb7a5bcf"],["/img/bgc/ajax.jpg","f058544f8a1d9565d0fcbba2beeb77b6"],["/img/bgc/before.png","d42e0836dc7aeb5c6ac3036047d5f1d9"],["/img/bgc/bgc.jpg","d3823f30edf3b54a4dda8968c050d9fb"],["/img/bgc/code2.jpg","f6ef52f88effeb006200656835768019"],["/img/bgc/css.png","6500e8c6985e7e7cff88d28d7f557aa4"],["/img/bgc/cyberpunk.jpg","72b2ed74a64f89915c5504a7905456b8"],["/img/bgc/default.jpg","d47700fa220cbda3101d7d51137c3338"],["/img/bgc/echarts.jpg","ca9cff91ec072fde7477863a1861406a"],["/img/bgc/even.jpg","d29e7de6f6eec69bfe754aa9838785cf"],["/img/bgc/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/bgc/gio.png","9c5e50718601d3774f3b33d09af388f8"],["/img/bgc/html.jpg","f77f736241eae0e090eb336a50918a74"],["/img/bgc/index.jpg","b8c3debd17dc84991778826d8bcddf40"],["/img/bgc/javaweb.png","90e836a17db8d912128bb829760dd4bf"],["/img/bgc/jojologo-removebg-preview.png","30822d43dc3df2211c9ee69e17000feb"],["/img/bgc/jojologo.jpg","068874ae20beffb79fedacb43cc85fd9"],["/img/bgc/jojologo3.jpg","9bdc7f6dde78a90a8925aba6bfe4199e"],["/img/bgc/jolin.png","90bd8c8e1b3773ba73bd0558a2f287c7"],["/img/bgc/jolinlogo.png","97a9083e5a819fef92c7c35fd009d2e6"],["/img/bgc/jquery.jpg","558f23b412317052dec339ffa779abed"],["/img/bgc/jquery.png","4b5c2de1fa3c9e03af2ca364c1c04d12"],["/img/bgc/landingpage.jpg","ab88217fb76d9e40c573c2fc3cf24a45"],["/img/bgc/logo2.png","98c8dec7017d4bfb2640834b4182dd32"],["/img/bgc/meiriyimian.jpg","541d97c206eb47370fbe664fc13d59bb"],["/img/bgc/milestone.jpg","8f43613c730f4d2c970819c39ff54b29"],["/img/bgc/ms1.jpg","00c7088badb76fbef0bed92e9ddb4626"],["/img/bgc/neonlight.jpg","aa5ba11e9a7abf5622486e1c2aec0710"],["/img/bgc/neonlight1.jpg","3566a1e4cd2c598aa06723541ad98c32"],["/img/bgc/neonlight8.jpg","d29e7de6f6eec69bfe754aa9838785cf"],["/img/bgc/nodejs.jpg","b190f2f48b3fab7557ba2d631154e1fd"],["/img/bgc/odd.png","022ef01c84264cabd9b65bdf1310e363"],["/img/bgc/onepiece.jpg","63441a8c9e6a4a4e550dcfd404530b4f"],["/img/bgc/op2.png","9d5104b349c6158cfa6dfa538ac9c9a2"],["/img/bgc/picgo.jpg","7db7ea9485a1c89e88fc64dfa740fc65"],["/img/bgc/rgb.jpg","c005c879eda29330c0585adac2bd9596"],["/img/bgc/shuzuquchong.jpg","fbf2db16cd99b76ab50b01b6fc64be60"],["/img/bgc/sjk.jpg","8b2ded959ee7d10ff589a4a81a71863a"],["/img/bgc/standard.jpg","058bcd3e8ac10ab50b0b7bf89c9f4e9a"],["/img/bgc/ubuntu.jpg","e2d49e81d44b8f301fc19c9e01c36393"],["/img/bgc/vue.jpg","ebd691a3825d42e739ab1cf368a85cb9"],["/img/bgc/wallhaven-1kyv8g.jpg","378a6e569aca24abec148d5f1e682e67"],["/img/bgc/wallhaven-2kvmgx.jpg","e1daba962018ac96e469af51bbfa3c00"],["/img/bgc/wallhaven-39wq39.jpg","8d580decfec38587f2c4686104b6b79b"],["/img/bgc/wallhaven-3zwpz3.jpg","1339aac62b3107e83e99b9e29a1f6aa6"],["/img/bgc/wallhaven-4lzgkq.jpg","107a0a3e6a7ae4150b4c3ca6f9739617"],["/img/bgc/wallhaven-76m9z9.jpg","7e7928239f7251ec6f594dca854239b6"],["/img/bgc/wallhaven-83rdp2.jpg","99e2d160c974671cd86e06aba9f58bff"],["/img/bgc/wallhaven-962ogx.jpg","1d0757ba5b17159318d0b5ac3f5fede0"],["/img/bgc/wallhaven-e7vop8.jpg","f6296b43308523d3ed3a7bdb9f331310"],["/img/bgc/wallhaven-p8d93e.jpg","27b85425c9bfdc3ede5101c3c54acec7"],["/img/bgc/wallhaven-xl15ml.png","c45cb99d0b00810f907bfb9a449019a9"],["/img/bgc/wallhaven-xlpx3z.jpg","af9114f7b84f0fe62e46c59e5587f678"],["/img/bgc/wallhaven-ymly3x.jpg","d72691420acd959ea9f506ae7e0afb14"],["/img/bgc/wallhaven-ymqq3k.jpg","8fb484f0e6d3f4091502234af96b79ea"],["/img/bgc/wallhaven-z8jk1g.png","a21c5ece7546f999cde38800d60b4284"],["/img/bgc/wallhaven-z8xqqo.jpg","171c931cf04af4fb5ddadf142ec379d1"],["/img/bgc/wallhaven-zm32go.jpg","8393ec224ca82aa2ad571a350885b361"],["/img/bgc/whitejotailang.png","3d61863dc9eb0847385a5e7052d117b0"],["/img/bgc/xinfengjotaro.png","a82cf6d179ebe79e4d776f9717765d77"],["/img/bgc/牛客网刷题record.jpg","4925e7cdba5881aab3cfa850d6d748dd"],["/img/css系列/css.jpg","d72691420acd959ea9f506ae7e0afb14"],["/img/css系列/flex布局.jpg","7a1e7eb07b07bd5cf287cfddd0e7d6bf"],["/img/css系列/landingpage落地页.jpg","a1ca74704f2181af8e9660952b7f208c"],["/img/empire.png","f93146076c2cd52c440843a1d473bffd"],["/img/favicon.png","9a3f70c3d35fa52f4c506aca79ad3ecc"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/head/boji.jpg","2f4a0ec31d68cbba1a4dd8feb79e62b1"],["/img/head/jojo.png","cdb4b455a1328b2293446e226fe8472d"],["/img/head/jotaro.jpg","38c37b3c624e637b366bb387e9bce0f5"],["/img/head/jotarofire.png","b54c5a3f45fb40f17d8ad2ebebc4cc82"],["/img/head/waku.png","1255a7b487f395761db866cb3b0ad25c"],["/img/head/waku22.png","6fe83c965b61147dd9282f502a1a35d0"],["/img/head/waku3.png","af308bb019a5b87ac6211ee5eaae5331"],["/img/joji.png","1b5797a3744888577f385739acce641d"],["/img/jojiimg.png","3991e6710f446a26c3640e04be9ba851"],["/img/joker.png","34cc2d991e42c8ff6bcaa94c4aeb997b"],["/img/js系列/TypeScriptChallenges.jpg","a32e79f3af48a723f7199e74a6b6e521"],["/img/js系列/Vue3_Canvas实现动态登陆背景页面.jpg","ee110dcf925f9f50676d8d880721abe7"],["/img/js系列/js.jpg","9cb4292c3957074128fcaa5f21f49592"],["/img/js系列/js自检.jpg","8d1adbedeeeb63015d4a22e90d2e4fab"],["/img/js系列/jwt实战教程.jpg","ee3f0b932649dd593c8e43be734fb11a"],["/img/js系列/从0到1TypeScript.jpg","7fd4b8e3e7ef1e64042e15698d45c4fe"],["/img/js系列/代码之美JS篇.jpg","f67e9ad2350337f71eca46b876d5428c"],["/img/js系列/你所不知道的JavaScript①--数据类型及周边.jpg","58e12d21174ce3ce40f486ab614e148e"],["/img/js系列/你所不知道的JavaScript②--this及周边.jpg","5ea1037f8c9a4f45b22a212b751b3e2e"],["/img/js系列/你所不知道的JavaScript③--原型及周边.jpg","4ed0bca28bce5ee78b0d6e8758a0e243"],["/img/js系列/你所不知道的JavaScript④--异步任务与事件.jpg","5229551969b6721d1c5409efaa477137"],["/img/js系列/你所不知道的JavaScript⑤--垃圾回收与内存泄漏.jpg","ef757e74e061e1fa06fe0c24bc6c59c2"],["/img/js系列/你所不知道的JavaScript⑥--面向对象与模块化.jpg","040219388ffe1d9f7a60b3b2640b6ceb"],["/img/js系列/你所不知道的JavaScript总集篇.jpg","fc3a37e9e989f31e42f6c00f99431f75"],["/img/js系列/快速上手Mongoose.jpg","f339c04327ee2a3d089d196d085ee5a9"],["/img/js系列/正则.jpg","b43995a5f3429b3403d9b70874e4c09d"],["/img/killerqueen.gif","9f182907f87f5cbfbc03ee8e5504cc3b"],["/img/sjk.jpg","360f2a555d5e53805e1aae70c9583152"],["/img/standCharts.png","842236aac7ef690d5960784795424544"],["/img/standCharts2.png","48a7b669a21511b076116aba376342ca"],["/img/vue系列/LIS.jpg","afb9632f7df85e8d23d1227dc045edc5"],["/img/vue系列/MileStone项目杂谈.jpg","995e4a219190b658f267a1353dfa21fc"],["/img/vue系列/Pinia大菠萝入门与实践.jpg","9d2f4b67b13e170acf8df0768c6179bf"],["/img/vue系列/Vuejs灵魂之问.jpg","31b651074f4079c474d1af90820d7c8f"],["/img/vue系列/Vue打包优化+可视化js体积.jpg","da8e8f55fea78933afe28486735c576c"],["/img/vue系列/Vue核心.jpg","4316121d9c9e0c6ff28462e27ee0ee0e"],["/img/vue系列/Vue组件化编程+Vuex.jpg","ed91716c079036170748d94f19da8d69"],["/img/vue系列/Vue静态资源.jpg","0eb5b20a68022f2a4620d70c9388765f"],["/img/vue系列/component.jpg","6a8cf55bcb0e988aaa9c11cc46fe52f5"],["/img/vue系列/diff.jpg","c4e96f0b0d5b8d1ac16f34e2cb3901cf"],["/img/vue系列/footok项目杂谈.jpg","cf7c020f0f28fd6e8f08a3616d4576ab"],["/img/vue系列/mini总集.jpg","f1f99774003c8e0340e6af8f2f9737fa"],["/img/vue系列/parse.jpg","efcf4e0d42acbdc3a7a6a7f97a1d449a"],["/img/vue系列/patch.jpg","bf4a5d7b8701c680a62e3a774ae833a4"],["/img/vue系列/reactive.jpg","51b9abf57489317d73c8a61b537df98c"],["/img/vue系列/scheduler.jpg","b944b1baf09a9aada38bdd75edad4975"],["/img/vue系列/vnode.jpg","a31586a5922eee52f2fb0ecd5935ab33"],["/img/vue系列/vue-router.jpg","35f420e498d11f1ed91b23ea24fddb8b"],["/img/vue系列/vue.jpg","62a9c746dd6bcae3442b4a860b355005"],["/img/vue系列/vue3.jpg","9d087e6550aecbb12a721accd7fcbbd3"],["/img/vue系列/深入浅出vuejs.jpg","24b4a4052e8a8950f63cd01c136165a9"],["/img/wallhaven-x8jl83.jpg","0141db506a6b4556789c4bb700132de4"],["/img/webpack系列/Vite官方文档浓缩.jpg","c737026042f086019f1b2945dad4c148"],["/img/webpack系列/webpack.png","e538823bb9c2c1a8750efd9bf634a6b2"],["/img/webpack系列/webpack5实战指南.jpg","518a53fcd6b5e987ccc8f8f2945f6522"],["/img/webpack系列/前端工程化①打包器的资源处理.jpg","0ae3e67412235bd77aa6bb5b9b4d33f5"],["/img/webpack系列/前端工程化②打包体积优化.jpg","058f5f081e81f7b0c7d47b2566ec52c4"],["/img/webpack系列/前端工程化③Bundless基础设施建设.jpg","2acdd48c0cc319c870e570826522b879"],["/img/下载.png","8c081ca3fdd80d66d0ec62c12d242c0c"],["/img/前端进阶/Docker学习笔记.png","e2b37ceeca8e88768ae0f119a82d532c"],["/img/前端进阶/bgc.jpg","b190f2f48b3fab7557ba2d631154e1fd"],["/img/前端进阶/jest单元测试学习.png","b404168603f856621f7b718fe329fd8c"],["/img/前端进阶/npm发布前端工具库.png","a1243f149a1c8efa99f0fccbbf2571bc"],["/img/前端进阶/技巧记录.png","366842b71ae3e3b73a0d239aa4f9f4e4"],["/img/吉良吉影.jpg","68cb01b6f0e01ba60a163ff7af0d12f7"],["/img/图层 1.png","d0d35e3b8b3e53ec54452a4d80f2563e"],["/img/基础系列/ajax.jpg","a078df41d2eb99cd8cfa1c5bbd278c9f"],["/img/基础系列/css.jpg","e9201166d1c5ed23dd40886cd5a05122"],["/img/基础系列/echarts.jpg","c6b72698453178260ec732ed447fac12"],["/img/基础系列/html.jpg","e8a2d084ec809ba3ae96bf0310c3f356"],["/img/基础系列/javaweb基础.jpg","b5ee06a3bfadd453f89a1f92fc5ec7f4"],["/img/基础系列/js基础.jpg","688fb7bce2a030dc5949f6475f0ec175"],["/img/基础系列/linux入门.jpg","30c4bed5581c132f716e17d64b2ab994"],["/img/基础系列/mysql入门.jpg","3d0cbf14bbf50a10cfa8330d3c91d70d"],["/img/基础系列/nodejs基础.jpg","ba81f3fb38d97af0187fef3b1c959fdd"],["/img/基础系列/基础.jpg","7184f74a27f009f7510de06e2db5e9ce"],["/img/基础系列/浅谈ES6-11.jpg","c59cade5923eae9171f6bf01d8b35b07"],["/img/基础系列/浅谈Jquery.jpg","3dfd620955e9f6ec7f460b99d36e86e2"],["/img/日常系列/搬砖日记.jpg","90d1869276b09e4e0e89cf224ce76d4a"],["/img/日常系列/日常.jpg","43264ebdd62da3df884798f946caeb85"],["/img/日常系列/春招落幕暑期已至.jpg","4213c07b9669dd7eed38a017b0eebc2a"],["/img/日常系列/秋招面试杂谈.jpg","33d1eebbd64a7c87498910a657c16635"],["/img/浏览器系列/浏览器.jpg","03cc69a4f46cb1e709c024790a537979"],["/img/浏览器系列/浏览器性能指标.jpg","383402c1659f21ae13c22000c873f926"],["/img/算法系列/Algorithm算法日记.jpg","c814f49a91c1af9498dc830568b66df1"],["/img/算法系列/bt0.jpg","a714910f7f2f51b0ce5d92d7419c3c73"],["/img/算法系列/bt1.jpg","4b6394bf5a8c0dd10630be97533b5f03"],["/img/算法系列/bt2.jpg","e37071c2cfd9c61e71284443e73c0b0a"],["/img/算法系列/bt3.jpg","2de04fb313dd38ec19d175f43ca645bd"],["/img/算法系列/bt4.jpg","eccfcb95ffa2961c599a8929d51c1ee0"],["/img/算法系列/bt5.jpg","37fd6d2977b7c2c1957cbf6b915d761c"],["/img/算法系列/bt6.jpg","2bed02b1d24dad73d243a92c32ec15d1"],["/img/算法系列/bt7.jpg","1f2d83925c94e2bd371d032d2c780b8b"],["/img/算法系列/bt8.jpg","65dab81aace586aad2a490f796b1f1aa"],["/img/算法系列/codetop100.jpg","af2af58eb7389758c4ec2b33bb6a9652"],["/img/算法系列/算法.jpg","f7ce08fa54554e6ea0f33284e4932ebc"],["/img/算法系列/融会贯通八大排序.jpg","6ff2ac6616e2fc07dfe8bf6d0f88cca0"],["/img/网络系列/CDN内容分发网络.jpg","9fab3a20652f9cb160ed9491102e1ab9"],["/img/网络系列/CSRF跨站点请求伪造.jpg","985f2d1ebad297b1d3ae4f66c3fdbc80"],["/img/网络系列/DNS域名系统.jpg","04a7db8f68daa9c545fd91f52e6fe589"],["/img/网络系列/HTTP1.0-3.0打怪升级.jpg","d25d513b2653de55aa036413271f38ee"],["/img/网络系列/HTTP灵魂之问.jpg","16d2885008efaaac3afbe09f0311f2d5"],["/img/网络系列/XSS跨站脚本攻击.jpg","4d361901c4c585c5859d84cb62388311"],["/img/网络系列/landingpage落地页.jpg","46548b66920a4f478aeb4c8e4d928151"],["/img/网络系列/tcp粘包拆包.jpg","aa39ebb8791e5391bdd4871b40778c38"],["/img/网络系列/浅谈TCP_UDP.jpg","18d7da90125db2a1590387ea90536726"],["/img/网络系列/网络.jpg","e28b5bb63656ff956631f68e498a9a24"],["/img/面试系列/三道题入门async和await.jpg","79102c0a4eae6a9fafcf3620df8da962"],["/img/面试系列/从浏览器地址栏输入url到显示页面的步骤.jpg","551a0a6ac542781f4077c2fe064d4c87"],["/img/面试系列/八种方法掌握数组去重.jpg","d9b7a3d7d0dcd5ebaf2199b63cef3a43"],["/img/面试系列/八股.jpg","3dc4ec49816bd763d0c4cfe61a29a99d"],["/img/面试系列/前端登陆指南.jpg","bf8d0e64e166a3bb94c83b7a2810c6dd"],["/img/面试系列/手撕万物js篇.jpg","e98065be31e11fbf9f561079a44f21af"],["/img/面试系列/每日一面快乐无限.jpg","42a8d301ba1878c0eef11e5a9eda25f8"],["/img/面试系列/牛客网刷题record.jpg","b03550166db26459d06fba580b0f2626"],["/img/面试系列/计算机网络不完全指南.jpg","e384ec0fefe86454751f60484ffb5519"],["/img/面试系列/面试.jpg","95f4692dc4396aef2d73a47adfa5e38d"],["/img/魔改系列/Animation主页动画处理.jpg","38d22d51f19863165dc407f561f89518"],["/img/魔改系列/Aplayer设置与优化.jpg","99a8b8bdec684008090e86e51fc6c2a4"],["/img/魔改系列/Butterfly魔改合集.jpg","032ec1df7721d17186c121e24d9fd144"],["/img/魔改系列/Cyberpunk配色魔改.jpg","893dab33728496e1a28a18809c140d56"],["/img/魔改系列/Hexo搭建+Github.jpg","fc82a58d7e5960691ac5942268336ad6"],["/img/魔改系列/JOJO石之海信封魔改.jpg","35ac13b125e056130c58d31b30ec2a91"],["/img/魔改系列/PicoGo图床.jpg","90aa107dbd8b01282bc2f7af5ce09092"],["/img/魔改系列/RGB头像魔改.jpg","559d97f8d7c85dc413beec4257c90d37"],["/img/魔改系列/替身面板生成器.jpg","1d6974d09a5bc3b55aee26647c6436ad"],["/img/魔改系列/魔改.jpg","0b1b2ff5b44a7c7fd487aaee3ec96095"],["/index.html","4ad0687523801411c3d85165d6219b24"],["/js/addele.js","94536e349616a11f5cd6008913459d6c"],["/js/addnodestory.js","d5cddd7fe34e38e0782ff0fa2e477e2c"],["/js/collection.js","3c008c6c91d7adbdc49c77a67c9fa008"],["/js/eve.js","cbadadeff4a46fe1ce17d953908df467"],["/js/fadeIn.js","f4ddb49cb2efe27b756f423aec60a279"],["/js/jljy.js","f3d21b134ccc9d0dfdbd610a4ca93d66"],["/js/main.js","240e062def7897dd4c03a12bf07fdc65"],["/js/pwanewdir.js","08ac73a973855be130adaf469df1de8c"],["/js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["/js/search/local-search.js","33b3c0e197c029d5b198059220bbd5ab"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","12cef07c2e9bc8841a5380df4fd342f5"],["/js/wow.min.js","4b253cabaafa86647183695c4c4365e7"],["/lib/Meting.min.js","7b5e05378aa5c4dbdccbe9a34cf30adb"],["/link/index.html","97c556b8fe77e254a18dcb97a36fffec"],["/live2d-widget/README.html","3d7233f7971913d0ec0f363a14a11cc3"],["/live2d-widget/assets/screenshot-1.png","30b70e6cd9be9812adcb347536f0da85"],["/live2d-widget/assets/screenshot-2.png","1295844e29a6d6dc3a4aa0db8faa7da7"],["/live2d-widget/assets/screenshot-3.png","4aa1995daf77bc19803648fe6a65c33e"],["/live2d-widget/autoload.js","6d9b31af84be07871c628328d4162048"],["/live2d-widget/demo/demo.html","ddabed04896079696623255ca934c5de"],["/live2d-widget/demo/login.html","69b5f251f312135cbb5dd1b9ff59b7d8"],["/live2d-widget/live2d.min.js","ee7efff8ff5d1d4bd4a0ff99affd3ec7"],["/live2d-widget/waifu-tips.js","e01c75f70a9465389471f638b1356bf8"],["/live2d-widget/waifu.css","0a4a7474046ce58dde9d78670e7514c4"],["/messageboard/index.html","500691515edebad55ef47e7b30938965"],["/page/10/index.html","d563eb6ccfdc8558bbed1b84f8d9689e"],["/page/2/index.html","6280a1eab9378147e4dc6db90173ad65"],["/page/3/index.html","2fd5cf924027537d6049f8a6011edc2f"],["/page/4/index.html","50a00c7de5852867b036858e6e0343de"],["/page/5/index.html","f767685d3313949f76ab5056fd7b4d31"],["/page/6/index.html","30e67c7f34f70f9298fbacfcfd8e1fd1"],["/page/7/index.html","146966d906f6c0b07736f94f173e96a2"],["/page/8/index.html","916391d3238f441b1d0e61d30205a67e"],["/page/9/index.html","9847388c7517094693c66afc275454d7"],["/posts/101229148/index.html","22da61b20b96296a64ab3ba7fea32776"],["/posts/1033180007/index.html","49c9d2b40d58d2fa953b2fee5fc9f51a"],["/posts/1034828441/index.html","7104b159a201ae47babbaf6afeb36cc4"],["/posts/1041482613/index.html","222df3608f8f8d53342aaf49ca0e5b52"],["/posts/1060178397/index.html","7ab30c70140ad2dddfd96e92548cca31"],["/posts/1131280526/index.html","a98c4be4c7948807ca9b6768900fbeb9"],["/posts/1144587061/index.html","9d0645a239e046320ad4181fba411c65"],["/posts/1161612098/index.html","43ef77b291718f7f9510ae12c05214fa"],["/posts/1168983266/index.html","3a42196a33a746977e7afc578ef919bb"],["/posts/1222301607/index.html","cac9904d008387b4cb8e13d2e4fba71a"],["/posts/1276934816/index.html","ecb30f361df11846fbf61c13bc5f08bf"],["/posts/1282894956/index.html","94d7b919c6741785474ca90b1a1d439c"],["/posts/1284303576/index.html","e0028e7d51a2d6cf01a2443a7c40653a"],["/posts/1295992950/index.html","22aaa3e00dc19cfdfd70f01d8d3c0864"],["/posts/1323151960/index.html","a93d8bc32f2ea195e691a65dbfb9834d"],["/posts/1333180961/index.html","5bf00de1084a75cdb982b306c09fdeaf"],["/posts/1378896606/index.html","d26cc39d9d61086da0c39779eed540e3"],["/posts/1410341477/index.html","2f1da8b7ceee0203d3326744ff74b09f"],["/posts/1410341478/index.html","0af6ee66b47dd3fa35d1b7d56751f900"],["/posts/1513600459/index.html","df5896b8cb840353603acf1962eef392"],["/posts/1572391089/index.html","959e938873406b1327a2a5f8fdb57bfc"],["/posts/1583217180/index.html","2cabeec6549291529139509fc4908c7c"],["/posts/1652193583/index.html","91f723b045b59705ff137168b1597f5a"],["/posts/1703341700/index.html","8fc9f983f4f17fb775f1207dd443bdcb"],["/posts/172401470/index.html","f3d5df5bb2f407515a3c0e956ca3c524"],["/posts/1805418661/index.html","73da1b4b9b829490742c4e2885a3b560"],["/posts/1936792829/index.html","ec6bab3b4d553b94ef87fe962b3cbfc3"],["/posts/200511804/index.html","fc2a4460ff2361f97156aeaa8a6f8d62"],["/posts/2008259094/index.html","7c890b19f1a0c3500ef4b67ff414e7d3"],["/posts/2046694271/index.html","8710ae718152ed67635572f9c1566e85"],["/posts/2062480448/index.html","5eac045a34da2be3f938c4a1e08f9e07"],["/posts/2090815300/index.html","2635316ae6b09b46f8d6cc20a4821b5f"],["/posts/2097459314/index.html","2548516007afb0e16a404538c3c7e908"],["/posts/2151465192/index.html","90b0ba4468434c4375a798939efe8a24"],["/posts/2161165336/index.html","de995eda3f7570daae6eb2afd39268c7"],["/posts/2402725415/index.html","e79ed75700893eae881ec03d11f1e33c"],["/posts/2435599292/index.html","3df3ed1ad179b8a85eae726423838eaf"],["/posts/2458362678/index.html","e72b55f2ba7a126a98e2e348610a45f3"],["/posts/2475189015/index.html","4be92f2f7f3669e2365de1ec1d3ad08d"],["/posts/252205597/index.html","d133f33e08ace4fe812d20189b725f55"],["/posts/2576354353/index.html","bb7a3b25456ab959e0481296e7efe2c9"],["/posts/2582393250/index.html","8a969d5113aecdce70957edc94fa1308"],["/posts/2593223670/index.html","f0d69981a59d77d3747bc508f89963df"],["/posts/2732070170/index.html","8c873c15ac0faf12667a624dd4a07ddf"],["/posts/2778725059/index.html","8c1d2d35126dc58a6fa510eb8fb3ed72"],["/posts/2797606246/index.html","ee4c72cf441a17cdf5a43ab64e6699c6"],["/posts/2881010164/index.html","48ade11145dc7cde064f3ea0360f495c"],["/posts/2906490375/index.html","453f6228a7ceda26b2d359a94126929c"],["/posts/2961638573/index.html","49b5a4fd4d424e65c15c16e24deea2ac"],["/posts/2976841894/index.html","3015332d5bd994547a8000574c4d4a89"],["/posts/2992649876/index.html","97dfef392a9e3349c455d8590c0d7b19"],["/posts/3074605191/index.html","75f75bac93eb864e725789b64287af97"],["/posts/308272463/index.html","357884a9627e0d5e2a4a64ff83cc1a0e"],["/posts/3090245434/index.html","3ce81f3adcc9833ae40c3622a1a32ea5"],["/posts/3103992604/index.html","c5e923515afe7ad69396f0db5a71ae4c"],["/posts/3106196216/index.html","efbd186c66c1a3ea4c0bb225fbc8c0b9"],["/posts/3179434621/index.html","dce7e68ae8d0545e7ae3aa3b021a348b"],["/posts/3250811507/index.html","66dc3b153aaf7e6f227719e9c3313c61"],["/posts/3318597918/index.html","0f3ef30d6035b693397fbafd8a758932"],["/posts/3350941666/index.html","dee8e7a05ca0f3c3c21b1aa4dc6ae5fb"],["/posts/3355969119/index.html","a33f0c2a81d97667e1509ab696258e0e"],["/posts/3383846748/index.html","332769623c7b56e55a7fc27a68cd49a4"],["/posts/3440987103/index.html","3329fc90827d49d65026f2259327b268"],["/posts/3451170570/index.html","e125ebd0c7c30860db10183f3223f0cf"],["/posts/347129926/index.html","9865e1dcfc6572ba1b3e26b752c33f6d"],["/posts/3500150157/index.html","25431fdb165776085aa30e008b0a1b68"],["/posts/351158764/index.html","b988c86e96c5d766c56e1123c29c66c7"],["/posts/3541433463/index.html","473d6de14fc5bfc85fd9214f42040cfa"],["/posts/3551608196/index.html","651a28eb5a2da9edceb5a78b4eb6d3f9"],["/posts/3583084017/index.html","e443e7bfce77a7ba3b210f195a61a0e8"],["/posts/3679159268/index.html","a830512a0a25d369a30591953567f553"],["/posts/3689993699/index.html","e80c47b6390b2b35cae55f6587391494"],["/posts/3693633031/index.html","3bc8c0529003f4eec5d4d7f83b5040d2"],["/posts/369987328/index.html","e4293fe18ae0ebaa1da6aa154448368d"],["/posts/3737568820/index.html","5bfc3eb0178d412818cb807b242b6854"],["/posts/3894586884/index.html","51cb9bcacd0f1559eee3d891deacb946"],["/posts/3906343608/index.html","eb44249b9eb4d957587efd62005abe1b"],["/posts/3924507216/index.html","08947e06d72a781b16830810486e450c"],["/posts/3931945421/index.html","38bad16974d14690f953195a677758b6"],["/posts/394001834/index.html","8c5bfcb49a27d2b8b8b03761de3c6139"],["/posts/394596529/index.html","bbe4881437b892c9f88bb420d10abb26"],["/posts/4033900294/index.html","f605d3a8d9d177a4477deb9d5a0eda90"],["/posts/4154491119/index.html","04da8d48ddd63b6f1c8331967cdfc8bc"],["/posts/4161554500/index.html","435a2c67228719eb6acbb69dc0d6b44f"],["/posts/4172318439/index.html","fe8da7443464acf9aee9101a6c3f7674"],["/posts/447422923/index.html","f2ab1870e4a0e0c7d858ae4633c784f5"],["/posts/453733915/index.html","bf64f3fa206f8d5b1d1de94f0b109504"],["/posts/559196830/index.html","d144dd1abb37e2645c354f05d86c929d"],["/posts/606001916/index.html","0442f8d8f3fa3a0e6ac07f134a16a99c"],["/posts/678017232/index.html","308f2b37321b7178e89d428b9c4f97ff"],["/posts/686027467/index.html","544ae81ab0814cf8fc39312627410fb4"],["/posts/719712725/index.html","412c4be281001af1c93a875a3abfcc97"],["/posts/732690854/index.html","0388537d333490719e47e6e45137e67c"],["/posts/811989321/index.html","5aec84cf53712da790f49f7d75e90a4e"],["/posts/849555402/index.html","19a95e861a7768ce4cca111ad1c393f3"],["/posts/961371178/index.html","586f6c86b9c6cdaedb1c8f3c2a538b0d"],["/posts/972193328/index.html","de647ec7f30b86f912b82aae73738d26"],["/posts/977460013/index.html","69067c96bfc3459c72c9015a9e2590f1"],["/sitemap.xml","27142cd59409f2f50cffe71727e4d911"],["/sw-register.js","00886117a9a47fd66be2776ee7368106"],["/tags/Ajax/index.html","5b79578bdbac8e1842ca23b68e3fb1db"],["/tags/Echarts/index.html","232e955a9abd0d1c0cd42399865ebe3f"],["/tags/GitHub/index.html","842d1cc903ae2513d2e817afa25109d7"],["/tags/HTML/index.html","dd2504a9e600ae70b90b1c915e855c7a"],["/tags/Jquery/index.html","e3e50be5c8b6a301c5cb05e94855bc04"],["/tags/Linux/index.html","debb65ddbfbfc7c815b9a0b3ea6183e1"],["/tags/Vue/index.html","6a70d207192f6ce9cd7805b48d1fb0b4"],["/tags/Vue/page/2/index.html","5d089c10394d064f306940e2040bd1cf"],["/tags/Webpack/index.html","15d5115ecacb7452c023831fb3717435"],["/tags/css/index.html","821888ace1d9a1eba84cf09a2fff5ef0"],["/tags/docker/index.html","fe56a80f02370766699dc0719c691f4a"],["/tags/es6/index.html","5143cea3347b21a3f3633855ff2f01f4"],["/tags/hexo/index.html","b3b13a4b06638b0527f11b12abea8773"],["/tags/http/index.html","408b3c3a418206e2732821e689ca9ed3"],["/tags/index.html","497345941a30783eba001642bbcecde4"],["/tags/javascript/index.html","0e70ecd9f767a2eeeb6777dcd12ce749"],["/tags/javaweb/index.html","83d5d42b0cef72ca5e3da3597a04df49"],["/tags/js/index.html","4b81e4a5fe7f0546c55f4082dd7d1059"],["/tags/js/page/2/index.html","8f7ea270df4f4aac014833fb786c1792"],["/tags/mongodb/index.html","e6145c1cb3af17a7e673cf6e7a484054"],["/tags/mysql/index.html","3a7efcf5973275eaabf561a93714b738"],["/tags/nodejs/index.html","22e8229e07e4d8eee135a635a9c36e93"],["/tags/nosql/index.html","d553f7ad376ad6fe5fd8a1d3c06cc7e6"],["/tags/npm/index.html","ab086cdeeadad3fffa3a6b0b677ed8e6"],["/tags/ts/index.html","9f2ba4758b9053b0ef00cedb8afb7f22"],["/tags/前端/index.html","874b744202b835bdab7cf2a107288834"],["/tags/前端/page/2/index.html","9ae38d09652092e620943a83a30bffc3"],["/tags/前端/page/3/index.html","e9f2f635b9a4c626dfdf64f0e15361a3"],["/tags/前端/page/4/index.html","d5be5ab33c9687292495850a4ebbcedc"],["/tags/单元测试/index.html","656a081e63a7efc514c6ccd605f2b34c"],["/tags/工具/index.html","24d87363bf36dacb1454821d4cb2407d"],["/tags/日常/index.html","9f7144b7ed38d5eeb9eee988b90d0929"],["/tags/浏览器/index.html","f027848a89c38010ab9704b63e0e2f97"],["/tags/算法/index.html","b6c0a208adb0530189db2b6b0beda137"],["/tags/网络/index.html","fa5a046ea774763bd775da499bb5100d"],["/tags/网络安全/index.html","76f6ffa6a282f1f21df44351e7b37e49"],["/tags/计算机网络/index.html","f383cf7d76da3292686eb2c9bdfa3626"],["/tags/设计/index.html","1180e3ef04a4d949e384fd795ff47363"],["/tags/面试/index.html","14cb04eaad9c37249f54640a8ba08695"],["/tags/面试/page/2/index.html","fe0ee062cf182b31fea1614824ce764e"],["/tags/魔改/index.html","402658fc4da14888f05d3bce0192e165"]];
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
