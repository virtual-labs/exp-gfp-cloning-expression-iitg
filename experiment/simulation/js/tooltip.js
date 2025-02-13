document.addEventListener('DOMContentLoaded', (event) => {
    // Get all the icons in the icon-container
    var icons = document.querySelectorAll('#icon_container .tooltip-icon');

    icons.forEach(function(icon) {
        icon.isTooltipShown = false;
    
        icon.addEventListener('click', function(event) {
            event.stopImmediatePropagation(); 
    
            var currentIcon = event.currentTarget;
            
            if (currentIcon.isTooltipShown) {            
                hideTooltip();
                currentIcon.isTooltipShown = false;
            } else {
                showTooltip(currentIcon.id, currentIcon.src, currentIcon.alt, event); 
                currentIcon.isTooltipShown = true;
            }
        });
    });
});


export var tooltips = [
    {
        id: 'button_gfp',
        text: 'This represents the gene of interest,here GFP'
    },
    {
        id: 'button_eukaryotic_vector',
        text: "This figure represents a Eukaryotic Expression vector, the key components of the vector include: KanR (Kanamycin Gene): Provides resistance to kanamycin, allowing transformed cells to be selected. pBR322 Ori (Origin of Replication): Ensures replication of the plasmid in bacterial cells. f1 Ori (f1 Origin of Replication): Allows for single-stranded DNA production in the presence of helper phage. T7 Promoter: A strong promoter recognized by T7 RNA polymerase, enabling high-level transcription of the inserted gene. MCS (Multiple Cloning Site): Contains restriction enzyme recognition sites (SalI, EcoRI, BamHI) for inserting the gene of interest.T7 Terminator: Ensures proper termination of transcription."
    },
    {
        id: 'button_recombinant_eukaryotic_expression',
        text: "This image represents a recombinant eukaryotic expression vector that has been modified by cloning the GFP (Green Fluorescent Protein) gene into the Multiple Cloning Site (MCS). The presence of GFP allows for the visualization of gene expression in eukaryotic cells, as GFP emits green fluorescence when expressed"
    },
    {
        id: 'button_flask',
        text: 'Flasks can be used for making solutions or for holding, containing, collecting, or sometimes volumetrically measuring chemicals, samples, solutions, etc. for chemical reactions or other processes such as mixing, heating, cooling, dissolving, precipitation, boiling (as in distillation), or analysis.'
    },
    {
        id: 'button_pipette',
        text: 'A pipette (sometimes spelled as pipet) is a type of laboratory tool commonly used in chemistry and biology to transport a measured volume of liquid, often as a media dispenser.'        
    },    
    {
        id: 'button_petri_dish',
        text: 'A petri dish is used to culture different types of cells, including bacteria and molds. It often contains a nutritional medium on which the cells can grow. A petri dish is a flat, shallow dish made of glass or plastic with a suitable lid.'
    },
    {
        id: 'button_T25_flask',
        text: 'T25 flask is the smallest flask and has a surface area of 25 cm². It is suitable for small-scale experiments and is often used for seeding cells for subsequent expansion in larger flasks.'        
    },
    {
        id: 'button_vial',
        text: 'Vials are typically used to store medicines or laboratory samples. Although vials are mainly found in the medical field, they are critical to the workflow in various settings, from law enforcement agencies to department stores.'
    }
];

// Function to show a tooltip with the given image and text
export function showTooltip(id, image, text, event) {
    // Get the tooltip container and its elements
    var tooltipContainer = document.getElementById('tooltip_display');
    var tooltipImage = document.getElementById('tooltip-image');
    var tooltipText = document.getElementById('tooltip-text');

    // Check if the tooltip container exists
    if (!tooltipContainer) {
        console.error('tooltip_display not found');
        return;
    }

    // Find the tooltip object for the clicked icon
    var tooltip = tooltips.find(function(t) {
        return t.id === id; 
    });

    // If a tooltip object was found, use its text
    if (tooltip) {
        text = tooltip.text;
    }

    // Update the tooltip's content
    tooltipImage.src = image;
    tooltipText.textContent = text;

    // Show the tooltip
    tooltipContainer.style.display = 'block';
}

// Function to hide the tooltip
export function hideTooltip() {
    // Get the tooltip container
    var tooltipContainer = document.getElementById('tooltip_display');

    // Check if the tooltip container exists
    if (!tooltipContainer) {
        console.error('tooltip_display not found');
        return;
    }

    // Hide the tooltip
    tooltipContainer.style.display = 'none';
}

