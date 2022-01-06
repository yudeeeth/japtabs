import React,{useEffect,useState} from 'react';
import './Card.css';
import templates from './types/cardContent';

const Card = (props) => {
    const [height,setHeight] = useState(20);
    const [width,setWidth] = useState(18);
    // const [data ,setdata] = useState({"_id":{"$oid":"61b5f6fffbc27dff99ab1e6f"},"serialNo":6834,"deckType":"kanji","level":1,"fields":{"kanji":"上","kanjiMeaning":"Above, Up, Over","onYomi":"じょう","kuYomi":"うえ, あ, のぼ, うわ, かみ","radicals":"ト, 一","radicalIcons":"-","radicalNames":"toe, ground","radicalIconNames":"","meaningMnemonic":"You find a <span class=\"radical-highlight\" title=\"Radical\" rel=\"tooltip\">toe</span> on the <span class=\"radical-highlight\" title=\"Radical\" rel=\"tooltip\">ground</span>. It's weird, because it's <span class=\"kanji-highlight\" title=\"Kanji\" rel=\"tooltip\">above</span> the ground, not where toes belong.","meaningInfo":"Focus your imagination on how body parts should be buried, not above ground like this. Sure, finding a toe is a little strange, but finding a toe above the ground? Downright silly.","readingMnemonic":"Of course when you find a toe <span class=\"kanji-highlight\" title=\"Kanji\" rel=\"tooltip\">above</span> the ground, you want to know where the toe came from. When you examine it, you see a name written on there. This toe belongs to the local clumsy farmhand, <span class=\"reading-highlight\" title=\"Reading\" rel=\"tooltip\">Jou</span>rm (<span lang=\"ja\">じょう</span>).","readingInfo":"Try to remember Jourm, the local farmhand. He is a recurring character that will come up anytime the reading for a kanji is <span lang=\"ja\">じょう</span>.<br />He is a very big man, and he wears farmer's clothes. It's important to imagine your version of Jourm as very big, because it will help us to differentiate him from Jo-Anne, who is the character associated with the similar, but shorter reading (and character) <span lang=\"ja\">じょ</span>. Although Jourm will develop as you go through all the <span lang=\"ja\">じょう</span> reading kanji, for now just imagine him as a big, kinda slow dude who works for a local farmer. Also, he only has nine or fewer toes, apparently.","sortId":27},"sortId":27,"__v":0});
    const [data ,setdata] = useState({"_id":{"$oid":"61b5f6fffbc27dff99ab1c8e"},"serialNo":6353,"deckType":"radical","level":1,"fields":{"radicalName":"barb","radical":"亅","radicalMeaning":"This radical is shaped like a <span class=\"radical-highlight\" title=\"Radical\" rel=\"tooltip\">barb</span>. Like the kind you'd see on barb wire. Imagine one of these getting stuck to your arm or your clothes. Think about how much it would hurt with that little hook on the end sticking into you. Say out loud, \"Oh dang, I got a barb stuck in me!\"","radicalIcon":"","sortId":1},"sortId":1,"__v":0});
    // const [data ,setdata] = useState({"_id":{"$oid":"61b5f6fefbc27dff99ab03be"},"serialNo":1,"deckType":"vocab","level":1,"fields":{"vocab":"大人","vocabMeaning":"Adult","reading":"おとな","speechType":"Noun","contextJp":"これは、大人のりょうきんです。","contextEn":"This is the adult price.","contextJp2":"大人は三人だけです。","contextEn2":"There are only three adults.","contextJp3":"大人たちはいざかやにいった。","contextEn3":"The adults went to an izakaya.","meaningExp":"This kanji combines <span class=\"kanji-highlight\" title=\"Kanji\" rel=\"tooltip\">big</span> and <span class=\"kanji-highlight\" title=\"Kanji\" rel=\"tooltip\">person</span>. If you're a child, how do you think of adults? You just think of them like big people. That's why this combination of kanji means <span class=\"vocabulary-highlight\" title=\"Vocabulary\" rel=\"tooltip\">adult</span>.","readingExp":"\"I'm an <span class=\"kanji-highlight\" title=\"Kanji\" rel=\"tooltip\">adult</span>, which means I have adult responsibilities. <span class=\"reading-highlight\" title=\"Reading\" rel=\"tooltip\">Oh, Toner</span> (<span lang=\"ja\">おとな</span>)? I need some of that for my terrible printer...\" ... now feel so sad you have such a terrible printer that runs out of toner every day. Ohhhh Toner!","kanji":"大, 人","kanjiName":"Big, Person","sortId":45},"sortId":45,"__v":0});
    useEffect(() => {
        if(props.height !== undefined){
            setHeight(props.height)
        }
        if(props.width !== undefined){
            setWidth(props.width);
        }
    })
    return (
        <div className="card-container" 
        style={{width:`${width}em`,
                height: `${height}em`}} 
        >
            <div className="card-inner">
                <div className="card-front">
                    {templates[`${data.deckType} front`](data.fields)}
                </div>
                <div className="card-back">
                    {templates[`${data.deckType} back`](data.fields)}
                </div>
            </div>

        </div>
    )
}

export default Card;