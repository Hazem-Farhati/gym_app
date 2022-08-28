import React from 'react'
import "../styles/exerciceListe.css"
import { Link } from 'react-router-dom'
const ExerciceListe = ({ exercice, setExercice, text }) => {
  return (
    <div className='wrapper-body'>
      {exercice.
        filter((el) => el.title.toLowerCase().includes(text))
        .map((ex) =>
            <div className="wrapper">
              <div className="cd">
                <img src={ex.poster} alt="image" />
                <div className="descriptions">
                  <h1>{ex.title}</h1>
                  <p>
                    {ex.description}
                  </p>
                  <Link to={`/exerciceListeDetails/${ex.id}`}>
                    <button>
                      <i className="fab fa-youtube"></i>
                      More-Details
                    </button>
                  </Link>
                </div>
            </div>
          </div>

        )}
    </div>
  )
}

export default ExerciceListe