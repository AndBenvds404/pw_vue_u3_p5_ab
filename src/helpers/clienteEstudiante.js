import axios from "axios"

const consultarEstudiante= async (id)=>{
    const data = axios.get(`http://localhost:8080/API/v1.0/Matricula/estudiantes10/${id}`).then(r=>r.data);
    return data;
}

export const consultarEstudianteFachada=  async (id)=>{
    return await consultarEstudiante(id)
}


const insertar= async (body)=>{
    const data = axios.post(`http://localhost:8080/API/v1.0/Matricula/estudiantes10`,body).then(r=>r.data);
    return data;
}

export const insertarFachada=  async (body)=>{
    return await insertar(body)
}