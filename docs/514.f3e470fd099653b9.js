"use strict";(self.webpackChunkrps_celular=self.webpackChunkrps_celular||[]).push([[514],{7514:(re,O,M)=>{M.r(O),M.d(O,{ContatoModule:()=>se});var N=M(6895),H=M(1706),u=M(433),r=M(1571);function D(n,m,e,t,s,a,h){try{var f=n[a](h),i=f.value}catch(o){return void e(o)}f.done?m(i):Promise.resolve(i).then(t,s)}const P=new r.OlP("ngx-mask config"),$=new r.OlP("new ngx-mask config"),R=new r.OlP("initial ngx-mask config"),B={suffix:"",prefix:"",thousandSeparator:" ",decimalMarker:[".",","],clearIfNotMatch:!1,showTemplate:!1,showMaskTyped:!1,placeHolderCharacter:"_",dropSpecialCharacters:!0,hiddenInput:void 0,shownMaskExpression:"",separatorLimit:"",allowNegativeNumbers:!1,validation:!0,specialCharacters:["-","/","(",")",".",":"," ","+",",","@","[","]",'"',"'"],leadZeroDateTime:!1,triggerOnMaskChange:!1,maskFilled:new r.vpe,patterns:{0:{pattern:new RegExp("\\d")},9:{pattern:new RegExp("\\d"),optional:!0},X:{pattern:new RegExp("\\d"),symbol:"*"},A:{pattern:new RegExp("[a-zA-Z0-9]")},S:{pattern:new RegExp("[a-zA-Z]")},U:{pattern:new RegExp("[A-Z]")},L:{pattern:new RegExp("[a-z]")},d:{pattern:new RegExp("\\d")},m:{pattern:new RegExp("\\d")},M:{pattern:new RegExp("\\d")},H:{pattern:new RegExp("\\d")},h:{pattern:new RegExp("\\d")},s:{pattern:new RegExp("\\d")}}},J=["Hh:m0:s0","Hh:m0","m0:s0"],G=["percent","Hh","s0","m0","separator","d0/M0/0000","d0/M0","d0","M0"];let F=(()=>{class n{constructor(e){this._config=e,this.maskExpression="",this.actualValue="",this.shownMaskExpression="",this._formatWithSeparators=(t,s,a,h)=>{let f=[],i="";if(Array.isArray(a)){const p=new RegExp(a.map(g=>"[\\^$.|?*+()".indexOf(g)>=0?`\\${g}`:g).join("|"));f=t.split(p),i=t.match(p)?.[0]??""}else f=t.split(a),i=a;const o=f.length>1?`${i}${f[1]}`:"";let c=f[0];const _=this.separatorLimit.replace(/\s/g,"");_&&+_&&(c="-"===c[0]?`-${c.slice(1,c.length).slice(0,_.length)}`:c.slice(0,_.length));const k=/(\d+)(\d{3})/;for(;s&&k.test(c);)c=c.replace(k,"$1"+s+"$2");return void 0===h?c+o:0===h?c:c+o.substr(0,h+1)},this.percentage=t=>Number(t)>=0&&Number(t)<=100,this.getPrecision=t=>{const s=t.split(".");return s.length>1?Number(s[s.length-1]):1/0},this.checkAndRemoveSuffix=t=>{for(let s=this.suffix?.length-1;s>=0;s--){const a=this.suffix.substr(s,this.suffix?.length);if(t.includes(a)&&(s-1<0||!t.includes(this.suffix.substr(s-1,this.suffix?.length))))return t.replace(a,"")}return t},this.checkInputPrecision=(t,s,a)=>{if(s<1/0){if(Array.isArray(a)){const i=a.find(o=>o!==this.thousandSeparator);a=i||a[0]}const h=new RegExp(this._charToRegExpExpression(a)+`\\d{${s}}.*$`),f=t.match(h);f&&f[0].length-1>s&&(t=t.substring(0,t.length-(f[0].length-1-s))),0===s&&this._compareOrIncludes(t[t.length-1],a,this.thousandSeparator)&&(t=t.substring(0,t.length-1))}return t},this._shift=new Set,this.clearIfNotMatch=this._config.clearIfNotMatch,this.dropSpecialCharacters=this._config.dropSpecialCharacters,this.maskSpecialCharacters=this._config.specialCharacters,this.maskAvailablePatterns=this._config.patterns,this.prefix=this._config.prefix,this.suffix=this._config.suffix,this.thousandSeparator=this._config.thousandSeparator,this.decimalMarker=this._config.decimalMarker,this.hiddenInput=this._config.hiddenInput,this.showMaskTyped=this._config.showMaskTyped,this.placeHolderCharacter=this._config.placeHolderCharacter,this.validation=this._config.validation,this.separatorLimit=this._config.separatorLimit,this.allowNegativeNumbers=this._config.allowNegativeNumbers,this.leadZeroDateTime=this._config.leadZeroDateTime}applyMaskWithPattern(e,t){const[s,a]=t;return this.customPattern=a,this.applyMask(e,s)}applyMask(e,t,s=0,a=!1,h=!1,f=(()=>{})){if(!t||"string"!=typeof e)return"";let i=0,o="",c=!1,_=!1,k=1,p=!1;e.slice(0,this.prefix.length)===this.prefix&&(e=e.slice(this.prefix.length,e.length)),this.suffix&&e?.length>0&&(e=this.checkAndRemoveSuffix(e));const g=e.toString().split("");if("IP"===t){const d=e.split(".");this.ipError=this._validIP(d),t="099.099.099.099"}const v=[];for(let d=0;d<e.length;d++)e[d]?.match("\\d")&&v.push(e[d]);if("CPF_CNPJ"===t&&(this.cpfCnpjError=11!==v.length&&14!==v.length,t=v.length>11?"00.000.000/0000-00":"000.000.000-00"),t.startsWith("percent")){if(e.match("[a-z]|[A-Z]")||e.match(/[-!$%^&*()_+|~=`{}\[\]:";'<>?,\/.]/)){e=this._stripToDecimal(e);const d=this.getPrecision(t);e=this.checkInputPrecision(e,d,this.decimalMarker)}e.indexOf(".")>0&&!this.percentage(e.substring(0,e.indexOf(".")))&&(e=`${e.substring(0,e.indexOf(".")-1)}${e.substring(e.indexOf("."),e.length)}`),o=this.percentage(e)?e:e.substring(0,e.length-1)}else if(t.startsWith("separator")){(e.match("[w\u0430-\u044f\u0410-\u042f]")||e.match("[\u0401\u0451\u0410-\u044f]")||e.match("[a-z]|[A-Z]")||e.match(/[-@#!$%\\^&*()_\xa3\xac'+|~=`{}\[\]:";<>.?\/]/)||e.match("[^A-Za-z0-9,]"))&&(e=this._stripToDecimal(e)),e=e.length>1&&"0"===e[0]&&!this._compareOrIncludes(e[1],this.decimalMarker,this.thousandSeparator)&&!h?e.slice(1,e.length):e,h&&(e=this._compareOrIncludes(e[e.length-1],this.decimalMarker,this.thousandSeparator)?e.slice(0,e.length-1):e);const d=this._charToRegExpExpression(this.thousandSeparator);let l='@#!$%^&*()_+|~=`{}\\[\\]:\\s,\\.";<>?\\/'.replace(d,"");if(Array.isArray(this.decimalMarker))for(const x of this.decimalMarker)l=l.replace(this._charToRegExpExpression(x),"");else l=l.replace(this._charToRegExpExpression(this.decimalMarker),"");const S=new RegExp("["+l+"]");(e.match(S)||1===e.length&&this._compareOrIncludes(e,this.decimalMarker,this.thousandSeparator))&&(e=e.substring(0,e.length-1));const I=this.getPrecision(t),A=(e=this.checkInputPrecision(e,I,this.decimalMarker)).replace(new RegExp(d,"g"),"");o=this._formatWithSeparators(A,this.thousandSeparator,this.decimalMarker,I);const T=o.indexOf(",")-e.indexOf(","),C=o.length-e.length;if(C>0&&","!==o[s]){_=!0;let x=0;do{this._shift.add(s+x),x++}while(x<C)}else 0!==T&&s>0&&!(o.indexOf(",")>=s&&s>3)||!(o.indexOf(".")>=s&&s>3)&&C<=0?(this._shift.clear(),_=!0,k=C,this._shift.add(s+=C)):this._shift.clear()}else for(let d=0,l=g[0];d<g.length&&i!==t.length;d++,l=g[d])if(this._checkSymbolMask(l,t[i])&&"?"===t[i+1])o+=l,i+=2;else if("*"===t[i+1]&&c&&this._checkSymbolMask(l,t[i+2]))o+=l,i+=3,c=!1;else if(this._checkSymbolMask(l,t[i])&&"*"===t[i+1])o+=l,c=!0;else if("?"===t[i+1]&&this._checkSymbolMask(l,t[i+2]))o+=l,i+=3;else if(this._checkSymbolMask(l,t[i])){if("H"===t[i]&&Number(l)>2){i+=1,this._shiftStep(t,i,g.length),d--,this.leadZeroDateTime&&(o+="0");continue}if("h"===t[i]&&"2"===o&&Number(l)>3){i+=1,d--;continue}if("m"===t[i]&&Number(l)>5){i+=1,this._shiftStep(t,i,g.length),d--,this.leadZeroDateTime&&(o+="0");continue}if("s"===t[i]&&Number(l)>5){i+=1,this._shiftStep(t,i,g.length),d--,this.leadZeroDateTime&&(o+="0");continue}const S=31;if("d"===t[i]&&(Number(l)>3&&this.leadZeroDateTime||Number(e.slice(i,i+2))>S||"/"===e[i+1])){i+=1,this._shiftStep(t,i,g.length),d--,this.leadZeroDateTime&&(o+="0");continue}if("M"===t[i]){const A=0===i&&(Number(l)>2||Number(e.slice(i,i+2))>12||"/"===e[i+1]),T=e.slice(i-3,i-1).includes("/")&&("/"===e[i-2]&&Number(e.slice(i-1,i+1))>12&&"/"!==e[i]||"/"===e[i]||"/"===e[i-3]&&Number(e.slice(i-2,i))>12&&"/"!==e[i-1]||"/"===e[i-1]),C=Number(e.slice(i-3,i-1))<=S&&!e.slice(i-3,i-1).includes("/")&&"/"===e[i-1]&&(Number(e.slice(i,i+2))>12||"/"===e[i+1]),x=Number(e.slice(i-3,i-1))>S&&!e.slice(i-3,i-1).includes("/")&&!e.slice(i-2,i).includes("/")&&Number(e.slice(i-2,i))>12,ie=Number(e.slice(i-3,i-1))<=S&&!e.slice(i-3,i-1).includes("/")&&"/"!==e[i-1]&&Number(e.slice(i-1,i+1))>12;if(Number(l)>1&&this.leadZeroDateTime||A||T||C||x||ie){i+=1,this._shiftStep(t,i,g.length),d--,this.leadZeroDateTime&&(o+="0");continue}}o+=l,i++}else" "===l&&" "===t[i]?(o+=l,i++):-1!==this.maskSpecialCharacters.indexOf(t[i])?(o+=t[i],i++,this._shiftStep(t,i,g.length),d--):this.maskSpecialCharacters.indexOf(l)>-1&&this.maskAvailablePatterns[t[i]]&&this.maskAvailablePatterns[t[i]]?.optional?(!!g[i]&&"099.099.099.099"!==t&&"000.000.000-00"!==t&&"00.000.000/0000-00"!==t&&!t.match(/^9+\.0+$/)&&(o+=g[i]),i++,d--):"*"===this.maskExpression[i+1]&&this._findSpecialChar(this.maskExpression[i+2])&&this._findSpecialChar(l)===this.maskExpression[i+2]&&c||"?"===this.maskExpression[i+1]&&this._findSpecialChar(this.maskExpression[i+2])&&this._findSpecialChar(l)===this.maskExpression[i+2]&&c?(i+=3,o+=l):this.showMaskTyped&&this.maskSpecialCharacters.indexOf(l)<0&&l!==this.placeHolderCharacter&&(p=!0);o.length+1===t.length&&-1!==this.maskSpecialCharacters.indexOf(t[t.length-1])&&(o+=t[t.length-1]);let y=s+1;for(;this._shift.has(y);)k++,y++;let b=a&&!t.startsWith("separator")?i:this._shift.has(s)?k:0;p&&b--,f(b,_),k<0&&this._shift.clear();let w=!1;h&&(w=g.every(d=>this.maskSpecialCharacters.includes(d)));let E=`${this.prefix}${w?"":o}${this.suffix}`;return 0===o.length&&(E=`${this.prefix}${o}`),E}_findSpecialChar(e){return this.maskSpecialCharacters.find(t=>t===e)}_checkSymbolMask(e,t){return this.maskAvailablePatterns=this.customPattern?this.customPattern:this.maskAvailablePatterns,this.maskAvailablePatterns[t]&&this.maskAvailablePatterns[t].pattern&&this.maskAvailablePatterns[t].pattern.test(e)}_stripToDecimal(e){return e.split("").filter((t,s)=>t.match("^-?\\d")||t.match("\\s")||"."===t||","===t||"-"===t&&0===s&&this.allowNegativeNumbers).join("")}_charToRegExpExpression(e){return e&&(" "===e?"\\s":"[\\^$.|?*+()".indexOf(e)>=0?`\\${e}`:e)}_shiftStep(e,t,s){const a=/[*?]/g.test(e.slice(0,t))?s:t;this._shift.add(a+this.prefix.length||0)}_compareOrIncludes(e,t,s){return Array.isArray(t)?t.filter(a=>a!==s).includes(e):e===t}_validIP(e){return!(4===e.length&&!e.some((t,s)=>e.length!==s+1?""===t||Number(t)>255:""===t||Number(t.substring(0,3))>255))}}return n.\u0275fac=function(e){return new(e||n)(r.LFG(P))},n.\u0275prov=r.Yz7({token:n,factory:n.\u0275fac}),n})(),Z=(()=>{class n extends F{constructor(e,t,s,a){super(t),this.document=e,this._config=t,this._elementRef=s,this._renderer=a,this.maskExpression="",this.isNumberValue=!1,this.placeHolderCharacter="_",this.maskIsShown="",this.selStart=null,this.selEnd=null,this.writingValue=!1,this.maskChanged=!1,this.triggerOnMaskChange=!1,this.onChange=h=>{}}applyMask(e,t,s=0,a=!1,h=!1,f=(()=>{})){if(!t)return e!==this.actualValue?this.actualValue:e;if(this.maskIsShown=this.showMaskTyped?this.showMaskInInput():"","IP"===this.maskExpression&&this.showMaskTyped&&(this.maskIsShown=this.showMaskInInput(e||"#")),"CPF_CNPJ"===this.maskExpression&&this.showMaskTyped&&(this.maskIsShown=this.showMaskInInput(e||"#")),!e&&this.showMaskTyped)return this.formControlResult(this.prefix),this.prefix+this.maskIsShown;const i=e&&"number"==typeof this.selStart?e[this.selStart]:"";let o="";if(void 0!==this.hiddenInput&&!this.writingValue){let p=this.actualValue.split("");""!==e&&p.length?"number"==typeof this.selStart&&"number"==typeof this.selEnd&&(e.length>p.length?p.splice(this.selStart,0,i):e.length<p.length&&(p.length-e.length==1?p.splice(this.selStart-1,1):p.splice(this.selStart,this.selEnd-this.selStart))):p=[],this.showMaskTyped&&(e=this.removeMask(e)),o=this.actualValue.length&&p.length<=e.length?this.shiftTypedSymbols(p.join("")):e}o=Boolean(o)&&o.length?o:e;const c=super.applyMask(o,t,s,a,h,f);if(this.actualValue=this.getActualValue(c),"."===this.thousandSeparator&&"."===this.decimalMarker&&(this.decimalMarker=","),this.maskExpression.startsWith("separator")&&!0===this.dropSpecialCharacters&&(this.maskSpecialCharacters=this.maskSpecialCharacters.filter(p=>!this._compareOrIncludes(p,this.decimalMarker,this.thousandSeparator))),this.formControlResult(c),!this.showMaskTyped)return this.hiddenInput&&c&&c.length?this.hideInput(c,this.maskExpression):c;const _=c.length,k=this.prefix+this.maskIsShown;if(this.maskExpression.includes("H")){const p=this._numberSkipedSymbols(c);return c+k.slice(_+p)}return"IP"===this.maskExpression||"CPF_CNPJ"===this.maskExpression?c+k:c+k.slice(_)}_numberSkipedSymbols(e){const t=/(^|\D)(\d\D)/g;let s=t.exec(e),a=0;for(;null!=s;)a+=1,s=t.exec(e);return a}applyValueChanges(e,t,s,a=(()=>{})){const h=this._elementRef.nativeElement;h.value=this.applyMask(h.value,this.maskExpression,e,t,s,a),h!==this._getActiveElement()&&this.clearIfNotMatchFn()}hideInput(e,t){return e.split("").map((s,a)=>this.maskAvailablePatterns&&this.maskAvailablePatterns[t[a]]&&this.maskAvailablePatterns[t[a]]?.symbol?this.maskAvailablePatterns[t[a]]?.symbol:s).join("")}getActualValue(e){const t=e.split("").filter((s,a)=>this._checkSymbolMask(s,this.maskExpression[a])||this.maskSpecialCharacters.includes(this.maskExpression[a])&&s===this.maskExpression[a]);return t.join("")===e?t.join(""):e}shiftTypedSymbols(e){let t="";return(e&&e.split("").map((a,h)=>{if(this.maskSpecialCharacters.includes(e[h+1])&&e[h+1]!==this.maskExpression[h+1])return t=a,e[h+1];if(t.length){const f=t;return t="",f}return a})||[]).join("")}numberToString(e){return e||0===e?Number(e).toLocaleString("fullwide",{useGrouping:!1,maximumFractionDigits:20}):String(e)}showMaskInInput(e){if(this.showMaskTyped&&this.shownMaskExpression){if(this.maskExpression.length!==this.shownMaskExpression.length)throw new Error("Mask expression must match mask placeholder length");return this.shownMaskExpression}if(this.showMaskTyped){if(e){if("IP"===this.maskExpression)return this._checkForIp(e);if("CPF_CNPJ"===this.maskExpression)return this._checkForCpfCnpj(e)}return this.maskExpression.replace(/\w/g,this.placeHolderCharacter)}return""}clearIfNotMatchFn(){const e=this._elementRef.nativeElement;this.clearIfNotMatch&&this.prefix.length+this.maskExpression.length+this.suffix.length!==e.value.replace(/_/g,"").length&&(this.formElementProperty=["value",""],this.applyMask(e.value,this.maskExpression))}set formElementProperty([e,t]){Promise.resolve().then(()=>this._renderer.setProperty(this._elementRef.nativeElement,e,t))}checkSpecialCharAmount(e){return e.split("").filter(s=>this._findSpecialChar(s)).length}removeMask(e){return this._removeMask(this._removeSuffix(this._removePrefix(e)),this.maskSpecialCharacters.concat("_").concat(this.placeHolderCharacter))}_checkForIp(e){if("#"===e)return`${this.placeHolderCharacter}.${this.placeHolderCharacter}.${this.placeHolderCharacter}.${this.placeHolderCharacter}`;const t=[];for(let s=0;s<e.length;s++)e[s]?.match("\\d")&&t.push(e[s]);return t.length<=3?`${this.placeHolderCharacter}.${this.placeHolderCharacter}.${this.placeHolderCharacter}`:t.length>3&&t.length<=6?`${this.placeHolderCharacter}.${this.placeHolderCharacter}`:t.length>6&&t.length<=9?this.placeHolderCharacter:""}_checkForCpfCnpj(e){const t=`${this.placeHolderCharacter}${this.placeHolderCharacter}${this.placeHolderCharacter}.${this.placeHolderCharacter}${this.placeHolderCharacter}${this.placeHolderCharacter}.${this.placeHolderCharacter}${this.placeHolderCharacter}${this.placeHolderCharacter}-${this.placeHolderCharacter}${this.placeHolderCharacter}`,s=`${this.placeHolderCharacter}${this.placeHolderCharacter}.${this.placeHolderCharacter}${this.placeHolderCharacter}${this.placeHolderCharacter}.${this.placeHolderCharacter}${this.placeHolderCharacter}${this.placeHolderCharacter}/${this.placeHolderCharacter}${this.placeHolderCharacter}${this.placeHolderCharacter}${this.placeHolderCharacter}-${this.placeHolderCharacter}${this.placeHolderCharacter}`;if("#"===e)return t;const a=[];for(let h=0;h<e.length;h++)e[h]?.match("\\d")&&a.push(e[h]);return a.length<=3?t.slice(a.length,t.length):a.length>3&&a.length<=6?t.slice(a.length+1,t.length):a.length>6&&a.length<=9?t.slice(a.length+2,t.length):a.length>9&&a.length<11?t.slice(a.length+3,t.length):11===a.length?"":12===a.length?s.slice(17===e.length?16:15,s.length):a.length>12&&a.length<=14?s.slice(a.length+4,s.length):""}_getActiveElement(e=this.document){const t=e?.activeElement?.shadowRoot;return t?.activeElement?this._getActiveElement(t):e.activeElement}formControlResult(e){this.writingValue||!this.triggerOnMaskChange&&this.maskChanged?this.maskChanged=!1:Array.isArray(this.dropSpecialCharacters)?this.onChange(this._toNumber(this._removeMask(this._removeSuffix(this._removePrefix(e)),this.dropSpecialCharacters))):this.onChange(this.dropSpecialCharacters?this._toNumber(this._checkSymbols(e)):this._removeSuffix(e))}_toNumber(e){if(!this.isNumberValue||""===e)return e;const t=Number(e);return Number.isNaN(t)?e:t}_removeMask(e,t){return e&&e.replace(this._regExpForRemove(t),"")}_removePrefix(e){return this.prefix?e&&e.replace(this.prefix,""):e}_removeSuffix(e){return this.suffix?e&&e.replace(this.suffix,""):e}_retrieveSeparatorValue(e){return this._removeMask(this._removeSuffix(this._removePrefix(e)),this.maskSpecialCharacters)}_regExpForRemove(e){return new RegExp(e.map(t=>`\\${t}`).join("|"),"gi")}_checkSymbols(e){if(""===e)return e;const t=this._retrieveSeparatorPrecision(this.maskExpression);let s=this._retrieveSeparatorValue(e);return"."!==this.decimalMarker&&!Array.isArray(this.decimalMarker)&&(s=s.replace(this.decimalMarker,".")),this.isNumberValue?t?e===this.decimalMarker?null:this._checkPrecision(this.maskExpression,s):Number(s):s}_retrieveSeparatorPrecision(e){const t=e.match(new RegExp("^separator\\.([^d]*)"));return t?Number(t[1]):null}_checkPrecision(e,t){return e.indexOf("2")>0?Number(t).toFixed(2):Number(t)}}return n.\u0275fac=function(e){return new(e||n)(r.LFG(N.K0),r.LFG(P),r.LFG(r.SBq),r.LFG(r.Qsj))},n.\u0275prov=r.Yz7({token:n,factory:n.\u0275fac}),n})(),q=(()=>{class n{constructor(e,t,s){this.document=e,this._maskService=t,this._config=s,this.maskExpression="",this.specialCharacters=[],this.patterns={},this.prefix="",this.suffix="",this.thousandSeparator=" ",this.decimalMarker=".",this.dropSpecialCharacters=null,this.hiddenInput=null,this.showMaskTyped=null,this.placeHolderCharacter=null,this.shownMaskExpression=null,this.showTemplate=null,this.clearIfNotMatch=null,this.validation=null,this.separatorLimit=null,this.allowNegativeNumbers=null,this.leadZeroDateTime=null,this.triggerOnMaskChange=null,this.maskFilled=new r.vpe,this._maskValue="",this._position=null,this._maskExpressionArray=[],this._justPasted=!1,this.onChange=a=>{},this.onTouch=()=>{}}ngOnChanges(e){const{maskExpression:t,specialCharacters:s,patterns:a,prefix:h,suffix:f,thousandSeparator:i,decimalMarker:o,dropSpecialCharacters:c,hiddenInput:_,showMaskTyped:k,placeHolderCharacter:p,shownMaskExpression:g,showTemplate:v,clearIfNotMatch:y,validation:b,separatorLimit:w,allowNegativeNumbers:E,leadZeroDateTime:d,triggerOnMaskChange:l}=e;if(t&&(t.currentValue!==t.previousValue&&!t.firstChange&&(this._maskService.maskChanged=!0),t.currentValue&&t.currentValue.split("||").length>1?(this._maskExpressionArray=t.currentValue.split("||").sort((S,I)=>S.length-I.length),this._setMask()):(this._maskExpressionArray=[],this._maskValue=t.currentValue||"",this._maskService.maskExpression=this._maskValue)),s){if(!s.currentValue||!Array.isArray(s.currentValue))return;this._maskService.maskSpecialCharacters=s.currentValue||[]}a&&a.currentValue&&(this._maskService.maskAvailablePatterns=a.currentValue),h&&(this._maskService.prefix=h.currentValue),f&&(this._maskService.suffix=f.currentValue),i&&(this._maskService.thousandSeparator=i.currentValue),o&&(this._maskService.decimalMarker=o.currentValue),c&&(this._maskService.dropSpecialCharacters=c.currentValue),_&&(this._maskService.hiddenInput=_.currentValue),k&&(this._maskService.showMaskTyped=k.currentValue),p&&(this._maskService.placeHolderCharacter=p.currentValue),g&&(this._maskService.shownMaskExpression=g.currentValue),v&&(this._maskService.showTemplate=v.currentValue),y&&(this._maskService.clearIfNotMatch=y.currentValue),b&&(this._maskService.validation=b.currentValue),w&&(this._maskService.separatorLimit=w.currentValue),E&&(this._maskService.allowNegativeNumbers=E.currentValue,this._maskService.allowNegativeNumbers&&(this._maskService.maskSpecialCharacters=this._maskService.maskSpecialCharacters.filter(S=>"-"!==S))),d&&(this._maskService.leadZeroDateTime=d.currentValue),l&&(this._maskService.triggerOnMaskChange=l.currentValue),this._applyMask()}validate({value:e}){if(!this._maskService.validation||!this._maskValue)return null;if(this._maskService.ipError)return this._createValidationError(e);if(this._maskService.cpfCnpjError)return this._createValidationError(e);if(this._maskValue.startsWith("separator")||G.includes(this._maskValue)||this._maskService.clearIfNotMatch)return null;if(J.includes(this._maskValue))return this._validateTime(e);if(e&&e.toString().length>=1){let t=0;for(const s in this._maskService.maskAvailablePatterns)if(this._maskService.maskAvailablePatterns[s].optional&&(this._maskValue.indexOf(s)!==this._maskValue.lastIndexOf(s)?t+=this._maskValue.split("").filter(h=>h===s).join("").length:-1!==this._maskValue.indexOf(s)&&t++,-1!==this._maskValue.indexOf(s)&&e.toString().length>=this._maskValue.indexOf(s)||t===this._maskValue.length))return null;if(1===this._maskValue.indexOf("{")&&e.toString().length===this._maskValue.length+Number(this._maskValue.split("{")[1].split("}")[0])-4||1===this._maskValue.indexOf("*")||1===this._maskValue.indexOf("?"))return null;if(this._maskValue.indexOf("*")>1&&e.toString().length<this._maskValue.indexOf("*")||this._maskValue.indexOf("?")>1&&e.toString().length<this._maskValue.indexOf("?")||1===this._maskValue.indexOf("{"))return this._createValidationError(e);if(-1===this._maskValue.indexOf("*")||-1===this._maskValue.indexOf("?")){const s=this._maskService.dropSpecialCharacters?this._maskValue.length-this._maskService.checkSpecialCharAmount(this._maskValue)-t:this._maskValue.length-t;if(e.toString().length<s)return this._createValidationError(e)}}return e&&this.maskFilled.emit(),null}onPaste(){this._justPasted=!0}onModelChange(e){(""===e||null==e)&&this._maskService.actualValue&&(this._maskService.actualValue=this._maskService.getActualValue(""))}onInput(e){const t=e.target;if(this._inputValue=t.value,this._setMask(),!this._maskValue)return void this.onChange(t.value);const s=1===t.selectionStart?t.selectionStart+this._maskService.prefix.length:t.selectionStart;let a=0,h=!1;if(this._maskService.applyValueChanges(s,this._justPasted,"Backspace"===this._code||"Delete"===this._code,(i,o)=>{this._justPasted=!1,a=i,h=o}),this._getActiveElement()!==t)return;this._position=1===this._position&&1===this._inputValue.length?null:this._position;let f=this._position?this._inputValue.length+s+a:s+("Backspace"!==this._code||h?a:0);f>this._getActualInputLength()&&(f=this._getActualInputLength()),f<0&&(f=0),t.setSelectionRange(f,f),this._position=null}onBlur(){this._maskValue&&this._maskService.clearIfNotMatchFn(),this.onTouch()}onClick(e){if(!this._maskValue)return;const t=e.target;null!==t&&null!==t.selectionStart&&t.selectionStart===t.selectionEnd&&t.selectionStart>this._maskService.prefix.length&&38!==e.keyCode&&this._maskService.showMaskTyped&&(this._maskService.maskIsShown=this._maskService.showMaskInInput(),t.setSelectionRange&&this._maskService.prefix+this._maskService.maskIsShown===t.value?(t.focus(),t.setSelectionRange(0,0)):t.selectionStart>this._maskService.actualValue.length&&t.setSelectionRange(this._maskService.actualValue.length,this._maskService.actualValue.length));const h=t.value&&t.value!==this._maskService.prefix?t.value:this._maskService.prefix+this._maskService.maskIsShown;t.value!==h&&(t.value=h),(t.selectionStart||t.selectionEnd)<=this._maskService.prefix.length?t.selectionStart=this._maskService.prefix.length:t.selectionEnd>this._getActualInputLength()&&(t.selectionEnd=this._getActualInputLength())}onKeyDown(e){if(!this._maskValue)return;this._code=e.code?e.code:e.key;const t=e.target;if(this._inputValue=t.value,this._setMask(),38===e.keyCode&&e.preventDefault(),37===e.keyCode||8===e.keyCode||46===e.keyCode){if(8===e.keyCode&&0===t.value.length&&(t.selectionStart=t.selectionEnd),8===e.keyCode&&0!==t.selectionStart)if(this.specialCharacters=this.specialCharacters?.length?this.specialCharacters:this._config.specialCharacters,this.prefix.length>1&&t.selectionStart<=this.prefix.length)t.setSelectionRange(this.prefix.length,t.selectionEnd);else if(this._inputValue.length!==t.selectionStart&&1!==t.selectionStart)for(;this.specialCharacters.includes(this._inputValue[t.selectionStart-1].toString())&&(this.prefix.length>=1&&t.selectionStart>this.prefix.length||0===this.prefix.length);)t.setSelectionRange(t.selectionStart-1,t.selectionEnd);this.checkSelectionOnDeletion(t),this._maskService.prefix.length&&t.selectionStart<=this._maskService.prefix.length&&t.selectionEnd<=this._maskService.prefix.length&&e.preventDefault();const s=t.selectionStart;8===e.keyCode&&!t.readOnly&&0===s&&t.selectionEnd===t.value.length&&0!==t.value.length&&(this._position=this._maskService.prefix?this._maskService.prefix.length:0,this._maskService.applyMask(this._maskService.prefix,this._maskService.maskExpression,this._position))}this.suffix&&this.suffix.length>1&&this._inputValue.length-this.suffix.length<t.selectionStart?t.setSelectionRange(this._inputValue.length-this.suffix.length,this._inputValue.length):(65===e.keyCode&&e.ctrlKey||65===e.keyCode&&e.metaKey)&&(t.setSelectionRange(0,this._getActualInputLength()),e.preventDefault()),this._maskService.selStart=t.selectionStart,this._maskService.selEnd=t.selectionEnd}writeValue(e){var t=this;return function j(n){return function(){var m=this,e=arguments;return new Promise(function(t,s){var a=n.apply(m,e);function h(i){D(a,t,s,h,f,"next",i)}function f(i){D(a,t,s,h,f,"throw",i)}h(void 0)})}}(function*(){"object"==typeof e&&null!==e&&"value"in e&&("disable"in e&&t.setDisabledState(Boolean(e.disable)),e=e.value),("number"==typeof e||t._maskValue.startsWith("separator"))&&(e=t._maskService.numberToString(e),Array.isArray(t.decimalMarker)||(e="."!==t.decimalMarker?e.replace(".",t.decimalMarker):e),t._maskService.isNumberValue=!0),"string"!=typeof e&&(e=""),t._inputValue=e,t._setMask(),e&&t._maskService.maskExpression||t._maskService.maskExpression&&(t._maskService.prefix||t._maskService.showMaskTyped)?(t._maskService.writingValue=!0,t._maskService.formElementProperty=["value",t._maskService.applyMask(e,t._maskService.maskExpression)],t._maskService.writingValue=!1):t._maskService.formElementProperty=["value",e],t._inputValue=e})()}registerOnChange(e){this.onChange=e,this._maskService.onChange=this.onChange}registerOnTouched(e){this.onTouch=e}_getActiveElement(e=this.document){const t=e?.activeElement?.shadowRoot;return t?.activeElement?this._getActiveElement(t):e.activeElement}checkSelectionOnDeletion(e){e.selectionStart=Math.min(Math.max(this.prefix.length,e.selectionStart),this._inputValue.length-this.suffix.length),e.selectionEnd=Math.min(Math.max(this.prefix.length,e.selectionEnd),this._inputValue.length-this.suffix.length)}setDisabledState(e){this._maskService.formElementProperty=["disabled",e]}_repeatPatternSymbols(e){return e.match(/{[0-9]+}/)&&e.split("").reduce((t,s,a)=>{if(this._start="{"===s?a:this._start,"}"!==s)return this._maskService._findSpecialChar(s)?t+s:t;this._end=a;const h=Number(e.slice(this._start+1,this._end));return t+new Array(h+1).join(e[this._start-1])},"")||e}_applyMask(){this._maskService.maskExpression=this._repeatPatternSymbols(this._maskValue||""),this._maskService.formElementProperty=["value",this._maskService.applyMask(this._inputValue,this._maskService.maskExpression)]}_validateTime(e){const t=this._maskValue.split("").filter(s=>":"!==s).length;return e&&(0==+e[e.length-1]&&e.length<t||e.length<=t-2)?this._createValidationError(e):null}_getActualInputLength(){return this._maskService.actualValue.length||this._maskService.actualValue.length+this._maskService.prefix.length}_createValidationError(e){return{mask:{requiredMask:this._maskValue,actualValue:e}}}_setMask(){this._maskExpressionArray.length>0&&this._maskExpressionArray.some(e=>{const t=this._maskService.removeMask(this._inputValue)?.length<=this._maskService.removeMask(e)?.length;if(this._inputValue&&t)return this._maskValue=e,this.maskExpression=e,this._maskService.maskExpression=e,t;this._maskValue=this._maskExpressionArray[this._maskExpressionArray.length-1],this.maskExpression=this._maskExpressionArray[this._maskExpressionArray.length-1],this._maskService.maskExpression=this._maskExpressionArray[this._maskExpressionArray.length-1]})}}return n.\u0275fac=function(e){return new(e||n)(r.Y36(N.K0),r.Y36(Z),r.Y36(P))},n.\u0275dir=r.lG2({type:n,selectors:[["input","mask",""],["textarea","mask",""]],hostBindings:function(e,t){1&e&&r.NdJ("paste",function(){return t.onPaste()})("ngModelChange",function(a){return t.onModelChange(a)})("input",function(a){return t.onInput(a)})("blur",function(){return t.onBlur()})("click",function(a){return t.onClick(a)})("keydown",function(a){return t.onKeyDown(a)})},inputs:{maskExpression:["mask","maskExpression"],specialCharacters:"specialCharacters",patterns:"patterns",prefix:"prefix",suffix:"suffix",thousandSeparator:"thousandSeparator",decimalMarker:"decimalMarker",dropSpecialCharacters:"dropSpecialCharacters",hiddenInput:"hiddenInput",showMaskTyped:"showMaskTyped",placeHolderCharacter:"placeHolderCharacter",shownMaskExpression:"shownMaskExpression",showTemplate:"showTemplate",clearIfNotMatch:"clearIfNotMatch",validation:"validation",separatorLimit:"separatorLimit",allowNegativeNumbers:"allowNegativeNumbers",leadZeroDateTime:"leadZeroDateTime",triggerOnMaskChange:"triggerOnMaskChange"},outputs:{maskFilled:"maskFilled"},exportAs:["mask","ngxMask"],features:[r._Bn([{provide:u.JU,useExisting:(0,r.Gpc)(()=>n),multi:!0},{provide:u.Cf,useExisting:(0,r.Gpc)(()=>n),multi:!0},Z]),r.TTD]}),n})();function z(n,m){return m instanceof Function?{...n,...m()}:{...n,...m}}let U=(()=>{class n{static forRoot(e){return{ngModule:n,providers:[{provide:$,useValue:e},{provide:R,useValue:B},{provide:P,useFactory:z,deps:[R,$]},F]}}static forChild(){return{ngModule:n}}}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=r.oAB({type:n}),n.\u0275inj=r.cJS({}),n})();const L=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Y(n,m){1&n&&(r.TgZ(0,"small",12),r._uU(1," Deve ter no m\xednimo 4 caracteres "),r.qZA())}function W(n,m){1&n&&(r.TgZ(0,"small",12),r._uU(1," Campo obrigat\xf3rio "),r.qZA())}function Q(n,m){if(1&n&&(r.TgZ(0,"div"),r.YNc(1,Y,2,0,"small",11),r.YNc(2,W,2,0,"small",11),r.qZA()),2&n){const e=r.oxw();r.xp6(1),r.Q6J("ngIf",e.formContato.controls.nome.hasError("minlength")),r.xp6(1),r.Q6J("ngIf",e.formContato.controls.nome.hasError("required"))}}function K(n,m){1&n&&(r.TgZ(0,"small",12),r._uU(1," Deve ter no m\xednimo 10 caracteres "),r.qZA())}function X(n,m){1&n&&(r.TgZ(0,"small",12),r._uU(1," Campo obrigat\xf3rio "),r.qZA())}function V(n,m){if(1&n&&(r.TgZ(0,"div"),r.YNc(1,K,2,0,"small",11),r.YNc(2,X,2,0,"small",11),r.qZA()),2&n){const e=r.oxw();r.xp6(1),r.Q6J("ngIf",e.formContato.controls.assunto.hasError("minlength")),r.xp6(1),r.Q6J("ngIf",e.formContato.controls.assunto.hasError("required"))}}L.KeyboardEvent||(L.KeyboardEvent=function(n,m){});const ee=[{path:"",component:(()=>{class n{constructor(e){this.fb=e,this.formContato=this.fb.group({nome:["",[u.kI.minLength(5),u.kI.required]],assunto:["",[u.kI.minLength(10),u.kI.required]],telefone:["",[u.kI.minLength(11),u.kI.required]],email:["",[u.kI.email,u.kI.required]],mensagem:["",[u.kI.minLength(20),u.kI.required]]})}ngOnInit(){}enviarFormulario(){alert("A mensagem foi enviada!"),this.formContato.reset()}}return n.\u0275fac=function(e){return new(e||n)(r.Y36(u.qu))},n.\u0275cmp=r.Xpm({type:n,selectors:[["app-contato"]],decls:15,vars:12,consts:[[1,"contact__title"],[1,"contact__container"],[1,"contact-form",3,"formGroup","ngSubmit"],["type","text","placeholder","Digite o seu nome","formControlName","nome"],[4,"ngIf"],["type","assunto","placeholder","Digite o assunto","formControlName","assunto"],["type","tel","placeholder","(__) _____-____","mask","(00) 00000-0000"],["type","email","placeholder","Digite o email","name","","id",""],["maxlength","400","placeholder","Digite a mensagem"],["type","submit",3,"disabled"],["src","https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14636.930464800284!2d-46.5491937!3d-23.4881295!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x6e4fd72917565c63!2sInternacional%20Shopping!5e0!3m2!1sen!2sbr!4v1655420290032!5m2!1sen!2sbr","width","600","height","450","allowfullscreen","","loading","lazy","referrerpolicy","no-referrer-when-downgrade",2,"border","0"],["class","error-message",4,"ngIf"],[1,"error-message"]],template:function(e,t){1&e&&(r.TgZ(0,"h2",0),r._uU(1,"Entre em contato"),r.qZA(),r.TgZ(2,"section",1)(3,"form",2),r.NdJ("ngSubmit",function(){return t.enviarFormulario()}),r._UZ(4,"input",3),r.YNc(5,Q,3,2,"div",4),r._UZ(6,"input",5),r.YNc(7,V,3,2,"div",4),r._UZ(8,"input",6)(9,"input",7)(10,"textarea",8),r.TgZ(11,"button",9),r._uU(12,"Enviar"),r.qZA()(),r.TgZ(13,"address"),r._UZ(14,"iframe",10),r.qZA()()),2&e&&(r.xp6(3),r.Q6J("formGroup",t.formContato),r.xp6(1),r.ekj("valid",t.formContato.controls.nome.valid)("invalid",t.formContato.controls.nome.invalid&&(t.formContato.controls.nome.touched||t.formContato.controls.nome.dirty)),r.xp6(1),r.Q6J("ngIf",t.formContato.controls.nome.invalid&&(t.formContato.controls.nome.touched||t.formContato.controls.nome.dirty)),r.xp6(1),r.ekj("valid",t.formContato.controls.assunto.valid)("invalid",t.formContato.controls.assunto.invalid&&(t.formContato.controls.assunto.touched||t.formContato.controls.assunto.dirty)),r.xp6(1),r.Q6J("ngIf",t.formContato.controls.assunto.invalid&&(t.formContato.controls.assunto.touched||t.formContato.controls.assunto.dirty)),r.xp6(4),r.Q6J("disabled",t.formContato.invalid))},dependencies:[N.O5,u._Y,u.Fj,u.JJ,u.JL,u.sg,u.u,q],styles:[".contact__title[_ngcontent-%COMP%]{font-size:44px;color:var(--gray);font-weight:700;padding:8px 0}.contact-form[_ngcontent-%COMP%]{display:flex;flex:1;flex-direction:column;row-gap:20px;margin-bottom:50px;min-width:300px}.contact-form[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{align-self:flex-end;background-color:var(--blue);border:none;color:#fff;font-size:20px;padding:6px 12px;width:200px}.contact-form[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover{filter:brightness(1.1)}.contact__container[_ngcontent-%COMP%]{display:flex;flex-flow:row wrap;column-gap:20px;padding:20px 0}.contact-form[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:disabled{background-color:var(--gray)}.contact-form[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:disabled:hover{filter:none}"]}),n})()}];let te=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=r.oAB({type:n}),n.\u0275inj=r.cJS({imports:[H.Bz.forChild(ee),H.Bz]}),n})(),se=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=r.oAB({type:n}),n.\u0275inj=r.cJS({imports:[N.ez,te,u.UX,U.forRoot()]}),n})()}}]);