const riskFactorWeights = {
    "i smoke": {
      "Lung Cancer": 2.5,
      "COPD": 2.0,
      "Heart Disease": 1.7,
      "Stroke Risk": 1.5,
      "Bladder Cancer": 1.6,
      "Pancreatic Cancer": 1.4,
      "Oral Cancer": 1.8,
      "Esophageal Cancer": 2.0,
      "Laryngeal Cancer": 1.9,
      "Kidney Cancer": 1.5,
    },
    "i am obese /overweight": {
      "Diabetes": 2.0,
      "Heart Disease": 1.8,
      "Hypertension": 1.7,
      "Osteoarthritis Risk": 1.6,
      "Sleep Apnea": 1.9,
      "Certain Cancers": 1.3,
      "Gallbladder Disease": 1.5,
      "Nonalcoholic Fatty Liver Disease": 1.8,
      "Kidney Disease": 1.4,
      "Infertility": 1.3,
    },
    "i have a family history of this condition": {
      "Cancer": 1.5,
      "Heart Disease": 1.6,
      "Diabetes": 1.4,
      "Alzheimers": 1.3,
      "Hypertension": 1.2,
      "Mental Health Disorders": 1.3,
      "Autoimmune Disorders": 1.4,
      "Osteoporosis Risk": 1.2,
      "Certain Genetic Disorders": 1.8,
      "Thyroid Disorders": 1.3,
    },
    "i am mostly physically inactive": {
      "Heart Disease": 1.5,
      "Diabetes": 1.3,
      "Obesity": 1.4,
      "Osteoporosis": 1.2,
      "Certain Cancers": 1.1,
      "Depression": 1.3,
      "Hypertension": 1.2,
      "Metabolic Syndrome": 1.4,
      "Deep Vein Thrombosis": 1.2,
      "Sarcopenia": 1.3,
    },
    "my diet is poor": {
      "Heart Disease": 1.6,
      "Diabetes": 1.5,
      "Obesity": 1.7,
      "Certain Cancers": 1.2,
      "Digestive Disorders": 1.3,
      "Malnutrition": 1.5,
      "Osteoporosis Risk": 1.3,
      "Anemia Risk": 1.4,
      "Kidney Stones": 1.2,
      "Gout Risk": 1.3,
    },
    "i take a lot of alcohol": {
      "Liver Disease": 2.0,
      "Pancreatic Disease": 1.5,
      "Certain Cancers": 1.4,
      "Heart Disease": 1.3,
      "Mental Health Disorders": 1.2,
      "Osteoporosis": 1.3,
      "Neuropathy Risk": 1.4,
      "Gastritis Risk": 1.5,
      "Pancreatitis": 1.6,
      "Alcoholism Risk": 2.0,
    },
    "i have high stress levels": {
      "Heart Disease": 1.3,
      "Hypertension": 1.4,
      "Mental Health Disorders": 1.5,
      "Digestive Disorders": 1.2,
      "Insomnia Risk": 1.4,
      "Weakened Immune System": 1.3,
      "Chronic Fatigue Syndrome": 1.3,
      "Migraine Risk": 1.2,
      "Skin Conditions": 1.1,
      "Fertility Issues": 1.2,
    },
    "i think it is linked to my environment": {
      "Respiratory Diseases": 1.4,
      "Certain Cancers": 1.3,
      "Allergic Conditions": 1.2,
      "Cardiovascular Disease": 1.2,
      "Neurodegenerative Disorders": 1.1,
      "Endocrine Disruption": 1.2,
      "Skin Conditions": 1.1,
      "Reproductive Issues": 1.2,
      "Developmental Disorders": 1.3,
      "Autoimmune Disorders": 1.1,
    },
    "we have this problem in our family": {
      "Certain Cancers": 1.8,
      "Autoimmune Disorders": 1.6,
      "Genetic Disorders": 2.0,
      "Heart Disease": 1.5,
      "Diabetes": 1.4,
      "Mental Health Disorders": 1.5,
      "Certain Neurological Disorders": 1.7,
      "Certain Metabolic Disorders": 1.6,
      "Developmental Disorders": 1.8,
      "Certain Blood Disorders": 1.7,
    },
    "i have reached/ almost reaching old age": {
      "Heart Disease": 1.5,
      "Cancer": 1.6,
      "Dementia": 1.7,
      "Osteoporosis": 1.4,
      "Arthritis Risk": 1.3,
      "Macular Degeneration": 1.5,
      "Hearing Loss": 1.4,
      "Diabetes Risk": 1.3,
      "Frailty Risk": 1.6,
      "Parkinsons Risk": 1.4,
    },
    "i have high blood pressure": {
      "Stroke Risk": 1.8,
      "Heart Disease": 1.7,
      "Kidney Disease": 1.6,
      "Vision Problems": 1.3,
      "Aneurysm Risk": 1.5,
    },
    "my doctor said I have high cholesterol": {
      "Heart Disease": 1.6,
      "Stroke Risk": 1.5,
      "Peripheral Artery Disease": 1.4,
      "Diabetes Risk": 1.3,
      "Gallstones Risk": 1.2,
    },
    "i experience sleep problems": {
      "Obesity": 1.3,
      "Diabetes Risk": 1.2,
      "Heart Disease": 1.2,
      "Depression": 1.4,
      "Weakened Immune System": 1.3,
    },
    "i am excessively exposed to the sun": {
      "Skin Cancer": 2.0,
      "Premature Aging": 1.5,
      "Eye Damage": 1.3,
      "Immune System Suppression": 1.2,
      "Heat Stroke Risk": 1.4,
    },
    "my oral hygiene is poor": {
      "Gum Disease": 1.7,
      "Heart Disease": 1.2,
      "Diabetes Complications": 1.3,
      "Respiratory Infections": 1.2,
      "Oral Cancer": 1.4,
    },
    "i am always stressed": {
      "Anxiety Disorders": 1.6,
      "Depression": 1.5,
      "Digestive Issues": 1.3,
      "Cardiovascular Disease": 1.4,
      "Autoimmune Disorders": 1.3,
    },
    "i live a sedentary lifestyle": {
      "Obesity": 1.5,
      "Type 2 Diabetes": 1.4,
      "Cardiovascular Disease": 1.5,
      "Certain Cancers": 1.2,
      "Osteoporosis": 1.3,
    },
    "i do not drink water that often": {
      "Kidney Stones": 1.4,
      "Urinary Tract Infections": 1.3,
      "Constipation": 1.3,
      "Heat Exhaustion Risk": 1.5,
      "Cognitive Impairment": 1.2,
    },
    "i take a lot of salt-rich food": {
      "Hypertension": 1.5,
      "Stomach Cancer": 1.3,
      "Osteoporosis Risk": 1.2,
      "Kidney Disease": 1.3,
      "Cardiovascular Disease": 1.4,
    },
    "i usually take a low fiber diet": {
      "Constipation": 1.5,
      "Colorectal Cancer": 1.3,
      "Diverticulitis Risk": 1.4,
      "Obesity Risk": 1.2,
      "High Cholesterol": 1.3,
    },
    "i take little foods containing zinc": {
      "Immune System Weakness": 1.3,
      "Delayed Wound Healing": 1.2,
      "Loss Of Taste": 1.1,
      "Hair Loss": 1.1,
      "Diarrhea Risk": 1.2,
    },
    "i consume a lot of caffeine": {
      "Insomnia": 1.4,
      "Anxiety": 1.3,
      "Heartburn Risk": 1.2,
      "High Blood Pressure": 1.2,
      "Dehydration Risk": 1.1,
    },
  };

export default riskFactorWeights;