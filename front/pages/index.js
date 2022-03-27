import Head from 'next/head'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { findAllPersons } from '../redux/actions/person.Action'
import Form from '../shared/components/form'
import Table from '../shared/components/table'
import styles from '../styles/Home.module.css'

export default function Home() {
  const dispatch = useDispatch();

  const {
    save,
    update,
    findAll,
    findById
  } = useSelector(state => state.person.data);

  React.useEffect(() => {
    dispatch(findAllPersons("findAll"));
  },[])

  React.useEffect(() => {
    console.log(findAll);
  },[findAll])

  return (
    <div className={styles.container}>
      <Head>
        <title>react-crud</title>
        <meta name="description" content="Pagina de crud simple con react y next" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Esto es un crud simple con <a href="https://nextjs.org">React (Next)</a>
        </h1>

        <p className={styles.description}>
          Tabla simple de Personas (Nombres, Apellidos y Edad)
        </p>
        <Form />

        <Table data={findAll}/>
      </main>
    </div>
  )
}
