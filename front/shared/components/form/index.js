import Input from "../input";

export default function Form() {

  return (
    <>
      <Input id='name' name='name' label="Nombre"/>
      <Input id='name' name='name' label="Apellidos"/>
      <Input id='name' name='name' label="Age"/>

      <button>Guardar</button>
    </>
  )
}