import './style.scss';

import { Typewriter } from 'react-simple-typewriter';
import Figure from '../../components/figure/Figure';
import Separator from '../../components/separator/Separator';
import Education from '../../components/education/Education';

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
                <section className='s-Helloworld'>
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
                <section className='s-Education'>
                    <Education title="École 42," second_title="Marseille, France" date="2025" description="Actuellement inscrit dans l'une des écoles de code les plus sélectives et innovantes au monde. Modèle d'apprentissage 100 % basé sur les projets et l'entraide entre pairs, sans professeurs ni cours magistraux. Accent mis sur la programmation bas niveau (C), les algorithmes, le développement web, la sécurité, l’architecture logicielle et le travail en équipe." image="ecole422.png" figcaption="École 42" />
                    <Education title="OpenClassrooms," second_title="Développeur web certifié" date="2023" description="Réalisé plusieurs projets concrets : intégration responsive, fonctionnalités dynamiques en JavaScript, React & NodeJS, utilisation d’API REST, optimisation & SEO, méthodologie agile." image="openclassrooms.png" figcaption="OpenClassrooms" style={{flexDirection: 'row-reverse'}} />
                    <Education title="Lycée Jean Perrin," second_title="Marseille, France" date="2018 - 2021" description="Baccalauréat obtenu en informatique, mathématiques, sciences de la vie et de la Terre." image="jeanperrin.png" figcaption="Lycée Jean Perrin" />
                </section>
                <Separator title="Expérience" />
                <section className='s-Experience'>
                    <Education title="Technicien support web & Ventes – IONOS," second_title="Marseille, France" date="2023 - 2024" description="J’ai accompagné les clients dans la résolution de leurs problèmes liés à leur site web, que ce soit sur WordPress, pour un nom de domaine ou leur hébergement. J’intervenais en direct pour diagnostiquer et corriger des soucis techniques, autant sur le front-end que le back-end. Je m’occupais aussi de la facturation, des évolutions de services, et je proposais des solutions adaptées à leurs besoins (certificats SSL, hébergements, outils SEO…). L’objectif : les aider à remettre leur site sur pied, à l’optimiser, tout en restant à l’écoute, clair, et pro dans l’accompagnement." image="ionos1.png" figcaption="IONOS" style={{flexDirection: 'row-reverse'}} />
                </section>
                <section className='s-Love'>
                    <div>
                        <p>Les choses que j'aime faire</p>
                        <p>Jouer aux échecs</p>
                        <p>Sortir marcher et méditer</p>
                        <p>Faire du sport</p>
                        <p>M'amuser avec les chats</p>
                    </div>
                    <div>
                        <Figure image="cats.png" />
                        <Figure image="chess.png" />
                    </div>
                </section>
            </main>
        </div>
    );
};

export default About;