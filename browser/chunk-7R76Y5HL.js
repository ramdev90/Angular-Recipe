import{b as oe}from"./chunk-NB546ZQN.js";import{b as L}from"./chunk-7OU34OZJ.js";import{A as G,Aa as Re,B as f,C as K,D as O,H as Q,I as c,J as k,K as W,L as Y,M as Z,N as _,Q as ee,R as te,W as w,X as ie,Y as I,Z as re,_ as ne,a as z,aa as D,b as H,ba as ce,c as X,ca as pe,da as v,ea as se,f as M,fa as me,ga as P,h as N,i as B,ia as C,j as J,k as S,ka as ae,l as T,la as le,m as u,ma as de,n as l,na as ue,o as A,oa as fe,p as E,pa as he,q as F,r as y,s,t as d,ua as ve,v as x,w as m,wa as ge,x as o,y as n,z as p}from"./chunk-2UBTGTCX.js";var g=(()=>{class t{constructor(e){this.slService=e,this.recipesChanged=new X,this.recipes=[]}setRecipes(e){this.recipes=e,this.recipesChanged.next(this.recipes.slice())}getRecipes(){return this.recipes.slice()}getRecipe(e){return this.recipes[e]}addIngredientsToShoppingList(e){this.slService.addIngredients(e)}addRecipe(e){this.recipes.push(e),this.recipesChanged.next(this.recipes.slice())}updateRecipe(e,i){this.recipes[e]=i,this.recipesChanged.next(this.recipes.slice())}deleteRecipe(e){this.recipes.splice(e,1),this.recipesChanged.next(this.recipes.slice())}static{this.\u0275fac=function(i){return new(i||t)(u(oe))}}static{this.\u0275prov=S({token:t,factory:t.\u0275fac})}}return t})();function Fe(t,b){if(t&1&&(o(0,"li",10),c(1),n()),t&2){let e=b.$implicit;s(),Y(" ",e.name," - ",e.amount," ")}}var Ce=(()=>{class t{constructor(e,i,r){this.recipeService=e,this.route=i,this.router=r}ngOnInit(){this.route.params.subscribe(e=>{this.id=+e.id,this.recipe=this.recipeService.getRecipe(this.id)})}onAddToShoppingList(){this.recipeService.addIngredientsToShoppingList(this.recipe.ingredients)}onEditRecipe(){this.router.navigate(["edit"],{relativeTo:this.route})}onDeleteRecipe(){this.recipeService.deleteRecipe(this.id),this.router.navigate(["/recipes"])}static{this.\u0275fac=function(i){return new(i||t)(d(g),d(w),d(I))}}static{this.\u0275cmp=l({type:t,selectors:[["app-recipe-detail"]],decls:30,vars:5,consts:[[1,"row"],[1,"col-xs-12"],[1,"img-responsive",2,"max-height","300px",3,"src","alt"],["appDropdown","",1,"btn-group"],["type","button",1,"btn","btn-primary","dropdown-toggle"],[1,"caret"],[1,"dropdown-menu"],[2,"cursor","pointer",3,"click"],[1,"list-group"],["class","list-group-item",4,"ngFor","ngForOf"],[1,"list-group-item"]],template:function(i,r){i&1&&(o(0,"div",0)(1,"div",1),p(2,"img",2),n()(),o(3,"div",0)(4,"div",1)(5,"h1"),c(6),n()()(),o(7,"div",0)(8,"div",1)(9,"div",3)(10,"button",4),c(11," Manage Recipe "),p(12,"span",5),n(),o(13,"ul",6)(14,"li")(15,"a",7),f("click",function(){return r.onAddToShoppingList()}),c(16,"To Shopping List"),n()(),o(17,"li")(18,"a",7),f("click",function(){return r.onEditRecipe()}),c(19,"Edit Recipe"),n()(),o(20,"li")(21,"a",7),f("click",function(){return r.onDeleteRecipe()}),c(22,"Delete Recipe"),n()()()()()(),o(23,"div",0)(24,"div",1),c(25),n()(),o(26,"div",0)(27,"div",1)(28,"ul",8),x(29,Fe,2,2,"li",9),n()()()),i&2&&(s(2),O("alt",r.recipe.name),m("src",r.recipe.imagePath,y),s(4),k(r.recipe.name),s(19),W(" ",r.recipe.description," "),s(4),m("ngForOf",r.recipe.ingredients))},dependencies:[ce,_]})}}return t})();function ke(t,b){if(t&1){let e=G();o(0,"div",17)(1,"div",18),p(2,"input",19),n(),o(3,"div",20),p(4,"input",21),n(),o(5,"div",20)(6,"button",5),f("click",function(){let r=E(e).index,a=K();return F(a.onDeleteIngredient(r))}),c(7,"X"),n()()()}if(t&2){let e=b.index;m("formGroupName",e)}}var q=(()=>{class t{get ingredientsControls(){return this.recipeForm.get("ingredients").controls}constructor(e,i,r){this.route=e,this.recipeService=i,this.router=r,this.editMode=!1}ngOnInit(){this.route.params.subscribe(e=>{this.id=+e.id,this.editMode=e.id!=null,this.initForm()})}onSubmit(){this.editMode?this.recipeService.updateRecipe(this.id,this.recipeForm.value):this.recipeService.addRecipe(this.recipeForm.value),this.onCancel()}onAddIngredient(){this.recipeForm.get("ingredients").push(new P({name:new C(null,v.required),amount:new C(null,[v.required,v.pattern(/^[1-9]+[0-9]*$/)])}))}onDeleteIngredient(e){this.recipeForm.get("ingredients").removeAt(e)}onCancel(){this.router.navigate(["../"],{relativeTo:this.route})}initForm(){let e="",i="",r="",a=new ve([]);if(this.editMode){let R=this.recipeService.getRecipe(this.id);if(e=R.name,i=R.imagePath,r=R.description,R.ingredients)for(let $ of R.ingredients)a.push(new P({name:new C($.name,v.required),amount:new C($.amount,[v.required,v.pattern(/^[1-9]+[0-9]*$/)])}))}this.recipeForm=new P({name:new C(e,v.required),imagePath:new C(i,v.required),description:new C(r,v.required),ingredients:a})}static{this.\u0275fac=function(i){return new(i||t)(d(w),d(g),d(I))}}static{this.\u0275cmp=l({type:t,selectors:[["app-recipe-edit"]],decls:39,vars:4,consts:[["imagePath",""],[1,"row"],[1,"col-xs-12"],[3,"ngSubmit","formGroup"],["type","submit",1,"btn","btn-success",3,"disabled"],["type","button",1,"btn","btn-danger",3,"click"],[1,"form-group"],["for","name"],["type","text","id","name","formControlName","name",1,"form-control"],["for","imagePath"],["type","text","id","imagePath","formControlName","imagePath",1,"form-control"],[1,"img-responsive",3,"src"],["for","description"],["type","text","id","description","formControlName","description","rows","6",1,"form-control"],["formArrayName","ingredients",1,"col-xs-12"],["class","row","style","margin-top: 10px;",3,"formGroupName",4,"ngFor","ngForOf"],["type","button",1,"btn","btn-success",3,"click"],[1,"row",2,"margin-top","10px",3,"formGroupName"],[1,"col-xs-8"],["type","text","formControlName","name",1,"form-control"],[1,"col-xs-2"],["type","number","formControlName","amount",1,"form-control"]],template:function(i,r){if(i&1){let a=G();o(0,"div",1)(1,"div",2)(2,"form",3),f("ngSubmit",function(){return E(a),F(r.onSubmit())}),o(3,"div",1)(4,"div",2)(5,"button",4),c(6,"Save"),n(),o(7,"button",5),f("click",function(){return E(a),F(r.onCancel())}),c(8,"Cancel"),n()()(),o(9,"div",1)(10,"div",2)(11,"div",6)(12,"label",7),c(13,"Name"),n(),p(14,"input",8),n()()(),o(15,"div",1)(16,"div",2)(17,"div",6)(18,"label",9),c(19,"Image URL"),n(),p(20,"input",10,0),n()()(),o(22,"div",1)(23,"div",2),p(24,"img",11),n()(),o(25,"div",1)(26,"div",2)(27,"div",6)(28,"label",12),c(29,"Description"),n(),p(30,"textarea",13),n()()(),o(31,"div",1)(32,"div",14),x(33,ke,8,1,"div",15),p(34,"hr"),o(35,"div",1)(36,"div",2)(37,"button",16),f("click",function(){return E(a),F(r.onAddIngredient())}),c(38,"Add Ingredient"),n()()()()()()()()}if(i&2){let a=Q(21);s(2),m("formGroup",r.recipeForm),s(3),m("disabled",!r.recipeForm.valid),s(19),m("src",a.value,y),s(9),m("ngForOf",r.ingredientsControls)}},dependencies:[ae,pe,le,se,me,de,he,ue,fe,_],styles:["input.ng-invalid.ng-touched[_ngcontent-%COMP%], textarea.ng-invalid.ng-touched[_ngcontent-%COMP%]{border:1px solid red}"]})}}return t})();var De=t=>[t],be=(()=>{class t{ngOnInit(){}static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275cmp=l({type:t,selectors:[["app-recipe-item"]],inputs:{recipe:"recipe",index:"index"},decls:8,vars:7,consts:[["routerLinkActive","active",1,"list-group-item","clearfix",2,"cursor","pointer",3,"routerLink"],[1,"pull-left"],[1,"list-group-item-heading"],[1,"list-group-item-text"],[1,"pull-right"],[1,"img-responsive",2,"max-height","50px",3,"src","alt"]],template:function(i,r){i&1&&(o(0,"a",0)(1,"div",1)(2,"h4",2),c(3),n(),o(4,"p",3),c(5),n()(),o(6,"span",4),p(7,"img",5),n()()),i&2&&(m("routerLink",Z(5,De,r.index)),s(3),k(r.recipe.name),s(2),k(r.recipe.description),s(2),O("alt",r.recipe.name),m("src",r.recipe.imagePath,y))},dependencies:[re,ne]})}}return t})();function Me(t,b){if(t&1&&p(0,"app-recipe-item",4),t&2){let e=b.$implicit,i=b.index;m("recipe",e)("index",i)}}var ye=(()=>{class t{constructor(e,i,r){this.recipeService=e,this.router=i,this.route=r}ngOnInit(){this.subscription=this.recipeService.recipesChanged.subscribe(e=>{this.recipes=e}),this.recipes=this.recipeService.getRecipes()}onNewRecipe(){this.router.navigate(["new"],{relativeTo:this.route})}ngOnDestroy(){this.subscription.unsubscribe()}static{this.\u0275fac=function(i){return new(i||t)(d(g),d(I),d(w))}}static{this.\u0275cmp=l({type:t,selectors:[["app-recipe-list"]],decls:8,vars:1,consts:[[1,"row"],[1,"col-xs-12"],[1,"btn","btn-success",3,"click"],[3,"recipe","index",4,"ngFor","ngForOf"],[3,"recipe","index"]],template:function(i,r){i&1&&(o(0,"div",0)(1,"div",1)(2,"button",2),f("click",function(){return r.onNewRecipe()}),c(3,"New Recipe"),n()()(),p(4,"hr"),o(5,"div",0)(6,"div",1),x(7,Me,1,2,"app-recipe-item",3),n()()),i&2&&(s(7),m("ngForOf",r.recipes))},dependencies:[_,be]})}}return t})();var xe=(()=>{class t{constructor(){}ngOnInit(){}static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275cmp=l({type:t,selectors:[["app-recipe-start"]],decls:2,vars:0,template:function(i,r){i&1&&(o(0,"h3"),c(1,"Please select a Recipe!"),n())}})}}return t})();var _e=(()=>{class t{constructor(e){this.authService=e}canActivate(e,i){return this.authService.user.pipe(N(1),M(r=>!!r))}static{this.\u0275fac=function(i){return new(i||t)(u(L))}}static{this.\u0275prov=S({token:t,factory:t.\u0275fac,providedIn:"root"})}}return t})();var we=(()=>{class t{constructor(e,i,r){this.http=e,this.recipeService=i,this.authService=r}storeRecipes(){let e=this.recipeService.getRecipes();this.http.put("https://ng-course-recipe-book-c1c29.firebaseio.com/recipes.json",e).subscribe(i=>{console.log(i)})}fetchRecipes(){return this.authService.user.pipe(N(1),B(e=>{let i=e.token!==null?e.token:"";return this.http.get("https://ng-course-recipe-book-c1c29.firebaseio.com/recipes.json",{params:new ee().set("auth",i)})}),M(e=>e.map(i=>H(z({},i),{ingredients:i.ingredients?i.ingredients:[]}))),J(e=>{this.recipeService.setRecipes(e)}))}static{this.\u0275fac=function(i){return new(i||t)(u(te),u(g),u(L))}}static{this.\u0275prov=S({token:t,factory:t.\u0275fac,providedIn:"root"})}}return t})();var U=(()=>{class t{constructor(e,i){this.dataStorageService=e,this.recipesService=i}resolve(e,i){let r=this.recipesService.getRecipes();return r.length===0?this.dataStorageService.fetchRecipes():r}static{this.\u0275fac=function(i){return new(i||t)(u(we),u(g))}}static{this.\u0275prov=S({token:t,factory:t.\u0275fac,providedIn:"root"})}}return t})();var Ie=(()=>{class t{constructor(){}ngOnInit(){}static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275cmp=l({type:t,selectors:[["app-recipes"]],decls:5,vars:0,consts:[[1,"row"],[1,"col-md-5"],[1,"col-md-7"]],template:function(i,r){i&1&&(o(0,"div",0)(1,"div",1),p(2,"app-recipe-list"),n(),o(3,"div",2),p(4,"router-outlet"),n()())},dependencies:[ie,ye]})}}return t})();var Oe=[{path:"",component:Ie,canActivate:[_e],children:[{path:"",component:xe},{path:"new",component:q},{path:":id",component:Ce,resolve:[U]},{path:":id/edit",component:q,resolve:[U]}]}],Ee=(()=>{class t{static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275mod=A({type:t})}static{this.\u0275inj=T({imports:[D.forChild(Oe),D]})}}return t})();var xt=(()=>{class t{static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275mod=A({type:t})}static{this.\u0275inj=T({imports:[D,ge,Ee,Re]})}}return t})();export{g as a,we as b,xt as c};