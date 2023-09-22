import Image from 'next/image'

export default function Home() {
  const  objetos = [{nome: "Danilo", idade: 18, aluno: true}];
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Next.js</h1>
      <ul>
        {
          lista.map(
            (item) => (
              <li key={item.nome}>
                {item.nome} - {item.idade} 
              </li>
            )
          )
        }
      </ul>
    </main>
  )
}
