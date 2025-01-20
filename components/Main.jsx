import React from 'react'


const Main = () => {

  return (
    <main>
      <div className="container">
        <div className='input-area'>
          <form className='d-flex'>
            <div>
              <label>Autore</label>
              <input type="text" placeholder="Inserisci l'autore..." />
            </div>

            <div>
              <label>Titolo</label>
              <input type="text" placeholder='Inserisci il titolo...' />
            </div>

            <div>
              <label>Contenuto</label>
              <input type="text" placeholder='Inserisci il contenuto...' />
            </div>

            <div>
              <label>Immagine</label>
              <input type="" placeholder='Inserisci URL immagine...' />
            </div>

            <div>
              <label>Categoria</label>
              <input type="text" placeholder='Inserisci la categoria...' />
            </div>

            <div>
              <label>Stato</label>
              <input type="text" placeholder='Inserisci lo stato...' />
            </div>

            <div className='tags-area'>
              <span>Tags:</span>
              <input type="checkbox" />
              <label>React</label>
              <input type="checkbox" />
              <label>Html</label>
              <input type="checkbox" />
              <label>JS</label>
              <input type="checkbox" />
              <label>CSS</label>
            </div>
          </form>
          <button type='submit'>Inserisci</button>
        </div>

        <h2>ARTICOLI</h2>
        <ul>
          <div>
            <img src="" alt="" />
            <li>Il cavaliere oscuro<div><i className="fa-solid fa-pencil"></i><i className="fa-solid fa-trash"></i></div></li>
          </div>
        </ul>
      </div>
    </main>
  )
}

export default Main