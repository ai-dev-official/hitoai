import React from 'react'

const Paragraph = ({ description, isdark })  => {
    const sentences = description.split('. ');
    return (
        <>
          {sentences.map((sentence, index) => (
            <p key={index} className={isdark ? "dark__bg" : "product__desc__paragraph"}>
              {sentence.trim()} 
              {index < sentences.length - 1 ? '.' : ''}
            </p>
          ))}
        </>
      );
}

export default Paragraph
