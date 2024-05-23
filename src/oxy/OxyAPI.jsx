import { gistBase, gitBase } from "../constants"

/* TODO: Handle Erros */
const OxyAPI = {
    getGist : (gist, useCache) =>{
        return new Promise(function(resolve, reject){
            fetch(`${gistBase}${gist}/raw${useCache ? '':`?timestamp=${(new Date()).getTime()}`}`).then((response) => {
                response.json().then((data) => {
                    resolve(data)
                    }).catch((error) => {
                        console.log("Error in Json Parse", error)
                        reject(error)
                    })
                })
                .catch((error) => {
                    console.log("Error in getGist", error)
                    reject(error)
                })
        })
    },
    getGit : (version, path) =>{
        return new Promise(function(resolve, reject){
            fetch(`${gitBase}v${version}/${path}`).then((response) => {
                response.json().then((data) => {
                    resolve(data)
                    }).catch((error) => {
                        console.log("Error in Json Parse", error)
                        reject(error)
                    })
                })
                .catch((error) => {
                    console.log("Error in getGist", error)
                    reject(error)
                })
        })
    },
}

export default OxyAPI

