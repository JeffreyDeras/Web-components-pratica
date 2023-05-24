class Cardnews extends HTMLElement {
    constructor() {
        super();

        const shadow = this.attachShadow({ mode: 'open' });
        shadow.appendChild(this.build());
        shadow.appendChild(this.styles());
    }

    build() {
        const componentRoot = document.createElement('div');
        componentRoot.setAttribute('class', 'card');

        const cardLeft = document.createElement('div');
        cardLeft.setAttribute('class', 'card_left');    

        const autor = document.createElement('span');
        autor.textContent ="By " + (this.getAttribute('autor') || "Anonymous");

        
        const linkTitle = document.createElement('a');
        linkTitle.textContent = this.getAttribute('title');
        linkTitle.href = this.getAttribute('link-url');


        const newsContent = document.createElement('p');
        newsContent.textContent = this.getAttribute('content');

        cardLeft.appendChild(autor);
        cardLeft.appendChild(linkTitle);
        cardLeft.appendChild(newsContent);

        const cardRight = document.createElement('div');
        cardRight.setAttribute('class','card_right');

        const newsImage = document.createElement('img');
        newsImage.src = this.getAttribute("photo")|| "assets/img/Default-Profile-Picture-PNG-High-Quality-Image (1).png";
        newsImage.alt = "Foto da Noticia";
        cardRight.appendChild(newsImage);

        componentRoot.appendChild(cardLeft);
        componentRoot.appendChild(cardRight);

        return componentRoot;
    }

    styles() { 
        const style = document.createElement('style');
        style.textContent = `

        .card {
            width: 75%;
            display: flex;
            flex-direction: row;
            -webkit-box-shadow: 5px 5px 15px 5px #000000;
            box-shadow: 5px 5px 15px 5px #000000;
            justify-content: space-between;
        }
        
        
        
        .card_left {
            display: flex;
            flex-direction: column;
            justify-content: center;
            padding-left: 10px;
        }
        
        .card_left a {
            margin-top: 15px;
            font-size: 25px;
            font-weight: bold;
            color: blue;
            text-decoration: underline}
        
        .card_left span {
            color: gray;
            font-weight: bold;
        
        }
                
        .card_left p {
            color: gray;
        }
        
        `;

        return style;
    }

}

customElements.define('card-news', Cardnews);
