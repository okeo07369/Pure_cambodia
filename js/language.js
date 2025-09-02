// Définition des traductions
const translations = {
    fr: {
        home: "Accueil",
        cosmetics: "Huiles Cosmétiques",
        spirits: "Alcools Artisanaux",
        mission: "Pure Cambodia est une entreprise engagée dans la valorisation des richesses agricoles du Cambodge. Nous développons des produits sains, éthiques et respectueux de l'environnement, en étroite collaboration avec les communautés locales.\n\nSpécialisés dans les huiles cosmétiques naturelles et les alcools artisanaux, nous allions savoir-faire traditionnel et exigence de qualité pour proposer des produits authentiques, durables et responsables.\n\nNotre mission est de faire découvrir au plus grand nombre la qualité et la diversité des produits issus de l'agriculture cambodgienne, aussi bien sur le marché local qu'à l'international.",
        contact: "Contactez-nous",
        contact_cta: "Pour connaître notre gamme disponible ou devenir partenaire",
        contact_btn: "Nous contacter",
        distributor_cta: "Pour devenir distributeur ou partenaire",
        contact_button: "Nous contacter",
        footer_motto: "Excellence • Tradition • Qualité",
        cosmetics_conclusion: "En choisissant nos huiles, vous accédez à une filière fiable, transparente et engagée dans la valorisation des ressources locales.\n\nNos produits sont adaptés aux besoins des marques cosmétiques, distributeurs et partenaires internationaux, recherchant des ingrédients naturels de haute qualité.\n\nN'hésitez pas à nous contacter pour connaître notre gamme disponible",
        cosmetics_title: "Huiles Cosmétiques Naturelles",
        cosmetics_tagline: "Excellence • Traçabilité • Développement durable",
        cosmetics_expertise_title: "Notre Savoir-faire",
        cosmetics_expertise_p1: "Nos huiles cosmétiques sont extraites par pression mécanique à froid, un procédé qui préserve l'intégralité des principes actifs, vitamines et acides gras essentiels.",
        cosmetics_expertise_p2: "Produites au Cambodge à partir de matières premières 100% locales et naturelles, elles sont issues d'une agriculture sélectionnée pour sa qualité et son savoir-faire traditionnel.",
        feature_traceability_title: "Traçabilité complète",
        feature_traceability_desc: "De la graine jusqu'au flacon",
        feature_purity_title: "Pureté garantie",
        feature_purity_desc: "Sans additifs ni conservateurs",
        feature_quality_title: "Qualité certifiée",
        feature_quality_desc: "Respect des normes internationales",
        feature_sustainable_title: "Production durable",
        feature_sustainable_desc: "Éthique et responsable",
        spirits_hero_title: "🔥 OBOR 🌸",
        spirits_hero_subtitle: "Des spiritueux artisanaux qui subliment les saveurs du Cambodge",
        
        // Mango Rage
        mango_rage_title: "🔥 Mango Rage",
        mango_rage_tagline: "Liqueur artisanale crafted in Cambodia",
        mango_rage_description: "Un mélange audacieux de mangues mûries au soleil, d'alcool de riz traditionnel et un peps désaltérant.",
        mango_rage_highlight1: "100% cambodgien, 100% caractère",
        mango_rage_highlight2: "Doux mais explosif",
        mango_rage_highlight3: "Fruité mais avec du tempérament",
        mango_rage_availability: "Disponible dans les bars partenaires de Phnom Penh 🍹",
        
        // Obor Rosé
        obor_rose_title: "🌸 Obor Rosé",
        obor_rose_tagline: "L'esprit du riz, la caresse d'un fruit défendu",
        obor_rose_description: "Un alcool limpide, sec et clair, qui glisse sur la langue avec l'élégance d'un secret bien gardé.",
        obor_rose_highlight1: "20° : assez doux pour séduire, assez vif pour réveiller",
        obor_rose_highlight2: "À savourer pur, sur glace, ou dans un verre qui s'éternise",
        obor_rose_highlight3: "Un goût simple, franc, presque minimaliste",
        natural_artisanal: "100% naturelles et artisanales",
        learn_more: "En savoir plus",
        authentic_flavors: "Saveurs authentiques du Cambodge",
        discover: "Découvrir",
        avocado_oil: "Huile d'Avocat",
        avocado_production: "Production d'Huile d'Avocat",
        castor_oil: "Huile de Ricin",
        sacha_inchi: "Sacha Inchi",
        sacha_production: "Production de Sacha Inchi",
        sacha_seeds: "Graines de Sacha Inchi",
        sacha_oil: "Huile de Sacha Inchi",
        contact_email_text: "Notre email :"
    },
    en: {
        home: "Home",
        cosmetics: "Cosmetic Oils",
        spirits: "Craft Spirits",
        mission: "Pure Cambodia is a company committed to promoting Cambodia's agricultural wealth. We develop healthy, ethical and environmentally friendly products in close collaboration with local communities.\n\nSpecializing in natural cosmetic oils and artisanal spirits, we combine traditional expertise with quality requirements to offer authentic, sustainable and responsible products.\n\nOur mission is to showcase the quality and diversity of Cambodian agricultural products to as many people as possible, both in local and international markets.",
        contact: "Contact Us",
        contact_cta: "To learn about our available range or become a partner",
        contact_btn: "Contact Us",
        distributor_cta: "To become a distributor or partner",
        contact_button: "Contact Us",
        footer_motto: "Excellence • Tradition • Quality",
        cosmetics_conclusion: "By choosing our oils, you access a reliable and transparent supply chain committed to promoting local resources.\n\nOur products are tailored to the needs of cosmetic brands, distributors and international partners seeking high-quality natural ingredients.\n\nDon't hesitate to contact us to learn about our available range",
        cosmetics_title: "Natural Cosmetic Oils",
        cosmetics_tagline: "Excellence • Traceability • Sustainability",
        cosmetics_expertise_title: "Our Expertise",
        cosmetics_expertise_p1: "Our cosmetic oils are extracted through cold mechanical pressing, a process that preserves all active ingredients, vitamins and essential fatty acids.",
        cosmetics_expertise_p2: "Produced in Cambodia from 100% local and natural raw materials, they come from agriculture selected for its quality and traditional know-how.",
        feature_traceability_title: "Complete Traceability",
        feature_traceability_desc: "From seed to bottle",
        feature_purity_title: "Guaranteed Purity",
        feature_purity_desc: "No additives or preservatives",
        feature_quality_title: "Certified Quality",
        feature_quality_desc: "International standards compliance",
        feature_sustainable_title: "Sustainable Production",
        feature_sustainable_desc: "Ethical and responsible",
        spirits_hero_title: "🔥 OBOR 🌸",
        spirits_hero_subtitle: "Artisanal spirits that elevate Cambodian flavors",
        
        // Mango Rage
        mango_rage_title: "🔥 Mango Rage",
        mango_rage_tagline: "Artisanal liqueur crafted in Cambodia",
        mango_rage_description: "A bold fusion of sun-ripened mangoes, traditional rice spirit, and a refreshing kick.",
        mango_rage_highlight1: "100% Cambodian, 100% character",
        mango_rage_highlight2: "Sweet yet explosive",
        mango_rage_highlight3: "Fruity with attitude",
        mango_rage_availability: "Available across Phnom Penh 🍹",
        
        // Obor Rosé
        obor_rose_title: "🌸 Obor Rosé",
        obor_rose_tagline: "The spirit of rice, the caress of a forbidden fruit",
        obor_rose_description: "A clear, dry spirit that glides across the tongue with the elegance of a well-kept secret.",
        obor_rose_highlight1: "20°: smooth enough to seduce, lively enough to awaken",
        obor_rose_highlight2: "Best enjoyed neat, on ice, or in a lingering glass",
        obor_rose_highlight3: "A simple, honest, almost minimalist taste",
        natural_artisanal: "100% natural and artisanal",
        learn_more: "Learn more",
        authentic_flavors: "Authentic Cambodian flavors",
        discover: "Discover",
        avocado_oil: "Avocado Oil",
        avocado_production: "Avocado Oil Production",
        castor_oil: "Castor Oil",
        sacha_inchi: "Sacha Inchi",
        sacha_production: "Sacha Inchi Production",
        sacha_seeds: "Sacha Inchi Seeds",
        sacha_oil: "Sacha Inchi Oil",
        contact_email_text: "Our email:"
    },
    km: {
        home: "ទំព័រដើម",
        cosmetics: "ប្រេងធម្មជាតិ",
        spirits: "ស្រាក្នុងស្រុក",
        mission: "Pure Cambodia គឺជាក្រុមហ៊ុនដែលប្តេជ្ញាចិត្តក្នុងការលើកកម្ពស់សម្បត្តិកសិកម្មរបស់កម្ពុជា។ យើងអភិវឌ្ឍផលិតផលដែលមានសុខភាពល្អ មានក្រមសីលធម៌ និងរក្សាបរិស្ថាន ដោយសហការយ៉ាងជិតស្និទ្ធជាមួយសហគមន៍មូលដ្ឋាន។\n\nដោយឯកទេសក្នុងប្រេងធម្មជាតិសម្រាប់សម្ផស្ស និងស្រាសិប្បកម្ម យើងរួមបញ្ចូលជំនាញប្រពៃណី ជាមួយនឹងតម្រូវការគុណភាព ដើម្បីផ្តល់ជូននូវផលិតផលពិតប្រាកដ និងមាននិរន្តរភាព។\n\nបេសកកម្មរបស់យើងគឺដើម្បីបង្ហាញគុណភាព និងភាពចម្រុះនៃផលិតផលកសិកម្មកម្ពុជាដល់មនុស្សគ្រប់គ្នា ទាំងនៅទីផ្សារក្នុងស្រុក និងអន្តរជាតិ។",
        contact: "ទំនាក់ទំនង",
        contact_cta: "ដើម្បីស្វែងយល់អំពីផលិតផលដែលមាន ឬក្លាយជាដៃគូ",
        contact_btn: "ទំនាក់ទំនងមកយើងខ្ញុំ",
        distributor_cta: "ដើម្បីក្លាយជាអ្នកចែកចាយ ឬដៃគូ",
        contact_button: "ទំនាក់ទំនងមកយើងខ្ញុំ",
        footer_motto: "ឧត្តមភាព • ប្រពៃណី • គុណភាព",
        cosmetics_title: "ប្រេងធម្មជាតិសម្រាប់សម្ផស្ស",
        cosmetics_tagline: "ឧត្តមភាព • តាមដានប្រភព • ការអភិវឌ្ឍប្រកបដោយចីរភាព",
        cosmetics_expertise_title: "ជំនាញរបស់យើង",
        cosmetics_expertise_p1: "ប្រេងសម្រាប់សម្ផស្សរបស់យើងត្រូវបានច្របាច់ដោយម៉ាស៊ីនត្រជាក់ ដែលជាដំណើរការរក្សាសារធាតុសកម្ម វីតាមីន និងអាស៊ីតខ្លាញ់សំខាន់ៗទាំងអស់។",
        cosmetics_expertise_p2: "ផលិតនៅកម្ពុជាពីវត្ថុធាតុដើមក្នុងស្រុក និងធម្មជាតិ ១០០% វាមកពីកសិកម្មដែលត្រូវបានជ្រើសរើសសម្រាប់គុណភាព និងចំណេះដឹងប្រពៃណីរបស់ខ្លួន។",
        feature_traceability_title: "តាមដានប្រភពពេញលេញ",
        feature_traceability_desc: "ពីគ្រាប់ដល់ដប",
        feature_purity_title: "ធានាភាពបរិសុទ្ធ",
        feature_purity_desc: "គ្មានសារធាតុបន្ថែម ឬសារធាតុរក្សា",
        feature_quality_title: "គុណភាពមានការបញ្ជាក់",
        feature_quality_desc: "គោរពតាមស្តង់ដារអន្តរជាតិ",
        feature_sustainable_title: "ផលិតកម្មប្រកបដោយចីរភាព",
        feature_sustainable_desc: "ប្រកបដោយក្រមសីលធម៌ និងការទទួលខុសត្រូវ",
        spirits_hero_title: "🔥 OBOR 🌸",
        spirits_hero_subtitle: "ស្រាសិប្បកម្មដែលលើកកម្ពស់រសជាតិខ្មែរ",
        
        // Mango Rage
        mango_rage_title: "🔥 ម៉ាងហ្គូរេជ",
        mango_rage_tagline: "ស្រាសិប្បកម្មផលិតនៅកម្ពុជា",
        mango_rage_description: "ការលាយបញ្ចូលគ្នាយ៉ាងក្លាហានរវាងស្វាយទុំក្រោមកំដៅថ្ងៃ ស្រាអង្កររបៀបប្រពៃណី និងរសជាតិស្រស់ត្រជាក់។",
        mango_rage_highlight1: "១០០% ខ្មែរ, ១០០% អត្តចរិត",
        mango_rage_highlight2: "ផ្អែមប៉ុន្តែខ្លាំង",
        mango_rage_highlight3: "មានរសជាតិផ្លែឈើ ជាមួយនឹងភាពរឹងមាំ",
        mango_rage_availability: "មាននៅតាមបារដៃគូនៅភ្នំពេញ 🍹",
        
        // Obor Rosé
        obor_rose_title: "🌸 អុបរ រ៉ូសេ",
        obor_rose_tagline: "វិញ្ញាណនៃអង្ករ ការអង្អែលនៃផ្លែឈើហាមឃាត់",
        obor_rose_description: "ស្រាថ្លា ស្ងួត និងច្បាស់ ដែលរអិលលើអណ្តាតជាមួយនឹងភាពថ្លៃថ្នូរនៃការសម្ងាត់ដែលរក្សាទុកយ៉ាងល្អ។",
        obor_rose_highlight1: "២០°: ទន់ភ្លន់គ្រប់គ្រាន់ដើម្បីទាក់ទាញ ស្រស់ស្រាយគ្រប់គ្រាន់ដើម្បីភ្ញាក់រលឹក",
        obor_rose_highlight2: "សម្រាប់ទទួលទានសុទ្ធ លើទឹកកក ឬក្នុងកែវដែលអូសបន្លាយពេល",
        obor_rose_highlight3: "រសជាតិសាមញ្ញ ស្មោះត្រង់ ស្ទើរតែសាមញ្ញពេក",
        natural_artisanal: "១០០% ធម្មជាតិ និងសិប្បកម្ម",
        learn_more: "ស្វែងយល់បន្ថែម",
        authentic_flavors: "រសជាតិពិតប្រាកដនៃប្រទេសកម្ពុជា",
        discover: "រកឃើញ",
        avocado_oil: "ប្រេងអាវ៉ូកាដូ",
        avocado_production: "ការផលិតប្រេងអាវ៉ូកាដូ",
        castor_oil: "ប្រេងលាភរាជ",
        sacha_inchi: "សាចាអ៊ីនឈី",
        sacha_production: "ការផលិតសាចាអ៊ីនឈី",
        sacha_seeds: "គ្រាប់សាចាអ៊ីនឈី",
        sacha_oil: "ប្រេងសាចាអ៊ីនឈី",
        contact_email_text: "អ៊ីមែលរបស់យើង៖"
    }
};

// Classe pour gérer les langues
class LanguageManager {
    constructor() {
        this.currentLang = localStorage.getItem('preferred-language') || 'fr';
        this.init();
    }

    init() {
        // Initialisation des boutons de langue
        document.querySelectorAll('.lang-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                const lang = btn.dataset.lang;
                this.switchLanguage(lang);
            });
        });

        // Application de la langue actuelle
        this.updateContent();
    }

    switchLanguage(lang) {
        this.currentLang = lang;
        localStorage.setItem('preferred-language', lang);
        this.updateContent();
    }

    updateContent() {
        // Mise à jour de tous les éléments avec l'attribut data-translate
        document.querySelectorAll('[data-translate]').forEach(element => {
            const key = element.dataset.translate;
            if (translations[this.currentLang][key]) {
                // Remplace \n par <br> pour les textes multilignes
                element.innerHTML = translations[this.currentLang][key].replace(/\n/g, "<br>");
            }
        });

        // Mise à jour des attributs HTML lang
        document.documentElement.lang = this.currentLang;

        // Indication visuelle de la langue active
        document.querySelectorAll('.lang-btn').forEach(btn => {
            btn.classList.toggle('active', btn.dataset.lang === this.currentLang);
        });
    }
}

// Initialisation du gestionnaire de langues
document.addEventListener('DOMContentLoaded', () => {
    window.langManager = new LanguageManager();
});