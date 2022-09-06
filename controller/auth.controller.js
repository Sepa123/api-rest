export const login = (req,res) => {
    console.log(req.body);
    res.json({ on: true})
}

export const register = (req,res) => {
    res.json({ on: true})
}