(()=>{"use strict";function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function t(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),Object.defineProperty(t,"prototype",{writable:!1}),t}function n(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var r=t((function e(t,r,o,i){var u=this,a=o.openFullSizePopup,c=o.handleDeleteIconClick,l=o.handleLikeClick;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),n(this,"_isOwnerCard",(function(){u._object.owner._id!==u._dataId&&u._templateDeleteButton.remove()})),n(this,"_checkOwnerLike",(function(){u._object.likes.forEach((function(){u._checkSomeLikes(u._object)?u._templateButton.classList.add("cards__like-button_active"):u._templateButton.classList.remove("cards__like-button_active")}))})),n(this,"_checkSomeLikes",(function(e){return e.likes.some((function(e){return e._id==u._dataId}))})),n(this,"removeCard",(function(e){e.remove(),e=null})),n(this,"createCard",(function(){return u._isOwnerCard(),u._checkOwnerLike(),u._templateName.textContent=u._name,u._templateImg.src=u._link,u._templateImg.alt=u._name,u._setEventListeners(),u._handleLikesNumber(u._object),u._templateElement})),n(this,"_setEventListeners",(function(){u._templateDeleteButton.addEventListener("click",(function(){return u._handleDeleteIconClick(u.removeCard,u._templateElement,u._id)})),u._templateImg.addEventListener("click",(function(){u._openFullSizePopup(u._link,u._name)})),u._templateButton.addEventListener("click",(function(){u._handleLikeClick(u._checkSomeLikes,u._handleLikesNumber,u._id,u.deleteLike,u.addLike)}))})),n(this,"_handleLikesNumber",(function(e){u._templateLikesNumber.textContent=e.likes.length})),n(this,"deleteLike",(function(){u._templateButton.classList.remove("cards__like-button_active")})),n(this,"addLike",(function(){u._templateButton.classList.add("cards__like-button_active")})),this._dataId=r,this._object=t,this._name=t.name,this._link=t.link,this._id=t._id,this._templateContainer=i,this._openFullSizePopup=a,this._handleDeleteIconClick=c,this._handleLikeClick=l,this._templateElement=this._templateContainer.content.firstElementChild.cloneNode(!0),this._templateButton=this._templateElement.querySelector(".cards__like-button"),this._templateName=this._templateElement.querySelector(".cards__name"),this._templateImg=this._templateElement.querySelector(".cards__place-img"),this._templateLikesNumber=this._templateElement.querySelector(".cards__like-numbers"),this._templateDeleteButton=this._templateElement.querySelector(".cards__delete-button")}));function o(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function i(e,t,n){return t&&o(e.prototype,t),n&&o(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function u(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var a=i((function e(t,n){var r=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),u(this,"_showInputError",(function(e,t){var n=r._formElement.querySelector("#error-".concat(e.id));e.classList.add(r._inputErrorClass),n.textContent=t,n.classList.add(r._errorClass)})),u(this,"_hideInputError",(function(e){var t=r._formElement.querySelector("#error-".concat(e.id));e.classList.remove(r._inputErrorClass),t.classList.remove(r._errorClass),t.textContent=""})),u(this,"_checkInputValidity",(function(e){e.validity.valid?r._hideInputError(e):r._showInputError(e,e.validationMessage)})),u(this,"_setEventListeners",(function(){r._inputList.forEach((function(e){e.addEventListener("input",(function(){r._checkInputValidity(e),r.toggleButtonState()}))}))})),u(this,"_hasInvalidInput",(function(){return r._inputList.some((function(e){return!e.validity.valid}))})),u(this,"toggleButtonState",(function(){r._hasInvalidInput()?(r._buttonElement.classList.add(r._inactiveButtonClass),r._buttonElement.setAttribute("disabled","disabled")):(r._buttonElement.classList.remove(r._inactiveButtonClass),r._buttonElement.removeAttribute("disabled"))})),u(this,"addDisabledAttribute",(function(){r._buttonElement.setAttribute("disabled","disabled")})),u(this,"removeDisabledAttribute",(function(){r._buttonElement.removeAttribute("disabled")})),u(this,"enableValidation",(function(){r.toggleButtonState(),r._setEventListeners()})),this._formElement=n,this._inputSelector=t.inputSelector,this._submitButtonSelector=t.submitButtonSelector,this._inactiveButtonClass=t.inactiveButtonClass,this._inputErrorClass=t.inputErrorClass,this._errorClass=t.errorClass,this._editButtonSelector=t.editButtonSelector,this._addButtonSelector=t.addButtonSelector,this._inputList=Array.from(this._formElement.querySelectorAll(this._inputSelector)),this._buttonElement=this._formElement.querySelector(this._submitButtonSelector)}));function c(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var l=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._popupElement=document.querySelector(t),this._popupCloseButton=this._popupElement.querySelector(".popup__close-button"),this._handleEscClose=this._handleEscClose.bind(this),this.close=this.close.bind(this)}var t,n;return t=e,(n=[{key:"open",value:function(){this._popupElement.classList.add("popup_opened"),document.addEventListener("keydown",this._handleEscClose)}},{key:"close",value:function(){this._popupElement.classList.remove("popup_opened"),document.removeEventListener("keydown",this._handleEscClose)}},{key:"_handleEscClose",value:function(e){"Escape"===e.key&&this.close()}},{key:"setEventListeners",value:function(){var e=this;this._popupCloseButton.addEventListener("click",(function(){e.close()})),this._popupElement.addEventListener("mousedown",(function(t){t.target===t.currentTarget&&e.close()}))}}])&&c(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function s(e){return s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},s(e)}function p(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function f(e,t){return f=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},f(e,t)}function _(e,t){if(t&&("object"===s(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return d(e)}function d(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function m(){return m="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=h(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},m.apply(this,arguments)}function h(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=y(e)););return e}function y(e){return y=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},y(e)}var b=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&f(e,t)}(u,e);var t,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=y(r);if(o){var n=y(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return _(this,e)});function u(e){var t,n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),m((t=d(n=i.call(this,e)),y(u.prototype)),"_popupElement",t),n._popupFullSizeImg=n._popupElement.querySelector(".popup__image"),n._popupFullSizePlaceName=n._popupElement.querySelector(".popup__place-name"),n}return t=u,(n=[{key:"open",value:function(e,t){this._popupFullSizeImg.src=e,this._popupFullSizeImg.alt=t,this._popupFullSizePlaceName.textContent=t,m(y(u.prototype),"open",this).call(this)}}])&&p(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),u}(l);function v(e){return v="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},v(e)}function E(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function S(){return S="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=w(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},S.apply(this,arguments)}function w(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=L(e)););return e}function g(e,t){return g=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},g(e,t)}function k(e,t){if(t&&("object"===v(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return O(e)}function O(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function L(e){return L=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},L(e)}function C(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var j=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&g(e,t)}(u,e);var t,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=L(r);if(o){var n=L(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return k(this,e)});function u(e,t){var n,r=t.submitForm;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),C(O(n=i.call(this,e)),"_getInputValues",(function(){return n._formValues={},n._inputList.forEach((function(e){n._formValues[e.id]=e.value})),n._formValues})),C(O(n),"_handleSubmitListener",(function(e){n.renderLoading(!0),e.preventDefault(),n._values=n._getInputValues(),n._submitForm(n._values,n.close,n.renderLoading)})),C(O(n),"renderLoading",(function(e){return n._popupButtonSubmit.textContent=e?"Сохранение...":"Сохранить"})),n._submitForm=r,n._inputList=n._popupElement.querySelectorAll(".popup__input"),n._popupForm=n._popupElement.querySelector(".popup__form"),n._popupButtonSubmit=n._popupForm.querySelector(".popup__submit"),n._handleSubmitListener=n._handleSubmitListener.bind(O(n)),n}return t=u,(n=[{key:"setEventListeners",value:function(){S(L(u.prototype),"setEventListeners",this).call(this),this._popupForm.addEventListener("submit",this._handleSubmitListener)}},{key:"close",value:function(){S(L(u.prototype),"close",this).call(this),this._popupForm.reset()}}])&&E(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),u}(l);function P(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function I(e,t,n){return t&&P(e.prototype,t),n&&P(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function q(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var B=I((function e(t){var n=this,r=t.profileNameSelector,o=t.profileEmploymentSelector,i=t.profileAvatarSelector;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),q(this,"getUserInfo",(function(){return n._userInfo={},n._userInfo[n._profileName.id]=n._profileName.textContent,n._userInfo[n._profileEmployment.id]=n._profileEmployment.textContent,n._userInfo})),q(this,"setUserInfo",(function(e){var t=e.name,r=e.about,o=e.avatar;n._profileName.textContent=t,n._profileEmployment.textContent=r,n._profileAvatar.src=o,n._profileAvatar.alt=t})),this._profileName=document.querySelector(r),this._profileEmployment=document.querySelector(o),this._profileAvatar=document.querySelector(i)})),R=document.querySelector("#template"),N=document.querySelector(".profile__avatar"),A=document.querySelector(".profile__avatar-button"),D=document.querySelector("#popup-avatar"),F=document.querySelector(".profile__edit-button"),T=document.querySelector("#popup-edit"),z=(T.querySelector(".popup__close-button"),document.querySelector(".profile__name"),T.querySelector(".popup__input_type_name")),U=(document.querySelector(".profile__employment"),T.querySelector(".popup__input_type_employment")),x=(T.querySelector(".popup__container"),document.querySelector("#popup-add")),V=(x.querySelector(".popup__input_type_name"),x.querySelector(".popup__input_type_employment"),document.querySelector(".profile__add-button")),J=(x.querySelector(".popup__close-button"),x.querySelector(".popup__form"),document.querySelector("#popup-full-size")),G=(J.querySelector(".popup__image"),document.querySelector(".popup__place-name"),J.querySelector(".popup__close-button"),{popupAdd:"#popup-add",popupEdit:"#popup-edit",inputSelector:".popup__input",submitButtonSelector:".popup__submit",inactiveButtonClass:"popup__submit_disabled",inputErrorClass:"popup__input_type_error",errorClass:"popup__span-error_type_active",editButtonSelector:".profile__edit-button",addButtonSelector:".profile__add-button"});function H(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function M(e,t,n){return t&&H(e.prototype,t),n&&H(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function K(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var Q=M((function e(t,n){var r=this,o=t.renderer;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),K(this,"addNewItem",(function(e){r._containerElement.prepend(e)})),K(this,"addItems",(function(e){r._containerElement.append(e)})),K(this,"renderItems",(function(e,t){e.forEach((function(e){r._renderer(e,t)}))})),this._renderer=o,this._containerElement=document.querySelector(n)}));function W(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function X(e,t,n){return t&&W(e.prototype,t),n&&W(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function Y(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var Z=X((function e(t,n){var r=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),Y(this,"_returnResult",(function(e){return e.ok?e.json():Promise.reject("Something gone wrong")})),Y(this,"getCardsInfo",(function(e){return fetch("".concat(r._baseUrl).concat(e),{method:"GET",headers:{authorization:r._authorization}}).then((function(e){return r._returnResult(e)}))})),Y(this,"getUserInfo",(function(e){return fetch("".concat(r._baseUrl).concat(e),{method:"GET",headers:{authorization:r._authorization}}).then((function(e){return r._returnResult(e)}))})),Y(this,"patchNewInfo",(function(e,t){return fetch("".concat(r._baseUrl).concat(e),{method:"PATCH",headers:r._headers,body:JSON.stringify(t)}).then((function(e){return r._returnResult(e)}))})),Y(this,"postNewCard",(function(e,t){return fetch("".concat(r._baseUrl).concat(e),{method:"POST",headers:r._headers,body:JSON.stringify(t)}).then((function(e){return r._returnResult(e)}))})),Y(this,"deleteCard",(function(e){return fetch("".concat(r._baseUrl).concat(e),{method:"DELETE",headers:{authorization:r._authorization}}).then((function(e){return r._returnResult(e)}))})),Y(this,"putCardLike",(function(e){return fetch("".concat(r._baseUrl).concat(e),{method:"PUT",headers:{authorization:r._authorization}}).then((function(e){return r._returnResult(e)}))})),Y(this,"deleteCardLike",(function(e){return fetch("".concat(r._baseUrl).concat(e),{method:"DELETE",headers:{authorization:r._authorization}}).then((function(e){return r._returnResult(e)}))})),Y(this,"changeAvatar",(function(e,t){return fetch("".concat(r._baseUrl).concat(e),{method:"PATCH",headers:r._headers,body:JSON.stringify(t)}).then((function(e){return r._returnResult(e)}))})),this._baseUrl=t,this._headers=n,this._authorization=this._headers.authorization}));function $(e){return $="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},$(e)}function ee(e,t){return ee=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},ee(e,t)}function te(e,t){if(t&&("object"===$(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return ne(e)}function ne(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function re(){return re="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=oe(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},re.apply(this,arguments)}function oe(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=ie(e)););return e}function ie(e){return ie=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},ie(e)}function ue(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var ae,ce=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&ee(e,t)}(i,e);var t,n,r,o=(n=i,r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=ie(n);if(r){var o=ie(this).constructor;e=Reflect.construct(t,arguments,o)}else e=t.apply(this,arguments);return te(this,e)});function i(e,t){var n,r,u,a=t.submitForm;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,i),ue(ne(u=o.call(this,e)),"open",(function(e,t,r){re((n=ne(u),ie(i.prototype)),"open",n).call(n),u._element=t,u._id=r,u._removeCard=e})),ue(ne(u),"setEventListeners",(function(){re((r=ne(u),ie(i.prototype)),"setEventListeners",r).call(r),u._popupForm.addEventListener("submit",(function(e){e.preventDefault(),u._submitForm(u._removeCard,u._element,u._id,u.close)}))})),u._submitForm=a,u._popupForm=u._popupElement.querySelector(".popup__form"),u}return t=i,Object.defineProperty(t,"prototype",{writable:!1}),t}(l),le=new B({profileNameSelector:".profile__name",profileEmploymentSelector:".profile__employment",profileAvatarSelector:".profile__avatar"}),se=new Z("https://nomoreparties.co/v1/cohort-41/",{authorization:"75fdb49e-7217-4f03-ae58-c16a91160381","Content-Type":"application/json"});Promise.all([se.getUserInfo("users/me"),se.getCardsInfo("cards")]).then((function(e){var t=e[0],n=e[1];ae=t._id,le.setUserInfo(t),_e.renderItems(n,ae)})).catch((function(e){alert(e)}));var pe=new ce("#popup-confidence",{submitForm:function(e,t,n,r){se.deleteCard("cards/".concat(n)).then((function(){e(t)})).then((function(){r()})).catch((function(e){alert(e)}))}});function fe(e,t){return new r(e,t,{openFullSizePopup:function(e,t){ye.open(e,t)},handleDeleteIconClick:function(e,t,n){pe.open(e,t,n)},handleLikeClick:function(t,n,r,o,i){t(e)?se.deleteCardLike("cards/".concat(r,"/likes")).then((function(e){return o(),n(e),e})).then((function(t){return e=t})).catch((function(e){alert(e)})):se.putCardLike("cards/".concat(r,"/likes")).then((function(e){return i(),n(e),e})).then((function(t){return e=t})).catch((function(e){alert(e)}))}},R).createCard()}pe.setEventListeners();var _e=new Q({renderer:function(e,t){var n=fe(e,t);_e.addItems(n)}},".cards"),de=new a(G,T);de.enableValidation();var me=new a(G,x);me.enableValidation();var he=new a(G,D);he.enableValidation();var ye=new b("#popup-full-size");ye.setEventListeners();var be=new j("#popup-edit",{submitForm:function(e,t,n){de.addDisabledAttribute(),se.patchNewInfo("users/me",{name:e.name,about:e.employment}).then((function(e){le.setUserInfo(e)})).then((function(){t()})).catch((function(e){alert(e)})).finally((function(){de.removeDisabledAttribute,n(!1)}))}});be.setEventListeners();var ve=new j("#popup-add",{submitForm:function(e,t,n){me.addDisabledAttribute(),se.postNewCard("cards",{name:e.place,link:e.url}).then((function(e){var t=fe(e,ae);_e.addNewItem(t)})).then((function(){t()})).catch((function(e){alert(e)})).finally((function(){me.removeDisabledAttribute,n(!1)}))}});ve.setEventListeners();var Ee=new j("#popup-avatar",{submitForm:function(e,t,n){he.addDisabledAttribute(),se.changeAvatar("users/me/avatar",{avatar:e.link}).then((function(e){N.src=e.avatar,N.alt="".concat(e.name," ").concat(e.about)})).then((function(){t()})).catch((function(e){alert(e)})).finally((function(){he.removeDisabledAttribute(),n(!1)}))}});Ee.setEventListeners(),A.addEventListener("click",(function(){Ee.open()})),F.addEventListener("click",(function(){var e,t,n;e=le.getUserInfo(),t=e.profileName,n=e.profileEmployment,z.value=t,U.value=n,be.open()})),V.addEventListener("click",(function(){me.toggleButtonState(),ve.open()}))})();