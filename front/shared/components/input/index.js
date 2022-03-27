import style from './Input.module.scss';

export default function Input({
  id,
  name,
  label
}) {

  return <>
    <div id={id} className={style.containerInput}>
      <label>{label}</label>
      <input name={name}></input>
    </div>
  </>
}