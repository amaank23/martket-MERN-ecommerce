import React, { useState } from 'react'

const LangMenu = ({ items }) => {
    const [selectedLang, setSelectedLang] = useState('English');
    const [selectLangImg, setSelectedLangImg] = useState('us');
    function onClick(lang, img){
        setSelectedLang(lang);
        setSelectedLangImg(img);
    }
    return (
        <div className='lang-menu'>
            <div className="selected-lang">
            <span class={`flag-icon flag-icon-${selectLangImg}`}></span> {selectedLang} <i class="fas fa-chevron-down"></i>
            </div>
            <ul>
                <li onClick={() => onClick('Germen', 'de')}><span class={`flag-icon flag-icon-de`}></span>Germen</li>
                <li onClick={() => onClick('French', 'fr')}><span class={`flag-icon flag-icon-fr`}></span>French</li>
            </ul>
        </div>
    )
}

export default LangMenu
