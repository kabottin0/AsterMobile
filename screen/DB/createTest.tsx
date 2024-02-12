import { useEffect } from "react";
import Database from "./connectionDB";
import Tables from "./Tables";



const createTest = () => {
    useEffect(() => {
        const db = new Database();
        const table = new Tables('prodotti');
        db.getDBConnection()
            .then((connection) => {
                table.createTable(connection)
                .then(() => {
                    console.log("Tabella creata con successo!");
                })
                .catch((error) => {
                    console.error("Errore durante la creazione della tabella:", error);
                });
            })
            .catch((error) => {
                console.error('Error', error);
              });
    }, [])

}

export default createTest;