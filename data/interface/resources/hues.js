const HUES = [
  "#35312C",
  "#75AA94",
  "#C0E8D5",
  "#745085",
  "#905E26",
  "#5D8AA8",
  "#BEB29A",
  "#F2F0E6",
  "#E1DACB",
  "#954E2C",
  "#F0F8FF",
  "#E32636",
  "#1F6A7D",
  "#EED9C4",
  "#9A8678",
  "#AD8A3B",
  "#CDC6C5",
  "#848789",
  "#E52B50",
  "#387B54",
  "#FFBF00",
  "#8A7D72",
  "#9966CC",
  "#95879C",
  "#F5E6EA",
  "#7D9D72",
  "#8CCEEA",
  "#6C461F",
  "#FAEBD7",
  "#C68E3F",
  "#D3A95C",
  "#66B348",
  "#A95249",
  "#DEEADC",
  "#FBCEB1",
  "#F7F0DB",
  "#00FFFF",
  "#D9DDD5",
  "#E8F3E8",
  "#DBE4DC",
  "#7FFFD4",
  "#274A5D",
  "#484A46",
  "#4B5320",
  "#827A67",
  "#3B444B",
  "#BEBAA7",
  "#7BA05B",
  "#EDD5A6",
  "#376F89",
  "#445172",
  "#214559",
  "#DCDDDD",
  "#D5CBB2",
  "#9CD03B",
  "#2B797A",
  "#3D4B52",
  "#FF9966",
  "#9E6759",
  "#372528",
  "#712F2C",
  "#EFF8AA",
  "#95986B",
  "#63775A",
  "#F9C0C4",
  "#293432",
  "#F0FFFF",
  "#6FFFFF",
  "#25597F",
  "#A9C01C",
  "#5C3317",
  "#849CA9",
  "#3C3D3E",
  "#FBE7B2",
  "#878466",
  "#D2C61F",
  "#B6935C",
  "#F7E5B7",
  "#452E39",
  "#2C2C32",
  "#51574F",
  "#7BB18D",
  "#353E64",
  "#8F7777",
  "#EBB9B3",
  "#926F5B",
  "#E9D7AB",
  "#F5F5DC",
  "#86D2C1",
  "#6F8C9F",
  "#BCBFA8",
  "#F4EFE0",
  "#334046",
  "#3E8027",
  "#AE99D2",
  "#3F3726",
  "#D0C117",
  "#2F3C53",
  "#486C7A",
  "#B5AC94",
  "#FFE4C4",
  "#3D2B1F",
  "#88896C",
  "#D2DB32",
  "#FE6F5E",
  "#E7D2C8",
  "#000000",
  "#232E26",
  "#2C3227",
  "#E0DED7",
  "#332C22",
  "#383740",
  "#1E272C",
  "#2C2D3C",
  "#532934",
  "#24252B",
  "#E5E6DF",
  "#E5E4DB",
  "#43182F",
  "#2E183B",
  "#D9D0C1",
  "#FFEBCD",
  "#EBE1CE",
  "#A3E3ED",
  "#DFB1B6",
  "#0000FF",
  "#62777E",
  "#9999CC",
  "#E3D6E9",
  "#262B2F",
  "#408F90",
  "#4B2D72",
  "#35514F",
  "#4B3C8E",
  "#BDBACE",
  "#00626F",
  "#6A5BB1",
  "#D8F0D2",
  "#78857A",
  "#166461",
  "#8A2BE2",
  "#1E3442",
  "#3C4354",
  "#305C71",
  "#B55067",
  "#2A2725",
  "#79443B",
  "#AEAEAD",
  "#DFD7D2",
  "#0095B6",
  "#DBC2AB",
  "#4C1C24",
  "#4C3D4E",
  "#438EAC",
  "#92ACB4",
  "#254636",
  "#7C817C",
  "#A78199",
  "#AF6C3E",
  "#5B3D27",
  "#DCB68A",
  "#C07C40",
  "#B6857A",
  "#B5A642",
  "#517B78",
  "#C62D42",
  "#F8EBDD",
  "#FAE6DF",
  "#66FF00",
  "#57595D",
  "#922A31",
  "#ECBD2C",
  "#08E8DE",
  "#FF55A3",
  "#FB607F",
  "#004225",
  "#A79781",
  "#CD7F32",
  "#584C25",
  "#434C28",
  "#EECC24",
  "#A52A2A",
  "#53331E",
  "#594537",
  "#3C241B",
  "#E6F2EA",
  "#6E5150",
  "#A5A88F",
  "#BC9B1B",
  "#F0DC82",
  "#482427",
  "#75442B",
  "#292C2F",
  "#2B3449",
  "#800020",
  "#DEB887",
  "#234537",
  "#D08363",
  "#582124",
  "#FF7034",
  "#E97451",
  "#8A3324",
  "#DA9429",
  "#9D702E",
  "#68578C",
  "#F6E0A4",
  "#F1EBDA",
  "#4A2E32",
  "#CD526C",
  "#4C5544",
  "#5B6F55",
  "#5F9EA0",
  "#984961",
  "#6A4928",
  "#D5B185",
  "#E98C3A",
  "#3D7188",
  "#206937",
  "#803A4B",
  "#CCA483",
  "#4F4D32",
  "#78866B",
  "#D08A9B",
  "#FFFF99",
  "#8E5164",
  "#4E5552",
  "#FEE0A5",
  "#75482F",
  "#AFC182",
  "#592720",
  "#FFD59A",
  "#EBE5D5",
  "#1B3427",
  "#C41E3A",
  "#C99AA0",
  "#00CC99",
  "#E68095",
  "#F5F9CB",
  "#960018",
  "#5B3A24",
  "#FFA6C9",
  "#F8DBE0",
  "#ED9121",
  "#F0B253",
  "#3F545A",
  "#8CA8A0",
  "#D1B399",
  "#AAB5B8",
  "#44232F",
  "#273C5A",
  "#E0E4DC",
  "#E0B8B1",
  "#9271A7",
  "#463430",
  "#ACE1AF",
  "#B4C04C",
  "#D2D2C0",
  "#3A4E5F",
  "#2B3F36",
  "#857158",
  "#DE3163",
  "#007BA7",
  "#2A52BE",
  "#FDE9E0",
  "#5A6E41",
  "#DFC281",
  "#475877",
  "#E8CD9A",
  "#EED9B6",
  "#EDB8C7",
  "#394043",
  "#464646",
  "#F8EADF",
  "#FFC878",
  "#A4DCE6",
  "#D0748B",
  "#7FFF00",
  "#DFFF00",
  "#419F59",
  "#B3ABB6",
  "#2C5971",
  "#88A95B",
  "#95532F",
  "#DEC371",
  "#F5CD82",
  "#372D52",
  "#F5D7DC",
  "#B94E48",
  "#666FB4",
  "#5B5D56",
  "#F0F5BB",
  "#D05E34",
  "#F9F7DE",
  "#FBF3D3",
  "#B8AD8A",
  "#9DD3A8",
  "#D2691E",
  "#382161",
  "#71A91D",
  "#BF652E",
  "#CAC7B7",
  "#7D4E38",
  "#242A2E",
  "#FBD7CC",
  "#E34234",
  "#5D3B2E",
  "#8E9A21",
  "#9FB70A",
  "#D2B3A9",
  "#6E2233",
  "#F4C8DB",
  "#897E59",
  "#DFEFEA",
  "#463623",
  "#C2BCB1",
  "#353E4F",
  "#B0A99F",
  "#47562F",
  "#0047AB",
  "#4F3835",
  "#35281E",
  "#E1DABB",
  "#2D3032",
  "#726751",
  "#362D26",
  "#9A463D",
  "#3C2F23",
  "#9D8ABF",
  "#CAB5B2",
  "#9BDDFF",
  "#636373",
  "#4C785C",
  "#A0B1AE",
  "#827F79",
  "#D2D1CD",
  "#DDCB46",
  "#654D49",
  "#B1DD52",
  "#C16F68",
  "#DA8A67",
  "#77422C",
  "#996666",
  "#95524C",
  "#FF7F50",
  "#F5D0C9",
  "#FF4040",
  "#AB6E67",
  "#404D49",
  "#BBB58D",
  "#5A4C42",
  "#FBEC5D",
  "#F8F3C4",
  "#42426F",
  "#8D702A",
  "#FFF8DC",
  "#93CCEA",
  "#6495ED",
  "#E9BA81",
  "#794D60",
  "#E1F8E7",
  "#FCD5CF",
  "#625D2A",
  "#FFB7D5",
  "#BFBAAF",
  "#1B4B35",
  "#443736",
  "#87382F",
  "#A65648",
  "#DB5079",
  "#4D3E3C",
  "#FFFDD0",
  "#FFE39B",
  "#EEC051",
  "#393227",
  "#77712B",
  "#DC143C",
  "#706950",
  "#763C33",
  "#B4E2D5",
  "#165B31",
  "#F38653",
  "#784430",
  "#F5F4C1",
  "#F5B2C5",
  "#3D85B8",
  "#5C8173",
  "#0F4645",
  "#EDD2A4",
  "#5B3E90",
  "#664A2D",
  "#FED85D",
  "#5B89C0",
  "#00008B",
  "#654321",
  "#08457E",
  "#986960",
  "#CD5B45",
  "#008B8B",
  "#B8860B",
  "#A9A9A9",
  "#013220",
  "#4A766E",
  "#BDB76B",
  "#8B008B",
  "#556B2F",
  "#FF8C00",
  "#9932CC",
  "#03C03C",
  "#E75480",
  "#871F78",
  "#8B0000",
  "#45362B",
  "#E9967A",
  "#8FBC8F",
  "#465352",
  "#483D8B",
  "#2F4F4F",
  "#177245",
  "#97694F",
  "#FFA812",
  "#00CED1",
  "#9400D3",
  "#855E42",
  "#788878",
  "#9F9D91",
  "#E6D6CD",
  "#85CA87",
  "#CCCF82",
  "#E36F8A",
  "#51412D",
  "#DA3287",
  "#193925",
  "#343467",
  "#9955BB",
  "#CC00CC",
  "#FF1493",
  "#167E65",
  "#00BFFF",
  "#19443C",
  "#B5998E",
  "#486531",
  "#999B95",
  "#8272A4",
  "#1560BD",
  "#F9E4C6",
  "#A15F3B",
  "#EDC9AF",
  "#EDE7E0",
  "#E7F2E9",
  "#322C2B",
  "#696969",
  "#607C47",
  "#892D4F",
  "#CD8431",
  "#1E90FF",
  "#F5F171",
  "#6A6873",
  "#6C5B4C",
  "#5A4F51",
  "#816E5C",
  "#6E5F56",
  "#E4CF99",
  "#E9DCBE",
  "#D2C3A3",
  "#777672",
  "#6FD2BE",
  "#FBEB9B",
  "#514F4A",
  "#E5CAC0",
  "#AC9B9B",
  "#F0DFBB",
  "#B0AC94",
  "#B8A722",
  "#FBF2DB",
  "#47526E",
  "#AA8CBC",
  "#00879F",
  "#E6D8D4",
  "#313337",
  "#323438",
  "#A4AFCD",
  "#3F3939",
  "#C2B280",
  "#D6D1C0",
  "#C96138",
  "#266255",
  "#C1D8C5",
  "#97A49A",
  "#F9E4C5",
  "#990066",
  "#1034A6",
  "#39392C",
  "#8F4E45",
  "#7DF9FF",
  "#6600FF",
  "#CCFF00",
  "#BF00FF",
  "#243640",
  "#1B8A6B",
  "#297B76",
  "#50C878",
  "#6E3974",
  "#50494A",
  "#7C7173",
  "#29598B",
  "#F5D752",
  "#274234",
  "#8BA58F",
  "#DAB160",
  "#4E312D",
  "#2D2F28",
  "#329760",
  "#CDA59C",
  "#26604F",
  "#264334",
  "#F3E5DC",
  "#6E5A5B",
  "#C19A6B",
  "#801818",
  "#F2E6DD",
  "#625665",
  "#A5D785",
  "#4D5D53",
  "#D19275",
  "#63B76C",
  "#4F7942",
  "#876A68",
  "#EACC4A",
  "#DBE0D0",
  "#B1592F",
  "#636F22",
  "#75785A",
  "#61755B",
  "#694554",
  "#4B5A62",
  "#8F3F2A",
  "#B22222",
  "#E09842",
  "#CE1620",
  "#314643",
  "#BE5C48",
  "#86282E",
  "#EA8645",
  "#E1634F",
  "#EEDC82",
  "#716E61",
  "#7A2E4D",
  "#FFFAF0",
  "#D0EAE8",
  "#D5C7E8",
  "#A7A69D",
  "#228B22",
  "#FDEFDB",
  "#65ADB2",
  "#FFD7A0",
  "#029D74",
  "#4156C5",
  "#09F911",
  "#E35BD8",
  "#C00000",
  "#BFBDC1",
  "#DEB7D9",
  "#A4D2E0",
  "#F64A8A",
  "#86837A",
  "#B4E1BB",
  "#E56D75",
  "#E1E4C5",
  "#E2F2E4",
  "#DBE5D2",
  "#4BA351",
  "#C154C1",
  "#FF77FF",
  "#C2D62E",
  "#D19033",
  "#335083",
  "#15633D",
  "#3C3B3C",
  "#C45655",
  "#2C4641",
  "#DCDCDC",
  "#DCD7D1",
  "#D8A723",
  "#E49B0F",
  "#C5832E",
  "#31796D",
  "#E77B75",
  "#CBD0CF",
  "#C0BFC7",
  "#F8F8FF",
  "#564786",
  "#B9AD61",
  "#D9DFCD",
  "#F8EACA",
  "#EBD4AE",
  "#78B1BF",
  "#5F8151",
  "#786E4C",
  "#34533D",
  "#FFD700",
  "#D56C30",
  "#E2B227",
  "#CA8136",
  "#996515",
  "#F1CC2B",
  "#EBDE31",
  "#F9D77E",
  "#FCC200",
  "#EACE6A",
  "#FFC152",
  "#FFDF00",
  "#DBDB70",
  "#373332",
  "#29332B",
  "#FDE336",
  "#399F86",
  "#9FD385",
  "#698890",
  "#51559B",
  "#CAB8A2",
  "#FFCD73",
  "#8B8265",
  "#C5E7CD",
  "#7B948C",
  "#9DE093",
  "#413D4B",
  "#383428",
  "#4A4B46",
  "#008000",
  "#3E6334",
  "#393D2A",
  "#526B2D",
  "#BFC298",
  "#266242",
  "#9CA664",
  "#A9AF99",
  "#23414E",
  "#2C2D24",
  "#DEDDCB",
  "#ADFF2F",
  "#C14D36",
  "#808080",
  "#9FA3A7",
  "#BDBAAE",
  "#D1D3CC",
  "#A19A7F",
  "#9391A0",
  "#465945",
  "#952E31",
  "#343F5C",
  "#74B2A8",
  "#A4ADB0",
  "#ACC9B2",
  "#718F8A",
  "#484753",
  "#2C3539",
  "#7A7C76",
  "#989171",
  "#9E8022",
  "#633528",
  "#2C2A35",
  "#EDE7C8",
  "#558F93",
  "#F2E5BF",
  "#FBF0D6",
  "#F1EAD7",
  "#E6DBC7",
  "#E8D4A2",
  "#5218FA",
  "#3FFF00",
  "#C93413",
  "#CBCEC0",
  "#EAB76A",
  "#3B2B2C",
  "#5784C1",
  "#99522B",
  "#D2DAED",
  "#4F2A2C",
  "#AEBBC1",
  "#948C7E",
  "#46473E",
  "#DF73FF",
  "#69684B",
  "#987D73",
  "#928C3C",
  "#7A9461",
  "#A7A07E",
  "#736330",
  "#DFF1D6",
  "#F5EFEB",
  "#F6F5D7",
  "#49889A",
  "#608A5A",
  "#AB495C",
  "#A1A9A8",
  "#FDA470",
  "#BB8E34",
  "#647D86",
  "#25342B",
  "#F400A1",
  "#5C3C6D",
  "#F0FFF0",
  "#E8ED69",
  "#CD6D93",
  "#648894",
  "#6D562C",
  "#815B28",
  "#FF00CC",
  "#FF69B4",
  "#4E2E53",
  "#A7752C",
  "#CEEFE4",
  "#355E3B",
  "#8B7E77",
  "#B2994B",
  "#AFE3D6",
  "#CAE1D9",
  "#EF95AE",
  "#B0E313",
  "#CD5C5C",
  "#4F301F",
  "#4B0082",
  "#9C5B34",
  "#002FA7",
  "#FF4F00",
  "#03B4C8",
  "#62422B",
  "#CBCDCD",
  "#706E66",
  "#865040",
  "#009900",
  "#F8EDDB",
  "#FFFFF0",
  "#3D325D",
  "#413628",
  "#3D3F7D",
  "#00A86B",
  "#E27945",
  "#CAE7E2",
  "#3F2E4C",
  "#29292F",
  "#674834",
  "#2F7532",
  "#CE7259",
  "#259797",
  "#5F2C2F",
  "#A50B5E",
  "#44798E",
  "#BBD0C9",
  "#136843",
  "#463D3E",
  "#EEF293",
  "#7AAAE0",
  "#5D5346",
  "#878785",
  "#29AB87",
  "#B0C4C4",
  "#74918E",
  "#DCBFAC",
  "#6C5E53",
  "#245336",
  "#C5C3B0",
  "#2D2D24",
  "#FEDCC1",
  "#576D8E",
  "#4CBB17",
  "#4D503C",
  "#6C322E",
  "#5FB69C",
  "#F0E68C",
  "#BFC0AB",
  "#3A3532",
  "#49764F",
  "#695D87",
  "#583580",
  "#E093AB",
  "#7B785A",
  "#804E2C",
  "#FEB552",
  "#F9D054",
  "#428929",
  "#BAC00E",
  "#C6DA36",
  "#C6A95E",
  "#FFFF66",
  "#6E8D71",
  "#E6E6FA",
  "#CCCCFF",
  "#FFF0F5",
  "#BDBBD7",
  "#FBAED2",
  "#FBA0E3",
  "#7CFC00",
  "#906A54",
  "#FDE910",
  "#FFFACD",
  "#968428",
  "#999A86",
  "#2E3749",
  "#ADD8E6",
  "#F08080",
  "#E0FFFF",
  "#EEDD82",
  "#FAFAD2",
  "#90EE90",
  "#D3D3D3",
  "#FFB6C1",
  "#FFA07A",
  "#20B2AA",
  "#87CEFA",
  "#8470FF",
  "#778899",
  "#B0C4DE",
  "#856363",
  "#FFFFE0",
  "#F7A233",
  "#C8A2C8",
  "#9470C4",
  "#C19FB3",
  "#E9EEEB",
  "#7AAC21",
  "#00FF00",
  "#32CD32",
  "#5F9727",
  "#89AC27",
  "#FAF0E6",
  "#C7CDD8",
  "#962C54",
  "#534B4F",
  "#312A29",
  "#DBD9C2",
  "#B3BBB7",
  "#489084",
  "#316EA0",
  "#A2A580",
  "#393E2E",
  "#9D9CB4",
  "#B9ACBB",
  "#AE94AB",
  "#522426",
  "#8B504B",
  "#4C3347",
  "#AB9A1C",
  "#292D4F",
  "#4E5541",
  "#782E2C",
  "#AB8D3F",
  "#697D89",
  "#CBE8E8",
  "#FFB97B",
  "#B7E3A8",
  "#2D3C54",
  "#473E23",
  "#FF00FF",
  "#AAF0D1",
  "#F8F4FF",
  "#CA3435",
  "#A56531",
  "#2A2922",
  "#E3B982",
  "#695F50",
  "#505555",
  "#0BDA51",
  "#97976F",
  "#66B7E1",
  "#3A4531",
  "#A59784",
  "#766D7C",
  "#8D90A1",
  "#B57B2E",
  "#8E2323",
  "#CD525B",
  "#F5B799",
  "#E77200",
  "#E2AF80",
  "#7FC15C",
  "#96A793",
  "#E4DB55",
  "#352235",
  "#B88A3D",
  "#42639F",
  "#800000",
  "#2B2E26",
  "#B7A8A3",
  "#3C3748",
  "#EBC881",
  "#57534B",
  "#365C7D",
  "#8E4D45",
  "#524B4B",
  "#E0B0FF",
  "#915F6D",
  "#F091A9",
  "#C8B1C0",
  "#73C2FB",
  "#8C6338",
  "#66CDAA",
  "#0000CD",
  "#AF4035",
  "#EAEAAE",
  "#BA55D3",
  "#9370DB",
  "#3CB371",
  "#7B68EE",
  "#00FA9A",
  "#48D1CC",
  "#C71585",
  "#A68064",
  "#E0B7C2",
  "#342931",
  "#FEBAAD",
  "#C3B9DD",
  "#D5D2D1",
  "#E1DBD0",
  "#4F4E48",
  "#73343A",
  "#554A3C",
  "#6E3D34",
  "#D4AF37",
  "#BB7431",
  "#4A3B6A",
  "#9B3D3D",
  "#666A6D",
  "#21303E",
  "#191970",
  "#21263A",
  "#242E28",
  "#3F3623",
  "#F6F493",
  "#9E3332",
  "#F3E5C0",
  "#DCD9CD",
  "#595648",
  "#F5F5CC",
  "#DAEA6F",
  "#373E41",
  "#506355",
  "#407577",
  "#3E3267",
  "#F5FFFA",
  "#98FF98",
  "#E0D8A7",
  "#C6EADD",
  "#373F43",
  "#A5A9B2",
  "#BAB9A9",
  "#FFE4E1",
  "#605A67",
  "#582F2B",
  "#FFE4B5",
  "#6F372D",
  "#97463C",
  "#FF9889",
  "#6B252C",
  "#554D42",
  "#A58B6F",
  "#7A7679",
  "#393B3C",
  "#7AC5B4",
  "#8378C7",
  "#F5F3CE",
  "#CECDB8",
  "#C0B2D7",
  "#F0C420",
  "#9ED1D3",
  "#442D21",
  "#565051",
  "#005F5B",
  "#ADDFAD",
  "#1AB385",
  "#A09F9C",
  "#997A8D",
  "#A9844F",
  "#9E7E53",
  "#C54B8C",
  "#884F40",
  "#524D5B",
  "#FFDB58",
  "#D68B80",
  "#FDAE45",
  "#21421E",
  "#D8DDDA",
  "#4E5D4E",
  "#A39A87",
  "#E9E6DC",
  "#FFDEAD",
  "#000080",
  "#0066CC",
  "#B8C6BE",
  "#EEC7A2",
  "#4D4DFF",
  "#FF9933",
  "#FF6EC7",
  "#93AAB9",
  "#77A8AB",
  "#252525",
  "#AAA583",
  "#666F6F",
  "#6D3B24",
  "#00009C",
  "#E4C385",
  "#EBC79E",
  "#DD8374",
  "#29A98B",
  "#332E2E",
  "#A23D54",
  "#253F4E",
  "#A99D9D",
  "#A19986",
  "#1D393C",
  "#A4B88F",
  "#BC9229",
  "#7E4A3B",
  "#FCEDC5",
  "#008F70",
  "#4CA973",
  "#CC7722",
  "#DFF0E2",
  "#FAF3DC",
  "#313330",
  "#8A3335",
  "#73503B",
  "#CFB53B",
  "#FDF5E6",
  "#796878",
  "#C02E4C",
  "#808000",
  "#6B8E23",
  "#B5B35C",
  "#888064",
  "#747028",
  "#9AB973",
  "#C2E6EC",
  "#48412B",
  "#A8C3BC",
  "#987E7E",
  "#395555",
  "#FFA500",
  "#FFA000",
  "#FF4500",
  "#A85335",
  "#EAE3CD",
  "#DA70D6",
  "#F1EBD9",
  "#255B77",
  "#C28E88",
  "#D2D3B3",
  "#818988",
  "#D3DBCB",
  "#2D383A",
  "#FF6037",
  "#28353A",
  "#6D9A78",
  "#D1EAEA",
  "#D4B5B0",
  "#864B36",
  "#7A715C",
  "#009DC4",
  "#4F4037",
  "#7EB394",
  "#682860",
  "#987654",
  "#DDADAF",
  "#ABCDEF",
  "#EEE8AA",
  "#98FB98",
  "#BDCAA8",
  "#F984E5",
  "#9C8D72",
  "#FADADD",
  "#F9F59F",
  "#EFD6DA",
  "#636D70",
  "#C3BEBB",
  "#BC987E",
  "#AFEEEE",
  "#DB7093",
  "#20392C",
  "#36482F",
  "#EAE4DC",
  "#EBF7E4",
  "#DFB992",
  "#544F3A",
  "#FFEFD5",
  "#7C2D37",
  "#488084",
  "#D0C8B0",
  "#FBEB50",
  "#312760",
  "#BFCDC0",
  "#305D35",
  "#77DD77",
  "#639283",
  "#D3E5EF",
  "#2A2551",
  "#BAAB87",
  "#404048",
  "#FFCBA4",
  "#FFDAB9",
  "#FFCC99",
  "#FADFAD",
  "#7A4434",
  "#D1E231",
  "#DED1C6",
  "#EAE0C8",
  "#766D52",
  "#2599B2",
  "#D7E7D0",
  "#ACB9E8",
  "#C2A9DB",
  "#ACB6B2",
  "#C3CDE6",
  "#1C39BB",
  "#00A693",
  "#32127A",
  "#F77FBE",
  "#683332",
  "#CC3333",
  "#FE28A2",
  "#EC5800",
  "#CD853F",
  "#733D1F",
  "#7A7229",
  "#DA9790",
  "#91A092",
  "#826663",
  "#F8EA97",
  "#5BA0D0",
  "#FDD7E4",
  "#00A550",
  "#756556",
  "#BDC07E",
  "#01796F",
  "#2A2F23",
  "#FFC0CB",
  "#FF66FF",
  "#D8B4B6",
  "#F6CCD7",
  "#F3D7B6",
  "#BFB3B2",
  "#9D5432",
  "#F5E6C4",
  "#FCDBD2",
  "#BA782A",
  "#BBCDA5",
  "#E57F3D",
  "#BF8D3C",
  "#3E594C",
  "#DDA0DD",
  "#651C26",
  "#E5F2E7",
  "#8AA7CC",
  "#6A1F44",
  "#DDDCDB",
  "#DF9D5B",
  "#3B436C",
  "#F4F09B",
  "#8B98D8",
  "#F0D555",
  "#EFDCD4",
  "#845C40",
  "#B0E0E6",
  "#883C32",
  "#CAB4D4",
  "#E2CDD5",
  "#E4DE8E",
  "#F8F6DF",
  "#F6E3DA",
  "#003366",
  "#DD00FF",
  "#CC8899",
  "#6E3326",
  "#59BAA3",
  "#BAC0B4",
  "#FF7518",
  "#534931",
  "#800080",
  "#652DC1",
  "#9678B6",
  "#50404D",
  "#CDAE70",
  "#F2EDDD",
  "#EBE2D2",
  "#D9D9F3",
  "#C3988B",
  "#CBC9C0",
  "#6A5445",
  "#232F2C",
  "#FF355E",
  "#DCC6A0",
  "#667028",
  "#B3C1B1",
  "#FCAE60",
  "#2B2E25",
  "#6F747B",
  "#D27D46",
  "#734A12",
  "#FF33CC",
  "#E30B5C",
  "#453430",
  "#FF0000",
  "#701F28",
  "#CB6F4A",
  "#662A2C",
  "#FF3F34",
  "#5D1F1E",
  "#7D4138",
  "#AD522E",
  "#BB3385",
  "#5B342E",
  "#D1EF9F",
  "#A98D36",
  "#203F58",
  "#798488",
  "#A0CDD9",
  "#F6DEDA",
  "#B26E33",
  "#323F75",
  "#37363F",
  "#3D4653",
  "#EFECDE",
  "#EFF5D1",
  "#5959AB",
  "#A15226",
  "#B7C61A",
  "#89D9C8",
  "#556061",
  "#DDAD56",
  "#00CCCC",
  "#5A4D41",
  "#93A2BA",
  "#9D442D",
  "#C7A384",
  "#6D7876",
  "#D8625B",
  "#7D6757",
  "#F4F0E6",
  "#FFC69E",
  "#EAB852",
  "#A14743",
  "#8E593C",
  "#D3A194",
  "#FEAB9A",
  "#8A2D52",
  "#AC512D",
  "#905D5D",
  "#FBEEE8",
  "#BC8F8F",
  "#B69642",
  "#A94064",
  "#4169E1",
  "#B54B73",
  "#6B3FA0",
  "#E0115F",
  "#716675",
  "#F1EDD4",
  "#80461B",
  "#7D655C",
  "#B7410E",
  "#3A181A",
  "#8D5F2C",
  "#5D4E46",
  "#8B4513",
  "#FF6600",
  "#F4C430",
  "#989F7A",
  "#B79826",
  "#A5CEEC",
  "#177B4D",
  "#FA8072",
  "#FFD67B",
  "#696268",
  "#EEF3E5",
  "#3B2E25",
  "#2C6E31",
  "#445761",
  "#4E6C9D",
  "#867665",
  "#A3876A",
  "#AF937D",
  "#786D5F",
  "#DECB81",
  "#FEDBB7",
  "#F4A460",
  "#92000A",
  "#6C3736",
  "#9998A7",
  "#A96A50",
  "#E1D5A6",
  "#082567",
  "#555B2C",
  "#F4EAE4",
  "#F5DEC4",
  "#6F63A0",
  "#ADD9D1",
  "#FF2400",
  "#4A2D57",
  "#7E2530",
  "#6B6A6C",
  "#87876F",
  "#FFD800",
  "#8D8478",
  "#308EA0",
  "#6A6466",
  "#EEE7C8",
  "#66FF66",
  "#3D4031",
  "#EF9548",
  "#DFDDD6",
  "#2E8B57",
  "#C2D5C4",
  "#8AAEA4",
  "#DB817E",
  "#77B7D0",
  "#321414",
  "#69326E",
  "#FFF5EE",
  "#37412A",
  "#E6DFE7",
  "#FFBA00",
  "#6B4226",
  "#9E5B40",
  "#FCE9D7",
  "#837050",
  "#9AC0B6",
  "#9F9B9D",
  "#609AB8",
  "#F8F6A8",
  "#33CC99",
  "#009E60",
  "#34363A",
  "#00494E",
  "#1B4636",
  "#E6B2A6",
  "#745937",
  "#7988AB",
  "#4E4E4C",
  "#842833",
  "#E899BE",
  "#FC0FC0",
  "#61666B",
  "#686B50",
  "#E9D9A9",
  "#A0522D",
  "#BBADA1",
  "#C0C0C0",
  "#ACAEA9",
  "#BEBDB6",
  "#67BE90",
  "#A6D5D0",
  "#69293B",
  "#68766E",
  "#C5BAA0",
  "#9DB4AA",
  "#87CEEB",
  "#6A5ACD",
  "#708090",
  "#42342B",
  "#003399",
  "#496267",
  "#BB5F34",
  "#605D6B",
  "#FFFAFA",
  "#E3E3DC",
  "#EAF7C9",
  "#D6F0CD",
  "#E4D7E5",
  "#ECE5DA",
  "#CFBEA5",
  "#EEDFDE",
  "#85494C",
  "#EADAC2",
  "#E9ECF1",
  "#DD6B38",
  "#9D7F61",
  "#C9B59A",
  "#6F634B",
  "#4B433B",
  "#7B8976",
  "#DED1B7",
  "#375D4F",
  "#6C4F3F",
  "#8B5F4D",
  "#FF1CAE",
  "#B3C4D8",
  "#F1D79E",
  "#7ECDDD",
  "#A7FC00",
  "#00FF7F",
  "#A3BD9C",
  "#F1F1C6",
  "#E9E1D9",
  "#B8CA9D",
  "#A2A1AC",
  "#8F7D6B",
  "#325482",
  "#858885",
  "#A0A197",
  "#D2C6B6",
  "#E3DD39",
  "#4682B4",
  "#43464B",
  "#833D3E",
  "#807661",
  "#65645F",
  "#747880",
  "#DABE82",
  "#946A81",
  "#406356",
  "#724AA1",
  "#8C9C9C",
  "#EEEFDF",
  "#C6EA80",
  "#8FB69C",
  "#38B0DE",
  "#EF8E38",
  "#C4AA4D",
  "#F8AFA9",
  "#DAC01A",
  "#C76155",
  "#FFCC33",
  "#C0514A",
  "#FE4C40",
  "#FA9D49",
  "#FFB437",
  "#B8D4BB",
  "#C3D6BD",
  "#007B77",
  "#7C9F2F",
  "#8B8685",
  "#252F2F",
  "#DAE6DD",
  "#F9E176",
  "#EE918D",
  "#D7CEC5",
  "#DBD0CA",
  "#F6AE78",
  "#D2B960",
  "#DC722A",
  "#D8CC9B",
  "#853534",
  "#A39977",
  "#752B2F",
  "#D2B48C",
  "#B8B5A1",
  "#1E2F3C",
  "#F28500",
  "#FFCC00",
  "#D46F31",
  "#7C7C72",
  "#B37084",
  "#DEF1DD",
  "#253C48",
  "#BAC0B3",
  "#483C32",
  "#8B8589",
  "#643A48",
  "#496569",
  "#2B4B40",
  "#BFB5A2",
  "#D0F0C0",
  "#F883C2",
  "#AB8953",
  "#008080",
  "#254855",
  "#3C2126",
  "#CD5700",
  "#F4D0A4",
  "#E2725B",
  "#ECE67E",
  "#FCB057",
  "#B1948F",
  "#544E31",
  "#D8BFD8",
  "#4D4D4B",
  "#923830",
  "#97422D",
  "#B9C3BE",
  "#184343",
  "#FC80A5",
  "#F0F590",
  "#BEB4AB",
  "#324336",
  "#D9D6CF",
  "#DDD6E1",
  "#9F715F",
  "#6D5843",
  "#44362D",
  "#3E2631",
  "#2D2541",
  "#4F6348",
  "#FF6347",
  "#E79E88",
  "#817C87",
  "#FD0E35",
  "#353D75",
  "#374E88",
  "#744042",
  "#9CACA5",
  "#6DAFA7",
  "#DDEDE9",
  "#E2DDC7",
  "#E2813B",
  "#7E8424",
  "#805D80",
  "#C54F33",
  "#AEC9EB",
  "#00755E",
  "#4C5356",
  "#8E72C7",
  "#454642",
  "#F9D3BE",
  "#E3AC3D",
  "#DEA681",
  "#46494E",
  "#585452",
  "#F5CC23",
  "#A56E75",
  "#AE9041",
  "#40E0D0",
  "#6CDAE7",
  "#363E1D",
  "#AD6242",
  "#E3E5B1",
  "#BF914B",
  "#F8E4E3",
  "#DAC0CD",
  "#F4F6EC",
  "#C19156",
  "#66023C",
  "#FF6FFF",
  "#120A8F",
  "#D4574E",
  "#382C38",
  "#2A2B41",
  "#523936",
  "#CCB69B",
  "#EBD2D1",
  "#FDEFD3",
  "#C80815",
  "#2C5778",
  "#8B7D82",
  "#62603E",
  "#48531A",
  "#FF4D00",
  "#5C4033",
  "#CDCDCD",
  "#A85533",
  "#564985",
  "#5F9228",
  "#4DB1C8",
  "#955264",
  "#C58F9D",
  "#2E2249",
  "#EE82EE",
  "#9F5F9F",
  "#F7468A",
  "#40826D",
  "#4B5F56",
  "#F9E496",
  "#97D5B3",
  "#E3DFD9",
  "#FF9980",
  "#803790",
  "#4E2728",
  "#443240",
  "#36383C",
  "#D4BBB1",
  "#5B6E91",
  "#4C4E31",
  "#E4E2DC",
  "#849137",
  "#B6ECDE",
  "#006E4E",
  "#D6CA3D",
  "#F2CDBB",
  "#EEB39E",
  "#FDD7D8",
  "#4C6B88",
  "#8E3537",
  "#5C512F",
  "#E5823A",
  "#D4CFC5",
  "#F1919A",
  "#F5DEB3",
  "#DFD7BD",
  "#D29062",
  "#D4915D",
  "#EFE6E6",
  "#FFFFFF",
  "#D7EEE4",
  "#E7E5E8",
  "#EEE7DC",
  "#F8F6D8",
  "#DAD6CC",
  "#D4CFB4",
  "#F5F5F5",
  "#7A89B8",
  "#E3D474",
  "#E7E4DE",
  "#FF3399",
  "#FD5B78",
  "#BECA60",
  "#53736F",
  "#DFE6CF",
  "#69755C",
  "#462C77",
  "#522C35",
  "#D0C383",
  "#F9E8E2",
  "#C9A0DC",
  "#A29ECD",
  "#FBF073",
  "#302621",
  "#463629",
  "#626746",
  "#45402B",
  "#2B3230",
  "#554545",
  "#75876E",
  "#FFFF00",
  "#9ACD32",
  "#73633E",
  "#FFAE42",
  "#F49F35",
  "#FFC5BB",
  "#826A21",
  "#C7B882",
  "#6B5A5A",
  "#B2C6B1",
  "#C6723B",
  "#3B3C38",
  "#81A6AA",
  "#EBC2AF",
  "#DEE3E3",
  "#DDC283",
  "#A29589",
  "#17462E",
  "#CDD5D5"
];