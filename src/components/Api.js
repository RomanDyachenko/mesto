export default class Api {

_returnResult = (res) => {
    if (res.ok){
        return res.json();
    }

    return Promise.reject("Something gone wrong");
}

getCardsInfo = (url, headers) => {
    return fetch(url, {
        method: "GET",
        headers: headers
    })
    .then ((res) => {
       return this._returnResult(res)
    })
}

getUserInfo = (url, headers) => {
    return fetch(url, {
        method: "GET",
        headers: headers
    })
    .then ((res) => {
       return this._returnResult(res)
    })
}

patchNewInfo = (url, headers, body) => {
    return fetch (url, {
        method: "PATCH",
        headers: headers,
        body: JSON.stringify(
            body
        )})
        .then ((res) => {
            return this._returnResult(res)
         })

}
postNewCard = (url, headers, body) => {
    return fetch (url, {
        method: "POST",
        headers: headers,
        body: JSON.stringify(
            body
        )
    })
    .then ((res) => {
        return this._returnResult(res)
     })
}

deleteCard = (url, headers) => {
    return fetch(url, {
        method: 'DELETE',
        headers: headers
    })
    .then ((res) => {
        return this._returnResult(res)
     })
}

putCardLike = (url, headers) => {
    return fetch(url, {
        method: 'PUT',
        headers: headers
    })
    .then ((res) => {
        return this._returnResult(res)
     })
}

deleteCardLike = (url, headers) => {
    return fetch(url, {
        method: 'DELETE',
        headers: headers
    })
    .then ((res) => {
        return this._returnResult(res)
     })
}

changeAvatar = (url, headers, body) => {
    return fetch(url, {
        method: 'PATCH',
        headers: headers,
        body: JSON.stringify(
            body
        )
    })
    .then ((res) => {
        return this._returnResult(res)
     })
}

}