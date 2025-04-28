# Identification of Lineages, Species Types and Resistance


Profiling bacteria and viruses from sequencing data is essential for understanding the identity, diversity, and dynamics of infectious disease populations.

Typically this can involve multiple analytical layers, from broad identification of the organisms present in a sample (which can also detect potential contamination) to detailed characterization of sub-species and lineages or serotypes. 

Tools like [Kraken](https://github.com/DerrickWood/kraken2) can perform the first step: classifying sequencing reads by comparing them against large reference databases using k-mer-based algorithms. This initial, high-throughput profiling allows us to quickly determine the presence of bacteria, viruses, and other microbes in a sample. These general classifiers are essential for metagenomic surveillance and assessing the microbial composition of clinical or environmental samples. As the database used by Kraken is very large, we will not be running through this analysis here, but there is a nice tutorial found [here](https://github.com/DerrickWood/kraken2/blob/master/docs/MANUAL.markdown) if you would like to use this tool.

After the taxonomic classification, more specialized tools can be used to provide detailed species- or strain-level information. For example, TB-Profiler characterizes Mycobacterium tuberculosis strains and predicts drug resistance mutations, while Kleborate performs similar tasks for Klebsiella pneumoniae, assessing virulence and resistance markers. Other specialized software are available for important pathogenic bacteria, such as Mykrobe and Pathogenwatch. Additionallu, platforms like Nextstrain focus on the phylogenetic and evolutionary dynamics of pathogens, enabling real-time tracking of how bacterial and viral lineages spread and diversify globally. 

Here, we will use two of these specialised tools to profile some sequencing data.

The data used for this exercise will be:

- **Test3_R1.fastq.gz** and **Test3_R2.fastq.gz** – Paired-end 250bp sequence data from _Mycobacterium tuberculosis_, collected from sputum and cultured before DNA library preparation.

- **Kleb1_R1.fastq.gz** and **Kleb1_R2.fastq.gz** – Paired-end 150bp sequence data from _Klebsiella pneumoniae_, collected in Taiwan. 

<br>

### Lineage and antimicrobial resistance calling of _Mycobacterium tuberculosis_:

Here, we will use TB-Profiler, which is a specialised bioinformatics tool that analyzes Mycobacterium tuberculosis sequencing data to predict drug resistance and lineage. It rapidly identifies resistance-associated and lineage-specific mutations from raw reads or assemblies by comparing the assemblies to a database of known mutations.

The 


<br>

Next acitvity: [Transmission Reconstruction](Transmission.html)

