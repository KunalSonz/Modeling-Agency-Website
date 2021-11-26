import React from 'react';
import Nav from './nav1';

const Service = () => {
  return(
    <>
      <div className = "services">
        <Nav/>
        <div className = "sectionTopic">
        <h1>Services We Provide</h1>
        </div>
        <div className = "serviceInfo">
          <div className = "serviceCard">            
            <section className = "serviceImg">
            <img src="myimage/CelebManagement.png" alt="service1" />
            </section>
            <section className = "cardData">
            <h3>Celebrity Management</h3>
            <p>We as a Celebrity Management Company, work with celebrities to make the right blend of network and schedule to keep our client in hands of our customer.</p>
            </section>            
          </div>
          <div className = "serviceCard">            
            <section className = "serviceImg">
            <img src="myimage/casting.png" alt="service2" />
            </section>
            <section className = "cardData">
            <h3>Casting</h3>
            <p>We work as a Casting Management Company in creating a client who is willing to work on the needs of the casting individual. We work as the middle man to work in casting the best person in the company.</p>
            </section>            
          </div>
          <div className = "serviceCard">            
            <section className = "serviceImg">
            <img src="myimage/fashionphotographer.png" alt="service3" />
            </section>
            <section className = "cardData">
            <h3>Fashion Photography</h3>
            <p>It is said that Fashion photography is about selling the clothing or garments products. It focuses on the product and not on the model. Although model may be an important part of the Fashion photography shoot, the studio as to ensure that the focus does not shift from the product.</p>
            </section>            
          </div>
          <div className = "serviceCard">            
            <section className = "serviceImg">
            <img src="myimage/modelcordinator.png" alt="service3" />
            </section>
            <section className = "cardData">
            <h3>Model Cordinator</h3>
            <p>We provide models for a variety of assignments like films, serials, catalogues, ramp walks, product demos, print and TV commercials. We have International models, kid models, character artists, body part models and lingerie models</p>
            </section>            
          </div>
        </div>
        
      </div>
    </>   
  )
}

export default Service;