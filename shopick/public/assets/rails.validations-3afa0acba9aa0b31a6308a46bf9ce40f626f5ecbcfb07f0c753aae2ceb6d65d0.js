/*!
 * Client Side Validations - v4.2.1 (https://github.com/DavyJonesLocker/client_side_validations)
 * Copyright (c) 2016 Brian Cardarella
 * Licensed under MIT (http://opensource.org/licenses/mit-license.php)
 */
(function(){var e,t,n,i,r=[].indexOf||function(e){for(var t=0,n=this.length;n>t;t++)if(t in this&&this[t]===e)return t;return-1};e=jQuery,e.fn.disableClientSideValidations=function(){return ClientSideValidations.disable(this),this},e.fn.enableClientSideValidations=function(){return this.filter(ClientSideValidations.selectors.forms).each(function(){return ClientSideValidations.enablers.form(this)}),this.filter(ClientSideValidations.selectors.inputs).each(function(){return ClientSideValidations.enablers.input(this)}),this},e.fn.resetClientSideValidations=function(){return this.filter(ClientSideValidations.selectors.forms).each(function(){return ClientSideValidations.reset(this)}),this},e.fn.validate=function(){return this.filter(ClientSideValidations.selectors.forms).each(function(){return e(this).enableClientSideValidations()}),this},e.fn.isValid=function(r){var o;return o=e(this[0]),o.is("form")?n(o,r):t(o,i(this[0].name,r))},i=function(e,t){var n,i,r;if(n=e.match(/\[(\w+_attributes)\].*\[(\w+)\]$/))for(r in t)i=t[r],r.match("\\["+n[1]+"\\].*\\[\\]\\["+n[2]+"\\]$")&&(e=e.replace(/\[[\da-z_]+\]\[(\w+)\]$/g,"[][$1]"));return t[e]||{}},n=function(t,n){var i;return t.trigger("form:validate:before.ClientSideValidations"),i=!0,t.find(ClientSideValidations.selectors.validate_inputs).each(function(){return e(this).isValid(n)||(i=!1),!0}),i?t.trigger("form:validate:pass.ClientSideValidations"):t.trigger("form:validate:fail.ClientSideValidations"),t.trigger("form:validate:after.ClientSideValidations"),i},t=function(t,n){var i,r,o,a,s,l,u;return t.trigger("element:validate:before.ClientSideValidations"),l=function(){return t.trigger("element:validate:pass.ClientSideValidations").data("valid",null)},a=function(e){return t.trigger("element:validate:fail.ClientSideValidations",e).data("valid",!1),!1},i=function(){return t.trigger("element:validate:after.ClientSideValidations").data("valid")!==!1},o=function(e){var i,r,o,s,l,u,c,d;c=!0;for(o in e)if(i=e[o],n[o]){for(u=n[o],r=0,s=u.length;s>r;r++)if(d=u[r],l=i.call(e,t,d)){c=a(l);break}if(!c)break}return c},t.attr("name").search(/\[([^\]]*?)\]$/)>=0&&(r=t.attr("name").replace(/\[([^\]]*?)\]$/,"[_destroy]"),"1"===e("input[name='"+r+"']").val())?(l(),i()):t.data("changed")===!1?i():(t.data("changed",!1),s=ClientSideValidations.validators.local,u=ClientSideValidations.validators.remote,o(s)&&o(u)&&l(),i())},void 0===window.ClientSideValidations&&(window.ClientSideValidations={}),void 0===window.ClientSideValidations.forms&&(window.ClientSideValidations.forms={}),window.ClientSideValidations.selectors={inputs:':input:not(button):not([type="submit"])[name]:visible:enabled',validate_inputs:":input:enabled:visible[data-validate]",forms:"form[data-validate]"},window.ClientSideValidations.reset=function(t){var n,i;n=e(t),ClientSideValidations.disable(t);for(i in t.ClientSideValidations.settings.validators)t.ClientSideValidations.removeError(n.find("[name='"+i+"']"));return ClientSideValidations.enablers.form(t)},window.ClientSideValidations.disable=function(t){var n;return n=e(t),n.off(".ClientSideValidations"),n.is("form")?ClientSideValidations.disable(n.find(":input")):(n.removeData("valid"),n.removeData("changed"),n.filter(":input").each(function(){return e(this).removeAttr("data-validate")}))},window.ClientSideValidations.enablers={form:function(t){var n,i,r,o;n=e(t),t.ClientSideValidations={settings:window.ClientSideValidations.forms[n.attr("id")],addError:function(e,n){return ClientSideValidations.formBuilders[t.ClientSideValidations.settings.type].add(e,t.ClientSideValidations.settings,n)},removeError:function(e){return ClientSideValidations.formBuilders[t.ClientSideValidations.settings.type].remove(e,t.ClientSideValidations.settings)}},o={"submit.ClientSideValidations":function(e){return n.isValid(t.ClientSideValidations.settings.validators)?void 0:(e.preventDefault(),e.stopImmediatePropagation())},"ajax:beforeSend.ClientSideValidations":function(e){return e.target===this?n.isValid(t.ClientSideValidations.settings.validators):void 0},"form:validate:after.ClientSideValidations":function(e){return ClientSideValidations.callbacks.form.after(n,e)},"form:validate:before.ClientSideValidations":function(e){return ClientSideValidations.callbacks.form.before(n,e)},"form:validate:fail.ClientSideValidations":function(e){return ClientSideValidations.callbacks.form.fail(n,e)},"form:validate:pass.ClientSideValidations":function(e){return ClientSideValidations.callbacks.form.pass(n,e)}};for(r in o)i=o[r],n.on(r,i);return n.find(ClientSideValidations.selectors.inputs).each(function(){return ClientSideValidations.enablers.input(this)})},input:function(t){var n,i,r,o,a,s;i=e(t),a=t.form,n=e(a),s={"focusout.ClientSideValidations":function(){return e(this).isValid(a.ClientSideValidations.settings.validators)},"change.ClientSideValidations":function(){return e(this).data("changed",!0)},"element:validate:after.ClientSideValidations":function(t){return ClientSideValidations.callbacks.element.after(e(this),t)},"element:validate:before.ClientSideValidations":function(t){return ClientSideValidations.callbacks.element.before(e(this),t)},"element:validate:fail.ClientSideValidations":function(t,n){var i;return i=e(this),ClientSideValidations.callbacks.element.fail(i,n,function(){return a.ClientSideValidations.addError(i,n)},t)},"element:validate:pass.ClientSideValidations":function(t){var n;return n=e(this),ClientSideValidations.callbacks.element.pass(n,function(){return a.ClientSideValidations.removeError(n)},t)}};for(o in s)r=s[o],i.filter(":not(:radio):not([id$=_confirmation])").each(function(){return e(this).attr("data-validate",!0)}).on(o,r);return i.filter(":checkbox").on("change.ClientSideValidations",function(){return e(this).isValid(a.ClientSideValidations.settings.validators)}),i.filter("[id$=_confirmation]").each(function(){var t,i,s,l;if(t=e(this),i=n.find("#"+this.id.match(/(.+)_confirmation/)[1]+":input"),i[0]){s={"focusout.ClientSideValidations":function(){return i.data("changed",!0).isValid(a.ClientSideValidations.settings.validators)},"keyup.ClientSideValidations":function(){return i.data("changed",!0).isValid(a.ClientSideValidations.settings.validators)}},l=[];for(o in s)r=s[o],l.push(e("#"+t.attr("id")).on(o,r));return l}})}},window.ClientSideValidations.validators={all:function(){return e.extend({},ClientSideValidations.validators.local,ClientSideValidations.validators.remote)},local:{absence:function(e,t){return/^\s*$/.test(e.val()||"")?void 0:t.message},presence:function(e,t){return/^\s*$/.test(e.val()||"")?t.message:void 0},acceptance:function(e,t){var n;switch(e.attr("type")){case"checkbox":if(!e.prop("checked"))return t.message;break;case"text":if(e.val()!==((null!=(n=t.accept)?n.toString():void 0)||"1"))return t.message}},format:function(e,t){var n;if(n=this.presence(e,t)){if(t.allow_blank===!0)return;return n}return t["with"]&&!new RegExp(t["with"].source,t["with"].options).test(e.val())?t.message:t.without&&new RegExp(t.without.source,t.without.options).test(e.val())?t.message:void 0},numericality:function(t,n){var i,r,o,a,s,l,u;if(u=e.trim(t.val()),!ClientSideValidations.patterns.numericality.test(u)){if(n.allow_blank===!0&&this.presence(t,{message:n.messages.numericality}))return;return n.messages.numericality}if(u=u.replace(new RegExp("\\"+ClientSideValidations.number_format.delimiter,"g"),"").replace(new RegExp("\\"+ClientSideValidations.number_format.separator,"g"),"."),n.only_integer&&!/^[+-]?\d+$/.test(u))return n.messages.only_integer;i={greater_than:">",greater_than_or_equal_to:">=",equal_to:"==",less_than:"<",less_than_or_equal_to:"<="},s=e(t[0].form);for(r in i)if(l=i[r],null!=n[r]){if(!isNaN(parseFloat(n[r]))&&isFinite(n[r]))o=n[r];else{if(1!==s.find("[name*="+n[r]+"]").size())return;o=s.find("[name*="+n[r]+"]").val()}if(a=new Function("return "+u+" "+l+" "+o),!a())return n.messages[r]}return!n.odd||parseInt(u,10)%2?n.even&&parseInt(u,10)%2?n.messages.even:void 0:n.messages.odd},length:function(e,t){var n,i,r,o,a,s,l,u;if(u=t.js_tokenizer||"split('')",l=new Function("element","return (element.val()."+u+" || '').length")(e),n={is:"==",minimum:">=",maximum:"<="},i={},i.message=t.is?t.messages.is:t.minimum?t.messages.minimum:void 0,a=this.presence(e,i)){if(t.allow_blank===!0)return;return a}for(r in n)if(s=n[r],t[r]&&(o=new Function("return "+l+" "+s+" "+t[r]),!o()))return t.messages[r]},exclusion:function(e,t){var n,i,o,a,s;if(i=this.presence(e,t)){if(t.allow_blank===!0)return;return i}return t["in"]&&(a=e.val(),r.call(function(){var e,n,i,r;for(i=t["in"],r=[],e=0,n=i.length;n>e;e++)o=i[e],r.push(o.toString());return r}(),a)>=0)?t.message:t.range&&(n=t.range[0],s=t.range[1],e.val()>=n&&e.val()<=s)?t.message:void 0},inclusion:function(e,t){var n,i,o,a,s;if(i=this.presence(e,t)){if(t.allow_blank===!0)return;return i}if(t["in"]){if(a=e.val(),r.call(function(){var e,n,i,r;for(i=t["in"],r=[],e=0,n=i.length;n>e;e++)o=i[e],r.push(o.toString());return r}(),a)>=0)return;return t.message}if(t.range){if(n=t.range[0],s=t.range[1],e.val()>=n&&e.val()<=s)return;return t.message}},confirmation:function(t,n){return t.val()!==e("#"+t.attr("id")+"_confirmation").val()?n.message:void 0},uniqueness:function(t,n){var i,r,o,a,s,l,u;return o=t.attr("name"),/_attributes\]\[\d/.test(o)&&(r=o.match(/^(.+_attributes\])\[\d+\](.+)$/),a=r[1],s=r[2],u=t.val(),a&&s&&(i=t.closest("form"),l=!0,i.find(':input[name^="'+a+'"][name$="'+s+'"]').each(function(){if(e(this).attr("name")!==o){if(e(this).val()===u)return l=!1,e(this).data("notLocallyUnique",!0);if(e(this).data("notLocallyUnique"))return e(this).removeData("notLocallyUnique").data("changed",!0)}}),!l))?n.message:void 0}},remote:{uniqueness:function(t,n){var i,r,o,a,s,l,u,c;if(o=ClientSideValidations.validators.local.presence(t,n)){if(n.allow_blank===!0)return;return o}if(i={},i.case_sensitive=!!n.case_sensitive,n.id&&(i.id=n.id),n.scope){i.scope={},s=n.scope;for(r in s)l=s[r],c=t.attr("name").replace(/\[\w+\]$/,"["+r+"]"),u=e("[name='"+c+"']"),e("[name='"+c+"']:checkbox").each(function(){return this.checked?u=this:void 0}),u[0]&&u.val()!==l?(i.scope[r]=u.val(),u.unbind("change."+t.id).bind("change."+t.id,function(){return t.trigger("change.ClientSideValidations"),t.trigger("focusout.ClientSideValidations")})):i.scope[r]=l}return/_attributes\]/.test(t.attr("name"))?(a=t.attr("name").match(/\[\w+_attributes\]/g).pop().match(/\[(\w+)_attributes\]/).pop(),a+=/(\[\w+\])$/.exec(t.attr("name"))[1]):a=t.attr("name"),n["class"]&&(a=n["class"]+"["+a.split("[")[1]),i[a]=t.val(),200===e.ajax({url:ClientSideValidations.remote_validators_url_for("uniqueness"),data:i,async:!1,cache:!1}).status?n.message:void 0}}},window.ClientSideValidations.remote_validators_url_for=function(e){return null!=ClientSideValidations.remote_validators_prefix?"//"+window.location.host+"/"+ClientSideValidations.remote_validators_prefix+"/validators/"+e:"//"+window.location.host+"/validators/"+e},window.ClientSideValidations.disableValidators=function(){var e,t,n,i;if(void 0!==window.ClientSideValidations.disabled_validators){t=window.ClientSideValidations.validators.remote,n=[];for(i in t)e=t[i],r.call(window.ClientSideValidations.disabled_validators,i)>=0?n.push(delete window.ClientSideValidations.validators.remote[i]):n.push(void 0);return n}},window.ClientSideValidations.formBuilders={"ActionView::Helpers::FormBuilder":{add:function(t,n,i){var r,o,a,s;return r=e(t[0].form),t.data("valid")!==!1&&null==r.find("label.message[for='"+t.attr("id")+"']")[0]&&(o=e(n.input_tag),s=e(n.label_tag),a=r.find("label[for='"+t.attr("id")+"']:not(.message)"),t.attr("autofocus")&&t.attr("autofocus",!1),t.before(o),o.find("span#input_tag").replaceWith(t),o.find("label.message").attr("for",t.attr("id")),s.find("label.message").attr("for",t.attr("id")),s.insertAfter(a),s.find("label#label_tag").replaceWith(a)),r.find("label.message[for='"+t.attr("id")+"']").text(i)},remove:function(t,n){var i,r,o,a,s;return r=e(t[0].form),i=e(n.input_tag).attr("class"),o=t.closest("."+i.replace(/\ /g,".")),a=r.find("label[for='"+t.attr("id")+"']:not(.message)"),s=a.closest("."+i),o[0]?(o.find("#"+t.attr("id")).detach(),o.replaceWith(t),a.detach(),s.replaceWith(a)):void 0}}},window.ClientSideValidations.patterns={numericality:/^(-|\+)?(?:\d+|\d{1,3}(?:,\d{3})+)(?:\.\d*)?$/},window.ClientSideValidations.callbacks={element:{after:function(e,t){},before:function(e,t){},fail:function(e,t,n,i){return n()},pass:function(e,t,n){return t()}},form:{after:function(e,t){},before:function(e,t){},fail:function(e,t){},pass:function(e,t){}}},e(document).bind(window.Turbolinks?"page:change":"ready",function(){return ClientSideValidations.disableValidators(),e(ClientSideValidations.selectors.forms).validate()})}).call(this);