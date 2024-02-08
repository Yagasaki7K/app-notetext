import HomeDetails from "./components/HomeDetails"
import { ptBR } from "date-fns/locale";
import { formatDistanceToNow } from "date-fns";
import { useState } from "react";
import { toast } from 'sonner'

function App() {
    const [shouldShowOnBoarding, setShouldShowOnBoarding] = useState(false)
    const [content, setContent] = useState('Escreva um texto para a sua nota ..')

    function handleCreateNote() {
        setShouldShowOnBoarding(true)
    }

    function handleContentChange(event) {
        setContent(event.target.value)

        if (!event.target.value) {
            setShouldShowOnBoarding(true)
        }
    }

    function handleSaveNote(event) {
        if (content === '') {
            return
        }

        event.preventDefault()
        setContent('')
        setShouldShowOnBoarding(true)

        toast.success('Nota criada com sucesso!')
    }

    return (
        <HomeDetails>
            <form action="">
                <input type="text" placeholder="Busque suas notas de texto ..." />
            </form>

            <div className="content">
                <div className="card addedCard" onClick={(handleCreateNote)}>
                    <h3 className="advice">Clique nesse card e adicione sua nota de texto <i className="uil uil-arrow-up-right"></i></h3>
                    <p className="advice down">
                        Escreva uma nota em texto que será salva automaticamente, lembrando que será salva <b>NESTE dispositivo</b>. A sincronização não
                        funciona entre dispositivos.
                    </p>
                </div>

                <div className="card gradientCard" onClick={handleCreateNote}>
                    <h3>{formatDistanceToNow(new Date(), { locale: ptBR, addSuffix: true })}</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque cupiditate veritatis iste natus a obcaecati, optio fugit error eaque aliquam dolor impedit vel excepturi voluptas qui nihil eveniet sunt molestiae? lorem</p>
                </div>

                {shouldShowOnBoarding ? (
                    <div className="modal">
                        <div className="modal-content">
                            <textarea autoFocus onChange={handleContentChange} value={content} />
                            <div className="buttons">
                                <button type="button" className="btnSave" onClick={handleSaveNote}>
                                    <span>Salvar nota <i className="uil uil-check-circle"></i></span>
                                </button>
                                <button type="button" className="btnCancel" onClick={() => setShouldShowOnBoarding(false)}>
                                    <span>Cancelar <i className="uil uil-times-circle"></i></span>
                                </button>
                            </div>
                        </div>
                    </div>
                ) : null}

            </div>
            <button className="addBtn" onClick={handleCreateNote}><i className=" uil uil-plus-circle" /></button>
        </HomeDetails >
    )
}

export default App
