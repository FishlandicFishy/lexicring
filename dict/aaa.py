import os

# Define the directory containing your .md files
directory = r'C:\Users\USER\Documents\GitHub\lexicring\dict'

# Loop through all files in the directory
for filename in os.listdir(directory):
    if filename.endswith('.md'):
        filepath = os.path.join(directory, filename)
        
        try:
            # Read the file with UTF-8 encoding
            with open(filepath, 'r', encoding='utf-8') as file:
                content = file.read()
            
            # Replace .html with .md
            new_content = content.replace('.html', '.md')
            
            # Write the changes back to the file with UTF-8 encoding
            with open(filepath, 'w', encoding='utf-8') as file:
                file.write(new_content)
            
            print(f"Processed file: {filename}")
        
        except Exception as e:
            print(f"Error processing file {filename}: {e}")

print("Replacement complete!")
