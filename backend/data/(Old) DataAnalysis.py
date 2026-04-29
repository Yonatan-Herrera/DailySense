import numpy as np
import pandas as pd
import matplotlib.pyplot as plt
import seaborn as sns
from sklearn.model_selection import train_test_split
from sklearn.preprocessing import StandardScaler
from sklearn.neighbors import KNeighborsClassifier
from sklearn.metrics import accuracy_score
from sklearn.pipeline import make_pipeline
from sklearn.model_selection import cross_val_score, KFold

#Trying to create synthetic expansion of dogs disease dataset with Generative Profiling
import pandas as pd
import numpy as np

# Set a random seed so the results are the same every time you run it
np.random.seed(42)

# 1. Define the number of simulated dogs you want
num_dogs = 5000

# 2. Define the "Disease Profiles" (The statistical rules)
# We define how common the disease is, and the probabilities of symptoms
profiles = {
    'Healthy':         {'prob': 0.60, 'hr_mean': 80,  'hr_std': 10, 'fever_prob': 0.05, 'lethargy_prob': 0.10, 'risk': 0},
    'Gastroenteritis': {'prob': 0.15, 'hr_mean': 100, 'hr_std': 15, 'fever_prob': 0.40, 'lethargy_prob': 0.70, 'risk': 1},
    'Kennel Cough':    {'prob': 0.15, 'hr_mean': 110, 'hr_std': 15, 'fever_prob': 0.60, 'lethargy_prob': 0.60, 'risk': 1},
    'Parvovirus':      {'prob': 0.05, 'hr_mean': 140, 'hr_std': 20, 'fever_prob': 0.90, 'lethargy_prob': 0.95, 'risk': 2},
    'Heart Disease':   {'prob': 0.05, 'hr_mean': 130, 'hr_std': 25, 'fever_prob': 0.10, 'lethargy_prob': 0.80, 'risk': 2}
}

# 3. Start generating data
diseases = list(profiles.keys())
probabilities = [profiles[d]['prob'] for d in diseases]

# Randomly assign a disease to each of the 5000 dogs based on the probabilities
assigned_diseases = np.random.choice(diseases, size=num_dogs, p=probabilities)

# Create lists to hold our generated data
synthetic_data = []

for disease in assigned_diseases:
    prof = profiles[disease]
    
    # Generate Heart Rate using a normal distribution (bell curve)
    hr = np.random.normal(loc=prof['hr_mean'], scale=prof['hr_std'])
    
    # Generate Symptoms using binomial distribution (coin flips based on probability)
    fever = np.random.binomial(n=1, p=prof['fever_prob'])
    lethargy = np.random.binomial(n=1, p=prof['lethargy_prob'])
    
    # Generate a random Weight Class
    weight_class = np.random.choice(['Toy', 'Medium', 'Large', 'Giant'], p=[0.2, 0.4, 0.3, 0.1])
    
    # Adjust Heart Rate based on Weight Class (smaller dogs naturally have faster HRs)
    if weight_class == 'Toy':
        hr += 15
    elif weight_class == 'Large':
        hr -= 10
    elif weight_class == 'Giant':
        hr -= 20
        
    synthetic_data.append({
        'Condition': disease,
        'Heart_Rate': max(40, int(hr)), # Ensure HR doesn't drop below 40
        'Has_Fever': fever,
        'Low_Activity': lethargy,
        'Weight_Class': weight_class,
        'Vet_Risk_Level': prof['risk']
    })

# 4. Convert to a DataFrame
synthetic_train_df = pd.DataFrame(synthetic_data)

print(f"Successfully generated {len(synthetic_train_df)} synthetic dog records!\n")
print("--- DISTRIBUTION OF VET RISK LEVELS ---")
print(synthetic_train_df['Vet_Risk_Level'].value_counts(normalize=True).round(3) * 100)
print("\n--- DATA PREVIEW ---")
print(synthetic_train_df.head())

#Training random forest on synthetic dogs disease dataset
import pandas as pd
from sklearn.ensemble import RandomForestClassifier
from sklearn.model_selection import train_test_split
from sklearn.metrics import classification_report

# 1. Prepare Features and Target
# Notice we DO NOT include 'Weight' here, only 'Weight_Class' which is already in the synthetic data
features = ['Heart_Rate', 'Low_Activity', 'Has_Fever', 'Weight_Class']

# Convert the text categories (like 'Toy', 'Large') into numbers for the model
X = pd.get_dummies(synthetic_train_df[features], drop_first=True)
y = synthetic_train_df['Vet_Risk_Level']

# 2. Split the data to test how well the prototype works
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

# 3. Train the Random Forest Prototype
rf_prototype = RandomForestClassifier(n_estimators=100, random_state=42)
rf_prototype.fit(X_train, y_train)

# 4. Check the performance
y_pred = rf_prototype.predict(X_test)
print("--- PROTOTYPE MODEL PERFORMANCE ---")
print(classification_report(y_test, y_pred))



