google.maps.__gjsload__('stats', function(_){'use strict';var BZ=function(a,b,c){var d=[];_.Gc(a,function(a,c){d.push(c+b+a)});return d.join(c)},CZ=function(a,b,c,d){var e={};e.host=window.document.location&&window.document.location.host||window.location.host;e.v=a;e.r=Math.round(1/b);c&&(e.client=c);d&&(e.key=d);return e},DZ=function(a){var b={};_.Gc(a,function(a,d){b[(0,window.encodeURIComponent)(d)]=(0,window.encodeURIComponent)(a).replace(/%7C/g,"|")});return BZ(b,":",",")},FZ=function(a,b,c,d){var e;e=_.M(_.Q,23,500);var f;f=_.M(_.Q,22,
2);this.C=a;this.F=b;this.G=e;this.l=f;this.B=c;this.m=d;this.f=new _.Fj;this.b=0;this.j=_.Ka();EZ(this)},EZ=function(a){window.setTimeout(function(){GZ(a);EZ(a)},Math.min(a.G*Math.pow(a.l,a.b),2147483647))},HZ=function(a,b,c){a.f.set(b,c)},GZ=function(a){var b=CZ(a.F,a.B,a.m,void 0);b.t=a.b+"-"+(_.Ka()-a.j);a.f.forEach(function(a,d){a=a();0<a&&(b[d]=Number(a.toFixed(2))+(_.fm()?"-if":""))});a.C.b({ev:"api_snap"},b);++a.b},IZ=function(a,b,c,d,e){this.m=a;this.C=b;this.l=c;this.f=d;this.j=e;this.b=
new _.Fj;this.B=_.Ka()},JZ=function(a,b,c){this.l=b;this.f=a+"/maps/gen_204";this.j=c},KZ=function(){this.b=new _.Fj},LZ=function(a){var b=0,c=0;a.b.forEach(function(a){b+=a.zp;c+=a.Wo});return c?b/c:0},MZ=function(a,b,c,d,e){this.B=a;this.C=b;this.m=c;this.j=d;this.l=e;this.f={};this.b=[]},NZ=function(a,b,c,d){this.j=a;_.z.bind(this.j,"set_at",this,this.l);_.z.bind(this.j,"insert_at",this,this.l);this.B=b;this.C=c;this.m=d;this.f=0;this.b={};this.l()},OZ=function(){this.j=_.N(_.Q,6);this.b=new JZ(_.Nf[35]?
_.N(_.nf(_.Q),11):_.Mv,_.Qi,window.document);new NZ(_.Ci,(0,_.p)(this.b.b,this.b),_.Zf,!!this.j);var a=_.N(new _.gf(_.Q.data[3]),1);this.C=a.split(".")[1]||a;this.F={};this.B={};this.m={};this.G={};this.I=_.M(_.Q,0,1);_.Pi&&(this.l=new FZ(this.b,this.C,this.I,this.j))};
IZ.prototype.F=function(a){var b=void 0,b=_.m(b)?b:1;this.b.isEmpty()&&window.setTimeout((0,_.p)(function(){var a=CZ(this.C,this.l,this.f,this.j);a.t=_.Ka()-this.B;var b=this.b;_.Gj(b);for(var e={},f=0;f<b.b.length;f++){var g=b.b[f];e[g]=b.H[g]}_.Ky(a,e);this.b.clear();this.m.b({ev:"api_maprft"},a)},this),500);b=this.b.get(a,0)+b;this.b.set(a,b)};
JZ.prototype.b=function(a,b){b=b||{};var c=_.vk().toString(36);b.src="apiv3";b.token=this.l;b.ts=c.substr(c.length-6);a.cad=DZ(b);a=BZ(a,"=","&");a=this.f+"?target=api&"+a;this.j.createElement("img").src=a;(b=_.Nc.__gm_captureCSI)&&b(a)};KZ.prototype.f=function(a,b,c){this.b.set(_.yb(a),{zp:b,Wo:c})};MZ.prototype.F=function(a){this.f[a]||(this.f[a]=!0,this.b.push(a),2>this.b.length&&_.$y(this,this.G,500))};
MZ.prototype.G=function(){for(var a=CZ(this.C,this.m,this.j,this.l),b=0,c;c=this.b[b];++b)a[c]="1";a.hybrid=+((_.el()||!_.dl())&&_.dl());this.b.length=0;this.B.b({ev:"api_mapft"},a)};NZ.prototype.l=function(){for(var a;a=this.j.removeAt(0);){var b=a.Bo;a=a.timestamp-this.C;++this.f;this.b[b]||(this.b[b]=0);++this.b[b];if(20<=this.f&&!(this.f%5)){var c={};c.s=b;c.sr=this.b[b];c.tr=this.f;c.te=a;c.hc=this.m?"1":"0";this.B({ev:"api_services"},c)}}};OZ.prototype.V=function(a){a=_.yb(a);this.F[a]||(this.F[a]=new MZ(this.b,this.C,this.I,this.j));return this.F[a]};OZ.prototype.T=function(a){a=_.yb(a);this.B[a]||(this.B[a]=new IZ(this.b,this.C,1,this.j));return this.B[a]};OZ.prototype.f=function(a){if(this.l){this.m[a]||(this.m[a]=new _.aA,HZ(this.l,a,function(){return b.sb()}));var b=this.m[a];return b}};OZ.prototype.M=function(a){if(this.l){this.G[a]||(this.G[a]=new KZ,HZ(this.l,a,function(){return LZ(b)}));var b=this.G[a];return b}};var PZ=new OZ;_.nc("stats",PZ);});