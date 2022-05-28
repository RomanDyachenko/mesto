export default class Api {
    constructor(){
        
    }

getAllInfo = (url, headers) => {
    return fetch(url, {
        method: "GET",
        headers: headers
    })
    .then ((res) => {
        if (res.ok){
            return res.json();
        }

        return Promise.reject("Something gone wrong");
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
            if (res.ok){
                return res.json();
            }
    
            return Promise.reject("Something gone wrong");
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
    .then((res) => {
        if(res.ok){
            return res.json();
        }

        return Promise.reject("Something gone wrong");
    })
}

deleteCard = (url, headers) => {
    return fetch(url, {
        method: 'DELETE',
        headers: headers
    })
    .then((res) => {
        if(res.ok){
            return res.json();
        }

        return Promise.reject("Something gone wrong");
    })
}

putCardLike = (url, headers) => {
    return fetch(url, {
        method: 'PUT',
        headers: headers
    })
    .then((res) => {
        if(res.ok){
            return res.json();
        }

        return Promise.reject("Something gone wrong");
    })
}

deleteCardLike = (url, headers) => {
    return fetch(url, {
        method: 'DELETE',
        headers: headers
    })
    .then((res) => {
        if(res.ok){
            return res.json();
        }

        return Promise.reject("Something gone wrong");
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
    .then((res) => {
        if(res.ok){
            return res.json();
        }

        return Promise.reject("Something gone wrong");
    })
}

}