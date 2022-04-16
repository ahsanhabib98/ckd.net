import React from 'react'
import { Container } from 'react-bootstrap'

function About() {
  
  return (
    <div className="about-section p-5" id='about'>

      <Container fluid>
        <div className="inner-content b-radious-16">
          <p>Clinical tests have long been considered appropriate in diagnosing kidneys and chronic kidney disease (CKD) because of their noninvasiveness, simplicity, and cost. Timely detection and management of CKD is the most effective method to address the expanding global burden induced by CKD. For routine screening, the usefulness and implementation of creatine and estimated Glomerular Filtration Rate (eGFR)and their roles in CKD progression, are recommended in the guidelines of clinical practice. We adopted a transfer learning approach and combined SimpleRNN (Simple Recurrent Neural Network) and MLP ( Multi-Layer Perception) to develop a hybrid model- CKD.Net to predict multi-class CKD stages. This hybrid neural network architecture was pre-trained on clinical datasets to predict kidney function based on 1 million datasets having heterogeneous 27 features relating to CKD. We employed various data augmentation strategies to balance the five CKD stage datasets. We carefully utilized the hypermeter to minimize the loss and validation loss to reduce overfitting and increase model generalization. Performance comparisons of CKD.Net were evaluated using accuracy, precision, recall, and F1-Score and compared with generic SimpleRNN and MLP models. CKD.Net demonstrated classification accuracy of 99.2 -100 percent. Furthermore, the CKD.Net network was utilized to predict eGFR and creatinine. The key risk factors of CKD were identified and clinical significance was discussed. The significant association eGFR and creatinine predictions were demonstrated by  Pearson correlation values of 0.99 and 0.90 respectively. CKD.Net web application was developed in order to automate the prediction of CKD disease. To the best of our knowledge, CKD.Net model is the first essential step toward predicting multi-stages of kidneys as an effective, real-time, automated screening tool. CKD.Net allows noninvasive measurement of kidney function, which is a crucial objective of AI (Artificial Intelligence) powered functional automation in clinical practice.</p>
        </div>
      </Container>
    </div>
  )
}

export default About