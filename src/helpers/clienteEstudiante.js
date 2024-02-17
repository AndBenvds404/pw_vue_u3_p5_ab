import axios from "axios"

const consultarEstudiante= async (id)=>{
    const data = axios.get(`http://localhost:8080/API/v1.0/Matricula/estudiantes/self/${id}`).then(r=>r.data);
    return data;
}

export const consultarEstudianteFachada=  async (id)=>{
    return await consultarEstudiante(id)
}




const insertar= async (body)=>{
    const data = axios.post(`http://localhost:8080/API/v1.0/Matricula/estudiantes/guardar`,body).then(r=>r.data);
    return data;
}

export const insertarFachada=  async (body)=>{
    return await insertar(body)
}




const actualizar= async (id, body)=>{
    const data = axios.put(`http://localhost:8080/API/v1.0/Matricula/estudiantes/${id}`,body).then(r=>r.data);
    console.log(data);
}

export const actualizarFachada =  async (id, body)=>{
    await actualizar(id, body)
}




const eliminar= async (id)=>{
    const data = axios.delete(`http://localhost:8080/API/v1.0/Matricula/estudiantes/${id}`).then(r=>r.data);
    console.log(data);
}

export const eliminarFachada =  async (id)=>{
    await eliminar(id)
}

