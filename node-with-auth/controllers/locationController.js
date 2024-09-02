//models
import location from "../models/location.js";

export const getLocations = async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1; // Get the requested page number from query parameter, default to 1
    const pageSize = parseInt(req.query.pageSize) || 1000000000000000; // Get the requested page size from query parameter, default to 10
    const offset = (page - 1) * pageSize;
    const totalCount = await location.count(); // Get the total count of location
    const data = await location.findAll({
      offset,
      limit: pageSize,
    });
    const totalPages = Math.ceil(totalCount / pageSize);

    return res.status(200).json({
      message: "Fetched successfully.",
      data: data,
      pageInfo: {
        page: page,
        pageSize: pageSize,
        totalCount: totalCount,
        totalPages: totalPages,
      },
    });
  } catch (e) {
    return res.status(500).json({ message: e.message });
  }
};

export const createLocation = async (req, res) => {
  try {
    const data = await location.create(req.body);

    return res
      .status(200)
      .json({ message: "Create successfully.", data: data });
  } catch (e) {
    return res.status(500).json({ message: e.message });
  }
};

export const deleteLocation = async (req, res) => {
  let id = req.params.id;

  try {
    await location.destroy({ where: { id } });

    return res.status(200).json({ message: "Deleted successfuly" });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const initialLocations = async (req, res) => {
  try {
    await location.bulkCreate([
      { nameEn: "Afghanistan", nameTr: "Afganistan" },
      { nameEn: "Albania", nameTr: "Arnavutluk" },
      { nameEn: "Algeria", nameTr: "Cezayir" },
      { nameEn: "Andorra", nameTr: "Andorra" },
      { nameEn: "Angola", nameTr: "Angola" },
      { nameEn: "Antigua and Barbuda", nameTr: "Antigua ve Barbuda" },
      { nameEn: "Argentina", nameTr: "Arjantin" },
      { nameEn: "Armenia", nameTr: "Ermenistan" },
      { nameEn: "Australia", nameTr: "Avustralya" },
      { nameEn: "Austria", nameTr: "Avusturya" },
      { nameEn: "Azerbaijan", nameTr: "Azerbaycan" },
      { nameEn: "Bahamas", nameTr: "Bahamalar" },
      { nameEn: "Bahrain", nameTr: "Bahreyn" },
      { nameEn: "Bangladesh", nameTr: "Bangladeş" },
      { nameEn: "Barbados", nameTr: "Barbados" },
      { nameEn: "Belarus", nameTr: "Belarus" },
      { nameEn: "Belgium", nameTr: "Belçika" },
      { nameEn: "Belize", nameTr: "Belize" },
      { nameEn: "Benin", nameTr: "Benin" },
      { nameEn: "Bhutan", nameTr: "Butan" },
      { nameEn: "Bolivia", nameTr: "Bolivya" },
      { nameEn: "Bosnia and Herzegovina", nameTr: "Bosna Hersek" },
      { nameEn: "Botswana", nameTr: "Botsvana" },
      { nameEn: "Brazil", nameTr: "Brezilya" },
      { nameEn: "Brunei", nameTr: "Brunei" },
      { nameEn: "Bulgaria", nameTr: "Bulgaristan" },
      { nameEn: "Burkina Faso", nameTr: "Burkina Faso" },
      { nameEn: "Burundi", nameTr: "Burundi" },
      { nameEn: "Cabo Verde", nameTr: "Cape Verde" },
      { nameEn: "Cambodia", nameTr: "Kamboçya" },
      { nameEn: "Cameroon", nameTr: "Kamerun" },
      { nameEn: "Canada", nameTr: "Kanada" },
      { nameEn: "Central African Republic", nameTr: "Orta Afrika Cumhuriyeti" },
      { nameEn: "Chad", nameTr: "Çad" },
      { nameEn: "Chile", nameTr: "Şili" },
      { nameEn: "China", nameTr: "Çin" },
      { nameEn: "Colombia", nameTr: "Kolombiya" },
      { nameEn: "Comoros", nameTr: "Komorlar" },
      { nameEn: "Congo (Congo-Brazzaville)", nameTr: "Kongo" },
      { nameEn: "Costa Rica", nameTr: "Kosta Rika" },
      { nameEn: "Croatia", nameTr: "Hırvatistan" },
      { nameEn: "Cuba", nameTr: "Küba" },
      { nameEn: "Cyprus", nameTr: "Kıbrıs" },
      { nameEn: "Czech Republic", nameTr: "Çek Cumhuriyeti" },
      {
        nameEn: "Democratic Republic of the Congo",
        nameTr: "Demokratik Kongo Cumhuriyeti",
      },
      { nameEn: "Denmark", nameTr: "Danimarka" },
      { nameEn: "Djibouti", nameTr: "Cibuti" },
      { nameEn: "Dominica", nameTr: "Dominika" },
      { nameEn: "Dominican Republic", nameTr: "Dominik Cumhuriyeti" },
      { nameEn: "Ecuador", nameTr: "Ekvador" },
      { nameEn: "Egypt", nameTr: "Mısır" },
      { nameEn: "El Salvador", nameTr: "El Salvador" },
      { nameEn: "Equatorial Guinea", nameTr: "Ekvator Ginesi" },
      { nameEn: "Eritrea", nameTr: "Eritre" },
      { nameEn: "Estonia", nameTr: "Estonya" },
      { nameEn: "Eswatini", nameTr: "Esvatini" },
      { nameEn: "Ethiopia", nameTr: "Etiyopya" },
      { nameEn: "Fiji", nameTr: "Fiji" },
      { nameEn: "Finland", nameTr: "Finlandiya" },
      { nameEn: "France", nameTr: "Fransa" },
      { nameEn: "Gabon", nameTr: "Gabon" },
      { nameEn: "Gambia", nameTr: "Gambiya" },
      { nameEn: "Georgia", nameTr: "Gürcistan" },
      { nameEn: "Germany", nameTr: "Almanya" },
      { nameEn: "Ghana", nameTr: "Gana" },
      { nameEn: "Greece", nameTr: "Yunanistan" },
      { nameEn: "Grenada", nameTr: "Grenada" },
      { nameEn: "Guatemala", nameTr: "Guatemala" },
      { nameEn: "Guinea", nameTr: "Gine" },
      { nameEn: "Guinea-Bissau", nameTr: "Gine-Bissau" },
      { nameEn: "Guyana", nameTr: "Guyana" },
      { nameEn: "Haiti", nameTr: "Haiti" },
      { nameEn: "Honduras", nameTr: "Honduras" },
      { nameEn: "Hungary", nameTr: "Macaristan" },
      { nameEn: "Iceland", nameTr: "İzlanda" },
      { nameEn: "India", nameTr: "Hindistan" },
      { nameEn: "Indonesia", nameTr: "Endonezya" },
      { nameEn: "Iran", nameTr: "İran" },
      { nameEn: "Iraq", nameTr: "Irak" },
      { nameEn: "Ireland", nameTr: "İrlanda" },
      { nameEn: "Israel", nameTr: "İsrail" },
      { nameEn: "Italy", nameTr: "İtalya" },
      { nameEn: "Jamaica", nameTr: "Jamaika" },
      { nameEn: "Japan", nameTr: "Japonya" },
      { nameEn: "Jordan", nameTr: "Ürdün" },
      { nameEn: "Kazakhstan", nameTr: "Kazakistan" },
      { nameEn: "Kenya", nameTr: "Kenya" },
      { nameEn: "Kiribati", nameTr: "Kiribati" },
      { nameEn: "Kuwait", nameTr: "Kuveyt" },
      { nameEn: "Kyrgyzstan", nameTr: "Kırgızistan" },
      { nameEn: "Laos", nameTr: "Laos" },
      { nameEn: "Latvia", nameTr: "Letonya" },
      { nameEn: "Lebanon", nameTr: "Lübnan" },
      { nameEn: "Lesotho", nameTr: "Lesotho" },
      { nameEn: "Liberia", nameTr: "Liberya" },
      { nameEn: "Libya", nameTr: "Libya" },
      { nameEn: "Liechtenstein", nameTr: "Lihtenştayn" },
      { nameEn: "Lithuania", nameTr: "Litvanya" },
      { nameEn: "Luxembourg", nameTr: "Lüksemburg" },
      { nameEn: "Madagascar", nameTr: "Madagaskar" },
      { nameEn: "Malawi", nameTr: "Malavi" },
      { nameEn: "Malaysia", nameTr: "Malezya" },
      { nameEn: "Maldives", nameTr: "Maldivler" },
      { nameEn: "Mali", nameTr: "Mali" },
      { nameEn: "Malta", nameTr: "Malta" },
      { nameEn: "Marshall Islands", nameTr: "Marshall Adaları" },
      { nameEn: "Mauritania", nameTr: "Moritanya" },
      { nameEn: "Mauritius", nameTr: "Mauritius" },
      { nameEn: "Mexico", nameTr: "Meksika" },
      { nameEn: "Micronesia", nameTr: "Mikronezya" },
      { nameEn: "Moldova", nameTr: "Moldova" },
      { nameEn: "Monaco", nameTr: "Monako" },
      { nameEn: "Mongolia", nameTr: "Moğolistan" },
      { nameEn: "Montenegro", nameTr: "Karadağ" },
      { nameEn: "Morocco", nameTr: "Fas" },
      { nameEn: "Mozambique", nameTr: "Mozambik" },
      { nameEn: "Myanmar (Burma)", nameTr: "Myanmar (Burma)" },
      { nameEn: "Namibia", nameTr: "Namibya" },
      { nameEn: "Nauru", nameTr: "Nauru" },
      { nameEn: "Nepal", nameTr: "Nepal" },
      { nameEn: "Netherlands", nameTr: "Hollanda" },
      { nameEn: "New Zealand", nameTr: "Yeni Zelanda" },
      { nameEn: "Nicaragua", nameTr: "Nikaragua" },
      { nameEn: "Niger", nameTr: "Nijer" },
      { nameEn: "Nigeria", nameTr: "Nijerya" },
      { nameEn: "North Korea", nameTr: "Kuzey Kore" },
      { nameEn: "North Macedonia", nameTr: "Kuzey Makedonya" },
      { nameEn: "Norway", nameTr: "Norveç" },
      { nameEn: "Oman", nameTr: "Umman" },
      { nameEn: "Pakistan", nameTr: "Pakistan" },
      { nameEn: "Palau", nameTr: "Palau" },
      { nameEn: "Palestine", nameTr: "Filistin" },
      { nameEn: "Panama", nameTr: "Panama" },
      { nameEn: "Papua New Guinea", nameTr: "Papua Yeni Gine" },
      { nameEn: "Paraguay", nameTr: "Paraguay" },
      { nameEn: "Peru", nameTr: "Peru" },
      { nameEn: "Philippines", nameTr: "Filipinler" },
      { nameEn: "Poland", nameTr: "Polonya" },
      { nameEn: "Portugal", nameTr: "Portekiz" },
      { nameEn: "Qatar", nameTr: "Katar" },
      { nameEn: "Romania", nameTr: "Romanya" },
      { nameEn: "Russia", nameTr: "Rusya" },
      { nameEn: "Rwanda", nameTr: "Ruanda" },
      { nameEn: "Saint Kitts and Nevis", nameTr: "Saint Kitts ve Nevis" },
      { nameEn: "Saint Lucia", nameTr: "Saint Lucia" },
      {
        nameEn: "Saint Vincent and the Grenadines",
        nameTr: "Saint Vincent ve Grenadinler",
      },
      { nameEn: "Samoa", nameTr: "Samoa" },
      { nameEn: "San Marino", nameTr: "San Marino" },
      { nameEn: "Sao Tome and Principe", nameTr: "Sao Tome ve Principe" },
      { nameEn: "Saudi Arabia", nameTr: "Suudi Arabistan" },
      { nameEn: "Senegal", nameTr: "Senegal" },
      { nameEn: "Serbia", nameTr: "Sırbistan" },
      { nameEn: "Seychelles", nameTr: "Seyşeller" },
      { nameEn: "Sierra Leone", nameTr: "Sierra Leone" },
      { nameEn: "Singapore", nameTr: "Singapur" },
      { nameEn: "Slovakia", nameTr: "Slovakya" },
      { nameEn: "Slovenia", nameTr: "Slovenya" },
      { nameEn: "Solomon Islands", nameTr: "Solomon Adaları" },
      { nameEn: "Somalia", nameTr: "Somali" },
      { nameEn: "South Africa", nameTr: "Güney Afrika" },
      { nameEn: "South Korea", nameTr: "Güney Kore" },
      { nameEn: "South Sudan", nameTr: "Güney Sudan" },
      { nameEn: "Spain", nameTr: "İspanya" },
      { nameEn: "Sri Lanka", nameTr: "Sri Lanka" },
      { nameEn: "Sudan", nameTr: "Sudan" },
      { nameEn: "Suriname", nameTr: "Surinam" },
      { nameEn: "Sweden", nameTr: "İsveç" },
      { nameEn: "Switzerland", nameTr: "İsviçre" },
      { nameEn: "Syria", nameTr: "Suriye" },
      { nameEn: "Taiwan", nameTr: "Tayvan" },
      { nameEn: "Tajikistan", nameTr: "Tacikistan" },
      { nameEn: "Tanzania", nameTr: "Tanzanya" },
      { nameEn: "Thailand", nameTr: "Tayland" },
      { nameEn: "Timor-Leste", nameTr: "Doğu Timor" },
      { nameEn: "Togo", nameTr: "Togo" },
      { nameEn: "Tonga", nameTr: "Tonga" },
      { nameEn: "Trinidad and Tobago", nameTr: "Trinidad ve Tobago" },
      { nameEn: "Tunisia", nameTr: "Tunus" },
      { nameEn: "Turkey", nameTr: "Türkiye" },
      { nameEn: "Turkmenistan", nameTr: "Türkmenistan" },
      { nameEn: "Tuvalu", nameTr: "Tuvalu" },
      { nameEn: "Uganda", nameTr: "Uganda" },
      { nameEn: "Ukraine", nameTr: "Ukrayna" },
      { nameEn: "United Arab Emirates", nameTr: "Birleşik Arap Emirlikleri" },
      { nameEn: "United Kingdom", nameTr: "Birleşik Krallık" },
      {
        nameEn: "United States of America",
        nameTr: "Amerika Birleşik Devletleri",
      },
      { nameEn: "Uruguay", nameTr: "Uruguay" },
      { nameEn: "Uzbekistan", nameTr: "Özbekistan" },
      { nameEn: "Vanuatu", nameTr: "Vanuatu" },
      { nameEn: "Vatican City", nameTr: "Vatikan" },
      { nameEn: "Venezuela", nameTr: "Venezuela" },
      { nameEn: "Vietnam", nameTr: "Vietnam" },
      { nameEn: "Yemen", nameTr: "Yemen" },
      { nameEn: "Zambia", nameTr: "Zambiya" },
      { nameEn: "Zimbabwe", nameTr: "Zimbabve" },
    ]);

    return res.status(200).json({ message: "Locations added successfully!" });
  } catch (e) {
    return res.status(500).json({ message: e });
  }
};
