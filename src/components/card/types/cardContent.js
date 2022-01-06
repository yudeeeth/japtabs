import React from 'react';
import './cardContent.css';
const templates = {
    'radical front': (data) => {
        return (
            <div className="radical-prompt">{data.radical}</div>
        )
    },
    'radical back': (data) => {
        return (<>
            <div className="radical-symbol">{data.radical}</div>
            <div className="radical-name">{data.radicalName}</div>
            <div className="radical-meaning">{data.radicalMeaning}</div>
        </>
        )
    },
    'kanji front': (data)=>{
        return (<>
            <div className="kanji-prompt tooltip">{data.kanji}</div>
        </>
        )
    },
    'kanji back': (data)=>{
        return (<>
            <div className="kanji-symbol tooltip">{data.kanji}</div>
            <div className="kanji-radical-icons">{data.radicalIcons}</div>
            <div className="kanji-yomiContainer">
                <div className="kanji-kunYomi">{data.kuYomi}</div>
                <div className="kanji-onYomi">{data.onYomi}</div>
            </div>
            <div className="kanji-meaning">{data.kanjiMeaning}</div>
            <div className="kanji-readingMn"> Reading mnemonic </div>
            <div className="kanji-meaningMn"> Meaning mnemonic </div>
            {/* <div className="kanji-readingMn">{data.readingMnemonic}</div> */}
            {/* <div className="kanji-readingMn">{data.readingMnemonic}</div> */}
        </>
        )
    },
    'vocab front': (data)=>{
        return (
            <>
                <div className="vocab-prompt">{data.vocab}</div>
            </>
        )
    },
    'vocab back': (data) => {
        return (
            <>
                <div className="vocab-symbol">{data.vocab}</div>
                <div className="vocab-reading">{data.reading}</div>
                <button className="vocabSpeechType">{data.speechType}</button>
                <div className="vocab-meaning">
                    {data.vocabMeaning}</div>
                <div className="vocab-button-container">
                    <div className="vocab-example"> Examples </div>
                    <div className="vocab-readingMn"> Reading Mnemonic</div>
                    <div className="vocab-meaningMn"> Meaning Mnemonic </div>
                </div>
            </>
        )
    }
};

export default templates;
