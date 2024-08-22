//models
import district from "../models/district.js";

export const getDistricts = async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1; // Get the requested page number from query parameter, default to 1
    const pageSize = parseInt(req.query.pageSize) || 1000000000000000; // Get the requested page size from query parameter, default to 10
    const offset = (page - 1) * pageSize;
    const totalCount = await district.count(); // Get the total count of districts
    const data = await district.findAll({
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

export const createDistrict = async (req, res) => {
  try {
    const data = await district.create(req.body);

    return res
      .status(200)
      .json({ message: "Create successfully.", data: data });
  } catch (e) {
    return res.status(500).json({ message: e.message });
  }
};

export const deleteDistrict = async (req, res) => {
  let id = req.params.id;

  try {
    await district.destroy({ where: { id } });

    return res.status(200).json({ message: "Deleted successfuly" });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const initialDistricts = async (req, res) => {
  try {
    await district.bulkCreate([
      {
        nameEn: "Halba",
        nameAr: "حلبا",
      },
      {
        nameEn: "Beino",
        nameAr: "بينو",
      },
      {
        nameEn: "Meshmesh",
        nameAr: "مشمش",
      },
      {
        nameEn: "Qoubaiyat",
        nameAr: "القبيات",
      },

      {
        nameEn: "Baalback",
        nameAr: "بعلبك",
      },
      {
        nameEn: "Hermel",
        nameAr: "الهرمل",
      },
      {
        nameEn: "Shmistar",
        nameAr: "شمسطار",
      },
      {
        nameEn: "Deir Al Ahmar",
        nameAr: "دير اللأحمر",
      },
      {
        nameEn: "Nabi Shit",
        nameAr: "النبي شيت",
      },
      {
        nameEn: "Laboueh",
        nameAr: "اللبوة",
      },

      {
        nameEn: "Beirut",
        nameAr: "بيروت",
      },

      {
        nameEn: "Mashgharah",
        nameAr: "مشغرة",
      },
      {
        nameEn: "Joub Jannine",
        nameAr: "جب جنين",
      },
      {
        nameEn: "Rashaya",
        nameAr: "راشيا",
      },
      {
        nameEn: "Zahle",
        nameAr: "زحلة",
      },
      {
        nameEn: "Bouarej",
        nameAr: "بوارج",
      },
      {
        nameEn: "Riyaq",
        nameAr: "رياق",
      },

      {
        nameEn: "Baabda",
        nameAr: "بعبدا",
      },
      {
        nameEn: "Al Ghbayri",
        nameAr: "الغبيري",
      },
      {
        nameEn: "Rayfoun",
        nameAr: "ريفون",
      },
      {
        nameEn: "Ghazir",
        nameAr: "غزير",
      },
      {
        nameEn: "Kasserwen",
        nameAr: "كسروان",
      },
      {
        nameEn: "Qartaba",
        nameAr: "قرطبا",
      },
      {
        nameEn: "hamana",
        nameAr: "حمانا",
      },
      {
        nameEn: "Byblos",
        nameAr: "جبيل",
      },
      {
        nameEn: "Maten",
        nameAr: "المتن",
      },
      {
        nameEn: "Dhour Shwier",
        nameAr: "ضهور الشوير",
      },
      {
        nameEn: "Aley",
        nameAr: "عاليه",
      },
      {
        nameEn: "Iklim Al Kharoub",
        nameAr: "إقليم الخروب",
      },
      {
        nameEn: "Shwieyfet",
        nameAr: "الشويفات",
      },
      {
        nameEn: "Shouf",
        nameAr: "الشويفات",
      },
      {
        nameEn: "Damour",
        nameAr: "الدامور",
      },

      {
        nameEn: "Jbaa",
        nameAr: "جباع",
      },
      {
        nameEn: "Hasbaya",
        nameAr: "حاصبيا",
      },
      {
        nameEn: "Tebnine",
        nameAr: "تبنين",
      },
      {
        nameEn: "Marjaayoun",
        nameAr: "مرج عيون",
      },
      {
        nameEn: "Bint Jbeil",
        nameAr: "بنت جبيل",
      },
      {
        nameEn: "Nabatieh",
        nameAr: "النبطية",
      },
      {
        nameEn: "Taybie",
        nameAr: "الطيبه",
      },
      {
        nameEn: "Shebaa",
        nameAr: "شبعا",
      },

      {
        nameEn: "Tripoli",
        nameAr: "طرابلس",
      },
      {
        nameEn: "Koura",
        nameAr: "الكورة",
      },
      {
        nameEn: "Zgharta",
        nameAr: "زغرتا",
      },
      {
        nameEn: "Batroun",
        nameAr: "البنرون",
      },
      {
        nameEn: "Minyeh",
        nameAr: "المنية",
      },
      {
        nameEn: "Danniyieh",
        nameAr: "الضنية",
      },
      {
        nameEn: "Bsharri",
        nameAr: "بشري",
      },

      {
        nameEn: "Zahrani",
        nameAr: "الزهراني",
      },
      {
        nameEn: "Jouayya",
        nameAr: "جويا",
      },
      {
        nameEn: "Jezzine",
        nameAr: "جزين",
      },
      {
        nameEn: "Saida",
        nameAr: "صيدا",
      },
      {
        nameEn: "Tyre",
        nameAr: "صور",
      },
      {
        nameEn: "Qana",
        nameAr: "قانا",
      },
    ]);
    return res.status(200).json({ message: "District added successfully!" });
  } catch (e) {
    return res.status(500).json({ message: e });
  }
};
