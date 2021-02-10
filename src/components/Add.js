import React from 'react';

export default function Add() {
    const styles = [
        {
            name: "Salegy",
            id: 1
        },
        {
            name: "Reggae",
            id: 2
        },
        {
            name: "Folk",
            id: 3
        },
        {
            name: "Rap",
            id: 4
        },
        {
            name: "Pop",
            id: 5
        },
        {
            name: "CEDM; ‎R&B",
            id: 6
        },
        {
            name: "Christian",
            id: 7
        },
        {
            name: "Slow",
            id: 8
        },
        {
            name: "Country",
            id: 9
        },
        {
            name: "Rock",
            id: 10
        },
        {
            name: "Others",
            id: 11
        },
    ]
    return (
        <form>
            <input name="title" type="text" placeholder="Title" required/>
            <input name="name" type="text" placeholder="Artist" required/>
            <input name="price" type="number" placeholder="Price" required/>
            <select name="style">
                <option value="">Style</option>
                {styles.map(style => (
                    <option key={style.id} value={style.name}>{style.name}</option>
                ))}
            </select>
            <textarea rows="12" name="lyrics" type="text" placeholder="Lyrics" required/>
            <button type="submit">Add</button>
        </form>
    )
}
