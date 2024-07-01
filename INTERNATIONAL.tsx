/* eslint-disable no-multi-str */
import Head from "next/head"
import Image from "next/image"
import { Container } from "components/content"
import { Banner } from "components/specifics"
 
import InternationalServiceSrc from "public/images/international/o2m-services.png"
import bannerSrc from "public/images/international/map.png"
import Card from "components/specifics/international/cards/card/Card"
import Article from "components/specifics/international/articles/Article"
import PartnersLogos from "components/specifics/international/partners/Partner"
 
import styles from "./International.module.scss"
import NewsItem from "views/news/NewsItem"
import News from "views/news/News"
 
const International = () => {
    const slides = [
        {
            text1: "",
            src: bannerSrc,
            alt: "O2m International"
        }
    ]
    const description = "O2M Academia est une structure dédiée à la montée en compétences sur les"
        + " sujets RSE : climat, éco-conception, communication responsable."
 
    return (
        <>
            <Head>
                <title>O2m International</title>
                <meta name="description" content={description} />
            </Head>
            <article className={styles.international}>
                <Banner
                    slides={slides}
                    style={{ height: 250 }}
                    variant="titleOnly"
                    icon="./images/international/O2m blanc.svg"
                    iconAlt="Logo O2m"
                    isTitle
                />
                <Container isSection>
                <div className="mb-2 mt-7" style={{ width: "auto" }}>
                <h3 className="o2mtitle bg-secondary-3 fs-30">
                            <span>Who we are</span>
                        </h3>
                </div>
                    <div className={styles.international__content}>
                        <div className={styles.international__content__texts}>
                            <p className={styles.international__content__texts__desc}>
                                {description}
                            </p>
                            <p>
                                Nos formateurs sont les experts O2M. Ce groupe compte aujourd’hui une cinquantaine
                                de collaborateurs dont 70% d’ingénieurs, docteurs et consultants qui interviennent
                                au plus près des équipes de nos clients sur l’ensemble de leurs enjeux ESG et
                                notamment : stratégie, diagnostics et audits RSE et bas carbone, projets de
                                recherche et développement de méthodologies, déploiement de solutions numériques
                                de mesure d’impact et d’éco-conception, communication responsable.
                            </p>
                            <p>
                                Profitez de l’apport théorique d’experts mais aussi de leurs retours d’expériences
                                terrain via l’accompagnement au quotidien qu’ils réalisent avec diverses
                                entreprises.
                            </p>
                            <p>
                                Nous organisons des formations en présentiel ou distanciel, en intra (pour le
                                compte d’une seule entreprise) ou inter (plusieurs entreprises) et dans vos locaux
                                ou les nôtres.
                            </p>
                            <p>
                                Nous proposons des cursus standards ou personnalisables selon vos besoins.
                            </p>
                        </div>
                        <div className={styles.international__content__image}>
                            <Image src={InternationalServiceSrc } alt="Illustration des services" />
                        </div>
                    </div>
                    <div className="mb-2 mt-7" style={{ width: "auto" }}>
                            <h3 className="o2mtitle bg-secondary-3 fs-30">
                            <span>What we offer</span>
                            </h3>
                        </div>
                        <div className={styles.international__details__key}>
                            <Card/>
                    </div>
                    <div className="mb-2 mt-7" style={{ width: "auto" }}>
                            <h3 className="o2mtitle bg-secondary-3 fs-30">
                            <span>News</span>
                            </h3>
                        </div>
                        <div className="article">
                            <Article />
                    </div>
                    <div className="mb-2 mt-7" style={{ width: "auto" }}>
                            <h3 className="o2mtitle bg-secondary-3 fs-30">
                            <span>They trust us </span>
                            </h3>
                        </div>
                    <div className="logos">
                        <PartnersLogos />
                    </div>
                </Container>
            </article>
        </>
    )
}
export default International