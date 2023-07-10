import axios from 'axios'


const API = 'http://localhost:3000/api'

export const getAlimentos = alimentos => axios.get(`${API}/alimentos`, alimentos)
export const getAlimento = id => axios.get(`${API}/alimentos/${id}`)
export const createAlimento = alimento => axios.post(`${API}/alimentos`, alimento)
export const updateAlimento = (id, alimento) => axios.put(`${API}/alimentos/${id}`, alimento)
export const deleteAlimento = id => axios.delete(`${API}/alimentos/${id}`)

export const getBebidas = bebidas => axios.get(`${API}/bebidas`, bebidas)
export const getBebida = id => axios.get(`${API}/bebidas/${id}`)
export const createBebida = bebida => axios.post(`${API}/bebidas`, bebida)
export const updateBebida = (id, bebida) => axios.put(`${API}/bebidas/${id}`, bebida)
export const deleteBebida = id => axios.delete(`${API}/bebidas/${id}`)

export const getVentas = ventas => axios.get(`${API}/ventas`, ventas)
export const getVenta = id => axios.get(`${API}/ventas/${id}`)
export const createVenta = venta => axios.post(`${API}/ventas`, venta)
export const updateVenta = (id, venta) => axios.put(`${API}/ventas/${id}`, venta)
export const deleteVenta = id => axios.delete(`${API}/ventas/${id}`)
