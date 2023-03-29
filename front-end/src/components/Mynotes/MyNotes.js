import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/esm/Button'
import Card from 'react-bootstrap/esm/Card'
import { Link } from 'react-router-dom'
import MainScreen from '../MainScreen'
// import {notes} from './note'
import axios from 'axios'

const MyNotes = () => {
    const onDelete = (e) => {
        window.confirm("Are you sure want to delet", e);

    }
    const [note, setNote] = useState([]);
    const fetchNotes = async () => {
        const { data } = await axios.get("http://localhost:5000/api/notes")
        setNote(data);
    }
    useEffect(() => { fetchNotes() }, [])
    return (
        <div>
            <MainScreen title='Welcome back sonet Thomas'>
                <Link to="createnote">
                    <Button style={{ marginLeft: 10, marginBottom: 10 }} size="lg">
                        Create New Note
                    </Button>
                </Link>
                {
                    note?.map((note) => (
                        <Card key={note._id} style={{ margin: '10px', width: '100%' }}>
                            <Card.Header style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                                <span>{note.title}</span>
                                <div>
                                    <Button href={`/note/${note._id}`}>Edit</Button>
                                    <Button variant='danger' className='mx-2' onClick={() => onDelete}>Delete</Button>
                                </div>
                            </Card.Header>
                            <Card.Body>
                                {note.content}
                                <footer className='blackQuote-footer'>created-on -date</footer>
                            </Card.Body>
                        </Card>
                    ))
                }

            </MainScreen>
        </div>
    )
}

export default MyNotes
