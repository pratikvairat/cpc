import React, { useState } from 'react';
import "./css/FAQ.css";
import 'bootstrap-icons/font/bootstrap-icons.css';
import { FAQQuestion } from '../data/FAQQuestion';

function FAQ() {
    const [accordion, setAccordion] = useState(-1);
    function toggleAccordion(index) {
        if(accordion===index){
            setAccordion(-1);
        }else{
            setAccordion(index);
        }
    }
    return (
        <React.Fragment>
            <section className='container bg-dark'>
                
                    <div class="faq-section">
                        <div class="row">
                            <div class="col-md-6 offset-md-3">
                                <div class="faq-title text-center pb-3">
                                    <h2>FAQ</h2>
                                </div>
                            </div>
                            <div class="col-md-6 offset-md-3">
                                <div class="faq" id="accordion">
                                    {FAQQuestion.map((item, index) =>
                                        <div class="card m-3" key={index} onClick={()=>toggleAccordion(index)}>
                                            <div class="card-header" id="faqHeading-1">
                                                <div class="mb-0">
                                                    <h5 class="faq-title" data-toggle="collapse" data-target="#faqCollapse-1" data-aria-expanded="true" data-aria-controls="faqCollapse-1">
                                                        <span class="badge">{index + 1}</span>{item.question}
                                                    </h5>
                                                </div>
                                            </div>
                                            <div className={accordion===index ? "active":"collap"}id="faqCollapse-1" aria-labelledby="faqHeading-1" data-parent="#accordion">
                                                <div class="card-body">
                                                    <p>{item.answer} </p>
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
               
            </section>
        </React.Fragment>
    )
}

export default FAQ