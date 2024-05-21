import api from './OxyAPI'

const Oxy = {
    global: {},
    getGist: (gist) => api.getGist(gist)
}

export default Oxy