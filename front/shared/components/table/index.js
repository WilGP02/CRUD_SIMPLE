import styles from "./table.module.scss";

export default function Table({
  data
}) {

  return (
    <>
      <div>
        <table className={styles.table}>
          <thead>
            <th>ID</th>
            <th>Nombres</th>
            <th>Apellidos</th>
            <th>Edad</th>
          </thead>
          <tbody id="bodyTable">
            {data && data.map((row, index) => {
              return (
                <tr key={index}>
                  <td>{row.id}</td>
                  <td>{row.name}</td>
                  <td>{row.lastName}</td>
                  <td>{row.age}</td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    </>
  )
}