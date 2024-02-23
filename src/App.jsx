import HomeDetails from "./components/HomeDetails"
import { ptBR } from "date-fns/locale";
import { formatDistanceToNow } from "date-fns";
import { useState } from "react";
import { toast } from 'sonner'

// import dynamic from "next/dynamic";
import MDEditor, { commands } from '@uiw/react-md-editor'
import "@uiw/react-md-editor/markdown-editor.css";

function App() {
    const [shouldShowOnBoarding, setShouldShowOnBoarding] = useState(false)
    const [shouldShowThatNote, setShouldShowThatNote] = useState(false)
    const [idFromNote, setIdFromNote] = useState('')
    const [search, setSearch] = useState('')
    const [content, setContent] = useState('')
    const [title, setTitle] = useState('')
    const [notes, setNotes] = useState(() => {
        const notesOnStorage = localStorage.getItem("notes");
        if (notesOnStorage) {
            return JSON.parse(notesOnStorage);
        }

        return [];
    });

    function handleSearch(event) {
        const query = event.target.value;

        setSearch(query);
    }

    const filteredNotes =
        search !== ""
            ? notes.filter((note) =>
                note.content.toLowerCase().includes(search.toLocaleLowerCase())
            )
            : notes;

    function handleCreateNote() {
        setShouldShowOnBoarding(true)
    }

    function onNoteCreated(content, title) {
        const newNote = {
            id: crypto.randomUUID(),
            title: title,
            date: new Date(),
            content: content,
        };

        const notesArray = [newNote, ...notes];

        setNotes(notesArray);
        localStorage.setItem("notes", JSON.stringify(notesArray));
    }

    function handleTitleChange(event) {
        setTitle(event.target.value)

        if (!event.target.value && !content) {
            setShouldShowOnBoarding(false)
        }
    }

    function handleSaveNote(event) {
        if (content === '') {
            toast.warning('Sua nota está vazia!')
        }

        if (title === '') {
            toast.warning('Sua nota está sem título!')
        }

        event.preventDefault()
        onNoteCreated(content, title)
        setContent('')
        setTitle('')
        setShouldShowOnBoarding(false)
        toast.success('Nota criada com sucesso!')
    }

    function handleCleanNote() {
        setContent('')
        setTitle('')
        setShouldShowOnBoarding(false)
    }

    function getIdFromNote(id) {
        setIdFromNote(id)
    }

    function deleteNote(id) {
        // let text = "Deseja deletar sua nota?";

        // if (confirm(text) == true) {
        const updatedNotes = notes.filter((note) => note.id !== id);

        setNotes(updatedNotes);
        localStorage.setItem("notes", JSON.stringify(updatedNotes));

        toast.error("Nota deletada com sucesso!");
        setShouldShowThatNote(false)
        // } else {
        //     return
        // }
    }

    function copyNote(content) {
        navigator.clipboard.writeText(content);
        toast.success("Nota copiada com sucesso!");
    }

    const codePreview = {
        name: "preview",
        keyCommand: "preview",
        value: "edit",
    };

    return (
        <HomeDetails>
            <form>
                <input type="text" placeholder="Busque suas notas de texto ..." onChange={handleSearch} />
            </form>

            <div className="content">
                <div className="card addedCard" onClick={(handleCreateNote)}>
                    <h3 className="advice">Clique nesse card e adicione sua nota de texto <i className="uil uil-arrow-up-right"></i></h3>
                    <p className="advice down">
                        Escreva uma nota em texto que será salva automaticamente, lembrando que será salva <b>NESTE dispositivo</b>. A sincronização não
                        funciona entre dispositivos.
                    </p>
                </div>

                {filteredNotes.map((note) => {
                    return (
                        <div className="card gradientCard" key={note.id} onClick={() => { setShouldShowThatNote(true), getIdFromNote(note.id) }}>
                            <h3>{note.title}</h3>
                            <i className="date">{formatDistanceToNow(note.date, { locale: ptBR, addSuffix: true })}</i>
                            <MDEditor height={150} value={note.content} onChange={setContent}
                                className="markdown-preview" preview="preview"
                                extraCommands={[codePreview, commands.fullscreen]}>{note.content}</MDEditor>
                        </div>)
                })}

                {shouldShowOnBoarding ? (
                    <div className="modal">
                        <div className="modal-content">
                            <input type="text" onChange={handleTitleChange} value={title} placeholder="Título da Nota" />

                            <div className="markdown">
                                <MDEditor height={300} value={content} onChange={setContent}
                                    className="markdown-editor" preview="edit"
                                    extraCommands={[codePreview, commands.fullscreen]} />
                            </div>

                            <div className="buttons markdown-edit">
                                <button type="button" className="btnSave" onClick={handleSaveNote}>
                                    <span>Salvar nota <i className="uil uil-check-circle"></i></span>
                                </button>
                                <button type="button" className="btnCancel" onClick={() => { handleCleanNote() }}>
                                    <span>Cancelar <i className="uil uil-times-circle"></i></span>
                                </button>
                            </div>
                        </div>
                    </div>
                ) : null}

                {shouldShowThatNote ? (
                    <div className="modal">
                        {notes.map((note) => {
                            return (
                                idFromNote === note.id ? (
                                    <div className="modal-content" key={note.id}>
                                        <i className="date"><strong>{note.title}</strong> - {formatDistanceToNow(note.date, { locale: ptBR, addSuffix: true })}</i>

                                        <div className="markdown-preview">
                                            <MDEditor value={note.content} onChange={setContent}
                                                className="markdown-preview-card" height={500} preview="preview"
                                                extraCommands={[codePreview, commands.fullscreen]} >{note.content}</MDEditor>
                                        </div>

                                        <div className="buttons">
                                            <button type="button" className="btnMarkdown" onClick={() => copyNote(note.content)}>
                                                <span>Copiar Nota <i className="uil uil-trash-alt"></i></span>
                                            </button>

                                            <button type="button" className="btnDelete" onClick={() => deleteNote(note.id)}>
                                                <span>Deletar nota <i className="uil uil-trash-alt"></i></span>
                                            </button>

                                            <button type="button" className="btnCancel" onClick={() => setShouldShowThatNote(false)}>
                                                <span>Fechar nota <i className="uil uil-times-circle"></i></span>
                                            </button>
                                        </div>
                                    </div>
                                ) : null
                            );
                        })}
                    </div>
                ) : null}


            </div>
            <button className="addBtn" onClick={handleCreateNote}><i className=" uil uil-plus-circle" /></button>
        </HomeDetails >
    )
}

export default App
