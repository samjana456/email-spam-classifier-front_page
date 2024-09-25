import pandas as pd

# Load the dataset
df = pd.read_csv('C:/mydatasets/your_dataset_file.csv')  # Replace with your actual file name

# Display the first few rows
print("First few rows of the dataset:")
print(df.head())

# Display basic information about the dataset
print("\nDataset information:")
print(df.info())

# Check for missing values
print("\nMissing values in each column:")
print(df.isnull().sum())
