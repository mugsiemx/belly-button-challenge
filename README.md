# belly-button-challenge
# Module 14
Interactive dashboard to explore the Belly Button Biodiversity dataset

Background
In this assignment, interactive dashboard is built to explore the Belly Button Biodiversity datasetLinks to an external site, which catalogs the microbes that colonize human navels.  The dataset reveals that a small handful of microbial species (also called operational taxonomic units, or OTUs, in the study) were present in more than 70% of people, while the rest were relatively rare.

   ![Image of Bacteria](https://github.com/mugsiemx/belly-button-challenge/blob/main/Images/bacteria.jpg)

Instructions to begin:
-Create a new repository for this project called belly-button-challenge. Do not add this Challenge to an existing repository.
-Clone the new repository to your computer.
-Inside your local git repository, copy the files from in the StarterCode folder contained within the Module 14 Challenge zip file. i.e. index.html, samples.json, and the static folder.
-Push the above changes to GitHub.
-Deploy the new repository to GitHub Pages.
Instructions for coding:
1. Use the D3 library to read in samples.json from the URL https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json.
2. Create a horizontal bar chart with a dropdown menu to display the top 10 OTUs found in that individual.
    --Use sample_values as the values for the bar chart.
    --Use otu_ids as the labels for the bar chart.
    --Use otu_labels as the hovertext for the chart.
3. Create a bubble chart that displays each sample.
    --Use otu_ids for the x values.
    --Use sample_values for the y values.
    --Use sample_values for the marker size.
    --Use otu_ids for the marker colors.
    --Use otu_labels for the text values.
4. Display the sample metadata, i.e. in individual's demographic information
5. Display each key-value pair from the metadata JSON object on the web page anywhere
6. Update all the plots when a new sample is selectioned
6a. Added a Number of Washings per Week gauge from the additional challenge notes (not to specs, aesthetics only)

   ![Image of Web Page](https://github.com/mugsiemx/belly-button-challenge/blob/main/Images/dashboard.png)

7. Deploy your app to a free static page, hosting service, such as GitHub Pages
    --submit the links to my deployment and GitHub repository.
    -- ensured the repository will have regular commits and a thorought README.md.file


References
Hulcr, J. et al. (2012) A Jungle in There: Bacteria in Belly Buttons are Highly Diverse, but Predictable. Retrieved from: http://robdunnlab.com/projects/belly-button-biodiversity/results-and-data/Links to an external site.

References and Interesting Code, Thoughts and Credits
- Chris Coyier /https://css-tricks.com/author/chriscoyier/ for randomId code
- Plotly Graphing Libraries (mostly: https://plotly.com/python/tick-formatting/)
- https://www.youtube.com/@WebDevSimplified for the drop down menu
- https://www.w3schools.com/ for many coding options and details
- https://stackoverflow.com/ for many coding options, details, and explanations as to why
- for the challenges of coding, admiring our differing approaches, and just plain moral support
    my colleagues: Rhi Sehl, Molly Gac, and Julie Eremeeva
    my instructors: Wil Zigler, Yasmine Aitouny, and Michelle DeMars
    my graders: for being patient with grading my coding projects
    the BSC Learning Team, YES!! YOU ALL ROCK!!
