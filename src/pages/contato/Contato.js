import './stylecontato.css';
import Header from '../../components/header/Header';
import Footer from '../../components/footer';

function Contato() {
    return (
        <>
            <Header />
            <section id="contato">
                <div class="container">
                    <div class="content">
                        <div class="left">
                            <form action="https://formsubmit.co/renanincioprgmdr@gmail.com" method="POST">
                                <fieldset class="form">
                                    <legend><h1>Fale Comigo!</h1></legend>
                                    <label for="nome">Nome</label>
                                    <input className='input' id="nome" type="text" placeholder="Digite seu nome" name="nome" required></input>
                                    <label for="email"><span lang="en-us">E-mail</span></label>
                                    <input className='input' id="email" type="email" placeholder="Digite seu e-mail" name="email" required></input>
                                    <input className='input' type="hidden" name="_captcha" value="false"></input>
                                    <input className='input' type="hidden" name="_next" value="http://127.0.0.1:60580/"></input>
                                    <label for="mensagem">Mensagem</label>
                                    <textarea className='mensagem' id="mensagem" name="mensagem" placeholder="Digite sua mensagem"></textarea>
                                </fieldset>
                                <button class="enviar" type="submit">Enviar</button>
                            </form>
                        </div>

                        <div class="right">
                            <p>
                                <span class="icon-phone"></span>
                                xx xxxxx-xxxx
                            </p>
                            <p>
                                <span class="icon-mail"></span>
                                testeeexemplo@gmail.com
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    )
}

export default Contato;