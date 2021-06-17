'''
Task:

Create a script called make_pages.py that converts any .txt document sitting in the raw folder to a simple HTML page
Create a git repository for your travel blog and host the generated website online
Challenge: Style your blog using CSS
Challenge: Change the script to also include image files from the raw folder
'''

# Create pre-existing resources:
    # CSS
        # General
        # Images holder
    # Index.html
        # Post title holders

# [On first run or before] generate a 'formatted' directory to hold html files

# Get the contents of the raw directory and check the title of each .txt against .html files in the formatted directory
# For <filename>.txt in raw without corresponding file in formatted:
    # Create <filename>.html in formatted
    # Add standad DOM starting tags to <filename>.html
        # Include CSS, etc. in header
    # Get first line of text file:
        # Wrap in <h1> tags
        # append to <filename>.html
    # Get .img files with matching (non-letters stripped) filenames from raw:
        # Wrap in image holder tags
    # Append image holder to <filename>.html
    # For subsequent lines of text file:
        # If line length < 30:
            # Wrap in <h2> tags
            # append to <filename>.html
        # Else:
            # Wrap in <p> tags
            # append to <filename>.html
    # Add body end tags, etc., to <filename>.html
    # Append link to <filename>.html to index
    # Automatically push to git??