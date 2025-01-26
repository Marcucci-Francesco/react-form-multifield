import React from 'react'
import { useState } from 'react';



const category = [
  "Frontend",
  "Fullstack",
  "DevOps",
  "Backend"
];

const tags = [
  { id: 1, name: 'CSS' },
  { id: 2, name: 'HTML' },
  { id: 3, name: 'JAVASCRIPT' },
  { id: 3, name: 'REACT' },
  { id: 4, name: 'NODEJS' }
];

const formReset = {
  title: '',
  description: '',
  image: '',
  category: '',
  tag: []
};

const Main = () => {

  const [articles, setArticles] = useState([]);
  const [form, setForm] = useState(formReset);

  const handleChangeTags = (e) => {
    const { value } = e.target;
    const newTags = [...form.tag];

    if (newTags.includes(value)) {

      setForm({
        ...form,
        tag: newTags.filter(tag => tag !== value)
      });
    } else {

      newTags.push(value);
      setForm({
        ...form,
        tag: newTags
      });
    }
  }

  const newPost = (e) => {
    let value = e.target.value
    let name = e.target.name

    if (name === 'category') {

      setForm({
        ...form,
        [name]: category[parseInt(value)]
      });
    } else {

      setForm({
        ...form,
        [name]: value
      });
    }

    if (e.target.type === 'checkbox') {
      return handleChangeTags(e);
    }
  }

  const handlerSumbit = (e) => {
    e.preventDefault();

    const newArticle = {
      id: crypto.randomUUID(),
      ...form
    };

    setArticles([newArticle, ...articles]);
    setForm(formReset);
  };

  const handleDeleteArticles = (id) => {
    setArticles(articles.filter(article => article.id !== id))
  }

  return (
    <main>
      <div className="container-fm container-fluid mt-5">
        <div className="card">
          <form action="" onSubmit={handlerSumbit}>
            <div className="row justify-content-around mt-4">

              {/* Titolo  */}
              <div className="mb-3 col-5">
                <label htmlFor="exampleFormControlInput1" className="form-label">Titolo</label>
                <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Inserisci il titolo..." onChange={newPost} />
              </div>

              {/* Immagine */}
              <div className="mb-3 col-5">
                <label htmlFor="exampleFormControlInput1" className="form-label">Immagine</label>
                <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Inserisci l'URL..." onChange={newPost} />
              </div>

              {/* Contenuto */}
              <div className="mb-3 col-11">
                <label htmlFor="exampleFormControlTextarea1" className="form-label">Descrizione</label>
                <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" placeholder='Inserisci la descrizione...' onChange={newPost} ></textarea>
              </div>

              {/* Categoria */}
              <div className="mb-3 col-11">
                <label htmlFor="exampleFormControlTextarea1" className="form-label">Categoria</label>
                <select className="form-select" aria-label="Default select example" onChange={newPost} >
                  <option selected>Seleziona la categoria</option>
                  {category.map((category, index) =>
                    <option key={index} value={index}>{category}</option>
                  )}
                </select>
              </div>

              {/* tags */}
              <div className="form-check mb-3 mt-2">
                <label htmlFor="exampleFormControlTextarea1" className="form-label mx-4">Tags</label>
                {tags.map(tag =>
                  <>
                    <div className=' mx-5' key={`tag${tag.id}`} >
                      <input
                        className="form-check-input"
                        type="checkbox"
                        id={`tag${tag.id}`}
                        name="tags"
                        value={tag.id}
                        onChange={handleChangeTags}
                        checked={form.tag.includes(tag.id.toString())}
                      />
                      <label className="form-check-label" htmlFor={`tag${tag.id}`}>
                        {tag.name}
                      </label>
                    </div>
                  </>
                )}
              </div>

            </div>

            {/* Button */}
            <div className="row justify-content-around">
              <button className="btn btn-primary col-4 mb-4" type="submit">Carica l'articolo</button>
            </div>

          </form>
        </div>
      </div>

      <div className="container my-5">
        <div className="card p-4 text-center">
          <h2 className="mb-3">Articoli</h2>
          <table className="table table-striped">
            <thead>
              <tr>
                <th>Immagine</th>
                <th>Titolo</th>
                <th>Descrizione</th>
                <th>Categoria</th>
                <th>Tags</th>
                <th>Azioni</th>
              </tr>
            </thead>
            <tbody>
              {articles.map(article => (
                <tr key={article.id}>
                  <td>
                    <img src={article.image} alt={article.title} width="100" />
                  </td>
                  <td>{article.title}</td>
                  <td>{article.description}</td>
                  <td>{article.category}</td>
                  <td>{article.tag.join(', ')}</td>
                  <td>
                    <button onClick={() => handleDeleteArticles(article.id)} className="btn btn-danger btn-sm" >
                      <i className="fa-solid fa-trash-can"></i>
                    </button>
                  </td>
                </tr>
              ))}

            </tbody>
          </table>

        </div>
      </div>

    </main>
  )
}

export default Main