import './style.scss';

import { Typewriter } from 'react-simple-typewriter';
import Figure from '../../components/figure/Figure';
import Separator from '../../components/separator/Separator';

const About = () => {
    return (
        <div className="p-About">
            <h1>
                <Typewriter
                    words={[
                    'Abderahmane Behar\nRahala', // on utilise "\n" pour gérer le saut de ligne
                    ]}
                    loop={false}
                    cursor
                    cursorStyle=""
                    typeSpeed={70}
                    deleteSpeed={120}
                    delaySpeed={1000000000}
                />
            </h1>
            <main>
                <section className='s-helloworld'>
                    <div>
                        <Figure image="ecole42.png" figcaption="École 42" />
                        <Figure image="narutoverse.png" figcaption="J'aime beaucoup l'univers de Naruto" />
                    </div>
                    <div>
                        <p>Hello World</p>
                        <p>
                            Hey, je suis Abderahmane Behar Rahala, un programmeur et développeur web autodidacte et certifié.
                            <br /><br />
                            Je me prépare actuellement à rejoindre l'École 42, une école de programmation de renommée mondiale, axée sur l'apprentissage entre pairs et les projets concrets.
                            <br /><br />
                            Ce site est mon espace pour partager mes projets, mes idées et mes réflexions. Vous êtes le bienvenu ici, que vous soyez développeur, apprenant ou simplement de passage. N'hésitez pas à me contacter.
                        </p>
                    </div>
                </section>
                <Separator title="Éducation" />
            </main>
        </div>
    );
};

export default About;