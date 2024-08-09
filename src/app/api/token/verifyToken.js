const jwt = require("jsonwebtoken");

export async function POST(req, res) {
    const { token } = await req.json();


    console.log("first token " , token)

    if (!token) {
        return res.status(400).json({ error: 'Token is required' });
    }

    try {
        const decoded = jwt.verify(token, process.env.SECRET_KEY);
        return res.status(200).json({ valid: true, decoded });
    } catch (error) {
        return res.status(401).json({ valid: false, error: error.message });
    }
}
