(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{329:function(t,e,r){"use strict";r.r(e);var n=r(7),o=(r(47),r(27),r(59),r(98),r(45),r(331)),h={props:{lag:{type:Number,default:0},hijriMonth:{type:Number,default:1}},data:function(){return{prayerNames:["Fajr","Shuruq","Dhuhr","Asr","Maghrib","Isha"]}},computed:{localDate:function(){return(new Date).toISOString().split("T")[0]},prayerTimes:function(){return o[this.localDate]},maghribDateTime:function(){return(new Date).setHours(parseInt(this.getTimeWithLag(this.prayerTimes[4]).split(":")[0]),parseInt(this.getTimeWithLag(this.prayerTimes[4]).split(":")[1]))},halfHourBeforeMaghrib:function(){return(new Date).setHours(parseInt(this.substractTimes(this.getTimeWithLag(this.prayerTimes[4]),this.secsToTime(1800)).split(":")[0]),parseInt(this.substractTimes(this.getTimeWithLag(this.prayerTimes[4]),this.secsToTime(1800)).split(":")[1]))},halfHourAfterMaghrib:function(){return(new Date).setHours(parseInt(this.addTimes(this.getTimeWithLag(this.prayerTimes[4]),this.secsToTime(1800)).split(":")[0]),parseInt(this.addTimes(this.getTimeWithLag(this.prayerTimes[4]),this.secsToTime(1800)).split(":")[1]))},showIftarDua:function(){return new Date<this.halfHourAfterMaghrib}},watch:{lag:function(t){var e=this;this.$nextTick((function(){e.halfHourBeforeMaghrib<new Date&&new Date<e.maghribDateTime&&e.$refs.countdown.startCountdown("restart")}))}},mounted:function(){},methods:{addTimes:function(t,e){return this.secsToTime(this.timeToSecs(t)+this.timeToSecs(e))},substractTimes:function(t,e){return this.secsToTime(this.timeToSecs(t)-this.timeToSecs(e))},timeToSecs:function(time){var t=/^-/.test(time),e=time.match(/\d+/g),r=Object(n.a)(e,3);return(t?-1:1)*(3600*r[0]+60*(0|r[1])+1*(0|r[2]))},secsToTime:function(t){var e=function(t){return(t<10?"0":"")+t};return(t<0?"-":"")+((t=Math.abs(t))/3600|0)+":"+e(t%3600/60|0)+":"+e(t%60)},getTimeWithLag:function(time){return this.addTimes(this.secsToTime(60*this.lag),time+":00").slice(0,-3)}}},c=r(67),m=r(73),l=r.n(m),T=r(391),f=r(386),component=Object(c.a)(h,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-simple-table",{attrs:{dense:""},scopedSlots:t._u([{key:"default",fn:function(){return[9===t.hijriMonth?r("caption",[r("countdown",{ref:"countdown",attrs:{"start-time":t.halfHourBeforeMaghrib,"end-time":t.maghribDateTime},scopedSlots:t._u([{key:"process",fn:function(e){var n=e.timeObj;return r("v-alert",{staticClass:"mb-0",attrs:{color:"warning",dense:"",text:""}},[t._v("\n          "+t._s(n.m+":"+n.s+" avant l'Iftar")+"\n        ")])}}],null,!1,775352797)},[t._v(" "),t.showIftarDua?r("v-alert",{staticClass:"mb-0",attrs:{slot:"finish",color:"success",dense:"",text:""},slot:"finish"},[t._v("\n          ذَهَبَ الظَّمَأُ وَابْتَلَّتِ الْعُرُوقُ وَثَبَتَ الأَجْرُ إِنْ شَاءَ اللّٰهُ\n        ")]):t._e()],1)],1):t._e(),t._v(" "),r("tbody",t._l(t.prayerNames,(function(e,n){return r("tr",{key:n,class:{"font-weight-bold blue lighten-5":0===n||4===n}},[r("td",[t._v(t._s(e))]),t._v(" "),r("td",[t._v(t._s(t.getTimeWithLag(t.prayerTimes[n])))])])})),0)]},proxy:!0}])})}),[],!1,null,null,null);e.default=component.exports;l()(component,{VAlert:T.a,VSimpleTable:f.a})},331:function(t){t.exports=JSON.parse('{"2021-01-01":["06:44","08:43","12:46","14:32","16:49","18:49"],"2021-01-02":["06:44","08:43","12:47","14:33","16:50","18:50"],"2021-01-03":["06:44","08:43","12:47","14:34","16:52","18:51"],"2021-01-04":["06:44","08:43","12:47","14:35","16:53","18:52"],"2021-01-05":["06:44","08:42","12:48","14:36","16:54","18:53"],"2021-01-06":["06:43","08:42","12:48","14:37","16:55","18:54"],"2021-01-07":["06:43","08:42","12:49","14:38","16:56","18:55"],"2021-01-08":["06:43","08:41","12:49","14:39","16:58","18:56"],"2021-01-09":["06:43","08:41","12:50","14:40","16:59","18:57"],"2021-01-10":["06:43","08:40","12:50","14:41","17:00","18:58"],"2021-01-11":["06:42","08:40","12:50","14:42","17:02","18:59"],"2021-01-12":["06:42","08:39","12:51","14:43","17:03","19:00"],"2021-01-13":["06:41","08:38","12:51","14:45","17:04","19:01"],"2021-01-14":["06:41","08:38","12:52","14:46","17:06","19:03"],"2021-01-15":["06:40","08:37","12:52","14:47","17:07","19:04"],"2021-01-16":["06:40","08:36","12:52","14:48","17:09","19:05"],"2021-01-17":["06:39","08:35","12:53","14:50","17:11","19:07"],"2021-01-18":["06:39","08:34","12:53","14:51","17:12","19:08"],"2021-01-19":["06:38","08:33","12:53","14:52","17:14","19:09"],"2021-01-20":["06:37","08:32","12:54","14:54","17:15","19:10"],"2021-01-21":["06:36","08:31","12:54","14:55","17:17","19:12"],"2021-01-22":["06:36","08:30","12:54","14:56","17:19","19:13"],"2021-01-23":["06:35","08:29","12:54","14:58","17:20","19:15"],"2021-01-24":["06:34","08:28","12:55","14:59","17:22","19:16"],"2021-01-25":["06:33","08:27","12:55","15:00","17:24","19:17"],"2021-01-26":["06:32","08:25","12:55","15:02","17:25","19:19"],"2021-01-27":["06:31","08:24","12:55","15:03","17:27","19:20"],"2021-01-28":["06:30","08:23","12:55","15:05","17:29","19:22"],"2021-01-29":["06:29","08:22","12:56","15:06","17:30","19:23"],"2021-01-30":["06:28","08:20","12:56","15:07","17:32","19:25"],"2021-01-31":["06:27","08:19","12:56","15:09","17:34","19:26"],"2021-02-01":["06:25","08:17","12:56","15:10","17:36","19:28"],"2021-02-02":["06:24","08:16","12:56","15:12","17:37","19:29"],"2021-02-03":["06:23","08:14","12:56","15:13","17:39","19:31"],"2021-02-04":["06:22","08:13","12:56","15:14","17:41","19:32"],"2021-02-05":["06:20","08:11","12:57","15:16","17:43","19:34"],"2021-02-06":["06:19","08:09","12:57","15:17","17:45","19:35"],"2021-02-07":["06:17","08:08","12:57","15:19","17:46","19:37"],"2021-02-08":["06:16","08:06","12:57","15:20","17:48","19:38"],"2021-02-09":["06:14","08:04","12:57","15:21","17:50","19:40"],"2021-02-10":["06:13","08:03","12:57","15:23","17:52","19:42"],"2021-02-11":["06:11","08:01","12:57","15:24","17:53","19:43"],"2021-02-12":["06:10","07:59","12:57","15:26","17:55","19:45"],"2021-02-13":["06:08","07:57","12:57","15:27","17:57","19:46"],"2021-02-14":["06:06","07:55","12:57","15:28","17:59","19:48"],"2021-02-15":["06:05","07:54","12:57","15:30","18:01","19:50"],"2021-02-16":["06:03","07:52","12:57","15:31","18:02","19:51"],"2021-02-17":["06:01","07:50","12:57","15:32","18:04","19:53"],"2021-02-18":["06:00","07:48","12:56","15:34","18:06","19:54"],"2021-02-19":["05:58","07:46","12:56","15:35","18:08","19:56"],"2021-02-20":["05:56","07:44","12:56","15:36","18:09","19:58"],"2021-02-21":["05:54","07:42","12:56","15:38","18:11","19:59"],"2021-02-22":["05:52","07:40","12:56","15:39","18:13","20:01"],"2021-02-23":["05:50","07:38","12:56","15:40","18:15","20:03"],"2021-02-24":["05:48","07:36","12:56","15:42","18:16","20:04"],"2021-02-25":["05:46","07:34","12:56","15:43","18:18","20:06"],"2021-02-26":["05:44","07:32","12:55","15:44","18:20","20:08"],"2021-02-27":["05:42","07:30","12:55","15:45","18:22","20:09"],"2021-02-28":["05:40","07:28","12:55","15:47","18:23","20:11"],"2021-03-01":["05:38","07:26","12:55","15:48","18:25","20:13"],"2021-03-02":["05:36","07:24","12:55","15:49","18:27","20:15"],"2021-03-03":["05:34","07:21","12:55","15:50","18:28","20:16"],"2021-03-04":["05:32","07:19","12:54","15:51","18:30","20:18"],"2021-03-05":["05:30","07:17","12:54","15:53","18:32","20:20"],"2021-03-06":["05:27","07:15","12:54","15:54","18:34","20:22"],"2021-03-07":["05:25","07:13","12:54","15:55","18:35","20:23"],"2021-03-08":["05:23","07:11","12:53","15:56","18:37","20:25"],"2021-03-09":["05:21","07:09","12:53","15:57","18:39","20:27"],"2021-03-10":["05:18","07:06","12:53","15:58","18:40","20:29"],"2021-03-11":["05:16","07:04","12:53","15:59","18:42","20:31"],"2021-03-12":["05:14","07:02","12:52","16:00","18:44","20:32"],"2021-03-13":["05:11","07:00","12:52","16:01","18:45","20:34"],"2021-03-14":["05:09","06:58","12:52","16:03","18:47","20:36"],"2021-03-15":["05:07","06:55","12:52","16:04","18:49","20:38"],"2021-03-16":["05:04","06:53","12:51","16:05","18:50","20:40"],"2021-03-17":["05:02","06:51","12:51","16:06","18:52","20:42"],"2021-03-18":["05:59","07:49","13:51","17:07","19:54","21:44"],"2021-03-19":["05:57","07:46","13:50","17:08","19:55","21:45"],"2021-03-20":["05:54","07:44","13:50","17:09","19:57","21:47"],"2021-03-21":["05:52","07:42","13:50","17:10","19:59","21:49"],"2021-03-22":["05:49","07:40","13:49","17:11","20:00","21:51"],"2021-03-23":["05:47","07:38","13:49","17:12","20:02","21:53"],"2021-03-24":["05:44","07:35","13:49","17:13","20:03","21:55"],"2021-03-25":["05:41","07:33","13:49","17:14","20:05","21:57"],"2021-03-26":["05:39","07:31","13:48","17:14","20:07","21:59"],"2021-03-27":["05:36","07:29","13:48","17:15","20:08","22:01"],"2021-03-28":["05:34","07:26","13:48","17:16","20:10","22:03"],"2021-03-29":["05:31","07:24","13:47","17:17","20:12","22:05"],"2021-03-30":["05:28","07:22","13:47","17:18","20:13","22:08"],"2021-03-31":["05:26","07:20","13:47","17:19","20:15","22:10"],"2021-04-01":["05:23","07:17","13:46","17:20","20:17","22:12"],"2021-04-02":["05:20","07:15","13:46","17:21","20:18","22:14"],"2021-04-03":["05:17","07:13","13:46","17:22","20:20","22:16"],"2021-04-04":["05:15","07:11","13:46","17:22","20:21","22:18"],"2021-04-05":["05:12","07:09","13:45","17:23","20:23","22:21"],"2021-04-06":["05:09","07:06","13:45","17:24","20:25","22:23"],"2021-04-07":["05:06","07:04","13:45","17:25","20:26","22:25"],"2021-04-08":["05:03","07:02","13:44","17:26","20:28","22:27"],"2021-04-09":["05:00","07:00","13:44","17:26","20:30","22:30"],"2021-04-10":["04:58","06:58","13:44","17:27","20:31","22:32"],"2021-04-11":["04:55","06:56","13:44","17:28","20:33","22:35"],"2021-04-12":["04:52","06:53","13:43","17:29","20:34","22:37"],"2021-04-13":["04:49","06:51","13:43","17:30","20:36","22:39"],"2021-04-14":["04:46","06:49","13:43","17:30","20:38","22:42"],"2021-04-15":["04:43","06:47","13:43","17:31","20:39","22:44"],"2021-04-16":["04:40","06:45","13:42","17:32","20:41","22:47"],"2021-04-17":["04:37","06:43","13:42","17:32","20:43","22:49"],"2021-04-18":["04:34","06:41","13:42","17:33","20:44","22:52"],"2021-04-19":["04:31","06:39","13:42","17:34","20:46","22:55"],"2021-04-20":["04:28","06:37","13:42","17:35","20:48","22:57"],"2021-04-21":["04:25","06:35","13:41","17:35","20:49","23:00"],"2021-04-22":["04:22","06:33","13:41","17:36","20:51","23:03"],"2021-04-23":["04:19","06:31","13:41","17:37","20:52","23:05"],"2021-04-24":["04:16","06:29","13:41","17:37","20:54","23:08"],"2021-04-25":["04:12","06:27","13:41","17:38","20:56","23:11"],"2021-04-26":["04:09","06:25","13:40","17:39","20:57","23:14"],"2021-04-27":["04:06","06:23","13:40","17:39","20:59","23:17"],"2021-04-28":["04:03","06:21","13:40","17:40","21:00","23:20"],"2021-04-29":["04:00","06:19","13:40","17:41","21:02","23:23"],"2021-04-30":["03:56","06:17","13:40","17:41","21:04","23:26"],"2021-05-01":["03:53","06:15","13:40","17:42","21:05","23:26"],"2021-05-02":["03:50","06:13","13:40","17:43","21:07","23:26"],"2021-05-03":["03:46","06:11","13:39","17:43","21:08","23:26"],"2021-05-04":["03:43","06:10","13:39","17:44","21:10","23:26"],"2021-05-05":["03:39","06:08","13:39","17:45","21:12","23:26"],"2021-05-06":["03:36","06:06","13:39","17:45","21:13","23:26"],"2021-05-07":["03:32","06:04","13:39","17:46","21:15","23:26"],"2021-05-08":["03:29","06:03","13:39","17:46","21:16","23:26"],"2021-05-09":["03:25","06:01","13:39","17:47","21:18","23:26"],"2021-05-10":["03:24","06:00","13:39","17:48","21:19","23:26"],"2021-05-11":["03:24","05:58","13:39","17:48","21:21","23:26"],"2021-05-12":["03:24","05:56","13:39","17:49","21:22","23:26"],"2021-05-13":["03:24","05:55","13:39","17:49","21:24","23:26"],"2021-05-14":["03:24","05:53","13:39","17:50","21:25","23:26"],"2021-05-15":["03:24","05:52","13:39","17:50","21:27","23:26"],"2021-05-16":["03:24","05:50","13:39","17:51","21:28","23:26"],"2021-05-17":["03:24","05:49","13:39","17:52","21:30","23:26"],"2021-05-18":["03:24","05:48","13:39","17:52","21:31","23:26"],"2021-05-19":["03:24","05:46","13:39","17:53","21:33","23:26"],"2021-05-20":["03:24","05:45","13:39","17:53","21:34","23:26"],"2021-05-21":["03:24","05:44","13:39","17:54","21:35","23:26"],"2021-05-22":["03:24","05:43","13:39","17:54","21:37","23:29"],"2021-05-23":["03:24","05:41","13:39","17:55","21:38","23:30"],"2021-05-24":["03:24","05:40","13:39","17:55","21:39","23:33"],"2021-05-25":["03:24","05:39","13:39","17:56","21:41","23:33"],"2021-05-26":["03:24","05:38","13:40","17:56","21:42","23:36"],"2021-05-27":["03:24","05:37","13:40","17:57","21:43","23:37"],"2021-05-28":["03:24","05:36","13:40","17:57","21:44","23:40"],"2021-05-29":["03:24","05:35","13:40","17:58","21:46","23:41"],"2021-05-30":["03:24","05:34","13:40","17:58","21:47","23:42"],"2021-05-31":["03:23","05:33","13:40","17:59","21:48","23:45"],"2021-06-01":["03:23","05:33","13:40","17:59","21:49","23:47"],"2021-06-02":["03:21","05:32","13:41","18:00","21:50","23:48"],"2021-06-03":["03:20","05:31","13:41","18:00","21:51","23:49"],"2021-06-04":["03:19","05:30","13:41","18:00","21:52","23:51"],"2021-06-05":["03:17","05:30","13:41","18:01","21:53","23:52"],"2021-06-06":["03:16","05:29","13:41","18:01","21:54","23:53"],"2021-06-07":["03:15","05:29","13:41","18:02","21:55","23:55"],"2021-06-08":["03:15","05:28","13:42","18:02","21:55","23:56"],"2021-06-09":["03:14","05:28","13:42","18:02","21:56","23:57"],"2021-06-10":["03:13","05:27","13:42","18:03","21:57","23:59"],"2021-06-11":["03:12","05:27","13:42","18:03","21:58","00:00"],"2021-06-12":["03:10","05:27","13:42","18:03","21:58","00:00"],"2021-06-13":["03:10","05:27","13:43","18:04","21:59","00:02"],"2021-06-14":["03:09","05:26","13:43","18:04","21:59","00:03"],"2021-06-15":["03:09","05:26","13:43","18:04","22:00","00:03"],"2021-06-16":["03:08","05:26","13:43","18:05","22:00","00:03"],"2021-06-17":["03:08","05:26","13:43","18:05","22:01","00:04"],"2021-06-18":["03:08","05:26","13:44","18:05","22:01","00:04"],"2021-06-19":["03:08","05:26","13:44","18:06","22:02","00:06"],"2021-06-20":["03:08","05:27","13:44","18:06","22:02","00:06"],"2021-06-21":["03:08","05:27","13:44","18:06","22:02","00:07"],"2021-06-22":["03:08","05:27","13:45","18:06","22:02","00:07"],"2021-06-23":["03:08","05:27","13:45","18:06","22:02","00:07"],"2021-06-24":["03:09","05:28","13:45","18:07","22:02","00:07"],"2021-06-25":["03:09","05:28","13:45","18:07","22:02","00:07"],"2021-06-26":["03:10","05:28","13:45","18:07","22:02","00:07"],"2021-06-27":["03:10","05:29","13:46","18:07","22:02","00:07"],"2021-06-28":["03:12","05:29","13:46","18:07","22:02","00:07"],"2021-06-29":["03:13","05:30","13:46","18:07","22:02","00:06"],"2021-06-30":["03:13","05:30","13:46","18:07","22:02","00:06"],"2021-07-01":["03:14","05:31","13:46","18:07","22:01","00:04"],"2021-07-02":["03:15","05:32","13:47","18:07","22:01","00:04"],"2021-07-03":["03:15","05:32","13:47","18:07","22:01","00:03"],"2021-07-04":["03:17","05:33","13:47","18:07","22:00","00:03"],"2021-07-05":["03:19","05:34","13:47","18:07","22:00","00:03"],"2021-07-06":["03:20","05:35","13:47","18:07","21:59","00:02"],"2021-07-07":["03:21","05:36","13:48","18:07","21:59","00:00"],"2021-07-08":["03:23","05:37","13:48","18:07","21:58","00:00"],"2021-07-09":["03:23","05:38","13:48","18:07","21:57","23:59"],"2021-07-10":["03:24","05:39","13:48","18:07","21:57","23:57"],"2021-07-11":["03:24","05:40","13:48","18:07","21:56","23:56"],"2021-07-12":["03:24","05:41","13:48","18:06","21:55","23:55"],"2021-07-13":["03:24","05:42","13:48","18:06","21:54","23:53"],"2021-07-14":["03:24","05:43","13:49","18:06","21:53","23:52"],"2021-07-15":["03:24","05:44","13:49","18:06","21:52","23:51"],"2021-07-16":["03:24","05:45","13:49","18:05","21:51","23:49"],"2021-07-17":["03:24","05:46","13:49","18:05","21:50","23:48"],"2021-07-18":["03:24","05:48","13:49","18:05","21:49","23:47"],"2021-07-19":["03:24","05:49","13:49","18:04","21:48","23:45"],"2021-07-20":["03:24","05:50","13:49","18:04","21:47","23:44"],"2021-07-21":["03:24","05:51","13:49","18:04","21:46","23:41"],"2021-07-22":["03:24","05:53","13:49","18:03","21:45","23:40"],"2021-07-23":["03:24","05:54","13:49","18:03","21:43","23:37"],"2021-07-24":["03:24","05:55","13:49","18:02","21:42","23:37"],"2021-07-25":["03:24","05:57","13:49","18:02","21:41","23:34"],"2021-07-26":["03:24","05:58","13:49","18:01","21:39","23:34"],"2021-07-27":["03:24","05:59","13:49","18:01","21:38","23:33"],"2021-07-28":["03:24","06:01","13:49","18:00","21:36","23:33"],"2021-07-29":["03:24","06:02","13:49","18:00","21:35","23:33"],"2021-07-30":["03:24","06:03","13:49","18:00","21:33","23:33"],"2021-07-31":["03:24","06:05","13:49","17:58","21:32","23:33"],"2021-08-01":["03:24","06:07","13:49","17:58","21:30","23:33"],"2021-08-02":["03:27","06:08","13:49","17:57","21:29","23:33"],"2021-08-03":["03:31","06:10","13:49","17:56","21:27","23:33"],"2021-08-04":["03:35","06:11","13:49","17:56","21:25","23:33"],"2021-08-05":["03:38","06:13","13:49","17:55","21:24","23:33"],"2021-08-06":["03:41","06:14","13:48","17:54","21:22","23:33"],"2021-08-07":["03:45","06:16","13:48","17:53","21:20","23:33"],"2021-08-08":["03:48","06:17","13:48","17:52","21:18","23:33"],"2021-08-09":["03:51","06:19","13:48","17:52","21:17","23:33"],"2021-08-10":["03:54","06:20","13:48","17:51","21:15","23:33"],"2021-08-11":["03:57","06:22","13:48","17:50","21:13","23:33"],"2021-08-12":["04:01","06:23","13:48","17:49","21:11","23:32"],"2021-08-13":["04:04","06:25","13:47","17:48","21:09","23:29"],"2021-08-14":["04:06","06:26","13:47","17:47","21:07","23:26"],"2021-08-15":["04:09","06:28","13:47","17:46","21:05","23:22"],"2021-08-16":["04:12","06:29","13:47","17:45","21:03","23:19"],"2021-08-17":["04:15","06:31","13:47","17:44","21:01","23:16"],"2021-08-18":["04:18","06:33","13:46","17:43","20:59","23:13"],"2021-08-19":["04:21","06:34","13:46","17:42","20:57","23:10"],"2021-08-20":["04:23","06:36","13:46","17:41","20:55","23:06"],"2021-08-21":["04:26","06:37","13:46","17:39","20:53","23:03"],"2021-08-22":["04:29","06:39","13:45","17:38","20:51","23:00"],"2021-08-23":["04:31","06:40","13:45","17:37","20:49","22:57"],"2021-08-24":["04:34","06:42","13:45","17:36","20:47","22:54"],"2021-08-25":["04:36","06:43","13:45","17:35","20:45","22:51"],"2021-08-26":["04:39","06:45","13:44","17:33","20:43","22:48"],"2021-08-27":["04:41","06:46","13:44","17:32","20:41","22:45"],"2021-08-28":["04:44","06:48","13:44","17:31","20:39","22:42"],"2021-08-29":["04:46","06:50","13:44","17:30","20:36","22:39"],"2021-08-30":["04:48","06:51","13:43","17:28","20:34","22:36"],"2021-08-31":["04:51","06:53","13:43","17:27","20:32","22:33"],"2021-09-01":["04:53","06:54","13:43","17:26","20:30","22:30"],"2021-09-02":["04:55","06:56","13:42","17:24","20:28","22:27"],"2021-09-03":["04:57","06:57","13:42","17:23","20:26","22:25"],"2021-09-04":["05:00","06:59","13:42","17:22","20:23","22:22"],"2021-09-05":["05:02","07:00","13:41","17:20","20:21","22:19"],"2021-09-06":["05:04","07:02","13:41","17:19","20:19","22:16"],"2021-09-07":["05:06","07:04","13:41","17:17","20:17","22:13"],"2021-09-08":["05:08","07:05","13:40","17:16","20:14","22:10"],"2021-09-09":["05:10","07:07","13:40","17:14","20:12","22:08"],"2021-09-10":["05:13","07:08","13:40","17:13","20:10","22:05"],"2021-09-11":["05:15","07:10","13:39","17:11","20:08","22:02"],"2021-09-12":["05:17","07:11","13:39","17:10","20:05","21:59"],"2021-09-13":["05:19","07:13","13:39","17:08","20:03","21:57"],"2021-09-14":["05:21","07:14","13:38","17:07","20:01","21:54"],"2021-09-15":["05:23","07:16","13:38","17:05","19:59","21:51"],"2021-09-16":["05:25","07:18","13:37","17:04","19:56","21:49"],"2021-09-17":["05:27","07:19","13:37","17:02","19:54","21:46"],"2021-09-18":["05:29","07:21","13:37","17:01","19:52","21:43"],"2021-09-19":["05:30","07:22","13:36","16:59","19:50","21:41"],"2021-09-20":["05:32","07:24","13:36","16:57","19:47","21:38"],"2021-09-21":["05:34","07:25","13:36","16:56","19:45","21:36"],"2021-09-22":["05:36","07:27","13:35","16:54","19:43","21:33"],"2021-09-23":["05:38","07:28","13:35","16:53","19:41","21:31"],"2021-09-24":["05:40","07:30","13:35","16:51","19:38","21:28"],"2021-09-25":["05:42","07:32","13:34","16:49","19:36","21:26"],"2021-09-26":["05:45","07:33","13:34","16:48","19:34","21:23"],"2021-09-27":["05:45","07:35","13:34","16:46","19:32","21:21"],"2021-09-28":["05:47","07:36","13:33","16:44","19:29","21:18"],"2021-09-29":["05:49","07:38","13:33","16:43","19:27","21:16"],"2021-09-30":["05:51","07:39","13:33","16:41","19:25","21:13"],"2021-10-01":["05:52","07:41","13:32","16:40","19:23","21:11"],"2021-10-02":["05:54","07:43","13:32","16:38","19:20","21:09"],"2021-10-03":["05:56","07:44","13:32","16:36","19:18","21:06"],"2021-10-04":["05:57","07:46","13:31","16:35","19:16","21:04"],"2021-10-05":["05:59","07:47","13:31","16:33","19:14","21:02"],"2021-10-06":["06:01","07:49","13:31","16:31","19:12","20:59"],"2021-10-07":["06:03","07:51","13:30","16:30","19:09","20:57"],"2021-10-08":["06:04","07:52","13:30","16:28","19:07","20:55"],"2021-10-09":["06:06","07:54","13:30","16:26","19:05","20:53"],"2021-10-10":["06:08","07:55","13:30","16:25","19:03","20:51"],"2021-10-11":["06:09","07:57","13:29","16:23","19:01","20:48"],"2021-10-12":["06:11","07:59","13:29","16:21","18:59","20:46"],"2021-10-13":["06:12","08:00","13:29","16:20","18:57","20:44"],"2021-10-14":["06:14","08:02","13:29","16:18","18:54","20:42"],"2021-10-15":["06:16","08:04","13:28","16:16","18:52","20:40"],"2021-10-16":["06:17","08:05","13:28","16:15","18:50","20:38"],"2021-10-17":["06:19","08:07","13:28","16:13","18:48","20:36"],"2021-10-18":["06:21","08:09","13:28","16:12","18:46","20:34"],"2021-10-19":["06:22","08:10","13:28","16:10","18:44","20:32"],"2021-10-20":["06:24","08:12","13:27","16:08","18:42","20:30"],"2021-10-21":["06:25","08:14","13:27","16:07","18:40","20:28"],"2021-10-22":["06:27","08:15","13:27","16:05","18:38","20:26"],"2021-10-23":["06:28","08:17","13:27","16:04","18:36","20:24"],"2021-10-24":["06:30","08:19","13:27","16:02","18:34","20:23"],"2021-10-25":["05:32","07:20","12:27","14:01","17:32","19:21"],"2021-10-26":["05:33","07:22","12:27","14:59","17:30","19:19"],"2021-10-27":["05:35","07:24","12:26","14:58","17:28","19:17"],"2021-10-28":["05:36","07:25","12:26","14:56","17:27","19:16"],"2021-10-29":["05:38","07:27","12:26","14:55","17:25","19:14"],"2021-10-30":["05:39","07:29","12:26","14:53","17:23","19:12"],"2021-10-31":["05:41","07:31","12:26","14:52","17:21","19:11"],"2021-11-01":["05:42","07:32","12:26","14:51","17:19","19:09"],"2021-11-02":["05:44","07:34","12:26","14:49","17:18","19:08"],"2021-11-03":["05:45","07:36","12:26","14:48","17:16","19:06"],"2021-11-04":["05:47","07:37","12:26","14:47","17:14","19:05"],"2021-11-05":["05:48","07:39","12:26","14:45","17:13","19:03"],"2021-11-06":["05:50","07:41","12:26","14:44","17:11","19:02"],"2021-11-07":["05:51","07:43","12:26","14:43","17:09","19:00"],"2021-11-08":["05:53","07:44","12:26","14:42","17:08","18:59"],"2021-11-09":["05:54","07:46","12:26","14:40","17:06","18:58"],"2021-11-10":["05:56","07:48","12:26","14:39","17:05","18:57"],"2021-11-11":["05:57","07:49","12:27","14:38","17:03","18:55"],"2021-11-12":["05:59","07:51","12:27","14:37","17:02","18:54"],"2021-11-13":["06:00","07:53","12:27","14:36","17:00","18:53"],"2021-11-14":["06:01","07:54","12:27","14:35","16:59","18:52"],"2021-11-15":["06:03","07:56","12:27","14:34","16:58","18:51"],"2021-11-16":["06:04","07:58","12:27","14:33","16:56","18:50"],"2021-11-17":["06:06","07:59","12:28","14:32","16:55","18:49"],"2021-11-18":["06:07","08:01","12:28","14:31","16:54","18:48"],"2021-11-19":["06:08","08:03","12:28","14:30","16:53","18:47"],"2021-11-20":["06:10","08:04","12:28","14:29","16:52","18:46"],"2021-11-21":["06:11","08:06","12:28","14:29","16:50","18:45"],"2021-11-22":["06:12","08:07","12:29","14:28","16:49","18:45"],"2021-11-23":["06:13","08:09","12:29","14:27","16:48","18:44"],"2021-11-24":["06:15","08:11","12:29","14:26","16:47","18:43"],"2021-11-25":["06:16","08:12","12:30","14:26","16:47","18:43"],"2021-11-26":["06:17","08:14","12:30","14:25","16:46","18:42"],"2021-11-27":["06:18","08:15","12:30","14:24","16:45","18:41"],"2021-11-28":["06:20","08:17","12:30","14:24","16:44","18:41"],"2021-11-29":["06:21","08:18","12:31","14:23","16:43","18:40"],"2021-11-30":["06:22","08:19","12:31","14:23","16:43","18:40"],"2021-12-01":["06:23","08:21","12:32","14:23","16:42","18:40"],"2021-12-02":["06:24","08:22","12:32","14:22","16:41","18:39"],"2021-12-03":["06:25","08:23","12:32","14:22","16:41","18:39"],"2021-12-04":["06:26","08:25","12:33","14:22","16:40","18:39"],"2021-12-05":["06:27","08:26","12:33","14:21","16:40","18:38"],"2021-12-06":["06:29","08:27","12:34","14:21","16:40","18:38"],"2021-12-07":["06:30","08:28","12:34","14:21","16:39","18:38"],"2021-12-08":["06:30","08:29","12:34","14:21","16:39","18:38"],"2021-12-09":["06:31","08:31","12:35","14:21","16:39","18:38"],"2021-12-10":["06:32","08:32","12:35","14:21","16:39","18:38"],"2021-12-11":["06:33","08:33","12:36","14:21","16:39","18:38"],"2021-12-12":["06:34","08:34","12:36","14:21","16:39","18:38"],"2021-12-13":["06:35","08:35","12:37","14:21","16:39","18:38"],"2021-12-14":["06:36","08:35","12:37","14:21","16:39","18:39"],"2021-12-15":["06:36","08:36","12:38","14:22","16:39","18:39"],"2021-12-16":["06:37","08:37","12:38","14:22","16:39","18:39"],"2021-12-17":["06:38","08:38","12:39","14:22","16:39","18:39"],"2021-12-18":["06:39","08:39","12:39","14:22","16:40","18:40"],"2021-12-19":["06:39","08:39","12:40","14:23","16:40","18:40"],"2021-12-20":["06:40","08:40","12:40","14:23","16:40","18:40"],"2021-12-21":["06:40","08:40","12:41","14:24","16:41","18:41"],"2021-12-22":["06:41","08:41","12:41","14:24","16:41","18:41"],"2021-12-23":["06:41","08:41","12:42","14:25","16:42","18:42"],"2021-12-24":["06:42","08:42","12:42","14:25","16:42","18:43"],"2021-12-25":["06:42","08:42","12:43","14:26","16:43","18:43"],"2021-12-26":["06:42","08:42","12:43","14:27","16:44","18:44"],"2021-12-27":["06:43","08:43","12:44","14:27","16:45","18:45"],"2021-12-28":["06:43","08:43","12:44","14:28","16:45","18:45"],"2021-12-29":["06:43","08:43","12:45","14:29","16:46","18:46"],"2021-12-30":["06:43","08:43","12:45","14:30","16:47","18:47"],"2021-12-31":["06:44","08:43","12:46","14:31","16:48","18:48"]}')}}]);