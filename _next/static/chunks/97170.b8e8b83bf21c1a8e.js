"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[97170],{97170:(n,e,t)=>{t.r(e),t.d(e,{default:()=>a});let a=[Object.freeze(JSON.parse('{"displayName":"Beancount","fileTypes":["beancount"],"name":"beancount","patterns":[{"comment":"Comments","match":";.*","name":"comment.line.beancount"},{"begin":"^\\\\s*(poptag|pushtag)\\\\s+(#)([A-Za-z0-9\\\\-_/.]+)","beginCaptures":{"1":{"name":"support.function.beancount"},"2":{"name":"keyword.operator.tag.beancount"},"3":{"name":"entity.name.tag.beancount"}},"comment":"Tag directive","end":"(?=(^\\\\s*$|^\\\\S))","name":"meta.directive.tag.beancount","patterns":[{"include":"#comments"},{"include":"#illegal"}]},{"begin":"^\\\\s*(include)\\\\s+(\\\\\\".*\\\\\\")","beginCaptures":{"1":{"name":"support.function.beancount"},"2":{"name":"string.quoted.double.beancount"}},"comment":"Include directive","end":"(?=(^\\\\s*$|^\\\\S))","name":"meta.directive.include.beancount","patterns":[{"include":"#comments"},{"include":"#illegal"}]},{"begin":"^\\\\s*(option)\\\\s+(\\\\\\".*\\\\\\")\\\\s+(\\\\\\".*\\\\\\")","beginCaptures":{"1":{"name":"support.function.beancount"},"2":{"name":"support.variable.beancount"},"3":{"name":"string.quoted.double.beancount"}},"comment":"Option directive","end":"(?=(^\\\\s*$|^\\\\S))","name":"meta.directive.option.beancount","patterns":[{"include":"#comments"},{"include":"#illegal"}]},{"begin":"^\\\\s*(plugin)\\\\s*(\\"(.*?)\\")\\\\s*(\\".*?\\")?","beginCaptures":{"1":{"name":"support.function.beancount"},"2":{"name":"string.quoted.double.beancount"},"3":{"name":"entity.name.function.beancount"},"4":{"name":"string.quoted.double.beancount"}},"comment":"Plugin directive","end":"(?=(^\\\\s*$|^\\\\S))","name":"keyword.operator.directive.beancount","patterns":[{"include":"#comments"},{"include":"#illegal"}]},{"begin":"(\\\\d{4})([\\\\-|/])(\\\\d{2})([\\\\-|/])(\\\\d{2})\\\\s+(open|close|pad)\\\\b","beginCaptures":{"1":{"name":"constant.numeric.date.year.beancount"},"2":{"name":"punctuation.separator.beancount"},"3":{"name":"constant.numeric.date.month.beancount"},"4":{"name":"punctuation.separator.beancount"},"5":{"name":"constant.numeric.date.day.beancount"},"6":{"name":"support.function.beancount"}},"comment":"Open/Close/Pad directive","end":"(?=(^\\\\s*$|^\\\\S))","name":"meta.directive.dated.beancount","patterns":[{"include":"#comments"},{"include":"#meta"},{"include":"#account"},{"include":"#commodity"},{"match":"\\\\,","name":"punctuation.separator.beancount"},{"include":"#illegal"}]},{"begin":"(\\\\d{4})([\\\\-|/])(\\\\d{2})([\\\\-|/])(\\\\d{2})\\\\s+(custom)\\\\b","beginCaptures":{"1":{"name":"constant.numeric.date.year.beancount"},"2":{"name":"punctuation.separator.beancount"},"3":{"name":"constant.numeric.date.month.beancount"},"4":{"name":"punctuation.separator.beancount"},"5":{"name":"constant.numeric.date.day.beancount"},"6":{"name":"support.function.beancount"}},"comment":"Custom directive","end":"(?=(^\\\\s*$|^\\\\S))","name":"meta.directive.dated.beancount","patterns":[{"include":"#comments"},{"include":"#meta"},{"include":"#string"},{"include":"#bool"},{"include":"#amount"},{"include":"#number"},{"include":"#date"},{"include":"#account"},{"include":"#illegal"}]},{"begin":"(\\\\d{4})([\\\\-|/])(\\\\d{2})([\\\\-|/])(\\\\d{2})\\\\s(event)","beginCaptures":{"1":{"name":"constant.numeric.date.year.beancount"},"2":{"name":"punctuation.separator.beancount"},"3":{"name":"constant.numeric.date.month.beancount"},"4":{"name":"punctuation.separator.beancount"},"5":{"name":"constant.numeric.date.day.beancount"},"6":{"name":"support.function.directive.beancount"}},"comment":"Event directive","end":"(?=(^\\\\s*$|^\\\\S))","name":"meta.directive.dated.beancount","patterns":[{"include":"#comments"},{"include":"#meta"},{"include":"#string"},{"include":"#illegal"}]},{"begin":"(\\\\d{4})([\\\\-|/])(\\\\d{2})([\\\\-|/])(\\\\d{2})\\\\s(commodity)","beginCaptures":{"1":{"name":"constant.numeric.date.year.beancount"},"2":{"name":"punctuation.separator.beancount"},"3":{"name":"constant.numeric.date.month.beancount"},"4":{"name":"punctuation.separator.beancount"},"5":{"name":"constant.numeric.date.day.beancount"},"6":{"name":"support.function.directive.beancount"}},"comment":"Commodity directive","end":"(?=(^\\\\s*$|^\\\\S))","name":"meta.directive.dated.beancount","patterns":[{"include":"#comments"},{"include":"#meta"},{"include":"#commodity"},{"include":"#illegal"}]},{"begin":"(\\\\d{4})([\\\\-|/])(\\\\d{2})([\\\\-|/])(\\\\d{2})\\\\s(note|document)","beginCaptures":{"1":{"name":"constant.numeric.date.year.beancount"},"2":{"name":"punctuation.separator.beancount"},"3":{"name":"constant.numeric.date.month.beancount"},"4":{"name":"punctuation.separator.beancount"},"5":{"name":"constant.numeric.date.day.beancount"},"6":{"name":"support.function.directive.beancount"}},"comment":"Note/Document directive","end":"(?=(^\\\\s*$|^\\\\S))","name":"meta.directive.dated.beancount","patterns":[{"include":"#comments"},{"include":"#meta"},{"include":"#account"},{"include":"#string"},{"include":"#illegal"}]},{"begin":"(\\\\d{4})([\\\\-|/])(\\\\d{2})([\\\\-|/])(\\\\d{2})\\\\s(price)","beginCaptures":{"1":{"name":"constant.numeric.date.year.beancount"},"2":{"name":"punctuation.separator.beancount"},"3":{"name":"constant.numeric.date.month.beancount"},"4":{"name":"punctuation.separator.beancount"},"5":{"name":"constant.numeric.date.day.beancount"},"6":{"name":"support.function.directive.beancount"}},"comment":"Price directives","end":"(?=(^\\\\s*$|^\\\\S))","name":"meta.directive.dated.beancount","patterns":[{"include":"#comments"},{"include":"#meta"},{"include":"#commodity"},{"include":"#amount"},{"include":"#illegal"}]},{"begin":"(\\\\d{4})([\\\\-|/])(\\\\d{2})([\\\\-|/])(\\\\d{2})\\\\s(balance)","beginCaptures":{"1":{"name":"constant.numeric.date.year.beancount"},"2":{"name":"punctuation.separator.beancount"},"3":{"name":"constant.numeric.date.month.beancount"},"4":{"name":"punctuation.separator.beancount"},"5":{"name":"constant.numeric.date.day.beancount"},"6":{"name":"support.function.directive.beancount"}},"comment":"Balance directives","end":"(?=(^\\\\s*$|^\\\\S))","name":"meta.directive.dated.beancount","patterns":[{"include":"#comments"},{"include":"#meta"},{"include":"#account"},{"include":"#amount"},{"include":"#illegal"}]},{"begin":"(\\\\d{4})([\\\\-|/])(\\\\d{2})([\\\\-|/])(\\\\d{2})\\\\s*(txn|[*!&#?%PSTCURM])\\\\s*(\\".*?\\")?\\\\s*(\\".*?\\")?","beginCaptures":{"1":{"name":"constant.numeric.date.year.beancount"},"2":{"name":"punctuation.separator.beancount"},"3":{"name":"constant.numeric.date.month.beancount"},"4":{"name":"punctuation.separator.beancount"},"5":{"name":"constant.numeric.date.day.beancount"},"6":{"name":"support.function.directive.beancount"},"7":{"name":"string.quoted.tiers.beancount"},"8":{"name":"string.quoted.narration.beancount"}},"comment":"Transaction directive","end":"(?=(^\\\\s*$|^\\\\S))","name":"meta.directive.transaction.beancount","patterns":[{"include":"#comments"},{"include":"#posting"},{"include":"#meta"},{"include":"#tag"},{"include":"#link"},{"include":"#illegal"}]}],"repository":{"account":{"begin":"([A-Z][a-z]+)(:)","beginCaptures":{"1":{"name":"variable.language.beancount"},"2":{"name":"punctuation.separator.beancount"}},"end":"\\\\s","name":"meta.account.beancount","patterns":[{"begin":"(\\\\S+)([:]?)","beginCaptures":{"1":{"name":"variable.other.account.beancount"},"2":{"name":"punctuation.separator.beancount"}},"comment":"Sub accounts","end":"([:]?)|(\\\\s)","patterns":[{"include":"$self"},{"include":"#illegal"}]}]},"amount":{"captures":{"1":{"name":"keyword.operator.modifier.beancount"},"2":{"name":"constant.numeric.currency.beancount"},"3":{"name":"entity.name.type.commodity.beancount"}},"match":"([\\\\-|+]?)(\\\\d+(?:,\\\\d{3})*(?:\\\\.\\\\d*)?)\\\\s*([A-Z][A-Z0-9\\\\\'\\\\._\\\\-]{0,22}[A-Z0-9])","name":"meta.amount.beancount"},"bool":{"captures":{"0":{"name":"constant.language.bool.beancount"},"2":{"name":"constant.numeric.currency.beancount"},"3":{"name":"entity.name.type.commodity.beancount"}},"match":"TRUE|FALSE"},"comments":{"captures":{"1":{"name":"comment.line.beancount"}},"match":"(;.*)$"},"commodity":{"match":"([A-Z][A-Z0-9\\\\\'\\\\._\\\\-]{0,22}[A-Z0-9])","name":"entity.name.type.commodity.beancount"},"cost":{"begin":"\\\\{\\\\{?","beginCaptures":{"0":{"name":"keyword.operator.assignment.beancount"}},"end":"\\\\}\\\\}?","endCaptures":{"0":{"name":"keyword.operator.assignment.beancount"}},"name":"meta.cost.beancount","patterns":[{"include":"#amount"},{"include":"#date"},{"match":"\\\\,","name":"punctuation.separator.beancount"},{"include":"#illegal"}]},"date":{"captures":{"1":{"name":"constant.numeric.date.year.beancount"},"2":{"name":"punctuation.separator.beancount"},"3":{"name":"constant.numeric.date.month.beancount"},"4":{"name":"punctuation.separator.beancount"},"5":{"name":"constant.numeric.date.day.beancount"}},"match":"(\\\\d{4})([\\\\-|/])(\\\\d{2})([\\\\-|/])(\\\\d{2})","name":"meta.date.beancount"},"flag":{"match":"(?<=\\\\s)([*!&#?%PSTCURM])(?=\\\\s+)","name":"keyword.other.beancount"},"illegal":{"match":"[^\\\\s]","name":"invalid.illegal.unrecognized.beancount"},"link":{"captures":{"1":{"name":"keyword.operator.link.beancount"},"2":{"name":"markup.underline.link.beancount"}},"match":"(\\\\^)([A-Za-z0-9\\\\-_/.]+)"},"meta":{"begin":"^\\\\s*([a-z][A-Za-z0-9\\\\-_]+)([:])","beginCaptures":{"1":{"name":"keyword.operator.directive.beancount"},"2":{"name":"punctuation.separator.beancount"}},"end":"\\\\n","name":"meta.meta.beancount","patterns":[{"include":"#string"},{"include":"#account"},{"include":"#bool"},{"include":"#commodity"},{"include":"#date"},{"include":"#tag"},{"include":"#amount"},{"include":"#number"},{"include":"#comments"},{"include":"#illegal"}]},"number":{"captures":{"1":{"name":"keyword.operator.modifier.beancount"},"2":{"name":"constant.numeric.currency.beancount"}},"match":"([\\\\-|+]?)(\\\\d+(?:,\\\\d{3})*(?:\\\\.\\\\d*)?)"},"posting":{"begin":"^\\\\s+(?=([A-Z!]))","end":"(?=(^\\\\s*$|^\\\\S|^\\\\s*[A-Z]))","name":"meta.posting.beancount","patterns":[{"include":"#meta"},{"include":"#comments"},{"include":"#flag"},{"include":"#account"},{"include":"#amount"},{"include":"#cost"},{"include":"#date"},{"include":"#price"},{"include":"#illegal"}]},"price":{"begin":"\\\\@\\\\@?","beginCaptures":{"0":{"name":"keyword.operator.assignment.beancount"}},"end":"(?=(;|\\\\n))","name":"meta.price.beancount","patterns":[{"include":"#amount"},{"include":"#illegal"}]},"string":{"begin":"\\\\\\"","end":"\\\\\\"","name":"string.quoted.double.beancount","patterns":[{"match":"\\\\\\\\.","name":"constant.character.escape.beancount"}]},"tag":{"captures":{"1":{"name":"keyword.operator.tag.beancount"},"2":{"name":"entity.name.tag.beancount"}},"match":"(#)([A-Za-z0-9\\\\-_/.]+)"}},"scopeName":"text.beancount"}'))]}}]);