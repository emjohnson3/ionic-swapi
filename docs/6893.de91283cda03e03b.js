"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[6893],{6893:(y,l,a)=>{a.r(l),a.d(l,{HomePageModule:()=>H});var c=a(6895),s=a(5035),g=a(433),p=a(1407),t=a(8256),u=a(4482),m=a(2733),h=a(515),d=a(529);let P=(()=>{class e{constructor(n){this.httpSvc=n,this.loadPlanets=()=>this.httpSvc.get("https://swapi.dev/api/planets").pipe(function f(e,o=1/0,n){return o=(o||0)<1?1/0:o,(0,u.e)((i,r)=>(0,m.p)(i,r,e,o,void 0,!0,n))}(r=>r.next?this.httpSvc.get(r.next):h.E))}}return e.\u0275fac=function(n){return new(n||e)(t.LFG(d.eN))},e.\u0275prov=t.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();function v(e,o){if(1&e&&(t.TgZ(0,"ion-item"),t._uU(1),t.qZA()),2&e){const n=o.$implicit;t.xp6(1),t.hij(" ",n," ")}}const S=[{path:"",component:(()=>{class e{constructor(n){this.swapiSvc=n,this.planets=[]}ngOnInit(){this.swapiSvc.loadPlanets().subscribe({next:n=>{this.planets=[...this.planets,...n.results.map(i=>i.name)].sort()},error:n=>{console.error(n)}})}}return e.\u0275fac=function(n){return new(n||e)(t.Y36(P))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-home"]],decls:11,vars:5,consts:[[3,"translucent"],[3,"fullscreen"],["collapse","condense"],["size","large"],[4,"ngFor","ngForOf"]],template:function(n,i){1&n&&(t.TgZ(0,"ion-header",0)(1,"ion-toolbar")(2,"ion-title"),t._uU(3),t.qZA()()(),t.TgZ(4,"ion-content",1)(5,"ion-header",2)(6,"ion-toolbar")(7,"ion-title",3),t._uU(8),t.qZA()()(),t.TgZ(9,"ion-list"),t.YNc(10,v,2,1,"ion-item",4),t.qZA()()),2&n&&(t.Q6J("translucent",!0),t.xp6(3),t.hij(" SW Planets (",i.planets.length,") "),t.xp6(1),t.Q6J("fullscreen",!0),t.xp6(4),t.hij("SW Planets (",i.planets.length,")"),t.xp6(2),t.Q6J("ngForOf",i.planets))},dependencies:[c.sg,s.W2,s.Gu,s.Ie,s.q_,s.wd,s.sr],styles:["#container[_ngcontent-%COMP%]{text-align:center;position:absolute;left:0;right:0;top:50%;transform:translateY(-50%)}#container[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{font-size:20px;line-height:26px}#container[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:16px;line-height:22px;color:#8c8c8c;margin:0}#container[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{text-decoration:none}"]}),e})()}];let M=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[p.Bz.forChild(S),p.Bz]}),e})(),H=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[c.ez,g.u5,s.Pc,M]}),e})()}}]);