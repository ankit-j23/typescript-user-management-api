import app from "./app";
import dotenv from 'dotenv';

dotenv.config();
const PORT = process.env.PORT || 4001;

const startServer = async(): Promise<void> => {
    try {
        app.listen(PORT, ()=> {
            console.log(`App is listening successfully on port:${PORT}`);
        })
    } catch (error) {
        console.log("Failed to start the server", error);
        process.exit(1);
    };
};

//call start server
startServer();