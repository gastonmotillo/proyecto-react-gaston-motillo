import "./Formulario.css";

const Formulario = ( {insertarOrden, cambioForm, formData} ) => {

  return (
    <form onSubmit={insertarOrden}>
      <input type="text" name="nombre" placeholder="Ingrese su nombre" onChange={cambioForm} value={formData.nombre}/><br/>
      <input type="text" name="telefono" placeholder="Ingrese su telefono" onChange={cambioForm} value={formData.telefono}/><br/>
      <input type="text" name="email" placeholder="Ingrese su email" onChange={cambioForm} value={formData.email}/><br/>
      <input type="text" name="repetirEmail" placeholder="Repetir el email" onChange={cambioForm} value={formData.repetirEmail}/><br/>
      <button className="orden">Generar Orden</button>
    </form>
  )
}

export default Formulario