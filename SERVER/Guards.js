// ------------------------------- //
// --------< АВТОРИЗАЦИЯ >------- //
// ----------------------------- //

class Guards {
    
    isGuest (req, res, next) {
        if (req.isAuthenticated()) {
            res.redirect('/');
        } else {
            next();
        }
    }

    async isAuthenticated (req, res, next) {

        const API_KEY = 'qwerty123'

            if (req.query.API_KEY == API_KEY)
                next()
            else 
                return res.json({ msg: "error", text: "API ключ недействителен"});

    }

}

export default new Guards();