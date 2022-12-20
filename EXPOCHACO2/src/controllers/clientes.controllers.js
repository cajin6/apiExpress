import {pool} from '../db.js'

export const getClientes = async(req,res)=>{
    try{
        const [rows] = await pool.query('select * from cliente')
        res.json[rows]
    } catch (error) {
        return res.send('hay un error')

    }
    }

    export const getCliente = async(req,res)=>{
        try{
            const [rows] = await pool.query('select * from cliente where idcliente=?',req.params.id)
            if(rows.length<=0)
            res.json[rows]
        } catch (error) {
            return res.send('hay un error')
    
        }
        }

    export const postClientes = async(req,res)=>{
        const {ci,nombre,appaterno,apmaterno,direccion,telefono}= req.body
        try{
            const [rows] = await pool.query('insert into cliente(ci,nombre,appaterno,apmaterno,direccion,telefono)values(?,?,?,?,?,?),'[ci,nombre,appaterno,apmaterno,direccion,telefono])
            
            res.json[rows]
        } catch (error) }
            return res.send('hay un error')