/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","fd005a88d0270a965fcbf6b027db31d8"],["/about/index.html","121cac0ca27f1ab30353bff1c31d7e33"],["/archives/2021/11/index.html","37dfb3a1bca3c57d1ec316bd04f0f447"],["/archives/2021/12/index.html","a7d3e70be60327000fdc0170e46ea5a3"],["/archives/2021/index.html","b8c4508bb4032c6d74991517ed68d6ec"],["/archives/2021/page/2/index.html","5fdaad1a0a3b5f1b1b5f2f4d0ccbaad0"],["/archives/2022/01/index.html","62579e4d1cd0e07fa031eee0de1a9665"],["/archives/2022/01/page/2/index.html","aa8354c8482680f7a9cb34aef86ddfb6"],["/archives/2022/02/index.html","0ef22d4723562e65ae7e9a1cf1358ca4"],["/archives/2022/03/index.html","18a5292eb64212023006d7156cc05c04"],["/archives/2022/04/index.html","7db1ce01bb4af4f73d22c6df75692cfb"],["/archives/2022/04/page/2/index.html","44ced6c6c6aaab2c582a59aa9c90f0f8"],["/archives/2022/04/page/3/index.html","f976d1f03b1d8181b8185beb73993546"],["/archives/2022/05/index.html","6e6794da540cca1094cbae5d9fea9cf7"],["/archives/2022/05/page/2/index.html","3d22246823d5515d383b6066dad82294"],["/archives/2022/index.html","2404fe3ba171e185b836d82a3faafef1"],["/archives/2022/page/2/index.html","afbef5795557b34f82e484fa70b0f140"],["/archives/2022/page/3/index.html","c842a2f442b644acb778bcfb279e9527"],["/archives/2022/page/4/index.html","05ffe59e43c4a97099f8b7e451d4113b"],["/archives/2022/page/5/index.html","68a93210a910309deb5f64778ff06831"],["/archives/2022/page/6/index.html","b2fe797c29bb30b5643bf5c4a5867e07"],["/archives/index.html","0c7a3b2d0b6ef7bcb414949a58a1ee42"],["/archives/page/2/index.html","c30cf6259aca07bf7fdfeab8133284a4"],["/archives/page/3/index.html","b0d55d51d3c0acbab249cd43e45d7b30"],["/archives/page/4/index.html","27d672719608dd622a9d4ee9ac103f42"],["/archives/page/5/index.html","7a9b8c631be8471833a4d79f977f19fd"],["/archives/page/6/index.html","b7bda62103645aad1d8fc8f039807efa"],["/archives/page/7/index.html","de5b8c2a6986ceb2205583ef2d49433e"],["/archives/page/8/index.html","9baa50f59b393354ffec0c3161deadfa"],["/artitalk/index.html","fc789b58efd73392cf05a2157c1dab24"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/atom.xml","75bdb68a97d45b3623b374b2046053ad"],["/bb/index.html","043ab6cb9887b2f4e88399fc7a5cbe01"],["/categories/CSS系列/index.html","125d00f84c9e41ad654629dc7e64f4ef"],["/categories/JS系列/index.html","d1364e448f392cf0f15ac1d6fd0c1dec"],["/categories/JS系列/page/2/index.html","d17245db0f0b3ae9ba43f01804f817c1"],["/categories/Vue系列/index.html","8f08a6dab85c6cf1fcd2a8ab791c4a86"],["/categories/Vue系列/page/2/index.html","1fadf32ed87655388d9877b11c2bfe5f"],["/categories/Webpack系列/index.html","4361e9af8399521f99fa09214fc2073d"],["/categories/index.html","cfbfda8f1fda14d595e2c20ab9e3973b"],["/categories/前端基础/index.html","6422a119897cd3f6e7878842099d4b89"],["/categories/前端基础/page/2/index.html","4ce45738511ae18254392211e735f58d"],["/categories/日常杂谈/index.html","3aa8eec81c77ee1ab808025813f10fc7"],["/categories/浏览器系列/index.html","6633646941bdfc1b497a482b3049f9b9"],["/categories/算法指南/Binary-Tree/index.html","1b2b9ef3913c84fbb0ada82b2229bc82"],["/categories/算法指南/index.html","326946b515fb2f9cabe6faec5df14e0d"],["/categories/算法指南/page/2/index.html","612af38e2d87622691ce00d0e759f065"],["/categories/网络系列/index.html","63b2a24b8d58d9fede9ec53795a93848"],["/categories/面试指南/index.html","655db76f9934fcdb2a35c2bfad26c6f7"],["/categories/魔改系列/index.html","c0ecf22322bf205f798aee1a50a96f68"],["/css/animate.min.css","55009d64191e6f9e712a841773ee6611"],["/css/aplayer.css","ddcbd79780067c3941f243a7bebdd559"],["/css/bgc.css","af61378e9e8a5b159cd5d9e729b88a4f"],["/css/custom.css","ba55f423a7cb6d329a503a799ca66f34"],["/css/index.css","6a0a3befce44551923752d0d5632af10"],["/css/neonlight.css","da78e969661c4d6e9f4c1213eba8b8d6"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/157b9e6bd3841296e9df46651f8bec6-removebg-preview.png","bb308ab2ed4cf5731f1d0d15a7f9030d"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/4444.png","65f700e782700cb3dfd7af0db59ca2ca"],["/img/9050f3deb48f8c54cbb518ec34292df5e1fe7f94.png","c743ccd196007aeb31f107b4b493e6b5"],["/img/React系列/react.png","a0c6e00a32c0c09f7767d22e1174a532"],["/img/React系列/react入门与实践.jpg","bec260ee5125459b10146c1ffc40fa49"],["/img/aaa.jpg","6a5a7844633c5bb81b35b0a914d35547"],["/img/afternew.png","5d5fb374e7d442f980ffc785fecbea25"],["/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["/img/beforenew.png","69f79b27b5abcf1d4b8cf4be3559db39"],["/img/bgc.jpg","1b811783648f9ef2352ada176a7c33cf"],["/img/bgc/1.png","4586c5fa0183b05b7452cb5373c0c60d"],["/img/bgc/2.png","a7c142f1bc2ab6a76e8187c2272cae1e"],["/img/bgc/3.png","087631d84d82550e4292baf6653e0bcf"],["/img/bgc/4.png","7826c94c76e084de3df4cc54055683b2"],["/img/bgc/5.png","3716efdaf9a0d6cdf08576e5239e2e0c"],["/img/bgc/MileStone项目杂谈.jpg","5cf842d5df8a84981ecc60bc446e862a"],["/img/bgc/after.png","9fabcb0ed02d2c28a8dd76a9fb7a5bcf"],["/img/bgc/ajax.jpg","f058544f8a1d9565d0fcbba2beeb77b6"],["/img/bgc/before.png","d42e0836dc7aeb5c6ac3036047d5f1d9"],["/img/bgc/bgc.jpg","d3823f30edf3b54a4dda8968c050d9fb"],["/img/bgc/code2.jpg","f6ef52f88effeb006200656835768019"],["/img/bgc/css.png","6500e8c6985e7e7cff88d28d7f557aa4"],["/img/bgc/cyberpunk.jpg","72b2ed74a64f89915c5504a7905456b8"],["/img/bgc/default.jpg","d47700fa220cbda3101d7d51137c3338"],["/img/bgc/echarts.jpg","ca9cff91ec072fde7477863a1861406a"],["/img/bgc/even.jpg","d29e7de6f6eec69bfe754aa9838785cf"],["/img/bgc/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/bgc/gio.png","9c5e50718601d3774f3b33d09af388f8"],["/img/bgc/html.jpg","f77f736241eae0e090eb336a50918a74"],["/img/bgc/index.jpg","b8c3debd17dc84991778826d8bcddf40"],["/img/bgc/javaweb.png","90e836a17db8d912128bb829760dd4bf"],["/img/bgc/jojologo-removebg-preview.png","30822d43dc3df2211c9ee69e17000feb"],["/img/bgc/jojologo.jpg","068874ae20beffb79fedacb43cc85fd9"],["/img/bgc/jojologo3.jpg","9bdc7f6dde78a90a8925aba6bfe4199e"],["/img/bgc/jolin.png","90bd8c8e1b3773ba73bd0558a2f287c7"],["/img/bgc/jolinlogo.png","97a9083e5a819fef92c7c35fd009d2e6"],["/img/bgc/jquery.jpg","558f23b412317052dec339ffa779abed"],["/img/bgc/jquery.png","4b5c2de1fa3c9e03af2ca364c1c04d12"],["/img/bgc/landingpage.jpg","ab88217fb76d9e40c573c2fc3cf24a45"],["/img/bgc/logo2.png","98c8dec7017d4bfb2640834b4182dd32"],["/img/bgc/meiriyimian.jpg","541d97c206eb47370fbe664fc13d59bb"],["/img/bgc/milestone.jpg","8f43613c730f4d2c970819c39ff54b29"],["/img/bgc/ms1.jpg","00c7088badb76fbef0bed92e9ddb4626"],["/img/bgc/neonlight.jpg","aa5ba11e9a7abf5622486e1c2aec0710"],["/img/bgc/neonlight1.jpg","3566a1e4cd2c598aa06723541ad98c32"],["/img/bgc/neonlight8.jpg","d29e7de6f6eec69bfe754aa9838785cf"],["/img/bgc/nodejs.jpg","b190f2f48b3fab7557ba2d631154e1fd"],["/img/bgc/odd.png","022ef01c84264cabd9b65bdf1310e363"],["/img/bgc/onepiece.jpg","63441a8c9e6a4a4e550dcfd404530b4f"],["/img/bgc/op2.png","9d5104b349c6158cfa6dfa538ac9c9a2"],["/img/bgc/picgo.jpg","7db7ea9485a1c89e88fc64dfa740fc65"],["/img/bgc/rgb.jpg","c005c879eda29330c0585adac2bd9596"],["/img/bgc/shuzuquchong.jpg","fbf2db16cd99b76ab50b01b6fc64be60"],["/img/bgc/sjk.jpg","8b2ded959ee7d10ff589a4a81a71863a"],["/img/bgc/standard.jpg","058bcd3e8ac10ab50b0b7bf89c9f4e9a"],["/img/bgc/ubuntu.jpg","e2d49e81d44b8f301fc19c9e01c36393"],["/img/bgc/vue.jpg","ebd691a3825d42e739ab1cf368a85cb9"],["/img/bgc/wallhaven-1kyv8g.jpg","378a6e569aca24abec148d5f1e682e67"],["/img/bgc/wallhaven-2kvmgx.jpg","e1daba962018ac96e469af51bbfa3c00"],["/img/bgc/wallhaven-39wq39.jpg","8d580decfec38587f2c4686104b6b79b"],["/img/bgc/wallhaven-3zwpz3.jpg","1339aac62b3107e83e99b9e29a1f6aa6"],["/img/bgc/wallhaven-4lzgkq.jpg","107a0a3e6a7ae4150b4c3ca6f9739617"],["/img/bgc/wallhaven-76m9z9.jpg","7e7928239f7251ec6f594dca854239b6"],["/img/bgc/wallhaven-83rdp2.jpg","99e2d160c974671cd86e06aba9f58bff"],["/img/bgc/wallhaven-962ogx.jpg","1d0757ba5b17159318d0b5ac3f5fede0"],["/img/bgc/wallhaven-e7vop8.jpg","f6296b43308523d3ed3a7bdb9f331310"],["/img/bgc/wallhaven-p8d93e.jpg","27b85425c9bfdc3ede5101c3c54acec7"],["/img/bgc/wallhaven-xl15ml.png","c45cb99d0b00810f907bfb9a449019a9"],["/img/bgc/wallhaven-xlpx3z.jpg","af9114f7b84f0fe62e46c59e5587f678"],["/img/bgc/wallhaven-ymly3x.jpg","d72691420acd959ea9f506ae7e0afb14"],["/img/bgc/wallhaven-ymqq3k.jpg","8fb484f0e6d3f4091502234af96b79ea"],["/img/bgc/wallhaven-z8jk1g.png","a21c5ece7546f999cde38800d60b4284"],["/img/bgc/wallhaven-z8xqqo.jpg","171c931cf04af4fb5ddadf142ec379d1"],["/img/bgc/wallhaven-zm32go.jpg","8393ec224ca82aa2ad571a350885b361"],["/img/bgc/whitejotailang.png","3d61863dc9eb0847385a5e7052d117b0"],["/img/bgc/xinfengjotaro.png","a82cf6d179ebe79e4d776f9717765d77"],["/img/bgc/牛客网刷题record.jpg","4925e7cdba5881aab3cfa850d6d748dd"],["/img/css系列/css.jpg","d72691420acd959ea9f506ae7e0afb14"],["/img/css系列/flex布局.jpg","7a1e7eb07b07bd5cf287cfddd0e7d6bf"],["/img/css系列/landingpage落地页.jpg","a1ca74704f2181af8e9660952b7f208c"],["/img/empire.png","f93146076c2cd52c440843a1d473bffd"],["/img/favicon.png","9a3f70c3d35fa52f4c506aca79ad3ecc"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/head/boji.jpg","2f4a0ec31d68cbba1a4dd8feb79e62b1"],["/img/head/jojo.png","cdb4b455a1328b2293446e226fe8472d"],["/img/head/jotaro.jpg","38c37b3c624e637b366bb387e9bce0f5"],["/img/head/jotarofire.png","b54c5a3f45fb40f17d8ad2ebebc4cc82"],["/img/head/waku.png","1255a7b487f395761db866cb3b0ad25c"],["/img/head/waku22.png","6fe83c965b61147dd9282f502a1a35d0"],["/img/head/waku3.png","af308bb019a5b87ac6211ee5eaae5331"],["/img/joji.png","1b5797a3744888577f385739acce641d"],["/img/jojiimg.png","3991e6710f446a26c3640e04be9ba851"],["/img/joker.png","34cc2d991e42c8ff6bcaa94c4aeb997b"],["/img/js系列/js.jpg","c005c879eda29330c0585adac2bd9596"],["/img/js系列/jwt实战教程.jpg","248f66ceeb2f003658b44d276817cbd2"],["/img/js系列/从0到1TypeScript.jpg","9e7373e5b6c4b4be1c787904fe541e65"],["/img/js系列/代码之美JS篇.jpg","fdd5af0037797000d45ea8dac2bffaa8"],["/img/js系列/你所不知道的JavaScript①--数据类型及周边.jpg","4d8ee06e0dc984a8f351a621ae2aea20"],["/img/js系列/你所不知道的JavaScript②--this及周边.jpg","e2790de1ce93ce5893472897c9a3b473"],["/img/js系列/你所不知道的JavaScript③--原型及周边.jpg","eafcd233982048eba211a6a79f01b644"],["/img/js系列/你所不知道的JavaScript④--异步任务与事件.jpg","2e904af9ff7f84df1fe9ff92dbfb53ce"],["/img/js系列/你所不知道的JavaScript⑤--垃圾回收与内存泄漏.jpg","4e49c961c784ae73b478e077d20dd011"],["/img/js系列/你所不知道的JavaScript⑥--面向对象与模块化.jpg","9ed9b5f248f731f0c4a548537af7b9e4"],["/img/js系列/你所不知道的JavaScript总集篇.jpg","08030c6cd5637b003ecbf6433d7347d6"],["/img/js系列/快速上手Mongoose.jpg","a2e005dd2c3350d808d38022314f1081"],["/img/killerqueen.gif","9f182907f87f5cbfbc03ee8e5504cc3b"],["/img/sjk.jpg","360f2a555d5e53805e1aae70c9583152"],["/img/standCharts.png","842236aac7ef690d5960784795424544"],["/img/standCharts2.png","48a7b669a21511b076116aba376342ca"],["/img/vue系列/MileStone项目杂谈.jpg","aacd762c2899625ad308ff6f088af10f"],["/img/vue系列/Pinia大菠萝入门与实践.jpg","c03df6c2d7df04bcfd22a58186505892"],["/img/vue系列/Vuejs灵魂之问.jpg","880c47119778e9066b34583a2d06d9c9"],["/img/vue系列/Vue打包优化+可视化js体积.jpg","cabbb875df6e2c16ec54f71bf21b2763"],["/img/vue系列/Vue核心.jpg","7638a76373417712a7cb52ebfa770e65"],["/img/vue系列/Vue组件化编程+Vuex.jpg","624e5fcca5f0d118afb66f65c7089b31"],["/img/vue系列/Vue静态资源.jpg","e39835506d1b002e19b61ec0cb4f576b"],["/img/vue系列/footok项目杂谈.jpg","80585b7fb1146615250a40e54e8a4c7b"],["/img/vue系列/vue-router.jpg","544078211c524c5018eef2da39517c6e"],["/img/vue系列/vue.jpg","63441a8c9e6a4a4e550dcfd404530b4f"],["/img/vue系列/vue3.jpg","46cadf17d61e9199c742ff202410df38"],["/img/vue系列/深入浅出vuejs.jpg","a7d10a483af63bec8024d1d9c5b77d6b"],["/img/wallhaven-x8jl83.jpg","0141db506a6b4556789c4bb700132de4"],["/img/webpack系列/webpack.png","e538823bb9c2c1a8750efd9bf634a6b2"],["/img/webpack系列/webpack5实战指南.jpg","e12f3b47eab622e39c067d3e57240ee9"],["/img/下载.png","8c081ca3fdd80d66d0ec62c12d242c0c"],["/img/吉良吉影.jpg","68cb01b6f0e01ba60a163ff7af0d12f7"],["/img/图层 1.png","d0d35e3b8b3e53ec54452a4d80f2563e"],["/img/基础系列/ajax.jpg","a078df41d2eb99cd8cfa1c5bbd278c9f"],["/img/基础系列/css.jpg","e9201166d1c5ed23dd40886cd5a05122"],["/img/基础系列/echarts.jpg","c6b72698453178260ec732ed447fac12"],["/img/基础系列/html.jpg","e8a2d084ec809ba3ae96bf0310c3f356"],["/img/基础系列/javaweb基础.jpg","b5ee06a3bfadd453f89a1f92fc5ec7f4"],["/img/基础系列/js基础.jpg","688fb7bce2a030dc5949f6475f0ec175"],["/img/基础系列/linux入门.jpg","30c4bed5581c132f716e17d64b2ab994"],["/img/基础系列/mysql入门.jpg","3d0cbf14bbf50a10cfa8330d3c91d70d"],["/img/基础系列/nodejs基础.jpg","ba81f3fb38d97af0187fef3b1c959fdd"],["/img/基础系列/基础.jpg","7184f74a27f009f7510de06e2db5e9ce"],["/img/基础系列/浅谈ES6-11.jpg","c59cade5923eae9171f6bf01d8b35b07"],["/img/基础系列/浅谈Jquery.jpg","3dfd620955e9f6ec7f460b99d36e86e2"],["/img/日常系列/搬砖日记.jpg","90d1869276b09e4e0e89cf224ce76d4a"],["/img/日常系列/日常.jpg","43264ebdd62da3df884798f946caeb85"],["/img/日常系列/春招落幕暑期已至.jpg","4213c07b9669dd7eed38a017b0eebc2a"],["/img/日常系列/秋招面试杂谈.jpg","33d1eebbd64a7c87498910a657c16635"],["/img/浏览器系列/浏览器.jpg","03cc69a4f46cb1e709c024790a537979"],["/img/浏览器系列/浏览器性能指标.jpg","383402c1659f21ae13c22000c873f926"],["/img/算法系列/Algorithm算法日记.jpg","8913419fc8671d8f9b4d3b3692a7fd70"],["/img/算法系列/bt0.jpg","179614e9705b1211928000a8fabbfcce"],["/img/算法系列/bt1.jpg","f479a640ec104961ac0ebc9dc995a509"],["/img/算法系列/bt2.jpg","fc07e3506c528ff349c7ef12d73c7a00"],["/img/算法系列/bt3.jpg","dfdcf6eaf7aab1047a7fff36943659c7"],["/img/算法系列/bt4.jpg","d631c371760556dacc7e93eadde329be"],["/img/算法系列/bt5.jpg","69dc9a386c7911f5589c75e537173979"],["/img/算法系列/bt6.jpg","1251332bf989e821e5ad778cf5513d50"],["/img/算法系列/bt7.jpg","c3728b543d0498fe9054cddf2e2a4f5e"],["/img/算法系列/bt8.jpg","2b53e5a4db580ead0932c95e7ed3bcab"],["/img/算法系列/算法.jpg","17c02198ce326525e64cfb83315cf700"],["/img/算法系列/融会贯通八大排序.jpg","72ab1c987d51c5effb2e514a1b089524"],["/img/网络系列/CDN内容分发网络.jpg","9fab3a20652f9cb160ed9491102e1ab9"],["/img/网络系列/CSRF跨站点请求伪造.jpg","985f2d1ebad297b1d3ae4f66c3fdbc80"],["/img/网络系列/DNS域名系统.jpg","04a7db8f68daa9c545fd91f52e6fe589"],["/img/网络系列/HTTP灵魂之问.jpg","16d2885008efaaac3afbe09f0311f2d5"],["/img/网络系列/XSS跨站脚本攻击.jpg","4d361901c4c585c5859d84cb62388311"],["/img/网络系列/landingpage落地页.jpg","46548b66920a4f478aeb4c8e4d928151"],["/img/网络系列/tcp粘包拆包.jpg","aa39ebb8791e5391bdd4871b40778c38"],["/img/网络系列/浅谈TCP_UDP.jpg","18d7da90125db2a1590387ea90536726"],["/img/网络系列/网络.jpg","e28b5bb63656ff956631f68e498a9a24"],["/img/面试系列/三道题入门async和await.jpg","79102c0a4eae6a9fafcf3620df8da962"],["/img/面试系列/八种方法掌握数组去重.jpg","d9b7a3d7d0dcd5ebaf2199b63cef3a43"],["/img/面试系列/前端登陆指南.jpg","bf8d0e64e166a3bb94c83b7a2810c6dd"],["/img/面试系列/手撕万物js篇.jpg","e98065be31e11fbf9f561079a44f21af"],["/img/面试系列/每日一面快乐无限.jpg","42a8d301ba1878c0eef11e5a9eda25f8"],["/img/面试系列/牛客网刷题record.jpg","b03550166db26459d06fba580b0f2626"],["/img/面试系列/计算机网络不完全指南.jpg","e384ec0fefe86454751f60484ffb5519"],["/img/面试系列/面试.jpg","95f4692dc4396aef2d73a47adfa5e38d"],["/img/魔改系列/Animation主页动画处理.jpg","38d22d51f19863165dc407f561f89518"],["/img/魔改系列/Aplayer设置与优化.jpg","99a8b8bdec684008090e86e51fc6c2a4"],["/img/魔改系列/Butterfly魔改合集.jpg","032ec1df7721d17186c121e24d9fd144"],["/img/魔改系列/Cyberpunk配色魔改.jpg","893dab33728496e1a28a18809c140d56"],["/img/魔改系列/Hexo搭建+Github.jpg","fc82a58d7e5960691ac5942268336ad6"],["/img/魔改系列/JOJO石之海信封魔改.jpg","35ac13b125e056130c58d31b30ec2a91"],["/img/魔改系列/PicoGo图床.jpg","90aa107dbd8b01282bc2f7af5ce09092"],["/img/魔改系列/RGB头像魔改.jpg","559d97f8d7c85dc413beec4257c90d37"],["/img/魔改系列/替身面板生成器.jpg","1d6974d09a5bc3b55aee26647c6436ad"],["/img/魔改系列/魔改.jpg","0b1b2ff5b44a7c7fd487aaee3ec96095"],["/index.html","424ea6a78f516fe70f7d4250367a4584"],["/js/addele.js","94536e349616a11f5cd6008913459d6c"],["/js/addnodestory.js","d5cddd7fe34e38e0782ff0fa2e477e2c"],["/js/collection.js","3c008c6c91d7adbdc49c77a67c9fa008"],["/js/eve.js","cbadadeff4a46fe1ce17d953908df467"],["/js/fadeIn.js","f4ddb49cb2efe27b756f423aec60a279"],["/js/jljy.js","f3d21b134ccc9d0dfdbd610a4ca93d66"],["/js/main.js","240e062def7897dd4c03a12bf07fdc65"],["/js/pwanewdir.js","08ac73a973855be130adaf469df1de8c"],["/js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["/js/search/local-search.js","33b3c0e197c029d5b198059220bbd5ab"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","12cef07c2e9bc8841a5380df4fd342f5"],["/js/wow.min.js","4b253cabaafa86647183695c4c4365e7"],["/lib/Meting.min.js","7b5e05378aa5c4dbdccbe9a34cf30adb"],["/link/index.html","4cd40a13c792e360ef9bb0d0b2048a39"],["/live2d-widget/README.html","3d7233f7971913d0ec0f363a14a11cc3"],["/live2d-widget/assets/screenshot-1.png","30b70e6cd9be9812adcb347536f0da85"],["/live2d-widget/assets/screenshot-2.png","1295844e29a6d6dc3a4aa0db8faa7da7"],["/live2d-widget/assets/screenshot-3.png","4aa1995daf77bc19803648fe6a65c33e"],["/live2d-widget/autoload.js","6d9b31af84be07871c628328d4162048"],["/live2d-widget/demo/demo.html","ddabed04896079696623255ca934c5de"],["/live2d-widget/demo/login.html","69b5f251f312135cbb5dd1b9ff59b7d8"],["/live2d-widget/live2d.min.js","ee7efff8ff5d1d4bd4a0ff99affd3ec7"],["/live2d-widget/waifu-tips.js","e01c75f70a9465389471f638b1356bf8"],["/live2d-widget/waifu.css","0a4a7474046ce58dde9d78670e7514c4"],["/messageboard/index.html","608baec86177bf77cea00b5b8c8f946a"],["/page/2/index.html","399698ccf2162de493e3f2a198c0cfbd"],["/page/3/index.html","56d0327429427f1026c8460ebf74f3f5"],["/page/4/index.html","ed19aa7c3bd08c965d37f665f9c4bbff"],["/page/5/index.html","64c664591de908e22f22042d1885bf85"],["/page/6/index.html","71387741b64a9c7399f30a5406cd1da8"],["/page/7/index.html","f0714dcef38b0b9d772512141497664e"],["/page/8/index.html","304a3d9ff202d753972c835d6f46943b"],["/posts/101229148/index.html","bf68a1bc0d589f88520e3e9251b964b2"],["/posts/1034828441/index.html","41633ae90763a4c81f7aa60aaf2ba0c3"],["/posts/1041482613/index.html","c16139e29f7f1f4fc9d405181434883f"],["/posts/1060178397/index.html","f90bef8b62e580a54cdd84402ae705c9"],["/posts/1131280526/index.html","b422548e4621bf92c020063a88b30924"],["/posts/1144587061/index.html","dddb91717f9820d0feac8f1a7709c977"],["/posts/1161612098/index.html","4181819e7033cd7ad370c1565b8b1479"],["/posts/1168983266/index.html","68c98c0954e29518109e446d5bee2ee5"],["/posts/1222301607/index.html","a296396e70406a4c51730a2797926a7e"],["/posts/1276934816/index.html","3df53202d73e5a5f3322a767066d77ba"],["/posts/1282894956/index.html","ba074becf4f6ac6d977b83b7b46a0181"],["/posts/1284303576/index.html","6732fb44e2aa97faf4f0c0dca1432eae"],["/posts/1295992950/index.html","60e7f6239ff2636ee7d07bef48164d83"],["/posts/1323151960/index.html","08e40c0ad38b7050aba3bd23997ee317"],["/posts/1333180961/index.html","4a8839ede04279510e50224819541c89"],["/posts/1378896606/index.html","752a53993304ad9c2e1fe7673e4c4f17"],["/posts/1410341477/index.html","a2b52c81fcae60d14f73085f93b08401"],["/posts/1410341478/index.html","b1462d9cfbc4b9df8c54a523007aa01c"],["/posts/1513600459/index.html","c36e553a50dd48a6ee362f31deb6ae91"],["/posts/1652193583/index.html","8ce7300e01e6f435cb59f47ebb4f665b"],["/posts/1703341700/index.html","974869510039a61187041bdc77dada95"],["/posts/172401470/index.html","62799be1e4d74f12b2d508b16330f426"],["/posts/1805418661/index.html","33c3136cdccb019196f58b37d35b848d"],["/posts/1936792829/index.html","afd593c659c26b2b76c598db5877b65a"],["/posts/200511804/index.html","1b6b16afb7d9d72b856aae1997d031fa"],["/posts/2062480448/index.html","102b1a587067816ae34289370c84a3b7"],["/posts/2090815300/index.html","0412b51e18c402041f289b7c8049e592"],["/posts/2161165336/index.html","4f94823a0955e13d51c85c4c67a0d85a"],["/posts/2402725415/index.html","de8979d7296927dd2e31efc025226dc0"],["/posts/2435599292/index.html","95f60afeec6a63cbc780ac6eb61a8148"],["/posts/2458362678/index.html","7de6033f966fcb40681b441b40620b87"],["/posts/2475189015/index.html","b2696f96d2b647e23aed2c683a9d402e"],["/posts/252205597/index.html","491a5b361f8ecbc8dcb4ef35f5fd7072"],["/posts/2582393250/index.html","c414c4ceb1a9962cb51f91a7a1f1824a"],["/posts/2593223670/index.html","caed84ca6b7b292bebffa1443b8d44ab"],["/posts/2732070170/index.html","3251336a2c1766649b494508ddf378b6"],["/posts/2881010164/index.html","f4e037340750fe740ce77f2cae6e3655"],["/posts/2906490375/index.html","15feff70c5f8e227419572fd988895f8"],["/posts/2961638573/index.html","c7f8679a07c32b7819bd1e37aaf5c8c0"],["/posts/2992649876/index.html","29b167d6781a3876d69107fe8613bd4d"],["/posts/3074605191/index.html","0f2fc7926aa05d3365093b4b7961fdcd"],["/posts/308272463/index.html","8ccc1d9bf461c3216c28454c1bc1e691"],["/posts/3090245434/index.html","25ed27aadeab3448b2ee11a3122f35ee"],["/posts/3106196216/index.html","6eaba887f632a16fbffafcc40bd0c280"],["/posts/3250811507/index.html","54e82a506e4a19b0ac183ca639c15516"],["/posts/3318597918/index.html","7254229fae08e65b69229d284d2ec4cb"],["/posts/3350941666/index.html","1897c753c1d97b7902c5cb4befeeabca"],["/posts/3355969119/index.html","2fa88bb247224e4acf822c76f39b326e"],["/posts/3383846748/index.html","02d321c186c765258a8a7bc98249af1c"],["/posts/3440987103/index.html","6358fdad01c2d5d0bace53b88da8a8c1"],["/posts/347129926/index.html","7194575af462e2876c47aa18419a5ce1"],["/posts/3500150157/index.html","831491dd6e8ba354a77e80d2eb0978ba"],["/posts/3583084017/index.html","a4331ddb2a542bea706a77a2d39bf9cd"],["/posts/3679159268/index.html","e1f7dc1a1c240d54a31c2874f948a78f"],["/posts/3689993699/index.html","e79c7ad482d08d42c77243ca100b13f6"],["/posts/3693633031/index.html","9a1f79f845f0379957d5461fb6404148"],["/posts/369987328/index.html","2a7df36c9b3a65ff53622f00993b523c"],["/posts/3737568820/index.html","2eae4bc81161777b1d61f0d74d1154cb"],["/posts/3906343608/index.html","cc65749c32a08ab9e53c8a659e328788"],["/posts/3924507216/index.html","f8ef86abf38bd25f7bf82fa27ca3392f"],["/posts/3931945421/index.html","8b3a04f336c39c0cc73f0d77213ad88b"],["/posts/394596529/index.html","bfd0db7acec79af3ecd729e3db3b7d9d"],["/posts/4033900294/index.html","092d511db680e94228b591e1d20b465d"],["/posts/4154491119/index.html","50a55125de1a0ae39a564b831b3aeb37"],["/posts/453733915/index.html","639f2b7f65590b9959d910879135611d"],["/posts/678017232/index.html","d23b5fc007328e853f9d8546e641cbaf"],["/posts/686027467/index.html","ca65310dc18b68704449cdb131cfaefc"],["/posts/719712725/index.html","4cc9058b3bfc0096f31f3abdbca12b27"],["/posts/732690854/index.html","60e3f3260be419f37db1e171c521a0fe"],["/posts/811989321/index.html","d81b85440bb75f358d2b280fd600eab1"],["/posts/849555402/index.html","650b1a4551d24c2158fc65c25c72c007"],["/posts/961371178/index.html","6f49da3200b25f2222f70db19ac7bc3c"],["/posts/972193328/index.html","a00f3f4dcc7a7eaf785a8f73b3ea0c69"],["/posts/977460013/index.html","c0a2000044ddd6c92d41ff5051892ccb"],["/search.xml","59ca002b58d9762a197d027cb5e46d7d"],["/sitemap.xml","2fc41ee296508a67753c8b016cdb4d4d"],["/sw-register.js","f677157dd4d5833d116f543d030cf0f3"],["/tags/Ajax/index.html","97b73fb831d47b433cfc48f666ec483f"],["/tags/Echarts/index.html","f399f674e8d85ce8ac9eecfd2d750561"],["/tags/GitHub/index.html","b8c01c8fb437d4bb584c4536f9cc6947"],["/tags/HTML/index.html","77fa3e41052e86f4660adf9e3e92beb6"],["/tags/Jquery/index.html","b7311634e0a52152c4810b1e8ee9cecc"],["/tags/Linux/index.html","fc09b5c8786151a0e294e004e8f75a2b"],["/tags/Vue/index.html","261da7295bfb74d6da1c79687c326274"],["/tags/Vue/page/2/index.html","e8469f00f700577a0e9f707933ab22b3"],["/tags/Webpack/index.html","1e4eeb6ec3a1b6424ada38b3b194d416"],["/tags/css/index.html","7dd620d73181ed13942011e0cd80f3de"],["/tags/es6/index.html","a80232e6c55e68aa6026067aba036a32"],["/tags/hexo/index.html","675ec64f56ecdf2fdb9655221363a1c2"],["/tags/http/index.html","7745cdb1b1b0ab3d7a2dd59a582908e8"],["/tags/index.html","26495bea76299f18274c83b6b80fcb78"],["/tags/javaweb/index.html","bc0a4f0897dfde64c1201bd814eafc38"],["/tags/js/index.html","1901eb9a20929f3d5c7624912f2b4649"],["/tags/mongodb/index.html","ce1c1c1bd86757c368dcae8ebe4767fe"],["/tags/mysql/index.html","a906b7366833b4b09f670c129ab98efb"],["/tags/nodejs/index.html","f8f3b3383ef6d7967cac8dc29ef910e4"],["/tags/nosql/index.html","58a386e822cb586b406e5d377a501b1e"],["/tags/ts/index.html","2ed6374cce7551c32d2f0e6ea094984b"],["/tags/前端/index.html","759e6fbe8cdef0d6d019affe5b0ab560"],["/tags/前端/page/2/index.html","4582d75176664defc0a35d917798700c"],["/tags/前端/page/3/index.html","69c2b756bd72894d5b3835ef626bb255"],["/tags/工具/index.html","6de99d5a39e755af93e3f2c4668ea632"],["/tags/日常/index.html","dfa4690f7fd428403bb71533c359cd55"],["/tags/浏览器/index.html","f5e6cdebe73fe3b92194c73d6a334d98"],["/tags/算法/index.html","1cd9bd01fbb39e3b0ab58bff07e60aeb"],["/tags/网络/index.html","6e06e838abc202d2660a02b835186ec6"],["/tags/网络安全/index.html","6b4f834a6dd30197596c2dc6cc3e4c74"],["/tags/计算机网络/index.html","3be165c3ad976ff071395a8b048022d2"],["/tags/设计/index.html","611e8c1e0da443b8d6e16b00a3bc050b"],["/tags/面试/index.html","9fb150e4bf4944bcd67934f68fb59376"],["/tags/魔改/index.html","f94db754d99fe96ef2818e87bf73a4b8"]];
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
