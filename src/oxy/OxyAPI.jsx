const gistBase = 'https://gist.githubusercontent.com/astrarudra/'


const OxyAPI = {
    getGist : (gist, useCache = false) =>{
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
}

export default OxyAPI

