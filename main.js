(()=>{"use strict";function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function t(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),Object.defineProperty(t,"prototype",{writable:!1}),t}function n(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var r=t((function e(t,r,o,i){var u=this,c=o.openFullSizePopup,a=o.handleDeleteIconClick,l=o.handleLikeClick;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),n(this,"_isOwnerCard",(function(){u._object.owner._id!==u._dataId&&u._templateDeleteButton.remove()})),n(this,"_checkOwnerLike",(function(){u._object.likes.forEach((function(){u._checkSomeLikes(u._object)?u._templateButton.classList.add("cards__like-button_active"):u._templateButton.classList.remove("cards__like-button_active")}))})),n(this,"_checkSomeLikes",(function(e){return e.likes.some((function(e){return e._id==u._dataId}))})),n(this,"removeCard",(function(e){e.remove(),e=null})),n(this,"createCard",(function(){return u._isOwnerCard(),u._checkOwnerLike(),u._templateName.textContent=u._name,u._templateImg.src=u._link,u._templateImg.alt=u._name,u._setEventListeners(),u._handleLikesNumber(u._object),u._templateElement})),n(this,"_setEventListeners",(function(){u._templateDeleteButton.addEventListener("click",(function(){return u._handleDeleteIconClick(u.removeCard,u._templateElement,u._id)})),u._templateImg.addEventListener("click",(function(){u._openFullSizePopup(u._link,u._name)})),u._templateButton.addEventListener("click",(function(){u._handleLikeClick(u._checkSomeLikes,u._handleLikesNumber,u._id,u.deleteLike,u.addLike)}))})),n(this,"_handleLikesNumber",(function(e){u._templateLikesNumber.textContent=e.likes.length})),n(this,"deleteLike",(function(){u._templateButton.classList.remove("cards__like-button_active")})),n(this,"addLike",(function(){u._templateButton.classList.add("cards__like-button_active")})),this._dataId=r,this._object=t,this._name=t.name,this._link=t.link,this._id=t._id,this._templateContainer=i,this._openFullSizePopup=c,this._handleDeleteIconClick=a,this._handleLikeClick=l,this._templateElement=this._templateContainer.content.firstElementChild.cloneNode(!0),this._templateButton=this._templateElement.querySelector(".cards__like-button"),this._templateName=this._templateElement.querySelector(".cards__name"),this._templateImg=this._templateElement.querySelector(".cards__place-img"),this._templateLikesNumber=this._templateElement.querySelector(".cards__like-numbers"),this._templateDeleteButton=this._templateElement.querySelector(".cards__delete-button")}));function o(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function i(e,t,n){return t&&o(e.prototype,t),n&&o(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function u(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var c=i((function e(t,n){var r=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),u(this,"_showInputError",(function(e,t){var n=r._formElement.querySelector("#error-".concat(e.id));e.classList.add(r._inputErrorClass),n.textContent=t,n.classList.add(r._errorClass)})),u(this,"_hideInputError",(function(e){var t=r._formElement.querySelector("#error-".concat(e.id));e.classList.remove(r._inputErrorClass),t.classList.remove(r._errorClass),t.textContent=""})),u(this,"_checkInputValidity",(function(e){e.validity.valid?r._hideInputError(e):r._showInputError(e,e.validationMessage)})),u(this,"_setEventListeners",(function(){r._inputList.forEach((function(e){e.addEventListener("input",(function(){r._checkInputValidity(e),r.toggleButtonState()}))}))})),u(this,"_hasInvalidInput",(function(){return r._inputList.some((function(e){return!e.validity.valid}))})),u(this,"toggleButtonState",(function(){r._hasInvalidInput()?(r._buttonElement.classList.add(r._inactiveButtonClass),r._buttonElement.setAttribute("disabled","disabled")):(r._buttonElement.classList.remove(r._inactiveButtonClass),r._buttonElement.removeAttribute("disabled"))})),u(this,"enableValidation",(function(){r.toggleButtonState(),r._setEventListeners()})),this._formElement=n,this._inputSelector=t.inputSelector,this._submitButtonSelector=t.submitButtonSelector,this._inactiveButtonClass=t.inactiveButtonClass,this._inputErrorClass=t.inputErrorClass,this._errorClass=t.errorClass,this._editButtonSelector=t.editButtonSelector,this._addButtonSelector=t.addButtonSelector,this._inputList=Array.from(this._formElement.querySelectorAll(this._inputSelector)),this._buttonElement=this._formElement.querySelector(this._submitButtonSelector)}));function a(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var l=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._popupElement=document.querySelector(t),this._popupCloseButton=this._popupElement.querySelector(".popup__close-button"),this._handleEscClose=this._handleEscClose.bind(this),this.close=this.close.bind(this)}var t,n;return t=e,(n=[{key:"open",value:function(){this._popupElement.classList.add("popup_opened"),document.addEventListener("keydown",this._handleEscClose)}},{key:"close",value:function(){this._popupElement.classList.remove("popup_opened"),document.removeEventListener("keydown",this._handleEscClose)}},{key:"_handleEscClose",value:function(e){"Escape"===e.key&&this.close()}},{key:"setEventListeners",value:function(){var e=this;this._popupCloseButton.addEventListener("click",(function(){e.close()})),this._popupElement.addEventListener("mousedown",(function(t){t.target===t.currentTarget&&e.close()}))}}])&&a(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function p(e){return p="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},p(e)}function s(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function f(e,t){return f=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},f(e,t)}function _(e,t){if(t&&("object"===p(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return m(e)}function m(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function d(){return d="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=h(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},d.apply(this,arguments)}function h(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=y(e)););return e}function y(e){return y=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},y(e)}var b=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&f(e,t)}(u,e);var t,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=y(r);if(o){var n=y(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return _(this,e)});function u(e){var t,n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),d((t=m(n=i.call(this,e)),y(u.prototype)),"_popupElement",t),n._popupFullSizeImg=n._popupElement.querySelector(".popup__image"),n._popupFullSizePlaceName=n._popupElement.querySelector(".popup__place-name"),n}return t=u,(n=[{key:"open",value:function(e,t){this._popupFullSizeImg.src=e,this._popupFullSizeImg.alt=t,this._popupFullSizePlaceName.textContent=t,d(y(u.prototype),"open",this).call(this)}}])&&s(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),u}(l);function v(e){return v="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},v(e)}function E(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function S(){return S="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=w(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},S.apply(this,arguments)}function w(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=L(e)););return e}function g(e,t){return g=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},g(e,t)}function k(e,t){if(t&&("object"===v(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return O(e)}function O(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function L(e){return L=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},L(e)}function C(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var j=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&g(e,t)}(u,e);var t,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=L(r);if(o){var n=L(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return k(this,e)});function u(e,t){var n,r=t.submitForm;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),C(O(n=i.call(this,e)),"_getInputValues",(function(){return n._formValues={},n._inputList.forEach((function(e){n._formValues[e.id]=e.value})),n._formValues})),C(O(n),"_handleSubmitListener",(function(e){n.renderLoading(!0),e.preventDefault(),n._values=n._getInputValues(),n._submitForm(n._values,n.renderLoading,n.close)})),C(O(n),"renderLoading",(function(e){return n._popupButtonSubmit.textContent=e?"Сохранение...":"Сохранить"})),n._submitForm=r,n._inputList=n._popupElement.querySelectorAll(".popup__input"),n._popupForm=n._popupElement.querySelector(".popup__form"),n._popupButtonSubmit=n._popupForm.querySelector(".popup__submit"),n._handleSubmitListener=n._handleSubmitListener.bind(O(n)),n}return t=u,(n=[{key:"setEventListeners",value:function(){S(L(u.prototype),"setEventListeners",this).call(this),this._popupForm.addEventListener("submit",this._handleSubmitListener)}},{key:"close",value:function(){S(L(u.prototype),"close",this).call(this),this._popupForm.reset()}}])&&E(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),u}(l);function P(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function I(e,t,n){return t&&P(e.prototype,t),n&&P(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function q(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var B=I((function e(t){var n=this,r=t.profileNameSelector,o=t.profileEmploymentSelector,i=t.profileAvatarSelector;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),q(this,"getUserInfo",(function(){return n._userInfo={},n._userInfo[n._profileName.id]=n._profileName.textContent,n._userInfo[n._profileEmployment.id]=n._profileEmployment.textContent,n._userInfo})),q(this,"setUserInfo",(function(e){var t=e.name,r=e.about,o=e.avatar;n._profileName.textContent=t,n._profileEmployment.textContent=r,n._profileAvatar.src=o,n._profileAvatar.alt=t})),this._profileName=document.querySelector(r),this._profileEmployment=document.querySelector(o),this._profileAvatar=document.querySelector(i)})),R=document.querySelector("#template"),T=document.querySelector(".profile__avatar"),N=document.querySelector(".profile__avatar-button"),F=document.querySelector("#popup-avatar"),z=document.querySelector(".profile__edit-button"),D=document.querySelector("#popup-edit"),x=(D.querySelector(".popup__close-button"),document.querySelector(".profile__name"),D.querySelector(".popup__input_type_name")),A=(document.querySelector(".profile__employment"),D.querySelector(".popup__input_type_employment")),V=(D.querySelector(".popup__container"),document.querySelector("#popup-add")),U=(V.querySelector(".popup__input_type_name"),V.querySelector(".popup__input_type_employment"),document.querySelector(".profile__add-button")),J=(V.querySelector(".popup__close-button"),V.querySelector(".popup__form"),document.querySelector("#popup-full-size")),G=(J.querySelector(".popup__image"),document.querySelector(".popup__place-name"),J.querySelector(".popup__close-button"),{popupAdd:"#popup-add",popupEdit:"#popup-edit",inputSelector:".popup__input",submitButtonSelector:".popup__submit",inactiveButtonClass:"popup__submit_disabled",inputErrorClass:"popup__input_type_error",errorClass:"popup__span-error_type_active",editButtonSelector:".profile__edit-button",addButtonSelector:".profile__add-button"});function H(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function M(e,t,n){return t&&H(e.prototype,t),n&&H(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function K(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var Q=M((function e(t,n){var r=this,o=t.renderer;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),K(this,"addNewItem",(function(e){r._containerElement.prepend(e)})),K(this,"addItems",(function(e){r._containerElement.append(e)})),K(this,"renderItems",(function(e,t){e.forEach((function(e){r._renderer(e,t)}))})),this._renderer=o,this._containerElement=document.querySelector(n)}));function W(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function X(e,t,n){return t&&W(e.prototype,t),n&&W(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function Y(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var Z=X((function e(){var t=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),Y(this,"_returnResult",(function(e){return e.ok?e.json():Promise.reject("Something gone wrong")})),Y(this,"getCardsInfo",(function(e,n){return fetch(e,{method:"GET",headers:n}).then((function(e){return t._returnResult(e)}))})),Y(this,"getUserInfo",(function(e,n){return fetch(e,{method:"GET",headers:n}).then((function(e){return t._returnResult(e)}))})),Y(this,"patchNewInfo",(function(e,n,r){return fetch(e,{method:"PATCH",headers:n,body:JSON.stringify(r)}).then((function(e){return t._returnResult(e)}))})),Y(this,"postNewCard",(function(e,n,r){return fetch(e,{method:"POST",headers:n,body:JSON.stringify(r)}).then((function(e){return t._returnResult(e)}))})),Y(this,"deleteCard",(function(e,n){return fetch(e,{method:"DELETE",headers:n}).then((function(e){return t._returnResult(e)}))})),Y(this,"putCardLike",(function(e,n){return fetch(e,{method:"PUT",headers:n}).then((function(e){return t._returnResult(e)}))})),Y(this,"deleteCardLike",(function(e,n){return fetch(e,{method:"DELETE",headers:n}).then((function(e){return t._returnResult(e)}))})),Y(this,"changeAvatar",(function(e,n,r){return fetch(e,{method:"PATCH",headers:n,body:JSON.stringify(r)}).then((function(e){return t._returnResult(e)}))}))}));function $(e){return $="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},$(e)}function ee(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function te(){return te="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=ne(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},te.apply(this,arguments)}function ne(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=ue(e)););return e}function re(e,t){return re=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},re(e,t)}function oe(e,t){if(t&&("object"===$(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return ie(e)}function ie(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function ue(e){return ue=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},ue(e)}var ce,ae=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&re(e,t)}(u,e);var t,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=ue(r);if(o){var n=ue(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return oe(this,e)});function u(e,t){var n,r,o,c,a=t.submitForm;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),c=function(e,t,r){n._submitForm(e,t,r,n.close)},(o="_handleSubmitListener")in(r=ie(n=i.call(this,e)))?Object.defineProperty(r,o,{value:c,enumerable:!0,configurable:!0,writable:!0}):r[o]=c,n._submitForm=a,n._popupForm=n._popupElement.querySelector(".popup__form"),n}return t=u,(n=[{key:"open",value:function(e,t,n){var r=this;te(ue(u.prototype),"open",this).call(this),this._popupForm.addEventListener("submit",(function(o){o.preventDefault(),r._handleSubmitListener(e,t,n)}),{once:!0})}}])&&ee(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),u}(l),le=new B({profileNameSelector:".profile__name",profileEmploymentSelector:".profile__employment",profileAvatarSelector:".profile__avatar"}),pe=new Z;pe.getUserInfo("https://nomoreparties.co/v1/cohort-41/users/me",{authorization:"75fdb49e-7217-4f03-ae58-c16a91160381"}).then((function(e){ce=e,le.setUserInfo(e),pe.getCardsInfo("https://mesto.nomoreparties.co/v1/cohort-41/cards",{authorization:"75fdb49e-7217-4f03-ae58-c16a91160381"}).then((function(t){_e.renderItems(t,e)}))})).catch((function(e){alert(e)}));var se=new ae("#popup-confidence",{submitForm:function(e,t,n,r){pe.deleteCard("https://mesto.nomoreparties.co/v1/cohort-41/cards/".concat(n),{authorization:"75fdb49e-7217-4f03-ae58-c16a91160381"}).then((function(){e(t)})).then((function(){r()})).catch((function(e){alert(e)}))}});function fe(e,t){return new r(e,t._id,{openFullSizePopup:function(e,t){de.open(e,t)},handleDeleteIconClick:function(e,t,n){se.open(e,t,n)},handleLikeClick:function(t,n,r,o,i){t(e)?pe.deleteCardLike("https://mesto.nomoreparties.co/v1/cohort-41/cards/".concat(r,"/likes"),{authorization:"75fdb49e-7217-4f03-ae58-c16a91160381"}).then((function(e){return o(),n(e),e})).then((function(t){return e=t})).catch((function(e){alert(e)})):pe.putCardLike("https://mesto.nomoreparties.co/v1/cohort-41/cards/".concat(r,"/likes"),{authorization:"75fdb49e-7217-4f03-ae58-c16a91160381"}).then((function(e){return i(),n(e),e})).then((function(t){return e=t})).catch((function(e){alert(e)}))}},R).createCard()}se.setEventListeners();var _e=new Q({renderer:function(e,t){var n=fe(e,t);_e.addItems(n)}},".cards");new c(G,D).enableValidation();var me=new c(G,V);me.enableValidation(),new c(G,F).enableValidation();var de=new b("#popup-full-size");de.setEventListeners();var he=new j("#popup-edit",{submitForm:function(e,t,n){pe.patchNewInfo("https://mesto.nomoreparties.co/v1/cohort-41/users/me",{authorization:"75fdb49e-7217-4f03-ae58-c16a91160381","Content-Type":"application/json"},{name:e.name,about:e.employment}).then((function(e){le.setUserInfo(e)})).then((function(){t(!1),n()})).catch((function(e){alert(e)}))}});he.setEventListeners();var ye=new j("#popup-add",{submitForm:function(e,t,n){pe.postNewCard("https://mesto.nomoreparties.co/v1/cohort-41/cards",{authorization:"75fdb49e-7217-4f03-ae58-c16a91160381","Content-Type":"application/json"},{name:e.place,link:e.url}).then((function(e){console.log(userId);var t=fe(e,ce);_e.addNewItem(t)})).then((function(){t(!1),n()})).catch((function(e){alert(e)}))}});ye.setEventListeners();var be=new j("#popup-avatar",{submitForm:function(e,t,n){pe.changeAvatar("https://mesto.nomoreparties.co/v1/cohort-41/users/me/avatar",{authorization:"75fdb49e-7217-4f03-ae58-c16a91160381","Content-Type":"application/json"},{avatar:e.link}).then((function(e){console.log(e),T.src=e.avatar,T.alt="".concat(e.name," ").concat(e.about)})).then((function(){t(!1),n()})).catch((function(e){alert(e)}))}});be.setEventListeners(),N.addEventListener("click",(function(){be.open()})),z.addEventListener("click",(function(){var e,t,n;e=le.getUserInfo(),t=e.profileName,n=e.profileEmployment,x.value=t,A.value=n,he.open()})),U.addEventListener("click",(function(){me.toggleButtonState(),ye.open()}))})();