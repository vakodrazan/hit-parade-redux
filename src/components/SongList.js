import React from 'react'
import { Link } from 'react-router-dom';

function SongList({song}) {
    // function favouriteIcon() {
    //     if (song.isFavorite) {
    //         return (
    //             <i 
    //                 onClick={() => toggleFavourite(song.id)}
    //                 className="ri-heart-fill icon-fill"
    //             ></i>
    //         )
    //     }
    //     return (
    //         <i 
    //             onClick={() => toggleFavourite(song.id)} 
    //             className="ri-heart-line icon-fill"
    //         ></i>
    //     )
    // }

    function cartIcon() {
        // const isALreadyInCart = cartItem.some(item => item.id === song.id)
        // if (isALreadyInCart) {
        //     return (
        //         <i 
        //             onClick={() => removeFromCart(song.id)}
        //             className="ri-shopping-cart-2-fill icon-fill"
        //         ></i>
        //     )
        // }
        return (
            <i 
                onClick={() => addToCart(song)} 
                className="ri-shopping-cart-2-line icon-lightblue"
            ></i>
        )
    }

    return (
        <section className="song-list section-layout">
            {/* <span>
                {favouriteIcon()}
            </span> */}

            <div>
                <h3>{song.title}</h3>
                <span>{song.name}</span>
            </div>
            <div className="votes">
                <div>
                    <span>{song.upvote}</span>
                    <i className="ri-arrow-up-line"></i>
                </div>
                <div>
                    <span>{song.downvote}</span>
                    <i className="ri-arrow-down-line"></i>
                </div>
            </div>
            <span>
                {cartIcon()}
            </span>
            <span className="action-button">
                <Link to={`/song/${song.id}`}>
                    <i className="ri-more-fill icon-lightblue"></i>
                </Link>
                <span>
                    <i className="ri-delete-bin-line"></i>
                </span>
            </span>
        </section>
    )
}

export default SongList
