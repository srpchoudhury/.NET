/*! 20230105181553
* Dynamsoft JavaScript Library
* Product: Dynamsoft Web Twain
* Web Site: https://www.dynamsoft.com
*
* Copyright 2023, Dynamsoft Corporation
* Author: Dynamsoft Support Team
*
* Module: Upload
* Version: 18.1
* 
*/
var Dynamsoft=window.Dynamsoft||{};!function(e){e.DWT||(e.DWT={}),e.Lib||(e.Lib={})}(Dynamsoft),Dynamsoft.aryAddonReadyFun=Dynamsoft.aryAddonReadyFun||[],Dynamsoft.AddonReady=Dynamsoft.AddonReady||function(e){Dynamsoft.aryAddonReadyFun.push(e)},Dynamsoft.AddonReady(function(u,e){Dynamsoft.DWT.EnumTransferErrorCode={TRANS_OK:0,TRANS_URL_MALFFORMAT:1,TRANS_FAILED_RESOLVE_PROXY:2,TRANS_FAILED_RESOLVE_HOST:3,TRANS_FAILED_CONNECT:4,TRANS_REMOTE_ACCESS_DENIED:5,TRANS_PARTIAL_FILE:6,TRANS_UPLOAD_FAILED:7,TRANS_READ_FAILED:8,TRANS_OUT_OF_MEMORY:9,TRANS_REMOTE_FULL_DISK:10,TRANS_OPERATION_TIMEOUT:11,TRANS_SERVICE_ERROR_404:12,TRANS_SERVICE_ERROR_500:13,TRANS_SERVICE_ERROR_503:14,TRANS_SERVICE_ERROR:15,TRANS_NOT_SEND:16,TRANS_WAITFOR_SEND:17,TRANS_SENDING:18,TRANS_PAUSE:19,TRANS_FINISHED:20,TRANS_NULL_POINTER:21,TRANS_INVALID_ID:22,TRANS_Failed:23,TRANS_SERVICE_ERROR_MORE_THAN_500:24,TRANS_SERVICE_ERROR_LESS_THAN_200:25,TRANS_SERVICE_ERROR_MORE_THAN_300:26,TRANS_CANNOT_FINDFILE:27,TRANS_ABORT:28,TRANS_NOT_FINISHED:29,TRANS_TASK_PREPARE_INIT:30,TRANS_TASK_INIT:31,TRANS_BEYOND_MAXSIZE:32};function r(){var e,n=!1,t=Dynamsoft.navInfoSync.bMobile;return Dynamsoft.DWT&&(n=!1===Dynamsoft.Lib.product.UseLocalService),Dynamsoft.navInfo&&(e=Dynamsoft.navInfo,t=t||e.bPad||e.biPhone||e.biPad),n||t}var f=Dynamsoft,a=Dynamsoft.dcp,i=[1,7,2,"1026"],c="upload_"+i.join(""),n={Version:"1.0",HttpVersion:"1.1",ServerUrl:"",FileName:"",VERIFYPEER:!1,VERIFYHOST:!1,BlockSize:10240,ThreadNum:1,OnUploadTransferPercentage:function(e,n){},OnRunSuccess:function(e){},OnRunFailure:function(e,n,t){}},p=0,m="",l=function(){p=-1,m="The zip file that contains the upload library (.dll) is invalid."},F=function(){p=-2,m="Upload failed because the url to upload to is invalid."},d=function(e,n,t){p=-3,e?m="Upload cancelled.":(m=n&&""!=n?"Upload failed with error: "+n:"Upload failed.",n&&""!=n&&(m=m+"("+t+")"))},E=function(){p=-4,m="Upload failed because the file to upload has invalid content."},t=function(){p=-5,m="Invalid upload job id."},R=function(){p=-6,m="Cannot create an upload job."},S=function(){p=-7,m="The file name is incorrect in the upload job."},o=function(){p=-8,m="Can not cancel all jobs when at least one job is still being created."},s=function(){p=-9,m="The zip file that contains the upload library (.dll) download failed."},T=function(){p=-2400,m="File uploader addon doesn't work under current settings."},D=function(){p=0,m=""};function _(){}function y(e){this.job=e}function U(e){this.job=e}_.prototype={runWaiting:0,CreateJob:function(){var e={HttpHeader:{},documents:[],formFields:[],bEvent:!1};return u.mix(e,n),e.SourceValue=new y(e),e.FormField=new U(e),e},Run:function(o){var e,r=this,n='""',t=o.ServerUrl,a="";if(!u.isString(t)||""==t)return o.id=-1,F(),!o.bEvent&&u.isFunction(o.OnRunFailure)&&(o.bEvent=!0,o.OnRunFailure(o,p,m),o.bEvent=!1),!1;if(!o.documents||!u.isArray(o.documents)||o.documents.length<=0)return o.id=-1,E(),!o.bEvent&&u.isFunction(o.OnRunFailure)&&(o.bEvent=!0,o.OnRunFailure(o,p,m),o.bEvent=!1),!1;if(!o.ar||!o.cu){Dynamsoft.Lib.License.isLicenseMixed(null,!0)||Dynamsoft.Lib.License.reparseProductKey();var i=Dynamsoft.DWT.licenseException;if(0!=i.code)return o.id=-1,p=i.code,m=i.message,!o.bEvent&&u.isFunction(o.OnRunFailure)&&(o.bEvent=!0,o.OnRunFailure(o,p,m),o.bEvent=!1),!1;if(Dynamsoft.Lib.License.isLTS())return Dynamsoft.DWT.lglic(Dynamsoft.DWT.EnumInstance.dwt_desktop,"").then(function(e){o.ar=e.ar,o.cu=e.cu,r.Run(o)}),!0;u.product.refProductKey&&(n='"'+u.product.refProductKey+'"')}for(o.Url=t,delete o.ServerUrl,e=0;e<o.documents;e++){var l=o.documents[e];if(!u.isString(l.files)||""==l.files)return o.id=-1,S(),!o.bEvent&&u.isFunction(o.OnRunFailure)&&(o.bEvent=!0,o.OnRunFailure(o,p,m),o.bEvent=!1),!1;u.isString(l.remoteName)&&""!=l.remoteName||(l.remoteName="RemoteFile")}var i=o.SourceValue,d=(delete o.SourceValue,o.FormField),s=(delete o.FormField,u.stringify(o)),s=u.replaceAll(s,'"',"'");o.ServerUrl=t,delete o.Url,o.SourceValue=i,o.FormField=d,t=['{"id":"',1,'","method":"RunUploadFile","version":"',c,'","parameter":[',n,',"',s,'"'],o.ar&&o.cu?(a=[',"',o.ar,'","',o.cu,'",0]}'].join(""),delete o.ar,delete o.cu,t.push(a)):t.push("]}"),i=t.join(""),r.runWaiting++;return Dynamsoft.FileUploader._sendCmd("RunUploadFile",i,function(e){var n;r.runWaiting--,e&&((n=e.UploadId)&&0<n?(o.id=n,f.FileUploader.map[o.id]=o,f.FileUploader.ids.push(e.UploadId),o.OnUploadTransferPercentage&&o.OnUploadTransferPercentage(o,0)):(n=e.errorcode,e=e.errorstring,n&&e?(p=n,m=e):R(),!o.bEvent&&u.isFunction(o.OnRunFailure)&&(o.bEvent=!0,o.OnRunFailure(o,p,m),o.bEvent=!1)))},function(e,n,t){r.runWaiting--,f.FileUploader.parseHttpErrors(e,n,t),!o.bEvent&&u.isFunction(o.OnRunFailure)&&(o.bEvent=!0,o.OnRunFailure(o,p,m),o.bEvent=!1)}),!0},Cancel:function(o){var e;return!o.id||o.id<0?(t(),!o.bEvent&&u.isFunction(o.OnRunFailure)&&(o.bEvent=!0,o.OnRunFailure(o,p,m),o.bEvent=!1),!1):(e='{"id":"1","method":"DeleteUploadTask","version":"'+c+'","parameter":["'+o.id+'"]}',Dynamsoft.FileUploader._sendCmd("DeleteUploadTask",e,function(e){f.FileUploader.deleteJobById(o.id)},function(e,n,t){f.FileUploader.parseHttpErrors(e,n,t),!o.bEvent&&u.isFunction(o.OnRunFailure)&&(o.bEvent=!0,o.OnRunFailure(o,p,m),o.bEvent=!1)}),!0)},CancelAllUpload:function(){var t=f.FileUploader.ids,e='{"id":"1","method":"DeleteUploadTask","version":"'+c+'","parameter":["'+t.join(",")+'"]}';return 0<this.runWaiting?(o(),!1):(this.runWaiting<0&&(this.runWaiting=0),t.length<=0||Dynamsoft.FileUploader._sendCmd("DeleteUploadTask",e,function(e){for(var n=0;n<t.length;n++)f.FileUploader.deleteJobById(t[n]);f.FileUploader.ids=[],f.FileUploader.map=[]},function(e,n,t){f.FileUploader.parseHttpErrors(e,n,t)}),!0)},OnUploadTransferPercentage:function(e,n){},OnRunSuccess:function(e){},OnRunFailure:function(e,n,t){}},(f.SourceValue=y).prototype.Add=function(e,n,t){var o=this.job;u.isString(e)&&""!=e?(t=t||"RemoteFile",e=Dynamsoft.Lib.replaceAll(e,"\\\\","\\\\"),o.documents.push({files:[e],fileName:n,remoteName:t})):(S(),!o.bEvent&&u.isFunction(o.OnRunFailure)&&(o.bEvent=!0,o.OnRunFailure(o,p,m),o.bEvent=!1))},f.FormField=U,f.FileUploader={ids:[],map:{},port:18625,protocol:"https://",ip:"127.0.0.1",wsUrl:"",running:!(U.prototype.Add=function(e,n){var t,o,r=n,a=e;if(null==r&&(r=""),!u.isString(a)||""==a||!u.isString(r))return!1;if(r=encodeURI(r),-1<(a=encodeURI(a)).indexOf("'")||-1<r.indexOf("'"))return!1;for(t=0;t<this.job.formFields.length;t++)if((o=this.job.formFields[t]).name==a)return o.value=r,!0;return this.job.formFields.push({name:a,value:r}),!0}),ws:null,nextLoopTime:600,deleteJobById:function(e){if(D(),r())return T(),!1;var n;if(e){for(n=0;n<f.FileUploader.ids.length;n++)if(e==f.FileUploader.ids[n]){f.FileUploader.ids.splice(n,1);break}var t=f.FileUploader.map[e];for(t.SourceValue.job=null,delete t.SourceValue,t.FormField.job=null,delete t.FormField,delete f.FileUploader.map[e],n=t.documents.length-1;0<=n;n--)t.documents.splice(n,1);for(n=t.formFields.length-1;0<=n;n--)t.formFields.splice(n,1);var o='{"id":"1","method":"DeleteUploadTask","version":"'+c+'","parameter":["'+e+'"]}';Dynamsoft.FileUploader._sendCmd("DeleteUploadTask",o)}},_sendCmdByWS:function(e,n,t){var o=f.FileUploader.ws;return o&&o.readyState!=Dynamsoft.DWT.EnumDWT_WebsocketReadyState.CLOSING&&o.readyState!=Dynamsoft.DWT.EnumDWT_WebsocketReadyState.CLOSED||(o=Dynamsoft.DWT.NetManager.newWebsocket(f.FileUploader.wsUrl),f.FileUploader.ws=o),Dynamsoft.DWT.NetManager.postStringDataByWS(o,e).then(function(e){e=u.parse(e);e&&"result"in e?u.isFunction(n)&&n(e.result):u.isFunction(t)&&t()},t),!0},_sendCmd:function(e,n,t,o){return Dynamsoft.DWT.ConnectWithSocket?_sendCmdByWS(n,t,o):(e=[f.FileUploader.protocol,f.FileUploader.ip,":",f.FileUploader.port,"/dcp/",c,"/",e,"?type=1&dsver=",i.join(""),"&ts=",u.now()].join(""),u.ajax({url:e,method:"post",dataType:"json",processData:!1,data:n,onSuccess:t,onError:o}))},parseHttpErrors:function(e,n,t){var o,e=e&&u.isArray(e)&&2<e.length?(o=e[1],e[2]):(o=n,t);2==e.state&&0==e.status?"abort"===e.statusText?d(!0):F():d(!1,o,e.status)},loadHttpBlob:function(e,n,t,o,r,a,i){e={method:e,url:n,dataType:"blob",async:t,onSuccess:o,onError:function(e,n,t){f.FileUploader.parseHttpErrors(e,n,t),u.isFunction(r)&&r()}};u.isFunction(a)&&(e.beforeSend=function(e){e.addEventListener("progress",function(e){delete e.totalSize,delete e.position,a(e)},!1)}),u.ajax(e)},_OnPercentDone:function(){},Download:function(e,n,t){var o;return u.isString(e)?f.FileUploader.loadHttpBlob("get",e,!!(o=function(){return s(),u.isFunction(t)&&t(p,m),!1}),function(e){a.loadZip(e,100,n,o)},o,!1):(l(),u.isFunction(t)&&t(p,m),!1)},Init:function(e,t,n){if(D(),r())return T(),u.isFunction(n)&&n(p,m),!1;function o(){var e,n=Dynamsoft.navInfoSync.bSSL?(e="https://",Dynamsoft.dcp.SSLPort):(e="http://",Dynamsoft.dcp.Port);f.FileUploader.port=n,f.FileUploader.protocol=e,f.FileUploader.ip=Dynamsoft.DWT.Host,f.FileUploader.wsUrl=Dynamsoft.DWT.NetManager.getWsUrl(Dynamsoft.DWT.Host,n),f.FileUploader.running=!0,t(new _),setTimeout(f.FileUploader.StatusLoop,500)}Dynamsoft.dcp.detect.bConnected?o():Dynamsoft.DWT.NetManager.checkModuleManager(o,n)},Close:function(){var e;Dynamsoft.DWT.ConnectWithSocket&&(e=Dynamsoft.FileUploader.ws)&&(e.readyState!=Dynamsoft.DWT.EnumDWT_WebsocketReadyState.CLOSED&&e.readyState!=Dynamsoft.DWT.EnumDWT_WebsocketReadyState.CLOSING&&e.close(),Dynamsoft.FileUploader.ws=null),Dynamsoft.FileUploader.running=!1},VersionInfo:function(e,o){var n;return D(),r()?(T(),u.isFunction(o)&&o(p,m),!1):(n='{"id":"1","method":"VersionInfo","version":"'+c+'","parameter":[]}',Dynamsoft.FileUploader._sendCmd("VersionInfo",n,e,function(e,n,t){f.FileUploader.parseHttpErrors(e,n,t),u.isFunction(o)&&o(p,m)}),!0)},StatusLoop:function(){return D(),r()?(T(),!1):(f.FileUploader.GetUploadStatus(),f.FileUploader.running&&setTimeout(f.FileUploader.StatusLoop,f.FileUploader.nextLoopTime),!0)},GetUploadStatus:function(){if(D(),!(f.FileUploader.ids.length<=0)){if(r())return T(),!1;var e='{"id":"1","method":"GetUploadStatus","version":"'+c+'","parameter":["'+f.FileUploader.ids.join(",")+'"]}';Dynamsoft.FileUploader._sendCmd("GetUploadStatus",e,function(e){if(u.isArray(e))for(var n=0;n<e.length;n++){var t=(l=e[n]).id,o=f.FileUploader.map[t],r=l.percentage,a=l.errorcode,i=l.response,l=l.errorstring;o&&(a==Dynamsoft.DWT.EnumTransferErrorCode.TRANS_FINISHED?(o.OnUploadTransferPercentage(o,100,b(i)),!o.bEvent&&u.isFunction(o.OnRunSuccess)&&(o.bEvent=!0,o.OnRunSuccess(o,b(i)),o.bEvent=!1),f.FileUploader.deleteJobById(t)):a==Dynamsoft.DWT.EnumTransferErrorCode.TRANS_OK||a==Dynamsoft.DWT.EnumTransferErrorCode.TRANS_NOT_SEND||a==Dynamsoft.DWT.EnumTransferErrorCode.TRANS_WAITFOR_SEND||a==Dynamsoft.DWT.EnumTransferErrorCode.TRANS_SENDING||a==Dynamsoft.DWT.EnumTransferErrorCode.TRANS_PAUSE||a==Dynamsoft.DWT.EnumTransferErrorCode.TRANS_TASK_PREPARE_INIT||a==Dynamsoft.DWT.EnumTransferErrorCode.TRANS_TASK_INIT?o.OnUploadTransferPercentage(o,r,b(i)):(!o.bEvent&&u.isFunction(o.OnRunFailure)&&(o.bEvent=!0,o.OnRunFailure(o,a,l,b(i)),o.bEvent=!1),f.FileUploader.deleteJobById(t)))}},function(e,n,t){})}return!0}};var A=new Array(-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,62,-1,-1,-1,63,52,53,54,55,56,57,58,59,60,61,-1,-1,-1,-1,-1,-1,-1,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,-1,-1,-1,-1,-1,-1,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,-1,-1,-1,-1,-1);function b(e){for(var n,t,o,r,a=e.length,i=0,l="";i<a;){for(;n=A[255&e.charCodeAt(i++)],i<a&&-1==n;);if(-1==n)break;for(;t=A[255&e.charCodeAt(i++)],i<a&&-1==t;);if(-1==t)break;l+=String.fromCharCode(n<<2|(48&t)>>4);do{if(61==(o=255&e.charCodeAt(i++)))return l}while(o=A[o],i<a&&-1==o);if(-1==o)break;l+=String.fromCharCode((15&t)<<4|(60&o)>>2);do{if(61==(r=255&e.charCodeAt(i++)))return l}while(r=A[r],i<a&&-1==r);if(-1==r)break;l+=String.fromCharCode((3&o)<<6|r)}return l}});