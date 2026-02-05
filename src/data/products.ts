export interface Product {
  id: string;
  name: string;
  category: string;
  shortDescription: string;
  composition: string;
  benefits: string[];
  dosage: string;
  presentation: string;
  storage?: string;
  image: string; 
}

import p1 from "@/assets/p1.png";
import p2 from "@/assets/p2.png";
import p3 from "@/assets/p3.png";
import p4 from "@/assets/p4.png";
import p5 from "@/assets/p5.png";
import p6 from "@/assets/p6.png";
import p7 from "@/assets/p7.png";
import p8 from "@/assets/p8.png";
import p9 from "@/assets/p9.png";
import p10 from "@/assets/p10.png";
import p11 from "@/assets/p11.png";
import p12 from "@/assets/p12.png";
import p13 from "@/assets/Gemini_Generated_Image_6gdw7f6gdw7f6gdw.png";
import p14 from "@/assets/p14.png";

export const products: Product[] = [
  {
    id: "gbs-prolife",
    name: "GBS PROLIFE",
    category: "Soil & Water Probiotic",
    shortDescription: "Advanced probiotic for healthy pond bottom and water quality management.",
    composition: "B.Coagulans, B.Polymyxa, B.Megaterium, B.Pumilis, B.Licheniformis, Cellulomonas Spp, Nitrosomonas Spp, Nitrobacter Spp, Lactic acid Bacillus. All Potency: 29 B.cfu/gm",
    benefits: [
      "Maintains stable plankton",
      "Helps to control & regulating the Vibrio loads",
      "Breaks down the organic waste by animal",
      "Effective in sludge degradation & maintains healthy pond bottom",
      "Maintains BOD and COD levels and improves DO levels",
      "Improves feeding and improves FCR"
    ],
    dosage: "250gms per acre (or) As directed by Aqua Consultant",
    presentation: "1 KG (250 Grm x 4 pouch)",
    image: p1
  },
  {
    id: "minpro",
    name: "G-MINPRO",
    category: "Chelated Minerals with Probiotics",
    shortDescription: "Chelated mineral supplement with beneficial probiotics for aquaculture.",
    composition: "Trace minerals such as Zinc, Manganese, Copper, Iron, Selenium and Chromium. Chelated minerals such as Cobalt, Copper, Iron, Magnesium, Potassium, Sodium, Calcium, Phosphorous. Probiotics such as Bacillus group of strains, Lactic acid group of strains and Vitamins, Amino acids and Enzymes.",
    benefits: [
      "Improves metabolic functions",
      "Improves FCR and Weight gain",
      "Enhances immune system and resistance against disease",
      "Boosts osmoregulation",
      "Develops and maintain planktons",
      "Balance and maintains pH of pond water"
    ],
    dosage: "Regular usage 5-10 kg per acre. For Pond preparation 25kg per acre. For fish regular usage 5kg per acre (or) As directed by the Aqua Consultant.",
    presentation: "10 kg",
    image: p2
  },
  {
    id: "gbs-gut-remedy",
    name: "GBS GUT REMEDY",
    category: "Gut Probiotic",
    shortDescription: "Specialized probiotic for gut health and digestive efficiency.",
    composition: "Lactic acid Bacillus, Lactobacillus, Bacillus subtilis, Bacillus licheniformis, Sea weed extract, D-L Methionine, Antioxidants, Herbals, Vitamins, Enzymes and Growth Promoters.",
    benefits: [
      "Boosts efficiency of the digestive system",
      "Improves absorption of nutrients and trace minerals for better growth",
      "Improves feed conversion rate with better FCR",
      "Faster growth and weight gain",
      "Reduces Gut Problems and wet litter Problem"
    ],
    dosage: "Regular usage 5-10gms per KG feed (or) As directed by the Aqua Consultant.",
    presentation: "1 kg",
    storage: "Keep in cool and dry place",
    image: p3
  },
  {
    id: "gbs-booster",
    name: "GBS BOOSTER",
    category: "Growth Promoter",
    shortDescription: "Natural growth promoter for enhanced weight gain and performance.",
    composition: "Soya Powder - 20gms, L-Lysine - 15gms, Bile acids - 20gms, Vitamin-C - 25gms, Magnesium sulphate - 20gms, Amylase - 10000IU, Potassium Chloride - 20gms",
    benefits: [
      "Enhances body Growth and body Weight",
      "Develops new tissues",
      "Prevents stress and acts as immune modulators and antioxidants",
      "Reduces Mortalities",
      "Effective in vitamins deficiency and malnutrition"
    ],
    dosage: "Regular usage 5-10gms per KG feed (or) As directed by the Aqua Consultant.",
    presentation: "1 kg",
    storage: "Keep in cool and dry place",
    image: p4
  },
  {
    id: "gbs-immune-c",
    name: "GBS IMMUNE-C",
    category: "Vitamin-C Feed Supplement",
    shortDescription: "Stabilized Vitamin C supplement for immune enhancement.",
    composition: "Stabilized Vitamin C Feed Supplement with essential nutrients.",
    benefits: [
      "Helps body absorb iron and keeps immune system healthy",
      "Prevents physical abnormalities and deformities of the skeleton",
      "Essential dietary feed supplement for shrimp, prawn and fish",
      "Improves disease resistance against pathogens like Vibrio, Aeromonas, and White Spot Virus",
      "Improves feed utilization and growth performance",
      "Helps in better protein synthesis leading to faster weight gain and improved FCR"
    ],
    dosage: "5-10gms per KG feed (or) As directed by Aqua Consultant.",
    presentation: "1 kg",
    storage: "Keep in cool and dry place",
    image: p5
  },
  {
    id: "gbs-white-care",
    name: "GBS WHITE CARE",
    category: "White Gut & White Fecal Remedy",
    shortDescription: "Effective remedy for white gut and white fecal disease in shrimp.",
    composition: "Cellulase 1000IU, Cinnamon powder 10gms, Vitamin B Complex 10gms, Cellulomonas cartae 2B.cfu/gm, Pediococcus acidolactici 2B.cfu/gm, Aspergillus oryzae 2B.cfu/gm, Thiobacillus denitrificans 2B.cfu/gm, Streptococcus faecium 2B.cfu/gm, Paracoccus denitrificans 2B.cfu/gm",
    benefits: [
      "Reduces the incidents of white gut and white fecal",
      "Increases the immunity of the animal and enhances Ig against disease",
      "Promotes feed digestion and absorption",
      "Maintains a healthy hepatopancreas and balances gut flora",
      "Prevents the propagation of pathogenic bacteria in gut and maintains balanced gut pH",
      "Improves the survival rate and productivity",
      "Improves growth rate and FCR"
    ],
    dosage: "5-10gms per KG feed (or) As directed by Aqua Consultant.",
    presentation: "1 kg",
    storage: "Keep in cool and dry place",
    image: p6
  },
  {
    id: "gbs-mincare-liq",
    name: "GBS MINCARE Liq",
    category: "Liquid Chelated Minerals with Probiotics",
    shortDescription: "Liquid mineral supplement for easy application in aquaculture.",
    composition: "Zinc 8gms, Copper 2gms, Manganese 1gm, Iron 1gm, Selenium 1gm, Chromium 1gm, Cobalt 2gms, Magnesium 50gms, Sodium 120gms, Potassium 60gms, Calcium 680gms, Phosphorous 5gms, Lactic acid Bacillus 1B.cfu/gm, L-Lysine 2gms, Vitamin A 1gm, Amylase 10000IU",
    benefits: [
      "Improves metabolic functions",
      "Improves FCR and Weight gain",
      "Enhances immune system and resistance against diseases",
      "Boosts osmoregulation",
      "Develops and maintain planktons",
      "Balances and maintains pH of pond water"
    ],
    dosage: "Regular usage 5 Litre per hectare. For pond preparation 10 Litre per hectare. For fish regular usage 2.5 Litre per hectare (or) As directed by Aqua Consultant.",
    presentation: "10 ltr",
    image: p7
  },
  {
    id: "gbs-omega-grow",
    name: "GBS OMEGA GROW",
    category: "Fish Oil with Nutrients",
    shortDescription: "Premium fish oil enriched with essential nutrients for aquaculture.",
    composition: "Vitamin E (Tocopherol) 2,500 IU, L-Lysine 2,000 mg, DL Methionine 2,000 mg, Zinc (Chelated) 10mg/ml, Vitamin C (Stabilized) 5,000 mg, Selenium (Organic) 5 mg, Probiotics (Bacillus spp.) 1 Million CFU, Spirulina Extract 500 mg, Omega-3 Fatty Acids (EPA/DHA) 2,000 mg, Yeast Extract (MOS & Beta-Glucan) 1,500 mg, Carrier Base q.s. to 100g/ml",
    benefits: [
      "Acts as feed attractant",
      "Improves Immunity and Growth",
      "Improves Shrimp Liver health and minimizes stress",
      "Enhances resistance against Diseases",
      "Improves FCR",
      "Saves time and money in cleaning up at the end of Harvest",
      "Enhances Moulting and Growth in Shrimp"
    ],
    dosage: "10-15 ml per KG feed (or) As directed by Aqua Consultant.",
    presentation: "5 litre and 1 litre",
    storage: "Keep in cool and dry place",
    image: p8
  },
  {
    id: "growfit",
    name: "GROWFIT",
    category: "Protein Binding Gel",
    shortDescription: "Advanced protein binder for improved feed stability and nutrition.",
    composition: "Protein based supplement with vitamins such as Vitamin A, E, C, B1, B2, B6, B12, Niacinamide, Folic acid, essential minerals, attractants and growth promoters.",
    benefits: [
      "Binds all powder formulations, nutrients and probiotics supplements",
      "Water stable and increases the bio-availability of feed supplements",
      "Contains attractive flavour and palatability that increases feed intake",
      "Reduces wastage and prevents loss of active ingredients",
      "Easily digestible and improves FCR",
      "Enhances absorption and utilization of essential and trace minerals"
    ],
    dosage: "20 ml per kg of pellet feed (or) As directed by Aqua Consultant.",
    presentation: "20 ltr",
    image: p9
  },
  {
    id: "gbs-dcp",
    name: "GBS-DCP",
    category: "Di-Calcium Phosphate",
    shortDescription: "High-quality calcium and phosphorus supplement for aquaculture.",
    composition: "Ca: NLT 21%, P: NLT 18%. Dicalcium Phosphate (DCP) - Used as a feed supplement which provides Ca & P in feed for animals.",
    benefits: [
      "Prevents soft shells in aqua and improves shell thickening",
      "Extensively applied in enhancing hybridization rate, pregnancy rate and endurance rate",
      "Enhances livestock ability of anti-plague and anti-disease",
      "Prevents rickets, paralysis, diarrhea and soft-shell"
    ],
    dosage: "5-10 kg/acre (or) As directed by Aqua Consultant.",
    presentation: "10 kg",
    image: p10
  },
  {
    id: "gbs-genetic-zeo",
    name: "GBS GENETIC ZEO",
    category: "Zeolite Powder",
    shortDescription: "Natural zeolite for water purification and toxin absorption.",
    composition: "Natural Zeolite 85%, Yucca schidigera 5%",
    benefits: [
      "Decreases ammonia levels in pond and filtrates water for cleaner pond",
      "Regulates pH level of pond water and provides micro nutrients",
      "Increases dissolved oxygen content and enhances water quality",
      "Cleans the pond by increasing growth and reproduction of plankton",
      "Zeolite absorbs toxic gases like ammonia, nitrate and hydrogen sulphide",
      "Removes turbidity and improves growth"
    ],
    dosage: "10-15 kg per Acre",
    presentation: "25 kg",
    image: p11
  },
  {
    id: "biopro-ps",
    name: "BIOPRO-PS",
    category: "Consortium of Beneficial Bacteria",
    shortDescription: "Multi-strain probiotic consortium for comprehensive pond management.",
    composition: "Rhodococcus, Rhodobacter, Nitrobacter, Nitrosomonas, Bacillus subtilis, Bacillus megaterium, Bacillus polymyxa, Thiobacillus.",
    benefits: [
      "Helps in corrosion of accumulated organic wastes",
      "Controls disease causing pathogens",
      "Promotes growth of beneficial bacteria",
      "Improves quality of pond water and soil",
      "Reduces stress on aquatic animals",
      "Maintains healthy phytoplankton bloom"
    ],
    dosage: "2 to 5 litres per acre (or) As directed by Aqua Consultant.",
    presentation: "20 ltr",
    image: p12
  },
  {
    id: "gbs-vib-x",
    name: "GBS VIB-X",
    category: "BKC Based Aqua Disinfectant",
    shortDescription: "Powerful disinfectant for pond and equipment sanitation.",
    composition: "Alkyl Dimethyl Benzyl Ammonium Chloride 80% with stabilizers (B.K.C-80%)",
    benefits: [
      "Prevents bacterial infections like antenna cut, swollen gills, broken appendages, gill rot, tail rots etc.",
      "Prevents fungal, viral and protozoal diseases",
      "Stimulates and improves regular moulting cycles in scampi and shrimp",
      "Improves the quality of pond water and prevents water pollution",
      "Controls the over production of phytoplankton and cleans the body of fish, scampi and shrimps",
      "Controls the excess production of mucus in fish and cleans external parasites in fish and prawns"
    ],
    dosage: "500ml per Acre with 3ft depth of water level in prawn pond. 1000ml for fish pond (or) As directed by Aqua Consultant.",
    presentation: "1 ltr",
    image: p13
  },
  {
    id: "gbs-oxytab",
    name: "GBS OXYTAB",
    category: "Dissolved Oxygen Generator",
    shortDescription: "Emergency oxygen tablets for critical oxygen management.",
    composition: "Consortia of dissolved oxygen releasers, Absorbents and Deodorizers.",
    benefits: [
      "Quickly releases Dissolved Oxygen (DO) to the pond water",
      "Reduces the subaqueous content of ammonium and nitrogen",
      "Eliminates carbon dioxide and hydrogen sulphide (H2S)",
      "Prevents and controls pollution caused by unionized ammonia, Iron, hydrogen sulphide, methane and sulphur dioxide",
      "Converts the toxic substances in the pond water into their non-toxic form",
      "Provides a healthy environment to the cultured animals"
    ],
    dosage: "Prawn/Shrimp: 500 gm per acre. Fish: 400gm per acre.",
    presentation: "10 kg",
    image: p14
  }
];

export const getProductById = (id: string): Product | undefined => {
  return products.find(product => product.id === id);
};