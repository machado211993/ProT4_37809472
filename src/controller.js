import { pool} from "./database.js";

class LibroController{
    async getAll(req, res){
        const [result] = await pool.query('SELECT * FROM libros');
        res.json(result);
    }

    async add(req, res){
        const libro = req.body;
        const [result] = await pool.query(`INSERT INTO Libros(nombre, autor, categoria, fechapublic, isbn) VALUES (?,?,?,?,?)`, [libro.nombre, libro.autor, libro.categoria, libro.fechapublic, libro.isbn] );
        res.json({"id insertado": result.insertId});
    }

    async delete(req, res){
        const libro = req.body;
        const [result] = await pool.query(`DELETE FROM Libros WHERE id=(?)`, [libro.id] );
        res.json({"registros eliminados": result.affectedRows});
    }
    
    async update(req, res){
        const libro = req.body;
        const [result] = await pool.query(`UPDATE  Libros SET nombre=(?), autor=(?), categoria=(?), fechapublic=(?), isbn=(?) WHERE id=(?)`, [libro.nombre, libro.autor, libro.categoria, libro.fechapublic, libro.isbn, libro.id] );
        res.json({"registros actualizados": result.changedRows});
    }
    

}

export const libro = new LibroController();
