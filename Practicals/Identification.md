# Identification of Lineages, Sequence Types and Resistance


Profiling bacteria and viruses from sequencing data is essential for understanding the identity, diversity, and dynamics of infectious disease populations.

Typically this can involve multiple analytical layers, from broad identification of the organisms present in a sample (which can also detect potential contamination) to detailed characterization of sub-species and lineages or serotypes. 

Tools like [Kraken](https://github.com/DerrickWood/kraken2) can perform the first step: classifying sequencing reads by comparing them against large reference databases using k-mer-based algorithms. This initial, high-throughput profiling allows us to quickly determine the presence of bacteria, viruses, and other microbes in a sample. These general classifiers are essential for metagenomic surveillance and assessing the microbial composition of clinical or environmental samples. As the database used by Kraken is very large, we will not be running through this analysis here, but there is a nice tutorial found [here](https://github.com/DerrickWood/kraken2/blob/master/docs/MANUAL.markdown) if you would like to use this tool.

After the taxonomic classification, more specialized tools can be used to provide detailed species- or strain-level information. For example, TB-Profiler characterizes Mycobacterium tuberculosis strains and predicts drug resistance mutations, while Kleborate performs similar tasks for Klebsiella pneumoniae, assessing virulence and resistance markers. Other specialized software are available for important pathogenic bacteria, such as Mykrobe and Pathogenwatch. Additionally, platforms like Nextstrain focus on the phylogenetic and evolutionary dynamics of pathogens, enabling real-time tracking of how bacterial and viral lineages spread and diversify globally. 

Here, we will use two of these specialised tools to profile some of our samples.

The data used for this exercise will be:

- **Test3_R1.fastq.gz** and **Test3_R2.fastq.gz** – Paired-end 250bp sequence data from _Mycobacterium tuberculosis_, collected from sputum and cultured before DNA library preparation.

- **Test5_R1.fastq.gz** and **Test5_R2.fastq.gz** – Paired-end 150bp sequence data from _Mycobacterium tuberculosis_, collected from Peru.

- **assembly.fasta** – The _de novo_ assembled _Klebsiella pneumoniae_ sample, collected in Taiwan, from practical session 1.

<br>

### Lineage and antimicrobial resistance calling of _Mycobacterium tuberculosis_:

Here, we will use TB-Profiler which is a specialised bioinformatics tool that analyzes Mycobacterium tuberculosis sequencing data to predict drug resistance and lineage. It rapidly identifies resistance-associated and lineage-specific mutations from raw reads or alignments (in the BAM format) by comparing variation in assemblies to a database of known mutations.

#### Use the following code to profile the Test3 M.tb sample using the basic TB-Profiler commands:

```bash
tb-profiler profile -1 Test3_R1.fastq.gz -2 Test3_R2.fastq.gz --platform illumina --prefix Test3 --threads 2
```

Where the options specifed are:

|         Option          | Description                                                                                             |
|-------------------------|---------------------------------------------------------------------------------------------------------|
| -1     | The FASTQ file of forward reads of paired-end sequence data or the only FASTQ for single-end sequence data.    |
| -2     | The FASTQ file of reverse reads of paired-end sequence data.    |
| --platform   | The sequencing platform used (Illumina, ONT or PacBio)   |
| --prefix     | The prefix for output files.   |
| --threads     | The FASTQ file of forward reads of paired-end sequence data or the only FASTQ for single-end sequence data.    |


#### _Exercise: Re-run TB-Profiler with the sequencing data for sample Test5._

The files produced by TB-profiler are in the JSON format and saved in a folder called "results".

#### We can collate the profiling results in the JSON format for all samples into a readable .txt file using the following command:

```bash
tb-profiler collate
```

#### Open the resulting text file (it will be called tbprofiler.txt). Which lineages and sub-lineages do the TB samples belong? Is there are drug resistance predicted in the samples?

<br>

### Sequence typing and antimicrobial resistance profiling of _Klebsiella pneumoniae_:

Kleborate can be used to profile _Klebsiella_ species, particularly _Klebsiella pneumoniae_, from whole-genome sequencing data. It identifies key features such as species assignment, antimicrobial resistance genes, virulence loci, and sequence types. Escherichia species can also be profiled with Kleborate.

Unlike TB-Profiler, Kleborate will require an assembled genome in the FASTA format as the input. 

We will use the _de novo_ assembly from practical session 1 to run this analysis, which should be found in the Kleb1 folder. 

#### Kleborate can be run using the following command:

```bash
cd Kleb1/ ## Navigate to the assembly

kleborate -a assembly.fasta -o Kleb1_kleborate -p kpsc --trim_headers 
```

Where the options specifed are:

|         Option          | Description                                                                                             |
|-------------------------|---------------------------------------------------------------------------------------------------------|
| -a     | FASTA consensus sequence from assembly.    |
| -o     | The name of the directory for saving output files.    |
| -p   | Specifies the preset modules to run (kpsc = _Klebsiella pnuemoniae_ species complex)   |
| --trim_headers     | Trim module names from column headers in the output.   |

#### Open the output file in the Kleb1_kleborate/ folder. What sequence type is our sample? Do we have any drug resistance predicted?

<br>

Next acitvity: [Transmission Reconstruction](Transmission.html)

