(()=>{"use strict";function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function t(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),Object.defineProperty(t,"prototype",{writable:!1}),t}function n(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var o=t((function e(t,o,r,i){var u=this,c=r.openFullSizePopup,a=r.handleDeleteIconClick,l=r.handleLikeClick;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),n(this,"_isOwnerCard",(function(){u._object.owner._id!==u._data._id&&u._templateDeleteButton.remove()})),n(this,"_checkOwnerLike",(function(){u._object.likes.forEach((function(){u._checkSomeLikes(u._object)?u._templateButton.classList.add("cards__like-button_active"):u._templateButton.classList.remove("cards__like-button_active")}))})),n(this,"_checkSomeLikes",(function(e){return e.likes.some((function(e){return e._id==u._data._id}))})),n(this,"removeCard",(function(){u._templateElement.remove(),u._templateElement=null})),n(this,"createCard",(function(){return u._isOwnerCard(),u._checkOwnerLike(),u._templateName.textContent=u._name,u._templateImg.src=u._link,u._templateImg.alt=u._name,u._setEventListeners(),u._handleLikesNumber(u._object),u._templateElement})),n(this,"_setEventListeners",(function(){u._templateDeleteButton.addEventListener("click",(function(){return u._handleDeleteIconClick(u._templateElement,u._id)})),u._templateImg.addEventListener("click",(function(){u._openFullSizePopup(u._link,u._name)})),u._templateButton.addEventListener("click",(function(){u._handleLikeClick(u._checkSomeLikes,u._handleLikesNumber,u._id,u._templateButton)}))})),n(this,"_handleLikesNumber",(function(e){u._templateLikesNumber.textContent=e.likes.length})),this._data=o,this._object=t,this._name=t.name,this._link=t.link,this._id=t._id,this._templateContainer=i,this._openFullSizePopup=c,this._handleDeleteIconClick=a,this._handleLikeClick=l,this._templateElement=this._templateContainer.content.firstElementChild.cloneNode(!0),this._templateButton=this._templateElement.querySelector(".cards__like-button"),this._templateName=this._templateElement.querySelector(".cards__name"),this._templateImg=this._templateElement.querySelector(".cards__place-img"),this._templateLikesNumber=this._templateElement.querySelector(".cards__like-numbers"),this._templateDeleteButton=this._templateElement.querySelector(".cards__delete-button")}));function r(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function i(e,t,n){return t&&r(e.prototype,t),n&&r(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function u(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var c=i((function e(t,n){var o=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),u(this,"_showInputError",(function(e,t){var n=o._formElement.querySelector("#error-".concat(e.id));e.classList.add(o._inputErrorClass),n.textContent=t,n.classList.add(o._errorClass)})),u(this,"_hideInputError",(function(e){var t=o._formElement.querySelector("#error-".concat(e.id));e.classList.remove(o._inputErrorClass),t.classList.remove(o._errorClass),t.textContent=""})),u(this,"_checkInputValidity",(function(e){e.validity.valid?o._hideInputError(e):o._showInputError(e,e.validationMessage)})),u(this,"_setEventListeners",(function(){o._inputList.forEach((function(e){e.addEventListener("input",(function(){o._checkInputValidity(e),o.toggleButtonState()}))}))})),u(this,"_hasInvalidInput",(function(){return o._inputList.some((function(e){return!e.validity.valid}))})),u(this,"toggleButtonState",(function(){o._hasInvalidInput()?(o._buttonElement.classList.add(o._inactiveButtonClass),o._buttonElement.setAttribute("disabled","disabled")):(o._buttonElement.classList.remove(o._inactiveButtonClass),o._buttonElement.removeAttribute("disabled"))})),u(this,"enableValidation",(function(){o.toggleButtonState(),o._setEventListeners()})),this._formElement=n,this._inputSelector=t.inputSelector,this._submitButtonSelector=t.submitButtonSelector,this._inactiveButtonClass=t.inactiveButtonClass,this._inputErrorClass=t.inputErrorClass,this._errorClass=t.errorClass,this._editButtonSelector=t.editButtonSelector,this._addButtonSelector=t.addButtonSelector,this._inputList=Array.from(this._formElement.querySelectorAll(this._inputSelector)),this._buttonElement=this._formElement.querySelector(this._submitButtonSelector)}));function a(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}var l=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._popupElement=document.querySelector(t),this._popupCloseButton=this._popupElement.querySelector(".popup__close-button"),this._handleEscClose=this._handleEscClose.bind(this),this.close=this.close.bind(this)}var t,n;return t=e,(n=[{key:"open",value:function(){this._popupElement.classList.add("popup_opened"),document.addEventListener("keydown",this._handleEscClose)}},{key:"close",value:function(){this._popupElement.classList.remove("popup_opened"),document.removeEventListener("keydown",this._handleEscClose)}},{key:"_handleEscClose",value:function(e){"Escape"===e.key&&this.close()}},{key:"setEventListeners",value:function(){var e=this;this._popupCloseButton.addEventListener("click",(function(){e.close()})),this._popupElement.addEventListener("mousedown",(function(t){t.target===t.currentTarget&&e.close()}))}}])&&a(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function p(e){return p="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},p(e)}function s(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function f(e,t){return f=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},f(e,t)}function m(e,t){if(t&&("object"===p(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return h(e)}function h(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function _(){return _="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var o=d(e,t);if(o){var r=Object.getOwnPropertyDescriptor(o,t);return r.get?r.get.call(arguments.length<3?e:n):r.value}},_.apply(this,arguments)}function d(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=y(e)););return e}function y(e){return y=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},y(e)}var b=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&f(e,t)}(u,e);var t,n,o,r,i=(o=u,r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=y(o);if(r){var n=y(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return m(this,e)});function u(e){var t,n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),_((t=h(n=i.call(this,e)),y(u.prototype)),"_popupElement",t),n._popupFullSizeImg=n._popupElement.querySelector(".popup__image"),n._popupFullSizePlaceName=n._popupElement.querySelector(".popup__place-name"),n}return t=u,(n=[{key:"open",value:function(e,t){this._popupFullSizeImg.src=e,this._popupFullSizeImg.alt=t,this._popupFullSizePlaceName.textContent=t,_(y(u.prototype),"open",this).call(this)}}])&&s(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),u}(l);function v(e){return v="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},v(e)}function S(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function g(){return g="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var o=E(e,t);if(o){var r=Object.getOwnPropertyDescriptor(o,t);return r.get?r.get.call(arguments.length<3?e:n):r.value}},g.apply(this,arguments)}function E(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=j(e)););return e}function w(e,t){return w=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},w(e,t)}function k(e,t){if(t&&("object"===v(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return O(e)}function O(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function j(e){return j=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},j(e)}function L(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var C=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&w(e,t)}(u,e);var t,n,o,r,i=(o=u,r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=j(o);if(r){var n=j(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return k(this,e)});function u(e,t){var n,o=t.submitForm;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),L(O(n=i.call(this,e)),"_getInputValues",(function(){return n._formValues={},n._inputList.forEach((function(e){n._formValues[e.id]=e.value})),n._formValues})),L(O(n),"_handleSubmitListener",(function(e){n.renderLoading(!0),e.preventDefault(),n._values=n._getInputValues(),n._submitForm(n._values,n.renderLoading,n.close)})),L(O(n),"renderLoading",(function(e){return n._popupButtonSubmit.textContent=e?"Сохранение...":"Сохранить"})),n._submitForm=o,n._inputList=n._popupElement.querySelectorAll(".popup__input"),n._popupForm=n._popupElement.querySelector(".popup__form"),n._popupButtonSubmit=n._popupForm.querySelector(".popup__submit"),n._handleSubmitListener=n._handleSubmitListener.bind(O(n)),n}return t=u,(n=[{key:"setEventListeners",value:function(){g(j(u.prototype),"setEventListeners",this).call(this),this._popupForm.addEventListener("submit",this._handleSubmitListener)}},{key:"close",value:function(){g(j(u.prototype),"close",this).call(this),this._popupForm.reset()}}])&&S(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),u}(l);function P(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function I(e,t,n){return t&&P(e.prototype,t),n&&P(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function q(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var B=I((function e(t){var n=this,o=t.profileNameSelector,r=t.profileEmploymentSelector,i=t.profileAvatarSelector;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),q(this,"getUserInfo",(function(){return n._userInfo={},n._userInfo[n._profileName.id]=n._profileName.textContent,n._userInfo[n._profileEmployment.id]=n._profileEmployment.textContent,n._userInfo})),q(this,"setUserInfo",(function(e){var t=e.name,o=e.about,r=e.avatar;n._profileName.textContent=t,n._profileEmployment.textContent=o,n._profileAvatar.src=r,n._profileAvatar.alt=t})),this._profileName=document.querySelector(o),this._profileEmployment=document.querySelector(r),this._profileAvatar=document.querySelector(i)})),R=document.querySelector("#template"),T=document.querySelector(".profile__avatar"),F=document.querySelector(".profile__avatar-button"),N=document.querySelector("#popup-avatar"),z=document.querySelector(".profile__edit-button"),A=document.querySelector("#popup-edit"),D=(A.querySelector(".popup__close-button"),document.querySelector(".profile__name"),A.querySelector(".popup__input_type_name")),x=(document.querySelector(".profile__employment"),A.querySelector(".popup__input_type_employment")),V=(A.querySelector(".popup__container"),document.querySelector("#popup-add")),U=(V.querySelector(".popup__input_type_name"),V.querySelector(".popup__input_type_employment"),document.querySelector(".profile__add-button")),J=(V.querySelector(".popup__close-button"),V.querySelector(".popup__form"),document.querySelector("#popup-full-size")),H=(J.querySelector(".popup__image"),document.querySelector(".popup__place-name"),J.querySelector(".popup__close-button"),{popupAdd:"#popup-add",popupEdit:"#popup-edit",inputSelector:".popup__input",submitButtonSelector:".popup__submit",inactiveButtonClass:"popup__submit_disabled",inputErrorClass:"popup__input_type_error",errorClass:"popup__span-error_type_active",editButtonSelector:".profile__edit-button",addButtonSelector:".profile__add-button"});function G(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function M(e,t,n){return t&&G(e.prototype,t),n&&G(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function K(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var Q=M((function e(t,n){var o=this,r=t.renderer;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),K(this,"addItem",(function(e){o._containerElement.prepend(e)})),K(this,"renderItems",(function(e,t){e.forEach((function(e){o._renderer(e,t)}))})),this._renderer=r,this._containerElement=document.querySelector(n)}));function W(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function X(e,t,n){return t&&W(e.prototype,t),n&&W(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function Y(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var Z=X((function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),Y(this,"getAllInfo",(function(e,t){return fetch(e,{method:"GET",headers:t}).then((function(e){return e.ok?e.json():Promise.reject("Something gone wrong")}))})),Y(this,"patchNewInfo",(function(e,t,n){return fetch(e,{method:"PATCH",headers:t,body:JSON.stringify(n)}).then((function(e){return e.ok?e.json():Promise.reject("Something gone wrong")}))})),Y(this,"postNewCard",(function(e,t,n){return fetch(e,{method:"POST",headers:t,body:JSON.stringify(n)}).then((function(e){return e.ok?e.json():Promise.reject("Something gone wrong")}))})),Y(this,"deleteCard",(function(e,t){return fetch(e,{method:"DELETE",headers:t}).then((function(e){return e.ok?e.json():Promise.reject("Something gone wrong")}))})),Y(this,"putCardLike",(function(e,t){return fetch(e,{method:"PUT",headers:t}).then((function(e){return e.ok?e.json():Promise.reject("Something gone wrong")}))})),Y(this,"deleteCardLike",(function(e,t){return fetch(e,{method:"DELETE",headers:t}).then((function(e){return e.ok?e.json():Promise.reject("Something gone wrong")}))})),Y(this,"changeAvatar",(function(e,t,n){return fetch(e,{method:"PATCH",headers:t,body:JSON.stringify(n)}).then((function(e){return e.ok?e.json():Promise.reject("Something gone wrong")}))}))}));function $(e){return $="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},$(e)}function ee(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function te(){return te="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var o=ne(e,t);if(o){var r=Object.getOwnPropertyDescriptor(o,t);return r.get?r.get.call(arguments.length<3?e:n):r.value}},te.apply(this,arguments)}function ne(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=ue(e)););return e}function oe(e,t){return oe=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},oe(e,t)}function re(e,t){if(t&&("object"===$(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return ie(e)}function ie(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function ue(e){return ue=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},ue(e)}function ce(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var ae=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&oe(e,t)}(u,e);var t,n,o,r,i=(o=u,r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=ue(o);if(r){var n=ue(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return re(this,e)});function u(e,t){var n,o=t.submitForm;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),ce(ie(n=i.call(this,e)),"_handleSubmitListener",(function(e,t,o){e.preventDefault(),n._submitForm(t,o),n.close()})),ce(ie(n),"getIdValue",Promise.resolve().then((function(e){return e}))),n._submitForm=o,n._popupForm=n._popupElement.querySelector(".popup__form"),n}return t=u,(n=[{key:"open",value:function(e,t){var n=this;te(ue(u.prototype),"open",this).call(this),this._popupForm.addEventListener("submit",(function(o){n._handleSubmitListener(o,e,t)}))}}])&&ee(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),u}(l),le=new B({profileNameSelector:".profile__name",profileEmploymentSelector:".profile__employment",profileAvatarSelector:".profile__avatar"}),pe=new Z;pe.getAllInfo("https://nomoreparties.co/v1/cohort-41/users/me",{authorization:"75fdb49e-7217-4f03-ae58-c16a91160381"}).then((function(e){return e})).then((function(e){le.setUserInfo(e),pe.getAllInfo("https://mesto.nomoreparties.co/v1/cohort-41/cards",{authorization:"75fdb49e-7217-4f03-ae58-c16a91160381"}).then((function(e){return e})).then((function(t){me.renderItems(t,e)}))})).catch((function(e){alert(e)}));var se=new ae("#popup-confidence",{submitForm:function(e,t){pe.deleteCard("https://mesto.nomoreparties.co/v1/cohort-41/cards/".concat(t),{authorization:"75fdb49e-7217-4f03-ae58-c16a91160381"}).then((function(){e.remove(),e=null})).catch((function(e){alert(e)}))}});function fe(e,t){return new o(e,t,{openFullSizePopup:function(e,t){_e.open(e,t)},handleDeleteIconClick:function(e,t){se.open(e,t)},handleLikeClick:function(t,n,o,r){t(e)?pe.deleteCardLike("https://mesto.nomoreparties.co/v1/cohort-41/cards/".concat(o,"/likes"),{authorization:"75fdb49e-7217-4f03-ae58-c16a91160381"}).then((function(e){return r.classList.remove("cards__like-button_active"),n(e),e})).then((function(t){return e=t})).catch((function(e){alert(e)})):pe.putCardLike("https://mesto.nomoreparties.co/v1/cohort-41/cards/".concat(o,"/likes"),{authorization:"75fdb49e-7217-4f03-ae58-c16a91160381"}).then((function(e){return r.classList.add("cards__like-button_active"),n(e),e})).then((function(t){return e=t})).catch((function(e){alert(e)}))}},R).createCard()}se.setEventListeners();var me=new Q({renderer:function(e,t){var n=fe(e,t);me.addItem(n)}},".cards");new c(H,A).enableValidation();var he=new c(H,V);he.enableValidation(),new c(H,N).enableValidation();var _e=new b("#popup-full-size");_e.setEventListeners();var de=new C("#popup-edit",{submitForm:function(e,t,n){pe.patchNewInfo("https://mesto.nomoreparties.co/v1/cohort-41/users/me",{authorization:"75fdb49e-7217-4f03-ae58-c16a91160381","Content-Type":"application/json"},{name:e.name,about:e.employment}).then((function(e){return e})).then((function(e){le.setUserInfo(e)})).finally((function(){t(!1),n()})).catch((function(e){alert(e)}))}});de.setEventListeners();var ye=new C("#popup-add",{submitForm:function(e,t,n){pe.postNewCard("https://mesto.nomoreparties.co/v1/cohort-41/cards",{authorization:"75fdb49e-7217-4f03-ae58-c16a91160381","Content-Type":"application/json"},{name:e.place,link:e.url}).then((function(e){return e})).then((function(e){pe.getAllInfo("https://nomoreparties.co/v1/cohort-41/users/me",{authorization:"75fdb49e-7217-4f03-ae58-c16a91160381"}).then((function(e){return e})).then((function(t){var n=fe(e,t);me.addItem(n)}))})).finally((function(){t(!1),n()})).catch((function(e){alert(e)}))}});ye.setEventListeners();var be=new C("#popup-avatar",{submitForm:function(e,t,n){pe.changeAvatar("https://mesto.nomoreparties.co/v1/cohort-41/users/me/avatar",{authorization:"75fdb49e-7217-4f03-ae58-c16a91160381","Content-Type":"application/json"},{avatar:e.url}).then((function(e){return e})).then((function(e){console.log(e),T.src=e.avatar,T.alt="".concat(e.name," ").concat(e.about)})).finally((function(){t(!1),n()})).catch((function(e){alert(e)}))}});be.setEventListeners(),F.addEventListener("click",(function(){be.open()})),z.addEventListener("click",(function(){var e,t,n;e=le.getUserInfo(),t=e.profileName,n=e.profileEmployment,D.value=t,x.value=n,de.open()})),U.addEventListener("click",(function(){he.toggleButtonState(),ye.open()}))})();