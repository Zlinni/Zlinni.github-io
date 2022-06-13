/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","19264767841050a780f34a2c55b95950"],["/about/index.html","c7032ac1193c1983c615a165eaee06a1"],["/archives/2021/11/index.html","97b879e0348bf1486d85418176c187de"],["/archives/2021/12/index.html","4a987df0009e4f75d47269b40447a2d4"],["/archives/2021/index.html","b3610371dbbe5624d3324d8f84f70cb6"],["/archives/2021/page/2/index.html","cdbb649662b059ef667353fe52a0976d"],["/archives/2022/01/index.html","d83fd314cc0e6483b2e4cdcc78be5e4c"],["/archives/2022/01/page/2/index.html","d5a05efda5762f04b9a4efa48470f33b"],["/archives/2022/02/index.html","84442f2e28b592ae48905bdba5d792f9"],["/archives/2022/03/index.html","99e38e306f87cd2a0884c9dbd84ae90f"],["/archives/2022/04/index.html","ef610305e67418cafaabaeea732a94c1"],["/archives/2022/04/page/2/index.html","e257d8284fc987e367fcc2df342a16bf"],["/archives/2022/04/page/3/index.html","d8a1e8aa1ed5d3bc77e3ec3ef2f51320"],["/archives/2022/05/index.html","8c583c1ee0f63ef15db36bb4512e488a"],["/archives/2022/05/page/2/index.html","2dad77b73ae7caac492e0093cc9deb3d"],["/archives/2022/06/index.html","11965c15a9723fcb759d3800a6029b5d"],["/archives/2022/index.html","bff98e760282382f6a15e79d480e3bd7"],["/archives/2022/page/2/index.html","bb2166b7f7063ac84822b016d5b4436c"],["/archives/2022/page/3/index.html","976f392a3de7808b61c6a8f040c479ad"],["/archives/2022/page/4/index.html","1d770d0213da808d3e675a8b3a745d3d"],["/archives/2022/page/5/index.html","791b44e329a917ac2f659b1b6d7440c5"],["/archives/2022/page/6/index.html","66b1f2bcdcc6fc729fd8d7b136376311"],["/archives/2022/page/7/index.html","bd797f3e9b36fa7836828fbeda2bf1cb"],["/archives/index.html","9402400de9798e21853a7208f2722a47"],["/archives/page/2/index.html","00dd8ddb3add7cb4c382637a46f1e5a9"],["/archives/page/3/index.html","fd1bcc2284f6156d6a1214b222a7fd4b"],["/archives/page/4/index.html","fbb7519e164214d329f160c4554fbbe5"],["/archives/page/5/index.html","55d404b09d39de35262de4c98576de61"],["/archives/page/6/index.html","f912cc15c10a0b812e8941e7ea64a71d"],["/archives/page/7/index.html","295b940f8bff1283e6670940d6d27bdc"],["/archives/page/8/index.html","cb0212b9b9e2c7469b6237568933134d"],["/archives/page/9/index.html","044af499bc1f4fb40cef39695fe1fc52"],["/artitalk/index.html","f79e8b9767d86047b8a821f335d55062"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/atom.xml","74de514d49a15bd17e76a08d3286823e"],["/bb/index.html","54811e66bc585e737d9eaab9d2c73807"],["/categories/CSS系列/index.html","02523a5c256cdcd2437948069c3a566d"],["/categories/JS系列/index.html","2400bba6d038c346100e66feef25ba2e"],["/categories/JS系列/page/2/index.html","1eec8a10f6d9f305404ecbbd7ce01368"],["/categories/Vue系列/index.html","184f7e823ad11fa63eaca64e63cd18a8"],["/categories/Vue系列/page/2/index.html","4de14107685c02865522f3235ee13fa8"],["/categories/Webpack系列/index.html","feddf936cfdf39b6bd0a2ddaf2f02da8"],["/categories/index.html","2d064d76944d402b8685519c9ac67ef9"],["/categories/前端基础/index.html","bf2fe7aad520a230ebc79004620e399c"],["/categories/前端基础/page/2/index.html","4904f64fc7121df94255c03bda1266bc"],["/categories/日常杂谈/index.html","04a9cc66c343e17534ed0123b237d02d"],["/categories/浏览器系列/index.html","34f085561b050d90c81871aec08618ff"],["/categories/算法指南/Binary-Tree/index.html","1a2477942d50a53df7a051f832ecf6bc"],["/categories/算法指南/index.html","357a9f85c6e346e327ae80d039f861b6"],["/categories/算法指南/page/2/index.html","f2b092e8fa8ea2f33b88909c608e2092"],["/categories/网络系列/index.html","b8c6e711399265377dbe7244b654c774"],["/categories/面试指南/index.html","ebccc65dc3b05436f8f3f2c821b8bc88"],["/categories/魔改系列/index.html","7507c4e9de16017739c849f54b51e521"],["/css/animate.min.css","55009d64191e6f9e712a841773ee6611"],["/css/aplayer.css","ddcbd79780067c3941f243a7bebdd559"],["/css/bgc.css","af61378e9e8a5b159cd5d9e729b88a4f"],["/css/custom.css","ba55f423a7cb6d329a503a799ca66f34"],["/css/index.css","6a0a3befce44551923752d0d5632af10"],["/css/neonlight.css","da78e969661c4d6e9f4c1213eba8b8d6"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/157b9e6bd3841296e9df46651f8bec6-removebg-preview.png","bb308ab2ed4cf5731f1d0d15a7f9030d"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/4444.png","65f700e782700cb3dfd7af0db59ca2ca"],["/img/9050f3deb48f8c54cbb518ec34292df5e1fe7f94.png","c743ccd196007aeb31f107b4b493e6b5"],["/img/React系列/react.png","a0c6e00a32c0c09f7767d22e1174a532"],["/img/React系列/react入门与实践.jpg","bec260ee5125459b10146c1ffc40fa49"],["/img/aaa.jpg","6a5a7844633c5bb81b35b0a914d35547"],["/img/afternew.png","5d5fb374e7d442f980ffc785fecbea25"],["/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["/img/beforenew.png","69f79b27b5abcf1d4b8cf4be3559db39"],["/img/bgc.jpg","1b811783648f9ef2352ada176a7c33cf"],["/img/bgc/1.png","4586c5fa0183b05b7452cb5373c0c60d"],["/img/bgc/2.png","a7c142f1bc2ab6a76e8187c2272cae1e"],["/img/bgc/3.png","087631d84d82550e4292baf6653e0bcf"],["/img/bgc/4.png","7826c94c76e084de3df4cc54055683b2"],["/img/bgc/5.png","3716efdaf9a0d6cdf08576e5239e2e0c"],["/img/bgc/MileStone项目杂谈.jpg","5cf842d5df8a84981ecc60bc446e862a"],["/img/bgc/after.png","9fabcb0ed02d2c28a8dd76a9fb7a5bcf"],["/img/bgc/ajax.jpg","f058544f8a1d9565d0fcbba2beeb77b6"],["/img/bgc/before.png","d42e0836dc7aeb5c6ac3036047d5f1d9"],["/img/bgc/bgc.jpg","d3823f30edf3b54a4dda8968c050d9fb"],["/img/bgc/code2.jpg","f6ef52f88effeb006200656835768019"],["/img/bgc/css.png","6500e8c6985e7e7cff88d28d7f557aa4"],["/img/bgc/cyberpunk.jpg","72b2ed74a64f89915c5504a7905456b8"],["/img/bgc/default.jpg","d47700fa220cbda3101d7d51137c3338"],["/img/bgc/echarts.jpg","ca9cff91ec072fde7477863a1861406a"],["/img/bgc/even.jpg","d29e7de6f6eec69bfe754aa9838785cf"],["/img/bgc/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/bgc/gio.png","9c5e50718601d3774f3b33d09af388f8"],["/img/bgc/html.jpg","f77f736241eae0e090eb336a50918a74"],["/img/bgc/index.jpg","b8c3debd17dc84991778826d8bcddf40"],["/img/bgc/javaweb.png","90e836a17db8d912128bb829760dd4bf"],["/img/bgc/jojologo-removebg-preview.png","30822d43dc3df2211c9ee69e17000feb"],["/img/bgc/jojologo.jpg","068874ae20beffb79fedacb43cc85fd9"],["/img/bgc/jojologo3.jpg","9bdc7f6dde78a90a8925aba6bfe4199e"],["/img/bgc/jolin.png","90bd8c8e1b3773ba73bd0558a2f287c7"],["/img/bgc/jolinlogo.png","97a9083e5a819fef92c7c35fd009d2e6"],["/img/bgc/jquery.jpg","558f23b412317052dec339ffa779abed"],["/img/bgc/jquery.png","4b5c2de1fa3c9e03af2ca364c1c04d12"],["/img/bgc/landingpage.jpg","ab88217fb76d9e40c573c2fc3cf24a45"],["/img/bgc/logo2.png","98c8dec7017d4bfb2640834b4182dd32"],["/img/bgc/meiriyimian.jpg","541d97c206eb47370fbe664fc13d59bb"],["/img/bgc/milestone.jpg","8f43613c730f4d2c970819c39ff54b29"],["/img/bgc/ms1.jpg","00c7088badb76fbef0bed92e9ddb4626"],["/img/bgc/neonlight.jpg","aa5ba11e9a7abf5622486e1c2aec0710"],["/img/bgc/neonlight1.jpg","3566a1e4cd2c598aa06723541ad98c32"],["/img/bgc/neonlight8.jpg","d29e7de6f6eec69bfe754aa9838785cf"],["/img/bgc/nodejs.jpg","b190f2f48b3fab7557ba2d631154e1fd"],["/img/bgc/odd.png","022ef01c84264cabd9b65bdf1310e363"],["/img/bgc/onepiece.jpg","63441a8c9e6a4a4e550dcfd404530b4f"],["/img/bgc/op2.png","9d5104b349c6158cfa6dfa538ac9c9a2"],["/img/bgc/picgo.jpg","7db7ea9485a1c89e88fc64dfa740fc65"],["/img/bgc/rgb.jpg","c005c879eda29330c0585adac2bd9596"],["/img/bgc/shuzuquchong.jpg","fbf2db16cd99b76ab50b01b6fc64be60"],["/img/bgc/sjk.jpg","8b2ded959ee7d10ff589a4a81a71863a"],["/img/bgc/standard.jpg","058bcd3e8ac10ab50b0b7bf89c9f4e9a"],["/img/bgc/ubuntu.jpg","e2d49e81d44b8f301fc19c9e01c36393"],["/img/bgc/vue.jpg","ebd691a3825d42e739ab1cf368a85cb9"],["/img/bgc/wallhaven-1kyv8g.jpg","378a6e569aca24abec148d5f1e682e67"],["/img/bgc/wallhaven-2kvmgx.jpg","e1daba962018ac96e469af51bbfa3c00"],["/img/bgc/wallhaven-39wq39.jpg","8d580decfec38587f2c4686104b6b79b"],["/img/bgc/wallhaven-3zwpz3.jpg","1339aac62b3107e83e99b9e29a1f6aa6"],["/img/bgc/wallhaven-4lzgkq.jpg","107a0a3e6a7ae4150b4c3ca6f9739617"],["/img/bgc/wallhaven-76m9z9.jpg","7e7928239f7251ec6f594dca854239b6"],["/img/bgc/wallhaven-83rdp2.jpg","99e2d160c974671cd86e06aba9f58bff"],["/img/bgc/wallhaven-962ogx.jpg","1d0757ba5b17159318d0b5ac3f5fede0"],["/img/bgc/wallhaven-e7vop8.jpg","f6296b43308523d3ed3a7bdb9f331310"],["/img/bgc/wallhaven-p8d93e.jpg","27b85425c9bfdc3ede5101c3c54acec7"],["/img/bgc/wallhaven-xl15ml.png","c45cb99d0b00810f907bfb9a449019a9"],["/img/bgc/wallhaven-xlpx3z.jpg","af9114f7b84f0fe62e46c59e5587f678"],["/img/bgc/wallhaven-ymly3x.jpg","d72691420acd959ea9f506ae7e0afb14"],["/img/bgc/wallhaven-ymqq3k.jpg","8fb484f0e6d3f4091502234af96b79ea"],["/img/bgc/wallhaven-z8jk1g.png","a21c5ece7546f999cde38800d60b4284"],["/img/bgc/wallhaven-z8xqqo.jpg","171c931cf04af4fb5ddadf142ec379d1"],["/img/bgc/wallhaven-zm32go.jpg","8393ec224ca82aa2ad571a350885b361"],["/img/bgc/whitejotailang.png","3d61863dc9eb0847385a5e7052d117b0"],["/img/bgc/xinfengjotaro.png","a82cf6d179ebe79e4d776f9717765d77"],["/img/bgc/牛客网刷题record.jpg","4925e7cdba5881aab3cfa850d6d748dd"],["/img/css系列/css.jpg","d72691420acd959ea9f506ae7e0afb14"],["/img/css系列/flex布局.jpg","7a1e7eb07b07bd5cf287cfddd0e7d6bf"],["/img/css系列/landingpage落地页.jpg","a1ca74704f2181af8e9660952b7f208c"],["/img/empire.png","f93146076c2cd52c440843a1d473bffd"],["/img/favicon.png","9a3f70c3d35fa52f4c506aca79ad3ecc"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/head/boji.jpg","2f4a0ec31d68cbba1a4dd8feb79e62b1"],["/img/head/jojo.png","cdb4b455a1328b2293446e226fe8472d"],["/img/head/jotaro.jpg","38c37b3c624e637b366bb387e9bce0f5"],["/img/head/jotarofire.png","b54c5a3f45fb40f17d8ad2ebebc4cc82"],["/img/head/waku.png","1255a7b487f395761db866cb3b0ad25c"],["/img/head/waku22.png","6fe83c965b61147dd9282f502a1a35d0"],["/img/head/waku3.png","af308bb019a5b87ac6211ee5eaae5331"],["/img/joji.png","1b5797a3744888577f385739acce641d"],["/img/jojiimg.png","3991e6710f446a26c3640e04be9ba851"],["/img/joker.png","34cc2d991e42c8ff6bcaa94c4aeb997b"],["/img/js系列/js.jpg","c005c879eda29330c0585adac2bd9596"],["/img/js系列/jwt实战教程.jpg","248f66ceeb2f003658b44d276817cbd2"],["/img/js系列/从0到1TypeScript.jpg","9e7373e5b6c4b4be1c787904fe541e65"],["/img/js系列/代码之美JS篇.jpg","fdd5af0037797000d45ea8dac2bffaa8"],["/img/js系列/你所不知道的JavaScript①--数据类型及周边.jpg","4d8ee06e0dc984a8f351a621ae2aea20"],["/img/js系列/你所不知道的JavaScript②--this及周边.jpg","e2790de1ce93ce5893472897c9a3b473"],["/img/js系列/你所不知道的JavaScript③--原型及周边.jpg","eafcd233982048eba211a6a79f01b644"],["/img/js系列/你所不知道的JavaScript④--异步任务与事件.jpg","2e904af9ff7f84df1fe9ff92dbfb53ce"],["/img/js系列/你所不知道的JavaScript⑤--垃圾回收与内存泄漏.jpg","4e49c961c784ae73b478e077d20dd011"],["/img/js系列/你所不知道的JavaScript⑥--面向对象与模块化.jpg","9ed9b5f248f731f0c4a548537af7b9e4"],["/img/js系列/你所不知道的JavaScript总集篇.jpg","08030c6cd5637b003ecbf6433d7347d6"],["/img/js系列/快速上手Mongoose.jpg","a2e005dd2c3350d808d38022314f1081"],["/img/killerqueen.gif","9f182907f87f5cbfbc03ee8e5504cc3b"],["/img/sjk.jpg","360f2a555d5e53805e1aae70c9583152"],["/img/standCharts.png","842236aac7ef690d5960784795424544"],["/img/standCharts2.png","48a7b669a21511b076116aba376342ca"],["/img/vue系列/LIS.jpg","afb9632f7df85e8d23d1227dc045edc5"],["/img/vue系列/MileStone项目杂谈.jpg","995e4a219190b658f267a1353dfa21fc"],["/img/vue系列/Pinia大菠萝入门与实践.jpg","9d2f4b67b13e170acf8df0768c6179bf"],["/img/vue系列/Vuejs灵魂之问.jpg","31b651074f4079c474d1af90820d7c8f"],["/img/vue系列/Vue打包优化+可视化js体积.jpg","da8e8f55fea78933afe28486735c576c"],["/img/vue系列/Vue核心.jpg","4316121d9c9e0c6ff28462e27ee0ee0e"],["/img/vue系列/Vue组件化编程+Vuex.jpg","ed91716c079036170748d94f19da8d69"],["/img/vue系列/Vue静态资源.jpg","0eb5b20a68022f2a4620d70c9388765f"],["/img/vue系列/component.jpg","6a8cf55bcb0e988aaa9c11cc46fe52f5"],["/img/vue系列/diff.jpg","c4e96f0b0d5b8d1ac16f34e2cb3901cf"],["/img/vue系列/footok项目杂谈.jpg","cf7c020f0f28fd6e8f08a3616d4576ab"],["/img/vue系列/mini总集.jpg","f1f99774003c8e0340e6af8f2f9737fa"],["/img/vue系列/parse.jpg","efcf4e0d42acbdc3a7a6a7f97a1d449a"],["/img/vue系列/patch.jpg","bf4a5d7b8701c680a62e3a774ae833a4"],["/img/vue系列/reactive.jpg","51b9abf57489317d73c8a61b537df98c"],["/img/vue系列/scheduler.jpg","b944b1baf09a9aada38bdd75edad4975"],["/img/vue系列/vnode.jpg","a31586a5922eee52f2fb0ecd5935ab33"],["/img/vue系列/vue-router.jpg","35f420e498d11f1ed91b23ea24fddb8b"],["/img/vue系列/vue.jpg","62a9c746dd6bcae3442b4a860b355005"],["/img/vue系列/vue3.jpg","9d087e6550aecbb12a721accd7fcbbd3"],["/img/vue系列/模板编译intro.jpg","421f92fab1b5a4641cfcfd17b291a1a8"],["/img/vue系列/深入浅出vuejs.jpg","24b4a4052e8a8950f63cd01c136165a9"],["/img/wallhaven-x8jl83.jpg","0141db506a6b4556789c4bb700132de4"],["/img/webpack系列/webpack.png","e538823bb9c2c1a8750efd9bf634a6b2"],["/img/webpack系列/webpack5实战指南.jpg","e12f3b47eab622e39c067d3e57240ee9"],["/img/下载.png","8c081ca3fdd80d66d0ec62c12d242c0c"],["/img/吉良吉影.jpg","68cb01b6f0e01ba60a163ff7af0d12f7"],["/img/图层 1.png","d0d35e3b8b3e53ec54452a4d80f2563e"],["/img/基础系列/ajax.jpg","a078df41d2eb99cd8cfa1c5bbd278c9f"],["/img/基础系列/css.jpg","e9201166d1c5ed23dd40886cd5a05122"],["/img/基础系列/echarts.jpg","c6b72698453178260ec732ed447fac12"],["/img/基础系列/html.jpg","e8a2d084ec809ba3ae96bf0310c3f356"],["/img/基础系列/javaweb基础.jpg","b5ee06a3bfadd453f89a1f92fc5ec7f4"],["/img/基础系列/js基础.jpg","688fb7bce2a030dc5949f6475f0ec175"],["/img/基础系列/linux入门.jpg","30c4bed5581c132f716e17d64b2ab994"],["/img/基础系列/mysql入门.jpg","3d0cbf14bbf50a10cfa8330d3c91d70d"],["/img/基础系列/nodejs基础.jpg","ba81f3fb38d97af0187fef3b1c959fdd"],["/img/基础系列/基础.jpg","7184f74a27f009f7510de06e2db5e9ce"],["/img/基础系列/浅谈ES6-11.jpg","c59cade5923eae9171f6bf01d8b35b07"],["/img/基础系列/浅谈Jquery.jpg","3dfd620955e9f6ec7f460b99d36e86e2"],["/img/日常系列/搬砖日记.jpg","90d1869276b09e4e0e89cf224ce76d4a"],["/img/日常系列/日常.jpg","43264ebdd62da3df884798f946caeb85"],["/img/日常系列/春招落幕暑期已至.jpg","4213c07b9669dd7eed38a017b0eebc2a"],["/img/日常系列/秋招面试杂谈.jpg","33d1eebbd64a7c87498910a657c16635"],["/img/浏览器系列/浏览器.jpg","03cc69a4f46cb1e709c024790a537979"],["/img/浏览器系列/浏览器性能指标.jpg","383402c1659f21ae13c22000c873f926"],["/img/算法系列/Algorithm算法日记.jpg","8913419fc8671d8f9b4d3b3692a7fd70"],["/img/算法系列/bt0.jpg","179614e9705b1211928000a8fabbfcce"],["/img/算法系列/bt1.jpg","f479a640ec104961ac0ebc9dc995a509"],["/img/算法系列/bt2.jpg","fc07e3506c528ff349c7ef12d73c7a00"],["/img/算法系列/bt3.jpg","dfdcf6eaf7aab1047a7fff36943659c7"],["/img/算法系列/bt4.jpg","d631c371760556dacc7e93eadde329be"],["/img/算法系列/bt5.jpg","69dc9a386c7911f5589c75e537173979"],["/img/算法系列/bt6.jpg","1251332bf989e821e5ad778cf5513d50"],["/img/算法系列/bt7.jpg","c3728b543d0498fe9054cddf2e2a4f5e"],["/img/算法系列/bt8.jpg","2b53e5a4db580ead0932c95e7ed3bcab"],["/img/算法系列/算法.jpg","17c02198ce326525e64cfb83315cf700"],["/img/算法系列/融会贯通八大排序.jpg","72ab1c987d51c5effb2e514a1b089524"],["/img/网络系列/CDN内容分发网络.jpg","9fab3a20652f9cb160ed9491102e1ab9"],["/img/网络系列/CSRF跨站点请求伪造.jpg","985f2d1ebad297b1d3ae4f66c3fdbc80"],["/img/网络系列/DNS域名系统.jpg","04a7db8f68daa9c545fd91f52e6fe589"],["/img/网络系列/HTTP1.0-3.0打怪升级.jpg","d25d513b2653de55aa036413271f38ee"],["/img/网络系列/HTTP灵魂之问.jpg","16d2885008efaaac3afbe09f0311f2d5"],["/img/网络系列/XSS跨站脚本攻击.jpg","4d361901c4c585c5859d84cb62388311"],["/img/网络系列/landingpage落地页.jpg","46548b66920a4f478aeb4c8e4d928151"],["/img/网络系列/tcp粘包拆包.jpg","aa39ebb8791e5391bdd4871b40778c38"],["/img/网络系列/浅谈TCP_UDP.jpg","18d7da90125db2a1590387ea90536726"],["/img/网络系列/网络.jpg","e28b5bb63656ff956631f68e498a9a24"],["/img/面试系列/三道题入门async和await.jpg","79102c0a4eae6a9fafcf3620df8da962"],["/img/面试系列/八种方法掌握数组去重.jpg","d9b7a3d7d0dcd5ebaf2199b63cef3a43"],["/img/面试系列/前端登陆指南.jpg","bf8d0e64e166a3bb94c83b7a2810c6dd"],["/img/面试系列/手撕万物js篇.jpg","e98065be31e11fbf9f561079a44f21af"],["/img/面试系列/每日一面快乐无限.jpg","42a8d301ba1878c0eef11e5a9eda25f8"],["/img/面试系列/牛客网刷题record.jpg","b03550166db26459d06fba580b0f2626"],["/img/面试系列/计算机网络不完全指南.jpg","e384ec0fefe86454751f60484ffb5519"],["/img/面试系列/面试.jpg","95f4692dc4396aef2d73a47adfa5e38d"],["/img/魔改系列/Animation主页动画处理.jpg","38d22d51f19863165dc407f561f89518"],["/img/魔改系列/Aplayer设置与优化.jpg","99a8b8bdec684008090e86e51fc6c2a4"],["/img/魔改系列/Butterfly魔改合集.jpg","032ec1df7721d17186c121e24d9fd144"],["/img/魔改系列/Cyberpunk配色魔改.jpg","893dab33728496e1a28a18809c140d56"],["/img/魔改系列/Hexo搭建+Github.jpg","fc82a58d7e5960691ac5942268336ad6"],["/img/魔改系列/JOJO石之海信封魔改.jpg","35ac13b125e056130c58d31b30ec2a91"],["/img/魔改系列/PicoGo图床.jpg","90aa107dbd8b01282bc2f7af5ce09092"],["/img/魔改系列/RGB头像魔改.jpg","559d97f8d7c85dc413beec4257c90d37"],["/img/魔改系列/替身面板生成器.jpg","1d6974d09a5bc3b55aee26647c6436ad"],["/img/魔改系列/魔改.jpg","0b1b2ff5b44a7c7fd487aaee3ec96095"],["/index.html","a3b151fa27edf889ceba6ade63b278ee"],["/js/addele.js","94536e349616a11f5cd6008913459d6c"],["/js/addnodestory.js","d5cddd7fe34e38e0782ff0fa2e477e2c"],["/js/collection.js","3c008c6c91d7adbdc49c77a67c9fa008"],["/js/eve.js","cbadadeff4a46fe1ce17d953908df467"],["/js/fadeIn.js","f4ddb49cb2efe27b756f423aec60a279"],["/js/jljy.js","f3d21b134ccc9d0dfdbd610a4ca93d66"],["/js/main.js","240e062def7897dd4c03a12bf07fdc65"],["/js/pwanewdir.js","08ac73a973855be130adaf469df1de8c"],["/js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["/js/search/local-search.js","33b3c0e197c029d5b198059220bbd5ab"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","12cef07c2e9bc8841a5380df4fd342f5"],["/js/wow.min.js","4b253cabaafa86647183695c4c4365e7"],["/lib/Meting.min.js","7b5e05378aa5c4dbdccbe9a34cf30adb"],["/link/index.html","8b1e7f2c2d5f92dddcdb2487ba44c811"],["/live2d-widget/README.html","3d7233f7971913d0ec0f363a14a11cc3"],["/live2d-widget/assets/screenshot-1.png","30b70e6cd9be9812adcb347536f0da85"],["/live2d-widget/assets/screenshot-2.png","1295844e29a6d6dc3a4aa0db8faa7da7"],["/live2d-widget/assets/screenshot-3.png","4aa1995daf77bc19803648fe6a65c33e"],["/live2d-widget/autoload.js","6d9b31af84be07871c628328d4162048"],["/live2d-widget/demo/demo.html","ddabed04896079696623255ca934c5de"],["/live2d-widget/demo/login.html","69b5f251f312135cbb5dd1b9ff59b7d8"],["/live2d-widget/live2d.min.js","ee7efff8ff5d1d4bd4a0ff99affd3ec7"],["/live2d-widget/waifu-tips.js","e01c75f70a9465389471f638b1356bf8"],["/live2d-widget/waifu.css","0a4a7474046ce58dde9d78670e7514c4"],["/messageboard/index.html","d96568230812ee1707122cea58b2c0fc"],["/page/2/index.html","d945cbcf9e3a1e588858b851a516af61"],["/page/3/index.html","0e35b79bfc5eb5b0995b27f35acb5d2f"],["/page/4/index.html","b250d022c0af5e6a4514f7d417da37c7"],["/page/5/index.html","517c5b899059f4e7cd5a96fe8f594cde"],["/page/6/index.html","c8ecb72de7403d1c48e804e11f6be943"],["/page/7/index.html","ca7303dbc203c57bfaddaba6bbb0ef64"],["/page/8/index.html","5b78dd8e6d9b0d269a502e848050aac6"],["/page/9/index.html","b23de5fea5a863eae5566675b5cb26c4"],["/posts/101229148/index.html","bb798d6791d5c89c54706085051ea581"],["/posts/1033180007/index.html","2f29ef1e563b1cf27fdc2c8900e2616a"],["/posts/1034828441/index.html","93d0e2733794280457250e8b4c9bc666"],["/posts/1041482613/index.html","6e5bba2b8b5e6982b20f2520b42b7dd5"],["/posts/1060178397/index.html","5fcbab61acffc58e1e884b4701737b4b"],["/posts/1131280526/index.html","3b28298cde0a0f230f841016070e929d"],["/posts/1144587061/index.html","068425cb920c4b4779f61e18e90bdf80"],["/posts/1161612098/index.html","1920ba695dec281c93398160d463a92b"],["/posts/1168983266/index.html","579ff87cd66a5bd5b36603c46565ded9"],["/posts/1222301607/index.html","de6702f19a2d27a8122cdb431e0d5f0a"],["/posts/1276934816/index.html","65b4915f195b45cbaccbfd98316fc5dc"],["/posts/1282894956/index.html","362c702acc84f86f003b5cb5cb8d660f"],["/posts/1284303576/index.html","e0ba74e0be708cb2ceb83101da958ad8"],["/posts/1295992950/index.html","2ecf204866d3ac0049457a98b59e2aa0"],["/posts/1323151960/index.html","3317a057393689e2e614a28e6b974838"],["/posts/1333180961/index.html","c3323a9f19bfa0040294256a6c3babc1"],["/posts/1378896606/index.html","2b84dd819609800256ec69d9b41447bd"],["/posts/1410341477/index.html","8cba485510c0c58a20c785fb4f9267b7"],["/posts/1410341478/index.html","2dce4809499120b6b3da26fb3205f860"],["/posts/1513600459/index.html","01baeb6c38d3fdb17d3e8278adfe9e4e"],["/posts/1652193583/index.html","3eeada6eb37c7f3d3207b9c3ca5078eb"],["/posts/1703341700/index.html","e8074bf12ea358caa6bf062d8f695b8e"],["/posts/172401470/index.html","58acb8a7742fab310d03dabc326cf8c4"],["/posts/1805418661/index.html","eae421685ede1ea11cbf9b9fbd735e7e"],["/posts/1936792829/index.html","37801631aa66f429ea79a9c99b86d119"],["/posts/200511804/index.html","4120745e7c8581c1a1db477565a195d3"],["/posts/2046694271/index.html","1353fd3fd8857058a10a65ecf345d641"],["/posts/2062480448/index.html","3a75c04f42f33999910e60b43a391da7"],["/posts/2090815300/index.html","4d3f7196321513f056a7a134c752119e"],["/posts/2161165336/index.html","9b26405eef2d4d7e808880fa6dcaaa58"],["/posts/2402725415/index.html","9ef9ad1132777fe00475f71d20160578"],["/posts/2435599292/index.html","97e136721a77dc2cea52aff8446a8f47"],["/posts/2458362678/index.html","e34021d2b38a43823d6d10cc1e467d98"],["/posts/2475189015/index.html","80d91100e6f70b4b27e89aa9b5168d36"],["/posts/252205597/index.html","3204fc57c301d498edff5012f3ec3e5c"],["/posts/2582393250/index.html","e7aee50fe18217340e71041f8a73d664"],["/posts/2593223670/index.html","2a12d30141d021911633cbc477269053"],["/posts/2732070170/index.html","bf76acb65d62243dcd3302540e2ce769"],["/posts/2778725059/index.html","d3f53baf48ee24aabecee695381b1b45"],["/posts/2797606246/index.html","333e9661f4bf35799ab1147c0d2f90a1"],["/posts/2881010164/index.html","287e3cc777df8706a17fe6b07df946e8"],["/posts/2906490375/index.html","a46cbfb4f27052d15a10c7939987220c"],["/posts/2961638573/index.html","6a07099197387616bd75b41b11255a13"],["/posts/2992649876/index.html","953d11dd0fa26a2a116dc7491d1f4f2a"],["/posts/3074605191/index.html","fdf6ad37409d27b6f5c00ad6d4cb1632"],["/posts/308272463/index.html","af3831a656d139a32ec5e207101c3c66"],["/posts/3090245434/index.html","93c2621a5c3ffa48f1b54c91f1a53803"],["/posts/3106196216/index.html","90a1471336a1b8f2bb9d499b6955c0be"],["/posts/3250811507/index.html","2795c2f5061082a7ee475f0b722f0a97"],["/posts/3318597918/index.html","70c25c16cfa5a3e990d02387350f9563"],["/posts/3350941666/index.html","04aecff60ff1f8f3cea2a947b2db7315"],["/posts/3355969119/index.html","e03377f32aed636f3afe4e21167b9706"],["/posts/3383846748/index.html","6e6d0e2f798389cfbeceb3ec17477305"],["/posts/3440987103/index.html","a061169fddf4ce7b6349e902f03ec598"],["/posts/3451170570/index.html","37e12ceb983adf87330e118d2ff44e0b"],["/posts/347129926/index.html","bf68e478906436d73d0f5f391f9c6e2c"],["/posts/3500150157/index.html","1d083921c6f87a7a032e7da778a79f26"],["/posts/3541433463/index.html","34e075283a494b9488b5ee46de5b183d"],["/posts/3583084017/index.html","73042087596a8e1a33ae5eaffd7a2f63"],["/posts/3679159268/index.html","fa850ebd5e4f515ccdec85305f8fd75e"],["/posts/3689993699/index.html","5e2cd82cf6f0039358210facef370725"],["/posts/3693633031/index.html","83fe069da9dd2f93d570852df1f22079"],["/posts/369987328/index.html","396cb548a1550a10c618f43fc8458542"],["/posts/3737568820/index.html","0753a77e523c66a1e59fb9f4a7f8b767"],["/posts/3894586884/index.html","638ea1e38079e7a61556d2d36b96b030"],["/posts/3906343608/index.html","2387499df780b223fa388b6dfafa8248"],["/posts/3924507216/index.html","6da8215b8e482e6d4330199c9b3e5de1"],["/posts/3931945421/index.html","5e1e8429b9a6cb82d467817377e94e6d"],["/posts/394596529/index.html","c478e02ba760c8217416183c3a7204cc"],["/posts/4033900294/index.html","37089620389a5ce140d54851050c95ff"],["/posts/4154491119/index.html","fec8a90b498dd1e8df246c7a60d1397c"],["/posts/453733915/index.html","a68afc628790e0bce8bf9d3f6e082d44"],["/posts/606001916/index.html","cb52eac76cd15788bc8cc837c0b21446"],["/posts/678017232/index.html","29121dbebfe9e2e4803f994465bd9ba2"],["/posts/686027467/index.html","aa67eba560b6526e630bc47ae4addd95"],["/posts/719712725/index.html","beef60a4e433f245be3f3ceefae221c8"],["/posts/732690854/index.html","7e9f8b0de05c5e2d572fd776f8752e1d"],["/posts/811989321/index.html","0ea99bd01d1ae90697ccc6285d4b4f08"],["/posts/849555402/index.html","fff906465638aabc6b81d1ea49db7035"],["/posts/961371178/index.html","9f422b9687c0fc636296633c3b921b55"],["/posts/972193328/index.html","b0655d391c0c0013feca15067d729a73"],["/posts/977460013/index.html","676abb738cb753fc13358b9f90935a26"],["/sitemap.xml","36a7517d96ae25279e5a6b776c83fe05"],["/sw-register.js","94514245f3ea0b181b9bea1ad40d73b0"],["/tags/Ajax/index.html","71a4d89d5a6fa5e66a2039182d2f2172"],["/tags/Echarts/index.html","35b647643276f08d335a9ef613710ff1"],["/tags/GitHub/index.html","9ed5ce6ebc531f4fb008766a0f18ae83"],["/tags/HTML/index.html","482d0b92965f80c62b74a440699d02ee"],["/tags/Jquery/index.html","ebb8807e4af1b502a7eabf5d887fc3d7"],["/tags/Linux/index.html","a7d9ccd6b4639b0485b3e50f43557f84"],["/tags/Vue/index.html","65aa9042de7f8527e30c5a96b778a189"],["/tags/Vue/page/2/index.html","f31bc0a5c6c97d4666a008e8285668fc"],["/tags/Webpack/index.html","b9ad6739c685ec6e4444174988427556"],["/tags/css/index.html","f4684a4688cf8d14a2c6583cb5ab5db2"],["/tags/es6/index.html","f1860d8740dcdd6cd4825aa6f51afd51"],["/tags/hexo/index.html","4e8546f389e77c60f00356e38ab33467"],["/tags/http/index.html","f58aea8d5fce260837250df251e297e5"],["/tags/index.html","71c24d2207015c1ff86d915f586adb86"],["/tags/javaweb/index.html","a8eca4d5b733f6d1e8b6bd8f6782699b"],["/tags/js/index.html","c38eaf0235dccfb7ec13b9b220c28193"],["/tags/mongodb/index.html","fd923b1b04cf261b6b1a592ccacc2940"],["/tags/mysql/index.html","2d9598a137f774f10f5f4e7e4852da13"],["/tags/nodejs/index.html","dae65cfdbcfdbb216769340540840564"],["/tags/nosql/index.html","4e4bf5685d2158382e9427ae17e17fa4"],["/tags/ts/index.html","053183da11c3e5131d1eaeffe4db1067"],["/tags/前端/index.html","4d0f1d2ec2277d23018403d9fa8c1938"],["/tags/前端/page/2/index.html","73846131a36273591c3c3a489902b0bd"],["/tags/前端/page/3/index.html","d58fbcfa8ed03829494e8aadf2a4a6b6"],["/tags/工具/index.html","6fb93b85a56d574c43fd2b2d3e51cceb"],["/tags/日常/index.html","d0cb90805c0d542d37eed2fd740e86fe"],["/tags/浏览器/index.html","c743548df28015bd9e4d1f7a2111d503"],["/tags/算法/index.html","a722b3358349555b013c15b3f1c338d0"],["/tags/网络/index.html","ff15f192b16ce8cb4840d3654e208aa0"],["/tags/网络安全/index.html","8a2967ea203e07830b34216c35d2007b"],["/tags/计算机网络/index.html","bfdfc0800f6c0af89618247f4d43f011"],["/tags/设计/index.html","bc3394e7ff9bbfa8fe791d395deb6c8a"],["/tags/面试/index.html","2b404fdec80ea386bd931f1be16ffcde"],["/tags/魔改/index.html","2619bd8ea5e83252032ce3577fcfd3d6"]];
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
