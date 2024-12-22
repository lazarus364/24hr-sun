import { useState } from "react";
import { useOutletContext } from "react-router-dom"
import Home from "../assets/Home";
import Navbar from "../assets/Navbar";

function Articles({ onAdd, news }) {

    return(
        <>
        {news.map((n, index) => (
            <div key={index} className="side-news" >
            <img src={n.urlToImage} alt={n.title} className="side-news-image" />
            <h2 className="side-news-title" onClick={() => onAdd(n)}>{n.title} </h2>
            </div>
        ))}
        </>
    )
}

export default Articles