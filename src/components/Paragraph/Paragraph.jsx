import React from 'react'

const Paragraph = ({ description })  => {
    const sentences = description.split('. ');
    return (
        <>
          {sentences.map((sentence, index) => (
            <p key={index} className="product__desc__paragraph">
              {sentence.trim()}
              {index < sentences.length - 1 ? '.' : ''}
            </p>
          ))}
        </>
      );
}

export default Paragraph
