class CustomHero extends HTMLElement {
    connectedCallback() {
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML = `
            <style>
                .hero {
                    background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.8)), url('http://static.photos/nature/1200x630/42');
                    background-size: cover;
                    background-position: center;
                    height: 100vh;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                    text-align: center;
                    color: white;
                }
                
                .hero-logo {
                    max-width: 600px;
                    margin-bottom: 2rem;
                }
                
                .hero-buttons {
                    display: flex;
                    gap: 1rem;
                    margin-top: 2rem;
                }
                
                @media (max-width: 768px) {
                    .hero-logo {
                        max-width: 80%;
                    }
                    
                    .hero-buttons {
                        flex-direction: column;
                    }
                }
            </style>
            <section class="hero pt-16">
                <div class="px-4">
                    <img src="https://www.rockstargames.com/reddeadredemption2/dist/img/global/rdr2_logo.png" alt="Red Dead Redemption 2" class="hero-logo mx-auto">
                    <h1 class="text-2xl md:text-4xl font-bold mb-4">WINNER OF OVER 175 GAME OF THE YEAR AWARDS</h1>
                    <p class="text-lg md:text-xl max-w-3xl mx-auto mb-8">Now available on PC, PlayStation 4, and Xbox One</p>
                    <div class="hero-buttons">
                        <a href="#" class="bg-red-700 hover:bg-red-800 text-white font-bold py-3 px-8 rounded">
                            BUY NOW
                        </a>
                        <a href="#" class="bg-transparent hover:bg-gray-800 text-white font-bold py-3 px-8 border border-white rounded">
                            WATCH TRAILER
                        </a>
                    </div>
                </div>
            </section>
        `;
    }
}

customElements.define('custom-hero', CustomHero);