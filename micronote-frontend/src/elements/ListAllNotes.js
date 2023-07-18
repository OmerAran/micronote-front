import React, { useEffect, useState } from "react";
import NoteService from "../service/NoteService";
import Navbar from "./Navbar";
import { Button } from "react-bootstrap";


const ListAllNotes = () => {
    const [notes, setNotes] = useState([]);

    useEffect(() => {
        fetchNotes();
    }, []);

    const fetchNotes = async () => {
        try {
            const notesData = await NoteService.get();
            setNotes(notesData);
        } catch (error) {
            console.error('Error fetching notes:', error);
        }
    };
    return (
        <div>
            <Navbar />
            <div>
                <h1>List of Notes</h1>
                <ul>
                    {notes.map((note) => (
                        <ul key={note.id}>
                        <li>{note.content}</li>
                        <li>{note.user.username}</li>
                        <Button style={{color:'blue'}}>detail</Button>
                        <Button style={{color:'green'}}>edit</Button>
                        <Button style={{color:'red'}}>delete</Button>
                        <br/><br/><br/>
                        </ul>
                        
                    ))}
                </ul>
            </div>
        </div>
    );
}
export default ListAllNotes;