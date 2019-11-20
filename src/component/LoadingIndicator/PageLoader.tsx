import React from "react";
import '../../styles/pageLoader.scss';
import LoadingGif from '../../resources/loadingIndicator.gif';

export const PageLoader : React.FC = () =>{
    return (
        <div id = "PageLoaderDiv" className = "is-fullwidth is-fullheight">
            <img src = {LoadingGif} id = "PageLoaderGif" alt = "Loading indicator is displayed"/>
        </div>
    );
}