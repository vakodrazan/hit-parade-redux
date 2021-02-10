import React from 'react';
import SongList from './SongList';
export default function Song({ songList }) {

    // sort the list from the highest to the lowest (upvote - downvote)
    // const sortSongs = allSongs.sort((itemA, itemB) => {
    //     const songA = itemA.upvote - itemA.downvote;
    //     const songB = itemB.upvote - itemB.downvote;
    //     return songB - songA;
    // });

    return (
        <article className="songs">
            {songList.map(song => (
                <SongList song={song} key={song.id} />
            ))}
        </article>
    )
}

