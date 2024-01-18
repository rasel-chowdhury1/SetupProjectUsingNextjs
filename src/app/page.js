"use client"
import State from './State'
import styles from './page.module.css'

export default function Home() {

  const fun = () =>{
    alert('clicked button')
  }

  return (
    <main>
      <h1>Hello Hablu programmers</h1>
      <button onClick={fun}>cliek me</button>
      <State></State>
    </main>
  )
}
