const hvacData = [
  {
    "brand": "York",
    "logo": "/logos/York.png",
    "productLines": [
      {
        "line": "Air Conditioners",
        "product_line_image": "https://www.york.com/-/media/project/jci-global/york-sites/united-states-york/residential/images/residential-products/york-residential-products-air-conditioners.png?la=en&h=559&w=850&hash=3053F51261D7965A45DCB86D0E775A75",
        "models": [
          {
            "name": "YC4 14.3 SEER2 Single-Stage Air Conditioner",
            "model_image": "https://tyco.widen.net/content/msldfccfaj/jpeg/DS_residentialproductfamily_productcardimage_YC4_Clean.jpeg?position=c&color=ffffffff&quality=80&u=77lbkw",
            "efficiency": "YC4 14.3 SEER2 Single-Stage Air Conditioner"
          },
          {
            "name": "YCS 14 SEER Single Stage Air Conditioner",
            "model_image": "https://embed.widencdn.net/img/tyco/28xfvgtabg/exact/DX_residentialproductfamily_productcardimage_ycs_2.jpeg?position=c&crop=no&color=ffffffff&u=pm2g2j",
            "efficiency": "YCS 14 SEER Single Stage Air Conditioner"
          },
          {
            "name": "YC2D 13.4 SEER2 Single Stage Air Conditioner",
            "model_image": "https://embed.widencdn.net/img/tyco/ucgdqti5al/exact/DX_residentialproductfamily_productcardimage_ycd_1.jpeg?position=c&crop=no&color=ffffffff&u=pm2g2j",
            "efficiency": "YC2D 13.4 SEER2 Single Stage Air Conditioner"
          },
          {
            "name": "YC2F 15.2 SEER2 Air Conditioner",
            "model_image": "https://tyco.widen.net/content/wpp8swjeet/jpeg/DX_residentialproductfamily_productcardimage_YC2F_1.jpeg?position=c&color=ffffffff&quality=80&u=ncoxvb",
            "efficiency": "YC2F 15.2 SEER2 Air Conditioner"
          },
          {
            "name": "YC2E 14.3 SEER2 Single Stage Air Conditioner",
            "model_image": "https://tyco.widen.net/content/etciwqmivg/jpeg/DX_residentialproductfamily_productcardimage_YC2E_v1.jpeg?position=c&color=ffffffff&quality=80&u=ncoxvb",
            "efficiency": "YC2E 14.3 SEER2 Single Stage Air Conditioner"
          },
          {
            "name": "YFK 17 SEER Two Stage Air Conditioner",
            "model_image": "https://embed.widencdn.net/img/tyco/lpbhjpxh7m/exact/DX_residentialproductfamily_productcardimage_yfk_1.jpeg?position=c&crop=no&color=ffffffff&u=pm2g2j",
            "efficiency": "YFK 17 SEER Two Stage Air Conditioner"
          },
          {
            "name": "YC3 13.4 SEER2 Single Stage Air Conditioner",
            "model_image": "https://tyco.widen.net/content/qmqttxttnn/jpeg/DS_residentialproductfamily_productcardimage_YC3_Clean.jpeg?position=c&color=ffffffff&quality=80&u=77lbkw",
            "efficiency": "YC3 13.4 SEER2 Single Stage Air Conditioner"
          },
          {
            "name": "YXV 21 SEER Variable Capacity Air Conditioner",
            "model_image": "https://embed.widencdn.net/img/tyco/w43mzqs7jm/exact/DX_residentialproductfamily_productcardimage_yxt_1.jpeg?position=c&crop=no&color=ffffffff&u=pm2g2j",
            "efficiency": "YXV 21 SEER Variable Capacity Air Conditioner"
          },
          {
            "name": "HMCG2 16.5 SEER2 Modulating Side-Discharge Air Conditioner",
            "model_image": "https://tyco.widen.net/content/maybm4jwxt/jpeg/DS_residentialproductfamily_productcardimage_HMH7%20Grouping.jpeg?position=c&color=ffffffff&quality=80&u=ncoxvb",
            "efficiency": "HMCG2 16.5 SEER2 Modulating Side-Discharge Air Conditioner"
          },
          {
            "name": "YCE 14 SEER Single Stage Air Conditioner",
            "model_image": "https://embed.widencdn.net/img/tyco/jjdf0viicy/exact/DX_residentialproductfamily_productcardimage_yce_2.jpeg?position=c&crop=no&color=ffffffff&u=pm2g2j",
            "efficiency": "YCE 14 SEER Single Stage Air Conditioner"
          },
          {
            "name": "YXT 19 SEER Two Stage Air Conditioner",
            "model_image": "https://embed.widencdn.net/img/tyco/w43mzqs7jm/exact/DX_residentialproductfamily_productcardimage_yxt_1.jpeg?position=c&crop=no&color=ffffffff&u=pm2g2j",
            "efficiency": "YXT 19 SEER Two Stage Air Conditioner"
          },
          {
            "name": "YC6 16+ SEER2 Air Conditioner",
            "model_image": "https://tyco.widen.net/content/ottpfievjn/jpeg/DS_residentialproductfamily_productcardimage_YC6_YOR.jpeg?position=c&color=ffffffff&quality=80&u=ytcytf",
            "efficiency": "YC6 16+ SEER2 Air Conditioner"
          },
          {
            "name": "YC4 14.3 SEER2 Single-Stage Air Conditioner",
            "model_image": "https://tyco.widen.net/content/msldfccfaj/jpeg/DS_residentialproductfamily_productcardimage_YC4_Clean.jpeg?position=c&color=ffffffff&quality=80&u=77lbkw",
            "efficiency": "YC4 14.3 SEER2 Single-Stage Air Conditioner"
          },
          {
            "name": "YCS 14 SEER Single Stage Air Conditioner",
            "model_image": "https://embed.widencdn.net/img/tyco/28xfvgtabg/exact/DX_residentialproductfamily_productcardimage_ycs_2.jpeg?position=c&crop=no&color=ffffffff&u=pm2g2j",
            "efficiency": "YCS 14 SEER Single Stage Air Conditioner"
          },
          {
            "name": "YC2D 13.4 SEER2 Single Stage Air Conditioner",
            "model_image": "https://embed.widencdn.net/img/tyco/ucgdqti5al/exact/DX_residentialproductfamily_productcardimage_ycd_1.jpeg?position=c&crop=no&color=ffffffff&u=pm2g2j",
            "efficiency": "YC2D 13.4 SEER2 Single Stage Air Conditioner"
          },
          {
            "name": "YC2F 15.2 SEER2 Air Conditioner",
            "model_image": "https://tyco.widen.net/content/wpp8swjeet/jpeg/DX_residentialproductfamily_productcardimage_YC2F_1.jpeg?position=c&color=ffffffff&quality=80&u=ncoxvb",
            "efficiency": "YC2F 15.2 SEER2 Air Conditioner"
          },
          {
            "name": "YC2E 14.3 SEER2 Single Stage Air Conditioner",
            "model_image": "https://tyco.widen.net/content/etciwqmivg/jpeg/DX_residentialproductfamily_productcardimage_YC2E_v1.jpeg?position=c&color=ffffffff&quality=80&u=ncoxvb",
            "efficiency": "YC2E 14.3 SEER2 Single Stage Air Conditioner"
          },
          {
            "name": "YFK 17 SEER Two Stage Air Conditioner",
            "model_image": "https://embed.widencdn.net/img/tyco/lpbhjpxh7m/exact/DX_residentialproductfamily_productcardimage_yfk_1.jpeg?position=c&crop=no&color=ffffffff&u=pm2g2j",
            "efficiency": "YFK 17 SEER Two Stage Air Conditioner"
          },
          {
            "name": "YC3 13.4 SEER2 Single Stage Air Conditioner",
            "model_image": "https://tyco.widen.net/content/qmqttxttnn/jpeg/DS_residentialproductfamily_productcardimage_YC3_Clean.jpeg?position=c&color=ffffffff&quality=80&u=77lbkw",
            "efficiency": "YC3 13.4 SEER2 Single Stage Air Conditioner"
          },
          {
            "name": "YXV 21 SEER Variable Capacity Air Conditioner",
            "model_image": "https://embed.widencdn.net/img/tyco/w43mzqs7jm/exact/DX_residentialproductfamily_productcardimage_yxt_1.jpeg?position=c&crop=no&color=ffffffff&u=pm2g2j",
            "efficiency": "YXV 21 SEER Variable Capacity Air Conditioner"
          },
          {
            "name": "HMCG2 16.5 SEER2 Modulating Side-Discharge Air Conditioner",
            "model_image": "https://tyco.widen.net/content/maybm4jwxt/jpeg/DS_residentialproductfamily_productcardimage_HMH7%20Grouping.jpeg?position=c&color=ffffffff&quality=80&u=ncoxvb",
            "efficiency": "HMCG2 16.5 SEER2 Modulating Side-Discharge Air Conditioner"
          },
          {
            "name": "YCE 14 SEER Single Stage Air Conditioner",
            "model_image": "https://embed.widencdn.net/img/tyco/jjdf0viicy/exact/DX_residentialproductfamily_productcardimage_yce_2.jpeg?position=c&crop=no&color=ffffffff&u=pm2g2j",
            "efficiency": "YCE 14 SEER Single Stage Air Conditioner"
          },
          {
            "name": "YXT 19 SEER Two Stage Air Conditioner",
            "model_image": "https://embed.widencdn.net/img/tyco/w43mzqs7jm/exact/DX_residentialproductfamily_productcardimage_yxt_1.jpeg?position=c&crop=no&color=ffffffff&u=pm2g2j",
            "efficiency": "YXT 19 SEER Two Stage Air Conditioner"
          },
          {
            "name": "YC6 16+ SEER2 Air Conditioner",
            "model_image": "https://tyco.widen.net/content/ottpfievjn/jpeg/DS_residentialproductfamily_productcardimage_YC6_YOR.jpeg?position=c&color=ffffffff&quality=80&u=ytcytf",
            "efficiency": "YC6 16+ SEER2 Air Conditioner"
          }
        ]
      },
      {
        "line": "Air Handlers",
        "product_line_image": "https://www.york.com/-/media/project/jci-global/york-sites/united-states-york/residential/images/residential-products/york-residential-products-air-handlers.png?la=en&h=559&w=850&hash=FC493734A43BCA45128CB736CC7F93DA",
        "models": [
          {
            "name": "JHVT Variable Speed Air Handler",
            "model_image": "https://tyco.widen.net/content/crsfi33nkm/jpeg/DX_residentialproductfamily_productcardimage_JHVT_1.jpeg?position=c&color=ffffffff&quality=80&u=d73svt",
            "efficiency": "JHVT Variable Speed Air Handler"
          },
          {
            "name": "JMC Constant CFM, Modular Air Handler",
            "model_image": "https://tyco.widen.net/content/f8pmbkrsxn/jpeg/DS_residentialproductfamily_productcardimage_AHU_JMC_Clean2.jpeg?position=c&color=ffffffff&quality=80&u=77lbkw",
            "efficiency": "JMC Constant CFM, Modular Air Handler"
          },
          {
            "name": "JMET Modular Multi Speed Air Handler",
            "model_image": "https://embed.widencdn.net/img/tyco/bqg4vwxtjk/exact/DX_residentialproductfamily_productcardimage_me_1.jpeg?position=c&crop=no&color=ffffffff&u=pm2g2j",
            "efficiency": "JMET Modular Multi Speed Air Handler"
          },
          {
            "name": "AVV Communicating, Constant CFM Air Handler",
            "model_image": "https://embed.widencdn.net/img/tyco/z4pm2avovw/exact/DX_residentialproductfamily_productcardimage_avv_2.jpeg?position=c&crop=no&color=ffffffff&u=pm2g2j",
            "efficiency": "AVV Communicating, Constant CFM Air Handler"
          },
          {
            "name": "JHC Variable Speed Air Handler",
            "model_image": "https://tyco.widen.net/content/swx1o4nia1/jpeg/DS_residentialproductfamily_productcardimage_AHU_JHC_Clean2.jpeg?position=c&color=ffffffff&quality=80&u=qm5dza",
            "efficiency": "JHC Variable Speed Air Handler"
          },
          {
            "name": "JHE Single-Piece Multi-Speed Air Handler",
            "model_image": "https://tyco.widen.net/content/xdypy929hc/jpeg/DS_residentialproductfamily_productcardimage_AHU_JHE_Clean2.jpeg?position=c&color=ffffffff&quality=80&u=77lbkw",
            "efficiency": "JHE Single-Piece Multi-Speed Air Handler"
          },
          {
            "name": "JME Modular Multi-Speed Air Handler",
            "model_image": "https://tyco.widen.net/content/vmoxbqrdc3/jpeg/DS_residentialproductfamily_productcardimage_AHU_JME_Clean2.jpeg?position=c&color=ffffffff&quality=80&u=77lbkw",
            "efficiency": "JME Modular Multi-Speed Air Handler"
          },
          {
            "name": "JHVT Variable Speed Air Handler",
            "model_image": "https://tyco.widen.net/content/crsfi33nkm/jpeg/DX_residentialproductfamily_productcardimage_JHVT_1.jpeg?position=c&color=ffffffff&quality=80&u=d73svt",
            "efficiency": "JHVT Variable Speed Air Handler"
          },
          {
            "name": "JMC Constant CFM, Modular Air Handler",
            "model_image": "https://tyco.widen.net/content/f8pmbkrsxn/jpeg/DS_residentialproductfamily_productcardimage_AHU_JMC_Clean2.jpeg?position=c&color=ffffffff&quality=80&u=77lbkw",
            "efficiency": "JMC Constant CFM, Modular Air Handler"
          },
          {
            "name": "JMET Modular Multi Speed Air Handler",
            "model_image": "https://embed.widencdn.net/img/tyco/bqg4vwxtjk/exact/DX_residentialproductfamily_productcardimage_me_1.jpeg?position=c&crop=no&color=ffffffff&u=pm2g2j",
            "efficiency": "JMET Modular Multi Speed Air Handler"
          },
          {
            "name": "AVV Communicating, Constant CFM Air Handler",
            "model_image": "https://embed.widencdn.net/img/tyco/z4pm2avovw/exact/DX_residentialproductfamily_productcardimage_avv_2.jpeg?position=c&crop=no&color=ffffffff&u=pm2g2j",
            "efficiency": "AVV Communicating, Constant CFM Air Handler"
          },
          {
            "name": "JHC Variable Speed Air Handler",
            "model_image": "https://tyco.widen.net/content/swx1o4nia1/jpeg/DS_residentialproductfamily_productcardimage_AHU_JHC_Clean2.jpeg?position=c&color=ffffffff&quality=80&u=qm5dza",
            "efficiency": "JHC Variable Speed Air Handler"
          },
          {
            "name": "JHE Single-Piece Multi-Speed Air Handler",
            "model_image": "https://tyco.widen.net/content/xdypy929hc/jpeg/DS_residentialproductfamily_productcardimage_AHU_JHE_Clean2.jpeg?position=c&color=ffffffff&quality=80&u=77lbkw",
            "efficiency": "JHE Single-Piece Multi-Speed Air Handler"
          },
          {
            "name": "JME Modular Multi-Speed Air Handler",
            "model_image": "https://tyco.widen.net/content/vmoxbqrdc3/jpeg/DS_residentialproductfamily_productcardimage_AHU_JME_Clean2.jpeg?position=c&color=ffffffff&quality=80&u=77lbkw",
            "efficiency": "JME Modular Multi-Speed Air Handler"
          }
        ]
      },
      {
        "line": "Evaporator Coils",
        "product_line_image": "https://www.york.com/-/media/project/jci-global/york-sites/united-states-york/residential/images/residential-products/york-residential-products-evaporator-coils.png?la=en&h=559&w=850&hash=5125B890433B4A279E90677A0F1D5895",
        "models": [
          {
            "name": "XAM 600-2,000 CFM Multi Position Indoor Coil (for Premium Equipment)",
            "model_image": "https://tyco.widen.net/content/hwpmzs3l1c/jpeg/DX_residentialproductfamily_productcardimage_XAM_Door-On_F.jpeg?position=c&color=ffffffff&quality=80&u=e7jqge",
            "efficiency": "XAM 600-2,000 CFM Multi Position Indoor Coil (for Premium Equipment)"
          },
          {
            "name": "XAH 600-2,000 CFM Horizontal Indoor Coil",
            "model_image": "https://tyco.widen.net/content/jwrsrfy8pl/jpeg/DX_residentialproductfamily_productcardimage_XAH.jpeg?position=c&color=ffffffff&quality=80&u=ncoxvb",
            "efficiency": "XAH 600-2,000 CFM Horizontal Indoor Coil"
          },
          {
            "name": "XAF 600-2,000 CFM Upflow/Downflow Indoor Coil",
            "model_image": "https://tyco.widen.net/content/nzzrm1nt3t/jpeg/DX_residentialproductfamily_productcardimage_XAF.jpeg?position=c&color=ffffffff&quality=80&u=ncoxvb",
            "efficiency": "XAF 600-2,000 CFM Upflow/Downflow Indoor Coil"
          },
          {
            "name": "XAU 600-2,000 CFM Upflow/Downflow Indoor Coil",
            "model_image": "https://tyco.widen.net/content/hcwsbli7ex/jpeg/DX_residentialproductfamily_productcardimage_XAU.jpeg?position=c&color=ffffffff&quality=80&u=ncoxvb",
            "efficiency": "XAU 600-2,000 CFM Upflow/Downflow Indoor Coil"
          },
          {
            "name": "CTM 600-2,000 CFM Multi-Position Indoor Coil",
            "model_image": "https://tyco.widen.net/content/oc3yd9l1s9/jpeg/DS_residentialproductfamily_productcardimage_Coil_CTM_wDoor_Clean.jpeg?position=c&color=ffffffff&quality=80&u=qm5dza",
            "efficiency": "CTM 600-2,000 CFM Multi-Position Indoor Coil"
          },
          {
            "name": "CTU 600-2,000 CFM Uncased Upflow/Downflow Indoor Coil",
            "model_image": "https://tyco.widen.net/content/ajiimbmaus/jpeg/DS_residentialproductfamily_productcardimage_Coil_CTU_Clean2.jpeg?position=c&color=ffffffff&quality=80&u=qm5dza",
            "efficiency": "CTU 600-2,000 CFM Uncased Upflow/Downflow Indoor Coil"
          },
          {
            "name": "CTF 600-2,000 CFM Cased Upflow/Downflow Indoor Coil",
            "model_image": "https://tyco.widen.net/content/tpibfydvai/jpeg/DS_residentialproductfamily_productcardimage_Coil_CTF_wDoor_Clean.jpeg?position=c&color=ffffffff&quality=80&u=qm5dza",
            "efficiency": "CTF 600-2,000 CFM Cased Upflow/Downflow Indoor Coil"
          },
          {
            "name": "CXF 600-2,000 CFM Cased Upflow/Downflow MicroChannel Indoor Coil",
            "model_image": "https://tyco.widen.net/content/r46alokhjt/jpeg/DS_residentialproductfamily_productcardimage_Coil_CXF.jpeg?position=c&color=ffffffff&quality=80&u=btwhro",
            "efficiency": "CXF 600-2,000 CFM Cased Upflow/Downflow MicroChannel Indoor Coil"
          },
          {
            "name": "XAM 600-2,000 CFM Multi Position Indoor Coil (for Premium Equipment)",
            "model_image": "https://tyco.widen.net/content/hwpmzs3l1c/jpeg/DX_residentialproductfamily_productcardimage_XAM_Door-On_F.jpeg?position=c&color=ffffffff&quality=80&u=e7jqge",
            "efficiency": "XAM 600-2,000 CFM Multi Position Indoor Coil (for Premium Equipment)"
          },
          {
            "name": "XAH 600-2,000 CFM Horizontal Indoor Coil",
            "model_image": "https://tyco.widen.net/content/jwrsrfy8pl/jpeg/DX_residentialproductfamily_productcardimage_XAH.jpeg?position=c&color=ffffffff&quality=80&u=ncoxvb",
            "efficiency": "XAH 600-2,000 CFM Horizontal Indoor Coil"
          },
          {
            "name": "XAF 600-2,000 CFM Upflow/Downflow Indoor Coil",
            "model_image": "https://tyco.widen.net/content/nzzrm1nt3t/jpeg/DX_residentialproductfamily_productcardimage_XAF.jpeg?position=c&color=ffffffff&quality=80&u=ncoxvb",
            "efficiency": "XAF 600-2,000 CFM Upflow/Downflow Indoor Coil"
          },
          {
            "name": "XAU 600-2,000 CFM Upflow/Downflow Indoor Coil",
            "model_image": "https://tyco.widen.net/content/hcwsbli7ex/jpeg/DX_residentialproductfamily_productcardimage_XAU.jpeg?position=c&color=ffffffff&quality=80&u=ncoxvb",
            "efficiency": "XAU 600-2,000 CFM Upflow/Downflow Indoor Coil"
          },
          {
            "name": "CTM 600-2,000 CFM Multi-Position Indoor Coil",
            "model_image": "https://tyco.widen.net/content/oc3yd9l1s9/jpeg/DS_residentialproductfamily_productcardimage_Coil_CTM_wDoor_Clean.jpeg?position=c&color=ffffffff&quality=80&u=qm5dza",
            "efficiency": "CTM 600-2,000 CFM Multi-Position Indoor Coil"
          },
          {
            "name": "CTU 600-2,000 CFM Uncased Upflow/Downflow Indoor Coil",
            "model_image": "https://tyco.widen.net/content/ajiimbmaus/jpeg/DS_residentialproductfamily_productcardimage_Coil_CTU_Clean2.jpeg?position=c&color=ffffffff&quality=80&u=qm5dza",
            "efficiency": "CTU 600-2,000 CFM Uncased Upflow/Downflow Indoor Coil"
          },
          {
            "name": "CTF 600-2,000 CFM Cased Upflow/Downflow Indoor Coil",
            "model_image": "https://tyco.widen.net/content/tpibfydvai/jpeg/DS_residentialproductfamily_productcardimage_Coil_CTF_wDoor_Clean.jpeg?position=c&color=ffffffff&quality=80&u=qm5dza",
            "efficiency": "CTF 600-2,000 CFM Cased Upflow/Downflow Indoor Coil"
          },
          {
            "name": "CXF 600-2,000 CFM Cased Upflow/Downflow MicroChannel Indoor Coil",
            "model_image": "https://tyco.widen.net/content/r46alokhjt/jpeg/DS_residentialproductfamily_productcardimage_Coil_CXF.jpeg?position=c&color=ffffffff&quality=80&u=btwhro",
            "efficiency": "CXF 600-2,000 CFM Cased Upflow/Downflow MicroChannel Indoor Coil"
          }
        ]
      },
      {
        "line": "Furnaces",
        "product_line_image": "https://www.york.com/-/media/project/jci-global/york-sites/united-states-york/residential/images/residential-products/york-residential-products-furnaces.png?la=en&h=559&w=850&hash=1A20FAFC110F0A9F934F0336CC463174",
        "models": [
          {
            "name": "Y92V 97%+ AFUE Two Stage Variable Speed Furnace",
            "model_image": "https://tyco.widen.net/content/fqbysntrmz/jpeg/DS_residentialproductfamily_productcardimage_Y9_SMPS_Clean_YOR.jpeg?position=c&color=ffffffff&quality=80&u=ytcytf",
            "efficiency": "Y92V 97%+ AFUE Two Stage Variable Speed Furnace"
          },
          {
            "name": "Y82V 80% AFUE Two Stage Variable Speed Furnace",
            "model_image": "https://tyco.widen.net/content/tcdyqbnnzi/jpeg/DS_residentialproductfamily_productcardimage_Y8_SMPS_Clean_YOR.jpeg?position=c&color=ffffffff&quality=80&u=ytcytf",
            "efficiency": "Y82V 80% AFUE Two Stage Variable Speed Furnace"
          },
          {
            "name": "TM9Y 96% AFUE Two Stage Furnace",
            "model_image": "https://embed.widencdn.net/img/tyco/mgqcaergbq/exact/DX_residentialproductfamily_productcardimage_tm9y_1.jpeg?position=c&crop=no&color=ffffffff&u=pm2g2j",
            "efficiency": "TM9Y 96% AFUE Two Stage Furnace"
          },
          {
            "name": "Y91E 96% AFUE Single Stage Furnace",
            "model_image": "https://tyco.widen.net/content/nowo1x2kjb/jpeg/DS_residentialproductfamily_productcardimage_Y9_SMPS_Clean.jpeg?position=c&color=ffffffff&quality=80&u=qm5dza",
            "efficiency": "Y91E 96% AFUE Single Stage Furnace"
          },
          {
            "name": "TM9E 95% AFUE Single Stage Furnace",
            "model_image": "https://embed.widencdn.net/img/tyco/oeobnlnajm/exact/DX_residentialproductfamily_productcardimage_tm9e_1.jpeg?position=c&crop=no&color=ffffffff&u=pm2g2j",
            "efficiency": "TM9E 95% AFUE Single Stage Furnace"
          },
          {
            "name": "TL9E 95% AFUE Single Stage Ultra Low NOx Furnace",
            "model_image": "https://embed.widencdn.net/img/tyco/y6ajeijren/exact/DX_residentialproductfamily_productcardimage_tl9e_1.jpeg?position=c&crop=no&color=ffffffff&u=pm2g2j",
            "efficiency": "TL9E 95% AFUE Single Stage Ultra Low NOx Furnace"
          },
          {
            "name": "Y82E 80% AFUE Two Stage Furnace",
            "model_image": "https://tyco.widen.net/content/zdc9ky494o/jpeg/DX_residentialproductfamily_productcardimage_y81e_door_on_f.jpeg?position=c&color=ffffffff&quality=80&u=ze8ywt",
            "efficiency": "Y82E 80% AFUE Two Stage Furnace"
          },
          {
            "name": "Y92E 97% AFUE Two Stage Furnace",
            "model_image": "https://tyco.widen.net/content/58midlnd5y/jpeg/DS_residentialproductfamily_productcardimage_Y9_40SMPS_Clean.jpeg?position=c&color=ffffffff&quality=80&u=qm5dza",
            "efficiency": "Y92E 97% AFUE Two Stage Furnace"
          },
          {
            "name": "Y81E 80% AFUE Single Stage Furnace",
            "model_image": "https://tyco.widen.net/content/zdc9ky494o/jpeg/DX_residentialproductfamily_productcardimage_y81e_door_on_f.jpeg?position=c&color=ffffffff&quality=80&u=ze8ywt",
            "efficiency": "Y81E 80% AFUE Single Stage Furnace"
          },
          {
            "name": "YPLC 80% AFUE Modulating Gas Furnace",
            "model_image": "https://embed.widencdn.net/img/tyco/rludddlhri/exact/DX_residentialproductfamily_productcardimage_yplc_1.jpeg?position=c&crop=no&color=ffffffff&u=pm2g2j",
            "efficiency": "YPLC 80% AFUE Modulating Gas Furnace"
          },
          {
            "name": "YP9C 98% Modulating Gas Furnace",
            "model_image": "https://embed.widencdn.net/img/tyco/gsxkou96aw/exact/DX_residentialproductfamily_productcardimage_yp9c_2.jpeg?position=c&crop=no&color=ffffffff&u=pm2g2j",
            "efficiency": "YP9C 98% Modulating Gas Furnace"
          },
          {
            "name": "TM9V 96% AFUE Two Stage Variable Speed Furnace",
            "model_image": "https://embed.widencdn.net/img/tyco/n8y0j3qw4l/exact/DX_residentialproductfamily_productcardimage_tm9v_1.jpeg?position=c&crop=no&color=ffffffff&u=pm2g2j",
            "efficiency": "TM9V 96% AFUE Two Stage Variable Speed Furnace"
          },
          {
            "name": "Y92V 97%+ AFUE Two Stage Variable Speed Furnace",
            "model_image": "https://tyco.widen.net/content/fqbysntrmz/jpeg/DS_residentialproductfamily_productcardimage_Y9_SMPS_Clean_YOR.jpeg?position=c&color=ffffffff&quality=80&u=ytcytf",
            "efficiency": "Y92V 97%+ AFUE Two Stage Variable Speed Furnace"
          },
          {
            "name": "Y82V 80% AFUE Two Stage Variable Speed Furnace",
            "model_image": "https://tyco.widen.net/content/tcdyqbnnzi/jpeg/DS_residentialproductfamily_productcardimage_Y8_SMPS_Clean_YOR.jpeg?position=c&color=ffffffff&quality=80&u=ytcytf",
            "efficiency": "Y82V 80% AFUE Two Stage Variable Speed Furnace"
          },
          {
            "name": "TM9Y 96% AFUE Two Stage Furnace",
            "model_image": "https://embed.widencdn.net/img/tyco/mgqcaergbq/exact/DX_residentialproductfamily_productcardimage_tm9y_1.jpeg?position=c&crop=no&color=ffffffff&u=pm2g2j",
            "efficiency": "TM9Y 96% AFUE Two Stage Furnace"
          },
          {
            "name": "Y91E 96% AFUE Single Stage Furnace",
            "model_image": "https://tyco.widen.net/content/nowo1x2kjb/jpeg/DS_residentialproductfamily_productcardimage_Y9_SMPS_Clean.jpeg?position=c&color=ffffffff&quality=80&u=qm5dza",
            "efficiency": "Y91E 96% AFUE Single Stage Furnace"
          },
          {
            "name": "TM9E 95% AFUE Single Stage Furnace",
            "model_image": "https://embed.widencdn.net/img/tyco/oeobnlnajm/exact/DX_residentialproductfamily_productcardimage_tm9e_1.jpeg?position=c&crop=no&color=ffffffff&u=pm2g2j",
            "efficiency": "TM9E 95% AFUE Single Stage Furnace"
          },
          {
            "name": "TL9E 95% AFUE Single Stage Ultra Low NOx Furnace",
            "model_image": "https://embed.widencdn.net/img/tyco/y6ajeijren/exact/DX_residentialproductfamily_productcardimage_tl9e_1.jpeg?position=c&crop=no&color=ffffffff&u=pm2g2j",
            "efficiency": "TL9E 95% AFUE Single Stage Ultra Low NOx Furnace"
          },
          {
            "name": "Y82E 80% AFUE Two Stage Furnace",
            "model_image": "https://tyco.widen.net/content/zdc9ky494o/jpeg/DX_residentialproductfamily_productcardimage_y81e_door_on_f.jpeg?position=c&color=ffffffff&quality=80&u=ze8ywt",
            "efficiency": "Y82E 80% AFUE Two Stage Furnace"
          },
          {
            "name": "Y92E 97% AFUE Two Stage Furnace",
            "model_image": "https://tyco.widen.net/content/58midlnd5y/jpeg/DS_residentialproductfamily_productcardimage_Y9_40SMPS_Clean.jpeg?position=c&color=ffffffff&quality=80&u=qm5dza",
            "efficiency": "Y92E 97% AFUE Two Stage Furnace"
          },
          {
            "name": "Y81E 80% AFUE Single Stage Furnace",
            "model_image": "https://tyco.widen.net/content/zdc9ky494o/jpeg/DX_residentialproductfamily_productcardimage_y81e_door_on_f.jpeg?position=c&color=ffffffff&quality=80&u=ze8ywt",
            "efficiency": "Y81E 80% AFUE Single Stage Furnace"
          },
          {
            "name": "YPLC 80% AFUE Modulating Gas Furnace",
            "model_image": "https://embed.widencdn.net/img/tyco/rludddlhri/exact/DX_residentialproductfamily_productcardimage_yplc_1.jpeg?position=c&crop=no&color=ffffffff&u=pm2g2j",
            "efficiency": "YPLC 80% AFUE Modulating Gas Furnace"
          },
          {
            "name": "YP9C 98% Modulating Gas Furnace",
            "model_image": "https://embed.widencdn.net/img/tyco/gsxkou96aw/exact/DX_residentialproductfamily_productcardimage_yp9c_2.jpeg?position=c&crop=no&color=ffffffff&u=pm2g2j",
            "efficiency": "YP9C 98% Modulating Gas Furnace"
          },
          {
            "name": "TM9V 96% AFUE Two Stage Variable Speed Furnace",
            "model_image": "https://embed.widencdn.net/img/tyco/n8y0j3qw4l/exact/DX_residentialproductfamily_productcardimage_tm9v_1.jpeg?position=c&crop=no&color=ffffffff&u=pm2g2j",
            "efficiency": "TM9V 96% AFUE Two Stage Variable Speed Furnace"
          },
          {
            "name": "Y92V 97%+ AFUE Two Stage Variable Speed Furnace",
            "model_image": "https://tyco.widen.net/content/fqbysntrmz/jpeg/DS_residentialproductfamily_productcardimage_Y9_SMPS_Clean_YOR.jpeg?position=c&color=ffffffff&quality=80&u=ytcytf",
            "efficiency": "Y92V 97%+ AFUE Two Stage Variable Speed Furnace"
          },
          {
            "name": "Y82V 80% AFUE Two Stage Variable Speed Furnace",
            "model_image": "https://tyco.widen.net/content/tcdyqbnnzi/jpeg/DS_residentialproductfamily_productcardimage_Y8_SMPS_Clean_YOR.jpeg?position=c&color=ffffffff&quality=80&u=ytcytf",
            "efficiency": "Y82V 80% AFUE Two Stage Variable Speed Furnace"
          },
          {
            "name": "TM9Y 96% AFUE Two Stage Furnace",
            "model_image": "https://embed.widencdn.net/img/tyco/mgqcaergbq/exact/DX_residentialproductfamily_productcardimage_tm9y_1.jpeg?position=c&crop=no&color=ffffffff&u=pm2g2j",
            "efficiency": "TM9Y 96% AFUE Two Stage Furnace"
          },
          {
            "name": "Y91E 96% AFUE Single Stage Furnace",
            "model_image": "https://tyco.widen.net/content/nowo1x2kjb/jpeg/DS_residentialproductfamily_productcardimage_Y9_SMPS_Clean.jpeg?position=c&color=ffffffff&quality=80&u=qm5dza",
            "efficiency": "Y91E 96% AFUE Single Stage Furnace"
          },
          {
            "name": "TM9E 95% AFUE Single Stage Furnace",
            "model_image": "https://embed.widencdn.net/img/tyco/oeobnlnajm/exact/DX_residentialproductfamily_productcardimage_tm9e_1.jpeg?position=c&crop=no&color=ffffffff&u=pm2g2j",
            "efficiency": "TM9E 95% AFUE Single Stage Furnace"
          },
          {
            "name": "TL9E 95% AFUE Single Stage Ultra Low NOx Furnace",
            "model_image": "https://embed.widencdn.net/img/tyco/y6ajeijren/exact/DX_residentialproductfamily_productcardimage_tl9e_1.jpeg?position=c&crop=no&color=ffffffff&u=pm2g2j",
            "efficiency": "TL9E 95% AFUE Single Stage Ultra Low NOx Furnace"
          },
          {
            "name": "Y82E 80% AFUE Two Stage Furnace",
            "model_image": "https://tyco.widen.net/content/zdc9ky494o/jpeg/DX_residentialproductfamily_productcardimage_y81e_door_on_f.jpeg?position=c&color=ffffffff&quality=80&u=ze8ywt",
            "efficiency": "Y82E 80% AFUE Two Stage Furnace"
          },
          {
            "name": "Y92E 97% AFUE Two Stage Furnace",
            "model_image": "https://tyco.widen.net/content/58midlnd5y/jpeg/DS_residentialproductfamily_productcardimage_Y9_40SMPS_Clean.jpeg?position=c&color=ffffffff&quality=80&u=qm5dza",
            "efficiency": "Y92E 97% AFUE Two Stage Furnace"
          },
          {
            "name": "Y81E 80% AFUE Single Stage Furnace",
            "model_image": "https://tyco.widen.net/content/zdc9ky494o/jpeg/DX_residentialproductfamily_productcardimage_y81e_door_on_f.jpeg?position=c&color=ffffffff&quality=80&u=ze8ywt",
            "efficiency": "Y81E 80% AFUE Single Stage Furnace"
          },
          {
            "name": "YPLC 80% AFUE Modulating Gas Furnace",
            "model_image": "https://embed.widencdn.net/img/tyco/rludddlhri/exact/DX_residentialproductfamily_productcardimage_yplc_1.jpeg?position=c&crop=no&color=ffffffff&u=pm2g2j",
            "efficiency": "YPLC 80% AFUE Modulating Gas Furnace"
          },
          {
            "name": "YP9C 98% Modulating Gas Furnace",
            "model_image": "https://embed.widencdn.net/img/tyco/gsxkou96aw/exact/DX_residentialproductfamily_productcardimage_yp9c_2.jpeg?position=c&crop=no&color=ffffffff&u=pm2g2j",
            "efficiency": "YP9C 98% Modulating Gas Furnace"
          },
          {
            "name": "TM9V 96% AFUE Two Stage Variable Speed Furnace",
            "model_image": "https://embed.widencdn.net/img/tyco/n8y0j3qw4l/exact/DX_residentialproductfamily_productcardimage_tm9v_1.jpeg?position=c&crop=no&color=ffffffff&u=pm2g2j",
            "efficiency": "TM9V 96% AFUE Two Stage Variable Speed Furnace"
          }
        ]
      },
      {
        "line": "Heat Pumps",
        "product_line_image": "https://www.york.com/-/media/project/jci-global/york-sites/united-states-york/residential/images/residential-products/york-residential-products-heat-pumps.png?la=en&h=559&w=850&hash=AC762B2258DFEFCEA49445971099DEC3",
        "models": [
          {
            "name": "YH6 16 SEER2 Two-Stage Heat Pump",
            "model_image": "https://tyco.widen.net/content/56h24jmrb8/jpeg/DS_residentialproductfamily_productcardimage_YH6_YOR.jpeg?position=c&color=ffffffff&quality=80&u=ytcytf",
            "efficiency": "YH6 16 SEER2 Two-Stage Heat Pump"
          },
          {
            "name": "YZV 20 SEER Variable Capacity Communicating Heat Pump",
            "model_image": "https://embed.widencdn.net/img/tyco/w43mzqs7jm/exact/DX_residentialproductfamily_productcardimage_yxt_1.jpeg?position=c&crop=no&color=ffffffff&u=pm2g2j",
            "efficiency": "YZV 20 SEER Variable Capacity Communicating Heat Pump"
          },
          {
            "name": "YH2E 14.3 SEER2 Single-Stage Heat Pump",
            "model_image": "https://tyco.widen.net/content/etciwqmivg/jpeg/DX_residentialproductfamily_productcardimage_YC2E_v1.jpeg?position=c&color=ffffffff&quality=80&u=ncoxvb",
            "efficiency": "YH2E 14.3 SEER2 Single-Stage Heat Pump"
          },
          {
            "name": "YHE 14 SEER Single Stage Heat Pump",
            "model_image": "https://embed.widencdn.net/img/tyco/s7vtut4mui/exact/DX_residentialproductfamily_productcardimage_yhe_1.jpeg?position=c&crop=no&color=ffffffff&u=pm2g2j",
            "efficiency": "YHE 14 SEER Single Stage Heat Pump"
          },
          {
            "name": "YZT 19 SEER Two Stage Heat Pump",
            "model_image": "https://embed.widencdn.net/img/tyco/w43mzqs7jm/exact/DX_residentialproductfamily_productcardimage_yxt_1.jpeg?position=c&crop=no&color=ffffffff&u=pm2g2j",
            "efficiency": "YZT 19 SEER Two Stage Heat Pump"
          },
          {
            "name": "YHM 16 SEER Modulating Heat Pump",
            "model_image": "https://embed.widencdn.net/img/tyco/mjiuuhlwn1/exact/DX_residentialproductfamily_productcardimage_yhm_1.jpeg?position=c&crop=no&color=ffffffff&u=pm2g2j",
            "efficiency": "YHM 16 SEER Modulating Heat Pump"
          },
          {
            "name": "HH8 Side-Discharge Heat Pump",
            "model_image": "https://tyco.widen.net/content/u42r7amu4y/jpeg/DX_residentialproductfamily_productcardimage_24k-black_1.jpeg?position=c&color=ffffffff&quality=80&u=qm5dza",
            "efficiency": "HH8 Side-Discharge Heat Pump"
          },
          {
            "name": "HMH7 18 SEER Horizontal Discharge Heat Pump",
            "model_image": "https://tyco.widen.net/content/maybm4jwxt/jpeg/DS_residentialproductfamily_productcardimage_HMH7%20Grouping.jpeg?position=c&color=ffffffff&quality=80&u=ncoxvb",
            "efficiency": "HMH7 18 SEER Horizontal Discharge Heat Pump"
          },
          {
            "name": "YH2F 15.2 SEER2 1 & 2-Stage Heat Pump",
            "model_image": "https://embed.widencdn.net/img/tyco/xna8lfesnb/exact/DX_residentialproductfamily_productcardimage_yhg_1.jpeg?position=c&crop=no&color=ffffffff&u=pm2g2j",
            "efficiency": "YH2F 15.2 SEER2 1 & 2-Stage Heat Pump"
          },
          {
            "name": "YH4 14.3 SEER2 2-Stage Heat Pump",
            "model_image": "https://tyco.widen.net/content/032jygvimo/jpeg/DS_residentialproductfamily_productcardimage_YH4_Clean2.jpeg?position=c&color=ffffffff&quality=80&u=77lbkw",
            "efficiency": "YH4 14.3 SEER2 2-Stage Heat Pump"
          },
          {
            "name": "YH6 16 SEER2 Two-Stage Heat Pump",
            "model_image": "https://tyco.widen.net/content/56h24jmrb8/jpeg/DS_residentialproductfamily_productcardimage_YH6_YOR.jpeg?position=c&color=ffffffff&quality=80&u=ytcytf",
            "efficiency": "YH6 16 SEER2 Two-Stage Heat Pump"
          },
          {
            "name": "YZV 20 SEER Variable Capacity Communicating Heat Pump",
            "model_image": "https://embed.widencdn.net/img/tyco/w43mzqs7jm/exact/DX_residentialproductfamily_productcardimage_yxt_1.jpeg?position=c&crop=no&color=ffffffff&u=pm2g2j",
            "efficiency": "YZV 20 SEER Variable Capacity Communicating Heat Pump"
          },
          {
            "name": "YH2E 14.3 SEER2 Single-Stage Heat Pump",
            "model_image": "https://tyco.widen.net/content/etciwqmivg/jpeg/DX_residentialproductfamily_productcardimage_YC2E_v1.jpeg?position=c&color=ffffffff&quality=80&u=ncoxvb",
            "efficiency": "YH2E 14.3 SEER2 Single-Stage Heat Pump"
          },
          {
            "name": "YHE 14 SEER Single Stage Heat Pump",
            "model_image": "https://embed.widencdn.net/img/tyco/s7vtut4mui/exact/DX_residentialproductfamily_productcardimage_yhe_1.jpeg?position=c&crop=no&color=ffffffff&u=pm2g2j",
            "efficiency": "YHE 14 SEER Single Stage Heat Pump"
          },
          {
            "name": "YZT 19 SEER Two Stage Heat Pump",
            "model_image": "https://embed.widencdn.net/img/tyco/w43mzqs7jm/exact/DX_residentialproductfamily_productcardimage_yxt_1.jpeg?position=c&crop=no&color=ffffffff&u=pm2g2j",
            "efficiency": "YZT 19 SEER Two Stage Heat Pump"
          },
          {
            "name": "YHM 16 SEER Modulating Heat Pump",
            "model_image": "https://embed.widencdn.net/img/tyco/mjiuuhlwn1/exact/DX_residentialproductfamily_productcardimage_yhm_1.jpeg?position=c&crop=no&color=ffffffff&u=pm2g2j",
            "efficiency": "YHM 16 SEER Modulating Heat Pump"
          },
          {
            "name": "HH8 Side-Discharge Heat Pump",
            "model_image": "https://tyco.widen.net/content/u42r7amu4y/jpeg/DX_residentialproductfamily_productcardimage_24k-black_1.jpeg?position=c&color=ffffffff&quality=80&u=qm5dza",
            "efficiency": "HH8 Side-Discharge Heat Pump"
          },
          {
            "name": "HMH7 18 SEER Horizontal Discharge Heat Pump",
            "model_image": "https://tyco.widen.net/content/maybm4jwxt/jpeg/DS_residentialproductfamily_productcardimage_HMH7%20Grouping.jpeg?position=c&color=ffffffff&quality=80&u=ncoxvb",
            "efficiency": "HMH7 18 SEER Horizontal Discharge Heat Pump"
          },
          {
            "name": "YH2F 15.2 SEER2 1 & 2-Stage Heat Pump",
            "model_image": "https://embed.widencdn.net/img/tyco/xna8lfesnb/exact/DX_residentialproductfamily_productcardimage_yhg_1.jpeg?position=c&crop=no&color=ffffffff&u=pm2g2j",
            "efficiency": "YH2F 15.2 SEER2 1 & 2-Stage Heat Pump"
          },
          {
            "name": "YH4 14.3 SEER2 2-Stage Heat Pump",
            "model_image": "https://tyco.widen.net/content/032jygvimo/jpeg/DS_residentialproductfamily_productcardimage_YH4_Clean2.jpeg?position=c&color=ffffffff&quality=80&u=77lbkw",
            "efficiency": "YH4 14.3 SEER2 2-Stage Heat Pump"
          },
          {
            "name": "YH6 16 SEER2 Two-Stage Heat Pump",
            "model_image": "https://tyco.widen.net/content/56h24jmrb8/jpeg/DS_residentialproductfamily_productcardimage_YH6_YOR.jpeg?position=c&color=ffffffff&quality=80&u=ytcytf",
            "efficiency": "YH6 16 SEER2 Two-Stage Heat Pump"
          },
          {
            "name": "YZV 20 SEER Variable Capacity Communicating Heat Pump",
            "model_image": "https://embed.widencdn.net/img/tyco/w43mzqs7jm/exact/DX_residentialproductfamily_productcardimage_yxt_1.jpeg?position=c&crop=no&color=ffffffff&u=pm2g2j",
            "efficiency": "YZV 20 SEER Variable Capacity Communicating Heat Pump"
          },
          {
            "name": "YH2E 14.3 SEER2 Single-Stage Heat Pump",
            "model_image": "https://tyco.widen.net/content/etciwqmivg/jpeg/DX_residentialproductfamily_productcardimage_YC2E_v1.jpeg?position=c&color=ffffffff&quality=80&u=ncoxvb",
            "efficiency": "YH2E 14.3 SEER2 Single-Stage Heat Pump"
          },
          {
            "name": "YHE 14 SEER Single Stage Heat Pump",
            "model_image": "https://embed.widencdn.net/img/tyco/s7vtut4mui/exact/DX_residentialproductfamily_productcardimage_yhe_1.jpeg?position=c&crop=no&color=ffffffff&u=pm2g2j",
            "efficiency": "YHE 14 SEER Single Stage Heat Pump"
          },
          {
            "name": "YZT 19 SEER Two Stage Heat Pump",
            "model_image": "https://embed.widencdn.net/img/tyco/w43mzqs7jm/exact/DX_residentialproductfamily_productcardimage_yxt_1.jpeg?position=c&crop=no&color=ffffffff&u=pm2g2j",
            "efficiency": "YZT 19 SEER Two Stage Heat Pump"
          },
          {
            "name": "YHM 16 SEER Modulating Heat Pump",
            "model_image": "https://embed.widencdn.net/img/tyco/mjiuuhlwn1/exact/DX_residentialproductfamily_productcardimage_yhm_1.jpeg?position=c&crop=no&color=ffffffff&u=pm2g2j",
            "efficiency": "YHM 16 SEER Modulating Heat Pump"
          },
          {
            "name": "HH8 Side-Discharge Heat Pump",
            "model_image": "https://tyco.widen.net/content/u42r7amu4y/jpeg/DX_residentialproductfamily_productcardimage_24k-black_1.jpeg?position=c&color=ffffffff&quality=80&u=qm5dza",
            "efficiency": "HH8 Side-Discharge Heat Pump"
          },
          {
            "name": "HMH7 18 SEER Horizontal Discharge Heat Pump",
            "model_image": "https://tyco.widen.net/content/maybm4jwxt/jpeg/DS_residentialproductfamily_productcardimage_HMH7%20Grouping.jpeg?position=c&color=ffffffff&quality=80&u=ncoxvb",
            "efficiency": "HMH7 18 SEER Horizontal Discharge Heat Pump"
          },
          {
            "name": "YH2F 15.2 SEER2 1 & 2-Stage Heat Pump",
            "model_image": "https://embed.widencdn.net/img/tyco/xna8lfesnb/exact/DX_residentialproductfamily_productcardimage_yhg_1.jpeg?position=c&crop=no&color=ffffffff&u=pm2g2j",
            "efficiency": "YH2F 15.2 SEER2 1 & 2-Stage Heat Pump"
          },
          {
            "name": "YH4 14.3 SEER2 2-Stage Heat Pump",
            "model_image": "https://tyco.widen.net/content/032jygvimo/jpeg/DS_residentialproductfamily_productcardimage_YH4_Clean2.jpeg?position=c&color=ffffffff&quality=80&u=77lbkw",
            "efficiency": "YH4 14.3 SEER2 2-Stage Heat Pump"
          }
        ]
      },
      {
        "line": "Mini-Split Systems",
        "product_line_image": "https://www.york.com/-/media/project/jci-global/york-sites/united-states-york/residential/images/residential-products/york-residential-products-mini-split-systems.png?la=en&h=559&w=850&hash=0F60C95D18F7F0A43CB551F0FB5E7B9B",
        "models": [
          {
            "name": "YH6 16 SEER2 Two-Stage Heat Pump",
            "model_image": "https://tyco.widen.net/content/56h24jmrb8/jpeg/DS_residentialproductfamily_productcardimage_YH6_YOR.jpeg?position=c&color=ffffffff&quality=80&u=ytcytf",
            "efficiency": "YH6 16 SEER2 Two-Stage Heat Pump"
          },
          {
            "name": "YZV 20 SEER Variable Capacity Communicating Heat Pump",
            "model_image": "https://embed.widencdn.net/img/tyco/w43mzqs7jm/exact/DX_residentialproductfamily_productcardimage_yxt_1.jpeg?position=c&crop=no&color=ffffffff&u=pm2g2j",
            "efficiency": "YZV 20 SEER Variable Capacity Communicating Heat Pump"
          },
          {
            "name": "YH2E 14.3 SEER2 Single-Stage Heat Pump",
            "model_image": "https://tyco.widen.net/content/etciwqmivg/jpeg/DX_residentialproductfamily_productcardimage_YC2E_v1.jpeg?position=c&color=ffffffff&quality=80&u=ncoxvb",
            "efficiency": "YH2E 14.3 SEER2 Single-Stage Heat Pump"
          },
          {
            "name": "YHE 14 SEER Single Stage Heat Pump",
            "model_image": "https://embed.widencdn.net/img/tyco/s7vtut4mui/exact/DX_residentialproductfamily_productcardimage_yhe_1.jpeg?position=c&crop=no&color=ffffffff&u=pm2g2j",
            "efficiency": "YHE 14 SEER Single Stage Heat Pump"
          },
          {
            "name": "YZT 19 SEER Two Stage Heat Pump",
            "model_image": "https://embed.widencdn.net/img/tyco/w43mzqs7jm/exact/DX_residentialproductfamily_productcardimage_yxt_1.jpeg?position=c&crop=no&color=ffffffff&u=pm2g2j",
            "efficiency": "YZT 19 SEER Two Stage Heat Pump"
          },
          {
            "name": "YHM 16 SEER Modulating Heat Pump",
            "model_image": "https://embed.widencdn.net/img/tyco/mjiuuhlwn1/exact/DX_residentialproductfamily_productcardimage_yhm_1.jpeg?position=c&crop=no&color=ffffffff&u=pm2g2j",
            "efficiency": "YHM 16 SEER Modulating Heat Pump"
          },
          {
            "name": "HH8 Side-Discharge Heat Pump",
            "model_image": "https://tyco.widen.net/content/u42r7amu4y/jpeg/DX_residentialproductfamily_productcardimage_24k-black_1.jpeg?position=c&color=ffffffff&quality=80&u=qm5dza",
            "efficiency": "HH8 Side-Discharge Heat Pump"
          },
          {
            "name": "HMH7 18 SEER Horizontal Discharge Heat Pump",
            "model_image": "https://tyco.widen.net/content/maybm4jwxt/jpeg/DS_residentialproductfamily_productcardimage_HMH7%20Grouping.jpeg?position=c&color=ffffffff&quality=80&u=ncoxvb",
            "efficiency": "HMH7 18 SEER Horizontal Discharge Heat Pump"
          },
          {
            "name": "YH2F 15.2 SEER2 1 & 2-Stage Heat Pump",
            "model_image": "https://embed.widencdn.net/img/tyco/xna8lfesnb/exact/DX_residentialproductfamily_productcardimage_yhg_1.jpeg?position=c&crop=no&color=ffffffff&u=pm2g2j",
            "efficiency": "YH2F 15.2 SEER2 1 & 2-Stage Heat Pump"
          },
          {
            "name": "YH4 14.3 SEER2 2-Stage Heat Pump",
            "model_image": "https://tyco.widen.net/content/032jygvimo/jpeg/DS_residentialproductfamily_productcardimage_YH4_Clean2.jpeg?position=c&color=ffffffff&quality=80&u=77lbkw",
            "efficiency": "YH4 14.3 SEER2 2-Stage Heat Pump"
          },
          {
            "name": "YH6 16 SEER2 Two-Stage Heat Pump",
            "model_image": "https://tyco.widen.net/content/56h24jmrb8/jpeg/DS_residentialproductfamily_productcardimage_YH6_YOR.jpeg?position=c&color=ffffffff&quality=80&u=ytcytf",
            "efficiency": "YH6 16 SEER2 Two-Stage Heat Pump"
          },
          {
            "name": "YZV 20 SEER Variable Capacity Communicating Heat Pump",
            "model_image": "https://embed.widencdn.net/img/tyco/w43mzqs7jm/exact/DX_residentialproductfamily_productcardimage_yxt_1.jpeg?position=c&crop=no&color=ffffffff&u=pm2g2j",
            "efficiency": "YZV 20 SEER Variable Capacity Communicating Heat Pump"
          },
          {
            "name": "YH2E 14.3 SEER2 Single-Stage Heat Pump",
            "model_image": "https://tyco.widen.net/content/etciwqmivg/jpeg/DX_residentialproductfamily_productcardimage_YC2E_v1.jpeg?position=c&color=ffffffff&quality=80&u=ncoxvb",
            "efficiency": "YH2E 14.3 SEER2 Single-Stage Heat Pump"
          },
          {
            "name": "YHE 14 SEER Single Stage Heat Pump",
            "model_image": "https://embed.widencdn.net/img/tyco/s7vtut4mui/exact/DX_residentialproductfamily_productcardimage_yhe_1.jpeg?position=c&crop=no&color=ffffffff&u=pm2g2j",
            "efficiency": "YHE 14 SEER Single Stage Heat Pump"
          },
          {
            "name": "YZT 19 SEER Two Stage Heat Pump",
            "model_image": "https://embed.widencdn.net/img/tyco/w43mzqs7jm/exact/DX_residentialproductfamily_productcardimage_yxt_1.jpeg?position=c&crop=no&color=ffffffff&u=pm2g2j",
            "efficiency": "YZT 19 SEER Two Stage Heat Pump"
          },
          {
            "name": "YHM 16 SEER Modulating Heat Pump",
            "model_image": "https://embed.widencdn.net/img/tyco/mjiuuhlwn1/exact/DX_residentialproductfamily_productcardimage_yhm_1.jpeg?position=c&crop=no&color=ffffffff&u=pm2g2j",
            "efficiency": "YHM 16 SEER Modulating Heat Pump"
          },
          {
            "name": "HH8 Side-Discharge Heat Pump",
            "model_image": "https://tyco.widen.net/content/u42r7amu4y/jpeg/DX_residentialproductfamily_productcardimage_24k-black_1.jpeg?position=c&color=ffffffff&quality=80&u=qm5dza",
            "efficiency": "HH8 Side-Discharge Heat Pump"
          },
          {
            "name": "HMH7 18 SEER Horizontal Discharge Heat Pump",
            "model_image": "https://tyco.widen.net/content/maybm4jwxt/jpeg/DS_residentialproductfamily_productcardimage_HMH7%20Grouping.jpeg?position=c&color=ffffffff&quality=80&u=ncoxvb",
            "efficiency": "HMH7 18 SEER Horizontal Discharge Heat Pump"
          },
          {
            "name": "YH2F 15.2 SEER2 1 & 2-Stage Heat Pump",
            "model_image": "https://embed.widencdn.net/img/tyco/xna8lfesnb/exact/DX_residentialproductfamily_productcardimage_yhg_1.jpeg?position=c&crop=no&color=ffffffff&u=pm2g2j",
            "efficiency": "YH2F 15.2 SEER2 1 & 2-Stage Heat Pump"
          },
          {
            "name": "YH4 14.3 SEER2 2-Stage Heat Pump",
            "model_image": "https://tyco.widen.net/content/032jygvimo/jpeg/DS_residentialproductfamily_productcardimage_YH4_Clean2.jpeg?position=c&color=ffffffff&quality=80&u=77lbkw",
            "efficiency": "YH4 14.3 SEER2 2-Stage Heat Pump"
          },
          {
            "name": "YH6 16 SEER2 Two-Stage Heat Pump",
            "model_image": "https://tyco.widen.net/content/56h24jmrb8/jpeg/DS_residentialproductfamily_productcardimage_YH6_YOR.jpeg?position=c&color=ffffffff&quality=80&u=ytcytf",
            "efficiency": "YH6 16 SEER2 Two-Stage Heat Pump"
          },
          {
            "name": "YZV 20 SEER Variable Capacity Communicating Heat Pump",
            "model_image": "https://embed.widencdn.net/img/tyco/w43mzqs7jm/exact/DX_residentialproductfamily_productcardimage_yxt_1.jpeg?position=c&crop=no&color=ffffffff&u=pm2g2j",
            "efficiency": "YZV 20 SEER Variable Capacity Communicating Heat Pump"
          },
          {
            "name": "YH2E 14.3 SEER2 Single-Stage Heat Pump",
            "model_image": "https://tyco.widen.net/content/etciwqmivg/jpeg/DX_residentialproductfamily_productcardimage_YC2E_v1.jpeg?position=c&color=ffffffff&quality=80&u=ncoxvb",
            "efficiency": "YH2E 14.3 SEER2 Single-Stage Heat Pump"
          },
          {
            "name": "YHE 14 SEER Single Stage Heat Pump",
            "model_image": "https://embed.widencdn.net/img/tyco/s7vtut4mui/exact/DX_residentialproductfamily_productcardimage_yhe_1.jpeg?position=c&crop=no&color=ffffffff&u=pm2g2j",
            "efficiency": "YHE 14 SEER Single Stage Heat Pump"
          },
          {
            "name": "YZT 19 SEER Two Stage Heat Pump",
            "model_image": "https://embed.widencdn.net/img/tyco/w43mzqs7jm/exact/DX_residentialproductfamily_productcardimage_yxt_1.jpeg?position=c&crop=no&color=ffffffff&u=pm2g2j",
            "efficiency": "YZT 19 SEER Two Stage Heat Pump"
          },
          {
            "name": "YHM 16 SEER Modulating Heat Pump",
            "model_image": "https://embed.widencdn.net/img/tyco/mjiuuhlwn1/exact/DX_residentialproductfamily_productcardimage_yhm_1.jpeg?position=c&crop=no&color=ffffffff&u=pm2g2j",
            "efficiency": "YHM 16 SEER Modulating Heat Pump"
          },
          {
            "name": "HH8 Side-Discharge Heat Pump",
            "model_image": "https://tyco.widen.net/content/u42r7amu4y/jpeg/DX_residentialproductfamily_productcardimage_24k-black_1.jpeg?position=c&color=ffffffff&quality=80&u=qm5dza",
            "efficiency": "HH8 Side-Discharge Heat Pump"
          },
          {
            "name": "HMH7 18 SEER Horizontal Discharge Heat Pump",
            "model_image": "https://tyco.widen.net/content/maybm4jwxt/jpeg/DS_residentialproductfamily_productcardimage_HMH7%20Grouping.jpeg?position=c&color=ffffffff&quality=80&u=ncoxvb",
            "efficiency": "HMH7 18 SEER Horizontal Discharge Heat Pump"
          },
          {
            "name": "YH2F 15.2 SEER2 1 & 2-Stage Heat Pump",
            "model_image": "https://embed.widencdn.net/img/tyco/xna8lfesnb/exact/DX_residentialproductfamily_productcardimage_yhg_1.jpeg?position=c&crop=no&color=ffffffff&u=pm2g2j",
            "efficiency": "YH2F 15.2 SEER2 1 & 2-Stage Heat Pump"
          },
          {
            "name": "YH4 14.3 SEER2 2-Stage Heat Pump",
            "model_image": "https://tyco.widen.net/content/032jygvimo/jpeg/DS_residentialproductfamily_productcardimage_YH4_Clean2.jpeg?position=c&color=ffffffff&quality=80&u=77lbkw",
            "efficiency": "YH4 14.3 SEER2 2-Stage Heat Pump"
          }
        ]
      },
      {
        "line": "Packaged Units",
        "product_line_image": "https://www.york.com/-/media/project/jci-global/york-sites/united-states-york/residential/images/residential-products/york-residential-products-packaged-units.png?la=en&h=559&w=850&hash=6FDB9748214017378B56DC289D577A8F",
        "models": [
          {
            "name": "PCG4 14 SEER Ultra Low Nox Packaged Unit",
            "model_image": "https://embed.widencdn.net/img/tyco/ud3ozsmwm1/exact/DX_residentialproductfamily_productcardimage_pcg4_2.jpeg?position=c&crop=no&color=ffffffff&u=pm2g2j",
            "efficiency": "PCG4 14 SEER Ultra Low Nox Packaged Unit"
          },
          {
            "name": "PC3 13.4 SEER2 Packaged Air Conditioner",
            "model_image": "https://tyco.widen.net/content/faqrxidmv2/jpeg/DS_residentialproductfamily_productcardimage_Respack_YRK.jpeg?position=c&color=ffffffff&quality=80&u=ytcytf",
            "efficiency": "PC3 13.4 SEER2 Packaged Air Conditioner"
          },
          {
            "name": "PCE4 14 SEER Packaged Air Conditioner",
            "model_image": "https://embed.widencdn.net/img/tyco/gcjspo3hxt/exact/DX_residentialproductfamily_productcardimage_pce4_2.jpeg?position=c&crop=no&color=ffffffff&u=pm2g2j",
            "efficiency": "PCE4 14 SEER Packaged Air Conditioner"
          },
          {
            "name": "PCE6 16 SEER Packaged Air Conditioner",
            "model_image": "https://embed.widencdn.net/img/tyco/fwnp9ee1ct/exact/DX_residentialproductfamily_productcardimage_pce6_2.jpeg?position=c&crop=no&color=ffffffff&u=pm2g2j",
            "efficiency": "PCE6 16 SEER Packaged Air Conditioner"
          },
          {
            "name": "PCG4 14 SEER Electric/Gas Packaged Unit",
            "model_image": "https://embed.widencdn.net/img/tyco/ud3ozsmwm1/exact/DX_residentialproductfamily_productcardimage_pcg4_2.jpeg?position=c&crop=no&color=ffffffff&u=pm2g2j",
            "efficiency": "PCG4 14 SEER Electric/Gas Packaged Unit"
          },
          {
            "name": "PCG6 16 SEER Electric/Gas Packaged Unit",
            "model_image": "https://embed.widencdn.net/img/tyco/fsci7dy7qk/exact/DX_residentialproductfamily_productcardimage_pcg6_2.jpeg?position=c&crop=no&color=ffffffff&u=pm2g2j",
            "efficiency": "PCG6 16 SEER Electric/Gas Packaged Unit"
          },
          {
            "name": "PG3 13.4 SEER2 Electric/Gas Packaged Unit",
            "model_image": "https://tyco.widen.net/content/faqrxidmv2/jpeg/DS_residentialproductfamily_productcardimage_Respack_YRK.jpeg?position=c&color=ffffffff&quality=80&u=ytcytf",
            "efficiency": "PG3 13.4 SEER2 Electric/Gas Packaged Unit"
          },
          {
            "name": "PHE4 14 SEER Packaged Heat Pump",
            "model_image": "https://embed.widencdn.net/img/tyco/nblvlrlhr9/exact/DX_residentialproductfamily_productcardimage_phe4_2.jpeg?position=c&crop=no&color=ffffffff&u=pm2g2j",
            "efficiency": "PHE4 14 SEER Packaged Heat Pump"
          },
          {
            "name": "PHG4 14 SEER Dual Fuel Packaged Heat Pump",
            "model_image": "https://embed.widencdn.net/img/tyco/hnfn6dhse6/exact/DX_residentialproductfamily_productcardimage_phg4_2.jpeg?position=c&crop=no&color=ffffffff&u=pm2g2j",
            "efficiency": "PHG4 14 SEER Dual Fuel Packaged Heat Pump"
          },
          {
            "name": "PCG4 14 SEER Ultra Low Nox Packaged Unit",
            "model_image": "https://embed.widencdn.net/img/tyco/ud3ozsmwm1/exact/DX_residentialproductfamily_productcardimage_pcg4_2.jpeg?position=c&crop=no&color=ffffffff&u=pm2g2j",
            "efficiency": "PCG4 14 SEER Ultra Low Nox Packaged Unit"
          },
          {
            "name": "PC3 13.4 SEER2 Packaged Air Conditioner",
            "model_image": "https://tyco.widen.net/content/faqrxidmv2/jpeg/DS_residentialproductfamily_productcardimage_Respack_YRK.jpeg?position=c&color=ffffffff&quality=80&u=ytcytf",
            "efficiency": "PC3 13.4 SEER2 Packaged Air Conditioner"
          },
          {
            "name": "PCE4 14 SEER Packaged Air Conditioner",
            "model_image": "https://embed.widencdn.net/img/tyco/gcjspo3hxt/exact/DX_residentialproductfamily_productcardimage_pce4_2.jpeg?position=c&crop=no&color=ffffffff&u=pm2g2j",
            "efficiency": "PCE4 14 SEER Packaged Air Conditioner"
          },
          {
            "name": "PCE6 16 SEER Packaged Air Conditioner",
            "model_image": "https://embed.widencdn.net/img/tyco/fwnp9ee1ct/exact/DX_residentialproductfamily_productcardimage_pce6_2.jpeg?position=c&crop=no&color=ffffffff&u=pm2g2j",
            "efficiency": "PCE6 16 SEER Packaged Air Conditioner"
          },
          {
            "name": "PCG4 14 SEER Electric/Gas Packaged Unit",
            "model_image": "https://embed.widencdn.net/img/tyco/ud3ozsmwm1/exact/DX_residentialproductfamily_productcardimage_pcg4_2.jpeg?position=c&crop=no&color=ffffffff&u=pm2g2j",
            "efficiency": "PCG4 14 SEER Electric/Gas Packaged Unit"
          },
          {
            "name": "PCG6 16 SEER Electric/Gas Packaged Unit",
            "model_image": "https://embed.widencdn.net/img/tyco/fsci7dy7qk/exact/DX_residentialproductfamily_productcardimage_pcg6_2.jpeg?position=c&crop=no&color=ffffffff&u=pm2g2j",
            "efficiency": "PCG6 16 SEER Electric/Gas Packaged Unit"
          },
          {
            "name": "PG3 13.4 SEER2 Electric/Gas Packaged Unit",
            "model_image": "https://tyco.widen.net/content/faqrxidmv2/jpeg/DS_residentialproductfamily_productcardimage_Respack_YRK.jpeg?position=c&color=ffffffff&quality=80&u=ytcytf",
            "efficiency": "PG3 13.4 SEER2 Electric/Gas Packaged Unit"
          },
          {
            "name": "PHE4 14 SEER Packaged Heat Pump",
            "model_image": "https://embed.widencdn.net/img/tyco/nblvlrlhr9/exact/DX_residentialproductfamily_productcardimage_phe4_2.jpeg?position=c&crop=no&color=ffffffff&u=pm2g2j",
            "efficiency": "PHE4 14 SEER Packaged Heat Pump"
          },
          {
            "name": "PHG4 14 SEER Dual Fuel Packaged Heat Pump",
            "model_image": "https://embed.widencdn.net/img/tyco/hnfn6dhse6/exact/DX_residentialproductfamily_productcardimage_phg4_2.jpeg?position=c&crop=no&color=ffffffff&u=pm2g2j",
            "efficiency": "PHG4 14 SEER Dual Fuel Packaged Heat Pump"
          },
          {
            "name": "PCG4 14 SEER Ultra Low Nox Packaged Unit",
            "model_image": "https://embed.widencdn.net/img/tyco/ud3ozsmwm1/exact/DX_residentialproductfamily_productcardimage_pcg4_2.jpeg?position=c&crop=no&color=ffffffff&u=pm2g2j",
            "efficiency": "PCG4 14 SEER Ultra Low Nox Packaged Unit"
          },
          {
            "name": "PC3 13.4 SEER2 Packaged Air Conditioner",
            "model_image": "https://tyco.widen.net/content/faqrxidmv2/jpeg/DS_residentialproductfamily_productcardimage_Respack_YRK.jpeg?position=c&color=ffffffff&quality=80&u=ytcytf",
            "efficiency": "PC3 13.4 SEER2 Packaged Air Conditioner"
          },
          {
            "name": "PCE4 14 SEER Packaged Air Conditioner",
            "model_image": "https://embed.widencdn.net/img/tyco/gcjspo3hxt/exact/DX_residentialproductfamily_productcardimage_pce4_2.jpeg?position=c&crop=no&color=ffffffff&u=pm2g2j",
            "efficiency": "PCE4 14 SEER Packaged Air Conditioner"
          },
          {
            "name": "PCE6 16 SEER Packaged Air Conditioner",
            "model_image": "https://embed.widencdn.net/img/tyco/fwnp9ee1ct/exact/DX_residentialproductfamily_productcardimage_pce6_2.jpeg?position=c&crop=no&color=ffffffff&u=pm2g2j",
            "efficiency": "PCE6 16 SEER Packaged Air Conditioner"
          },
          {
            "name": "PCG4 14 SEER Electric/Gas Packaged Unit",
            "model_image": "https://embed.widencdn.net/img/tyco/ud3ozsmwm1/exact/DX_residentialproductfamily_productcardimage_pcg4_2.jpeg?position=c&crop=no&color=ffffffff&u=pm2g2j",
            "efficiency": "PCG4 14 SEER Electric/Gas Packaged Unit"
          },
          {
            "name": "PCG6 16 SEER Electric/Gas Packaged Unit",
            "model_image": "https://embed.widencdn.net/img/tyco/fsci7dy7qk/exact/DX_residentialproductfamily_productcardimage_pcg6_2.jpeg?position=c&crop=no&color=ffffffff&u=pm2g2j",
            "efficiency": "PCG6 16 SEER Electric/Gas Packaged Unit"
          },
          {
            "name": "PG3 13.4 SEER2 Electric/Gas Packaged Unit",
            "model_image": "https://tyco.widen.net/content/faqrxidmv2/jpeg/DS_residentialproductfamily_productcardimage_Respack_YRK.jpeg?position=c&color=ffffffff&quality=80&u=ytcytf",
            "efficiency": "PG3 13.4 SEER2 Electric/Gas Packaged Unit"
          },
          {
            "name": "PHE4 14 SEER Packaged Heat Pump",
            "model_image": "https://embed.widencdn.net/img/tyco/nblvlrlhr9/exact/DX_residentialproductfamily_productcardimage_phe4_2.jpeg?position=c&crop=no&color=ffffffff&u=pm2g2j",
            "efficiency": "PHE4 14 SEER Packaged Heat Pump"
          },
          {
            "name": "PHG4 14 SEER Dual Fuel Packaged Heat Pump",
            "model_image": "https://embed.widencdn.net/img/tyco/hnfn6dhse6/exact/DX_residentialproductfamily_productcardimage_phg4_2.jpeg?position=c&crop=no&color=ffffffff&u=pm2g2j",
            "efficiency": "PHG4 14 SEER Dual Fuel Packaged Heat Pump"
          }
        ]
      }
    ]
  },
  {
    "brand": "Amana",
    "logo": "/logos/Amana.png",
    "productLines": [
      {
        "line": "Air Conditioners",
        "product_line_image": "https://www.amana-hac.com/images/default-source/default-album/air-conditionersabb2660022fa6258827eff0b00754798.png",
        "models": [
          {
            "name": "ALXS4N",
            "model_image": "https://www.amana-hac.com/images/default-source/products/aszv4-150.png",
            "efficiency": "Up to 15.2 SEER2"
          },
          {
            "name": "ALXS4B",
            "model_image": "https://www.amana-hac.com/images/default-source/products/aszv4-150.png",
            "efficiency": "Up to 15.2 SEER2"
          },
          {
            "name": "ASXV9",
            "model_image": "https://www.amana-hac.com/images/default-source/default-album/asxn4-150.png",
            "efficiency": "UP TO 23.5 SEER2"
          },
          {
            "name": "ASXC7",
            "model_image": "https://www.amana-hac.com/images/default-source/default-album/asxn4-150.png",
            "efficiency": "Up to 17.2 SEER2 Performance"
          },
          {
            "name": "ASXS6 S-series",
            "model_image": "https://www.amana-hac.com/images/default-source/new-amana-product-images/asxv6.jpg",
            "efficiency": "UP TO 17.2 SEER2"
          },
          {
            "name": "AXV6S S-series",
            "model_image": "https://www.amana-hac.com/images/default-source/new-amana-product-images/asxv6.jpg",
            "efficiency": "UP TO 17.2 SEER2"
          },
          {
            "name": "ALXT7C",
            "model_image": "https://www.amana-hac.com/images/default-source/default-album/asxn4-150.png",
            "efficiency": "Up to 17.2 SEER2 Performance"
          },
          {
            "name": "AXV9S S-Series",
            "model_image": "https://www.amana-hac.com/images/default-source/default-album/axv9s.png",
            "efficiency": "UP TO 19 SEER2"
          },
          {
            "name": "ASXH5",
            "model_image": "https://www.amana-hac.com/images/default-source/default-album/asxn4-150.png",
            "efficiency": "Up to 17 SEER2"
          },
          {
            "name": "ALXS5B",
            "model_image": "https://www.amana-hac.com/images/default-source/default-album/asxn4-150.png",
            "efficiency": "Up to 17 SEER2"
          },
          {
            "name": "ASXN4",
            "model_image": "https://www.amana-hac.com/images/default-source/products/aszv4-150.png",
            "efficiency": "UP TO 15.2 SEER2"
          },
          {
            "name": "ASXH4",
            "model_image": "https://www.amana-hac.com/images/default-source/products/aszv4-150.png",
            "efficiency": "UP TO 15.2 SEER2"
          },
          {
            "name": "ALXS3B",
            "model_image": "https://www.amana-hac.com/images/default-source/products/aszv4-150.png",
            "efficiency": "UP TO 14.5 SEER2"
          },
          {
            "name": "ALXS3N",
            "model_image": "https://www.amana-hac.com/images/default-source/products/aszv4-150.png",
            "efficiency": "UP TO 14.5 SEER2"
          },
          {
            "name": "ASXN3",
            "model_image": "https://www.amana-hac.com/images/default-source/products/aszv4-150.png",
            "efficiency": "UP TO 14.5 SEER2"
          },
          {
            "name": "ASXH3",
            "model_image": "https://www.amana-hac.com/images/default-source/products/aszv4-150.png",
            "efficiency": "UP TO 14.5 SEER2"
          }
        ]
      },
      {
        "line": "Air Handlers and Coils",
        "product_line_image": "https://www.amana-hac.com/images/default-source/products/amana-amvt.png",
        "models": [
          {
            "name": "AMST R-32",
            "model_image": "https://www.amana-hac.com/images/default-source/products/amana-amvt.png",
            "efficiency": "15.2 SEER2"
          },
          {
            "name": "AHVE R-32",
            "model_image": "https://www.amana-hac.com/images/default-source/products/amana-amvt.png",
            "efficiency": ""
          },
          {
            "name": "115V AHVE R-32",
            "model_image": "https://www.amana-hac.com/images/default-source/products/amana-amvt.png",
            "efficiency": ""
          },
          {
            "name": "AMVT R-32",
            "model_image": "https://www.amana-hac.com/images/default-source/products/amana-amvt.png",
            "efficiency": ""
          },
          {
            "name": "ACST",
            "model_image": "https://www.amana-hac.com/images/default-source/products/acst-r32.png",
            "efficiency": ""
          },
          {
            "name": "AWST R-32",
            "model_image": "https://www.amana-hac.com/images/default-source/products/awst-r32.png",
            "efficiency": ""
          },
          {
            "name": "AHVE",
            "model_image": "https://www.amana-hac.com/images/default-source/default-album/amn-aspt-ah-rt.png",
            "efficiency": ""
          },
          {
            "name": "115V AHVE",
            "model_image": "https://www.amana-hac.com/images/default-source/default-album/amn-aspt-ah-rt.png",
            "efficiency": ""
          },
          {
            "name": "AMVT",
            "model_image": "https://www.amana-hac.com/images/default-source/default-album/amn-aspt-ah-rt.png",
            "efficiency": ""
          },
          {
            "name": "AMST",
            "model_image": "https://www.amana-hac.com/images/default-source/default-album/amn-aspt-ah-rt.png",
            "efficiency": "15.2 SEER2"
          },
          {
            "name": "AMVE",
            "model_image": "https://www.amana-hac.com/images/default-source/default-album/amn-aspt-ah-rt.png",
            "efficiency": ""
          },
          {
            "name": "MBVK",
            "model_image": "https://www.amana-hac.com/images/default-source/products/mbvk.png",
            "efficiency": ""
          },
          {
            "name": "MBVB",
            "model_image": "https://www.amana-hac.com/images/default-source/products/mbvk.png",
            "efficiency": ""
          },
          {
            "name": "MBVC",
            "model_image": "https://www.amana-hac.com/images/default-source/products/mbvk.png",
            "efficiency": ""
          },
          {
            "name": "AWST",
            "model_image": "https://www.amana-hac.com/images/default-source/default-album/awst.png",
            "efficiency": ""
          },
          {
            "name": "AWSF",
            "model_image": "https://www.amana-hac.com/images/default-source/default-album/awst.png",
            "efficiency": ""
          },
          {
            "name": "ACSF",
            "model_image": "https://www.amana-hac.com/images/default-source/products/amn-acnf-left.png",
            "efficiency": ""
          },
          {
            "name": "AVPTC",
            "model_image": "https://www.amana-hac.com/images/default-source/default-album/amn-aspt-ah-rt.png",
            "efficiency": ""
          },
          {
            "name": "ASPT",
            "model_image": "https://www.amana-hac.com/images/default-source/default-album/amn-aspt-ah-rt.png",
            "efficiency": ""
          },
          {
            "name": "ARUF",
            "model_image": "https://www.amana-hac.com/images/default-source/products/amn-aruf-left.png",
            "efficiency": ""
          },
          {
            "name": "ACNF",
            "model_image": "https://www.amana-hac.com/images/default-source/products/amn-acnf-left.png",
            "efficiency": ""
          },
          {
            "name": "AVPEC",
            "model_image": "https://www.amana-hac.com/images/default-source/default-album/amn-aspt-ah-rt.png",
            "efficiency": ""
          },
          {
            "name": "CSCF",
            "model_image": "https://www.amana-hac.com/images/default-source/products/amn-cscf-lft.png",
            "efficiency": ""
          },
          {
            "name": "CHPF",
            "model_image": "https://www.amana-hac.com/images/default-source/new-amana-product-images/amn-chpf.png",
            "efficiency": ""
          },
          {
            "name": "CAUF/CAUFA",
            "model_image": "https://www.amana-hac.com/images/default-source/default-album/capfa.png",
            "efficiency": ""
          },
          {
            "name": "CAPT/CAPTA",
            "model_image": "https://www.amana-hac.com/images/default-source/products/amn-capf-rt.png",
            "efficiency": ""
          },
          {
            "name": "CAPF/CAPFA",
            "model_image": "https://www.amana-hac.com/images/default-source/default-album/evaporator-coil.jpg",
            "efficiency": ""
          },
          {
            "name": "CHPT/CHPTA",
            "model_image": "https://www.amana-hac.com/images/default-source/default-album/chpt.jpg",
            "efficiency": ""
          },
          {
            "name": "CHPE",
            "model_image": "https://www.amana-hac.com/images/default-source/default-album/chpe.png",
            "efficiency": ""
          },
          {
            "name": "CHPEA R-32",
            "model_image": "https://www.amana-hac.com/images/default-source/default-album/chpea.png",
            "efficiency": ""
          },
          {
            "name": "CAHEA R-32",
            "model_image": "https://www.amana-hac.com/images/default-source/default-album/caheac347690022fa6258827eff0e00754798.png",
            "efficiency": ""
          },
          {
            "name": "CAPEA/CAPE",
            "model_image": "https://www.amana-hac.com/images/default-source/default-album/cape.png",
            "efficiency": ""
          },
          {
            "name": "CAPTA R-32",
            "model_image": "https://www.amana-hac.com/images/default-source/default-album/capta.png",
            "efficiency": ""
          },
          {
            "name": "CHPTA R-32",
            "model_image": "https://www.amana-hac.com/images/default-source/default-album/chpta.png",
            "efficiency": ""
          },
          {
            "name": "CAPFA R-32",
            "model_image": "https://www.amana-hac.com/images/default-source/default-album/capfa9e48690022fa6258827eff0e00754798.png",
            "efficiency": ""
          },
          {
            "name": "CAPEA/CAPE R-32",
            "model_image": "https://www.amana-hac.com/images/default-source/default-album/capea.png",
            "efficiency": ""
          },
          {
            "name": "CSCT R-32",
            "model_image": "https://www.amana-hac.com/images/default-source/default-album/csct.png",
            "efficiency": ""
          },
          {
            "name": "CAUTA R-32",
            "model_image": "https://www.amana-hac.com/images/default-source/default-album/cauta.png",
            "efficiency": ""
          }
        ]
      },
      {
        "line": "Amana Cloud Services",
        "product_line_image": "https://www.amana-hac.com/images/default-source/categories/amana-cloud.png",
        "models": [
          {
            "name": "Amana Home App",
            "model_image": "https://www.amana-hac.com/images/default-source/products/prod-amana-home.png",
            "efficiency": ""
          }
        ]
      },
      {
        "line": "Heat Pumps",
        "product_line_image": "https://www.amana-hac.com/images/default-source/categories/amn-heatpump-sm.png",
        "models": [
          {
            "name": "AZV9S S-Series",
            "model_image": "https://www.amana-hac.com/images/default-source/products/az9vsn.png",
            "efficiency": "Up to 19 SEER2"
          },
          {
            "name": "AZV6S S-SERIES",
            "model_image": "https://www.amana-hac.com/images/default-source/new-amana-product-images/asxv6.jpg",
            "efficiency": "Up to 19.0 SEER2"
          },
          {
            "name": "AZV7S S-SERIES",
            "model_image": "https://www.amana-hac.com/images/default-source/new-amana-product-images/asxv6.jpg",
            "efficiency": "UP TO 19.0 SEER2"
          },
          {
            "name": "ALZT7C",
            "model_image": "https://www.amana-hac.com/images/default-source/default-album/asxn4-150.png",
            "efficiency": "UP TO 17.2 SEER2 and 8.2 HSPF2"
          },
          {
            "name": "ASZC7",
            "model_image": "https://www.amana-hac.com/images/default-source/default-album/asxn4-150.png",
            "efficiency": "UP TO 17.2 SEER2 and 8.2 HSPF2"
          },
          {
            "name": "ASZN4",
            "model_image": "https://www.amana-hac.com/images/default-source/products/aszv4-150.png",
            "efficiency": "15.2 SEER2 and 7.8 HSPF2"
          },
          {
            "name": "ALZS4N",
            "model_image": "https://www.amana-hac.com/images/default-source/products/aszv4-150.png",
            "efficiency": ""
          },
          {
            "name": "ASZH4",
            "model_image": "https://www.amana-hac.com/images/default-source/products/aszv4-150.png",
            "efficiency": "15.2 SEER2 and 7.8 HSPF2"
          },
          {
            "name": "ALZS4B",
            "model_image": "https://www.amana-hac.com/images/default-source/products/aszv4-150.png",
            "efficiency": ""
          },
          {
            "name": "ASZH5",
            "model_image": "https://www.amana-hac.com/images/default-source/default-album/asxn4-150.png",
            "efficiency": "UP TO 16 SEER2 and 8 HSPF2"
          },
          {
            "name": "ALZS5B",
            "model_image": "https://www.amana-hac.com/images/default-source/products/asxc7.jpg",
            "efficiency": ""
          }
        ]
      },
      {
        "line": "Temperature Controls",
        "product_line_image": "https://www.amana-hac.com/images/default-source/default-album/smart-thermostate6ee550022fa6258827eff0c00754798.png",
        "models": [
          {
            "name": "ComfortBridge\u2122",
            "model_image": "https://www.amana-hac.com/images/default-source/default-album/cb_v_rgba168480022fa6258827eff0a00754798.png",
            "efficiency": ""
          },
          {
            "name": "Amana\u00aebrand Smart Thermostat",
            "model_image": "https://www.amana-hac.com/images/default-source/default-album/smart-thermostate6ee550022fa6258827eff0c00754798.png",
            "efficiency": ""
          },
          {
            "name": "PROSTAT+ PSP4272RT",
            "model_image": "https://www.amana-hac.com/images/default-source/default-album/prostat_product-details_720x550_6touchresid.png",
            "efficiency": ""
          },
          {
            "name": "PROSTAT+ PSP4273RT",
            "model_image": "https://www.amana-hac.com/images/default-source/default-album/prostat_product-details_720x550_6touchresid.png",
            "efficiency": ""
          }
        ]
      }
    ]
  },
  {
    "brand": "American Standard",
    "logo": "/logos/American_Standard.png",
    "productLines": [
      {
        "line": "Air conditioner packaged",
        "product_line_image": "https://www.americanstandardair.com/products/packaged-system/air-conditioner-packaged-systems/",
        "models": [
          {
            "name": "Silver 14 Air Conditioner Packaged Unit",
            "model_image": "https://www.americanstandardair.com/_next/image/?url=https%3A%2F%2Flive-asa-headless-cms.pantheonsite.io%2Fwp-content%2Fuploads%2F2025%2F02%2FAMSD_ACHP-Packaged-Unit-_-Single-Phase-Only-1-300x240.png&w=3840&q=75",
            "efficiency": ""
          },
          {
            "name": "Silver 13.4 Packaged Air Conditioner System",
            "model_image": "https://www.americanstandardair.com/_next/image/?url=https%3A%2F%2Flive-asa-headless-cms.pantheonsite.io%2Fwp-content%2Fuploads%2F2022%2F09%2Fsilver-14-air-conditioner-system-262x300.png&w=3840&q=75",
            "efficiency": ""
          }
        ]
      },
      {
        "line": "Air conditioners",
        "product_line_image": "https://www.americanstandardair.com/products/air-conditioners/",
        "models": [
          {
            "name": "AccuComfort\u2122 Variable Speed Platinum 20 Air Conditioner",
            "model_image": "https://www.americanstandardair.com/_next/image/?url=https%3A%2F%2Flive-asa-headless-cms.pantheonsite.io%2Fwp-content%2Fuploads%2F2022%2F09%2FAccuComfort-variable-speed-platinum-20-air-conditioner-262x300.png&w=3840&q=75",
            "efficiency": ""
          },
          {
            "name": "AccuComfort\u2122 Variable Speed Platinum 18 Air Conditioner",
            "model_image": "https://www.americanstandardair.com/_next/image/?url=https%3A%2F%2Flive-asa-headless-cms.pantheonsite.io%2Fwp-content%2Fuploads%2F2022%2F10%2Faccucomfort-variable-speed-platinum-18-air-conditioner-262x300.png&w=3840&q=75",
            "efficiency": ""
          },
          {
            "name": "AccuComfort\u2122 Variable Speed Platinum 17 Air Conditioner",
            "model_image": "https://www.americanstandardair.com/_next/image/?url=https%3A%2F%2Flive-asa-headless-cms.pantheonsite.io%2Fwp-content%2Fuploads%2F2023%2F05%2Fplatinum-17-ac-hp-262x300.png&w=3840&q=75",
            "efficiency": ""
          },
          {
            "name": "Gold 17 Multi-Speed Air Conditioner",
            "model_image": "https://www.americanstandardair.com/_next/image/?url=https%3A%2F%2Flive-asa-headless-cms.pantheonsite.io%2Fwp-content%2Fuploads%2F2025%2F01%2Fgold_17_hp-min-244x300.png&w=3840&q=75",
            "efficiency": ""
          },
          {
            "name": "Gold 16 Air Conditioner",
            "model_image": "https://www.americanstandardair.com/_next/image/?url=https%3A%2F%2Flive-asa-headless-cms.pantheonsite.io%2Fwp-content%2Fuploads%2F2022%2F10%2Fgold-17-air-conditioner-262x300.png&w=3840&q=75",
            "efficiency": ""
          },
          {
            "name": "Silver 15 Air Conditioner",
            "model_image": "https://www.americanstandardair.com/_next/image/?url=https%3A%2F%2Flive-asa-headless-cms.pantheonsite.io%2Fwp-content%2Fuploads%2F2022%2F09%2Fcq5dam.web_.1280.1280-248x300.jpeg&w=3840&q=75",
            "efficiency": ""
          },
          {
            "name": "Silver 14 Air Conditioner",
            "model_image": "https://www.americanstandardair.com/_next/image/?url=https%3A%2F%2Flive-asa-headless-cms.pantheonsite.io%2Fwp-content%2Fuploads%2F2022%2F09%2Fcq5dam.web_.1280.1280-248x300.jpeg&w=3840&q=75",
            "efficiency": ""
          },
          {
            "name": "Silver 13 Air Conditioner",
            "model_image": "https://www.americanstandardair.com/_next/image/?url=https%3A%2F%2Flive-asa-headless-cms.pantheonsite.io%2Fwp-content%2Fuploads%2F2022%2F09%2Fcq5dam.web_.1280.1280-248x300.jpeg&w=3840&q=75",
            "efficiency": ""
          },
          {
            "name": "Silver 15 Low Profile Air Conditioner",
            "model_image": "https://www.americanstandardair.com/_next/image/?url=https%3A%2F%2Flive-asa-headless-cms.pantheonsite.io%2Fwp-content%2Fuploads%2F2022%2F10%2Fsilver-16-low-profile-air-conditioner-262x300.png&w=3840&q=75",
            "efficiency": ""
          },
          {
            "name": "All Weather\u2122 Top Accessory \u2013 AC",
            "model_image": "https://www.americanstandardair.com/_next/image/?url=https%3A%2F%2Flive-asa-headless-cms.pantheonsite.io%2Fwp-content%2Fuploads%2F2022%2F10%2Fall-weather%E2%84%A2-top-accessory-262x300.png&w=3840&q=75",
            "efficiency": ""
          }
        ]
      },
      {
        "line": "Air handlers",
        "product_line_image": "https://www.americanstandardair.com/products/air-handlers/",
        "models": [
          {
            "name": "ForeFront\u2122 Platinum 5TAMX/TAMX",
            "model_image": "https://www.americanstandardair.com/_next/image/?url=https%3A%2F%2Flive-asa-headless-cms.pantheonsite.io%2Fwp-content%2Fuploads%2F2022%2F12%2FAS-AIR-HANDLER-RIGHT-FRONT-3-1-1-176x300.png&w=3840&q=75",
            "efficiency": ""
          },
          {
            "name": "Platinum TEM8/5TEMC Air Handler",
            "model_image": "https://www.americanstandardair.com/_next/image/?url=https%3A%2F%2Flive-asa-headless-cms.pantheonsite.io%2Fwp-content%2Fuploads%2F2022%2F10%2Fsilver-tem8-air-handler-262x300.png&w=3840&q=75",
            "efficiency": ""
          },
          {
            "name": "ForeFront\u2122 Gold 5TAM5/GAM5",
            "model_image": "https://www.americanstandardair.com/_next/image/?url=https%3A%2F%2Flive-asa-headless-cms.pantheonsite.io%2Fwp-content%2Fuploads%2F2022%2F10%2Fforefront-gold-gam5-air-handler-262x300.png&w=3840&q=75",
            "efficiency": ""
          },
          {
            "name": "Gold TEM6/5TEM6 Air Handler",
            "model_image": "https://www.americanstandardair.com/_next/image/?url=https%3A%2F%2Flive-asa-headless-cms.pantheonsite.io%2Fwp-content%2Fuploads%2F2022%2F09%2FScreenshot-2024-10-31-150742-2-154x300.png&w=3840&q=75",
            "efficiency": ""
          },
          {
            "name": "120V Modular Variable Speed Air Handler",
            "model_image": "https://www.americanstandardair.com/_next/image/?url=https%3A%2F%2Flive-asa-headless-cms.pantheonsite.io%2Fwp-content%2Fuploads%2F2022%2F10%2Fp-series-modular-blower-air-handler-262x300.png&w=3840&q=75",
            "efficiency": ""
          },
          {
            "name": "Silver TEM4/5TEM4 Air Handler",
            "model_image": "https://www.americanstandardair.com/_next/image/?url=https%3A%2F%2Flive-asa-headless-cms.pantheonsite.io%2Fwp-content%2Fuploads%2F2022%2F09%2FScreenshot-2024-10-31-150742-2-154x300.png&w=3840&q=75",
            "efficiency": ""
          },
          {
            "name": "Silver 5TMM / TMM5 Air Handler",
            "model_image": "https://www.americanstandardair.com/_next/image/?url=https%3A%2F%2Flive-asa-headless-cms.pantheonsite.io%2Fwp-content%2Fuploads%2F2022%2F09%2F5TMM5-Right_W_Panels-1-184x300.png&w=3840&q=75",
            "efficiency": ""
          },
          {
            "name": "Silver TMM4 Air Handler",
            "model_image": "https://www.americanstandardair.com/_next/image/?url=https%3A%2F%2Flive-asa-headless-cms.pantheonsite.io%2Fwp-content%2Fuploads%2F2022%2F10%2Fsilver-tmm4-air-handler-american-standard-262x300.png&w=3840&q=75",
            "efficiency": ""
          }
        ]
      },
      {
        "line": "Air purification",
        "product_line_image": "https://www.americanstandardair.com/products/indoor-air-quality/air-purification/",
        "models": [
          {
            "name": "QuikBox\u2122 Air Cleaner",
            "model_image": "https://www.americanstandardair.com/_next/image/?url=https%3A%2F%2Flive-asa-headless-cms.pantheonsite.io%2Fwp-content%2Fuploads%2F2022%2F10%2Fquikbox-merv13-262x300.png&w=3840&q=75",
            "efficiency": ""
          },
          {
            "name": "AccuClean\u00ae Whole-Home Air Cleaner",
            "model_image": "https://www.americanstandardair.com/_next/image/?url=https%3A%2F%2Flive-asa-headless-cms.pantheonsite.io%2Fwp-content%2Fuploads%2F2022%2F10%2Famerican-standard-accuclean-whole-home-air-cleaner-300x283.png&w=3840&q=75",
            "efficiency": ""
          },
          {
            "name": "SlimFit Filter Rack",
            "model_image": "https://www.americanstandardair.com/_next/image/?url=https%3A%2F%2Flive-asa-headless-cms.pantheonsite.io%2Fwp-content%2Fuploads%2F2022%2F10%2Fslimfit-filter-rack-261x300.png&w=3840&q=75",
            "efficiency": ""
          }
        ]
      },
      {
        "line": "Coils",
        "product_line_image": "https://www.americanstandardair.com/products/coils/",
        "models": [
          {
            "name": "Platinum Indoor Coil \u2013 Multi-Position",
            "model_image": "https://www.americanstandardair.com/_next/image/?url=https%3A%2F%2Flive-asa-headless-cms.pantheonsite.io%2Fwp-content%2Fuploads%2F2024%2F10%2F4TXC-5TXC-Coil-PDP-297x300.jpg&w=3840&q=75",
            "efficiency": ""
          },
          {
            "name": "4AXA/5AXA Uncased Coils",
            "model_image": "https://www.americanstandardair.com/_next/image/?url=https%3A%2F%2Flive-asa-headless-cms.pantheonsite.io%2Fwp-content%2Fuploads%2F2023%2F05%2F4AXA-coils-245x300.png&w=3840&q=75",
            "efficiency": ""
          },
          {
            "name": "4PXFH/5PXFH Horizontal Flat Coils",
            "model_image": "https://www.americanstandardair.com/_next/image/?url=https%3A%2F%2Flive-asa-headless-cms.pantheonsite.io%2Fwp-content%2Fuploads%2F2024%2F10%2F4PXFH-5PXFH-Coil-PDP-Image-300x221.jpg&w=3840&q=75",
            "efficiency": ""
          },
          {
            "name": "Platinum Indoor Coils \u2013 Upflow/Downflow",
            "model_image": "https://www.americanstandardair.com/_next/image/?url=https%3A%2F%2Flive-asa-headless-cms.pantheonsite.io%2Fwp-content%2Fuploads%2F2022%2F09%2Fplatinum-indoor-coil-american-standard-262x300.png&w=3840&q=75",
            "efficiency": ""
          }
        ]
      },
      {
        "line": "Furnace",
        "product_line_image": "https://www.americanstandardair.com/products/furnaces/",
        "models": [
          {
            "name": "Platinum 95 Gas Furnace",
            "model_image": "https://www.americanstandardair.com/_next/image/?url=https%3A%2F%2Flive-asa-headless-cms.pantheonsite.io%2Fwp-content%2Fuploads%2F2022%2F10%2Fplatinum-95-gas-furnace-262x300.png&w=3840&q=75",
            "efficiency": ""
          },
          {
            "name": "Platinum 80 Gas Furnace",
            "model_image": "https://www.americanstandardair.com/_next/image/?url=https%3A%2F%2Flive-asa-headless-cms.pantheonsite.io%2Fwp-content%2Fuploads%2F2022%2F10%2Fplatinum-80-gas-furance-262x300.png&w=3840&q=75",
            "efficiency": ""
          },
          {
            "name": "S9V2-VS Gas Furnace",
            "model_image": "https://www.americanstandardair.com/_next/image/?url=https%3A%2F%2Flive-asa-headless-cms.pantheonsite.io%2Fwp-content%2Fuploads%2F2022%2F10%2Fgold-s9v2-vs-gas-furnace-262x300.png&w=3840&q=75",
            "efficiency": ""
          },
          {
            "name": "Platinum S8V2-C Furnace",
            "model_image": "https://www.americanstandardair.com/_next/image/?url=https%3A%2F%2Flive-asa-headless-cms.pantheonsite.io%2Fwp-content%2Fuploads%2F2022%2F10%2Fplatinum-s8v2-c-gas-furnace-262x300.png&w=3840&q=75",
            "efficiency": ""
          },
          {
            "name": "Gold 80V Gas Furnace",
            "model_image": "https://www.americanstandardair.com/_next/image/?url=https%3A%2F%2Flive-asa-headless-cms.pantheonsite.io%2Fwp-content%2Fuploads%2F2022%2F10%2Fgold-80v-gas-furnace-262x300.png&w=3840&q=75",
            "efficiency": ""
          },
          {
            "name": "Gold S9X2 Gas Furnace",
            "model_image": "https://www.americanstandardair.com/_next/image/?url=https%3A%2F%2Flive-asa-headless-cms.pantheonsite.io%2Fwp-content%2Fuploads%2F2022%2F10%2Fgold-s8x2-gas-furnace-262x300.png&w=3840&q=75",
            "efficiency": ""
          },
          {
            "name": "Gold S8X2 Gas Furnace",
            "model_image": "https://www.americanstandardair.com/_next/image/?url=https%3A%2F%2Flive-asa-headless-cms.pantheonsite.io%2Fwp-content%2Fuploads%2F2022%2F10%2Fgold-s9v2-gas-furnace-262x300.png&w=3840&q=75",
            "efficiency": ""
          },
          {
            "name": "Silver S9X1 Gas Furnace",
            "model_image": "https://www.americanstandardair.com/_next/image/?url=https%3A%2F%2Flive-asa-headless-cms.pantheonsite.io%2Fwp-content%2Fuploads%2F2022%2F10%2Fsilver-s9x1-gas-furance-262x300.png&w=3840&q=75",
            "efficiency": ""
          },
          {
            "name": "Silver S8X1 Gas Furnace",
            "model_image": "https://www.americanstandardair.com/_next/image/?url=https%3A%2F%2Flive-asa-headless-cms.pantheonsite.io%2Fwp-content%2Fuploads%2F2022%2F09%2FAmerican-Standard-S8X1-Gas-Furnace-175x300.png&w=3840&q=75",
            "efficiency": ""
          },
          {
            "name": "American Standard S9B1 Gas Furnace",
            "model_image": "https://www.americanstandardair.com/_next/image/?url=https%3A%2F%2Flive-asa-headless-cms.pantheonsite.io%2Fwp-content%2Fuploads%2F2022%2F10%2Famerican-standard-s9b1-gas-furnace-262x300.png&w=3840&q=75",
            "efficiency": ""
          },
          {
            "name": "American Standard S8B1 Gas Furnace",
            "model_image": "https://www.americanstandardair.com/_next/image/?url=https%3A%2F%2Flive-asa-headless-cms.pantheonsite.io%2Fwp-content%2Fuploads%2F2022%2F09%2FAmerican-Standard-S8B1-Gas-Furnace-175x300.png&w=3840&q=75",
            "efficiency": ""
          },
          {
            "name": "Silver L9X1 Ultra-Low NOx Gas Furnace",
            "model_image": "https://www.americanstandardair.com/_next/image/?url=https%3A%2F%2Flive-asa-headless-cms.pantheonsite.io%2Fwp-content%2Fuploads%2F2022%2F10%2Fsilver-l9x1-ultra-low-nox-gas-furnace-262x300.png&w=3840&q=75",
            "efficiency": ""
          }
        ]
      },
      {
        "line": "Gas & electric packaged",
        "product_line_image": "https://www.americanstandardair.com/products/packaged-system/gas-electric-packaged-systems/",
        "models": [
          {
            "name": "Gold 15 Gas/Electric Packaged System",
            "model_image": "https://www.americanstandardair.com/_next/image/?url=https%3A%2F%2Flive-asa-headless-cms.pantheonsite.io%2Fwp-content%2Fuploads%2F2022%2F09%2F2AMSD_ACHP-Packaged-Unit-%E2%80%93-Single-Phase-Only-300x240.png&w=3840&q=75",
            "efficiency": ""
          },
          {
            "name": "Gold 15 3-Phase Gas/Electric Packaged System",
            "model_image": "https://www.americanstandardair.com/_next/image/?url=https%3A%2F%2Flive-asa-headless-cms.pantheonsite.io%2Fwp-content%2Fuploads%2F2025%2F02%2F4YCC4-Packaged-GE-BTY-AMST_07-05-2022-min-1-300x225.png&w=3840&q=75",
            "efficiency": ""
          },
          {
            "name": "Silver 14 Packaged Gas/Electric System",
            "model_image": "https://www.americanstandardair.com/_next/image/?url=https%3A%2F%2Flive-asa-headless-cms.pantheonsite.io%2Fwp-content%2Fuploads%2F2025%2F02%2FAMSD-Premium-Only-5YCC4-5YCZ5-5DCZ5-1-300x230.png&w=3840&q=75",
            "efficiency": ""
          },
          {
            "name": "Silver 14 3-Phase Packaged Gas/Electric System",
            "model_image": "https://www.americanstandardair.com/_next/image/?url=https%3A%2F%2Flive-asa-headless-cms.pantheonsite.io%2Fwp-content%2Fuploads%2F2025%2F02%2F4YCC4-Packaged-GE-BTY-AMST_07-05-2022-2-300x225.png&w=3840&q=75",
            "efficiency": ""
          },
          {
            "name": "Silver 13.4 Ultra-Low NOx Packaged Units",
            "model_image": "https://www.americanstandardair.com/_next/image/?url=https%3A%2F%2Flive-asa-headless-cms.pantheonsite.io%2Fwp-content%2Fuploads%2F2022%2F10%2F4YCL4-ultra-low-NOx-packaged-hvac-unit-262x300.jpg&w=3840&q=75",
            "efficiency": ""
          },
          {
            "name": "Silver 13.4 Gas/Electric System",
            "model_image": "https://www.americanstandardair.com/_next/image/?url=https%3A%2F%2Flive-asa-headless-cms.pantheonsite.io%2Fwp-content%2Fuploads%2F2022%2F09%2Fsilver-14-gas-and-electric-system-262x300.png&w=3840&q=75",
            "efficiency": ""
          }
        ]
      },
      {
        "line": "Heat pump packaged",
        "product_line_image": "https://www.americanstandardair.com/products/packaged-system/heat-pump-packaged-systems/",
        "models": [
          {
            "name": "Gold 15 Packaged Heat Pump System",
            "model_image": "https://www.americanstandardair.com/_next/image/?url=https%3A%2F%2Flive-asa-headless-cms.pantheonsite.io%2Fwp-content%2Fuploads%2F2022%2F09%2Fgold-15-packaged-heat-pump-system-1-262x300.png&w=3840&q=75",
            "efficiency": ""
          },
          {
            "name": "Gold 15 3-Phase Packaged Heat Pump System",
            "model_image": "https://www.americanstandardair.com/_next/image/?url=https%3A%2F%2Flive-asa-headless-cms.pantheonsite.io%2Fwp-content%2Fuploads%2F2025%2F02%2FAMSD-Heat-Pump-Packaged-Unit-300x226.png&w=3840&q=75",
            "efficiency": ""
          },
          {
            "name": "Silver 14 Packaged Heat Pump System",
            "model_image": "https://www.americanstandardair.com/_next/image/?url=https%3A%2F%2Flive-asa-headless-cms.pantheonsite.io%2Fwp-content%2Fuploads%2F2025%2F02%2FAMSD_ACHP-Packaged-Unit-_-Single-Phase-Only-300x240.png&w=3840&q=75",
            "efficiency": ""
          },
          {
            "name": "Silver 14 3-Phase Packaged Heat Pump System",
            "model_image": "https://www.americanstandardair.com/_next/image/?url=https%3A%2F%2Flive-asa-headless-cms.pantheonsite.io%2Fwp-content%2Fuploads%2F2025%2F02%2FAMSD-Heat-Pump-Packaged-Unit-1-300x226.png&w=3840&q=75",
            "efficiency": ""
          },
          {
            "name": "Silver 13.4 Packaged Heat Pump System",
            "model_image": "https://www.americanstandardair.com/_next/image/?url=https%3A%2F%2Flive-asa-headless-cms.pantheonsite.io%2Fwp-content%2Fuploads%2F2022%2F09%2Fsilver-14-packaged-heat-pump-system-262x300.png&w=3840&q=75",
            "efficiency": ""
          }
        ]
      },
      {
        "line": "Heat pumps",
        "product_line_image": "https://www.americanstandardair.com/products/heat-pumps/",
        "models": [
          {
            "name": "AccuComfort\u2122 Variable Speed Platinum 20 Heat Pump",
            "model_image": "https://www.americanstandardair.com/_next/image/?url=https%3A%2F%2Flive-asa-headless-cms.pantheonsite.io%2Fwp-content%2Fuploads%2F2022%2F10%2Faccucomfort-platinum-20-heat-pump-262x300.png&w=3840&q=75",
            "efficiency": ""
          },
          {
            "name": "AccuComfort\u2122 Variable Speed Platinum 19 Low Profile Heat Pump",
            "model_image": "https://www.americanstandardair.com/_next/image/?url=https%3A%2F%2Flive-asa-headless-cms.pantheonsite.io%2Fwp-content%2Fuploads%2F2022%2F09%2Faccucomfort-platinum-19-low-profile-heat-pump-1-262x300.png&w=3840&q=75",
            "efficiency": ""
          },
          {
            "name": "AccuComfort\u2122 Variable Speed Platinum 18 Heat Pump",
            "model_image": "https://www.americanstandardair.com/_next/image/?url=https%3A%2F%2Flive-asa-headless-cms.pantheonsite.io%2Fwp-content%2Fuploads%2F2022%2F10%2Faccucomfort-platinum-18-heat-pump-262x300.png&w=3840&q=75",
            "efficiency": ""
          },
          {
            "name": "AccuComfort\u2122 Variable Speed Platinum 17 Heat Pump",
            "model_image": "https://www.americanstandardair.com/_next/image/?url=https%3A%2F%2Flive-asa-headless-cms.pantheonsite.io%2Fwp-content%2Fuploads%2F2023%2F05%2Fplatinum-17-ac-hp-262x300.png&w=3840&q=75",
            "efficiency": ""
          },
          {
            "name": "Gold 17 Multi-Speed Heat Pump",
            "model_image": "https://www.americanstandardair.com/_next/image/?url=https%3A%2F%2Flive-asa-headless-cms.pantheonsite.io%2Fwp-content%2Fuploads%2F2025%2F01%2Fgold_17_hp-244x300.png&w=3840&q=75",
            "efficiency": ""
          },
          {
            "name": "Gold 16 Heat Pump",
            "model_image": "https://www.americanstandardair.com/_next/image/?url=https%3A%2F%2Flive-asa-headless-cms.pantheonsite.io%2Fwp-content%2Fuploads%2F2022%2F10%2Fgold-17-heat-pump-262x300.png&w=3840&q=75",
            "efficiency": ""
          },
          {
            "name": "Silver 15 Heat Pump",
            "model_image": "https://www.americanstandardair.com/_next/image/?url=https%3A%2F%2Flive-asa-headless-cms.pantheonsite.io%2Fwp-content%2Fuploads%2F2022%2F09%2FSilver-15-HP-246x300.png&w=3840&q=75",
            "efficiency": ""
          },
          {
            "name": "Silver 14 Heat Pump",
            "model_image": "https://www.americanstandardair.com/_next/image/?url=https%3A%2F%2Flive-asa-headless-cms.pantheonsite.io%2Fwp-content%2Fuploads%2F2022%2F09%2Fsilver_14_hp-248x300.jpeg&w=3840&q=75",
            "efficiency": ""
          },
          {
            "name": "Silver 16 Side Discharge Heat Pump",
            "model_image": "https://www.americanstandardair.com/_next/image/?url=https%3A%2F%2Flive-asa-headless-cms.pantheonsite.io%2Fwp-content%2Fuploads%2F2025%2F02%2FAMSD_premium-2-scaled-e1739986675733-300x300.jpg&w=3840&q=75",
            "efficiency": ""
          },
          {
            "name": "Silver 15 Low Profile Heat Pump",
            "model_image": "https://www.americanstandardair.com/_next/image/?url=https%3A%2F%2Flive-asa-headless-cms.pantheonsite.io%2Fwp-content%2Fuploads%2F2022%2F09%2Fsilver-16-low-profile-heat-pump-262x300.png&w=3840&q=75",
            "efficiency": ""
          },
          {
            "name": "All Weather\u00ae Top Accessory \u2013 HP",
            "model_image": "https://www.americanstandardair.com/_next/image/?url=https%3A%2F%2Flive-asa-headless-cms.pantheonsite.io%2Fwp-content%2Fuploads%2F2022%2F10%2Fall-weather-top-accessory-262x300.png&w=3840&q=75",
            "efficiency": ""
          }
        ]
      },
      {
        "line": "Humidity control",
        "product_line_image": "https://www.americanstandardair.com/products/indoor-air-quality/humidity-control/",
        "models": [
          {
            "name": "Silver Humidifier",
            "model_image": "https://www.americanstandardair.com/_next/image/?url=https%3A%2F%2Flive-asa-headless-cms.pantheonsite.io%2Fwp-content%2Fuploads%2F2022%2F10%2Famerican-standard-silver-humidifier-340x290-1-300x256.png&w=3840&q=75",
            "efficiency": ""
          },
          {
            "name": "Gold Humidifier",
            "model_image": "https://www.americanstandardair.com/_next/image/?url=https%3A%2F%2Flive-asa-headless-cms.pantheonsite.io%2Fwp-content%2Fuploads%2F2022%2F10%2Famerican-standard-gold-humidifier-302x300-1-300x298.png&w=3840&q=75",
            "efficiency": ""
          },
          {
            "name": "Whole Home Dehumidifier with Optional Ventilation",
            "model_image": "https://www.americanstandardair.com/_next/image/?url=https%3A%2F%2Flive-asa-headless-cms.pantheonsite.io%2Fwp-content%2Fuploads%2F2022%2F10%2FUA98sideangle_noIRlogo_AMST-Transparent-300x263.png&w=3840&q=75",
            "efficiency": ""
          },
          {
            "name": "Platinum Steam Humidifier",
            "model_image": "https://www.americanstandardair.com/_next/image/?url=https%3A%2F%2Flive-asa-headless-cms.pantheonsite.io%2Fwp-content%2Fuploads%2F2022%2F11%2Fplatinum-steam-humidifier-american-standard-small-209x300.png&w=3840&q=75",
            "efficiency": ""
          },
          {
            "name": "Platinum Humidifier",
            "model_image": "https://www.americanstandardair.com/_next/image/?url=https%3A%2F%2Flive-asa-headless-cms.pantheonsite.io%2Fwp-content%2Fuploads%2F2022%2F10%2Fplatinum-humidifier-262x300.png&w=3840&q=75",
            "efficiency": ""
          }
        ]
      },
      {
        "line": "Hybrid Dual Fuel Systems",
        "product_line_image": "https://www.americanstandardair.com/products/packaged-system/hybrid-comfort-systems/",
        "models": [
          {
            "name": "Gold 15 EarthWise\u2122 Packaged Hybrid",
            "model_image": "https://www.americanstandardair.com/_next/image/?url=https%3A%2F%2Flive-asa-headless-cms.pantheonsite.io%2Fwp-content%2Fuploads%2F2022%2F10%2F3AMSD-Premium-Only-5YCC4-5YCZ5-5DCZ5-1-1-300x230.png&w=3840&q=75",
            "efficiency": ""
          }
        ]
      },
      {
        "line": "Light Commercial Products",
        "product_line_image": "https://www.americanstandardair.com/products/light-commercial/",
        "models": [
          {
            "name": "Voyager\u00ae Packaged Unit",
            "model_image": "https://www.americanstandardair.com/_next/image/?url=https%3A%2F%2Flive-asa-headless-cms.pantheonsite.io%2Fwp-content%2Fuploads%2F2022%2F10%2Fvoyager-packaged-unit-262x300.png&w=3840&q=75",
            "efficiency": ""
          },
          {
            "name": "Precedent Packaged Unit",
            "model_image": "https://www.americanstandardair.com/_next/image/?url=https%3A%2F%2Flive-asa-headless-cms.pantheonsite.io%2Fwp-content%2Fuploads%2F2022%2F10%2Fprecedent-packaged-unit-262x300.png&w=3840&q=75",
            "efficiency": ""
          },
          {
            "name": "Odyssey\u2122 Split Systems",
            "model_image": "https://www.americanstandardair.com/_next/image/?url=https%3A%2F%2Flive-asa-headless-cms.pantheonsite.io%2Fwp-content%2Fuploads%2F2022%2F10%2Fodyssey-split-systems-300x256.png&w=3840&q=75",
            "efficiency": ""
          }
        ]
      },
      {
        "line": "Multi-zone ductless",
        "product_line_image": "https://www.americanstandardair.com/products/ductless/multi-zone/",
        "models": [
          {
            "name": "NAXMMX Outdoor Units",
            "model_image": "https://www.americanstandardair.com/_next/image/?url=https%3A%2F%2Flive-asa-headless-cms.pantheonsite.io%2Fwp-content%2Fuploads%2F2022%2F10%2FNAXMMX-Outdoor-Unit-American-Standard-262x300.png&w=3840&q=75",
            "efficiency": ""
          },
          {
            "name": "NAXUKS One-Way Ceiling Cassette Multi Zone Heat Pump",
            "model_image": "https://www.americanstandardair.com/_next/image/?url=https%3A%2F%2Flive-asa-headless-cms.pantheonsite.io%2Fwp-content%2Fuploads%2F2022%2F10%2Fnaxuks-cassette-multi-zone-heat-pump-262x300.png&w=3840&q=75",
            "efficiency": ""
          },
          {
            "name": "NAXCKS Ceiling Cassette Multi Zone Heat Pumps",
            "model_image": "https://www.americanstandardair.com/_next/image/?url=https%3A%2F%2Flive-asa-headless-cms.pantheonsite.io%2Fwp-content%2Fuploads%2F2022%2F10%2Fnaxcks-ceiling-cassette-multi-zone-heat-pump-262x300.png&w=3840&q=75",
            "efficiency": ""
          },
          {
            "name": "NAXFKS Multi Zone Floor-Mounted Heat Pumps",
            "model_image": "https://www.americanstandardair.com/_next/image/?url=https%3A%2F%2Flive-asa-headless-cms.pantheonsite.io%2Fwp-content%2Fuploads%2F2022%2F10%2Fnaxfks-floor-mounted-multi-zone-heat-pump-262x300.png&w=3840&q=75",
            "efficiency": ""
          },
          {
            "name": "NAXWPH Multi Zone High-Efficiency Heat Pumps",
            "model_image": "https://www.americanstandardair.com/_next/image/?url=https%3A%2F%2Flive-asa-headless-cms.pantheonsite.io%2Fwp-content%2Fuploads%2F2022%2F10%2Fnaxwph-multi-zone-high-efficiency-heat-pump-262x300.png&w=3840&q=75",
            "efficiency": ""
          },
          {
            "name": "PEAD Horizontal-Ducted Multi Zone Heat Pumps",
            "model_image": "https://www.americanstandardair.com/_next/image/?url=https%3A%2F%2Flive-asa-headless-cms.pantheonsite.io%2Fwp-content%2Fuploads%2F2022%2F10%2Fpead-horizontal-ducted-multi-zone-heat-pumps-262x300.png&w=3840&q=75",
            "efficiency": ""
          },
          {
            "name": "NAXDKS Horizontal-Ducted Multi Zone Heat Pumps",
            "model_image": "https://www.americanstandardair.com/_next/image/?url=https%3A%2F%2Flive-asa-headless-cms.pantheonsite.io%2Fwp-content%2Fuploads%2F2022%2F10%2Fnaxdks-horizontal-ducted-multi-zone-heat-pump-262x300.png&w=3840&q=75",
            "efficiency": ""
          }
        ]
      },
      {
        "line": "Single-zone ductless",
        "product_line_image": "https://www.americanstandardair.com/products/ductless/single-zone/",
        "models": [
          {
            "name": "4MXC8 Cassette Indoor Unit",
            "model_image": "https://www.americanstandardair.com/_next/image/?url=https%3A%2F%2Flive-asa-headless-cms.pantheonsite.io%2Fwp-content%2Fuploads%2F2022%2F10%2F4MXC8-cassette-indoor-ductless-hvac-unit-262x300.png&w=3840&q=75",
            "efficiency": ""
          },
          {
            "name": "NAXCKS Ceiling Cassette Heat Pumps",
            "model_image": "https://www.americanstandardair.com/_next/image/?url=https%3A%2F%2Flive-asa-headless-cms.pantheonsite.io%2Fwp-content%2Fuploads%2F2022%2F10%2Fnaxcks-ceiling-cassette-ductless-heat-pump-262x300.png&w=3840&q=75",
            "efficiency": ""
          },
          {
            "name": "NAXFKS Floor-Mounted Outdoor Heat Pumps",
            "model_image": "https://www.americanstandardair.com/_next/image/?url=https%3A%2F%2Flive-asa-headless-cms.pantheonsite.io%2Fwp-content%2Fuploads%2F2022%2F10%2Fnaxfks-floor-mounted-outdoor-heat-pumps-262x300.png&w=3840&q=75",
            "efficiency": ""
          },
          {
            "name": "NAXFKS Floor-Mounted Heat Pumps",
            "model_image": "https://www.americanstandardair.com/_next/image/?url=https%3A%2F%2Flive-asa-headless-cms.pantheonsite.io%2Fwp-content%2Fuploads%2F2022%2F10%2Fnaxfks-floor-mounted-heat-pump-262x300.png&w=3840&q=75",
            "efficiency": ""
          },
          {
            "name": "NAXSST Outdoor Heat Pumps",
            "model_image": "https://www.americanstandardair.com/_next/image/?url=https%3A%2F%2Flive-asa-headless-cms.pantheonsite.io%2Fwp-content%2Fuploads%2F2022%2F10%2Fnaxsst-outdoor-heat-pumps-262x300.png&w=3840&q=75",
            "efficiency": ""
          },
          {
            "name": "NAYSST Air Conditioner Outdoor Unit",
            "model_image": "https://www.americanstandardair.com/_next/image/?url=https%3A%2F%2Flive-asa-headless-cms.pantheonsite.io%2Fwp-content%2Fuploads%2F2022%2F10%2Fnaysst-air-conditioner-outdoor-unit-262x300.png&w=3840&q=75",
            "efficiency": ""
          },
          {
            "name": "NAXSPB Outdoor Heat Pumps",
            "model_image": "https://www.americanstandardair.com/_next/image/?url=https%3A%2F%2Flive-asa-headless-cms.pantheonsite.io%2Fwp-content%2Fuploads%2F2022%2F10%2Fnaxspb-outdoor-heat-pump-262x300.png&w=3840&q=75",
            "efficiency": ""
          },
          {
            "name": "NAXSMT Pro Line Outdoor Heat Pumps",
            "model_image": "https://www.americanstandardair.com/_next/image/?url=https%3A%2F%2Flive-asa-headless-cms.pantheonsite.io%2Fwp-content%2Fuploads%2F2022%2F10%2Fnaxsmt-pro-line-outdoor-heat-pump-262x300.png&w=3840&q=75",
            "efficiency": ""
          },
          {
            "name": "NAXSKS Outdoor Heat Pumps",
            "model_image": "https://www.americanstandardair.com/_next/image/?url=https%3A%2F%2Flive-asa-headless-cms.pantheonsite.io%2Fwp-content%2Fuploads%2F2022%2F10%2Fnaxsks-outdoor-heat-pump-262x300.png&w=3840&q=75",
            "efficiency": ""
          },
          {
            "name": "NAXAMT Ducted Air Handler",
            "model_image": "https://www.americanstandardair.com/_next/image/?url=https%3A%2F%2Flive-asa-headless-cms.pantheonsite.io%2Fwp-content%2Fuploads%2F2022%2F10%2Fnaxamt-ducted-air-handler-262x300.png&w=3840&q=75",
            "efficiency": ""
          },
          {
            "name": "NAXDKS Horizontal-Ducted Heat Pumps",
            "model_image": "https://www.americanstandardair.com/_next/image/?url=https%3A%2F%2Flive-asa-headless-cms.pantheonsite.io%2Fwp-content%2Fuploads%2F2022%2F10%2Fnaxdks-horizontal-ducted-heat-pump-262x300.png&w=3840&q=75",
            "efficiency": ""
          },
          {
            "name": "PEAD Horizontal-Ducted Heat Pumps",
            "model_image": "https://www.americanstandardair.com/_next/image/?url=https%3A%2F%2Flive-asa-headless-cms.pantheonsite.io%2Fwp-content%2Fuploads%2F2022%2F10%2Fpead-horizontal-ducted-heat-pumps-262x300.png&w=3840&q=75",
            "efficiency": ""
          },
          {
            "name": "NAXWMT Pro Line Heat Pumps",
            "model_image": "https://www.americanstandardair.com/_next/image/?url=https%3A%2F%2Flive-asa-headless-cms.pantheonsite.io%2Fwp-content%2Fuploads%2F2022%2F10%2Fnaxwst-pro-line-heat-pump-262x300.png&w=3840&q=75",
            "efficiency": ""
          },
          {
            "name": "NAXWST Heat Pumps",
            "model_image": "https://www.americanstandardair.com/_next/image/?url=https%3A%2F%2Flive-asa-headless-cms.pantheonsite.io%2Fwp-content%2Fuploads%2F2022%2F10%2Fnaxwst-heat-pump-single-zone-262x300.png&w=3840&q=75",
            "efficiency": ""
          },
          {
            "name": "NAXWPH High Efficiency Heat Pumps",
            "model_image": "https://www.americanstandardair.com/_next/image/?url=https%3A%2F%2Flive-asa-headless-cms.pantheonsite.io%2Fwp-content%2Fuploads%2F2022%2F10%2Fnaxwph-multi-zone-high-efficiency-heat-pump-262x300.png&w=3840&q=75",
            "efficiency": ""
          },
          {
            "name": "MSZ-EF Designer Heat Pumps",
            "model_image": "https://www.americanstandardair.com/_next/image/?url=https%3A%2F%2Flive-asa-headless-cms.pantheonsite.io%2Fwp-content%2Fuploads%2F2022%2F10%2Fmsz-ef-designer-heat-pump-262x300.png&w=3840&q=75",
            "efficiency": ""
          },
          {
            "name": "NAXWST Wall-Mounted Heat Pumps",
            "model_image": "https://www.americanstandardair.com/_next/image/?url=https%3A%2F%2Flive-asa-headless-cms.pantheonsite.io%2Fwp-content%2Fuploads%2F2022%2F10%2Fnaxwst-heat-pump-single-zone-262x300.png&w=3840&q=75",
            "efficiency": ""
          },
          {
            "name": "NAY Air Conditioner",
            "model_image": "https://www.americanstandardair.com/_next/image/?url=https%3A%2F%2Flive-asa-headless-cms.pantheonsite.io%2Fwp-content%2Fuploads%2F2022%2F10%2Fnay-air-conditioner-262x300.png&w=3840&q=75",
            "efficiency": ""
          }
        ]
      },
      {
        "line": "Smart thermostats",
        "product_line_image": "https://www.americanstandardair.com/products/thermostat-controls/smart-thermostats/",
        "models": [
          {
            "name": "American Standard Link UX360",
            "model_image": "https://www.americanstandardair.com/_next/image/?url=https%3A%2F%2Flive-asa-headless-cms.pantheonsite.io%2Fwp-content%2Fuploads%2F2022%2F10%2FUX360-Smart-Thermostat-American-Standard-262x300.jpg&w=3840&q=75",
            "efficiency": ""
          },
          {
            "name": "AccuLink\u2122 Platinum 1050",
            "model_image": "https://www.americanstandardair.com/_next/image/?url=https%3A%2F%2Flive-asa-headless-cms.pantheonsite.io%2Fwp-content%2Fuploads%2F2022%2F10%2FAccuLink-Platinum-1050-Control-262x300.png&w=3840&q=75",
            "efficiency": ""
          },
          {
            "name": "AccuLink\u2122 Platinum 850",
            "model_image": "https://www.americanstandardair.com/_next/image/?url=https%3A%2F%2Flive-asa-headless-cms.pantheonsite.io%2Fwp-content%2Fuploads%2F2022%2F10%2FAccuLink-Platinum-850-smart-thermostat-control-262x300.png&w=3840&q=75",
            "efficiency": ""
          },
          {
            "name": "Gold 824",
            "model_image": "https://www.americanstandardair.com/_next/image/?url=https%3A%2F%2Flive-asa-headless-cms.pantheonsite.io%2Fwp-content%2Fuploads%2F2022%2F10%2FGold-824-smart-thermostat-by-American-Standard-e1665001620232-300x237.png&w=3840&q=75",
            "efficiency": ""
          },
          {
            "name": "Silver 724",
            "model_image": "https://www.americanstandardair.com/_next/image/?url=https%3A%2F%2Flive-asa-headless-cms.pantheonsite.io%2Fwp-content%2Fuploads%2F2022%2F10%2Fsilver-724-smart-thermostat-control-262x300.png&w=3840&q=75",
            "efficiency": ""
          }
        ]
      },
      {
        "line": "Traditional thermostats",
        "product_line_image": "https://www.americanstandardair.com/products/thermostat-controls/traditional-thermostats/",
        "models": [
          {
            "name": "Silver 302",
            "model_image": "https://www.americanstandardair.com/_next/image/?url=https%3A%2F%2Flive-asa-headless-cms.pantheonsite.io%2Fwp-content%2Fuploads%2F2022%2F10%2Fsilver-302-thermostat-control-262x300.png&w=3840&q=75",
            "efficiency": ""
          },
          {
            "name": "Silver 303",
            "model_image": "https://www.americanstandardair.com/_next/image/?url=https%3A%2F%2Flive-asa-headless-cms.pantheonsite.io%2Fwp-content%2Fuploads%2F2022%2F10%2Fsilver-303-traditional-thermostat-control-asa-262x300.png&w=3840&q=75",
            "efficiency": ""
          },
          {
            "name": "Silver 203",
            "model_image": "https://www.americanstandardair.com/_next/image/?url=https%3A%2F%2Flive-asa-headless-cms.pantheonsite.io%2Fwp-content%2Fuploads%2F2022%2F10%2Fsilver-203-traditional-thermostat-control-american-standard-262x300.png&w=3840&q=75",
            "efficiency": ""
          },
          {
            "name": "Silver 102",
            "model_image": "https://www.americanstandardair.com/_next/image/?url=https%3A%2F%2Flive-asa-headless-cms.pantheonsite.io%2Fwp-content%2Fuploads%2F2022%2F10%2Fsilver-102-thermostat-control-262x300.png&w=3840&q=75",
            "efficiency": ""
          },
          {
            "name": "Silver 202",
            "model_image": "https://www.americanstandardair.com/_next/image/?url=https%3A%2F%2Flive-asa-headless-cms.pantheonsite.io%2Fwp-content%2Fuploads%2F2022%2F10%2Fsilver-203-traditional-thermostat-control-american-standard-262x300.png&w=3840&q=75",
            "efficiency": ""
          }
        ]
      },
      {
        "line": "Ventilation",
        "product_line_image": "https://www.americanstandardair.com/products/indoor-air-quality/ventilation/",
        "models": [
          {
            "name": "Premium Energy Recovery Ventilator",
            "model_image": "https://www.americanstandardair.com/_next/image/?url=https%3A%2F%2Flive-asa-headless-cms.pantheonsite.io%2Fwp-content%2Fuploads%2F2025%2F05%2Fpremium-energy-recovery-ventilator-300x300.jpg&w=3840&q=75",
            "efficiency": ""
          },
          {
            "name": "Inline Ventilator",
            "model_image": "https://www.americanstandardair.com/_next/image/?url=https%3A%2F%2Flive-asa-headless-cms.pantheonsite.io%2Fwp-content%2Fuploads%2F2022%2F10%2Famerican-standard-inline-ventilator-240x300.png&w=3840&q=75",
            "efficiency": ""
          },
          {
            "name": "Energy Recovery Ventilator",
            "model_image": "https://www.americanstandardair.com/_next/image/?url=https%3A%2F%2Flive-asa-headless-cms.pantheonsite.io%2Fwp-content%2Fuploads%2F2022%2F10%2Fenergy-recovery-ventilator-2x-262x300.png&w=3840&q=75",
            "efficiency": ""
          }
        ]
      },
      {
        "line": "Zoning",
        "product_line_image": "https://www.americanstandardair.com/products/zoning/",
        "models": [
          {
            "name": "American Standard Link Zoning",
            "model_image": "https://www.americanstandardair.com/_next/image/?url=https%3A%2F%2Flive-asa-headless-cms.pantheonsite.io%2Fwp-content%2Fuploads%2F2023%2F10%2FAMSD_zoning-graphic-300x170.png&w=3840&q=75",
            "efficiency": ""
          },
          {
            "name": "AccuLink\u2122 Zoning Systems",
            "model_image": "https://www.americanstandardair.com/_next/image/?url=https%3A%2F%2Flive-asa-headless-cms.pantheonsite.io%2Fwp-content%2Fuploads%2F2022%2F10%2Facculink-zoning-system-from-american-standard-300x170.png&w=3840&q=75",
            "efficiency": ""
          }
        ]
      }
    ]
  },
  {
    "brand": "Carrier",
    "logo": "/logos/Carrier.png",
    "productLines": [
      {
        "line": "Air Conditioners",
        "product_line_image": "https://images.carriercms.com/image/upload/w_auto,c_lfill,q_auto,f_auto/v1600779553/carrier/residential-hvac/products/air-conditioners/infinity-26-greenspeed-air-conditioner-24vna6-cropped.png",
        "models": [
          {
            "name": "26VNA1 - Infinity\u00aeVariable-Speed Central Air Conditioner with Greenspeed\u00aeIntelligence",
            "model_image": "https://images.carriercms.com/image/upload/w_auto,c_lfill,q_auto,f_auto/v1739906493/carrier/residential-hvac/products/air-conditioners/infinity-variable-speed-ac-unit-26vna1.png",
            "efficiency": "Up to 21"
          },
          {
            "name": "26TPA8 - Performance\u2122 2-Stage Air Conditioner",
            "model_image": "https://images.carriercms.com/image/upload/w_auto,c_lfill,q_auto,f_auto/v1739220470/carrier/residential-hvac/products/air-conditioners/performance-17-2-stage-air-conditioner-26TPA8.png",
            "efficiency": "Up to 18"
          },
          {
            "name": "26TPA8***C - Performance\u2122 2-Stage Coastal Air Conditioner",
            "model_image": "https://images.carriercms.com/image/upload/w_auto,c_lfill,q_auto,f_auto/v1739220470/carrier/residential-hvac/products/air-conditioners/performance-17-2-stage-air-conditioner-26TPA8.png",
            "efficiency": "Up to 18"
          },
          {
            "name": "26SPA6 - Performance\u2122 Air Conditioner with InteliSense\u2122 Technology",
            "model_image": "https://images.carriercms.com/image/upload/w_auto,c_lfill,q_auto,f_auto/v1739220362/carrier/residential-hvac/products/air-conditioners/performance-air-conditioner-with-intelisense-technology-26SPA6.png",
            "efficiency": "Up to 16.5"
          },
          {
            "name": "26SCA5 - Comfort\u2122 Air Conditioner",
            "model_image": "https://images.carriercms.com/image/upload/w_auto,c_lfill,q_auto,f_auto/v1739220355/carrier/residential-hvac/products/air-conditioners/comfort-air-conditioner-26SCA5.png",
            "efficiency": "Up to 16.5"
          },
          {
            "name": "26SCA5***C - Comfort\u2122 Coastal Air Conditioner",
            "model_image": "https://images.carriercms.com/image/upload/w_auto,c_lfill,q_auto,f_auto/v1739220357/carrier/residential-hvac/products/air-conditioners/comfort-coastal-air-conditioner-26SCA5---c.png",
            "efficiency": "Up to 16.5"
          },
          {
            "name": "26SCA4 - Comfort\u2122 Central Air Conditioner",
            "model_image": "https://images.carriercms.com/image/upload/w_auto,c_lfill,q_auto,f_auto/v1739220449/carrier/residential-hvac/products/air-conditioners/comfort-14-central-air-conditioner-26SCA4.png",
            "efficiency": "Up to 16"
          }
        ]
      },
      {
        "line": "Boilers",
        "product_line_image": "https://images.carriercms.com/image/upload/w_auto,c_lfill,q_auto,f_auto/v1600779257/carrier/residential-hvac/products/boilers/performance-95-gas-boiler-bwm-cropped.png",
        "models": [
          {
            "name": "BW5 - Performance\u2122\u00a086 Oil Boiler",
            "model_image": "https://images.carriercms.com/image/upload/w_auto,c_lfill,q_auto,f_auto/v1571606504/carrier/residential-hvac/products/boilers/performance-86-oil-fired-boiler-BW5.png",
            "efficiency": ""
          },
          {
            "name": "BW4 - Performance\u2122\u00a086 Oil Boiler",
            "model_image": "https://images.carriercms.com/image/upload/w_auto,c_lfill,q_auto,f_auto/v1599154225/carrier/residential-hvac/products/boilers/performance-86-oil-fired-boiler-BW4.png",
            "efficiency": ""
          },
          {
            "name": "BW3 - Performance\u2122\u00a084 Gas Boiler",
            "model_image": "https://images.carriercms.com/image/upload/w_auto,c_lfill,q_auto,f_auto/v1599154225/carrier/residential-hvac/products/boilers/performance-84-gas-fired-boiler-BW3.png",
            "efficiency": ""
          },
          {
            "name": "BS2 - Comfort\u2122\u00a080 Gas Boiler",
            "model_image": "https://images.carriercms.com/image/upload/w_auto,c_lfill,q_auto,f_auto/v1599154228/carrier/residential-hvac/products/boilers/comfort-80-gas-fired-boiler-BS2.png",
            "efficiency": ""
          },
          {
            "name": "BWB - Comfort\u2122\u00a084 Gas Boiler",
            "model_image": "https://images.carriercms.com/image/upload/w_auto,c_lfill,q_auto,f_auto/v1654093455/carrier/residential-hvac/products/boilers/comfort-82-gas-fired-boiler-BWB.png",
            "efficiency": ""
          }
        ]
      },
      {
        "line": "Carrier Opti-V",
        "product_line_image": "https://images.carriercms.com/image/upload/w_auto,c_lfill,q_auto,f_auto/v1635455209/carrier/residential-hvac/products/variable-refrigerant-flow/carrier-vrf-cropped.png",
        "models": [
          {
            "name": "37VMH-1P - Opti-V Heat Pump",
            "model_image": "https://images.carriercms.com/image/upload/w_auto,c_lfill,q_auto,f_auto/v1744388510/carrier/residential-hvac/products/variable-refrigerant-flow/carrier-37VMB-vrf-single-phase-heat-pump.png",
            "efficiency": ""
          },
          {
            "name": "45VMW - High Wall",
            "model_image": "https://images.carriercms.com/image/upload/w_auto,c_lfill,q_auto,f_auto/v1744387918/carrier/residential-hvac/products/variable-refrigerant-flow/carrier-45vmw-7-12k-high-wall-indoor-unit.png",
            "efficiency": ""
          },
          {
            "name": "45VMC - Compact 4-Way Cassette",
            "model_image": "https://images.carriercms.com/image/upload/w_auto,c_lfill,q_auto,f_auto/v1744387669/carrier/residential-hvac/products/variable-refrigerant-flow/carrier-45vmc-compact-4-way-cassette-indoor-unit.png",
            "efficiency": ""
          },
          {
            "name": "45VMF - 4-Way Cassette",
            "model_image": "https://images.carriercms.com/image/upload/w_auto,c_lfill,q_auto,f_auto/v1744390206/carrier/residential-hvac/products/variable-refrigerant-flow/carrier-45vmf-4-way-cassette-indoor-unit.png",
            "efficiency": ""
          },
          {
            "name": "45VMV - Vertical Air Handler Unit",
            "model_image": "https://images.carriercms.com/image/upload/w_auto,c_lfill,q_auto,f_auto/v1744389137/carrier/residential-hvac/products/variable-refrigerant-flow/carrier-45vmv-vertical-air-handling-unit.png",
            "efficiency": ""
          },
          {
            "name": "45VMM - Medium Static Duct",
            "model_image": "https://images.carriercms.com/image/upload/w_auto,c_lfill,q_auto,f_auto/v1744388926/carrier/residential-hvac/products/variable-refrigerant-flow/carrier-45vmm-7-9k-medium-static-duct-indoor-unit.png",
            "efficiency": ""
          },
          {
            "name": "45VML - Low Static Duct",
            "model_image": "https://images.carriercms.com/image/upload/w_auto,c_lfill,q_auto,f_auto/v1744388728/carrier/residential-hvac/products/variable-refrigerant-flow/carrier-45vml-7-12k-low-static-duct-indoor-unit.png",
            "efficiency": ""
          },
          {
            "name": "40VMH - High Static Duct",
            "model_image": "https://images.carriercms.com/image/upload/w_auto,c_lfill,q_auto,f_auto/v1626120080/carrier/residential-hvac/products/variable-refrigerant-flow/carrier-40vmh-high-static-duct-indoor-unit.png",
            "efficiency": ""
          },
          {
            "name": "40VMI - One-Way Cassette",
            "model_image": "https://images.carriercms.com/image/upload/w_auto,c_lfill,q_auto,f_auto/v1635455828/carrier/residential-hvac/products/variable-refrigerant-flow/carrier-40vmi-one-way-cassette-5-12k.png",
            "efficiency": ""
          },
          {
            "name": "40VMR - Floor Console - Recesse",
            "model_image": "https://images.carriercms.com/image/upload/w_auto,c_lfill,q_auto,f_auto/v1626286545/carrier/residential-hvac/products/variable-refrigerant-flow/carrier-40vmr-7-9k-floor-console-recessed-indoor-unit.png",
            "efficiency": ""
          },
          {
            "name": "40VMU - Underceiling / Floor Console - Exposed",
            "model_image": "https://images.carriercms.com/image/upload/w_auto,c_lfill,q_auto,f_auto/v1626120081/carrier/residential-hvac/products/variable-refrigerant-flow/carrier-40vmu-12-24k-underceiling-indoor-unit.png",
            "efficiency": ""
          }
        ]
      },
      {
        "line": "Crossover Solutions",
        "product_line_image": "https://images.carriercms.com/image/upload/w_auto,c_lfill,q_auto,f_auto/v1739196908/carrier/residential-hvac/products/crossover-solutions/Crossover-Solutions-grid-page.png",
        "models": [
          {
            "name": "37MURA - Comfort\u2122 18 Compact Mini Split Crossover Heat Pump",
            "model_image": "https://images.carriercms.com/image/upload/w_auto,c_lfill,q_auto,f_auto/v1734538011/carrier/residential-hvac/products/crossover-solutions/performance-18-compact-crossover-heat-pump-37MURA.png",
            "efficiency": "Up to 18.8"
          },
          {
            "name": "37MUHA - Performance\u2122 Crossover Heat Pump",
            "model_image": "https://images.carriercms.com/image/upload/w_auto,c_lfill,q_auto,f_auto/v1734537085/carrier/residential-hvac/products/crossover-solutions/performance-18-compact--heat-pump-37MUHA.png",
            "efficiency": "Up to 19"
          },
          {
            "name": "45MUAA - Comfort\u2122 Crossover Air Handler Unit",
            "model_image": "https://images.carriercms.com/image/upload/w_auto,c_lfill,q_auto,f_auto/v1734538252/carrier/residential-hvac/products/crossover-solutions/air-handler-crossover-system-45MUAA.png",
            "efficiency": ""
          },
          {
            "name": "45MUHA - Performance\u2122\u00a0Crossover Air Handler Unit",
            "model_image": "https://images.carriercms.com/image/upload/w_auto,c_lfill,q_auto,f_auto/v1734537637/carrier/residential-hvac/products/crossover-solutions/air-handler-crossover-system-45MUHA.png",
            "efficiency": ""
          },
          {
            "name": "45MULA - Performance\u2122 Multipoise Crossover Evaporator Coil",
            "model_image": "https://images.carriercms.com/image/upload/w_auto,c_lfill,q_auto,f_auto/v1734537406/carrier/residential-hvac/products/crossover-solutions/multipoise-cased-a-evaporator-coil-45mula.png",
            "efficiency": ""
          }
        ]
      },
      {
        "line": "Ductless Systems",
        "product_line_image": "https://images.carriercms.com/image/upload/w_auto,c_lfill,q_auto,f_auto/v1595521864/carrier/residential-hvac/products/ductless/performance-heat-pump-38mar-cropped.png",
        "models": [
          {
            "name": "37MPRA - Infinity\u00ae Mini Split Heat Pump with Basepan Heater",
            "model_image": "https://images.carriercms.com/image/upload/w_auto,c_lfill,q_auto,f_auto/v1731006474/carrier/residential-hvac/products/ductless/infinity-mini-split-heat-pump-with-basepan-heater-37MPRA.png",
            "efficiency": ""
          },
          {
            "name": "37MAHA - Infinity\u00ae Mini Split Heat Pump",
            "model_image": "https://images.carriercms.com/image/upload/w_auto,c_lfill,q_auto,f_auto/v1731007688/carrier/residential-hvac/products/ductless/performance-series-mini-split-heat-pump-37MAHA.png",
            "efficiency": ""
          },
          {
            "name": "37MGHA - Infinity\u00aeMulti-Zone High-Heat Mini Split Heat Pump with Basepan Heater",
            "model_image": "https://images.carriercms.com/image/upload/w_auto,c_lfill,q_auto,f_auto/v1731007042/carrier/residential-hvac/products/ductless/infinity-multi-zone-mini-split-heat-pump-with-basepan-heater-37MGHA.png",
            "efficiency": ""
          },
          {
            "name": "45MPHA - Infinity\u00ae High Wall Indoor Unit",
            "model_image": "https://images.carriercms.com/image/upload/w_auto,c_lfill,q_auto,f_auto/v1724347416/carrier/residential-hvac/products/ductless/infinity-high-wall-indoor-unit-45MPHA.png",
            "efficiency": ""
          },
          {
            "name": "37MBHA - Infinity\u00ae Light Commercial Mini Split Heat Pump",
            "model_image": "https://images.carriercms.com/image/upload/w_auto,c_lfill,q_auto,f_auto/v1731005940/carrier/residential-hvac/products/ductless/performance-single-zone-mini-split-heat-pump-37MBHAQ.png",
            "efficiency": ""
          },
          {
            "name": "37MARA - Performance\u2122 Mini Split Heat Pump",
            "model_image": "https://images.carriercms.com/image/upload/w_auto,c_lfill,q_auto,f_auto/v1731007688/carrier/residential-hvac/products/ductless/performance-series-mini-split-heat-pump-37MARAQ.png",
            "efficiency": ""
          },
          {
            "name": "37MBRA - Performance\u2122 Single-Zone Light Commercial Mini Split Heat Pump",
            "model_image": "https://images.carriercms.com/image/upload/w_auto,c_lfill,q_auto,f_auto/v1731006469/carrier/residential-hvac/products/ductless/performance-single-zone-mini-split-heat-pump-37MBRA.png",
            "efficiency": ""
          },
          {
            "name": "37MGRA - Performance\u2122 Multi-Zone Mini Split Heat Pump with Basepan Heater",
            "model_image": "https://images.carriercms.com/image/upload/w_auto,c_lfill,q_auto,f_auto/v1731006482/carrier/residential-hvac/products/ductless/performance-multi-zone-mini-split-heat-pump-with-basepan-heater-37MGRA.png",
            "efficiency": ""
          },
          {
            "name": "45MAHA - Performance\u2122 High Wall Indoor Unit",
            "model_image": "https://images.carriercms.com/image/upload/w_auto,c_lfill,q_auto,f_auto/v1717505025/carrier/residential-hvac/products/ductless/performance-high-wall-indoor-unit-45MAHA.png",
            "efficiency": ""
          },
          {
            "name": "45MCFA - Performance\u2122 Ceiling And Floor Console Indoor Unit",
            "model_image": "https://images.carriercms.com/image/upload/w_auto,c_lfill,q_auto,f_auto/v1731006156/carrier/residential-hvac/products/ductless/performance-floor-console-ductless-mini-split-indoor-unit-45MCFAQ.png",
            "efficiency": ""
          },
          {
            "name": "45MBFA - Performance\u2122 Floor Console Indoor Unit",
            "model_image": "https://images.carriercms.com/image/upload/w_auto,c_lfill,q_auto,f_auto/v1727113575/carrier/residential-hvac/products/ductless/performance-floor-console-indoor-unit-45MBFAQ.png",
            "efficiency": ""
          },
          {
            "name": "45MBDA - Performance\u2122\u00a0 Ducted Indoor Unit",
            "model_image": "https://images.carriercms.com/image/upload/w_auto,c_lfill,q_auto,f_auto/v1731006035/carrier/residential-hvac/products/ductless/ducted-mini-split-indoor-unit-45MBDAQ.png",
            "efficiency": ""
          },
          {
            "name": "45MCCA - Performance\u2122 One Way Cassette Indoor Unit",
            "model_image": "https://images.carriercms.com/image/upload/w_auto,c_lfill,q_auto,f_auto/v1731006029/carrier/residential-hvac/products/ductless/performance-one-way-ductless-mini-split-cassette-45MCCA.png",
            "efficiency": ""
          },
          {
            "name": "45MBCA - Performance\u2122 Cassette Indoor Unit",
            "model_image": "https://images.carriercms.com/image/upload/w_auto,c_lfill,q_auto,f_auto/v1717504700/carrier/residential-hvac/products/ductless/performance-cassette-indoor-unit-45MBCAQ.png",
            "efficiency": ""
          },
          {
            "name": "37MHRAQ - Comfort\u2122 Mini Split Heat Pump",
            "model_image": "https://images.carriercms.com/image/upload/w_auto,c_lfill,q_auto,f_auto/v1731008203/carrier/residential-hvac/products/ductless/comfort-ductless-mini-split-heat-pump-37MHRAQ.png",
            "efficiency": ""
          },
          {
            "name": "37MHRAC - Comfort\u2122 Series Single Zone Mini Split Air Conditioner - Cooling Only",
            "model_image": "https://images.carriercms.com/image/upload/w_auto,c_lfill,q_auto,f_auto/v1731008090/carrier/residential-hvac/products/ductless/comfort-series-single-zone-mini-split-air-conditioner-37MHRAC.png",
            "efficiency": ""
          },
          {
            "name": "45MHHAC - Comfort\u2122 High Wall Indoor Unit - Cooling Only",
            "model_image": "https://images.carriercms.com/image/upload/w_auto,c_lfill,q_auto,f_auto/v1724347456/carrier/residential-hvac/products/ductless/comfort-high-wall-indoor-unit-45MHHAC.jpg",
            "efficiency": ""
          },
          {
            "name": "45MHHAQ - Comfort\u2122 High Wall Indoor Unit",
            "model_image": "https://images.carriercms.com/image/upload/w_auto,c_lfill,q_auto,f_auto/v1731006022/carrier/residential-hvac/products/ductless/comfort-high-wall-ductless-mini-split-indoor-unit-45MHHAQ.png",
            "efficiency": ""
          },
          {
            "name": "45MBAA - Performance\u2122 Air Handler Unit",
            "model_image": "https://images.carriercms.com/image/upload/w_auto,c_lfill,q_auto,f_auto/v1717505006/carrier/residential-hvac/products/ductless/air-handler-ductless-system-45MBAA.png",
            "efficiency": ""
          },
          {
            "name": "RAVBAT2 - Toshiba Carrier Lt. Commercial Heat Pump",
            "model_image": "https://images.carriercms.com/image/upload/w_auto,c_lfill,q_auto,f_auto/v1746213431/carrier/residential-hvac/products/ductless/toshiba-carrier-light-commercial-heat-pump-RAVBAT2.png",
            "efficiency": ""
          },
          {
            "name": "RAVBKR2 - Toshiba Carrier High Wall Indoor Unit",
            "model_image": "https://images.carriercms.com/image/upload/w_auto,c_lfill,q_auto,f_auto/v1746213432/carrier/residential-hvac/products/ductless/toshiba-carrier-high-wall-indoor-unit-RAVBKR2.png",
            "efficiency": ""
          },
          {
            "name": "RAVBUT2 - Toshiba Carrier 4-Way Cassette Indoor Unit",
            "model_image": "https://images.carriercms.com/image/upload/w_auto,c_lfill,q_auto,f_auto/v1746213431/carrier/residential-hvac/products/ductless/toshiba-carrier-4-way-cassette-indoor-unit-RAVBUT2.png",
            "efficiency": ""
          },
          {
            "name": "RAVBCT2 - Toshiba Carrier Underceiling Indoor Unit",
            "model_image": "https://images.carriercms.com/image/upload/w_auto,c_lfill,q_auto,f_auto/v1746213432/carrier/residential-hvac/products/ductless/toshiba-carrier-underceiling-indoor-unit-RAVBCT2.png",
            "efficiency": ""
          },
          {
            "name": "RAVBBT2 - Toshiba Carrier Ducted Indoor Unit",
            "model_image": "https://images.carriercms.com/image/upload/w_auto,c_lfill,q_auto,f_auto/v1746213431/carrier/residential-hvac/products/ductless/toshiba-carrier-ducted-indoor-unit-RAVBBT2.png",
            "efficiency": ""
          }
        ]
      },
      {
        "line": "Evaporator Coils",
        "product_line_image": "https://images.carriercms.com/image/upload/w_auto,c_lfill,q_auto,f_auto/v1595521914/carrier/residential-hvac/products/evaporator-coils/evaporator-coil-cropped.png",
        "models": [
          {
            "name": "CVAMA - Multipoise Cased V Evaporator Coil with Vertex\u2122 Technology",
            "model_image": "https://images.carriercms.com/image/upload/w_auto,c_lfill,q_auto,f_auto/v1739220680/carrier/residential-hvac/products/evaporator-coils/multipoise-cased-v-coil-with-vertex-technology-CVAMA.png",
            "efficiency": ""
          },
          {
            "name": "CVAVA - Cased V Evaporator Coil with Vertex\u2122 Technology",
            "model_image": "https://images.carriercms.com/image/upload/w_auto,c_lfill,q_auto,f_auto/v1739220682/carrier/residential-hvac/products/evaporator-coils/cased-v-coil-with-vertex-technology-CVAVA.png",
            "efficiency": ""
          },
          {
            "name": "CSAHP - Slab Style Evaporator Coil",
            "model_image": "https://images.carriercms.com/image/upload/w_auto,c_lfill,q_auto,f_auto/v1739220681/carrier/residential-hvac/products/evaporator-coils/horizontal-slab-style-evaporator-coil-CSAHP.png",
            "efficiency": ""
          },
          {
            "name": "CAAVU - Uncased A Evaporator Coil",
            "model_image": "https://images.carriercms.com/image/upload/w_auto,c_lfill,q_auto,f_auto/v1739220680/carrier/residential-hvac/products/evaporator-coils/uncased-a-evaporator-coil-CAAVU.png",
            "efficiency": ""
          },
          {
            "name": "CAAMP - Multipoise Cased A Evaporator Coil",
            "model_image": "https://images.carriercms.com/image/upload/w_auto,c_lfill,q_auto,f_auto/v1739220680/carrier/residential-hvac/products/evaporator-coils/multipoise-cased-a-evaporator-coil-CAAMP.png",
            "efficiency": ""
          }
        ]
      },
      {
        "line": "Fan Coils",
        "product_line_image": "https://images.carriercms.com/image/upload/w_auto,c_lfill,q_auto,f_auto/v1595521932/carrier/residential-hvac/products/fan-coils/fan-coil-cropped.png",
        "models": [
          {
            "name": "FE5B - Infinity\u00aeVariable-Speed Fan Coil",
            "model_image": "https://images.carriercms.com/image/upload/w_auto,c_lfill,q_auto,f_auto/v1739220871/carrier/residential-hvac/products/fan-coils/infinity-variable-speed-fan-coil-air-handler-FE5B.png",
            "efficiency": ""
          },
          {
            "name": "40MUAA - Performance\u2122 Crossover Air Handler Unit",
            "model_image": "https://images.carriercms.com/image/upload/w_auto,c_lfill,q_auto,f_auto/v1734536810/carrier/residential-hvac/products/crossover-solutions/performance-air-handler-unit-40MUAA.png",
            "efficiency": ""
          },
          {
            "name": "FT5 - Performance\u2122 Fan Coil with InteliSense\u2122 Technology",
            "model_image": "https://images.carriercms.com/image/upload/w_auto,c_lfill,q_auto,f_auto/v1739220871/carrier/residential-hvac/products/fan-coils/performance-fan-coil-with-intelisense-technology-FT5.png",
            "efficiency": ""
          },
          {
            "name": "FJ5 - Comfort\u2122 Fan Coil",
            "model_image": "https://images.carriercms.com/image/upload/w_auto,c_lfill,q_auto,f_auto/v1739220876/carrier/residential-hvac/products/fan-coils/comfort-fan-coil-FJ5.png",
            "efficiency": ""
          },
          {
            "name": "F55 - Comfort\u2122 115V Fan Coil",
            "model_image": "https://images.carriercms.com/image/upload/w_auto,c_lfill,q_auto,f_auto/v1739220890/carrier/residential-hvac/products/fan-coils/comfort-115v-fan-coil-F55.png",
            "efficiency": ""
          },
          {
            "name": "FMU5X - Comfort\u2122\u00a0Multi-Family Home Uncased Fan Coil",
            "model_image": "https://images.carriercms.com/image/upload/w_auto,c_lfill,q_auto,f_auto/v1739220885/carrier/residential-hvac/products/fan-coils/comfort-multi-family-home-uncased-fan-coil-FMU5X.png",
            "efficiency": ""
          },
          {
            "name": "FMU5Z - Comfort\u2122 Multi-Family Home Uncased Fan Coil",
            "model_image": "https://images.carriercms.com/image/upload/w_auto,c_lfill,q_auto,f_auto/v1739220888/carrier/residential-hvac/products/fan-coils/comfort-multi-family-home-uncased-fan-coil-FMU5Z.png",
            "efficiency": ""
          },
          {
            "name": "FMC5Z - Comfort\u2122\u00a0Multi-Family Home Cased Fan Coil",
            "model_image": "https://images.carriercms.com/image/upload/w_auto,c_lfill,q_auto,f_auto/v1739220883/carrier/residential-hvac/products/fan-coils/comfort-multi-family-home-cased-fan-coil-FMC5Z.png",
            "efficiency": ""
          },
          {
            "name": "FMC5X - Comfort\u2122\u00a0Multi-Family Home Cased Fan Coil",
            "model_image": "https://images.carriercms.com/image/upload/w_auto,c_lfill,q_auto,f_auto/v1739220880/carrier/residential-hvac/products/fan-coils/comfort-multi-family-home-cased-fan-coil-FMC5X.png",
            "efficiency": ""
          },
          {
            "name": "FMA5X - Comfort\u2122 Multi-family High-Efficiency Fan Coil",
            "model_image": "https://images.carriercms.com/image/upload/w_auto,c_lfill,q_auto,f_auto/v1739220871/carrier/residential-hvac/products/fan-coils/comfort-multi-family-home-multi-speed-fan-coil-FMA5X.png",
            "efficiency": ""
          },
          {
            "name": "FMA5L - Comfort\u2122 Multi-family Standard-Efficiency Fan Coil",
            "model_image": "https://images.carriercms.com/image/upload/w_auto,c_lfill,q_auto,f_auto/v1739220872/carrier/residential-hvac/products/fan-coils/comfort-multi-family-home-fan-coil-FMA5L.png",
            "efficiency": ""
          }
        ]
      },
      {
        "line": "Furnaces",
        "product_line_image": "https://images.carriercms.com/image/upload/w_auto,c_lfill,q_auto,f_auto/v1684506023/carrier/residential-hvac/products/gas-furnaces/infinity-90-gas-furnace-cropped.png",
        "models": [
          {
            "name": "59MN7 - Infinity\u00ae\u00a098 Gas Furnace With Greenspeed\u00ae Intelligence",
            "model_image": "https://images.carriercms.com/image/upload/w_auto,c_lfill,q_auto,f_auto/v1728566323/carrier/residential-hvac/products/gas-furnaces/infinity-98-gas-furnace-with-greenspeed-intelligence-59MN7.png",
            "efficiency": ""
          },
          {
            "name": "59TN6 - Infinity\u00ae\u00a096 Gas Furnace",
            "model_image": "https://images.carriercms.com/image/upload/w_auto,c_lfill,q_auto,f_auto/v1728566322/carrier/residential-hvac/products/gas-furnaces/infinity-96-gas-furnace-59TN6.png",
            "efficiency": ""
          },
          {
            "name": "59TN7 - Infinity\u00ae\u00a097 Gas Furnace",
            "model_image": "https://images.carriercms.com/image/upload/w_auto,c_lfill,q_auto,f_auto/v1730127614/carrier/residential-hvac/products/gas-furnaces/infinity-96-gas-furnace-59TN7.png",
            "efficiency": ""
          },
          {
            "name": "58CU0 - Infinity\u00ae\u00a080 Ultra- Low NOx Gas Furnace",
            "model_image": "https://images.carriercms.com/image/upload/w_auto,c_lfill,q_auto,f_auto/v1684422638/carrier/residential-hvac/products/gas-furnaces/infinity-80-gas-furnace-58CU0.png",
            "efficiency": ""
          },
          {
            "name": "58TN - Infinity\u00ae\u00a080 Gas Furnace",
            "model_image": "https://images.carriercms.com/image/upload/w_auto,c_lfill,q_auto,f_auto/v1684422657/carrier/residential-hvac/products/gas-furnaces/infinity-80-gas-furnace-58TN.png",
            "efficiency": ""
          },
          {
            "name": "59CU5 - Infinity\u00ae 95 Ultra-Low NOx Gas Furnace",
            "model_image": "https://images.carriercms.com/image/upload/w_auto,c_lfill,q_auto,f_auto/v1728566322/carrier/residential-hvac/products/gas-furnaces/Infinity-95-Ultra-Low-NOx-Gas-Furnace-59CU5.png",
            "efficiency": ""
          },
          {
            "name": "59TP6 - Performance\u2122\u00a096 Gas Furnace with InteliSense\u2122 Technology",
            "model_image": "https://images.carriercms.com/image/upload/w_auto,c_lfill,q_auto,f_auto/v1728566325/carrier/residential-hvac/products/gas-furnaces/performance-96-gas-furnace-59TP6.png",
            "efficiency": ""
          },
          {
            "name": "59TP7 - Performance\u2122\u00a097 Gas Furnace with InteliSense\u2122 Technology",
            "model_image": "https://images.carriercms.com/image/upload/w_auto,c_lfill,q_auto,f_auto/v1730127609/carrier/residential-hvac/products/gas-furnaces/performance-96-gas-furnace-59TP7.png",
            "efficiency": ""
          },
          {
            "name": "59SP6 - Performance\u2122 96 Gas Furnace with InteliSense\u2122 Technology",
            "model_image": "https://images.carriercms.com/image/upload/w_auto,c_lfill,q_auto,f_auto/v1728566327/carrier/residential-hvac/products/gas-furnaces/performance-boost-90-gas-furnace-59SP5.png",
            "efficiency": ""
          },
          {
            "name": "58TP0 - Performance\u2122 80 Gas Furnace with InteliSense\u2122 Technology",
            "model_image": "https://images.carriercms.com/image/upload/w_auto,c_lfill,q_auto,f_auto/v1688665443/carrier/residential-hvac/products/gas-furnaces/performance-80-gas-furnace-58TP0.png",
            "efficiency": ""
          },
          {
            "name": "58TP1 - Performance\u2122 80 Low NOx Gas Furnace with InteliSense\u2122 Technology",
            "model_image": "https://images.carriercms.com/image/upload/w_auto,c_lfill,q_auto,f_auto/v1688665442/carrier/residential-hvac/products/gas-furnaces/performance-80-low-nox-gas-furnace-58TP1.png",
            "efficiency": ""
          },
          {
            "name": "58SP0 - Performance\u2122\u00a080 Gas Furnace with InteliSense\u2122 Technology",
            "model_image": "https://images.carriercms.com/image/upload/w_auto,c_lfill,q_auto,f_auto/v1688665443/carrier/residential-hvac/products/gas-furnaces/performance-80-gas-furnace-58SP0.png",
            "efficiency": ""
          },
          {
            "name": "58SP1 - Performance\u2122 80 Low NOx Gas Furnace with InteliSense\u2122 Technology",
            "model_image": "https://images.carriercms.com/image/upload/w_auto,c_lfill,q_auto,f_auto/v1688665443/carrier/residential-hvac/products/gas-furnaces/performance-80-low-nox-gas-furnace-58SP1.png",
            "efficiency": ""
          },
          {
            "name": "59SC6 - Comfort\u2122 96 Gas Furnace",
            "model_image": "https://images.carriercms.com/image/upload/w_auto,c_lfill,q_auto,f_auto/v1728566320/carrier/residential-hvac/products/gas-furnaces/carrier-comfort-96-gas-furnace-59SC6.png",
            "efficiency": ""
          },
          {
            "name": "59SC2 - Comfort\u2122\u00a092 Gas Furnace",
            "model_image": "https://images.carriercms.com/image/upload/w_auto,c_lfill,q_auto,f_auto/v1728566321/carrier/residential-hvac/products/gas-furnaces/comfort-92-gas-furnace-59SC2.png",
            "efficiency": ""
          },
          {
            "name": "58SB0 - Comfort\u2122 80 Gas Furnace",
            "model_image": "https://images.carriercms.com/image/upload/w_auto,c_lfill,q_auto,f_auto/v1601352803/carrier/residential-hvac/products/gas-furnaces/comfort-80-gas-furnace-58sb.png",
            "efficiency": ""
          },
          {
            "name": "58SB1 - Comfort\u2122 80 Low NOx Gas Furnace",
            "model_image": "https://images.carriercms.com/image/upload/w_auto,c_lfill,q_auto,f_auto/v1601352803/carrier/residential-hvac/products/gas-furnaces/comfort-80-gas-furnace-58sb.png",
            "efficiency": ""
          },
          {
            "name": "58SC0 - Comfort\u2122 80 Gas Furnace",
            "model_image": "https://images.carriercms.com/image/upload/w_auto,c_lfill,q_auto,f_auto/v1601352803/carrier/residential-hvac/products/gas-furnaces/comfort-80-gas-furnace-58sc.png",
            "efficiency": ""
          },
          {
            "name": "58SC1 - Comfort\u2122 80 Low NOx Gas Furnace",
            "model_image": "https://images.carriercms.com/image/upload/w_auto,c_lfill,q_auto,f_auto/v1601352803/carrier/residential-hvac/products/gas-furnaces/comfort-80-gas-furnace-58sc.png",
            "efficiency": ""
          },
          {
            "name": "58SU0 - Comfort\u2122\u00a080 Ultra-Low NOX Gas Furnace",
            "model_image": "https://images.carriercms.com/image/upload/w_auto,c_lfill,q_auto,f_auto/v1601352803/carrier/residential-hvac/products/gas-furnaces/comfort-80-gas-furnace-58SU0.png",
            "efficiency": ""
          },
          {
            "name": "59SU5 - Comfort\u2122\u00a095 Ultra- Low NOx Gas Furnace",
            "model_image": "https://images.carriercms.com/image/upload/w_auto,c_lfill,q_auto,f_auto/v1728566321/carrier/residential-hvac/products/gas-furnaces/comfort-95-ultra-low-nox-gas-furnace-59SU5.png",
            "efficiency": ""
          },
          {
            "name": "OVL - Performance\u2122 80 Oil Furnace",
            "model_image": "https://images.carriercms.com/image/upload/w_auto,c_lfill,q_auto,f_auto/v1599156199/carrier/residential-hvac/products/oil-furnaces/performance-80-oil-furnace-OVL.png",
            "efficiency": ""
          },
          {
            "name": "OVM - Performance\u2122 80 Oil Furnace",
            "model_image": "https://images.carriercms.com/image/upload/w_auto,c_lfill,q_auto,f_auto/v1599156199/carrier/residential-hvac/products/oil-furnaces/performance-80-oil-furnace-OVM.png",
            "efficiency": ""
          },
          {
            "name": "OBL - Comfort\u2122 80 Oil Furnace",
            "model_image": "https://images.carriercms.com/image/upload/w_auto,c_lfill,q_auto,f_auto/v1599156201/carrier/residential-hvac/products/oil-furnaces/comfort-80-oil-furnace-OBL.png",
            "efficiency": ""
          },
          {
            "name": "OBM - Comfort\u2122 80 Oil Furnace",
            "model_image": "https://images.carriercms.com/image/upload/w_auto,c_lfill,q_auto,f_auto/v1599156201/carrier/residential-hvac/products/oil-furnaces/comfort-80-oil-furnace-OBM.png",
            "efficiency": ""
          }
        ]
      },
      {
        "line": "Geothermal Heat Pumps",
        "product_line_image": "https://images.carriercms.com/image/upload/w_auto,c_lfill,q_auto,f_auto/v1595522183/carrier/residential-hvac/products/geothermal/geothermal-heat-pump-gp-cropped.png",
        "models": [
          {
            "name": "GC - Infinity\u00ae Geothermal Heat Pump",
            "model_image": "https://images.carriercms.com/image/upload/w_auto,c_lfill,q_auto,f_auto/v1600814139/carrier/residential-hvac/products/geothermal/infinity-geothermal-heat-pump-GC.png",
            "efficiency": ""
          },
          {
            "name": "GCA - Infinity\u00ae Geothermal Heat Pump",
            "model_image": "https://images.carriercms.com/image/upload/w_auto,c_lfill,q_auto,f_auto/v1739220969/carrier/residential-hvac/products/geothermal/geothermal-heat-pump-GCA-Carrier.png",
            "efficiency": ""
          },
          {
            "name": "GP - Performance\u2122 Geothermal Heat Pump",
            "model_image": "https://images.carriercms.com/image/upload/w_auto,c_lfill,q_auto,f_auto/v1600814146/carrier/residential-hvac/products/geothermal/performance-geothermal-heat-pump.png",
            "efficiency": ""
          },
          {
            "name": "GB - COMFORT\u2122 HEAT PUMP",
            "model_image": "https://images.carriercms.com/image/upload/w_auto,c_lfill,q_auto,f_auto/v1599155179/carrier/residential-hvac/products/geothermal/comfort-geothermal-heat-pump-GB.png",
            "efficiency": ""
          },
          {
            "name": "GBA - COMFORT\u2122 GEOTHERMAL HEAT PUMP",
            "model_image": "https://images.carriercms.com/image/upload/w_auto,c_lfill,q_auto,f_auto/v1739220970/carrier/residential-hvac/products/geothermal/geothermal-heat-pump-GBA-Carrier.png",
            "efficiency": ""
          },
          {
            "name": "GZ - INFINITY\u00ae SPLIT SYSTEM GEOTHERMAL HEAT PUMP",
            "model_image": "https://images.carriercms.com/image/upload/w_auto,c_lfill,q_auto,f_auto/v1599155091/carrier/residential-hvac/products/geothermal/performance-split-system-indoor-geothermal-heat-pump-GS.png",
            "efficiency": ""
          },
          {
            "name": "GZA - INFINITY\u00ae SPLIT SYSTEM GEOTHERMAL HEAT PUMP",
            "model_image": "https://images.carriercms.com/image/upload/w_auto,c_lfill,q_auto,f_auto/v1739220975/carrier/residential-hvac/products/geothermal/geothermal-heat-pump-GZA-Carrier.png",
            "efficiency": ""
          },
          {
            "name": "GW - Performance\u2122 Water-to-Water Geothermal Heat Pump",
            "model_image": "https://images.carriercms.com/image/upload/w_auto,c_lfill,q_auto,f_auto/v1730915911/carrier/residential-hvac/products/geothermal/Carrier-geothermal-heat-pump-GW.png",
            "efficiency": ""
          },
          {
            "name": "GWA - Performance\u2122 Water-to-Water Geothermal Heat Pump",
            "model_image": "https://images.carriercms.com/image/upload/w_auto,c_lfill,q_auto,f_auto/v1739220972/carrier/residential-hvac/products/geothermal/geotherma-heat-pump-GWA-Carrier.png",
            "efficiency": ""
          }
        ]
      },
      {
        "line": "Heat Pumps",
        "product_line_image": "https://images.carriercms.com/image/upload/w_auto,c_lfill,q_auto,f_auto/v1684343485/carrier/residential-hvac/products/heat-pumps/infinity-heat-pump-cropped.png",
        "models": [
          {
            "name": "27VNA1 - Infinity\u00ae Variable-Speed Ultimate Cold Climate Heat Pump With Greenspeed\u00ae Intelligence",
            "model_image": "https://images.carriercms.com/image/upload/w_auto,c_lfill,q_auto,f_auto/v1739221234/carrier/residential-hvac/products/heat-pumps/infinity-24-heat-pump-with-greenspeed-intelligence-27VNA1.png",
            "efficiency": "Up to 21.2"
          },
          {
            "name": "25VNA4 - Infinity\u00ae Variable-Speed Heat Pump With Greenspeed\u00ae Intelligence",
            "model_image": "https://images.carriercms.com/image/upload/w_auto,c_lfill,q_auto,f_auto/v1718133501/carrier/residential-hvac/products/heat-pumps/infinity-24-heat-pump-with-greenspeed-intelligence-25VNA4.png",
            "efficiency": "Up to 23"
          },
          {
            "name": "27VNA3 - Infinity\u00ae Variable-Speed Heat Pump With Greenspeed\u00ae Intelligence",
            "model_image": "https://images.carriercms.com/image/upload/w_auto,c_lfill,q_auto,f_auto/v1739221261/carrier/residential-hvac/products/heat-pumps/infinity-24-heat-pump-with-greenspeed-intelligence-27VNA3.png",
            "efficiency": "Up to 23"
          },
          {
            "name": "25VNA8 - Infinity\u00ae Variable-Speed Heat Pump",
            "model_image": "https://images.carriercms.com/image/upload/w_auto,c_lfill,q_auto,f_auto/v1739908537/carrier/residential-hvac/products/heat-pumps/infinity-18VS-heat-pump-25VNA8.png",
            "efficiency": "Up to 19"
          },
          {
            "name": "27VNA0 - Infinity\u00ae Variable-Speed Heat Pump With Greenspeed\u00aeIntelligence",
            "model_image": "https://images.carriercms.com/image/upload/w_auto,c_lfill,q_auto,f_auto/v1739221232/carrier/residential-hvac/products/heat-pumps/infinity-18VS-heat-pump-27VNA0.png",
            "efficiency": "Up to 20"
          },
          {
            "name": "27TPA8 - Performance\u2122 2-Stage Heat Pump with InteliSense\u2122 Technology",
            "model_image": "https://images.carriercms.com/image/upload/w_auto,c_lfill,q_auto,f_auto/v1739221241/carrier/residential-hvac/products/heat-pumps/performance-17-heat-pump-27TPA8.png",
            "efficiency": "Up to 18.5"
          },
          {
            "name": "27TPA8---C - Performance\u2122 2-Stage Coastal Heat Pump with InteliSense\u2122 Technology",
            "model_image": "https://images.carriercms.com/image/upload/w_auto,c_lfill,q_auto,f_auto/v1739221244/carrier/residential-hvac/products/heat-pumps/performance-17-heat-pump-27TPA8--C.png",
            "efficiency": "Up to 18.5"
          },
          {
            "name": "27SPA6 - Performance\u2122 Heat Pump with InteliSense\u2122 Technology",
            "model_image": "https://images.carriercms.com/image/upload/w_auto,c_lfill,q_auto,f_auto/v1739906619/carrier/residential-hvac/products/heat-pumps/performance-heat-pump-with-intelisense-technology-27SPA6.png",
            "efficiency": "Up to 16.5"
          },
          {
            "name": "27SCA5 - Comfort\u2122 Heat Pump",
            "model_image": "https://images.carriercms.com/image/upload/w_auto,c_lfill,q_auto,f_auto/v1739908509/carrier/residential-hvac/products/heat-pumps/comfort-heat-pump-27SCA5.png",
            "efficiency": "Up to 16"
          },
          {
            "name": "27SCA5***C - Comfort\u2122 Coastal Heat Pump",
            "model_image": "https://images.carriercms.com/image/upload/w_auto,c_lfill,q_auto,f_auto/v1739908507/carrier/residential-hvac/products/heat-pumps/comfort-coastal-heat-pump-27SCA5---C.png",
            "efficiency": "Up to 16"
          }
        ]
      },
      {
        "line": "Packaged Products",
        "product_line_image": "https://images.carriercms.com/image/upload/w_auto,c_lfill,q_auto,f_auto/v1600317789/carrier/residential-hvac/products/packaged-products/performance-14-packaged-system-cropped.png",
        "models": [
          {
            "name": "48VG - Performance\u2122\u00a015 Packaged Gas Furnace/Air Conditioner System",
            "model_image": "https://images.carriercms.com/image/upload/w_auto,c_lfill,q_auto,f_auto/v1599156229/carrier/residential-hvac/products/packaged-products/performance-15-packaged-gas-furnace-air-conditioner-system-48VG.png",
            "efficiency": "Up to 16"
          },
          {
            "name": "48VR - Performance\u2122 15 Packaged Hybrid Heat\u00ae System",
            "model_image": "https://images.carriercms.com/image/upload/w_auto,c_lfill,q_auto,f_auto/v1599156229/carrier/residential-hvac/products/packaged-products/performance-15-packaged-hybrid-heat-system-48VR.png",
            "efficiency": "Up to 15.5"
          },
          {
            "name": "50VG - Performance\u2122 15 Packaged Air Conditioner System",
            "model_image": "https://images.carriercms.com/image/upload/w_auto,c_lfill,q_auto,f_auto/v1599156229/carrier/residential-hvac/products/packaged-products/performance-15-packaged-air-conditioner-system-50VG.png",
            "efficiency": "Up to 16"
          },
          {
            "name": "50VR - Performance\u2122\u00a015 Packaged Heat Pump\u00a0System",
            "model_image": "https://images.carriercms.com/image/upload/w_auto,c_lfill,q_auto,f_auto/v1599156229/carrier/residential-hvac/products/packaged-products/performance-15-packaged-heat-pump-system-50VR.png",
            "efficiency": "Up to 15.5"
          },
          {
            "name": "50ZH - Comfort\u2122 14 Packaged Heat Pump System",
            "model_image": "https://images.carriercms.com/image/upload/w_auto,c_lfill,q_auto,f_auto/v1571520416/carrier/residential-hvac/products/packaged-products/comfort-13-packaged-heat-pump-system-50ZHB.png",
            "efficiency": "13.4"
          },
          {
            "name": "50NH - Comfort\u2122 14 Packaged Heat Pump System",
            "model_image": "https://images.carriercms.com/image/upload/w_auto,c_lfill,q_auto,f_auto/v1739221597/carrier/residential-hvac/products/packaged-products/packaged-heat-pump-system-50NH.png",
            "efficiency": "13.4"
          },
          {
            "name": "48NT - Comfort\u2122 14 Packaged Hybrid Heat\u00aeSystem",
            "model_image": "https://images.carriercms.com/image/upload/w_auto,c_lfill,q_auto,f_auto/v1739221593/carrier/residential-hvac/products/packaged-products/comfort-14-packaged-heat-pump-system-louvers-48VT.png",
            "efficiency": "13.4"
          },
          {
            "name": "50ZP - Comfort\u2122 14 Packaged Air Conditioner System",
            "model_image": "https://images.carriercms.com/image/upload/w_auto,c_lfill,q_auto,f_auto/v1571520416/carrier/residential-hvac/products/packaged-products/comfort-13-packaged-air-conditioner-system-50ZPB.png",
            "efficiency": "13.4"
          },
          {
            "name": "50NP - Comfort\u2122 14 Packaged Air Conditioner System",
            "model_image": "https://images.carriercms.com/image/upload/w_auto,c_lfill,q_auto,f_auto/v1739221599/carrier/residential-hvac/products/packaged-products/comfort-13-packaged-air-conditioner-system-50NP.png",
            "efficiency": "13.4"
          },
          {
            "name": "48NL - Comfort\u212214 Packaged Gas Furnace/Air Conditioner System",
            "model_image": "https://images.carriercms.com/image/upload/w_auto,c_lfill,q_auto,f_auto/v1739221601/carrier/residential-hvac/products/packaged-products/combination-heating-and-air-conditioning-units-48NL.png",
            "efficiency": "13.4"
          },
          {
            "name": "50NT - Comfort\u2122 14 Packaged Heat Pump System",
            "model_image": "https://images.carriercms.com/image/upload/w_auto,c_lfill,q_auto,f_auto/v1739221590/carrier/residential-hvac/products/packaged-products/comfort-14-packaged-hybrid-heat-system-louvers-50nt.png",
            "efficiency": "13.4"
          },
          {
            "name": "50NL - Comfort\u2122 14 Packaged Air Conditioner System",
            "model_image": "https://images.carriercms.com/image/upload/w_auto,c_lfill,q_auto,f_auto/v1739221596/carrier/residential-hvac/products/packaged-products/comfort-14-packaged-air-conditioner-system-louvers-50-nl.png",
            "efficiency": "13.4"
          }
        ]
      },
      {
        "line": "Toshiba Carrier Opti-V",
        "product_line_image": "https://images.carriercms.com/image/upload/w_auto,c_lfill,q_auto,f_auto/v1631114705/carrier/residential-hvac/products/variable-refrigerant-flow/toshiba-carrier-vrf-cropped.png",
        "models": [
          {
            "name": "MCY-MUB - Toshiba Carrier Opti-V Heat Pump",
            "model_image": "https://images.carriercms.com/image/upload/w_auto,c_lfill,q_auto,f_auto/v1747064808/carrier/residential-hvac/products/variable-refrigerant-flow/carrier-mcy-mub-vrf-single-phase-heat-pump-system.png",
            "efficiency": ""
          },
          {
            "name": "MMDV-U - Toshiba Carrier Vertical AHU",
            "model_image": "https://images.carriercms.com/image/upload/w_auto,c_lfill,q_auto,f_auto/v1626120083/carrier/residential-hvac/products/variable-refrigerant-flow/carrier-mmdv-vrf-vertical-air-handling-unit.png",
            "efficiency": ""
          },
          {
            "name": "MMD1-U - Toshiba Carrier Outside Air Indoor Unit",
            "model_image": "https://images.carriercms.com/image/upload/w_auto,c_lfill,q_auto,f_auto/v1719425323/carrier/residential-hvac/products/variable-refrigerant-flow/toshiba-carrier-outdoor-air_unit-MMD1-U.png",
            "efficiency": ""
          },
          {
            "name": "MMK-UB - Toshiba Carrier High Wall",
            "model_image": "https://images.carriercms.com/image/upload/w_auto,c_lfill,q_auto,f_auto/v1744393303/carrier/residential-hvac/products/variable-refrigerant-flow/toshiba-carrier-vrf-high-wall-indoor-unit-MMK-UB.png",
            "efficiency": ""
          },
          {
            "name": "MMC-UB - Toshiba Carrier Underceiling Indoor Unit",
            "model_image": "https://images.carriercms.com/image/upload/w_auto,c_lfill,q_auto,f_auto/v1744392822/carrier/residential-hvac/products/variable-refrigerant-flow/toshiba-carrier-vrf-underceiling-indoor-unit-MMC-UB.png",
            "efficiency": ""
          },
          {
            "name": "MMUM-UB - Toshiba Carrier Compact 4-Way Cassette",
            "model_image": "https://images.carriercms.com/image/upload/w_auto,c_lfill,q_auto,f_auto/v1747948044/carrier/residential-hvac/products/variable-refrigerant-flow/toshiba-carrier-vrf-compact-4-way-cassette-MMU-UB.png",
            "efficiency": ""
          },
          {
            "name": "MMDB-UB - Toshiba Carrier Medium Static Duct",
            "model_image": "https://images.carriercms.com/image/upload/w_auto,c_lfill,q_auto,f_auto/v1744394648/carrier/residential-hvac/products/variable-refrigerant-flow/toshiba-carrier-vrf-med-static-duct-MMDBHP.png",
            "efficiency": ""
          },
          {
            "name": "MMU*MH - Toshiba Carrier Compact 4-Way Cassette",
            "model_image": "https://images.carriercms.com/image/upload/w_auto,c_lfill,q_auto,f_auto/v1744394053/carrier/residential-hvac/products/variable-refrigerant-flow/toshiba-carrier-vrf-compact-4-way-cassette-MMUMH.png",
            "efficiency": ""
          },
          {
            "name": "MMU1-UB - Toshiba Carrier 4-Way Cassette",
            "model_image": "https://images.carriercms.com/image/upload/w_auto,c_lfill,q_auto,f_auto/v1747948044/carrier/residential-hvac/products/variable-refrigerant-flow/toshiba-carrier-vrf-compact-4-way-cassette-MMU-UB.png",
            "efficiency": ""
          },
          {
            "name": "MMUY-U - Toshiba Carrier 1-Way Cassette",
            "model_image": "https://images.carriercms.com/image/upload/w_auto,c_lfill,q_auto,f_auto/v1677253016/carrier/residential-hvac/products/variable-refrigerant-flow/toshiba-carrier-1-way-cassette-MMUY-U.png",
            "efficiency": ""
          },
          {
            "name": "MMD*SPH - Toshiba Carrier Low Static Slim Duct",
            "model_image": "https://images.carriercms.com/image/upload/w_auto,c_lfill,q_auto,f_auto/v1744393807/carrier/residential-hvac/products/variable-refrigerant-flow/toshiba-carrier-vrf-med-static-duct-MMDHP.png",
            "efficiency": ""
          },
          {
            "name": "MMD*HP - Toshiba Carrier High Static Duct",
            "model_image": "https://images.carriercms.com/image/upload/w_auto,c_lfill,q_auto,f_auto/v1744393807/carrier/residential-hvac/products/variable-refrigerant-flow/toshiba-carrier-vrf-med-static-duct-MMDHP.png",
            "efficiency": ""
          }
        ]
      },
      {
        "line": "VRF Controls",
        "product_line_image": "https://images.carriercms.com/image/upload/w_auto,c_lfill,q_auto,f_auto/v1631114705/carrier/residential-hvac/products/variable-refrigerant-flow/vrf-controls-cropped.png",
        "models": [
          {
            "name": "40VM900006A - Carrier Touch Screen Central Controller",
            "model_image": "https://images.carriercms.com/image/upload/w_auto,c_lfill,q_auto,f_auto/v1631037594/carrier/residential-hvac/products/variable-refrigerant-flow/carrier-40VM900006-vrf-controller.png",
            "efficiency": ""
          },
          {
            "name": "40VM900002 - Carrier Non-Programmable Wired Remote Controller",
            "model_image": "https://images.carriercms.com/image/upload/w_auto,c_lfill,q_auto,f_auto/v1631037594/carrier/residential-hvac/products/variable-refrigerant-flow/carrier-40VM900002-vrf-controller.png",
            "efficiency": ""
          },
          {
            "name": "40VM900003 - Carrier Programmable Wired Remote Controller",
            "model_image": "https://images.carriercms.com/image/upload/w_auto,c_lfill,q_auto,f_auto/v1631037594/carrier/residential-hvac/products/variable-refrigerant-flow/carrier-40VM900003-vrf-controller.png",
            "efficiency": ""
          },
          {
            "name": "40VM900005 - Carrier Touch Screen Wired Controller",
            "model_image": "https://images.carriercms.com/image/upload/w_auto,c_lfill,q_auto,f_auto/v1631037594/carrier/residential-hvac/products/variable-refrigerant-flow/carrier-40VM900005-vrf-controller.png",
            "efficiency": ""
          },
          {
            "name": "40VM900052A - Carrier BACnet\u00ae Interface",
            "model_image": "https://images.carriercms.com/image/upload/w_auto,c_lfill,q_auto,f_auto/v1631037594/carrier/residential-hvac/products/variable-refrigerant-flow/carrier-40VM900052-bacnet-interface.png",
            "efficiency": ""
          },
          {
            "name": "RBC-ASCU11-UL - Toshiba Carrier Compact Wired Controller",
            "model_image": "https://images.carriercms.com/image/upload/w_auto,c_lfill,q_auto,f_auto/v1704400861/carrier/residential-hvac/products/variable-refrigerant-flow/RBC-ASCU11-UL.png",
            "efficiency": ""
          },
          {
            "name": "TCB-SC640U-UL - Toshiba Carrier Compact Central Controller",
            "model_image": "https://images.carriercms.com/image/upload/w_auto,c_lfill,q_auto,f_auto/v1704400743/carrier/residential-hvac/products/variable-refrigerant-flow/TCB-SC640U-UL.png",
            "efficiency": ""
          },
          {
            "name": "RBC-AWSU52-UL - Toshiba Carrier Wired Programmable Remote Controller",
            "model_image": "https://images.carriercms.com/image/upload/w_auto,c_lfill,q_auto,f_auto/v1631037595/carrier/residential-hvac/products/variable-refrigerant-flow/carrier-RBC-AMS54UL-vrf-wired-remote-controller.png",
            "efficiency": ""
          }
        ]
      }
    ]
  },
  {
    "brand": "Rheem",
    "logo": "/logos/Rheem.png",
    "productLines": [
      {
        "line": "Air Conditioners",
        "product_line_image": "https://media.rheem.com/blobazrheem/wp-content/uploads/sites/36/2024/04/airconditioner2.png",
        "models": [
          {
            "name": "RA19AY Endeavor Line Prestige Series Air Conditioner",
            "model_image": "https://media.rheem.com/blobazrheem/az-thumbnails/products/ra19ay-endeavor-line-prestige-series-air-conditioner-bfa45017-7226-41c1-8ffe-e701374964c3-160x160.png",
            "efficiency": "EcoNet Enabled"
          },
          {
            "name": "RA18AZ Endeavor Line Prestige Series Air Conditioner",
            "model_image": "https://media.rheem.com/blobazrheem/az-thumbnails/products/ra18az-endeavor-line-prestige-series-air-conditioner-6ed888f0-ab87-45b0-80f4-b3df96f748fa-160x160.png",
            "efficiency": "EcoNet Enabled"
          },
          {
            "name": "RA16AY Endeavor Line Classic Plus Series Air Conditioner",
            "model_image": "https://media.rheem.com/blobazrheem/az-thumbnails/products/ra16ay-endeavor-line-classic-plus-series-air-conditioner-250b1caf-7415-4225-b1d8-ed9f768e2d48-160x160.png",
            "efficiency": "Cooling Efficiencies up to: 17 SEER2 / 12.0 EER2"
          },
          {
            "name": "RA16AZ Endeavor Line Classic Plus Series Air Conditioner",
            "model_image": "https://media.rheem.com/blobazrheem/az-thumbnails/products/ra16az-endeavor-line-classic-plus-series-air-conditioner-e18428eb-89ba-4743-a262-a5fe38298108-160x160.png",
            "efficiency": "EcoNet Enabled"
          },
          {
            "name": "RA15AY Endeavor Line Classic Series Air Conditioner",
            "model_image": "https://media.rheem.com/blobazrheem/az-thumbnails/products/ra15ay-endeavor-line-classic-series-air-conditioner-dcda6acb-a89f-48cc-9674-94b773806158-160x160.png",
            "efficiency": "Cooling Efficiencies up to: 16 SEER2 / 13 EER2"
          },
          {
            "name": "RA15AZ Endeavor Line Classic Plus Series Air Conditioner",
            "model_image": "https://media.rheem.com/blobazrheem/az-thumbnails/products/ra15az-endeavor-line-classic-plus-series-air-conditioner-3ef7dae3-5a39-48d3-8b84-5160bb785dd1-160x160.png",
            "efficiency": "EcoNet Enabled"
          },
          {
            "name": "RA14AY Endeavor Line Classic Series Air Conditioner",
            "model_image": "https://media.rheem.com/blobazrheem/az-thumbnails/products/ra14ay-endeavor-line-classic-series-air-conditioner-2f4e6522-f408-4e90-9e3c-37e99964b2e1-160x160.png",
            "efficiency": "Cooling Efficiencies: up to 15.2 SEER2 / 12 EER2"
          },
          {
            "name": "RA14AZ Endeavor Line Classic Series Air Conditioner",
            "model_image": "https://media.rheem.com/blobazrheem/az-thumbnails/products/ra14az-endeavor-line-classic-series-air-conditioner-9c01dcda-7140-45b5-a76e-c5953e152a14-160x160.png",
            "efficiency": "Cooling Efficiencies: up to 16 SEER2 / 13 EER2"
          },
          {
            "name": "RA13NY Endeavor Line Classic Series Air Conditioner",
            "model_image": "https://media.rheem.com/blobazrheem/az-thumbnails/products/ra13ny-endeavor-line-classic-series-air-conditioner-f39e6264-8c28-489b-87ac-b1b83f258b22-160x160.png",
            "efficiency": "Cooling Efficiency: 13.4 SEER2 /9EER2"
          },
          {
            "name": "RA13NZ Endeavor Line Air Conditioner",
            "model_image": "https://media.rheem.com/blobazrheem/az-thumbnails/products/ra13nz-endeavor-line-air-conditioner--6813b5d4-fccf-4363-99ed-acb2ea2e2a4c-160x160.png",
            "efficiency": "Cooling Efficiencies: up to 15.2 SEER2 / 12.0 EER2"
          },
          {
            "name": "WA15AY Endeavor Line Select Series Air Conditioner",
            "model_image": "https://media.rheem.com/blobazrheem/az-thumbnails/products/wa15ay-endeavor-line-select-series-air-conditioner-fdd1d683-09ca-4550-813f-7765b9f605de-160x160.png",
            "efficiency": "Cooling Efficiencies up: 15.2 SEER2/9.8 EER2"
          },
          {
            "name": "WA15AZ Endeavor Line Select Series Air Conditioner",
            "model_image": "https://media.rheem.com/blobazrheem/az-thumbnails/products/wa15az-endeavor-line-select-series-air-conditioner-c71079aa-6d08-4c83-a826-4b7c1ed039fe-160x160.png",
            "efficiency": "Cooling Efficiency: 15.2 SEER2/9.8 EER2"
          },
          {
            "name": "WA14AY Endeavor Line Select Series Air Conditioner",
            "model_image": "https://media.rheem.com/blobazrheem/az-thumbnails/products/wa14ay-endeavor-line-select-series-air-conditioner-d490d89f-9440-4c33-aa85-6300527f27d6-160x160.png",
            "efficiency": "Cooling Efficiency: 15.2 SEER2 /12 EER2"
          },
          {
            "name": "WA14AZ Endeavor Line Select Series Air Conditioner",
            "model_image": "https://media.rheem.com/blobazrheem/az-thumbnails/products/wa14az-endeavor-line-select-series-air-conditioner-76209287-b9ad-4314-ae8f-703854f7bbdd-160x160.png",
            "efficiency": "Cooling Efficiency: 15.2 SEER2 /12 EER2"
          },
          {
            "name": "WSA14AY Endeavor Line Select Series Air Conditioner",
            "model_image": "https://media.rheem.com/blobazrheem/az-thumbnails/products/wsa14ay-endeavor-line-select-series-air-conditioner-b61e3dc6-7b0d-4069-a1e9-1996c7b7ef16-160x160.png",
            "efficiency": "Cooling Efficiencies up to: 14.3 SEER2/10.4 EER2"
          },
          {
            "name": "WSA14AZ Endeavor Line Select Series Air Conditioner",
            "model_image": "https://media.rheem.com/blobazrheem/az-thumbnails/products/wsa14az-endeavor-line-select-series-air-conditioner-e11b9473-8103-4b41-8496-d3559b7e28d5-160x160.png",
            "efficiency": "Cooling Efficiencies up to: 15.2 SEER2/12 EER2"
          },
          {
            "name": "Select Series Single Stage WA14",
            "model_image": "https://media.rheem.com/blobazrheem/az-thumbnails/products/select-series-single-stage-wa14-d1723deb-8ea8-4c6a-b560-bc2422ac550b-160x160.png",
            "efficiency": "Efficiency: 14 SEER/11.5EER"
          },
          {
            "name": "WA13NY Endeavor Line Select Series Air Conditioner",
            "model_image": "https://media.rheem.com/blobazrheem/az-thumbnails/products/wa13ny-endeavor-line-select-series-air-conditioner-db6e76ea-30e5-4f44-abe3-36487a0cc25b-160x160.png",
            "efficiency": "Cooling Efficiency: 13.4 SEER2 / 9 EER2"
          },
          {
            "name": "WA13NZ Endeavor Line Select Series Air Conditioner",
            "model_image": "https://media.rheem.com/blobazrheem/az-thumbnails/products/wa13nz-endeavor-line-select-series-air-conditioner-ba3306ab-f9dc-444f-bde0-d0a37588de0d-160x160.png",
            "efficiency": "Cooling Efficiency: 15.2 SEER2 / 12 EER2"
          },
          {
            "name": "EcoNet Enabled Prestige Series Variable Speed (RA20)",
            "model_image": "https://media.rheem.com/blobazrheem/az-thumbnails/products/econet-enabled-prestige-series-variable-speed-(ra20)-84f4520a-b48f-4792-94df-26607301093b-160x160.png",
            "efficiency": "EcoNet\u2122 Enabled"
          },
          {
            "name": "Select Series Single Stage WA14W",
            "model_image": "https://media.rheem.com/blobazrheem/az-thumbnails/products/select-series-single-stage-wa14w-9b477a21-3aa6-491a-81dc-b4390c79fb77-160x160.png",
            "efficiency": "Efficiency: 14 SEER/11.7-12.2EER"
          },
          {
            "name": "EcoNet Enabled Classic Plus Series Two-Stage (RA17)",
            "model_image": "https://media.rheem.com/blobazrheem/az-thumbnails/products/econet-enabled-classic-plus-series-two-stage-(ra17)-3407e78a-3c28-4e4f-ab1e-3024c1e8b05e-160x160.png",
            "efficiency": "Cooling Efficiency: 17 SEER / 13 EER"
          },
          {
            "name": "Classic Series Two-Stage (RA17)",
            "model_image": "https://media.rheem.com/blobazrheem/az-thumbnails/products/classic-series-two-stage-(ra17)-33b7081a-b924-43b1-b801-e8f00006c27c-160x160.png",
            "efficiency": "Cooling Efficiency: 17 SEER / 13 EER"
          },
          {
            "name": "Classic Series Single Stage (RA16)",
            "model_image": "https://media.rheem.com/blobazrheem/az-thumbnails/products/00000000-0000-0000-0000-000000000000.png",
            "efficiency": "Cooling Efficiency: 16 SEER / 13 EER"
          },
          {
            "name": "Classic Series Single Stage (RA14)",
            "model_image": "https://media.rheem.com/blobazrheem/az-thumbnails/products/classic-series-single-stage-(ra14)-9e2f8c83-c983-44d9-88c1-3c53b73e8966-160x160.png",
            "efficiency": "Cooling Efficiency:\u00a0 15 SEER / 12.5 EER"
          },
          {
            "name": "Classic Series Single-Stage (RA14W)",
            "model_image": "https://media.rheem.com/blobazrheem/az-thumbnails/products/classic-series-single-stage-(ra14w)-e7b82272-bc4f-4333-a804-27d7cb4f2385-160x160.png",
            "efficiency": "Cooling Efficiency: 15 SEER/12.5 EER"
          },
          {
            "name": "Classic Series Single Stage (RA13)",
            "model_image": "https://media.rheem.com/blobazrheem/az-thumbnails/products/classic-series-single-stage-(ra13)-c79ca4d7-d247-4297-8d4b-998c685e6ebc-160x160.png",
            "efficiency": "Cooling Efficiency:\u00a0 13 SEER/11 EER"
          },
          {
            "name": "Select Series Single Stage WA16",
            "model_image": "https://media.rheem.com/blobazrheem/az-thumbnails/products/select-series-single-stage-wa16-07b23b56-cfe9-4de0-ab62-9cceb60fea2d-160x160.png",
            "efficiency": "Efficiencies up to 16 SEER/13 EER"
          },
          {
            "name": "Select Series Single Stage WA13",
            "model_image": "https://media.rheem.com/blobazrheem/az-thumbnails/products/select-series-single-stage-wa13--d1a8aed4-5930-40f4-9dbc-e97df18ca6b2-160x160.png",
            "efficiency": "Cooling efficiencies up to 13 SEER/11 EER"
          }
        ]
      },
      {
        "line": "Air Handlers",
        "product_line_image": "https://media.rheem.com/blobazrheem/wp-content/uploads/sites/36/2018/06/RH2T.png",
        "models": [
          {
            "name": "RHMVY Endeavor Line Air Handlers",
            "model_image": "https://media.rheem.com/blobazrheem/az-thumbnails/products/rhmvy-endeavor-line-air-handlers-e1c2801c-8e5f-4277-b239-3b603c71d052-160x160.png",
            "efficiency": "EcoNet Enabled"
          },
          {
            "name": "RHMVZ Endeavor Line Air Handlers",
            "model_image": "https://media.rheem.com/blobazrheem/az-thumbnails/products/rhmvz-endeavor-line-air-handlers-4a4bf794-19d7-4e7a-83b0-8509531a65c9-160x160.png",
            "efficiency": "EcoNet Enabled"
          },
          {
            "name": "RHMVZN Endeavor Line (Sound & Space Constraint System)",
            "model_image": "https://media.rheem.com/blobazrheem/az-thumbnails/products/rhmvzn-endeavor-line-(sound-&-space-constraint-system)-e41d6275-9a80-40dd-9b83-04374a8cc591-160x160.png",
            "efficiency": "Sound & Space Constraint System"
          },
          {
            "name": "RH2VY Endeavor Line Air Handler",
            "model_image": "https://media.rheem.com/blobazrheem/az-thumbnails/products/rh2vy-endeavor-line-air-handler-19804ea7-167f-46d8-9af4-df4bcadff23a-160x160.png",
            "efficiency": "EcoNet Enabled"
          },
          {
            "name": "RH2VZ Endeavor Line Air Handler",
            "model_image": "https://media.rheem.com/blobazrheem/az-thumbnails/products/rh2vz-endeavor-line-air-handler-0e8eb1e0-6047-4478-8e1e-1154c8d1c02c-160x160.png",
            "efficiency": "EcoNet Enabled"
          },
          {
            "name": "RH3VZ Endeavor Line Air Handler",
            "model_image": "https://media.rheem.com/blobazrheem/az-thumbnails/products/rh3vz-endeavor-line-air-handler-17a81661-a2ab-4e37-8a26-f9f25e51bf51-160x160.jpg",
            "efficiency": "Motor: Constant CFM"
          },
          {
            "name": "RH2TY Endeavor Line Air Handlers",
            "model_image": "https://media.rheem.com/blobazrheem/az-thumbnails/products/rh2ty-endeavor-line-air-handlers-9ee5984d-795a-4c61-af82-c34f67ecf959-160x160.jpeg",
            "efficiency": "Constant Torque Motor (ECM)"
          },
          {
            "name": "RH2TZ Endeavor Line Air Handlers",
            "model_image": "https://media.rheem.com/blobazrheem/az-thumbnails/products/rh2tz-endeavor-line-air-handlers-de88eb92-9566-42b3-868c-9b7b8c75352c-160x160.jpg",
            "efficiency": "Constant Torque Motor (ECM)"
          },
          {
            "name": "RF2TY Endeavor Line Air Handler",
            "model_image": "https://media.rheem.com/blobazrheem/az-thumbnails/products/rf2ty-endeavor-line-air-handler-41403305-a8d7-463d-9b23-7c6b2854106e-160x160.png",
            "efficiency": "Constant Torque (ECM) Motor"
          },
          {
            "name": "RF2TZ Endeavor Line Air Handler",
            "model_image": "https://media.rheem.com/blobazrheem/az-thumbnails/products/rf2tz-endeavor-line-air-handler-32e160fa-486d-4fc2-90b7-b4fd60272a9f-160x160.png",
            "efficiency": "Constant Torque (ECM) Motor"
          },
          {
            "name": "RF1PY Endeavor Line Air Handler",
            "model_image": "https://media.rheem.com/blobazrheem/az-thumbnails/products/rf1py-endeavor-line-air-handler-ec98393e-4665-448d-96f9-aff0408a26c0-160x160.png",
            "efficiency": "PSC Motor"
          },
          {
            "name": "RF1PZ Endeavor Line Air Handler",
            "model_image": "https://media.rheem.com/blobazrheem/az-thumbnails/products/rf1pz-endeavor-line-air-handler-882c9ca6-01ed-4e31-882b-6654669023d6-160x160.png",
            "efficiency": "PSC Motor"
          },
          {
            "name": "RH1PY Endeavor Line Air Handler",
            "model_image": "https://media.rheem.com/blobazrheem/az-thumbnails/products/rh1py-endeavor-line-air-handler-3529f070-116d-4ee3-959e-f60a0c5e31e6-160x160.jpg",
            "efficiency": "PSC Motor"
          },
          {
            "name": "RH1PZ Endeavor Line Air Handler",
            "model_image": "https://media.rheem.com/blobazrheem/az-thumbnails/products/rh1pz-endeavor-line-air-handler-d9772216-2d9e-4c69-a939-2fa6bc828846-160x160.jpg",
            "efficiency": "PSC Motor"
          },
          {
            "name": "RB2TY Endeavor Line Air Handler",
            "model_image": "https://media.rheem.com/blobazrheem/az-thumbnails/products/rb2ty-endeavor-line-air-handler-4cefda2a-4931-452c-8512-b265947f14a0-160x160.png",
            "efficiency": "Constant Torque (ECM) Motor"
          },
          {
            "name": "RB2TZ Endeavor Line Air Handler",
            "model_image": "https://media.rheem.com/blobazrheem/az-thumbnails/products/rb2tz-endeavor-line-air-handler-e3ae3e90-37e6-4bc4-b878-466839df2cf8-160x160.png",
            "efficiency": "Constant Torque (ECM) Motor"
          },
          {
            "name": "High Efficiency - ECM Motor (RH2V)",
            "model_image": "https://media.rheem.com/blobazrheem/az-thumbnails/products/high-efficiency---ecm-motor-(rh2v)-94e5f6d2-8429-4aa2-881f-4b11a5cf19fc-160x160.png",
            "efficiency": "Efficiencies up to 18 SEER"
          },
          {
            "name": "High Efficiency - Two-Stage ECM Motor (RH2T)",
            "model_image": "https://media.rheem.com/blobazrheem/az-thumbnails/products/high-efficiency---two-stage-ecm-motor-(rh2t)-9a767c54-4654-43e1-85c1-ec3429ba17f3-160x160.png",
            "efficiency": "Efficiencies up to 20 SEER"
          },
          {
            "name": "High Efficiency - ECM Motor (RH1V)",
            "model_image": "https://media.rheem.com/blobazrheem/az-thumbnails/products/high-efficiency---ecm-motor-(rh1v)-558977e5-3cc2-417b-b13d-de35ce042de3-160x160.png",
            "efficiency": "Efficiencies\u00a0up to 16 SEER"
          },
          {
            "name": "Front or Bottom Return - with PSC Motor (RF1P)",
            "model_image": "https://media.rheem.com/blobazrheem/az-thumbnails/products/front-or-bottom-return---with-psc-motor-(rf1p)-1c2f6552-b0c1-4773-b3b8-8b335f6c285a-160x160.png",
            "efficiency": "Efficiency up to 15.5 SEER"
          },
          {
            "name": "High Efficiency Constant Torque (ECM) Motor (RH1T)",
            "model_image": "https://media.rheem.com/blobazrheem/az-thumbnails/products/high-efficiency-constant-torque-(ecm)-motor-(rh1t)-03e9ee77-cc1f-4808-a574-37c2574cc537-160x160.png",
            "efficiency": "Efficiencies up to 16 SEER"
          },
          {
            "name": "Front or Bottom Return - with ECM Motor (RF1T)",
            "model_image": "https://media.rheem.com/blobazrheem/az-thumbnails/products/front-or-bottom-return---with-ecm-motor-(rf1t)-524f7242-ba4a-4425-8f86-65da4579e18b-160x160.png",
            "efficiency": "Efficiencies up to 16 SEER"
          },
          {
            "name": "Standard Efficiency - PSC Motor (RH1P)",
            "model_image": "https://media.rheem.com/blobazrheem/az-thumbnails/products/standard-efficiency---psc-motor-(rh1p)-4571feb3-cfb2-494b-b54b-612c1a85679a-160x160.png",
            "efficiency": "Efficiencies up to 15 SEER"
          },
          {
            "name": "Front or Bottom Return - Slab Coil with PSC Motor (RHAL)",
            "model_image": "https://media.rheem.com/blobazrheem/az-thumbnails/products/front-or-bottom-return---slab-coil-with-psc-motor-(rhal)-5ec4b527-1b3c-4a32-82d8-54e27ba56638-160x160.png",
            "efficiency": "Efficiencies up to 15 SEER"
          },
          {
            "name": "High Efficiency - ECM Motor - 35 Cabinet Height (RBHP)",
            "model_image": "https://media.rheem.com/blobazrheem/az-thumbnails/products/high-efficiency---ecm-motor---35-cabinet-height-(rbhp)-e799f005-7660-4d1e-a21e-5a8011b3d0d5-160x160.png",
            "efficiency": "Efficiencies up to 16 SEER"
          },
          {
            "name": "Front or Bottom Return - Slab Coil with ECM Motor (RHBL)",
            "model_image": "https://media.rheem.com/blobazrheem/az-thumbnails/products/front-or-bottom-return---slab-coil-with-ecm-motor-(rhbl)-b8c12a90-1240-4cf9-83b4-572e4c3a78f5-160x160.png",
            "efficiency": "Efficiencies\u00a0up to 16 SEER"
          },
          {
            "name": "Select Series High Efficiency with ECM Motor (WBHP)",
            "model_image": "https://media.rheem.com/blobazrheem/az-thumbnails/products/select-series-high-efficiency-with-ecm-motor-(wbhp)--10549d14-4f23-4d8a-80b3-e7424d3c1b99-160x160.png",
            "efficiency": "Efficiencies up to 14 SEER"
          },
          {
            "name": "EcoNet Enabled High Efficiency Modulating with CFM Motor (RHMV)",
            "model_image": "https://media.rheem.com/blobazrheem/az-thumbnails/products/econet-enabled-high-efficiency-modulating-with-cfm-motor-(rhmv)-4203e600-caf7-487a-ab16-3a1f69eedb33-160x160.png",
            "efficiency": "EcoNet\u2122 Enabled"
          },
          {
            "name": "Hydronic Air Handler - Powered by Tankless Technology (RW1T)",
            "model_image": "https://media.rheem.com/blobazrheem/az-thumbnails/products/hydronic-air-handler---powered-by-tankless-technology-(rw1t)-ec9de272-e09b-42ca-bd35-b7f09b2c2dd7-160x160.png",
            "efficiency": "Integrated Heating and Water Heating"
          },
          {
            "name": "Hydronic Air Handler - Powered by Tankless Technology (RWMV)",
            "model_image": "https://media.rheem.com/blobazrheem/az-thumbnails/products/hydronic-air-handler---powered-by-tankless-technology-(rwmv)-e61e2a87-6221-4bdf-8a5b-c0aa04d908e9-160x160.png",
            "efficiency": "Integrated Heating and Water Heating"
          },
          {
            "name": "Hydronic Air Handler - Powered by Tankless Technology (RW1P)",
            "model_image": "https://media.rheem.com/blobazrheem/az-thumbnails/products/hydronic-air-handler---powered-by-tankless-technology-(rw1p)-3b4d0b34-8c7f-4594-b90d-c1d469ae98ab-160x160.png",
            "efficiency": "Integrated Heating and Water Heating"
          }
        ]
      },
      {
        "line": "Cooling Coils",
        "product_line_image": "https://media.rheem.com/blobazrheem/wp-content/uploads/sites/36/2018/06/coolingcoil.png",
        "models": [
          {
            "name": "RCCL",
            "model_image": "https://media.rheem.com/blobazrheem/az-thumbnails/products/rccl-8c1bd488-5579-498c-b7a2-d6bb38fd5208-160x160.jpg",
            "efficiency": "Indoor Cooling Coil"
          },
          {
            "name": "RCFY Endeavor Line Cooling Coils",
            "model_image": "https://media.rheem.com/blobazrheem/az-thumbnails/products/rcfy-endeavor-line-cooling-coils--3214be34-910e-438f-a4d9-2f142bca125b-160x160.jpg",
            "efficiency": "Airflow Capacity 600 -1900 CFM [283-897 L/s]"
          },
          {
            "name": "RCFZ Endeavor Line Cooling Coils",
            "model_image": "https://media.rheem.com/blobazrheem/az-thumbnails/products/rcfz-endeavor-line-cooling-coils-bf4fcbc4-3fde-42db-a2cd-c083fc2e51b8-160x160.jpg",
            "efficiency": "Featuring Industry Standard R-410A Refrigerant"
          },
          {
            "name": "Cased and Uncased N Coils (RCF)",
            "model_image": "https://media.rheem.com/blobazrheem/az-thumbnails/products/cased-and-uncased-n-coils-(rcf)-f4e69644-65f5-475f-a1b2-3fedab4b195a-160x160.jpg",
            "efficiency": "R-410A"
          },
          {
            "name": "Cased and Uncased N Coils (RCFP)",
            "model_image": "https://media.rheem.com/blobazrheem/az-thumbnails/products/cased-and-uncased-n-coils-(rcfp)-483edd43-ac58-44ee-bf16-41fce1fe54d5-160x160.png",
            "efficiency": "R-410A"
          },
          {
            "name": "Cased A Coil (RCQD)",
            "model_image": "https://media.rheem.com/blobazrheem/az-thumbnails/products/cased-a-coil-(rcqd)-48d6f38f-01aa-4e18-b20f-b37e58eb35ca-160x160.png",
            "efficiency": "R-410A"
          },
          {
            "name": "Cased Horizontal A Oil-Gas and Oil Furnace Applications (RCFH)",
            "model_image": "https://media.rheem.com/blobazrheem/az-thumbnails/products/cased-horizontal-a-oil-gas-and-oil-furnace-applications-(rcfh)-9379983f-7666-44ac-9461-19311bd1d811-160x160.png",
            "efficiency": "R-410A"
          },
          {
            "name": "Cased and Uncased N Coil (RCFN)",
            "model_image": "https://media.rheem.com/blobazrheem/az-thumbnails/products/cased-and-uncased-n-coil-(rcfn)-3611f591-e125-49cb-b33a-a89ebb90ccdf-160x160.png",
            "efficiency": "Cased and Uncased N-Coil"
          },
          {
            "name": "Cased and Uncased N Coil (RCFL)",
            "model_image": "https://media.rheem.com/blobazrheem/az-thumbnails/products/cased-and-uncased-n-coil-(rcfl)-f8911fae-8cc3-403f-a6b0-6127b2b32512-160x160.png",
            "efficiency": "R-410A"
          }
        ]
      },
      {
        "line": "Furnaces",
        "product_line_image": "https://media.rheem.com/blobazrheem/wp-content/uploads/sites/36/2019/01/sus-inno-product1.png",
        "models": [
          {
            "name": "R98MV Endeavor Line Prestige Series Gas Furnace",
            "model_image": "https://media.rheem.com/blobazrheem/az-thumbnails/products/r98mv-endeavor-line-prestige-series-gas-furnace-9df53416-e1b9-482c-ad2e-f59ec4cf3798-160x160.png",
            "efficiency": "98% AFUE"
          },
          {
            "name": "R801V UH Ultra Low NOx Endeavor Line Classic Series Gas Furnace",
            "model_image": "https://media.rheem.com/blobazrheem/az-thumbnails/products/r801v-uh-ultra-low-nox-endeavor-line-classic-series-gas-furnace-ef4118f4-53a7-4138-aec5-8c1e366525a6-160x160.jpg",
            "efficiency": "EcoNet Enabled"
          },
          {
            "name": "R802V DZ Endeavor Line Classic Plus Series Gas Furnace",
            "model_image": "https://media.rheem.com/blobazrheem/az-thumbnails/products/r802v-dz-endeavor-line-classic-plus-series-gas-furnace-5df30833-6738-4678-a340-390b1fcab046-160x160.png",
            "efficiency": "80% A.F.U.E."
          },
          {
            "name": "R97MV Endeavor Line Prestige Series Gas Furnace",
            "model_image": "https://media.rheem.com/blobazrheem/az-thumbnails/products/r97mv-endeavor-line-prestige-series-gas-furnace-e87d5568-2cb8-42d8-bf3a-df503ffdd5ec-160x160.png",
            "efficiency": "97% AFUE"
          },
          {
            "name": "R962V Endeavor Line Classic Plus Series Gas Furnace",
            "model_image": "https://media.rheem.com/blobazrheem/az-thumbnails/products/r962v-endeavor-line-classic-plus-series-gas-furnace-4ed25d6e-d6ca-4a99-83c4-0da9eddd6cb0-160x160.png",
            "efficiency": "EcoNet Enabled"
          },
          {
            "name": "R951V Endeavor Line Classic Plus Series Ultra Low NOx Gas Furnace",
            "model_image": "https://media.rheem.com/blobazrheem/az-thumbnails/products/r951v-endeavor-line-classic-plus-series-ultra-low-nox-gas-furnace-5b70b313-208d-4bbc-9750-5b9e7f218a1c-160x160.png",
            "efficiency": "Certified unit meets 14ng/jNOx emission standard - reducing NOx emissions by 65%"
          },
          {
            "name": "R951V Endeavor Line Classic Plus Series Gas Furnace",
            "model_image": "https://media.rheem.com/blobazrheem/az-thumbnails/products/r951v-endeavor-line-classic-plus-series-gas-furnace-0e97f3bd-d248-41c1-afe3-bd09b9d6f8e5-160x160.jpg",
            "efficiency": "EcoNet Enabled"
          },
          {
            "name": "R951T Endeavor Line Classic Series Gas Furnace",
            "model_image": "https://media.rheem.com/blobazrheem/az-thumbnails/products/r951t-endeavor-line-classic-series-gas-furnace-53ecbacd-e157-4a5a-bfea-6cd8475b9bbf-160x160.png",
            "efficiency": "Constant Torque Motor"
          },
          {
            "name": "R921V Endeavor Line Classic Series Gas Furnace",
            "model_image": "https://media.rheem.com/blobazrheem/az-thumbnails/products/r921v-endeavor-line-classic-series-gas-furnace-bbfe8345-b7a3-4ba5-a4e1-7b99b2f47ee9-160x160.png",
            "efficiency": "EcoNet Enabled"
          },
          {
            "name": "R921T Endeavor Line Classic Series Gas Furnace",
            "model_image": "https://media.rheem.com/blobazrheem/az-thumbnails/products/r921t-endeavor-line-classic-series-gas-furnace-a7f721b9-f9d7-42db-8a62-e2031742f9b7-160x160.png",
            "efficiency": "Constant Torque Motor"
          },
          {
            "name": "R802V UH Endeavor Line Classic Plus Series Gas Furnace",
            "model_image": "https://media.rheem.com/blobazrheem/az-thumbnails/products/r802v-uh-endeavor-line-classic-plus-series-gas-furnace--3f15b3ae-0454-49c6-a134-ed4018866895-160x160.png",
            "efficiency": "EcoNet Enabled"
          },
          {
            "name": "R801V Endeavor Line Classic Series Gas Furnace",
            "model_image": "https://media.rheem.com/blobazrheem/az-thumbnails/products/r801v-endeavor-line-classic-series-gas-furnace-bf2b0a9a-f15a-43a5-85b6-a3b4af1839ab-160x160.png",
            "efficiency": "EcoNet Enabled"
          },
          {
            "name": "R801V DZ Endeavor Line Classic Series Gas Furnace",
            "model_image": "https://media.rheem.com/blobazrheem/az-thumbnails/products/r801v-dz-endeavor-line-classic-series-gas-furnace-877a80ea-9fb3-4766-8d04-1ec8deefada5-160x160.png",
            "efficiency": "EcoNet Enabled"
          },
          {
            "name": "R801T UH Endeavor Line Classic Series Gas Furnace",
            "model_image": "https://media.rheem.com/blobazrheem/az-thumbnails/products/r801t-uh-endeavor-line-classic-series-gas-furnace-64837f5f-83a0-43bb-b008-fe686d37413f-160x160.png",
            "efficiency": "Constant Torque Motor"
          },
          {
            "name": "R801T DZ Endeavor Line Classic Series Gas Furnace",
            "model_image": "https://media.rheem.com/blobazrheem/az-thumbnails/products/r801t-dz-endeavor-line-classic-series-gas-furnace-1e6dd421-4580-47d8-8582-2f41c0b3094b-160x160.png",
            "efficiency": "Constant Torque Motor"
          },
          {
            "name": "R801T Ultra Low NOx Endeavor Line Classic Series Gas Furnace",
            "model_image": "https://media.rheem.com/blobazrheem/az-thumbnails/products/r801t-ultra-low-nox-endeavor-line-classic-series-gas-furnace-5ed1af69-4aa9-4d6a-92e5-33c18c5703b0-160x160.png",
            "efficiency": "80% AFUE"
          },
          {
            "name": "EcoNet Enabled Prestige Series Variable Speed Upflow/Horizontal (R802V)",
            "model_image": "https://media.rheem.com/blobazrheem/az-thumbnails/products/econet-enabled-prestige-series-variable-speed-upflow-horizontal-(r802v)-7af32ba0-88d2-4f9e-810c-eb189cf331c9-160x160.png",
            "efficiency": "Two-stage operation"
          },
          {
            "name": "Classic Plus Series Up to 92 AFUE Constant Torque ECM Motor Multi Position (R92T)",
            "model_image": "https://media.rheem.com/blobazrheem/az-thumbnails/products/classic-plus-series-up-to-92-afue-constant-torque-ecm-motor-multi-position-(r92t)-676afe43-f969-417f-b556-2d0db30a87be-160x160.png",
            "efficiency": "92% residential gas furnace CSA certified"
          },
          {
            "name": "R801T Classic Plus Series Ultra Low NOx 80 AFUE Upflow Gas Furnace",
            "model_image": "https://media.rheem.com/blobazrheem/az-thumbnails/products/r801t-classic-plus-series-ultra-low-nox-80-afue-upflow-gas-furnace-7d7beb68-d1c6-43a8-b587-ac402598d07a-160x160.png",
            "efficiency": "FIRST CERTIFIED UNITto meet Rule 1111 14 ng/J NOx emission standards*"
          },
          {
            "name": "R801T Classic Series 80 AFUE Upflow/Horizontal",
            "model_image": "https://media.rheem.com/blobazrheem/az-thumbnails/products/r801t-classic-series-80-afue-upflow-horizontal-efab967c-26e8-4398-94be-f9c3fe619713-160x160.png",
            "efficiency": "Three way multi poise design"
          },
          {
            "name": "Prestige Series Up to 80 AFUE Variable Speed Downflow (R802V)",
            "model_image": "https://media.rheem.com/blobazrheem/az-thumbnails/products/prestige-series-up-to-80-afue-variable-speed-downflow-(r802v)-00b9f25c-6766-4c1c-b8f4-8df44454cb92-160x160.png",
            "efficiency": "Two-stage operation"
          },
          {
            "name": "Classic Plus Series 80 AFUE 2-Stage Upflow/Horizontal (R802T)",
            "model_image": "https://media.rheem.com/blobazrheem/az-thumbnails/products/classic-plus-series-80-afue-2-stage-upflow-horizontal-(r802t)-fc3b1aa5-b3c8-43f7-8194-42cf54705fce-160x160.png",
            "efficiency": "Three way multi poise design"
          },
          {
            "name": "Classic Plus Series Up to 96 AFUE Constant Torque ECM Motor Multi Position (R96T)",
            "model_image": "https://media.rheem.com/blobazrheem/az-thumbnails/products/classic-plus-series-up-to-96-afue-constant-torque-ecm-motor-multi-position-(r96t)-4f82a88b-4161-45c6-a2df-9e6436dee2f1-160x160.png",
            "efficiency": "Up to 96% residential gas furnace CSA certified"
          },
          {
            "name": "Classic Series 80 AFUE Downflow (R801T)",
            "model_image": "https://media.rheem.com/blobazrheem/az-thumbnails/products/classic-series-80-afue-downflow-(r801t)-ada1169a-778e-4ffe-a64f-283e0e01fb85-160x160.png",
            "efficiency": "Single-stage"
          },
          {
            "name": "Prestige Series EcoNet Enabled Modulating R97V",
            "model_image": "https://media.rheem.com/blobazrheem/az-thumbnails/products/prestige-series-econet-enabled-modulating-r97v--8168eb14-a93f-4381-bb1b-0c7934ebb1cd-160x160.png",
            "efficiency": "ECM Motor"
          },
          {
            "name": "Classic Series 80 AFUE Upflow/Horizontal (R801C)",
            "model_image": "https://media.rheem.com/blobazrheem/az-thumbnails/products/classic-series-80-afue-upflow-horizontal-(r801c)-966d7943-859e-45e0-bb84-c32e3346e282-160x160.png",
            "efficiency": "Three way multi-poise deign"
          },
          {
            "name": "EcoNet Enabled Prestige Series Modulation Upflow Gas Furnace (R98V)",
            "model_image": "https://media.rheem.com/blobazrheem/az-thumbnails/products/econet-enabled-prestige-series-modulation-upflow-gas-furnace-(r98v)-dc1220a6-2648-4ea1-818f-35b984b0729c-160x160.png",
            "efficiency": "EcoNet\u2122\u00a0Enabled"
          },
          {
            "name": "EcoNet Enabled Prestige Series Variable Speed Multi Position (R96V)",
            "model_image": "https://media.rheem.com/blobazrheem/az-thumbnails/products/econet-enabled-prestige-series-variable-speed-multi-position-(r96v)-8f5a4cab-df12-4dab-933b-a64bb03c1daf-160x160.png",
            "efficiency": "96% residential gas furnace CSA certified"
          },
          {
            "name": "Classic Series Up to 95 AFUE ECM Motor Multi Position (R95T)",
            "model_image": "https://media.rheem.com/blobazrheem/az-thumbnails/products/classic-series-up-to-95-afue-ecm-motor-multi-position-(r95t)-15fcfd74-ec60-406e-a12b-d40ee8c7e53e-160x160.png",
            "efficiency": "95% residential gas furnace CSA certified"
          },
          {
            "name": "Classic Series: 80% AFUE Upflow/Horizontal (R801S)",
            "model_image": "https://media.rheem.com/blobazrheem/az-thumbnails/products/classic-series--80--afue-upflow-horizontal-(r801s)-85e18b7d-08cc-4e85-969e-aeadb1041ff1-160x160.png",
            "efficiency": "Single-stage"
          },
          {
            "name": "Classic Series: 80% AFUE Downflow (R801S)",
            "model_image": "https://media.rheem.com/blobazrheem/az-thumbnails/products/classic-series--80--afue-downflow-(r801s)-872cefea-0714-4910-961c-0c268547e064-160x160.png",
            "efficiency": "Single-stage"
          }
        ]
      },
      {
        "line": "Heat Pumps",
        "product_line_image": "https://media.rheem.com/blobazrheem/wp-content/uploads/sites/36/2024/04/heatpump.png",
        "models": [
          {
            "name": "RP19AY Endeavor Line Prestige Series Heat Pump",
            "model_image": "https://media.rheem.com/blobazrheem/az-thumbnails/products/rp19ay-endeavor-line-prestige-series-heat-pump-885db9f3-95e0-42ce-a130-acb5609e5daf-160x160.png",
            "efficiency": "EcoNet Enabled"
          },
          {
            "name": "RD18AY Endeavor Line Prestige Series Universal Heat Pumps",
            "model_image": "https://media.rheem.com/blobazrheem/az-thumbnails/products/rd18ay-endeavor-line-prestige-series-universal-heat-pumps-b39032a2-87be-4d9d-b153-1d2b72d56a7f-160x160.png",
            "efficiency": "Cooling & Heating \u00a0Efficiencies up to: \u00a019 SEER2/ 13 EER2 / 10.0 HSPF2"
          },
          {
            "name": "RP18AZ Endeavor Line Prestige Series Heat Pump",
            "model_image": "https://media.rheem.com/blobazrheem/az-thumbnails/products/rp18az-endeavor-line-prestige-series-heat-pump-7c32e6fc-c017-45fe-8c6d-164ef5f824f2-160x160.png",
            "efficiency": "EcoNet Enabled"
          },
          {
            "name": "RD17AZ Endeavor Line Classic Plus Series Universal Heat Pumps",
            "model_image": "https://media.rheem.com/blobazrheem/az-thumbnails/products/rd17az-endeavor-line-classic-plus-series-universal-heat-pumps-d8fc170d-95b4-4131-95d9-5879cbfd38d3-160x160.png",
            "efficiency": "Cooling Efficiencies up to: \u00a019 SEER2/ 12 EER2"
          },
          {
            "name": "RD16AZ Endeavor Line Classic Plus Series (Cold Climate Sound & Space Constraint Solution)",
            "model_image": "https://media.rheem.com/blobazrheem/az-thumbnails/products/rd16az-endeavor-line-classic-plus-series-(cold-climate-sound-&-space-constraint-solution)-b57412ea-ec46-4605-9318-07573683e559-160x160.png",
            "efficiency": "Matched with Air Handler RHMVZ**N to offer a Cold Climate Sound & Space Constraint Solution"
          },
          {
            "name": "RP16AZ Endeavor Line Classic Plus Series Heat Pump",
            "model_image": "https://media.rheem.com/blobazrheem/az-thumbnails/products/rp16az-endeavor-line-classic-plus-series-heat-pump-38354949-bae2-4a98-a847-f4f48831c74d-160x160.png",
            "efficiency": "EcoNet\u00ae Enabled"
          },
          {
            "name": "RP15AY Endeavor Line Classic Plus Series Heat Pumps",
            "model_image": "https://media.rheem.com/blobazrheem/az-thumbnails/products/rp15ay-endeavor-line-classic-plus-series-heat-pumps-16118a50-45c9-433a-b301-d551393eae3c-160x160.jpeg",
            "efficiency": "Cooling Efficiencies: up to 16 SEER2 / 11.7 EER2"
          },
          {
            "name": "RP15AZ Endeavor Line Classic Plus Series Heat Pumps",
            "model_image": "https://media.rheem.com/blobazrheem/az-thumbnails/products/rp15az-endeavor-line-classic-plus-series-heat-pumps-140a0bd8-27b5-4c72-af0c-bb1fce8a86dd-160x160.jpg",
            "efficiency": "Cooling Efficiency: 15.2 SEER2/11.7 EER2"
          },
          {
            "name": "RP14AY Endeavor Line Classic Series Heat Pump",
            "model_image": "https://media.rheem.com/blobazrheem/az-thumbnails/products/rp14ay-endeavor-line-classic-series-heat-pump-7420368b-fbc8-4f3a-9da8-3ccc3f8ab10d-160x160.jpeg",
            "efficiency": "Cooling Efficiencies up to: 15.2 SEER2 / 11.7 EER2"
          },
          {
            "name": "RP14AZ Endeavor Line Classic Series iM Heat Pumps",
            "model_image": "https://media.rheem.com/blobazrheem/az-thumbnails/products/rp14az-endeavor-line-classic-series-im-heat-pumps-54207498-afb0-4449-a347-bca3c0595ebb-160x160.jpg",
            "efficiency": "Cooling Efficiencies: up to 14.3 SEER2 / 10.4 EER2"
          },
          {
            "name": "WP15AY Endeavor Line Select Series Heat Pump",
            "model_image": "https://media.rheem.com/blobazrheem/az-thumbnails/products/wp15ay-endeavor-line-select-series-heat-pump-f55fc369-d72e-43a6-945a-b503089061d2-160x160.png",
            "efficiency": "Cooling Efficiencies up to: 15.2 SEER2/11.7 EER2"
          },
          {
            "name": "WP15AZ Endeavor Line Select Series Heat Pump",
            "model_image": "https://media.rheem.com/blobazrheem/az-thumbnails/products/wp15az-endeavor-line-select-series-heat-pump-2a1d77cb-c527-4076-ba43-cda614f3dea8-160x160.png",
            "efficiency": "Cooling Efficiencies up to: 16 SEER2/11.7 EER2"
          },
          {
            "name": "WP14AY Endeavor Line Select Series Heat Pump",
            "model_image": "https://media.rheem.com/blobazrheem/az-thumbnails/products/wp14ay-endeavor-line-select-series-heat-pump-bb072870-aa1f-42f1-aaf5-218ffac447d2-160x160.png",
            "efficiency": "Cooling Efficiencies up to: 15.2 SEER2/11.7 EER2"
          },
          {
            "name": "WP14AZ Endeavor Line Select Series Heat Pump",
            "model_image": "https://media.rheem.com/blobazrheem/az-thumbnails/products/wp14az-endeavor-line-select-series-heat-pump-bfb65b8e-2176-4487-9988-f1dd39663ddb-160x160.png",
            "efficiency": "Cooling Efficiency: 14.3 SEER2/9.0 EER2"
          },
          {
            "name": "WSP14AZ Endeavor Line Select Series Heat Pump",
            "model_image": "https://media.rheem.com/blobazrheem/az-thumbnails/products/wsp14az-endeavor-line-select-series-heat-pump-1132beaa-08ee-4737-bf6a-58a6baa1f043-160x160.png",
            "efficiency": "Cooling Efficiencies up to: 14.3 SEER2/10.4 EER2"
          },
          {
            "name": "EcoNet Enabled Prestige Series Variable Speed (RP20)",
            "model_image": "https://media.rheem.com/blobazrheem/az-thumbnails/products/econet-enabled-prestige-series-variable-speed-(rp20)-8fe39eaa-5ccd-46b3-9d32-325cc5914f77-160x160.png",
            "efficiency": "Cooling Efficiency: 20.5 SEER /14.5 EER"
          },
          {
            "name": "EcoNet Enabled Classic Plus Series Three-Stage (RP17)",
            "model_image": "https://media.rheem.com/blobazrheem/az-thumbnails/products/econet-enabled-classic-plus-series-three-stage-(rp17)-b8dfce21-b51c-46ba-bfa0-98576685a870-160x160.png",
            "efficiency": "Efficiencies up to 18.5 SEER/13 EER"
          },
          {
            "name": "Classic Plus Series RP17H Side-Discharge Heat Pump",
            "model_image": "https://media.rheem.com/blobazrheem/az-thumbnails/products/classic-plus-series-rp17h-side-discharge-heat-pump-0166750c-af26-44fc-a377-78552d4454a8-160x160.png",
            "efficiency": "Matched with Air Handler RHMV*****N to offer a Sound & Space Constraint Solution"
          },
          {
            "name": "Classic Series Two Stage (RP16)",
            "model_image": "https://media.rheem.com/blobazrheem/az-thumbnails/products/classic-series-two-stage-(rp16)-77e7c8e0-be50-4305-9aa8-cc00ca94e30b-160x160.png",
            "efficiency": "Efficiency: 16 SEER / 13 EER 9.0 HSPF"
          },
          {
            "name": "Classic Series Single Stage (RP15)",
            "model_image": "https://media.rheem.com/blobazrheem/az-thumbnails/products/classic-series-single-stage-(rp15)-25f455ea-9879-4c63-9dfe-26311edcb1fb-160x160.png",
            "efficiency": "Efficiency: 15 SEER/13 EER/9.0 HSPF"
          },
          {
            "name": "Classic Series Single Stage (RP14)",
            "model_image": "https://media.rheem.com/blobazrheem/az-thumbnails/products/classic-series-single-stage-(rp14)-939e8018-17b0-4c13-ab8b-8ed7b1b1e18b-160x160.png",
            "efficiency": "Efficiency: 15 SEER/12.5EER/9. HSPF"
          },
          {
            "name": "Classic Series Single Stage (RP14-F)",
            "model_image": "https://media.rheem.com/blobazrheem/az-thumbnails/products/classic-series-single-stage-(rp14-f)-3b8df02b-5536-4615-b0d6-eeb368c1a0bf-160x160.png",
            "efficiency": "Efficiency: 15 SEER/12,5 EER/9.0 HSPF"
          },
          {
            "name": "Select Series 14 SEER (WP14A)",
            "model_image": "https://media.rheem.com/blobazrheem/az-thumbnails/products/select-series-14-seer-(wp14a)-281012d9-74d7-4950-b89e-3bb98274f115-160x160.png",
            "efficiency": "Cooling efficiencies up to 14 SEER/11.5 EER"
          },
          {
            "name": "Select Series 14 SEER (WP14F)",
            "model_image": "https://media.rheem.com/blobazrheem/az-thumbnails/products/select-series-14-seer-(wp14f)--4002605e-25b6-4b1a-8e3a-d95f5135aac4-160x160.png",
            "efficiency": "Cooling efficiencies up to 14 SEER/11.5EER"
          }
        ]
      },
      {
        "line": "Mini-Splits",
        "product_line_image": "https://media.rheem.com/blobazrheem/wp-content/uploads/sites/36/2024/04/mini-split2.png",
        "models": [
          {
            "name": "ROHJ2S Endeavor Line Classic Plus Series Multi-Zone Ductless Heat Pump",
            "model_image": "https://media.rheem.com/blobazrheem/az-thumbnails/products/rohj2s-endeavor-line-classic-plus-series-multi-zone-ductless-heat-pump-9f425985-a786-4793-bb40-a2136b03a6be-160x160.png",
            "efficiency": ""
          },
          {
            "name": "RICHJ8S Endeavor Line Classic Plus Multi-Zone Ductless Indoor Compact Cassette Air Handler",
            "model_image": "https://media.rheem.com/blobazrheem/az-thumbnails/products/richj8s-endeavor-line-classic-plus-multi-zone-ductless-indoor-compact-cassette-air-handler-da7543fa-108e-4933-8d74-36877326d477-160x160.png",
            "efficiency": ""
          },
          {
            "name": "RIDHJ8S Endeavor Line Classic Plus Multi-Zone Ductless Indoor Concealed Ducted Air Handler",
            "model_image": "https://media.rheem.com/blobazrheem/az-thumbnails/products/ridhj8s-endeavor-line-classic-plus-multi-zone-ductless-indoor-concealed-ducted-air-handler-c97469a8-d787-4d84-85e9-9b2a921512ba-160x160.png",
            "efficiency": ""
          },
          {
            "name": "RIDHJ8S Endeavor Line Classic Plus Single-Zone Ductless Indoor Concealed Ducted Air Handler",
            "model_image": "https://media.rheem.com/blobazrheem/az-thumbnails/products/ridhj8s-endeavor-line-classic-plus-single-zone-ductless-indoor-concealed-ducted-air-handler-9cbf940a-06d9-469c-bade-bcbf0eb0de11-160x160.png",
            "efficiency": ""
          },
          {
            "name": "RIFHJ2S Endeavor Line Classic Plus Multi-Zone Ductless Indoor Floor Mount Air Handler",
            "model_image": "https://media.rheem.com/blobazrheem/az-thumbnails/products/rifhj2s-endeavor-line-classic-plus-multi-zone-ductless-indoor-floor-mount-air-handler-125b9f8b-522a-4ca0-8893-89eefcdfb970-160x160.png",
            "efficiency": ""
          },
          {
            "name": "RO1HA3S Endeavor Line Classic Series Single Zone Ductless Heat Pump",
            "model_image": "https://media.rheem.com/blobazrheem/az-thumbnails/products/ro1ha3s-endeavor-line-classic-series-single-zone-ductless-heat-pump-e1c83cf8-b451-4317-9fb9-23dd5566ec2f-160x160.png",
            "efficiency": ""
          },
          {
            "name": "RIWHJ3S Endeavor Line Classic Series Multi-Zone Ductless Wall Mount Air Handler",
            "model_image": "https://media.rheem.com/blobazrheem/az-thumbnails/products/riwhj3s-endeavor-line-classic-series-multi-zone-ductless-wall-mount-air-handler-24cce915-6fe9-4a12-be08-602559db8db2-160x160.png",
            "efficiency": ""
          },
          {
            "name": "RIGHJ8S Endeavor Line Classic Plus Single-Zone Ductless Indoor Large Cassette Air Handler",
            "model_image": "https://media.rheem.com/blobazrheem/az-thumbnails/products/righj8s-endeavor-line-classic-plus-single-zone-ductless-indoor-large-cassette-air-handler-d883e30e-4983-40d1-9d62-da5162afeca5-160x160.png",
            "efficiency": ""
          },
          {
            "name": "RIMHJ8S Endeavor Line Classic Plus Single-Zone Ductless Indoor Mid Static Duct Air Handler",
            "model_image": "https://media.rheem.com/blobazrheem/az-thumbnails/products/rimhj8s-endeavor-line-classic-plus-single-zone-ductless-indoor-mid-static-duct-air-handler-fd346e96-55cd-485b-b3e6-a6b00aa1772a-160x160.png",
            "efficiency": ""
          },
          {
            "name": "RO1HJ1S Endeavor Line Prestige Series Single-Zone Ductless Heat Pump",
            "model_image": "https://media.rheem.com/blobazrheem/az-thumbnails/products/ro1hj1s-endeavor-line-prestige-series-single-zone-ductless-heat-pump-3395e443-febc-425c-af93-1a8e3ac192f2-160x160.png",
            "efficiency": ""
          },
          {
            "name": "RO1HJ2H Endeavor Line Classic Plus Series Single-Zone Ductless Heat Pump",
            "model_image": "https://media.rheem.com/blobazrheem/az-thumbnails/products/ro1hj2h-endeavor-line-classic-plus-series-single-zone-ductless-heat-pump-a72ff02e-cbca-466e-a403-68750080de20-160x160.png",
            "efficiency": ""
          },
          {
            "name": "RISHJ8S Endeavor Line Classic Plus Single-Zone Ductless Indoor Ceiling Suspended Air Handler",
            "model_image": "https://media.rheem.com/blobazrheem/az-thumbnails/products/rishj8s-endeavor-line-classic-plus-single-zone-ductless-indoor-ceiling-suspended-air-handler-c4b5f1ca-fda9-491c-a877-4cf361e95fed-160x160.png",
            "efficiency": ""
          },
          {
            "name": "RIWHA3S Endeavor Line Classic Series Single-Zone Ductless Wall Mount Air Handler",
            "model_image": "https://media.rheem.com/blobazrheem/az-thumbnails/products/riwha3s-endeavor-line-classic-series-single-zone-ductless-wall-mount-air-handler-66fb87a9-38bc-45b5-86a8-75572a35cc8a-160x160.png",
            "efficiency": ""
          },
          {
            "name": "RO1HJ2S Endeavor Line Classic Plus Series Single-Zone Ductless Heat Pump",
            "model_image": "https://media.rheem.com/blobazrheem/az-thumbnails/products/ro1hj2s-endeavor-line-classic-plus-series-single-zone-ductless-heat-pump-17dbc9ad-e4fd-4ef1-9233-fad4f64a7591-160x160.png",
            "efficiency": ""
          },
          {
            "name": "RIWHJ1S Endeavor Line Prestige Series Single-Zone Ductless Indoor Wall Mount Air Handler",
            "model_image": "https://media.rheem.com/blobazrheem/az-thumbnails/products/riwhj1s-endeavor-line-prestige-series-single-zone-ductless-indoor-wall-mount-air-handler-99a88407-7d5c-42c8-8cc7-b7c07e579c41-160x160.png",
            "efficiency": ""
          },
          {
            "name": "R01HJ3S Endeavor Line Classic Series Single Zone Ductless Heat Pump",
            "model_image": "https://media.rheem.com/blobazrheem/az-thumbnails/products/r01hj3s-endeavor-line-classic-series-single-zone-ductless-heat-pump-943bfa1d-281c-4ecf-b66c-3cce4167c96d-160x160.png",
            "efficiency": ""
          },
          {
            "name": "RIWHJ2S Endeavor Line Classic Plus Single-Zone Ductless Indoor Wall Mount Air Handler",
            "model_image": "https://media.rheem.com/blobazrheem/az-thumbnails/products/riwhj2s-endeavor-line-classic-plus-single-zone-ductless-indoor-wall-mount-air-handler-8e79f2d3-4427-40da-9a9b-da045154f1c3-160x160.png",
            "efficiency": ""
          },
          {
            "name": "RO1HJ8S Endeavor Line Classic Plus Series Single-Zone Ductless Heat Pump",
            "model_image": "https://media.rheem.com/blobazrheem/az-thumbnails/products/ro1hj8s-endeavor-line-classic-plus-series-single-zone-ductless-heat-pump-aff361fd-e299-491b-9607-b1a5e1cc4a42-160x160.png",
            "efficiency": ""
          },
          {
            "name": "RIWHJ3S Endeavor Line Classic Series Single-Zone Ductless Wall Mount Air Handler",
            "model_image": "https://media.rheem.com/blobazrheem/az-thumbnails/products/riwhj3s-endeavor-line-classic-series-single-zone-ductless-wall-mount-air-handler-47ac87d3-ac46-454b-a0ec-245929ecaea8-160x160.png",
            "efficiency": ""
          },
          {
            "name": "Rheem Mini Split Single Zone Outdoor Heat Pump ROSH24ASJ",
            "model_image": "https://media.rheem.com/blobazrheem/az-thumbnails/products/rheem-mini-split-single-zone-outdoor-heat-pump-rosh24asj-3bb7fd4a-0752-4ef6-b103-152697651a5f-160x160.png",
            "efficiency": "Extensive Lineup from 9,000 to 42,000 BTH/h"
          },
          {
            "name": "Rheem Mini Split Single Zone Outdoor Heat Pump ROSH12AFWJ",
            "model_image": "https://media.rheem.com/blobazrheem/az-thumbnails/products/rheem-mini-split-single-zone-outdoor-heat-pump-rosh12afwj--a29fa527-617e-4955-9fce-2dea9338d615-160x160.png",
            "efficiency": "Extensive Lineup from 9,000 to 42,000 BTH/h"
          },
          {
            "name": "Rheem Mini Split Single Zone Indoor Wall Mount Air Handler RIWH36AXJ",
            "model_image": "https://media.rheem.com/blobazrheem/az-thumbnails/products/rheem-mini-split-single-zone-indoor-wall-mount-air-handler-riwh36axj-d37b4db9-67dc-45eb-afb5-52f70ce6cd87-160x160.png",
            "efficiency": "Extensive Lineup from 9,000 to 42,000 BTH/h"
          },
          {
            "name": "Rheem Mini Split Single Zone Outdoor Heat Pump ROSH15AHWJ",
            "model_image": "https://media.rheem.com/blobazrheem/az-thumbnails/products/rheem-mini-split-single-zone-outdoor-heat-pump-rosh15ahwj-81b65991-a92f-45a3-bb93-0867ea597839-160x160.png",
            "efficiency": "Extensive Lineup from 9,000 to 42,000 BTH/h"
          },
          {
            "name": "Rheem Mini Split Single Zone Outdoor Heat Pump ROSH24AXFWJ",
            "model_image": "https://media.rheem.com/blobazrheem/az-thumbnails/products/rheem-mini-split-single-zone-outdoor-heat-pump-rosh24axfwj-5f1a8123-3d23-436f-821d-b48c09d7c5d4-160x160.png",
            "efficiency": "Extensive Lineup from 9,000 to 42,000 BTH/h"
          },
          {
            "name": "Rheem Mini Split Single Zone Indoor Wall Mount Air Handler RIWH15AHWJ",
            "model_image": "https://media.rheem.com/blobazrheem/az-thumbnails/products/rheem-mini-split-single-zone-indoor-wall-mount-air-handler-riwh15ahwj-b832c67a-fca7-456a-bf8f-9bf0d68d64bb-160x160.png",
            "efficiency": "Extensive Lineup from 9,000 to 42,000 BTH/h"
          },
          {
            "name": "Rheem Mini Split Single Zone Outdoor Heat Pump ROSH30AXJ",
            "model_image": "https://media.rheem.com/blobazrheem/az-thumbnails/products/rheem-mini-split-single-zone-outdoor-heat-pump-rosh30axj-b1d80911-e933-4c6d-9d59-4ad889adf552-160x160.png",
            "efficiency": "Extensive Lineup from 9,000 to 42,000 BTH/h"
          },
          {
            "name": "Rheem Mini Split Single Zone Outdoor Heat Pump ROSH18AXFWJ",
            "model_image": "https://media.rheem.com/blobazrheem/az-thumbnails/products/rheem-mini-split-single-zone-outdoor-heat-pump-rosh18axfwj-b8a47c5d-6d50-4f67-a13c-4189adc4d185-160x160.png",
            "efficiency": "Extensive Lineup from 9,000 to 42,000 BTH/h"
          },
          {
            "name": "Rheem Mini Split Single Zone Indoor Wall Mount Air Handler RIWH09AVSA",
            "model_image": "https://media.rheem.com/blobazrheem/az-thumbnails/products/rheem-mini-split-single-zone-indoor-wall-mount-air-handler-riwh09avsa-bd4e8890-4b94-4b3b-aeba-2c76caf14062-160x160.png",
            "efficiency": "Extensive Lineup from 9,000 to 42,000 BTH/h"
          },
          {
            "name": "Rheem Mini Split Single Zone Indoor Wall Mount Air Handler RIWH24AVFJ",
            "model_image": "https://media.rheem.com/blobazrheem/az-thumbnails/products/rheem-mini-split-single-zone-indoor-wall-mount-air-handler-riwh24avfj-ebf08086-1b24-436a-a1d5-10c35edc491a-160x160.png",
            "efficiency": "Extensive Lineup from 9,000 to 42,000 BTH/h"
          },
          {
            "name": "Rheem Mini Split Multi Zone Indoor Wall Mount Air Handler RIWH18AVFJ",
            "model_image": "https://media.rheem.com/blobazrheem/az-thumbnails/products/rheem-mini-split-multi-zone-indoor-wall-mount-air-handler-riwh18avfj-d4d45009-5258-465b-9a78-9f172b4864b2-160x160.png",
            "efficiency": "Custom combinations with ability to connect 2 to 5 indoor units with one outdoor unit"
          },
          {
            "name": "Rheem Mini Split Multi Zone Indoor Wall Mount Air Handler RIWH12AVFJ",
            "model_image": "https://media.rheem.com/blobazrheem/az-thumbnails/products/rheem-mini-split-multi-zone-indoor-wall-mount-air-handler-riwh12avfj--e232096b-ac45-47d3-ae04-63fcc6fb178f-160x160.png",
            "efficiency": "Custom combinations with ability to connect 2 to 5 indoor units with one outdoor unit"
          },
          {
            "name": "Rheem Mini Split Multi Zone Outdoor Unit Heat Pump ROMH18AFXZJ",
            "model_image": "https://media.rheem.com/blobazrheem/az-thumbnails/products/rheem-mini-split-multi-zone-outdoor-unit-heat-pump-romh18afxzj--0d23e3f9-461b-4b43-a34e-5930a41c0c52-160x160.png",
            "efficiency": "Custom combinations with ability to connect 2 to 5 indoor units with one outdoor unit"
          },
          {
            "name": "Rheem Mini Split Single Zone Outdoor Heat Pump ROSH12AHWJ",
            "model_image": "https://media.rheem.com/blobazrheem/az-thumbnails/products/rheem-mini-split-single-zone-outdoor-heat-pump-rosh12ahwj--b97c784a-de07-4d64-bc97-3b3a4b85071b-160x160.png",
            "efficiency": "Extensive Lineup from 9,000 to 42,000 BTH/h"
          },
          {
            "name": "Rheem Mini Split Multi Zone Indoor Wall Mount Air Handler RIWH15AVFJ",
            "model_image": "https://media.rheem.com/blobazrheem/az-thumbnails/products/rheem-mini-split-multi-zone-indoor-wall-mount-air-handler-riwh15avfj-3373ff99-0256-43bd-b128-aced2f5eb9b4-160x160.png",
            "efficiency": "Custom combinations with ability to connect 2 to 5 indoor units with one outdoor unit"
          },
          {
            "name": "Rheem Mini Split Multi Zone Outdoor Unit Heat Pump ROMH36AFXZJ",
            "model_image": "https://media.rheem.com/blobazrheem/az-thumbnails/products/rheem-mini-split-multi-zone-outdoor-unit-heat-pump-romh36afxzj-32b954aa-e5a6-41a2-b3e2-eb3edfa62030-160x160.png",
            "efficiency": "Custom combinations with ability to connect 2 to 5 indoor units with one outdoor unit"
          },
          {
            "name": "Rheem Mini Split Multi Zone Indoor Wall Mount Air Handler RIWH09AVFJ",
            "model_image": "https://media.rheem.com/blobazrheem/az-thumbnails/products/rheem-mini-split-multi-zone-indoor-wall-mount-air-handler-riwh09avfj-715cada6-d876-4c23-9df5-12495af980f1-160x160.png",
            "efficiency": "Custom combinations with ability to connect 2 to 5 indoor units with one outdoor unit"
          },
          {
            "name": "Rheem Mini Split Single Zone Outdoor Heat Pump ROSH09AVSA",
            "model_image": "https://media.rheem.com/blobazrheem/az-thumbnails/products/rheem-mini-split-single-zone-outdoor-heat-pump-rosh09avsa-5720023b-5733-4e10-a24e-a548236a7063-160x160.png",
            "efficiency": "Extensive Lineup from 9,000 to 42,000 BTH/h"
          },
          {
            "name": "Rheem Mini Split Single Zone Indoor Wall Mount Air Handler RIWH18ASJ",
            "model_image": "https://media.rheem.com/blobazrheem/az-thumbnails/products/rheem-mini-split-single-zone-indoor-wall-mount-air-handler-riwh18asj-fedc6b51-1e20-4a7b-86e6-7d0a45b10c1f-160x160.png",
            "efficiency": "Extensive Lineup from 9,000 to 42,000 BTH/h"
          },
          {
            "name": "Rheem Mini Split Single Zone Outdoor Heat Pump ROSH12AVSA",
            "model_image": "https://media.rheem.com/blobazrheem/az-thumbnails/products/rheem-mini-split-single-zone-outdoor-heat-pump-rosh12avsa-44868a5f-cbb3-4dc5-9d2f-66c4a4687327-160x160.png",
            "efficiency": "Extensive Lineup from 9,000 to 42,000 BTH/h"
          },
          {
            "name": "Rheem Mini Split Single Zone Indoor Wall Mount Air Handler RIWH24ASJ",
            "model_image": "https://media.rheem.com/blobazrheem/az-thumbnails/products/rheem-mini-split-single-zone-indoor-wall-mount-air-handler-riwh24asj-1d67f7bd-1f39-4e45-85df-46d1bfc7376e-160x160.png",
            "efficiency": "Extensive Lineup from 9,000 to 42,000 BTH/h"
          },
          {
            "name": "Rheem Mini Split Multi Zone Outdoor Unit Heat Pump ROMH45AFXZJ",
            "model_image": "https://media.rheem.com/blobazrheem/az-thumbnails/products/rheem-mini-split-multi-zone-outdoor-unit-heat-pump-romh45afxzj-d91c6502-23df-416a-ac8e-7c3e2b671a78-160x160.png",
            "efficiency": "Custom combinations with ability to connect 2 to 5 indoor units with one outdoor unit"
          },
          {
            "name": "Rheem Mini Split Single Zone Indoor Wall Mount Air Handler RIWH09AHWJ",
            "model_image": "https://media.rheem.com/blobazrheem/az-thumbnails/products/rheem-mini-split-single-zone-indoor-wall-mount-air-handler-riwh09ahwj-01158531-be50-4bd7-8b6a-85b4ef7f1b09-160x160.png",
            "efficiency": "Extensive Lineup from 9,000 to 42,000 BTH/h"
          },
          {
            "name": "Rheem Mini Split Single Zone Indoor Wall Mount Air Handler RIWH12AVSA",
            "model_image": "https://media.rheem.com/blobazrheem/az-thumbnails/products/rheem-mini-split-single-zone-indoor-wall-mount-air-handler-riwh12avsa-e4652bd5-a727-42cf-94c9-eeacecacd5f8-160x160.png",
            "efficiency": "Extensive Lineup from 9,000 to 42,000 BTH/h"
          },
          {
            "name": "Rheem Mini Split Single Zone Outdoor Heat Pump ROSH09AFWJ",
            "model_image": "https://media.rheem.com/blobazrheem/az-thumbnails/products/rheem-mini-split-single-zone-outdoor-heat-pump-rosh09afwj-5dca0376-638a-48db-8dbb-f07d920bf59a-160x160.png",
            "efficiency": "Extensive Lineup from 9,000 to 42,000 BTH/h"
          },
          {
            "name": "Rheem Mini Split Single Zone Indoor Wall Mount Air Handler RIWH30AXJ",
            "model_image": "https://media.rheem.com/blobazrheem/az-thumbnails/products/rheem-mini-split-single-zone-indoor-wall-mount-air-handler-riwh30axj-63779c8e-35a9-4788-8b5e-5462cdfc0c34-160x160.png",
            "efficiency": "Extensive Lineup from 9,000 to 42,000 BTH/h"
          },
          {
            "name": "Rheem Mini Split Single Zone Outdoor Heat Pump ROSH09AHWJ",
            "model_image": "https://media.rheem.com/blobazrheem/az-thumbnails/products/rheem-mini-split-single-zone-outdoor-heat-pump-rosh09ahwj-6b672cd5-20d2-4e62-9c03-ca3c3aa7032e-160x160.png",
            "efficiency": "Extensive Lineup from 9,000 to 42,000 BTH/h"
          },
          {
            "name": "Rheem Mini Split Single Zone Outdoor Heat Pump ROSH18ASJ",
            "model_image": "https://media.rheem.com/blobazrheem/az-thumbnails/products/rheem-mini-split-single-zone-outdoor-heat-pump-rosh18asj-cfcadc8e-e587-48cc-a1d6-e8bcd7d7118c-160x160.png",
            "efficiency": "Extensive Lineup from 9,000 to 42,000 BTH/h"
          },
          {
            "name": "Rheem Mini Split Multi Zone Indoor Wall Mount Air Handler RIWH07AVFJ",
            "model_image": "https://media.rheem.com/blobazrheem/az-thumbnails/products/rheem-mini-split-multi-zone-indoor-wall-mount-air-handler-riwh07avfj-b5c274bb-f018-4bf8-a471-fc717dac0d27-160x160.png",
            "efficiency": "Custom combinations with ability to connect 2 to 5 indoor units with one outdoor unit"
          },
          {
            "name": "Rheem Mini Split Single Zone Indoor Wall Mount Air Handler RIWH12AHWJ",
            "model_image": "https://media.rheem.com/blobazrheem/az-thumbnails/products/rheem-mini-split-single-zone-indoor-wall-mount-air-handler-riwh12ahwj-64432a14-74e1-485c-a907-3871250a5d9a-160x160.png",
            "efficiency": "Extensive Lineup from 9,000 to 42,000 BTH/h"
          },
          {
            "name": "Rheem Mini Split Single Zone Outdoor Heat Pump ROSH36AXJ",
            "model_image": "https://media.rheem.com/blobazrheem/az-thumbnails/products/rheem-mini-split-single-zone-outdoor-heat-pump-rosh36axj-2c74675a-0624-46cf-8790-69fc01cfbf8a-160x160.png",
            "efficiency": "Extensive Lineup from 9,000 to 42,000 BTH/h"
          },
          {
            "name": "Rheem Mini Split Multi Zone Outdoor Unit Heat Pump ROMH24AFXZJ",
            "model_image": "https://media.rheem.com/blobazrheem/az-thumbnails/products/rheem-mini-split-multi-zone-outdoor-unit-heat-pump-romh24afxzj-e6129f5e-9a95-4528-af52-24565ab17c7a-160x160.png",
            "efficiency": "Custom combinations with ability to connect 2 to 5 indoor units with one outdoor unit"
          }
        ]
      },
      {
        "line": "Oil Furnaces",
        "product_line_image": "https://media.rheem.com/blobazrheem/wp-content/uploads/sites/36/2023/07/oil-furnace.png",
        "models": [
          {
            "name": "Classic Series: Up to 86.5% AFUE ECM and PSC Motors",
            "model_image": "https://media.rheem.com/blobazrheem/az-thumbnails/products/classic-series--up-to-86.5--afue-ecm-and-psc-motors-25e0c354-a154-492f-a31d-5d2d9603554c-160x160.png",
            "efficiency": "Models ROCB-E, ROCB-P"
          },
          {
            "name": "Classic Series: Up to 85.9% AFUE ECM and PSC Motors",
            "model_image": "https://media.rheem.com/blobazrheem/az-thumbnails/products/classic-series--up-to-85.9--afue-ecm-and-psc-motors-ce436676-ab19-48bf-b10c-ea76bbecfa58-160x160.png",
            "efficiency": "Models ROCA-E, ROCA-E and ROLA-P"
          }
        ]
      }
    ]
  },
  {
    "brand": "Goodman",
    "logo": "/logos/Goodman.png",
    "productLines": [
      {
        "line": "Air Conditioners",
        "product_line_image": "https://www.goodmanmfg.com/images/librariesprovider6/default-album/dsx-dsz-.jpg",
        "models": [
          {
            "name": "R-32 GLXS4M",
            "model_image": "https://www.goodmanmfg.com/images/librariesprovider6/default-album/gsxn44d8f550022fa6258827eff0c00754798.png",
            "efficiency": "Up to 15.2 SEER2"
          },
          {
            "name": "R-32 GLXS4B",
            "model_image": "https://www.goodmanmfg.com/images/librariesprovider6/default-album/gsxn44d8f550022fa6258827eff0c00754798.png",
            "efficiency": "Up to 15.2 SEER2"
          },
          {
            "name": "GSXV9",
            "model_image": "https://www.goodmanmfg.com/images/librariesprovider6/default-album/gsxn4.jpg",
            "efficiency": "22.5 SEER2"
          },
          {
            "name": "GSXS6",
            "model_image": "https://www.goodmanmfg.com/images/librariesprovider6/default-album/gsxs6.png",
            "efficiency": "Up to 17.2 SEER2"
          },
          {
            "name": "GXV6S",
            "model_image": "https://www.goodmanmfg.com/images/librariesprovider6/default-album/gsxs6.png",
            "efficiency": "Up to 17.2 SEER2"
          },
          {
            "name": "GXV9S",
            "model_image": "https://www.goodmanmfg.com/images/librariesprovider6/default-album/gxv9sb32a690022fa6258827eff0e00754798.png",
            "efficiency": "Up to 19 SEER2"
          },
          {
            "name": "GSXC7",
            "model_image": "https://www.goodmanmfg.com/images/librariesprovider6/default-album/gsxc7.jpg",
            "efficiency": "17.2 SEER2"
          },
          {
            "name": "GLXT7C",
            "model_image": "https://www.goodmanmfg.com/images/librariesprovider6/default-album/gsxc7.jpg",
            "efficiency": "17.2 SEER2"
          },
          {
            "name": "GSXH5",
            "model_image": "https://www.goodmanmfg.com/images/librariesprovider6/default-album/gszh503610_front_rgb_lr.png",
            "efficiency": "Up to 15.2 SEER2"
          },
          {
            "name": "R-32 GLXS5B",
            "model_image": "https://www.goodmanmfg.com/images/librariesprovider6/default-album/gszh503610_front_rgb_lr.png",
            "efficiency": "Up to 16.5 SEER2"
          },
          {
            "name": "GSXM4",
            "model_image": "https://www.goodmanmfg.com/images/librariesprovider6/default-album/gsxn44d8f550022fa6258827eff0c00754798.png",
            "efficiency": "Up to 14.3 SEER2"
          },
          {
            "name": "GSXB4",
            "model_image": "https://www.goodmanmfg.com/images/librariesprovider6/default-album/gsxn44d8f550022fa6258827eff0c00754798.png",
            "efficiency": "Up to 14.3 SEER2"
          },
          {
            "name": "GSXN4",
            "model_image": "https://www.goodmanmfg.com/images/librariesprovider6/default-album/gsxn44d8f550022fa6258827eff0c00754798.png",
            "efficiency": "Up to 14.3 SEER2"
          },
          {
            "name": "R-32 GLXS3B",
            "model_image": "https://www.goodmanmfg.com/images/librariesprovider6/default-album/gsxn44d8f550022fa6258827eff0c00754798.png",
            "efficiency": "Up to 15 SEER2"
          },
          {
            "name": "GSXN3",
            "model_image": "https://www.goodmanmfg.com/images/librariesprovider6/default-album/gsxn44d8f550022fa6258827eff0c00754798.png",
            "efficiency": "Up to 14.5 SEER2"
          }
        ]
      },
      {
        "line": "Air Handlers and Coils",
        "product_line_image": "https://www.goodmanmfg.com/images/librariesprovider6/default-album/gdm-air-handlers-coils.png",
        "models": [
          {
            "name": "Product Overview",
            "model_image": "https://www.goodmanmfg.com/images/librariesprovider6/default-album/gdm-air-handlers-coils.png",
            "efficiency": ""
          },
          {
            "name": "Product Overview",
            "model_image": "https://www.goodmanmfg.com/images/librariesprovider6/default-album/gdm-coils-alumafin7.png",
            "efficiency": ""
          }
        ]
      },
      {
        "line": "Gas Furnaces",
        "product_line_image": "https://www.goodmanmfg.com/images/librariesprovider6/default-album/90_goodman_upflow_v2_v2_v2_v2_v2.jpg",
        "models": [
          {
            "name": "Product Overview",
            "model_image": "https://www.goodmanmfg.com/images/librariesprovider6/default-album/90_goodman_upflow_v2_v2_v2_v2_v2.jpg",
            "efficiency": ""
          },
          {
            "name": "Product Overview",
            "model_image": "https://www.goodmanmfg.com/images/librariesprovider6/default-album/80_goodman.png",
            "efficiency": ""
          }
        ]
      },
      {
        "line": "Heat Pumps",
        "product_line_image": "https://www.goodmanmfg.com/images/librariesprovider6/default-album/dsx-dsz-.jpg",
        "models": [
          {
            "name": "GSZV9",
            "model_image": "https://www.goodmanmfg.com/images/librariesprovider6/default-album/gsxn4.jpg",
            "efficiency": "22.5 SEER2"
          },
          {
            "name": "GLZT7C",
            "model_image": "https://www.goodmanmfg.com/images/librariesprovider6/default-album/gsxn4.jpg",
            "efficiency": "17.5 SEER2"
          },
          {
            "name": "GSZS6",
            "model_image": "https://www.goodmanmfg.com/images/librariesprovider6/default-album/gsxs6.png",
            "efficiency": "17.5 SEER2"
          },
          {
            "name": "GZV6S",
            "model_image": "https://www.goodmanmfg.com/images/librariesprovider6/default-album/gsxs6.png",
            "efficiency": "19 SEER2"
          },
          {
            "name": "GZV7S",
            "model_image": "https://www.goodmanmfg.com/images/librariesprovider6/default-album/gsxs6.png",
            "efficiency": "19 SEER2"
          },
          {
            "name": "GSZC7",
            "model_image": "https://www.goodmanmfg.com/images/librariesprovider6/default-album/gsxc7.jpg",
            "efficiency": ""
          },
          {
            "name": "GSZH5",
            "model_image": "https://www.goodmanmfg.com/images/librariesprovider6/default-album/gszh503610_front_rgb_lr.png",
            "efficiency": "15.2 SEER2"
          },
          {
            "name": "GSZM4",
            "model_image": "https://www.goodmanmfg.com/images/librariesprovider6/default-album/gszb4-gszm4.jpg",
            "efficiency": "14.3 SEER2"
          },
          {
            "name": "GLZS4M",
            "model_image": "https://www.goodmanmfg.com/images/librariesprovider6/default-album/gszb4-gszm4.jpg",
            "efficiency": "15.2 SEER2"
          },
          {
            "name": "GSZB4",
            "model_image": "https://www.goodmanmfg.com/images/librariesprovider6/default-album/gszb4-gszm4.jpg",
            "efficiency": "14.3 SEER2"
          },
          {
            "name": "GLZS4B",
            "model_image": "https://www.goodmanmfg.com/images/librariesprovider6/default-album/gszb4-gszm4.jpg",
            "efficiency": "15.2 SEER2"
          },
          {
            "name": "GLZS5B",
            "model_image": "https://www.goodmanmfg.com/images/librariesprovider6/default-album/gszb4-gszm4.jpg",
            "efficiency": "16 SEER2"
          }
        ]
      },
      {
        "line": "Packaged Units",
        "product_line_image": "https://www.goodmanmfg.com/images/librariesprovider6/default-album/gdm-gph-gpc-h-lft.png",
        "models": [
          {
            "name": "Product Overview",
            "model_image": "https://www.goodmanmfg.com/images/librariesprovider6/default-album/gpc14h-leftquarter-case-lr_v2.jpg",
            "efficiency": ""
          },
          {
            "name": "Product Overview",
            "model_image": "https://www.goodmanmfg.com/images/librariesprovider6/default-album/gph14m-leftquarter-case-lr76472a0022fa6258827eff0600754798_v2.jpg",
            "efficiency": ""
          },
          {
            "name": "Product Overview",
            "model_image": "https://www.goodmanmfg.com/images/librariesprovider6/default-album/gdm-gpd-gpg-lftqtr-lr_v2.jpg",
            "efficiency": ""
          },
          {
            "name": "Product Overview",
            "model_image": "https://www.goodmanmfg.com/images/librariesprovider6/default-album/img-gdm-packdualfuel_2.png",
            "efficiency": ""
          }
        ]
      }
    ]
  },
  {
    "brand": "Lennox",
    "logo": "/logos/Lennox.jpg",
    "productLines": [
      {
        "line": "air-conditioners",
        "product_line_image": "",
        "models": [
          {
            "name": "SL25KCV Air Conditioner",
            "model_image": "https://www.lennox.com/dA/efdfa255b1/ResidentialDLSCAC&HPProductThumbnail.png/180h",
            "efficiency": "26 SEER2"
          },
          {
            "name": "SL28XCV Air Conditioner",
            "model_image": "https://www.lennox.com/dA/4b906ddf03/sl28xcv-prod-thumb.png/180h",
            "efficiency": "28 SEER2"
          },
          {
            "name": "XC21 Air Conditioner",
            "model_image": "https://www.lennox.com/dA/e309c65bf1/xc21-prod-thumb.png/180h",
            "efficiency": "21 SEER2"
          },
          {
            "name": "EL22KCV Air Conditioner",
            "model_image": "https://www.lennox.com/dA/d28a894405/ResidentialEliteAC&HPProductThumbnail.png/180h",
            "efficiency": "22.5 SEER2"
          },
          {
            "name": "EL23XCV  Air Conditioner",
            "model_image": "https://www.lennox.com/dA/9b21eaaf8d/xc20-prod-thumb.png/180h",
            "efficiency": "22 SEER2"
          },
          {
            "name": "XC20 Air Conditioner",
            "model_image": "https://www.lennox.com/dA/a20aeb446c/xc20-prod-thumb.png/180h",
            "efficiency": "22 SEER2"
          },
          {
            "name": "EL18KCV Air Conditioner",
            "model_image": "https://www.lennox.com/dA/23f4fdd060/ResidentialThumbnailImageEliteACHP.png/180h",
            "efficiency": "19.5 SEER2"
          },
          {
            "name": "EL18XCV Air Conditioner",
            "model_image": "https://www.lennox.com/dA/88fedeb189/el18xcv-prod-thumb.png/180h",
            "efficiency": "18 SEER2"
          },
          {
            "name": "EL16KC1 Air Conditioner",
            "model_image": "https://www.lennox.com/dA/23f4fdd060/ResidentialThumbnailImageEliteACHP.png/180h",
            "efficiency": "17 SEER2"
          },
          {
            "name": "EL15KC1 Air Conditioner",
            "model_image": "https://www.lennox.com/dA/23f4fdd060/ResidentialThumbnailImageEliteACHP.png/180h",
            "efficiency": "16 SEER2"
          },
          {
            "name": "EL16XC1 Air Conditioner",
            "model_image": "https://www.lennox.com/dA/cbf72fd5b9/el16xc1-prod-thumb.png/180h",
            "efficiency": "17 SEER2"
          },
          {
            "name": "EL17XC1 Air Conditioner",
            "model_image": "https://www.lennox.com/dA/48ab5ea83c/el17xc1_thumbnail.png/180h",
            "efficiency": "18.6 SEER2"
          },
          {
            "name": "ML17XC1 Air Conditioner",
            "model_image": "https://www.lennox.com/dA/6920129342/ml14xp1-prod-thumb-cropped.png/180h",
            "efficiency": "17 SEER2"
          },
          {
            "name": "ML17KC2 Air Conditioner",
            "model_image": "https://www.lennox.com/dA/a3ccac84e0/ResidentialThumbnailImageMeritACHP.png/180h",
            "efficiency": "17 SEER2"
          },
          {
            "name": "ML18XC2 Air Conditioner",
            "model_image": "https://www.lennox.com/dA/df239dacd6/ml18xc2-prod-thumb-cropped.png/180h",
            "efficiency": "18 SEER2"
          },
          {
            "name": "ML14KC1 Air Conditioner",
            "model_image": "https://www.lennox.com/dA/a3ccac84e0/ResidentialThumbnailImageMeritACHP.png/180h",
            "efficiency": ""
          },
          {
            "name": "ML13KC1 Air Conditioner",
            "model_image": "https://www.lennox.com/dA/a3ccac84e0/ResidentialThumbnailImageMeritACHP.png/180h",
            "efficiency": "13.4 SEER2"
          },
          {
            "name": "ML14XC1 Air Conditioner",
            "model_image": "https://www.lennox.com/dA/52d47a84ed/ml14xc1-prod-thumb-cropped.png/180h",
            "efficiency": "17 SEER2"
          }
        ]
      },
      {
        "line": "air-handlers",
        "product_line_image": "",
        "models": [
          {
            "name": "CBK48MVT Air Handler",
            "model_image": "https://www.lennox.com/dA/1aceae06c6/19LNX_CBA27UHE_Unit_RGB.png/180h",
            "efficiency": ""
          },
          {
            "name": "CBA38MV Air Handler",
            "model_image": "https://www.lennox.com/dA/85baa71afe/24LNX_DLSC_AH_none_HO_THUMB.png/180h",
            "efficiency": ""
          },
          {
            "name": "CBK47UHET Air Handler",
            "model_image": "https://www.lennox.com/dA/1aceae06c6/19LNX_CBA27UHE_Unit_RGB.png/180h",
            "efficiency": ""
          },
          {
            "name": "CBA27UHE Efficient, Multi-Speed Air Handler",
            "model_image": "https://www.lennox.com/dA/8486e80838/cba27uhe-prod-thumb.png/180h",
            "efficiency": ""
          },
          {
            "name": "CBK45UHVT Air Handler",
            "model_image": "https://www.lennox.com/dA/e90bf67012/CBA25UHE product thumbnail.png/180h",
            "efficiency": ""
          },
          {
            "name": "CBA25UHV Air Handler",
            "model_image": "https://www.lennox.com/dA/51274be4f0/cba25uhv-prod-thumb.png/180h",
            "efficiency": ""
          },
          {
            "name": "CBK45UHET Air Handler",
            "model_image": "https://www.lennox.com/dA/e90bf67012/CBA25UHE product thumbnail.png/180h",
            "efficiency": ""
          },
          {
            "name": "CBK45UHPT Air Handler",
            "model_image": "https://www.lennox.com/dA/e90bf67012/CBA25UHE product thumbnail.png/180h",
            "efficiency": ""
          },
          {
            "name": "CBA25UHE Air Handler",
            "model_image": "https://www.lennox.com/dA/e90bf67012/CBA25UHE product thumbnail.png/180h",
            "efficiency": ""
          },
          {
            "name": "CBA25UH Air Handler",
            "model_image": "https://www.lennox.com/dA/2a23267303/cba25uh-prod-thumb.png/180h",
            "efficiency": ""
          }
        ]
      },
      {
        "line": "boilers",
        "product_line_image": "",
        "models": [
          {
            "name": "GCWB95 Boiler",
            "model_image": "https://www.lennox.com/dA/5a5909fe32/gcwb95-prod-thumb.png/180h",
            "efficiency": "95 SEER2"
          },
          {
            "name": "GWB9-IH Boiler",
            "model_image": "https://www.lennox.com/dA/06b82f940f/gwb9-ih-prod-thumb.png/180h",
            "efficiency": "90 SEER2"
          },
          {
            "name": "OWB86 Boiler",
            "model_image": "https://www.lennox.com/dA/0caa48a442/owb86-prod-thumb.png/180h",
            "efficiency": "86 SEER2"
          },
          {
            "name": "GWB84-IE Boiler",
            "model_image": "https://www.lennox.com/dA/0c795460ca/gwb84-ie-prod-thumb.png/180h",
            "efficiency": "84 SEER2"
          },
          {
            "name": "GWB84-E Boiler",
            "model_image": "https://www.lennox.com/dA/4bf0119e77/gwb84-e-prod-thumb.png/180h",
            "efficiency": "84 SEER2"
          },
          {
            "name": "GSB8-E Boiler",
            "model_image": "https://www.lennox.com/dA/e422523ce5/gsb8-e-prod-thumb.png/180h",
            "efficiency": "82 SEER2"
          }
        ]
      },
      {
        "line": "furnaces",
        "product_line_image": "",
        "models": [
          {
            "name": "SLP99V Variable-Capacity Gas Furnace",
            "model_image": "https://www.lennox.com/dA/4e5724a728/slp99v-prod-thumb.png/180h",
            "efficiency": "99 SEER2"
          },
          {
            "name": "SL297NV Variable-Speed, Ultra-Low Emissions Gas Furnace",
            "model_image": "https://www.lennox.com/dA/e90670413a/sl297nv-prod-thumb.png/180h",
            "efficiency": "97 SEER2"
          },
          {
            "name": "SL280V Variable-Speed Gas Furnace",
            "model_image": "https://www.lennox.com/dA/4bf421ca4f/sl280v-prod-thumb.png/180h",
            "efficiency": "80 SEER2"
          },
          {
            "name": "SL280NV Variable-Speed, Ultra-Low Emissions Gas Furnace",
            "model_image": "https://www.lennox.com/dA/b6b5f684f7/sl280nv-prod-thumb.png/180h",
            "efficiency": "80 SEER2"
          },
          {
            "name": "EL297V Gas Furnace",
            "model_image": "https://www.lennox.com/dA/44f9a033cd/el296v-prod-thumb.png/180h",
            "efficiency": "97 SEER2"
          },
          {
            "name": "EL297E Gas Furnace",
            "model_image": "https://www.lennox.com/dA/05089168e8/EL297E Product Thumbnail.png/180h",
            "efficiency": "97 SEER2"
          },
          {
            "name": "EL296V High-Efficiency, Two-Stage Gas Furnace",
            "model_image": "https://www.lennox.com/dA/44f9a033cd/el296v-prod-thumb.png/180h",
            "efficiency": "96 SEER2"
          },
          {
            "name": "EL296E High-Efficiency, Two-Stage Gas Furnace",
            "model_image": "https://www.lennox.com/dA/9a61b38122/el296e-prod-thumb.png/180h",
            "efficiency": "96 SEER2"
          },
          {
            "name": "EL280E Gas Furnace",
            "model_image": "https://www.lennox.com/dA/959b0c2389/el280e-prod-thumb.png/180h",
            "efficiency": "80 SEER2"
          },
          {
            "name": "EL196EK Gas Furnace",
            "model_image": "https://www.lennox.com/dA/9a61b38122/el296e-prod-thumb.png/180h",
            "efficiency": "96 SEER2"
          },
          {
            "name": "EL196E Gas Furnace",
            "model_image": "https://www.lennox.com/dA/d3462577ad/el196e-prod-thumb.png/180h",
            "efficiency": "96 SEER2"
          },
          {
            "name": "EL195NEK Ultra-Low Emissions Gas Furnace",
            "model_image": "https://www.lennox.com/dA/47921d76b0/ResidentialThumbnailImageEliteFurnace.png/180h",
            "efficiency": "95 SEER2"
          },
          {
            "name": "EL195NE Ultra-Low Emissions Gas Furnace",
            "model_image": "https://www.lennox.com/dA/583f430b3e/el195ne-prod-thumb.png/180h",
            "efficiency": "95 SEER2"
          },
          {
            "name": "EL180NEK Ultra-Low Emissions Gas Furnace",
            "model_image": "https://www.lennox.com/dA/47921d76b0/ResidentialThumbnailImageEliteFurnace.png/180h",
            "efficiency": ""
          },
          {
            "name": "EL180NE Ultra-Low Emissions Gas Furnace",
            "model_image": "https://www.lennox.com/dA/f29db80351/el180ne-prod-thumb.png/180h",
            "efficiency": "80 SEER2"
          },
          {
            "name": "ML296V Gas Furnace",
            "model_image": "https://www.lennox.com/dA/f9d906b6a1/ml296v-prod-thumb.png/180h",
            "efficiency": "96 SEER2"
          },
          {
            "name": "ML196EK Gas Furnace",
            "model_image": "https://www.lennox.com/dA/0910f41908/ResidentialThumbnailImageMeritFurnace.png/180h",
            "efficiency": ""
          },
          {
            "name": "ML196E Gas Furnace",
            "model_image": "https://www.lennox.com/dA/7eba94a3fb/ml196e-prod-thumb.png/180h",
            "efficiency": "96 SEER2"
          },
          {
            "name": "ML193EK Gas Furnace",
            "model_image": "https://www.lennox.com/dA/0910f41908/ResidentialThumbnailImageMeritFurnace.png/180h",
            "efficiency": ""
          },
          {
            "name": "ML193E Gas Furnace",
            "model_image": "https://www.lennox.com/dA/f95bf2ed2c/ml193e-prod-thumb.png/180h",
            "efficiency": "93 SEER2"
          },
          {
            "name": "ML180VK Gas Furnace",
            "model_image": "https://www.lennox.com/dA/ed9dc3d5a7/ResidentialThumbnailImageMeritFurnaceML180ek.png/180h",
            "efficiency": ""
          },
          {
            "name": "ML180V Gas Furnace",
            "model_image": "https://www.lennox.com/dA/ef7cc3de4a/ml180v-prod-thumb.png/180h",
            "efficiency": "80 SEER2"
          },
          {
            "name": "ML180EK Gas Furnace",
            "model_image": "https://www.lennox.com/dA/ed9dc3d5a7/ResidentialThumbnailImageMeritFurnaceML180ek.png/180h",
            "efficiency": ""
          },
          {
            "name": "ML180E Gas Furnace",
            "model_image": "https://www.lennox.com/dA/c4e6318260/ml180e-prod-thumb.png/180h",
            "efficiency": "80 SEER2"
          },
          {
            "name": "SLO185V Oil Furnace",
            "model_image": "https://www.lennox.com/dA/c0dd352503/slo185v-prod-thumb.png/180h",
            "efficiency": "85 SEER2"
          },
          {
            "name": "ELO183 Oil Furnaces",
            "model_image": "https://www.lennox.com/dA/5416b9c3d3/elo183-prod-thumb.png/180h",
            "efficiency": "83 SEER2"
          }
        ]
      },
      {
        "line": "garage-heaters",
        "product_line_image": "",
        "models": [
          {
            "name": "LF25 Unit Heater",
            "model_image": "https://www.lennox.com/dA/4c1dffebb8/lf25-prod-thumb.png/180h",
            "efficiency": ""
          },
          {
            "name": "LF24 Garage Heaters",
            "model_image": "https://www.lennox.com/dA/eb84a0d1cc/lf24-prod-thumb.png/180h",
            "efficiency": ""
          },
          {
            "name": "T-Class\u2122 TUA Separated Combustion Garage Heaters",
            "model_image": "https://www.lennox.com/dA/658664bf77/tua-prod-thumb.png/180h",
            "efficiency": ""
          }
        ]
      },
      {
        "line": "heat-pumps",
        "product_line_image": "",
        "models": [
          {
            "name": "SL22KLV Cold Climate Heat Pump",
            "model_image": "https://www.lennox.com/dA/efdfa255b1/ResidentialDLSCAC&HPProductThumbnail.png/180h",
            "efficiency": "21.1 SEER2"
          },
          {
            "name": "SL25XPV Heat Pump",
            "model_image": "https://www.lennox.com/dA/31c8d2aae6/sl25xpv-prod-thumb.png/180h",
            "efficiency": "24 SEER2"
          },
          {
            "name": "XP25 Heat Pump",
            "model_image": "https://www.lennox.com/dA/dd73814d13/xp25-prod-thumb.png/180h",
            "efficiency": "23.5 SEER2"
          },
          {
            "name": "XP21 Heat Pump",
            "model_image": "https://www.lennox.com/dA/848b533f64/xp21-prod-thumb.png/180h",
            "efficiency": "19.2 SEER2"
          },
          {
            "name": "XP20 Heat Pump",
            "model_image": "https://www.lennox.com/dA/d7b4442271/xp20-prod-thumb.png/180h",
            "efficiency": "20 SEER2"
          },
          {
            "name": "EL21KLV Cold Climate Heat Pump",
            "model_image": "https://www.lennox.com/dA/d28a894405/ResidentialEliteAC&HPProductThumbnail.png/180h",
            "efficiency": "21 SEER2"
          },
          {
            "name": "EL22XPV Heat Pump",
            "model_image": "https://www.lennox.com/dA/a3c3a4c66d/elite thumbnail .png/180h",
            "efficiency": "22 SEER2"
          },
          {
            "name": "EL19KPV Heat Pump",
            "model_image": "https://www.lennox.com/dA/23f4fdd060/ResidentialThumbnailImageEliteACHP.png/180h",
            "efficiency": "19.5 SEER2"
          },
          {
            "name": "EL18KSLV Heat Pump",
            "model_image": "https://www.lennox.com/dA/ace71f51db/ResidentialProductThumbnailHeatPumpElite.png/180h",
            "efficiency": "19 SEER2"
          },
          {
            "name": "EL18XPV Heat Pump",
            "model_image": "https://www.lennox.com/dA/379db7963a/el18xpv-prod-thumb.png/180h",
            "efficiency": "20 SEER2"
          },
          {
            "name": "EL17XP1 Heat Pump",
            "model_image": "https://www.lennox.com/dA/379db7963a/el18xpv-prod-thumb.png/180h",
            "efficiency": "18.6 SEER2"
          },
          {
            "name": "EL16KP1 Heat Pump",
            "model_image": "https://www.lennox.com/dA/23f4fdd060/ResidentialThumbnailImageEliteACHP.png/180h",
            "efficiency": ""
          },
          {
            "name": "ML17XP1 Heat Pump",
            "model_image": "https://www.lennox.com/dA/cc5804f36c/e910e4d4-cbfa-4703-b18c-bab5a09b953athumbnail (1).png/180h",
            "efficiency": "18.6 SEER2"
          },
          {
            "name": "ML14KP1 Heat Pump",
            "model_image": "https://www.lennox.com/dA/a3ccac84e0/ResidentialThumbnailImageMeritACHP.png/180h",
            "efficiency": ""
          }
        ]
      },
      {
        "line": "mini-split-systems",
        "product_line_image": "",
        "models": [
          {
            "name": "MWZD Wall Mount Mini-Split Air Handler",
            "model_image": "https://www.lennox.com/dA/c4292ae226/Residential Product ThumbnailImageMWHD2.png/180h",
            "efficiency": ""
          },
          {
            "name": "MWMD Wall Mount Mini-Split Air Handler",
            "model_image": "https://www.lennox.com/dA/5d491b3e99/Residential Product ThumbnailImageMWMD.png/180h",
            "efficiency": ""
          },
          {
            "name": "MMDD Medium-Static Mini-Split Air Handler",
            "model_image": "https://www.lennox.com/dA/0532c8ca3c/ResidentialThumbnailImageMMDD.png/180h",
            "efficiency": ""
          },
          {
            "name": "MMD Multi-Position Mini-Split Air Handler",
            "model_image": "https://www.lennox.com/dA/ad1b03749e/ResidentialProductImageMMDMultiPositionAH.png/180h",
            "efficiency": ""
          },
          {
            "name": "MFMD Floor Mount Console",
            "model_image": "https://www.lennox.com/dA/3d28f9e218/ResidentialThumbnailImageMFMD.png/180h",
            "efficiency": ""
          },
          {
            "name": "M1WD Ceiling Cassette",
            "model_image": "https://www.lennox.com/dA/8549810b57/ResidentialProductImageM1WCeilingCassette.png/180h",
            "efficiency": ""
          },
          {
            "name": "MMLD Multi-Zone Mini-Split Heat Pump",
            "model_image": "https://www.lennox.com/dA/d45f050038/ResidentialProductImageMMPDMultiZoneHeatPump.png/180h",
            "efficiency": ""
          },
          {
            "name": "MMLD Single-Zone Mini-Split Heat Pump",
            "model_image": "https://www.lennox.com/dA/536a15745a/Residential Product ThumbnailImageMWLD.png/180h",
            "efficiency": ""
          },
          {
            "name": "MWLD Single-Zone Mini-Split Heat Pump",
            "model_image": "https://www.lennox.com/dA/536a15745a/Residential Product ThumbnailImageMWLD.png/180h",
            "efficiency": "25 SEER2"
          },
          {
            "name": "MWPD Single-Zone Mini-Split Heat Pump",
            "model_image": "https://www.lennox.com/dA/818aef9e71/Residential Product ThumbnailImageMWPD.png/180h",
            "efficiency": "25 SEER2"
          },
          {
            "name": "MWHD Single-Zone Mini-Split Heat Pump",
            "model_image": "https://www.lennox.com/dA/3346df7ecd/Residential Product ThumbnailImageMWHD.png/180h",
            "efficiency": "25 SEER2"
          }
        ]
      },
      {
        "line": "packaged-units",
        "product_line_image": "",
        "models": [
          {
            "name": "LRP15GEK Packaged Gas/Electric",
            "model_image": "https://www.lennox.com/dA/34cfd15849/24LNX_PackagedUnit_NoShadow_LF_RGB.png/180h",
            "efficiency": "81 SEER2"
          },
          {
            "name": "LRP16GE Packaged Gas/Electric",
            "model_image": "https://www.lennox.com/dA/a776d5cc1d/lrp16ge-prod-thumb.png/180h",
            "efficiency": "81 SEER2"
          },
          {
            "name": "LRP15GXK Packaged Gas/Electric",
            "model_image": "https://www.lennox.com/dA/facbd9f630/ResidentialProductImagePackagedUnits.png/180h",
            "efficiency": "81 SEER2"
          },
          {
            "name": "LRP16GX Packaged Gas/Electric",
            "model_image": "https://www.lennox.com/dA/facbd9f630/ResidentialProductImagePackagedUnits.png/180h",
            "efficiency": "81 SEER2"
          },
          {
            "name": "LRP15HPK Packaged Heat Pump",
            "model_image": "https://www.lennox.com/dA/facbd9f630/ResidentialProductImagePackagedUnits.png/180h",
            "efficiency": "15.2 SEER2"
          },
          {
            "name": "LRP16HP Packaged Heat Pump",
            "model_image": "https://www.lennox.com/dA/8c08431988/lrp16hp-prod-thumb.png/180h",
            "efficiency": "16 SEER2"
          },
          {
            "name": "LRP13GEK Packaged Gas/Electric",
            "model_image": "https://www.lennox.com/dA/facbd9f630/ResidentialProductImagePackagedUnits.png/180h",
            "efficiency": "81 SEER2"
          },
          {
            "name": "LRP14GE Packaged Gas/Electric",
            "model_image": "https://www.lennox.com/dA/81ae232e85/lrp14ge-prod-thumb.png/180h",
            "efficiency": "81 SEER2"
          },
          {
            "name": "LRP13GNK Packaged Gas/Electric",
            "model_image": "https://www.lennox.com/dA/facbd9f630/ResidentialProductImagePackagedUnits.png/180h",
            "efficiency": "81 SEER2"
          },
          {
            "name": "LRP14GN Packaged Unit",
            "model_image": "https://www.lennox.com/dA/ef52ce9741/lrp14gn-prod-thumb.png/180h",
            "efficiency": "81 SEER2"
          },
          {
            "name": "LRP13GXK Packaged Gas/Electric",
            "model_image": "https://www.lennox.com/dA/facbd9f630/ResidentialProductImagePackagedUnits.png/180h",
            "efficiency": "81 SEER2"
          },
          {
            "name": "LRP14GX Packaged Gas/Electric",
            "model_image": "https://www.lennox.com/dA/facbd9f630/ResidentialProductImagePackagedUnits.png/180h",
            "efficiency": "81 SEER2"
          },
          {
            "name": "LRP13HPK Packaged Heat Pump",
            "model_image": "https://www.lennox.com/dA/facbd9f630/ResidentialProductImagePackagedUnits.png/180h",
            "efficiency": "13.4 SEER2"
          },
          {
            "name": "LRP14HP Packaged Heat Pump",
            "model_image": "https://www.lennox.com/dA/a6813a86fd/lrp14hp-prod-thumb.png/180h",
            "efficiency": "14 SEER2"
          },
          {
            "name": "LRP13ACK Packaged Air Conditioner",
            "model_image": "https://www.lennox.com/dA/facbd9f630/ResidentialProductImagePackagedUnits.png/180h",
            "efficiency": "13.4 SEER2"
          },
          {
            "name": "LRP14AC Packaged Air Conditioner",
            "model_image": "https://www.lennox.com/dA/268549c184/lrp14ac-prod-thumb.png/180h",
            "efficiency": "14 SEER2"
          }
        ]
      }
    ]
  },
  {
    "brand": "Bryant",
    "logo": "/logos/Bryant.png",
    "productLines": [
      {
        "line": "Air Conditioners",
        "product_line_image": "",
        "models": [
          {
            "name": "Evolution\u2122 Extreme\u00a0Variable Speed Air Conditioner",
            "model_image": "https://images.carriercms.com/image/upload/w_auto,c_lfill,q_auto,f_auto/v1739218905/bryant/products/air-conditioners/evolution-variable-speed-air-conditioner-red-shield-191VAN.png",
            "efficiency": "Up to 21 SEER2"
          },
          {
            "name": "PREFERRED\u2122 2- STAGE AIR CONDITIONER WITH INTELISENSE TECHNOLOGY\u2122",
            "model_image": "https://images.carriercms.com/image/upload/w_auto,c_lfill,q_auto,f_auto/v1739218838/bryant/products/air-conditioners/preferred-2-stage-air-conditioner-148T.png",
            "efficiency": "Up to 18 SEER2"
          },
          {
            "name": "PREFERRED\u2122 2- STAGE AIR CONDITIONER WITH INTELISENSE TECHNOLOGY\u2122",
            "model_image": "https://images.carriercms.com/image/upload/w_auto,c_lfill,q_auto,f_auto/v1739218838/bryant/products/air-conditioners/preferred-2-stage-air-conditioner-148T.png",
            "efficiency": "Up to 18 SEER2"
          },
          {
            "name": "PREFERRED\u2122 SINGLE-STAGE AIR CONDITIONER WITH INTELISENSE TECHNOLOGY\u2122",
            "model_image": "https://images.carriercms.com/image/upload/w_auto,c_lfill,q_auto,f_auto/v1739218944/bryant/products/air-conditioners/preferred-single-stage-air-conditioner-with-intelisense-technology-146SAN.png",
            "efficiency": "Up to 16.5 SEER2"
          },
          {
            "name": "LEGACY\u2122 LINE SINGLE-STAGE AIR CONDITIONER",
            "model_image": "https://images.carriercms.com/image/upload/w_auto,c_lfill,q_auto,f_auto/v1739218763/bryant/products/air-conditioners/legacy-single-stage-air-conditioner-135SAN.png",
            "efficiency": "Up to 16.5 SEER2"
          },
          {
            "name": "LEGACY\u2122 LINE SINGLE-STAGE COASTAL AIR CONDITIONER",
            "model_image": "https://images.carriercms.com/image/upload/w_auto,c_lfill,q_auto,f_auto/v1739218737/bryant/products/air-conditioners/legacy-single-stage-air-conditioner-135SAN---C.png",
            "efficiency": "Up to 16.5 SEER2"
          },
          {
            "name": "Evolution\u2122 Extreme\u00a0Variable Speed Air Conditioner",
            "model_image": "https://images.carriercms.com/image/upload/w_auto,c_lfill,q_auto,f_auto/v1739218905/bryant/products/air-conditioners/evolution-variable-speed-air-conditioner-red-shield-191VAN.png",
            "efficiency": "Up to 21 SEER2"
          },
          {
            "name": "PREFERRED\u2122 2- STAGE AIR CONDITIONER WITH INTELISENSE TECHNOLOGY\u2122",
            "model_image": "https://images.carriercms.com/image/upload/w_auto,c_lfill,q_auto,f_auto/v1739218838/bryant/products/air-conditioners/preferred-2-stage-air-conditioner-148T.png",
            "efficiency": "Up to 18 SEER2"
          },
          {
            "name": "PREFERRED\u2122 2- STAGE AIR CONDITIONER WITH INTELISENSE TECHNOLOGY\u2122",
            "model_image": "https://images.carriercms.com/image/upload/w_auto,c_lfill,q_auto,f_auto/v1739218838/bryant/products/air-conditioners/preferred-2-stage-air-conditioner-148T.png",
            "efficiency": "Up to 18 SEER2"
          },
          {
            "name": "PREFERRED\u2122 SINGLE-STAGE AIR CONDITIONER WITH INTELISENSE TECHNOLOGY\u2122",
            "model_image": "https://images.carriercms.com/image/upload/w_auto,c_lfill,q_auto,f_auto/v1739218944/bryant/products/air-conditioners/preferred-single-stage-air-conditioner-with-intelisense-technology-146SAN.png",
            "efficiency": "Up to 16.5 SEER2"
          },
          {
            "name": "LEGACY\u2122 LINE SINGLE-STAGE AIR CONDITIONER",
            "model_image": "https://images.carriercms.com/image/upload/w_auto,c_lfill,q_auto,f_auto/v1739218763/bryant/products/air-conditioners/legacy-single-stage-air-conditioner-135SAN.png",
            "efficiency": "Up to 16.5 SEER2"
          },
          {
            "name": "LEGACY\u2122 LINE SINGLE-STAGE COASTAL AIR CONDITIONER",
            "model_image": "https://images.carriercms.com/image/upload/w_auto,c_lfill,q_auto,f_auto/v1739218737/bryant/products/air-conditioners/legacy-single-stage-air-conditioner-135SAN---C.png",
            "efficiency": "Up to 16.5 SEER2"
          }
        ]
      },
      {
        "line": "Air Purifiers",
        "product_line_image": "",
        "models": [
          {
            "name": "Evolution\u2122\u00a0Air Purifier",
            "model_image": "https://images.carriercms.com/image/upload/w_auto,c_lfill,q_auto,f_auto/v1680024720/bryant/products/air-purifiers/evolution-air-purifier-DGAPA-large.png",
            "efficiency": ""
          },
          {
            "name": "Legacy\u2122 Line EZ FLEX CABINET AIR FILTER EZXCAB",
            "model_image": "https://images.carriercms.com/image/upload/w_auto,c_lfill,q_auto,f_auto/v1580247258/bryant/products/air-purifiers/evolution-perfect-air-purifier-for-furnace-and-fan-coils.png",
            "efficiency": ""
          },
          {
            "name": "PREFERRED\u2122 Carbon Air Purifier with UV",
            "model_image": "https://images.carriercms.com/image/upload/w_auto,c_lfill,q_auto,f_auto/v1673384683/bryant/products/uv-lamps/preferred-carbon-air-purifier-UVCAPXX2015.png",
            "efficiency": ""
          },
          {
            "name": "Legacy\u2122 Line Mechanical Air Cleaner",
            "model_image": "https://images.carriercms.com/image/upload/w_auto,c_lfill,q_auto,f_auto/v1634845893/bryant/products/air-purifiers/Bryant-fan-coil-filter-cabinet-FNCCAB.png",
            "efficiency": ""
          }
        ]
      },
      {
        "line": "Boilers",
        "product_line_image": "",
        "models": [
          {
            "name": "Preferred\u2122 Series BW5 Boiler",
            "model_image": "https://images.carriercms.com/image/upload/w_auto,c_lfill,q_auto,f_auto/v1685022419/bryant/products/boilers/preferred-series-BW5-boiler-model-BW5.png",
            "efficiency": ""
          },
          {
            "name": "Preferred\u2122 Series BW4 Boiler",
            "model_image": "https://images.carriercms.com/image/upload/w_auto,c_lfill,q_auto,f_auto/v1685022538/bryant/products/boilers/preferred-series-BW4-boiler-model-BW4.png",
            "efficiency": ""
          },
          {
            "name": "Preferred\u2122 Series BW3 Boiler",
            "model_image": "https://images.carriercms.com/image/upload/w_auto,c_lfill,q_auto,f_auto/v1685022646/bryant/products/boilers/preferred-series-BW3-boiler-model-BW3.png",
            "efficiency": ""
          },
          {
            "name": "Legacy\u2122 Line BS2 Boiler",
            "model_image": "https://images.carriercms.com/image/upload/w_auto,c_lfill,q_auto,f_auto/v1685022788/bryant/products/boilers/preferred-series-boiler.png",
            "efficiency": ""
          },
          {
            "name": "Legacy\u2122 Line BWB Boiler",
            "model_image": "https://images.carriercms.com/image/upload/w_auto,c_lfill,q_auto,f_auto/v1654093539/bryant/products/boilers/legacy-line-BWB-boiler-model-BWB.png",
            "efficiency": ""
          }
        ]
      },
      {
        "line": "Bryant Smart Thermostat",
        "product_line_image": "",
        "models": [
          {
            "name": "EVOLUTION\u2122 CONNEX\u2122 SYSTEM CONTROL (BLACK)",
            "model_image": "https://images.carriercms.com/image/upload/w_auto,c_lfill,q_auto,f_auto/v1641581362/bryant/products/thermostats/evolution-connex-system-control-SYSTXBBECC01-C.png",
            "efficiency": ""
          },
          {
            "name": "EVOLUTION\u2122 CONNEX\u2122 SYSTEM CONTROL (White)",
            "model_image": "https://images.carriercms.com/image/upload/w_auto,c_lfill,q_auto,f_auto/v1721668229/bryant/products/thermostats/bryant-evolution-system-control-SYSTXBBWEC01-C.png",
            "efficiency": ""
          },
          {
            "name": "Smart Sensor for Evolution\u2122 Zoning Systems",
            "model_image": "https://images.carriercms.com/image/upload/w_auto,c_lfill,q_auto,f_auto/v1693313646/bryant/products/thermostats/evolution-smart-sensor-SYSTXZNSMS01.png",
            "efficiency": ""
          },
          {
            "name": "Evolution\u2122 Zoning Panel",
            "model_image": "https://images.carriercms.com/image/upload/w_auto,c_lfill,q_auto,f_auto/v1612456731/bryant/products/thermostats/evolution-zoning-panel-SYSTXBB4ZC01.png",
            "efficiency": ""
          },
          {
            "name": "ecobee for Bryant Smart Thermostat Premium",
            "model_image": "https://images.carriercms.com/image/upload/w_auto,c_lfill,q_auto,f_auto/v1680037202/bryant/products/thermostats/ecobee-for-bryant-smart-thermostat-premium-EB-STAT6IBR-01.png",
            "efficiency": ""
          },
          {
            "name": "ecobee for Bryant ecobee3 lite Smart Thermostat",
            "model_image": "https://images.carriercms.com/image/upload/w_auto,c_lfill,q_auto,f_auto/v1680037203/bryant/products/thermostats/ecobe-for-bryant-ecobee-3-lite-smart-thermostat-EB-STATE3LTIBR-01.png",
            "efficiency": ""
          },
          {
            "name": "Bryant Smart Thermostat",
            "model_image": "https://images.carriercms.com/image/upload/w_auto,c_lfill,q_auto,f_auto/v1724963265/bryant/products/thermostats/bryant-smart-thermostat-white-topic.png",
            "efficiency": ""
          },
          {
            "name": "Preferred\u2122 Four-Zone System",
            "model_image": "https://images.carriercms.com/image/upload/w_auto,c_lfill,q_auto,f_auto/v1687972615/bryant/products/controls/preferred-4-zone-system-ZONEBB4ZCN01.png",
            "efficiency": ""
          }
        ]
      },
      {
        "line": "Controls & Accessories",
        "product_line_image": "",
        "models": [
          {
            "name": "Wireless Remote Controller",
            "model_image": "https://images.carriercms.com/image/upload/w_auto,c_lfill,q_auto,f_auto/v1551049644/bryant/products/ductless/wireless-remote-controller-model-40VM900001.png",
            "efficiency": ""
          },
          {
            "name": "Non-Programmable Wired Remote Controller",
            "model_image": "https://images.carriercms.com/image/upload/w_auto,c_lfill,q_auto,f_auto/v1551050857/bryant/products/vrf/bryant-vrf-training-main.jpg",
            "efficiency": ""
          },
          {
            "name": "Programmable Wired Remote Controller",
            "model_image": "https://images.carriercms.com/image/upload/w_auto,c_lfill,q_auto,f_auto/v1551050857/bryant/products/vrf/bryant-vrf-training-main.jpg",
            "efficiency": ""
          },
          {
            "name": "24V Interface",
            "model_image": "https://images.carriercms.com/image/upload/w_auto,c_lfill,q_auto,f_auto/v1551049644/bryant/products/ductless/24V-interface-model-49VM900008.png",
            "efficiency": ""
          }
        ]
      },
      {
        "line": "Controls & Thermostats",
        "product_line_image": "",
        "models": [
          {
            "name": "EVOLUTION\u2122 CONNEX\u2122 SYSTEM CONTROL (BLACK)",
            "model_image": "https://images.carriercms.com/image/upload/w_auto,c_lfill,q_auto,f_auto/v1641581362/bryant/products/thermostats/evolution-connex-system-control-SYSTXBBECC01-C.png",
            "efficiency": ""
          },
          {
            "name": "EVOLUTION\u2122 CONNEX\u2122 SYSTEM CONTROL (White)",
            "model_image": "https://images.carriercms.com/image/upload/w_auto,c_lfill,q_auto,f_auto/v1721668229/bryant/products/thermostats/bryant-evolution-system-control-SYSTXBBWEC01-C.png",
            "efficiency": ""
          },
          {
            "name": "Smart Sensor for Evolution\u2122 Zoning Systems",
            "model_image": "https://images.carriercms.com/image/upload/w_auto,c_lfill,q_auto,f_auto/v1693313646/bryant/products/thermostats/evolution-smart-sensor-SYSTXZNSMS01.png",
            "efficiency": ""
          },
          {
            "name": "Evolution\u2122 Zoning Panel",
            "model_image": "https://images.carriercms.com/image/upload/w_auto,c_lfill,q_auto,f_auto/v1612456731/bryant/products/thermostats/evolution-zoning-panel-SYSTXBB4ZC01.png",
            "efficiency": ""
          },
          {
            "name": "ecobee for Bryant Smart Thermostat Premium",
            "model_image": "https://images.carriercms.com/image/upload/w_auto,c_lfill,q_auto,f_auto/v1680037202/bryant/products/thermostats/ecobee-for-bryant-smart-thermostat-premium-EB-STAT6IBR-01.png",
            "efficiency": ""
          },
          {
            "name": "ecobee for Bryant ecobee3 lite Smart Thermostat",
            "model_image": "https://images.carriercms.com/image/upload/w_auto,c_lfill,q_auto,f_auto/v1680037203/bryant/products/thermostats/ecobe-for-bryant-ecobee-3-lite-smart-thermostat-EB-STATE3LTIBR-01.png",
            "efficiency": ""
          },
          {
            "name": "Bryant Smart Thermostat",
            "model_image": "https://images.carriercms.com/image/upload/w_auto,c_lfill,q_auto,f_auto/v1724963265/bryant/products/thermostats/bryant-smart-thermostat-white-topic.png",
            "efficiency": ""
          },
          {
            "name": "Preferred\u2122 Four-Zone System",
            "model_image": "https://images.carriercms.com/image/upload/w_auto,c_lfill,q_auto,f_auto/v1687972615/bryant/products/controls/preferred-4-zone-system-ZONEBB4ZCN01.png",
            "efficiency": ""
          }
        ]
      },
      {
        "line": "Crossover Solutions",
        "product_line_image": "",
        "models": [
          {
            "name": "PREFERREDTMCROSSOVER HEAT PUMP",
            "model_image": "https://images.carriercms.com/image/upload/w_auto,c_lfill,q_auto,f_auto/v1734537206/bryant/products/crossover-solutions/preferred-compact--heat-pump-37MUHA.png",
            "efficiency": "Up to 19 SEER2"
          },
          {
            "name": "LEGACYTMCOMPACT CROSSOVER HEAT PUMP",
            "model_image": "https://images.carriercms.com/image/upload/w_auto,c_lfill,q_auto,f_auto/v1734537991/bryant/products/crossover-solutions/preferred-compact-crossover-heat-pump-37MURA.png",
            "efficiency": "Up to 18.8 SEER2"
          },
          {
            "name": "Preferred\u2122 Multipoise Crossover Evaporator Coil",
            "model_image": "https://images.carriercms.com/image/upload/w_auto,c_lfill,q_auto,f_auto/v1734537410/bryant/products/crossover-solutions/multipoise-cased-a-evaporator-coil-45mula.png",
            "efficiency": ""
          },
          {
            "name": "Preferred\u2122 Crossover Air Handler",
            "model_image": "https://images.carriercms.com/image/upload/w_auto,c_lfill,q_auto,f_auto/v1734537619/bryant/products/crossover-solutions/air-handler-crossover-system-45MUHA.png",
            "efficiency": "Dependent upon outdoor unit pairing"
          },
          {
            "name": "Legacy\u2122 Air Handler Crossover Unit",
            "model_image": "https://images.carriercms.com/image/upload/w_auto,c_lfill,q_auto,f_auto/v1734538251/bryant/products/crossover-solutions/air-handler-crossover-system-45MUAA.png",
            "efficiency": "Dependent upon outdoor unit pairing"
          }
        ]
      },
      {
        "line": "Ductless Crossover",
        "product_line_image": "",
        "models": [
          {
            "name": "PREFERREDTMCROSSOVER HEAT PUMP",
            "model_image": "https://images.carriercms.com/image/upload/w_auto,c_lfill,q_auto,f_auto/v1734537206/bryant/products/crossover-solutions/preferred-compact--heat-pump-37MUHA.png",
            "efficiency": "Up to 19 SEER2"
          },
          {
            "name": "LEGACYTMCOMPACT CROSSOVER HEAT PUMP",
            "model_image": "https://images.carriercms.com/image/upload/w_auto,c_lfill,q_auto,f_auto/v1734537991/bryant/products/crossover-solutions/preferred-compact-crossover-heat-pump-37MURA.png",
            "efficiency": "Up to 18.8 SEER2"
          },
          {
            "name": "Preferred\u2122 Multipoise Crossover Evaporator Coil",
            "model_image": "https://images.carriercms.com/image/upload/w_auto,c_lfill,q_auto,f_auto/v1734537410/bryant/products/crossover-solutions/multipoise-cased-a-evaporator-coil-45mula.png",
            "efficiency": ""
          },
          {
            "name": "Preferred\u2122 Crossover Air Handler",
            "model_image": "https://images.carriercms.com/image/upload/w_auto,c_lfill,q_auto,f_auto/v1734537619/bryant/products/crossover-solutions/air-handler-crossover-system-45MUHA.png",
            "efficiency": "Dependent upon outdoor unit pairing"
          },
          {
            "name": "Legacy\u2122 Air Handler Crossover Unit",
            "model_image": "https://images.carriercms.com/image/upload/w_auto,c_lfill,q_auto,f_auto/v1734538251/bryant/products/crossover-solutions/air-handler-crossover-system-45MUAA.png",
            "efficiency": "Dependent upon outdoor unit pairing"
          }
        ]
      },
      {
        "line": "Ductless Systems",
        "product_line_image": "",
        "models": [
          {
            "name": "Evolution\u2122 Heat Pump with Basepan Heater",
            "model_image": "https://images.carriercms.com/image/upload/w_auto,c_lfill,q_auto,f_auto/v1717505752/bryant/products/ductless/evolution-heat-pump-with-basepan-heater-37mpraq.png",
            "efficiency": "Up to 35.1 SEER2"
          },
          {
            "name": "Evolution\u2122 Heat Pump with Basepan Heater",
            "model_image": "https://images.carriercms.com/image/upload/w_auto,c_lfill,q_auto,f_auto/v1726161210/bryant/products/ductless/evolution-heat-pump-37MAHAQ.png",
            "efficiency": "Up to 27.5 SEER2"
          },
          {
            "name": "Evolution Multi-Zone High-Heat Heat Pump with Basepan Heater",
            "model_image": "https://images.carriercms.com/image/upload/w_auto,c_lfill,q_auto,f_auto/v1717505842/bryant/products/ductless/preferred-multi-zone-heat-pump-with-basepan-heater-37MGHAQ.png",
            "efficiency": "up to 25 SEER2"
          },
          {
            "name": "Evolution\u2122 High Wall Indoor Unit",
            "model_image": "https://images.carriercms.com/image/upload/w_auto,c_lfill,q_auto,f_auto/v1724348879/bryant/products/ductless/evolution-high-wall-indoor-unit-615PHAQ.png",
            "efficiency": "Dependent upon outdoor unit pairing"
          },
          {
            "name": "Preferred\u2122 Single-Zone Light Commercial Heat Pump",
            "model_image": "https://images.carriercms.com/image/upload/w_auto,c_lfill,q_auto,f_auto/v1717506273/bryant/products/ductless/preferred-single-zone-heat-pump-37MBRAQ.png",
            "efficiency": "Up to 20 SEER2"
          },
          {
            "name": "Preferred\u2122 Multi-Zone Heat Pump with Basepan Heater",
            "model_image": "https://images.carriercms.com/image/upload/w_auto,c_lfill,q_auto,f_auto/v1717505801/bryant/products/ductless/preferred-multi-zone-heat-pump-with-basepan-heater-37MGRAQ.png",
            "efficiency": "up to 25.2 SEER2"
          },
          {
            "name": "Preferred\u2122 Heat Pump with Basepan Heater",
            "model_image": "https://images.carriercms.com/image/upload/w_auto,c_lfill,q_auto,f_auto/v1717506148/bryant/products/ductless/Preferred-heat-pump-37MARAQ.png",
            "efficiency": "Up to 26 SEER2"
          },
          {
            "name": "Preferred\u2122 High Wall Ductless Indoor Unit",
            "model_image": "https://images.carriercms.com/image/upload/w_auto,c_lfill,q_auto,f_auto/v1717506041/bryant/products/ductless/Preferred-high-wall-indoor-unit-615AHAQ.png",
            "efficiency": "Dependent upon outdoor unit pairing"
          },
          {
            "name": "Preferred\u2122 Air Handler System",
            "model_image": "https://images.carriercms.com/image/upload/w_auto,c_lfill,q_auto,f_auto/v1717506064/bryant/products/ductless/air-handler-ductless-system-45MBAAQ.png",
            "efficiency": "Dependent upon outdoor unit pairing"
          },
          {
            "name": "Preferred\u2122 Ducted Indoor Unit",
            "model_image": "https://images.carriercms.com/image/upload/w_auto,c_lfill,q_auto,f_auto/v1727891170/bryant/products/ductless/preferred-ducted-indoor-unit-model-45MBDAQ.png",
            "efficiency": "Dependent upon outdoor unit pairing"
          },
          {
            "name": "Preferred\u2122 Ceiling/Floor Console Indoor Unit",
            "model_image": "https://images.carriercms.com/image/upload/w_auto,c_lfill,q_auto,f_auto/v1727891406/bryant/products/ductless/performance-floor-console-indoor-unit-45MCFAQ.png",
            "efficiency": "Dependent upon outdoor unit pairing"
          },
          {
            "name": "Preferred\u2122 Floor Console Indoor Unit",
            "model_image": "https://images.carriercms.com/image/upload/w_auto,c_lfill,q_auto,f_auto/v1717505980/bryant/products/ductless/preferred-floor-console-indoor-unit-45MBFAQ.jpg",
            "efficiency": "Dependent upon outdoor unit pairing"
          },
          {
            "name": "Preferred\u2122 Cassette Indoor Unit",
            "model_image": "https://images.carriercms.com/image/upload/w_auto,c_lfill,q_auto,f_auto/v1717505890/bryant/products/ductless/cassette-indoor-unit-ductless-systems-45MBCAQ.png",
            "efficiency": "Dependent upon outdoor unit pairing"
          },
          {
            "name": "Preferred\u2122 One Way Cassette Indoor Unit",
            "model_image": "https://images.carriercms.com/image/upload/w_auto,c_lfill,q_auto,f_auto/v1727891070/bryant/products/ductless/45MCCAQ.png",
            "efficiency": "Dependent upon outdoor unit pairing"
          },
          {
            "name": "Legacy\u2122 Line Heat Pump",
            "model_image": "https://images.carriercms.com/image/upload/w_auto,c_lfill,q_auto,f_auto/v1724349595/bryant/products/ductless/legacy-line-heat-pump-37MHRAQ.png",
            "efficiency": "Up to 22.4 SEER2"
          },
          {
            "name": "Legacy\u2122 Line Air Conditioner",
            "model_image": "https://images.carriercms.com/image/upload/w_auto,c_lfill,q_auto,f_auto/v1724349594/bryant/products/ductless/legacy-line-air-conditioner-37mhrac.png",
            "efficiency": "Up to 22.2 SEER2"
          },
          {
            "name": "Legacy\u2122 Line High Wall Indoor Unit",
            "model_image": "https://images.carriercms.com/image/upload/w_auto,c_lfill,q_auto,f_auto/v1717506319/bryant/products/ductless/legacy-line-high-wall-indoor-unit-45MHHAQ.png",
            "efficiency": "Dependent upon outdoor unit pairing"
          },
          {
            "name": "Legacy\u2122 Line High Wall Indoor Unit - Cooling Only",
            "model_image": "https://images.carriercms.com/image/upload/w_auto,c_lfill,q_auto,f_auto/v1717507022/bryant/products/ductless/legacy-line-high-wall-indoor-unit-model-45MHHAC.avif",
            "efficiency": "Dependent upon outdoor unit pairing"
          },
          {
            "name": "Evolution\u2122 Light Commercial Heat Pump",
            "model_image": "https://images.carriercms.com/image/upload/w_auto,c_lfill,q_auto,f_auto/v1717506231/bryant/products/ductless/preferred-single-zone-heat-pump-37MBHAQ.png",
            "efficiency": "Up to 21.3  SEER2"
          },
          {
            "name": "Preferred\u2122 Single-Zone Light Commercial Heat Pump",
            "model_image": "https://images.carriercms.com/image/upload/w_auto,c_lfill,q_auto,f_auto/v1717506273/bryant/products/ductless/preferred-single-zone-heat-pump-37MBRAQ.png",
            "efficiency": "Up to 20 SEER2"
          },
          {
            "name": "Opti-V Heat Pump",
            "model_image": "https://images.carriercms.com/image/upload/w_auto,c_lfill,q_auto,f_auto/v1744390305/bryant/products/vrf/single-phase-heat-pump-outdoor-unit-model-37VMB.png",
            "efficiency": ""
          },
          {
            "name": "Evolution\u2122 Heat Pump with Basepan Heater",
            "model_image": "https://images.carriercms.com/image/upload/w_auto,c_lfill,q_auto,f_auto/v1717505752/bryant/products/ductless/evolution-heat-pump-with-basepan-heater-37mpraq.png",
            "efficiency": "Up to 35.1 SEER2"
          },
          {
            "name": "Evolution\u2122 Heat Pump with Basepan Heater",
            "model_image": "https://images.carriercms.com/image/upload/w_auto,c_lfill,q_auto,f_auto/v1726161210/bryant/products/ductless/evolution-heat-pump-37MAHAQ.png",
            "efficiency": "Up to 27.5 SEER2"
          },
          {
            "name": "Evolution Multi-Zone High-Heat Heat Pump with Basepan Heater",
            "model_image": "https://images.carriercms.com/image/upload/w_auto,c_lfill,q_auto,f_auto/v1717505842/bryant/products/ductless/preferred-multi-zone-heat-pump-with-basepan-heater-37MGHAQ.png",
            "efficiency": "up to 25 SEER2"
          },
          {
            "name": "Evolution\u2122 High Wall Indoor Unit",
            "model_image": "https://images.carriercms.com/image/upload/w_auto,c_lfill,q_auto,f_auto/v1724348879/bryant/products/ductless/evolution-high-wall-indoor-unit-615PHAQ.png",
            "efficiency": "Dependent upon outdoor unit pairing"
          },
          {
            "name": "Preferred\u2122 Single-Zone Light Commercial Heat Pump",
            "model_image": "https://images.carriercms.com/image/upload/w_auto,c_lfill,q_auto,f_auto/v1717506273/bryant/products/ductless/preferred-single-zone-heat-pump-37MBRAQ.png",
            "efficiency": "Up to 20 SEER2"
          },
          {
            "name": "Preferred\u2122 Multi-Zone Heat Pump with Basepan Heater",
            "model_image": "https://images.carriercms.com/image/upload/w_auto,c_lfill,q_auto,f_auto/v1717505801/bryant/products/ductless/preferred-multi-zone-heat-pump-with-basepan-heater-37MGRAQ.png",
            "efficiency": "up to 25.2 SEER2"
          },
          {
            "name": "Preferred\u2122 Heat Pump with Basepan Heater",
            "model_image": "https://images.carriercms.com/image/upload/w_auto,c_lfill,q_auto,f_auto/v1717506148/bryant/products/ductless/Preferred-heat-pump-37MARAQ.png",
            "efficiency": "Up to 26 SEER2"
          },
          {
            "name": "Preferred\u2122 High Wall Ductless Indoor Unit",
            "model_image": "https://images.carriercms.com/image/upload/w_auto,c_lfill,q_auto,f_auto/v1717506041/bryant/products/ductless/Preferred-high-wall-indoor-unit-615AHAQ.png",
            "efficiency": "Dependent upon outdoor unit pairing"
          },
          {
            "name": "Preferred\u2122 Air Handler System",
            "model_image": "https://images.carriercms.com/image/upload/w_auto,c_lfill,q_auto,f_auto/v1717506064/bryant/products/ductless/air-handler-ductless-system-45MBAAQ.png",
            "efficiency": "Dependent upon outdoor unit pairing"
          },
          {
            "name": "Preferred\u2122 Ducted Indoor Unit",
            "model_image": "https://images.carriercms.com/image/upload/w_auto,c_lfill,q_auto,f_auto/v1727891170/bryant/products/ductless/preferred-ducted-indoor-unit-model-45MBDAQ.png",
            "efficiency": "Dependent upon outdoor unit pairing"
          },
          {
            "name": "Preferred\u2122 Ceiling/Floor Console Indoor Unit",
            "model_image": "https://images.carriercms.com/image/upload/w_auto,c_lfill,q_auto,f_auto/v1727891406/bryant/products/ductless/performance-floor-console-indoor-unit-45MCFAQ.png",
            "efficiency": "Dependent upon outdoor unit pairing"
          },
          {
            "name": "Preferred\u2122 Floor Console Indoor Unit",
            "model_image": "https://images.carriercms.com/image/upload/w_auto,c_lfill,q_auto,f_auto/v1717505980/bryant/products/ductless/preferred-floor-console-indoor-unit-45MBFAQ.jpg",
            "efficiency": "Dependent upon outdoor unit pairing"
          },
          {
            "name": "Preferred\u2122 Cassette Indoor Unit",
            "model_image": "https://images.carriercms.com/image/upload/w_auto,c_lfill,q_auto,f_auto/v1717505890/bryant/products/ductless/cassette-indoor-unit-ductless-systems-45MBCAQ.png",
            "efficiency": "Dependent upon outdoor unit pairing"
          },
          {
            "name": "Preferred\u2122 One Way Cassette Indoor Unit",
            "model_image": "https://images.carriercms.com/image/upload/w_auto,c_lfill,q_auto,f_auto/v1727891070/bryant/products/ductless/45MCCAQ.png",
            "efficiency": "Dependent upon outdoor unit pairing"
          },
          {
            "name": "Legacy\u2122 Line Heat Pump",
            "model_image": "https://images.carriercms.com/image/upload/w_auto,c_lfill,q_auto,f_auto/v1724349595/bryant/products/ductless/legacy-line-heat-pump-37MHRAQ.png",
            "efficiency": "Up to 22.4 SEER2"
          },
          {
            "name": "Legacy\u2122 Line Air Conditioner",
            "model_image": "https://images.carriercms.com/image/upload/w_auto,c_lfill,q_auto,f_auto/v1724349594/bryant/products/ductless/legacy-line-air-conditioner-37mhrac.png",
            "efficiency": "Up to 22.2 SEER2"
          },
          {
            "name": "Legacy\u2122 Line High Wall Indoor Unit",
            "model_image": "https://images.carriercms.com/image/upload/w_auto,c_lfill,q_auto,f_auto/v1717506319/bryant/products/ductless/legacy-line-high-wall-indoor-unit-45MHHAQ.png",
            "efficiency": "Dependent upon outdoor unit pairing"
          },
          {
            "name": "Legacy\u2122 Line High Wall Indoor Unit - Cooling Only",
            "model_image": "https://images.carriercms.com/image/upload/w_auto,c_lfill,q_auto,f_auto/v1717507022/bryant/products/ductless/legacy-line-high-wall-indoor-unit-model-45MHHAC.avif",
            "efficiency": "Dependent upon outdoor unit pairing"
          },
          {
            "name": "Evolution\u2122 Light Commercial Heat Pump",
            "model_image": "https://images.carriercms.com/image/upload/w_auto,c_lfill,q_auto,f_auto/v1717506231/bryant/products/ductless/preferred-single-zone-heat-pump-37MBHAQ.png",
            "efficiency": "Up to 21.3  SEER2"
          },
          {
            "name": "Preferred\u2122 Single-Zone Light Commercial Heat Pump",
            "model_image": "https://images.carriercms.com/image/upload/w_auto,c_lfill,q_auto,f_auto/v1717506273/bryant/products/ductless/preferred-single-zone-heat-pump-37MBRAQ.png",
            "efficiency": "Up to 20 SEER2"
          },
          {
            "name": "Opti-V Heat Pump",
            "model_image": "https://images.carriercms.com/image/upload/w_auto,c_lfill,q_auto,f_auto/v1744390305/bryant/products/vrf/single-phase-heat-pump-outdoor-unit-model-37VMB.png",
            "efficiency": ""
          }
        ]
      },
      {
        "line": "Evaporator Coils",
        "product_line_image": "",
        "models": [
          {
            "name": "Multipoise Cased V Evaporator Coil with Vertex\u2122 Technology",
            "model_image": "https://images.carriercms.com/image/upload/w_auto,c_lfill,q_auto,f_auto/v1706296586/bryant/products/evaporator-coils/multipoise-cased-v-coil-with-vertex-technology-CVAMA.png",
            "efficiency": ""
          },
          {
            "name": "Cased V Evaporator Coil with Vertex\u2122 Technology",
            "model_image": "https://images.carriercms.com/image/upload/w_auto,c_lfill,q_auto,f_auto/v1706296588/bryant/products/evaporator-coils/cased-v-coil-with-vertex-technology-CVAVA.png",
            "efficiency": ""
          },
          {
            "name": "Horizontal Slab Evaporator Coil",
            "model_image": "https://images.carriercms.com/image/upload/w_auto,c_lfill,q_auto,f_auto/v1706296589/bryant/products/evaporator-coils/horizontal-slab-style-evaporator-coil-CSAHP.png",
            "efficiency": ""
          },
          {
            "name": "Upflow/Downflow Uncased A Evaporator Coil",
            "model_image": "https://images.carriercms.com/image/upload/w_auto,c_lfill,q_auto,f_auto/v1706296586/bryant/products/evaporator-coils/uncased-a-evaporator-coil-CAAVU.png",
            "efficiency": ""
          },
          {
            "name": "Multipoise A Evaporator Coil",
            "model_image": "https://images.carriercms.com/image/upload/w_auto,c_lfill,q_auto,f_auto/v1706296585/bryant/products/evaporator-coils/multipoise-cased-a-evaporator-coil-CAAMP.png",
            "efficiency": ""
          }
        ]
      },
      {
        "line": "Evolution\u2122 Connex\u2122",
        "product_line_image": "",
        "models": [
          {
            "name": "EVOLUTION\u2122 CONNEX\u2122 SYSTEM CONTROL (BLACK)",
            "model_image": "https://images.carriercms.com/image/upload/w_auto,c_lfill,q_auto,f_auto/v1641581362/bryant/products/thermostats/evolution-connex-system-control-SYSTXBBECC01-C.png",
            "efficiency": ""
          },
          {
            "name": "EVOLUTION\u2122 CONNEX\u2122 SYSTEM CONTROL (White)",
            "model_image": "https://images.carriercms.com/image/upload/w_auto,c_lfill,q_auto,f_auto/v1721668229/bryant/products/thermostats/bryant-evolution-system-control-SYSTXBBWEC01-C.png",
            "efficiency": ""
          },
          {
            "name": "Smart Sensor for Evolution\u2122 Zoning Systems",
            "model_image": "https://images.carriercms.com/image/upload/w_auto,c_lfill,q_auto,f_auto/v1693313646/bryant/products/thermostats/evolution-smart-sensor-SYSTXZNSMS01.png",
            "efficiency": ""
          },
          {
            "name": "Evolution\u2122 Zoning Panel",
            "model_image": "https://images.carriercms.com/image/upload/w_auto,c_lfill,q_auto,f_auto/v1612456731/bryant/products/thermostats/evolution-zoning-panel-SYSTXBB4ZC01.png",
            "efficiency": ""
          },
          {
            "name": "ecobee for Bryant Smart Thermostat Premium",
            "model_image": "https://images.carriercms.com/image/upload/w_auto,c_lfill,q_auto,f_auto/v1680037202/bryant/products/thermostats/ecobee-for-bryant-smart-thermostat-premium-EB-STAT6IBR-01.png",
            "efficiency": ""
          },
          {
            "name": "ecobee for Bryant ecobee3 lite Smart Thermostat",
            "model_image": "https://images.carriercms.com/image/upload/w_auto,c_lfill,q_auto,f_auto/v1680037203/bryant/products/thermostats/ecobe-for-bryant-ecobee-3-lite-smart-thermostat-EB-STATE3LTIBR-01.png",
            "efficiency": ""
          },
          {
            "name": "Bryant Smart Thermostat",
            "model_image": "https://images.carriercms.com/image/upload/w_auto,c_lfill,q_auto,f_auto/v1724963265/bryant/products/thermostats/bryant-smart-thermostat-white-topic.png",
            "efficiency": ""
          },
          {
            "name": "Preferred\u2122 Four-Zone System",
            "model_image": "https://images.carriercms.com/image/upload/w_auto,c_lfill,q_auto,f_auto/v1687972615/bryant/products/controls/preferred-4-zone-system-ZONEBB4ZCN01.png",
            "efficiency": ""
          }
        ]
      },
      {
        "line": "Fan Coils",
        "product_line_image": "",
        "models": [
          {
            "name": "EVOLUTION\u2122 SYSTEM VARIABLE-SPEED FAN COIL",
            "model_image": "https://images.carriercms.com/image/upload/w_auto,c_lfill,q_auto,f_auto/v1739219717/bryant/products/fan-coils/evolution-variable-speed-fan-coil-FE5B.png",
            "efficiency": ""
          },
          {
            "name": "PREFERREDTMSERIES FAN COIL WITH INTELISENSETMTECHNOLOGY",
            "model_image": "https://images.carriercms.com/image/upload/w_auto,c_lfill,q_auto,f_auto/v1739219718/bryant/products/fan-coils/preferred-series-fan-coil-with-intelisense-technology-FT5.png",
            "efficiency": ""
          },
          {
            "name": "Preferred\u2122 Crossover Air Handler",
            "model_image": "https://images.carriercms.com/image/upload/w_auto,c_lfill,q_auto,f_auto/v1734536898/bryant/products/crossover-solutions/preferred-air-handler-unit-40MUAA.png",
            "efficiency": ""
          },
          {
            "name": "LEGACYTMLINE FAN COIL",
            "model_image": "https://images.carriercms.com/image/upload/w_auto,c_lfill,q_auto,f_auto/v1739219720/bryant/products/fan-coils/legacy-line-fan-coil-FJ5.png",
            "efficiency": ""
          },
          {
            "name": "LEGACY\u2122\u00a0LINE 115V FAN COIL",
            "model_image": "https://images.carriercms.com/image/upload/w_auto,c_lfill,q_auto,f_auto/v1739219716/bryant/products/fan-coils/legacy-line-115v-fan-coil-F55.png",
            "efficiency": ""
          },
          {
            "name": "LEGACYTMLINE MULTI-FAMILY HIGH-EFFICIENCY FAN COIL",
            "model_image": "https://images.carriercms.com/image/upload/w_auto,c_lfill,q_auto,f_auto/v1739219718/bryant/products/fan-coils/legacy-line-multi-family-home-mulit-speed-fan-coil-FMA5X.png",
            "efficiency": ""
          },
          {
            "name": "LEGACYTMLINE MULTI-FAMILY STANDARD-EFFICIENCY FAN COIL",
            "model_image": "https://images.carriercms.com/image/upload/w_auto,c_lfill,q_auto,f_auto/v1739219719/bryant/products/fan-coils/legacy-line-multi-family-home-fan-coil-FMA5L.png",
            "efficiency": ""
          },
          {
            "name": "LEGACYTMLINE MULTI-FAMILY HOME CASED FAN COIL",
            "model_image": "https://images.carriercms.com/image/upload/w_auto,c_lfill,q_auto,f_auto/v1739219717/bryant/products/fan-coils/legacy-line-multi-family-home-cased-fan-coil-FMC5X.png",
            "efficiency": ""
          },
          {
            "name": "LEGACYTMLINE MULTI-FAMILY HOME CASED FAN COIL",
            "model_image": "https://images.carriercms.com/image/upload/w_auto,c_lfill,q_auto,f_auto/v1739219721/bryant/products/fan-coils/legacy-line-multi-family-home-cased-fan-coil-FMC5Z.png",
            "efficiency": ""
          },
          {
            "name": "LEGACYTMLINE MULTI-FAMILY HOME UNCASED FAN COIL",
            "model_image": "https://images.carriercms.com/image/upload/w_auto,c_lfill,q_auto,f_auto/v1739219722/bryant/products/fan-coils/legacy-line-multi-family-home-uncased-fan-coil-FMU5X.png",
            "efficiency": ""
          },
          {
            "name": "LEGACYTMLINE MULTI-FAMILY HOME UNCASED FAN COIL",
            "model_image": "https://images.carriercms.com/image/upload/w_auto,c_lfill,q_auto,f_auto/v1739219713/bryant/products/fan-coils/legacy-line-multi-family-home-uncased-fan-coil-FMU5Z.png",
            "efficiency": ""
          }
        ]
      },
      {
        "line": "Gas Furnaces",
        "product_line_image": "",
        "models": [
          {
            "name": "Evolution\u2122 98 Variable-Speed Modulating Gas Furnace",
            "model_image": "https://images.carriercms.com/image/upload/w_auto,c_lfill,q_auto,f_auto/v1728572298/bryant/products/gas-furnaces/evolution-variable-speed-gas-furnace-987M.png",
            "efficiency": ""
          },
          {
            "name": "Evolution\u2122 96 Variable-Speed Gas Furnace",
            "model_image": "https://images.carriercms.com/image/upload/w_auto,c_lfill,q_auto,f_auto/v1728572296/bryant/products/gas-furnaces/evolution-variable-speed-gas-furnace-red-shield-986T.png",
            "efficiency": ""
          },
          {
            "name": "Evolution\u2122 97 Variable-Speed Gas Furnace",
            "model_image": "https://images.carriercms.com/image/upload/w_auto,c_lfill,q_auto,f_auto/v1730127707/bryant/products/gas-furnaces/evolution-variable-speed-gas-furnace-red-shield-987T.png",
            "efficiency": ""
          },
          {
            "name": "EVOLUTION\u2122 80 VARIABLE-SPEED GAS FURNACE",
            "model_image": "https://images.carriercms.com/image/upload/w_auto,c_lfill,q_auto,f_auto/v1685041133/bryant/products/gas-furnaces/evolution-variable-speed-gas-furnace-red-shield-880TA.png",
            "efficiency": ""
          },
          {
            "name": "Evolution\u2122\u00a080 Variable-Speed Ultra-Low NOx Gas Furnace",
            "model_image": "https://images.carriercms.com/image/upload/w_auto,c_lfill,q_auto,f_auto/v1685041236/bryant/products/gas-furnaces/evolution-80-variable-speed-ultra-low-nox-gas-furnace-830CA.png",
            "efficiency": ""
          },
          {
            "name": "Evolution\u2122\u00a095 Ultra-Low NOx Gas Furnace",
            "model_image": "https://images.carriercms.com/image/upload/w_auto,c_lfill,q_auto,f_auto/v1728572294/bryant/products/gas-furnaces/evolution-95-ultra-lownox-gas-furnace-935CA.png",
            "efficiency": ""
          },
          {
            "name": "PREFERRED\u2122 96 TWO STAGE GAS FURNACE WITH INTELISENSE\u2122\u00a0TECHNOLOGY",
            "model_image": "https://images.carriercms.com/image/upload/w_auto,c_lfill,q_auto,f_auto/v1728572281/bryant/products/gas-furnaces/evolution-variable-speed-gas-furnace-926T.png",
            "efficiency": ""
          },
          {
            "name": "PREFERRED\u2122 97 TWO STAGE GAS FURNACE WITH INTELISENSE\u2122\u00a0TECHNOLOGY",
            "model_image": "https://images.carriercms.com/image/upload/w_auto,c_lfill,q_auto,f_auto/v1730127701/bryant/products/gas-furnaces/evolution-variable-speed-gas-furnace-927T.png",
            "efficiency": ""
          },
          {
            "name": "PREFERRED\u2122 96 VARIABLE-SPEED GAS FURNACE WITH INTELISENSE\u2122\u00a0TECHNOLOGY",
            "model_image": "https://images.carriercms.com/image/upload/w_auto,c_lfill,q_auto,f_auto/v1728572288/bryant/products/gas-furnaces/preferred-96-gas-furnace-926S.png",
            "efficiency": ""
          },
          {
            "name": "PREFERREDTM80 VARIABLE-SPEED GAS FURNACE WITH INTELISENSE\u2122\u00a0TECHNOLOGY",
            "model_image": "https://images.carriercms.com/image/upload/w_auto,c_lfill,q_auto,f_auto/v1688671723/bryant/products/gas-furnaces/preferred-80-variable-speed-gas-furnace-820T.png",
            "efficiency": ""
          },
          {
            "name": "PREFERREDTM80 VARIABLE-SPEED LOW NOX GAS FURNACE WITH INTELISENSE\u2122\u00a0TECHNOLOGY",
            "model_image": "https://images.carriercms.com/image/upload/w_auto,c_lfill,q_auto,f_auto/v1688671723/bryant/products/gas-furnaces/preferred-80-variable-speed-low-nox-gas-furnace-821T.png",
            "efficiency": ""
          },
          {
            "name": "PREFERREDTM80 VARIABLE-SPEED GAS FURNACE WITH INTELISENSE\u2122\u00a0TECHNOLOGY",
            "model_image": "https://images.carriercms.com/image/upload/w_auto,c_lfill,q_auto,f_auto/v1688671723/bryant/products/gas-furnaces/preferred-80-variable-speed-gas-furnace-820S.png",
            "efficiency": ""
          },
          {
            "name": "PREFERREDTM80 VARIABLE- SPEED LOW NOX GAS FURNACE WITH INTELISENSE\u2122\u00a0TECHNOLOGY",
            "model_image": "https://images.carriercms.com/image/upload/w_auto,c_lfill,q_auto,f_auto/v1688671723/bryant/products/gas-furnaces/preferred-80-variable-speed-low-nox-gas-furnace-821S.png",
            "efficiency": ""
          },
          {
            "name": "Legacy\u2122 96 GAS FURNACE",
            "model_image": "https://images.carriercms.com/image/upload/w_auto,c_lfill,q_auto,f_auto/v1728572291/bryant/products/gas-furnaces/bryant-legacy-96_gas-furnace-916S.png",
            "efficiency": ""
          },
          {
            "name": "Legacy\u212292 GAS FURNACE",
            "model_image": "https://images.carriercms.com/image/upload/w_auto,c_lfill,q_auto,f_auto/v1728572283/bryant/products/gas-furnaces/legacy-line-fixed-speed-90-efficiency-gas-furnace-model-912S.png",
            "efficiency": ""
          },
          {
            "name": "LegacyTMLine 80 Fixed-Speed, Ultra-Low NOx Gas Furnace",
            "model_image": "https://images.carriercms.com/image/upload/w_auto,c_lfill,q_auto,f_auto/v1685042984/bryant/products/gas-furnaces/legacy-line-fixed-speed-80-efficiency-ultra-low-nox-gas-furnace-830SA.png",
            "efficiency": ""
          },
          {
            "name": "LEGACYTMMULTI 18-SPEED 80% GAS FURNACE",
            "model_image": "https://images.carriercms.com/image/upload/w_auto,c_lfill,q_auto,f_auto/v1689341085/bryant/products/gas-furnaces/legacy-80-line-fixed-speeds-80-efficiency-gas-furnace-800SA.png",
            "efficiency": ""
          },
          {
            "name": "LEGACYTMMULTI 18-SPEED LOW NOX 80% GAS FURNACE",
            "model_image": "https://images.carriercms.com/image/upload/w_auto,c_lfill,q_auto,f_auto/v1689257460/bryant/products/gas-furnaces/legacy-line-fixed-speed-low-nox-80-efficiency-gas-furnace-801SA.png",
            "efficiency": ""
          },
          {
            "name": "LEGACYTMMULTI 18-SPEED GAS FURNACE",
            "model_image": "https://images.carriercms.com/image/upload/w_auto,c_lfill,q_auto,f_auto/v1685045088/bryant/products/gas-furnaces/legacy-80-line-fixed-speeds-80-efficiency-gas-furnace-810SA.png",
            "efficiency": ""
          },
          {
            "name": "LEGACYTMMULTI 18-SPEED LOW NOX GAS FURNACE",
            "model_image": "https://images.carriercms.com/image/upload/w_auto,c_lfill,q_auto,f_auto/v1689257460/bryant/products/gas-furnaces/legacy-line-fixed-speed-low-nox-80-efficiency-gas-furnace-801SA.png",
            "efficiency": ""
          },
          {
            "name": "LegacyTM95 Ultra-Low NOx Gas Furnace",
            "model_image": "https://images.carriercms.com/image/upload/w_auto,c_lfill,q_auto,f_auto/v1728572285/bryant/products/gas-furnaces/legacy-95-ultra-low-nox-gas-furnace-935SA.png",
            "efficiency": ""
          },
          {
            "name": "Evolution\u2122 98 Variable-Speed Modulating Gas Furnace",
            "model_image": "https://images.carriercms.com/image/upload/w_auto,c_lfill,q_auto,f_auto/v1728572298/bryant/products/gas-furnaces/evolution-variable-speed-gas-furnace-987M.png",
            "efficiency": ""
          },
          {
            "name": "Evolution\u2122 96 Variable-Speed Gas Furnace",
            "model_image": "https://images.carriercms.com/image/upload/w_auto,c_lfill,q_auto,f_auto/v1728572296/bryant/products/gas-furnaces/evolution-variable-speed-gas-furnace-red-shield-986T.png",
            "efficiency": ""
          },
          {
            "name": "Evolution\u2122 97 Variable-Speed Gas Furnace",
            "model_image": "https://images.carriercms.com/image/upload/w_auto,c_lfill,q_auto,f_auto/v1730127707/bryant/products/gas-furnaces/evolution-variable-speed-gas-furnace-red-shield-987T.png",
            "efficiency": ""
          },
          {
            "name": "EVOLUTION\u2122 80 VARIABLE-SPEED GAS FURNACE",
            "model_image": "https://images.carriercms.com/image/upload/w_auto,c_lfill,q_auto,f_auto/v1685041133/bryant/products/gas-furnaces/evolution-variable-speed-gas-furnace-red-shield-880TA.png",
            "efficiency": ""
          },
          {
            "name": "Evolution\u2122\u00a080 Variable-Speed Ultra-Low NOx Gas Furnace",
            "model_image": "https://images.carriercms.com/image/upload/w_auto,c_lfill,q_auto,f_auto/v1685041236/bryant/products/gas-furnaces/evolution-80-variable-speed-ultra-low-nox-gas-furnace-830CA.png",
            "efficiency": ""
          },
          {
            "name": "Evolution\u2122\u00a095 Ultra-Low NOx Gas Furnace",
            "model_image": "https://images.carriercms.com/image/upload/w_auto,c_lfill,q_auto,f_auto/v1728572294/bryant/products/gas-furnaces/evolution-95-ultra-lownox-gas-furnace-935CA.png",
            "efficiency": ""
          },
          {
            "name": "PREFERRED\u2122 96 TWO STAGE GAS FURNACE WITH INTELISENSE\u2122\u00a0TECHNOLOGY",
            "model_image": "https://images.carriercms.com/image/upload/w_auto,c_lfill,q_auto,f_auto/v1728572281/bryant/products/gas-furnaces/evolution-variable-speed-gas-furnace-926T.png",
            "efficiency": ""
          },
          {
            "name": "PREFERRED\u2122 97 TWO STAGE GAS FURNACE WITH INTELISENSE\u2122\u00a0TECHNOLOGY",
            "model_image": "https://images.carriercms.com/image/upload/w_auto,c_lfill,q_auto,f_auto/v1730127701/bryant/products/gas-furnaces/evolution-variable-speed-gas-furnace-927T.png",
            "efficiency": ""
          },
          {
            "name": "PREFERRED\u2122 96 VARIABLE-SPEED GAS FURNACE WITH INTELISENSE\u2122\u00a0TECHNOLOGY",
            "model_image": "https://images.carriercms.com/image/upload/w_auto,c_lfill,q_auto,f_auto/v1728572288/bryant/products/gas-furnaces/preferred-96-gas-furnace-926S.png",
            "efficiency": ""
          },
          {
            "name": "PREFERREDTM80 VARIABLE-SPEED GAS FURNACE WITH INTELISENSE\u2122\u00a0TECHNOLOGY",
            "model_image": "https://images.carriercms.com/image/upload/w_auto,c_lfill,q_auto,f_auto/v1688671723/bryant/products/gas-furnaces/preferred-80-variable-speed-gas-furnace-820T.png",
            "efficiency": ""
          },
          {
            "name": "PREFERREDTM80 VARIABLE-SPEED LOW NOX GAS FURNACE WITH INTELISENSE\u2122\u00a0TECHNOLOGY",
            "model_image": "https://images.carriercms.com/image/upload/w_auto,c_lfill,q_auto,f_auto/v1688671723/bryant/products/gas-furnaces/preferred-80-variable-speed-low-nox-gas-furnace-821T.png",
            "efficiency": ""
          },
          {
            "name": "PREFERREDTM80 VARIABLE-SPEED GAS FURNACE WITH INTELISENSE\u2122\u00a0TECHNOLOGY",
            "model_image": "https://images.carriercms.com/image/upload/w_auto,c_lfill,q_auto,f_auto/v1688671723/bryant/products/gas-furnaces/preferred-80-variable-speed-gas-furnace-820S.png",
            "efficiency": ""
          },
          {
            "name": "PREFERREDTM80 VARIABLE- SPEED LOW NOX GAS FURNACE WITH INTELISENSE\u2122\u00a0TECHNOLOGY",
            "model_image": "https://images.carriercms.com/image/upload/w_auto,c_lfill,q_auto,f_auto/v1688671723/bryant/products/gas-furnaces/preferred-80-variable-speed-low-nox-gas-furnace-821S.png",
            "efficiency": ""
          },
          {
            "name": "Legacy\u2122 96 GAS FURNACE",
            "model_image": "https://images.carriercms.com/image/upload/w_auto,c_lfill,q_auto,f_auto/v1728572291/bryant/products/gas-furnaces/bryant-legacy-96_gas-furnace-916S.png",
            "efficiency": ""
          },
          {
            "name": "Legacy\u212292 GAS FURNACE",
            "model_image": "https://images.carriercms.com/image/upload/w_auto,c_lfill,q_auto,f_auto/v1728572283/bryant/products/gas-furnaces/legacy-line-fixed-speed-90-efficiency-gas-furnace-model-912S.png",
            "efficiency": ""
          },
          {
            "name": "LegacyTMLine 80 Fixed-Speed, Ultra-Low NOx Gas Furnace",
            "model_image": "https://images.carriercms.com/image/upload/w_auto,c_lfill,q_auto,f_auto/v1685042984/bryant/products/gas-furnaces/legacy-line-fixed-speed-80-efficiency-ultra-low-nox-gas-furnace-830SA.png",
            "efficiency": ""
          },
          {
            "name": "LEGACYTMMULTI 18-SPEED 80% GAS FURNACE",
            "model_image": "https://images.carriercms.com/image/upload/w_auto,c_lfill,q_auto,f_auto/v1689341085/bryant/products/gas-furnaces/legacy-80-line-fixed-speeds-80-efficiency-gas-furnace-800SA.png",
            "efficiency": ""
          },
          {
            "name": "LEGACYTMMULTI 18-SPEED LOW NOX 80% GAS FURNACE",
            "model_image": "https://images.carriercms.com/image/upload/w_auto,c_lfill,q_auto,f_auto/v1689257460/bryant/products/gas-furnaces/legacy-line-fixed-speed-low-nox-80-efficiency-gas-furnace-801SA.png",
            "efficiency": ""
          },
          {
            "name": "LEGACYTMMULTI 18-SPEED GAS FURNACE",
            "model_image": "https://images.carriercms.com/image/upload/w_auto,c_lfill,q_auto,f_auto/v1685045088/bryant/products/gas-furnaces/legacy-80-line-fixed-speeds-80-efficiency-gas-furnace-810SA.png",
            "efficiency": ""
          },
          {
            "name": "LEGACYTMMULTI 18-SPEED LOW NOX GAS FURNACE",
            "model_image": "https://images.carriercms.com/image/upload/w_auto,c_lfill,q_auto,f_auto/v1689257460/bryant/products/gas-furnaces/legacy-line-fixed-speed-low-nox-80-efficiency-gas-furnace-801SA.png",
            "efficiency": ""
          },
          {
            "name": "LegacyTM95 Ultra-Low NOx Gas Furnace",
            "model_image": "https://images.carriercms.com/image/upload/w_auto,c_lfill,q_auto,f_auto/v1728572285/bryant/products/gas-furnaces/legacy-95-ultra-low-nox-gas-furnace-935SA.png",
            "efficiency": ""
          }
        ]
      },
      {
        "line": "Heat Pumps",
        "product_line_image": "",
        "models": [
          {
            "name": "EVOLUTION\u2122 EXTREME VARIABLE-SPEED HEAT PUMP",
            "model_image": "https://images.carriercms.com/image/upload/w_auto,c_lfill,q_auto,f_auto/v1662564751/bryant/products/heat-pumps/evolution-extreme-24-variable-speed-heat-pump-red-shield-284A.png",
            "efficiency": "Up to 23 SEER2"
          },
          {
            "name": "EVOLUTION\u2122 EXTREME 21 VARIABLE-SPEED COLD CLIMATE HEAT PUMP",
            "model_image": "https://images.carriercms.com/image/upload/w_auto,c_lfill,q_auto,f_auto/v1739220088/bryant/products/heat-pumps/evolution-extreme-24-variable-speed-heat-pump-red-shield-292VAN.png",
            "efficiency": "Up to 21.2 SEER2"
          },
          {
            "name": "EVOLUTION\u2122 EXTREME 23 VARIABLE-SPEED HEAT PUMP",
            "model_image": "https://images.carriercms.com/image/upload/w_auto,c_lfill,q_auto,f_auto/v1739220088/bryant/products/heat-pumps/evolution-extreme-24-variable-speed-heat-pump-red-shield-292VAN.png",
            "efficiency": "Up to 23 SEER2"
          },
          {
            "name": "Evolution\u2122\u00a0Variable-Speed Heat Pump",
            "model_image": "https://images.carriercms.com/image/upload/w_auto,c_lfill,q_auto,f_auto/v1661288146/bryant/products/heat-pumps/evolution-variable-speed-heat-pump-red-shield-288BNV.png",
            "efficiency": "Up to 19 SEER2"
          },
          {
            "name": "Evolution\u2122 Extreme Variable Speed Heat Pump",
            "model_image": "https://images.carriercms.com/image/upload/w_auto,c_lfill,q_auto,f_auto/v1739220090/bryant/products/heat-pumps/evolution-variable-speed-heat-pump-red-shield-290VAN.png",
            "efficiency": "Up to 20 SEER2"
          },
          {
            "name": "PREFERREDTM2-STAGE HEAT PUMP WITH INTELISENSETMTECHNOLOGY",
            "model_image": "https://images.carriercms.com/image/upload/w_auto,c_lfill,q_auto,f_auto/v1739220093/bryant/products/heat-pumps/preferred-2-stage-heat-pump-with-intelisense-technology-248TAN.png",
            "efficiency": "Up to 18.5 SEER2"
          },
          {
            "name": "PREFERREDTM2-STAGE COASTAL HEAT PUMP WITH INTELISENSETMTECHNOLOGY",
            "model_image": "https://images.carriercms.com/image/upload/w_auto,c_lfill,q_auto,f_auto/v1739220095/bryant/products/heat-pumps/preferred-2-stage-heat-pump-with-intelisense-technology-248TAN--C.png",
            "efficiency": "Up to 18.5 SEER2"
          },
          {
            "name": "PREFERREDTMSINGLE-STAGE HEAT PUMP WITH INTELISENSE\u2122 TECHNOLOGY",
            "model_image": "https://images.carriercms.com/image/upload/w_auto,c_lfill,q_auto,f_auto/v1739220087/bryant/products/heat-pumps/preferred-single-stage-heat-pump-with-intelisense-technology-246SAN.png",
            "efficiency": "up to 16.5 SEER2"
          },
          {
            "name": "LEGACYTMSINGLE-STAGE HEAT PUMP",
            "model_image": "https://images.carriercms.com/image/upload/w_auto,c_lfill,q_auto,f_auto/v1739220098/bryant/products/heat-pumps/legacy-single-stage-heat-pump-235SAN.png",
            "efficiency": "up to 16 SEER2"
          },
          {
            "name": "LEGACYTMSINGLE-STAGE COASTAL HEAT PUMP",
            "model_image": "https://images.carriercms.com/image/upload/w_auto,c_lfill,q_auto,f_auto/v1739220112/bryant/products/heat-pumps/legacy-single-stage-heat-pump-235SAN---C.png",
            "efficiency": "up to 16 SEER2"
          },
          {
            "name": "EVOLUTION\u2122 EXTREME VARIABLE-SPEED HEAT PUMP",
            "model_image": "https://images.carriercms.com/image/upload/w_auto,c_lfill,q_auto,f_auto/v1662564751/bryant/products/heat-pumps/evolution-extreme-24-variable-speed-heat-pump-red-shield-284A.png",
            "efficiency": "Up to 23 SEER2"
          },
          {
            "name": "EVOLUTION\u2122 EXTREME 21 VARIABLE-SPEED COLD CLIMATE HEAT PUMP",
            "model_image": "https://images.carriercms.com/image/upload/w_auto,c_lfill,q_auto,f_auto/v1739220088/bryant/products/heat-pumps/evolution-extreme-24-variable-speed-heat-pump-red-shield-292VAN.png",
            "efficiency": "Up to 21.2 SEER2"
          },
          {
            "name": "EVOLUTION\u2122 EXTREME 23 VARIABLE-SPEED HEAT PUMP",
            "model_image": "https://images.carriercms.com/image/upload/w_auto,c_lfill,q_auto,f_auto/v1739220088/bryant/products/heat-pumps/evolution-extreme-24-variable-speed-heat-pump-red-shield-292VAN.png",
            "efficiency": "Up to 23 SEER2"
          },
          {
            "name": "Evolution\u2122\u00a0Variable-Speed Heat Pump",
            "model_image": "https://images.carriercms.com/image/upload/w_auto,c_lfill,q_auto,f_auto/v1661288146/bryant/products/heat-pumps/evolution-variable-speed-heat-pump-red-shield-288BNV.png",
            "efficiency": "Up to 19 SEER2"
          },
          {
            "name": "Evolution\u2122 Extreme Variable Speed Heat Pump",
            "model_image": "https://images.carriercms.com/image/upload/w_auto,c_lfill,q_auto,f_auto/v1739220090/bryant/products/heat-pumps/evolution-variable-speed-heat-pump-red-shield-290VAN.png",
            "efficiency": "Up to 20 SEER2"
          },
          {
            "name": "PREFERREDTM2-STAGE HEAT PUMP WITH INTELISENSETMTECHNOLOGY",
            "model_image": "https://images.carriercms.com/image/upload/w_auto,c_lfill,q_auto,f_auto/v1739220093/bryant/products/heat-pumps/preferred-2-stage-heat-pump-with-intelisense-technology-248TAN.png",
            "efficiency": "Up to 18.5 SEER2"
          },
          {
            "name": "PREFERREDTM2-STAGE COASTAL HEAT PUMP WITH INTELISENSETMTECHNOLOGY",
            "model_image": "https://images.carriercms.com/image/upload/w_auto,c_lfill,q_auto,f_auto/v1739220095/bryant/products/heat-pumps/preferred-2-stage-heat-pump-with-intelisense-technology-248TAN--C.png",
            "efficiency": "Up to 18.5 SEER2"
          },
          {
            "name": "PREFERREDTMSINGLE-STAGE HEAT PUMP WITH INTELISENSE\u2122 TECHNOLOGY",
            "model_image": "https://images.carriercms.com/image/upload/w_auto,c_lfill,q_auto,f_auto/v1739220087/bryant/products/heat-pumps/preferred-single-stage-heat-pump-with-intelisense-technology-246SAN.png",
            "efficiency": "up to 16.5 SEER2"
          },
          {
            "name": "LEGACYTMSINGLE-STAGE HEAT PUMP",
            "model_image": "https://images.carriercms.com/image/upload/w_auto,c_lfill,q_auto,f_auto/v1739220098/bryant/products/heat-pumps/legacy-single-stage-heat-pump-235SAN.png",
            "efficiency": "up to 16 SEER2"
          },
          {
            "name": "LEGACYTMSINGLE-STAGE COASTAL HEAT PUMP",
            "model_image": "https://images.carriercms.com/image/upload/w_auto,c_lfill,q_auto,f_auto/v1739220112/bryant/products/heat-pumps/legacy-single-stage-heat-pump-235SAN---C.png",
            "efficiency": "up to 16 SEER2"
          }
        ]
      },
      {
        "line": "Humidifiers",
        "product_line_image": "",
        "models": [
          {
            "name": "Preferred\u2122 Series Steam Humidifier",
            "model_image": "https://images.carriercms.com/image/upload/w_auto,c_lfill,q_auto,f_auto/v1580251166/bryant/products/humidifiers/preferred-series-staem-humidifier-model-HUMXXSTM.png",
            "efficiency": ""
          },
          {
            "name": "Preferred\u2122 Series Large Fan-powered Humidifier",
            "model_image": "https://images.carriercms.com/image/upload/w_auto,c_lfill,q_auto,f_auto/v1580251179/bryant/products/humidifiers/preferred-series-large-fan-powered-humidifier-model-HUMXXLFP.png",
            "efficiency": ""
          },
          {
            "name": "Preferred\u2122\u00a0Series Large Bypass Humidifier",
            "model_image": "https://images.carriercms.com/image/upload/w_auto,c_lfill,q_auto,f_auto/v1580251173/bryant/products/humidifiers/preferred-series-small-bypass-humidifier-model-HUMBBSBP.png",
            "efficiency": ""
          },
          {
            "name": "Preferred\u2122\u00a0Series Small Bypass Humidifier",
            "model_image": "https://images.carriercms.com/image/upload/w_auto,c_lfill,q_auto,f_auto/v1580251173/bryant/products/humidifiers/preferred-series-small-bypass-humidifier-model-HUMBBSBP.png",
            "efficiency": ""
          },
          {
            "name": "Preferred\u2122\u00a0Series Water Saver Bypass Humidifier",
            "model_image": "https://images.carriercms.com/image/upload/w_auto,c_lfill,q_auto,f_auto/v1580251173/bryant/products/humidifiers/preferred-series-small-bypass-humidifier-model-HUMBBSBP.png",
            "efficiency": ""
          }
        ]
      },
      {
        "line": "Indoor Units",
        "product_line_image": "",
        "models": [
          {
            "name": "High Wall Indoor Unit",
            "model_image": "https://images.carriercms.com/image/upload/w_auto,c_lfill,q_auto,f_auto/v1744391045/bryant/products/vrf/high-wall-indoor-unit-model-45VMW.png",
            "efficiency": ""
          },
          {
            "name": "4-Way Compact Cassette Indoor Unit",
            "model_image": "https://images.carriercms.com/image/upload/w_auto,c_lfill,q_auto,f_auto/v1744391233/bryant/products/vrf/4-way-compact-cassette-indoor-unit-45VMC.png",
            "efficiency": ""
          },
          {
            "name": "4-Way Cassette Indoor Unit",
            "model_image": "https://images.carriercms.com/image/upload/w_auto,c_lfill,q_auto,f_auto/v1551049614/bryant/products/ductless/bryant-indoor-units.png",
            "efficiency": ""
          },
          {
            "name": "Vertical Air Handling Indoor Unit",
            "model_image": "https://images.carriercms.com/image/upload/w_auto,c_lfill,q_auto,f_auto/v1744390575/bryant/products/vrf/vertical-air-handling-indoor-unit-model-45VMV.png",
            "efficiency": ""
          },
          {
            "name": "Medium Static Duct Indoor Unit",
            "model_image": "https://images.carriercms.com/image/upload/w_auto,c_lfill,q_auto,f_auto/v1744390723/bryant/products/vrf/medium-static-duct-indoor-model-45VMM.png",
            "efficiency": ""
          },
          {
            "name": "Low Static Duct Indoor Unit",
            "model_image": "https://images.carriercms.com/image/upload/w_auto,c_lfill,q_auto,f_auto/v1744390876/bryant/products/vrf/low-static-duct-indoor-unit-model-45VML.png",
            "efficiency": ""
          },
          {
            "name": "Outside Air Indoor Unit",
            "model_image": "https://images.carriercms.com/image/upload/w_auto,c_lfill,q_auto,f_auto/v1551049635/bryant/products/ductless/outside-air-indoor-unit-model-40VMA.png",
            "efficiency": ""
          },
          {
            "name": "High Static Duct Indoor Unit",
            "model_image": "https://images.carriercms.com/image/upload/w_auto,c_lfill,q_auto,f_auto/v1551049629/bryant/products/ductless/high-static-duct-indoor-unit-model-40VMH.png",
            "efficiency": ""
          },
          {
            "name": "Floor Console Indoor Unit",
            "model_image": "https://images.carriercms.com/image/upload/w_auto,c_lfill,q_auto,f_auto/v1551049628/bryant/products/ductless/floor-console-indoor-unit-model-40VMR.png",
            "efficiency": ""
          },
          {
            "name": "Underceiling Indoor Unit",
            "model_image": "https://images.carriercms.com/image/upload/w_auto,c_lfill,q_auto,f_auto/v1551049643/bryant/products/ductless/underceiling-indoor-unit-model-40VMU.png",
            "efficiency": ""
          },
          {
            "name": "Multiport Distribution Controller Indoor Unit",
            "model_image": "https://images.carriercms.com/image/upload/w_auto,c_lfill,q_auto,f_auto/v1551049633/bryant/products/ductless/multi-distributor-controller-indoor-unit-model-40VMD.png",
            "efficiency": ""
          }
        ]
      },
      {
        "line": "Oil Furnaces",
        "product_line_image": "",
        "models": [
          {
            "name": "Preferred Series OVL Oil Furnace",
            "model_image": "https://images.carriercms.com/image/upload/w_auto,c_lfill,q_auto,f_auto/v1570667648/bryant/products/oil-furnaces/oil-furnace-preffered-OVL.png",
            "efficiency": ""
          },
          {
            "name": "Preferred Series OVM Oil Furnace",
            "model_image": "https://images.carriercms.com/image/upload/w_auto,c_lfill,q_auto,f_auto/v1570667648/bryant/products/oil-furnaces/oil-furnace-preffered-OVM.png",
            "efficiency": ""
          },
          {
            "name": "Legacy Line OBL Oil Furnace",
            "model_image": "https://images.carriercms.com/image/upload/w_auto,c_lfill,q_auto,f_auto/v1570667648/bryant/products/oil-furnaces/oil-furnace-legacy-OBL.png",
            "efficiency": ""
          },
          {
            "name": "Legacy Line OBM Oil Furnace",
            "model_image": "https://images.carriercms.com/image/upload/w_auto,c_lfill,q_auto,f_auto/v1570667648/bryant/products/oil-furnaces/oil-furnace-legacy-OBM.png",
            "efficiency": ""
          }
        ]
      },
      {
        "line": "Outdoor Units",
        "product_line_image": "",
        "models": [
          {
            "name": "Heat Recovery Outdoor Unit",
            "model_image": "https://images.carriercms.com/image/upload/w_auto,c_lfill,q_auto,f_auto/v1551049629/bryant/products/ductless/heat-recovery-outdoor-unit-model-38VMR.png",
            "efficiency": ""
          },
          {
            "name": "Heat Pump Outdoor Unit",
            "model_image": "https://images.carriercms.com/image/upload/w_auto,c_lfill,q_auto,f_auto/v1685047369/bryant/products/ductless/heat-pump-outdoor-unit-model-38VMH.png",
            "efficiency": ""
          },
          {
            "name": "Opti-V Heat Pump",
            "model_image": "https://images.carriercms.com/image/upload/w_auto,c_lfill,q_auto,f_auto/v1744390305/bryant/products/vrf/single-phase-heat-pump-outdoor-unit-model-37VMB.png",
            "efficiency": ""
          }
        ]
      },
      {
        "line": "Packaged Products",
        "product_line_image": "",
        "models": [
          {
            "name": "Preferred\u2122 Series Gas Heat/Electric Cool Systems",
            "model_image": "https://images.carriercms.com/image/upload/w_auto,c_lfill,q_auto,f_auto/v1680012393/bryant/products/packaged-products/preferred-series-packaged-systems-577E.png",
            "efficiency": "Up to 16 SEER2"
          },
          {
            "name": "Preferred\u2122 Series Heat Pump Systems",
            "model_image": "https://images.carriercms.com/image/upload/w_auto,c_lfill,q_auto,f_auto/v1680013436/bryant/products/packaged-products/preferred-series-heat-pump-systems-607E.png",
            "efficiency": "Up to 15.5 SEER2"
          },
          {
            "name": "Preferred\u2122 Series Hybrid Heat/Electric Cool Systems",
            "model_image": "https://images.carriercms.com/image/upload/w_auto,c_lfill,q_auto,f_auto/v1680016862/bryant/products/packaged-products/preferred-series-gas-heat-electric-cool-systems-model-677E.png",
            "efficiency": "Up to 15.5 SEER2"
          },
          {
            "name": "Preferred\u2122 Series Air Conditioner Systems",
            "model_image": "https://images.carriercms.com/image/upload/w_auto,c_lfill,q_auto,f_auto/v1680022080/bryant/products/packaged-products/preferred-series-air-conditioner-systems-model-707E.png",
            "efficiency": "Up to 16 SEER2"
          },
          {
            "name": "LEGACYTMLINE GAS HEAT/ELECTRIC COOL SYSTEMS",
            "model_image": "https://images.carriercms.com/image/upload/w_auto,c_lfill,q_auto,f_auto/v1739221772/bryant/products/packaged-products/legacy-line-gas-heat-electric-cool-systems-louvers-575C.png",
            "efficiency": "13.4 SEER2"
          },
          {
            "name": "LEGACYTMLINE HEAT PUMP SYSTEMS",
            "model_image": "https://images.carriercms.com/image/upload/w_auto,c_lfill,q_auto,f_auto/v1739221774/bryant/products/packaged-products/legacy-line-heat-pump-systems-675C.png",
            "efficiency": "13.4 SEER2"
          },
          {
            "name": "LEGACYTMLINE GAS HEAT/ELECTRIC COOL SYSTEMS",
            "model_image": "https://images.carriercms.com/image/upload/w_auto,c_lfill,q_auto,f_auto/v1739221773/bryant/products/packaged-products/legacy-line-gas-heat-electric-cool-systems-605C.png",
            "efficiency": "13.4 SEER2"
          },
          {
            "name": "LEGACYTMLINE AIR CONDITIONER SYSTEMS",
            "model_image": "https://images.carriercms.com/image/upload/w_auto,c_lfill,q_auto,f_auto/v1739221780/bryant/products/packaged-products/legacy-line-air-conditioner-systems-louvers-705C.png",
            "efficiency": "13.4 SEER2"
          },
          {
            "name": "Base Line Air Conditioner Systems",
            "model_image": "https://images.carriercms.com/image/upload/w_auto,c_lfill,q_auto,f_auto/v1613601271/bryant/products/packaged-products/preferred-series-packaged-systems-PA4Z.png",
            "efficiency": "13.4 SEER2"
          },
          {
            "name": "Base Line Air Conditioner Systems",
            "model_image": "https://images.carriercms.com/image/upload/w_auto,c_lfill,q_auto,f_auto/v1739221784/bryant/products/packaged-products/preferred-series-packaged-systems-PA5Z.png",
            "efficiency": "13.4 SEER2"
          },
          {
            "name": "Base Line Heat Pump Systems",
            "model_image": "https://images.carriercms.com/image/upload/w_auto,c_lfill,q_auto,f_auto/v1613601271/bryant/products/packaged-products/preferred-series-packaged-systems-PH4Z.png",
            "efficiency": "13.4 SEER2"
          },
          {
            "name": "Base Line Heat Pump System",
            "model_image": "https://images.carriercms.com/image/upload/w_auto,c_lfill,q_auto,f_auto/v1739221783/bryant/products/packaged-products/preferred-series-packaged-systems-PH5Z.png",
            "efficiency": "13.4 SEER2"
          }
        ]
      },
      {
        "line": "Rooftop",
        "product_line_image": "",
        "models": [
          {
            "name": "Preferred\u2122 Series Puron Advance\u2122 Single-Packaged Rooftop Units with Axion\u2122 Technology and Gas Heating/Electric Cooling",
            "model_image": "https://images.carriercms.com/image/upload/w_auto,c_lfill,q_auto,f_auto/v1744738305/bryant/products/light-commercial/Preferred-Single-Packaged-Rooftop-Units_with_Axion_Technology-581L-551L.png",
            "efficiency": ""
          },
          {
            "name": "Preferred\u2122 Series Puron Advance\u2122 Single-Packaged Rooftop Units with Axion\u2122 Technology",
            "model_image": "https://images.carriercms.com/image/upload/w_auto,c_lfill,q_auto,f_auto/v1744738305/bryant/products/light-commercial/Preferred-Single-Packaged-Rooftop-Units_with_Axion_Technology-581L-551L.png",
            "efficiency": ""
          },
          {
            "name": "Preferred Rooftop Heat Pump",
            "model_image": "https://images.carriercms.com/image/upload/w_auto,c_lfill,q_auto,f_auto/v1685046490/bryant/products/light-commercial/bryant-light-commercial-preffered-551J.png",
            "efficiency": ""
          },
          {
            "name": "Legacy Split System Heat Pump",
            "model_image": "https://images.carriercms.com/image/upload/w_auto,c_lfill,q_auto,f_auto/v1685046719/bryant/products/light-commercial/bryant-light-commercial-legacy-575J.png",
            "efficiency": ""
          },
          {
            "name": "Legacy Split System Air Conditioner",
            "model_image": "https://images.carriercms.com/image/upload/w_auto,c_lfill,q_auto,f_auto/v1685047004/bryant/products/light-commercial/bryant-light-commercial-legacy-580J.png",
            "efficiency": ""
          },
          {
            "name": "Legacy Packaged Direct Expansion Cooling Only or Heat Pump Air-Handling Unit with Puron\u00ae Refrigerant",
            "model_image": "https://images.carriercms.com/image/upload/w_auto,c_lfill,q_auto,f_auto/v1685046719/bryant/products/light-commercial/bryant-light-commercial-legacy-575J.png",
            "efficiency": ""
          },
          {
            "name": "Legacy\u2122 Packaged Air-Handling Unit with Axion\u2122 Technology",
            "model_image": "https://images.carriercms.com/image/upload/w_auto,c_lfill,q_auto,f_auto/v1685046927/bryant/products/light-commercial/bryant-light-commercial-legacy-524F.png",
            "efficiency": ""
          },
          {
            "name": "Legacy Standard Efficiency Gas Heating/Electric Cooling Rooftop Unit with Axion\u2122 Technology",
            "model_image": "https://images.carriercms.com/image/upload/w_auto,c_lfill,q_auto,f_auto/v1685047004/bryant/products/light-commercial/bryant-light-commercial-legacy-580J.png",
            "efficiency": ""
          },
          {
            "name": "Legacy Standard Efficiency Electric Heating/Electric Cooling Rooftop Units with Axion\u2122 Technology",
            "model_image": "https://images.carriercms.com/image/upload/w_auto,c_lfill,q_auto,f_auto/v1685046794/bryant/products/light-commercial/bryant-light-commercial-legacy-558J.png",
            "efficiency": ""
          },
          {
            "name": "LEGACY ROOFTOP HEAT PUMP",
            "model_image": "https://images.carriercms.com/image/upload/w_auto,c_lfill,q_auto,f_auto/v1685046490/bryant/products/light-commercial/bryant-light-commercial-preffered-551J.png",
            "efficiency": ""
          },
          {
            "name": "Legacy Line\u2122 Puron Advance\u2122 Single-Packaged Rooftop Units with Axion\u2122 Technology",
            "model_image": "https://images.carriercms.com/image/upload/w_auto,c_lfill,q_auto,f_auto/v1718123715/bryant/products/light-commercial/bryant-light-commercial-legacy-559L.png",
            "efficiency": ""
          },
          {
            "name": "Legacy Line\u2122 Puron Advance\u2122 Single-Packaged Rooftop Units with Axion\u2122 Technology",
            "model_image": "https://images.carriercms.com/image/upload/w_auto,c_lfill,q_auto,f_auto/v1717778516/bryant/products/light-commercial/bryant-light-commercial-legacy-582L.png",
            "efficiency": ""
          },
          {
            "name": "LEGACY ROOFTOP HEAT PUMP",
            "model_image": "https://images.carriercms.com/image/upload/w_auto,c_lfill,q_auto,f_auto/v1721919707/bryant/products/light-commercial/547L.jpg",
            "efficiency": ""
          }
        ]
      },
      {
        "line": "Split Systems",
        "product_line_image": "",
        "models": [
          {
            "name": "Preferred\u2122 Series Puron Advance\u2122 Single-Packaged Rooftop Units with Axion\u2122 Technology and Gas Heating/Electric Cooling",
            "model_image": "https://images.carriercms.com/image/upload/w_auto,c_lfill,q_auto,f_auto/v1744738305/bryant/products/light-commercial/Preferred-Single-Packaged-Rooftop-Units_with_Axion_Technology-581L-551L.png",
            "efficiency": ""
          },
          {
            "name": "Preferred\u2122 Series Puron Advance\u2122 Single-Packaged Rooftop Units with Axion\u2122 Technology",
            "model_image": "https://images.carriercms.com/image/upload/w_auto,c_lfill,q_auto,f_auto/v1744738305/bryant/products/light-commercial/Preferred-Single-Packaged-Rooftop-Units_with_Axion_Technology-581L-551L.png",
            "efficiency": ""
          },
          {
            "name": "Preferred Rooftop Heat Pump",
            "model_image": "https://images.carriercms.com/image/upload/w_auto,c_lfill,q_auto,f_auto/v1685046490/bryant/products/light-commercial/bryant-light-commercial-preffered-551J.png",
            "efficiency": ""
          },
          {
            "name": "Legacy Split System Heat Pump",
            "model_image": "https://images.carriercms.com/image/upload/w_auto,c_lfill,q_auto,f_auto/v1685046719/bryant/products/light-commercial/bryant-light-commercial-legacy-575J.png",
            "efficiency": ""
          },
          {
            "name": "Legacy Split System Air Conditioner",
            "model_image": "https://images.carriercms.com/image/upload/w_auto,c_lfill,q_auto,f_auto/v1685047004/bryant/products/light-commercial/bryant-light-commercial-legacy-580J.png",
            "efficiency": ""
          },
          {
            "name": "Legacy Packaged Direct Expansion Cooling Only or Heat Pump Air-Handling Unit with Puron\u00ae Refrigerant",
            "model_image": "https://images.carriercms.com/image/upload/w_auto,c_lfill,q_auto,f_auto/v1685046719/bryant/products/light-commercial/bryant-light-commercial-legacy-575J.png",
            "efficiency": ""
          },
          {
            "name": "Legacy\u2122 Packaged Air-Handling Unit with Axion\u2122 Technology",
            "model_image": "https://images.carriercms.com/image/upload/w_auto,c_lfill,q_auto,f_auto/v1685046927/bryant/products/light-commercial/bryant-light-commercial-legacy-524F.png",
            "efficiency": ""
          },
          {
            "name": "Legacy Standard Efficiency Gas Heating/Electric Cooling Rooftop Unit with Axion\u2122 Technology",
            "model_image": "https://images.carriercms.com/image/upload/w_auto,c_lfill,q_auto,f_auto/v1685047004/bryant/products/light-commercial/bryant-light-commercial-legacy-580J.png",
            "efficiency": ""
          },
          {
            "name": "Legacy Standard Efficiency Electric Heating/Electric Cooling Rooftop Units with Axion\u2122 Technology",
            "model_image": "https://images.carriercms.com/image/upload/w_auto,c_lfill,q_auto,f_auto/v1685046794/bryant/products/light-commercial/bryant-light-commercial-legacy-558J.png",
            "efficiency": ""
          },
          {
            "name": "LEGACY ROOFTOP HEAT PUMP",
            "model_image": "https://images.carriercms.com/image/upload/w_auto,c_lfill,q_auto,f_auto/v1685046490/bryant/products/light-commercial/bryant-light-commercial-preffered-551J.png",
            "efficiency": ""
          },
          {
            "name": "Legacy Line\u2122 Puron Advance\u2122 Single-Packaged Rooftop Units with Axion\u2122 Technology",
            "model_image": "https://images.carriercms.com/image/upload/w_auto,c_lfill,q_auto,f_auto/v1718123715/bryant/products/light-commercial/bryant-light-commercial-legacy-559L.png",
            "efficiency": ""
          },
          {
            "name": "Legacy Line\u2122 Puron Advance\u2122 Single-Packaged Rooftop Units with Axion\u2122 Technology",
            "model_image": "https://images.carriercms.com/image/upload/w_auto,c_lfill,q_auto,f_auto/v1717778516/bryant/products/light-commercial/bryant-light-commercial-legacy-582L.png",
            "efficiency": ""
          },
          {
            "name": "LEGACY ROOFTOP HEAT PUMP",
            "model_image": "https://images.carriercms.com/image/upload/w_auto,c_lfill,q_auto,f_auto/v1721919707/bryant/products/light-commercial/547L.jpg",
            "efficiency": ""
          }
        ]
      },
      {
        "line": "UV Lamps",
        "product_line_image": "",
        "models": [
          {
            "name": "Preferred\u2122 Series UV Lamp",
            "model_image": "https://images.carriercms.com/image/upload/w_auto,c_lfill,q_auto,f_auto/v1680025080/bryant/products/uv-lamps/preferred-series-UV-lamps-UVLBB1LP.png",
            "efficiency": ""
          },
          {
            "name": "Preferred\u2122 Series UV Lamp",
            "model_image": "https://images.carriercms.com/image/upload/w_auto,c_lfill,q_auto,f_auto/v1680025054/bryant/products/uv-lamps/preferred-series-UV-lamps-UVLBB2LP.png",
            "efficiency": ""
          }
        ]
      },
      {
        "line": "Ventilators",
        "product_line_image": "",
        "models": [
          {
            "name": "PREFERRED\u2122 LARGE, HORIZONTAL ENERGY RECOVERY VENTILATOR",
            "model_image": "https://images.carriercms.com/image/upload/w_auto,c_lfill,q_auto,f_auto/v1718136984/bryant/products/ventilators/preferred-large-horizontal-energy-recovery-ventilator-ERVXXLHB.png",
            "efficiency": ""
          },
          {
            "name": "PREFERRED\u2122 HORIZONTAL ENERGY RECOVERY VENTILATOR",
            "model_image": "https://images.carriercms.com/image/upload/w_auto,c_lfill,q_auto,f_auto/v1718136904/bryant/products/ventilators/preferred-horizontal-energy-recovery-ventilator-ERVXXSH.png",
            "efficiency": ""
          },
          {
            "name": "PREFERRED\u2122 HORIZONTAL ENERGY RECOVERY VENTILATOR",
            "model_image": "https://images.carriercms.com/image/upload/w_auto,c_lfill,q_auto,f_auto/v1718136904/bryant/products/ventilators/preferred-horizontal-energy-recovery-ventilator-ERVXXSH.png",
            "efficiency": ""
          },
          {
            "name": "PREFERRED\u2122 VERTICAL ENERGY RECOVERY VENTILATOR",
            "model_image": "https://images.carriercms.com/image/upload/w_auto,c_lfill,q_auto,f_auto/v1719432774/bryant/products/ventilators/preferred-vertical-energy-recovery-ventilator-ERVXXSV.png",
            "efficiency": ""
          },
          {
            "name": "PREFERRED\u2122 VERTICAL ENERGY RECOVERY VENTILATOR",
            "model_image": "https://images.carriercms.com/image/upload/w_auto,c_lfill,q_auto,f_auto/v1719432774/bryant/products/ventilators/preferred-vertical-energy-recovery-ventilator-ERVXXSV.png",
            "efficiency": ""
          },
          {
            "name": "PREFERRED\u2122 HORIZONTAL HEAT RECOVERY VENTILATOR",
            "model_image": "https://images.carriercms.com/image/upload/w_auto,c_lfill,q_auto,f_auto/v1718136983/bryant/products/ventilators/preferred-horizontal-heat-recovery-ventilator-HRVXXLHB.png",
            "efficiency": ""
          },
          {
            "name": "PREFERRED\u2122 HORIZONTAL HEAT RECOVERY VENTILATOR",
            "model_image": "https://images.carriercms.com/image/upload/w_auto,c_lfill,q_auto,f_auto/v1718136983/bryant/products/ventilators/preferred-horizontal-heat-recovery-ventilator-HRVXXSH_-.png",
            "efficiency": ""
          },
          {
            "name": "PREFERRED\u2122 HORIZONTAL HEAT RECOVERY VENTILATOR",
            "model_image": "https://images.carriercms.com/image/upload/w_auto,c_lfill,q_auto,f_auto/v1718136983/bryant/products/ventilators/preferred-horizontal-heat-recovery-ventilator-HRVXXSH_-.png",
            "efficiency": ""
          },
          {
            "name": "PREFERRED\u2122 VERTICAL HEAT RECOVERY VENTILATOR",
            "model_image": "https://images.carriercms.com/image/upload/w_auto,c_lfill,q_auto,f_auto/v1719432334/bryant/products/ventilators/preferred-vertical-heat-recovery-ventilator-HRVXXSV.png",
            "efficiency": ""
          },
          {
            "name": "PREFERRED\u2122 VERTICAL HEAT RECOVERY VENTILATOR",
            "model_image": "https://images.carriercms.com/image/upload/w_auto,c_lfill,q_auto,f_auto/v1719432334/bryant/products/ventilators/preferred-vertical-heat-recovery-ventilator-HRVXXSV.png",
            "efficiency": ""
          },
          {
            "name": "Legacy\u2122 Furnace/Duct Mounted Energy Recovery Ventilator",
            "model_image": "https://images.carriercms.com/image/upload/w_auto,c_lfill,q_auto,f_auto/v1581227492/bryant/products/ventilators/legacy-furnace-duct-mounted-energy-recovery-ventilator-ERVCRNVA.png",
            "efficiency": ""
          }
        ]
      },
      {
        "line": "ecobee Smart Thermostats",
        "product_line_image": "",
        "models": [
          {
            "name": "EVOLUTION\u2122 CONNEX\u2122 SYSTEM CONTROL (BLACK)",
            "model_image": "https://images.carriercms.com/image/upload/w_auto,c_lfill,q_auto,f_auto/v1641581362/bryant/products/thermostats/evolution-connex-system-control-SYSTXBBECC01-C.png",
            "efficiency": ""
          },
          {
            "name": "EVOLUTION\u2122 CONNEX\u2122 SYSTEM CONTROL (White)",
            "model_image": "https://images.carriercms.com/image/upload/w_auto,c_lfill,q_auto,f_auto/v1721668229/bryant/products/thermostats/bryant-evolution-system-control-SYSTXBBWEC01-C.png",
            "efficiency": ""
          },
          {
            "name": "Smart Sensor for Evolution\u2122 Zoning Systems",
            "model_image": "https://images.carriercms.com/image/upload/w_auto,c_lfill,q_auto,f_auto/v1693313646/bryant/products/thermostats/evolution-smart-sensor-SYSTXZNSMS01.png",
            "efficiency": ""
          },
          {
            "name": "Evolution\u2122 Zoning Panel",
            "model_image": "https://images.carriercms.com/image/upload/w_auto,c_lfill,q_auto,f_auto/v1612456731/bryant/products/thermostats/evolution-zoning-panel-SYSTXBB4ZC01.png",
            "efficiency": ""
          },
          {
            "name": "ecobee for Bryant Smart Thermostat Premium",
            "model_image": "https://images.carriercms.com/image/upload/w_auto,c_lfill,q_auto,f_auto/v1680037202/bryant/products/thermostats/ecobee-for-bryant-smart-thermostat-premium-EB-STAT6IBR-01.png",
            "efficiency": ""
          },
          {
            "name": "ecobee for Bryant ecobee3 lite Smart Thermostat",
            "model_image": "https://images.carriercms.com/image/upload/w_auto,c_lfill,q_auto,f_auto/v1680037203/bryant/products/thermostats/ecobe-for-bryant-ecobee-3-lite-smart-thermostat-EB-STATE3LTIBR-01.png",
            "efficiency": ""
          },
          {
            "name": "Bryant Smart Thermostat",
            "model_image": "https://images.carriercms.com/image/upload/w_auto,c_lfill,q_auto,f_auto/v1724963265/bryant/products/thermostats/bryant-smart-thermostat-white-topic.png",
            "efficiency": ""
          },
          {
            "name": "Preferred\u2122 Four-Zone System",
            "model_image": "https://images.carriercms.com/image/upload/w_auto,c_lfill,q_auto,f_auto/v1687972615/bryant/products/controls/preferred-4-zone-system-ZONEBB4ZCN01.png",
            "efficiency": ""
          }
        ]
      }
    ]
  },
  {
    "brand": "Trane",
    "logo": "/logos/Trane.jpeg",
    "productLines": [
      {
        "line": "Air conditioner packaged",
        "product_line_image": "https://live-trane-headless-cms.pantheonsite.io/wp-content/uploads/2022/03/xl15c-packaged-ac-system-lg.png",
        "models": [
          {
            "name": "14 Single-Stage Air Conditioner Packaged",
            "model_image": "https://www.trane.com/_next/image/?url=https%3A%2F%2Flive-trane-headless-cms.pantheonsite.io%2Fwp-content%2Fuploads%2F2025%2F02%2FTRANE_ACHP-Packaged-Unit-_-Single-Phase-Only-1-300x240.png&w=3840&q=75",
            "efficiency": ""
          },
          {
            "name": "XR13.4c Air Conditioner Packaged System",
            "model_image": "https://www.trane.com/_next/image/?url=https%3A%2F%2Flive-trane-headless-cms.pantheonsite.io%2Fwp-content%2Fuploads%2F2022%2F03%2Fxr14c-packaged-ac-system-lg-259x300.png&w=3840&q=75",
            "efficiency": ""
          }
        ]
      },
      {
        "line": "Air conditioners",
        "product_line_image": "https://live-trane-headless-cms.pantheonsite.io/wp-content/uploads/2022/03/xr17-air-conditioners-lg.png",
        "models": [
          {
            "name": "20 TruComfort\u2122 Variable Speed Air Conditioner with WeatherGuard\u2122",
            "model_image": "https://www.trane.com/_next/image/?url=https%3A%2F%2Flive-trane-headless-cms.pantheonsite.io%2Fwp-content%2Fuploads%2F2022%2F08%2Fair-conditioner-xv20i-lg-259x300.png&w=3840&q=75",
            "efficiency": ""
          },
          {
            "name": "XV20i TruComfort\u2122 Variable Speed Air Conditioner",
            "model_image": "https://www.trane.com/_next/image/?url=https%3A%2F%2Flive-trane-headless-cms.pantheonsite.io%2Fwp-content%2Fuploads%2F2022%2F08%2Fair-conditioner-xv20i-lg-259x300.png&w=3840&q=75",
            "efficiency": ""
          },
          {
            "name": "18 TruComfort\u2122 Variable Speed Air Conditioner",
            "model_image": "https://www.trane.com/_next/image/?url=https%3A%2F%2Flive-trane-headless-cms.pantheonsite.io%2Fwp-content%2Fuploads%2F2024%2F04%2FTR_14-18_SEER2_AC-HP_BTY_2024-251x300.png&w=3840&q=75",
            "efficiency": ""
          },
          {
            "name": "XV18 TruComfort\u2122 Variable Speed Air Conditioner",
            "model_image": "https://www.trane.com/_next/image/?url=https%3A%2F%2Flive-trane-headless-cms.pantheonsite.io%2Fwp-content%2Fuploads%2F2022%2F08%2Fair-conditioner-xv18-lg-259x300.png&w=3840&q=75",
            "efficiency": ""
          },
          {
            "name": "XV17 TruComfort\u2122 Variable Speed Air Conditioner",
            "model_image": "https://www.trane.com/_next/image/?url=https%3A%2F%2Flive-trane-headless-cms.pantheonsite.io%2Fwp-content%2Fuploads%2F2023%2F05%2FXV17_AC_HP-1-261x300.png&w=3840&q=75",
            "efficiency": ""
          },
          {
            "name": "17 Multi-Speed Air Conditioner with WeatherGuard\u2122",
            "model_image": "https://www.trane.com/_next/image/?url=https%3A%2F%2Flive-trane-headless-cms.pantheonsite.io%2Fwp-content%2Fuploads%2F2022%2F03%2FXL15i_AC-216x300.png&w=3840&q=75",
            "efficiency": ""
          },
          {
            "name": "XL17i Air Conditioner",
            "model_image": "https://www.trane.com/_next/image/?url=https%3A%2F%2Flive-trane-headless-cms.pantheonsite.io%2Fwp-content%2Fuploads%2F2022%2F03%2Fxl17i-air-conditioner-216x300.png&w=3840&q=75",
            "efficiency": ""
          },
          {
            "name": "17 Multi-Speed Air Conditioner",
            "model_image": "https://www.trane.com/_next/image/?url=https%3A%2F%2Flive-trane-headless-cms.pantheonsite.io%2Fwp-content%2Fuploads%2F2024%2F10%2F4TTR7024_XR-angle01-cropped-258x300.png&w=3840&q=75",
            "efficiency": ""
          },
          {
            "name": "XR16 Air Conditioner",
            "model_image": "https://www.trane.com/_next/image/?url=https%3A%2F%2Flive-trane-headless-cms.pantheonsite.io%2Fwp-content%2Fuploads%2F2022%2F03%2Fxr16-air-conditioner-251x300.png&w=3840&q=75",
            "efficiency": ""
          },
          {
            "name": "15 Single-Stage Air Conditioner with WeatherGuard\u2122 Top",
            "model_image": "https://www.trane.com/_next/image/?url=https%3A%2F%2Flive-trane-headless-cms.pantheonsite.io%2Fwp-content%2Fuploads%2F2022%2F03%2FXL15i_AC-216x300.png&w=3840&q=75",
            "efficiency": "SEER2 of up to 17"
          },
          {
            "name": "XL15i Air Conditioner",
            "model_image": "https://www.trane.com/_next/image/?url=https%3A%2F%2Flive-trane-headless-cms.pantheonsite.io%2Fwp-content%2Fuploads%2F2022%2F03%2FXL15i_AC-216x300.png&w=3840&q=75",
            "efficiency": ""
          },
          {
            "name": "15 Single-Stage Air Conditioner",
            "model_image": "https://www.trane.com/_next/image/?url=https%3A%2F%2Flive-trane-headless-cms.pantheonsite.io%2Fwp-content%2Fuploads%2F2024%2F10%2F4TTR7024_XR-angle01-cropped-258x300.png&w=3840&q=75",
            "efficiency": "SEER2 of up to 17"
          },
          {
            "name": "XR15 Air Conditioner",
            "model_image": "https://www.trane.com/_next/image/?url=https%3A%2F%2Flive-trane-headless-cms.pantheonsite.io%2Fwp-content%2Fuploads%2F2022%2F03%2Fxr16-air-conditioners-lg-259x300.png&w=3840&q=75",
            "efficiency": ""
          },
          {
            "name": "14 Single-Stage Air Conditioner",
            "model_image": "https://www.trane.com/_next/image/?url=https%3A%2F%2Flive-trane-headless-cms.pantheonsite.io%2Fwp-content%2Fuploads%2F2024%2F10%2F4TTR7024_XR-angle01-cropped-258x300.png&w=3840&q=75",
            "efficiency": "SEER2 of up to 14.3"
          },
          {
            "name": "XR14 Air Conditioner",
            "model_image": "https://www.trane.com/_next/image/?url=https%3A%2F%2Flive-trane-headless-cms.pantheonsite.io%2Fwp-content%2Fuploads%2F2022%2F08%2Fair-conditioner-xr14-lg-259x300.png&w=3840&q=75",
            "efficiency": ""
          },
          {
            "name": "13 Single-Stage Air Conditioner",
            "model_image": "https://www.trane.com/_next/image/?url=https%3A%2F%2Flive-trane-headless-cms.pantheonsite.io%2Fwp-content%2Fuploads%2F2024%2F10%2F4TTR7024_XR-angle01-cropped-258x300.png&w=3840&q=75",
            "efficiency": "SEER2 of up to 13.4"
          },
          {
            "name": "XR13 Air Conditioner",
            "model_image": "https://www.trane.com/_next/image/?url=https%3A%2F%2Flive-trane-headless-cms.pantheonsite.io%2Fwp-content%2Fuploads%2F2022%2F08%2Fair-conditioner-xr13-lg-259x300.png&w=3840&q=75",
            "efficiency": ""
          },
          {
            "name": "XR15 Low Profile Air Conditioner",
            "model_image": "https://www.trane.com/_next/image/?url=https%3A%2F%2Flive-trane-headless-cms.pantheonsite.io%2Fwp-content%2Fuploads%2F2022%2F08%2Fair-conditioner-system-xr16-low-profile-lg-242x300.png&w=3840&q=75",
            "efficiency": ""
          },
          {
            "name": "WeatherGuard\u2122 Top Air Conditioner Accessory",
            "model_image": "https://www.trane.com/_next/image/?url=https%3A%2F%2Flive-trane-headless-cms.pantheonsite.io%2Fwp-content%2Fuploads%2F2022%2F03%2FWeatherguard_AC_Big_Unit-300x229.webp&w=3840&q=75",
            "efficiency": ""
          }
        ]
      },
      {
        "line": "Air handlers",
        "product_line_image": "https://live-trane-headless-cms.pantheonsite.io/wp-content/uploads/2022/04/hyperion-communicating-lg.png",
        "models": [
          {
            "name": "Hyperion\u2122 Variable Speed Air Handler",
            "model_image": "https://www.trane.com/_next/image/?url=https%3A%2F%2Flive-trane-headless-cms.pantheonsite.io%2Fwp-content%2Fuploads%2F2022%2F12%2FTrane-Hyperion-TAMX-Air-Handler-163x300.png&w=3840&q=75",
            "efficiency": ""
          },
          {
            "name": "Hyperion\u2122 TAMX Air Handler",
            "model_image": "https://www.trane.com/_next/image/?url=https%3A%2F%2Flive-trane-headless-cms.pantheonsite.io%2Fwp-content%2Fuploads%2F2022%2F12%2FTrane-Hyperion-TAMX-Air-Handler-163x300.png&w=3840&q=75",
            "efficiency": ""
          },
          {
            "name": "Air Handler",
            "model_image": "https://www.trane.com/_next/image/?url=https%3A%2F%2Flive-trane-headless-cms.pantheonsite.io%2Fwp-content%2Fuploads%2F2022%2F03%2Fm-series-communicating-lg-259x300.png&w=3840&q=75",
            "efficiency": ""
          },
          {
            "name": "TruComfort\u2122 Variable Speed Air Handler",
            "model_image": "https://www.trane.com/_next/image/?url=https%3A%2F%2Flive-trane-headless-cms.pantheonsite.io%2Fwp-content%2Fuploads%2F2022%2F03%2Fm-series-communicating-lg-259x300.png&w=3840&q=75",
            "efficiency": ""
          },
          {
            "name": "M Series Communicating Air Handler",
            "model_image": "https://www.trane.com/_next/image/?url=https%3A%2F%2Flive-trane-headless-cms.pantheonsite.io%2Fwp-content%2Fuploads%2F2022%2F03%2Fm-series-communicating-lg-259x300.png&w=3840&q=75",
            "efficiency": ""
          },
          {
            "name": "Hyperion\u2122 Air Handler",
            "model_image": "https://www.trane.com/_next/image/?url=https%3A%2F%2Flive-trane-headless-cms.pantheonsite.io%2Fwp-content%2Fuploads%2F2022%2F03%2Fhyperion-series-lg-259x300.png&w=3840&q=75",
            "efficiency": ""
          },
          {
            "name": "Hyperion\u2122 Series Air Handler",
            "model_image": "https://www.trane.com/_next/image/?url=https%3A%2F%2Flive-trane-headless-cms.pantheonsite.io%2Fwp-content%2Fuploads%2F2022%2F03%2Fhyperion-series-lg-259x300.png&w=3840&q=75",
            "efficiency": ""
          },
          {
            "name": "Variable Speed Air Handler",
            "model_image": "https://www.trane.com/_next/image/?url=https%3A%2F%2Flive-trane-headless-cms.pantheonsite.io%2Fwp-content%2Fuploads%2F2022%2F03%2Fm-series-communicating-lg-259x300.png&w=3840&q=75",
            "efficiency": ""
          },
          {
            "name": "120V Modular Variable Speed Air Handler",
            "model_image": "https://www.trane.com/_next/image/?url=https%3A%2F%2Flive-trane-headless-cms.pantheonsite.io%2Fwp-content%2Fuploads%2F2022%2F03%2Fp-series-modular-blower-lg-259x300.png&w=3840&q=75",
            "efficiency": ""
          },
          {
            "name": "M Series Air Handler",
            "model_image": "https://www.trane.com/_next/image/?url=https%3A%2F%2Flive-trane-headless-cms.pantheonsite.io%2Fwp-content%2Fuploads%2F2022%2F03%2Fm-series-lg-259x300.png&w=3840&q=75",
            "efficiency": ""
          },
          {
            "name": "Compact Plus Air Handler",
            "model_image": "https://www.trane.com/_next/image/?url=https%3A%2F%2Flive-trane-headless-cms.pantheonsite.io%2Fwp-content%2Fuploads%2F2025%2F03%2F5TMM5-Right_W_Panels-1-1-184x300.png&w=3840&q=75",
            "efficiency": ""
          },
          {
            "name": "TMM Series Air Handler",
            "model_image": "https://www.trane.com/_next/image/?url=https%3A%2F%2Flive-trane-headless-cms.pantheonsite.io%2Fwp-content%2Fuploads%2F2022%2F03%2Ftmm-series-lg-259x300.png&w=3840&q=75",
            "efficiency": ""
          }
        ]
      },
      {
        "line": "Air purification",
        "product_line_image": "https://live-trane-headless-cms.pantheonsite.io/wp-content/uploads/2022/12/trane-air-purification-product-hub.png",
        "models": [
          {
            "name": "QuikBox\u2122 Air Cleaner",
            "model_image": "https://www.trane.com/_next/image/?url=https%3A%2F%2Flive-trane-headless-cms.pantheonsite.io%2Fwp-content%2Fuploads%2F2022%2F03%2Fquikbox-merv13-262x300.png&w=3840&q=75",
            "efficiency": ""
          },
          {
            "name": "Trane CleanEffects\u00ae Whole Home Air Cleaner",
            "model_image": "https://www.trane.com/_next/image/?url=https%3A%2F%2Flive-trane-headless-cms.pantheonsite.io%2Fwp-content%2Fuploads%2F2022%2F03%2FTrane-CleanEffects-whole-home-air-cleaner-340x320-1-300x283.png&w=3840&q=75",
            "efficiency": ""
          },
          {
            "name": "SlimFit Filter Rack",
            "model_image": "https://www.trane.com/_next/image/?url=https%3A%2F%2Flive-trane-headless-cms.pantheonsite.io%2Fwp-content%2Fuploads%2F2022%2F03%2Fslim-fit-lg-259x300.png&w=3840&q=75",
            "efficiency": ""
          }
        ]
      },
      {
        "line": "Coils",
        "product_line_image": "https://live-trane-headless-cms.pantheonsite.io/wp-content/uploads/2022/03/comfort-coil-lg.png",
        "models": [
          {
            "name": "Comfort\u2122 Coil \u2013 Multi-position",
            "model_image": "https://www.trane.com/_next/image/?url=https%3A%2F%2Flive-trane-headless-cms.pantheonsite.io%2Fwp-content%2Fuploads%2F2024%2F10%2F4TXC-5TXC-Coil-PDP-297x300.jpg&w=3840&q=75",
            "efficiency": ""
          },
          {
            "name": "4AXA/5AXA Uncased Coils",
            "model_image": "https://www.trane.com/_next/image/?url=https%3A%2F%2Flive-trane-headless-cms.pantheonsite.io%2Fwp-content%2Fuploads%2F2023%2F05%2F4AXA-coils-245x300.png&w=3840&q=75",
            "efficiency": ""
          },
          {
            "name": "4PXFH/5PXFH Horizontal Flat Coils",
            "model_image": "https://www.trane.com/_next/image/?url=https%3A%2F%2Flive-trane-headless-cms.pantheonsite.io%2Fwp-content%2Fuploads%2F2024%2F10%2F4PXFH-5PXFH-Coil-PDP-Image-300x221.jpg&w=3840&q=75",
            "efficiency": ""
          },
          {
            "name": "Comfort\u2122 Coil \u2013 Upflow/Downflow",
            "model_image": "https://www.trane.com/_next/image/?url=https%3A%2F%2Flive-trane-headless-cms.pantheonsite.io%2Fwp-content%2Fuploads%2F2024%2F10%2F4TXC-5TXC-Coil-PDP-297x300.jpg&w=3840&q=75",
            "efficiency": ""
          }
        ]
      },
      {
        "line": "Earthwise hybrid dual fuel packaged",
        "product_line_image": "https://live-trane-headless-cms.pantheonsite.io/wp-content/uploads/2022/03/xl16c-earthwise-hybrid-lg.png",
        "models": [
          {
            "name": "15 Two-Stage EarthWise\u2122 Hybrid Gas Furnace/Heat Pump Packaged",
            "model_image": "https://www.trane.com/_next/image/?url=https%3A%2F%2Flive-trane-headless-cms.pantheonsite.io%2Fwp-content%2Fuploads%2F2025%2F02%2FTRANE-Premium-Only-5YCC4-5YCZ5-5DCZ5-300x230.png&w=3840&q=75",
            "efficiency": ""
          },
          {
            "name": "XL15c EarthWise\u2122 Hybrid Dual Fuel Packaged System",
            "model_image": "https://www.trane.com/_next/image/?url=https%3A%2F%2Flive-trane-headless-cms.pantheonsite.io%2Fwp-content%2Fuploads%2F2022%2F03%2FXL15c-earthwise-hybrid-system-300x230.png&w=3840&q=75",
            "efficiency": ""
          }
        ]
      },
      {
        "line": "Furnaces",
        "product_line_image": "https://live-trane-headless-cms.pantheonsite.io/wp-content/uploads/2022/03/xc95m-lg.png",
        "models": [
          {
            "name": "96 Two-Stage Variable Speed Gas Furnace",
            "model_image": "https://www.trane.com/_next/image/?url=https%3A%2F%2Flive-trane-headless-cms.pantheonsite.io%2Fwp-content%2Fuploads%2F2022%2F08%2Fgas-furnace-s9v2-lg-259x300.png&w=3840&q=75",
            "efficiency": ""
          },
          {
            "name": "96 Modulating Variable Speed Gas Furnace",
            "model_image": "https://www.trane.com/_next/image/?url=https%3A%2F%2Flive-trane-headless-cms.pantheonsite.io%2Fwp-content%2Fuploads%2F2022%2F08%2Fgas-furnace-xc95m-lg-259x300.png&w=3840&q=75",
            "efficiency": ""
          },
          {
            "name": "80 Two-Stage Variable Speed Gas Furnace",
            "model_image": "https://www.trane.com/_next/image/?url=https%3A%2F%2Flive-trane-headless-cms.pantheonsite.io%2Fwp-content%2Fuploads%2F2022%2F08%2Fgas-furnace-s8v2-c-lg-206x300.png&w=3840&q=75",
            "efficiency": ""
          },
          {
            "name": "97 Two-Stage Variable Speed Gas Furnace",
            "model_image": "https://www.trane.com/_next/image/?url=https%3A%2F%2Flive-trane-headless-cms.pantheonsite.io%2Fwp-content%2Fuploads%2F2022%2F08%2Fgas-furnace-s9v2-vs-lg-259x300.png&w=3840&q=75",
            "efficiency": ""
          },
          {
            "name": "80 Two-Stage Gas Furnace",
            "model_image": "https://www.trane.com/_next/image/?url=https%3A%2F%2Flive-trane-headless-cms.pantheonsite.io%2Fwp-content%2Fuploads%2F2022%2F08%2Fgas-furnace-s8x2-lg-206x300.png&w=3840&q=75",
            "efficiency": ""
          },
          {
            "name": "96 Two-Stage Gas Furnace",
            "model_image": "https://www.trane.com/_next/image/?url=https%3A%2F%2Flive-trane-headless-cms.pantheonsite.io%2Fwp-content%2Fuploads%2F2022%2F08%2Fgas-furnace-s9x2-lg-259x300.png&w=3840&q=75",
            "efficiency": ""
          },
          {
            "name": "96 Single-Stage Gas Furnace",
            "model_image": "https://www.trane.com/_next/image/?url=https%3A%2F%2Flive-trane-headless-cms.pantheonsite.io%2Fwp-content%2Fuploads%2F2022%2F03%2Fgas-furnace-s9x1-lg-259x300.png&w=3840&q=75",
            "efficiency": ""
          },
          {
            "name": "92 Single-Stage Builder-Grade Gas Furnace",
            "model_image": "https://www.trane.com/_next/image/?url=https%3A%2F%2Flive-trane-headless-cms.pantheonsite.io%2Fwp-content%2Fuploads%2F2022%2F03%2Fgas-furnace-s9b1-lg-259x300.png&w=3840&q=75",
            "efficiency": ""
          },
          {
            "name": "95 Single-Stage Ultra-Low NOx Gas Furnace",
            "model_image": "https://www.trane.com/_next/image/?url=https%3A%2F%2Flive-trane-headless-cms.pantheonsite.io%2Fwp-content%2Fuploads%2F2022%2F03%2Fgas-furnace-l9x1-lg-197x300.png&w=3840&q=75",
            "efficiency": ""
          },
          {
            "name": "80 Single-Stage Builder-Grade Gas Furnace",
            "model_image": "https://www.trane.com/_next/image/?url=https%3A%2F%2Flive-trane-headless-cms.pantheonsite.io%2Fwp-content%2Fuploads%2F2022%2F03%2Fgas-furnace-s8b1-lg-201x300.png&w=3840&q=75",
            "efficiency": ""
          },
          {
            "name": "80 Single-Stage Gas Furnace",
            "model_image": "https://www.trane.com/_next/image/?url=https%3A%2F%2Flive-trane-headless-cms.pantheonsite.io%2Fwp-content%2Fuploads%2F2022%2F08%2Fgas-furnace-s8x1-lg-201x300.png&w=3840&q=75",
            "efficiency": ""
          }
        ]
      },
      {
        "line": "Gas & electric packaged",
        "product_line_image": "https://live-trane-headless-cms.pantheonsite.io/wp-content/uploads/2022/03/xl16c-packaged-heat-pump-lg.png",
        "models": [
          {
            "name": "15 Two-Stage Gas Furnace/Air Conditioner Packaged",
            "model_image": "https://www.trane.com/_next/image/?url=https%3A%2F%2Flive-trane-headless-cms.pantheonsite.io%2Fwp-content%2Fuploads%2F2025%2F02%2FTRANE_ACHP-Packaged-Unit-_-Single-Phase-Only-min-300x240.png&w=3840&q=75",
            "efficiency": ""
          },
          {
            "name": "15 3-Phase Two-Stage Gas Furnace/Air Conditioner Packaged",
            "model_image": "https://www.trane.com/_next/image/?url=https%3A%2F%2Flive-trane-headless-cms.pantheonsite.io%2Fwp-content%2Fuploads%2F2025%2F02%2F15-TS-3PH-300x225.png&w=3840&q=75",
            "efficiency": ""
          },
          {
            "name": "14 Single-Stage Gas Furnace/Air Conditioner Packaged",
            "model_image": "https://www.trane.com/_next/image/?url=https%3A%2F%2Flive-trane-headless-cms.pantheonsite.io%2Fwp-content%2Fuploads%2F2025%2F02%2FTRANE-Premium-Only-5YCC4-5YCZ5-5DCZ5-min-300x230.png&w=3840&q=75",
            "efficiency": ""
          },
          {
            "name": "14 3-Phase Single-Stage Gas Furnace/Air Conditioner Packaged",
            "model_image": "https://www.trane.com/_next/image/?url=https%3A%2F%2Flive-trane-headless-cms.pantheonsite.io%2Fwp-content%2Fuploads%2F2025%2F02%2F15-combo-min-300x225.png&w=3840&q=75",
            "efficiency": ""
          },
          {
            "name": "XL15c Gas/Electric Packaged System",
            "model_image": "https://www.trane.com/_next/image/?url=https%3A%2F%2Flive-trane-headless-cms.pantheonsite.io%2Fwp-content%2Fuploads%2F2022%2F03%2FXL15c-gas-electric-packaged-systems-300x230.png&w=3840&q=75",
            "efficiency": ""
          },
          {
            "name": "XR13.4c Gas/Electric Packaged System",
            "model_image": "https://www.trane.com/_next/image/?url=https%3A%2F%2Flive-trane-headless-cms.pantheonsite.io%2Fwp-content%2Fuploads%2F2022%2F03%2Fxr14c-packaged-gas-electric-unit-lg-259x300.png&w=3840&q=75",
            "efficiency": ""
          }
        ]
      },
      {
        "line": "Heat pump packaged",
        "product_line_image": "https://live-trane-headless-cms.pantheonsite.io/wp-content/uploads/2022/03/xl16c-packaged-heat-pump-lg.png",
        "models": [
          {
            "name": "15 Two-Stage Heat Pump Packaged",
            "model_image": "https://www.trane.com/_next/image/?url=https%3A%2F%2Flive-trane-headless-cms.pantheonsite.io%2Fwp-content%2Fuploads%2F2025%2F02%2FTRANE_ACHP-Packaged-Unit-_-Single-Phase-Only-min-300x240.png&w=3840&q=75",
            "efficiency": ""
          },
          {
            "name": "15 3-Phase Two-Stage Heat Pump Packaged",
            "model_image": "https://www.trane.com/_next/image/?url=https%3A%2F%2Flive-trane-headless-cms.pantheonsite.io%2Fwp-content%2Fuploads%2F2025%2F02%2FHeat-Pump-Packaged-Unit-Old-version-min-300x226.png&w=3840&q=75",
            "efficiency": ""
          },
          {
            "name": "14 Single-Stage Heat Pump Packaged",
            "model_image": "https://www.trane.com/_next/image/?url=https%3A%2F%2Flive-trane-headless-cms.pantheonsite.io%2Fwp-content%2Fuploads%2F2025%2F02%2FTRANE_ACHP-Packaged-Unit-_-Single-Phase-Only-300x240.png&w=3840&q=75",
            "efficiency": ""
          },
          {
            "name": "14 3-Phase Single-Stage Heat Pump Packaged",
            "model_image": "https://www.trane.com/_next/image/?url=https%3A%2F%2Flive-trane-headless-cms.pantheonsite.io%2Fwp-content%2Fuploads%2F2025%2F02%2FHeat-Pump-Packaged-Unit-Old-1-1-300x226.png&w=3840&q=75",
            "efficiency": ""
          },
          {
            "name": "XL15c Heat Pump Packaged System",
            "model_image": "https://www.trane.com/_next/image/?url=https%3A%2F%2Flive-trane-headless-cms.pantheonsite.io%2Fwp-content%2Fuploads%2F2022%2F03%2Fxl15c-packaged-heat-pump-lg-300x229.png&w=3840&q=75",
            "efficiency": ""
          },
          {
            "name": "XR13.4c All-in-One Heat Pump Packaged System",
            "model_image": "https://www.trane.com/_next/image/?url=https%3A%2F%2Flive-trane-headless-cms.pantheonsite.io%2Fwp-content%2Fuploads%2F2022%2F03%2Fxr14c-all-in-one-heat-pump-lg-259x300.png&w=3840&q=75",
            "efficiency": ""
          }
        ]
      },
      {
        "line": "Heat pumps",
        "product_line_image": "https://live-trane-headless-cms.pantheonsite.io/wp-content/uploads/2022/03/xl16i-lg.png",
        "models": [
          {
            "name": "20 TruComfort\u2122 Variable Speed Heat Pump with WeatherGuard\u2122",
            "model_image": "https://www.trane.com/_next/image/?url=https%3A%2F%2Flive-trane-headless-cms.pantheonsite.io%2Fwp-content%2Fuploads%2F2022%2F03%2Fheat-pump-xv20i-lg_GoodHousekeeping-259x300.png&w=3840&q=75",
            "efficiency": ""
          },
          {
            "name": "XV20i Variable Speed Heat Pump",
            "model_image": "https://www.trane.com/_next/image/?url=https%3A%2F%2Flive-trane-headless-cms.pantheonsite.io%2Fwp-content%2Fuploads%2F2022%2F03%2Fheat-pump-xv20i-lg_GoodHousekeeping-259x300.png&w=3840&q=75",
            "efficiency": ""
          },
          {
            "name": "18 TruComfort\u2122 Variable Speed Heat Pump",
            "model_image": "https://www.trane.com/_next/image/?url=https%3A%2F%2Flive-trane-headless-cms.pantheonsite.io%2Fwp-content%2Fuploads%2F2024%2F04%2FTR_14-18_SEER2_AC-HP_BTY_2024-251x300.png&w=3840&q=75",
            "efficiency": ""
          },
          {
            "name": "XV18 Variable Speed Heat Pump",
            "model_image": "https://www.trane.com/_next/image/?url=https%3A%2F%2Flive-trane-headless-cms.pantheonsite.io%2Fwp-content%2Fuploads%2F2022%2F03%2Fheat-pump-xv18-lg-250x300.png&w=3840&q=75",
            "efficiency": ""
          },
          {
            "name": "XV17 Variable Speed Heat Pump",
            "model_image": "https://www.trane.com/_next/image/?url=https%3A%2F%2Flive-trane-headless-cms.pantheonsite.io%2Fwp-content%2Fuploads%2F2023%2F05%2FXV17_AC_HP-1-261x300.png&w=3840&q=75",
            "efficiency": ""
          },
          {
            "name": "XV19 Variable Speed Low Profile Heat Pump",
            "model_image": "https://www.trane.com/_next/image/?url=https%3A%2F%2Flive-trane-headless-cms.pantheonsite.io%2Fwp-content%2Fuploads%2F2022%2F03%2Fheat-pump-xv19-lg-242x300.png&w=3840&q=75",
            "efficiency": ""
          },
          {
            "name": "17 Multi-Speed Heat Pump with WeatherGuard\u2122",
            "model_image": "https://www.trane.com/_next/image/?url=https%3A%2F%2Flive-trane-headless-cms.pantheonsite.io%2Fwp-content%2Fuploads%2F2024%2F04%2FTR_15-17_SEER2_WeatherGuard_top_AC-HP_2024-223x300.jpg&w=3840&q=75",
            "efficiency": ""
          },
          {
            "name": "XL17i Heat Pump",
            "model_image": "https://www.trane.com/_next/image/?url=https%3A%2F%2Flive-trane-headless-cms.pantheonsite.io%2Fwp-content%2Fuploads%2F2022%2F03%2Fxl17i-air-conditioner-1-216x300.png&w=3840&q=75",
            "efficiency": ""
          },
          {
            "name": "17 Multi-Speed Heat Pump",
            "model_image": "https://www.trane.com/_next/image/?url=https%3A%2F%2Flive-trane-headless-cms.pantheonsite.io%2Fwp-content%2Fuploads%2F2024%2F04%2FTR_14-18_SEER2_AC-HP_BTY_2024-251x300.png&w=3840&q=75",
            "efficiency": ""
          },
          {
            "name": "XR16 Heat Pump",
            "model_image": "https://www.trane.com/_next/image/?url=https%3A%2F%2Flive-trane-headless-cms.pantheonsite.io%2Fwp-content%2Fuploads%2F2022%2F03%2Fxr16-heat-pump-251x300.png&w=3840&q=75",
            "efficiency": ""
          },
          {
            "name": "15 Single-Stage Heat Pump with WeatherGuard\u2122 Top",
            "model_image": "https://www.trane.com/_next/image/?url=https%3A%2F%2Flive-trane-headless-cms.pantheonsite.io%2Fwp-content%2Fuploads%2F2024%2F04%2FTR_15-17_SEER2_WeatherGuard_top_AC-HP_2024-223x300.jpg&w=3840&q=75",
            "efficiency": ""
          },
          {
            "name": "XL15i Heat Pump",
            "model_image": "https://www.trane.com/_next/image/?url=https%3A%2F%2Flive-trane-headless-cms.pantheonsite.io%2Fwp-content%2Fuploads%2F2022%2F03%2Fheat-pump-xl16i-lg-259x300.png&w=3840&q=75",
            "efficiency": ""
          },
          {
            "name": "15 Single-Stage Heat Pump",
            "model_image": "https://www.trane.com/_next/image/?url=https%3A%2F%2Flive-trane-headless-cms.pantheonsite.io%2Fwp-content%2Fuploads%2F2024%2F04%2FTR_14-18_SEER2_AC-HP_BTY_2024-251x300.png&w=3840&q=75",
            "efficiency": "SEER2 of up to 16.5"
          },
          {
            "name": "XR15 Heat Pump",
            "model_image": "https://www.trane.com/_next/image/?url=https%3A%2F%2Flive-trane-headless-cms.pantheonsite.io%2Fwp-content%2Fuploads%2F2023%2F05%2FXR15-LP-251x300.png&w=3840&q=75",
            "efficiency": ""
          },
          {
            "name": "14 Single-Stage Heat Pump",
            "model_image": "https://www.trane.com/_next/image/?url=https%3A%2F%2Flive-trane-headless-cms.pantheonsite.io%2Fwp-content%2Fuploads%2F2024%2F04%2FTR_14-18_SEER2_AC-HP_BTY_2024-251x300.png&w=3840&q=75",
            "efficiency": ""
          },
          {
            "name": "XR14 Heat Pump",
            "model_image": "https://www.trane.com/_next/image/?url=https%3A%2F%2Flive-trane-headless-cms.pantheonsite.io%2Fwp-content%2Fuploads%2F2022%2F03%2Fheat-pump-xr14-lg-259x300.png&w=3840&q=75",
            "efficiency": ""
          },
          {
            "name": "16 Multi-Speed Low Profile Heat Pump",
            "model_image": "https://www.trane.com/_next/image/?url=https%3A%2F%2Flive-trane-headless-cms.pantheonsite.io%2Fwp-content%2Fuploads%2F2025%2F02%2F16-MS-LP-HP-300x197.png&w=3840&q=75",
            "efficiency": ""
          },
          {
            "name": "XR15 Low Profile Heat Pump",
            "model_image": "https://www.trane.com/_next/image/?url=https%3A%2F%2Flive-trane-headless-cms.pantheonsite.io%2Fwp-content%2Fuploads%2F2022%2F03%2FXR-15-HP-291x300.png&w=3840&q=75",
            "efficiency": ""
          },
          {
            "name": "WeatherGuard\u2122 Top Heat Pump Accessory",
            "model_image": "https://www.trane.com/_next/image/?url=https%3A%2F%2Flive-trane-headless-cms.pantheonsite.io%2Fwp-content%2Fuploads%2F2022%2F03%2Fheat-pump-cover-weatherguard-top-accessory-lg-259x300.png&w=3840&q=75",
            "efficiency": ""
          }
        ]
      },
      {
        "line": "Humidity control",
        "product_line_image": "https://live-trane-headless-cms.pantheonsite.io/wp-content/uploads/2022/03/steam-humidifier-lg.png",
        "models": [
          {
            "name": "Fan-powered Humidifier",
            "model_image": "https://www.trane.com/_next/image/?url=https%3A%2F%2Flive-trane-headless-cms.pantheonsite.io%2Fwp-content%2Fuploads%2F2022%2F08%2Fpower-humidifiers-lg-288x300.png&w=3840&q=75",
            "efficiency": ""
          },
          {
            "name": "Steam Humidifier",
            "model_image": "https://www.trane.com/_next/image/?url=https%3A%2F%2Flive-trane-headless-cms.pantheonsite.io%2Fwp-content%2Fuploads%2F2022%2F03%2Fsteam-humidifier-lg-259x300.png&w=3840&q=75",
            "efficiency": ""
          },
          {
            "name": "Bypass Humidifiers",
            "model_image": "https://www.trane.com/_next/image/?url=https%3A%2F%2Flive-trane-headless-cms.pantheonsite.io%2Fwp-content%2Fuploads%2F2022%2F08%2Fwhole-house-humidifier-bypass-filters-300x300.png&w=3840&q=75",
            "efficiency": ""
          },
          {
            "name": "Whole Home Dehumidifiers with Optional Ventilation",
            "model_image": "https://www.trane.com/_next/image/?url=https%3A%2F%2Flive-trane-headless-cms.pantheonsite.io%2Fwp-content%2Fuploads%2F2022%2F03%2FUltra120_TRANE-2-300x237.png&w=3840&q=75",
            "efficiency": ""
          }
        ]
      },
      {
        "line": "Multi-zone ductless",
        "product_line_image": "https://live-trane-headless-cms.pantheonsite.io/wp-content/uploads/2022/03/4mxd8-lg.png",
        "models": [
          {
            "name": "Multi-Zone Four Way Ceiling Cassette \u2013 CKS",
            "model_image": "https://www.trane.com/_next/image/?url=https%3A%2F%2Flive-trane-headless-cms.pantheonsite.io%2Fwp-content%2Fuploads%2F2022%2F03%2Fkonnect-series-ceiling-cassette-heat-pumps-lg-1-300x195.png&w=3840&q=75",
            "efficiency": ""
          },
          {
            "name": "EZ Fit Recessed Ceiling Cassette",
            "model_image": "https://www.trane.com/_next/image/?url=https%3A%2F%2Flive-trane-headless-cms.pantheonsite.io%2Fwp-content%2Fuploads%2F2022%2F03%2Fkonnect-series-one-way-ceiling-cassette-heat-pump-lg-300x149.png&w=3840&q=75",
            "efficiency": ""
          },
          {
            "name": "Floor Mounted FKS",
            "model_image": "https://www.trane.com/_next/image/?url=https%3A%2F%2Flive-trane-headless-cms.pantheonsite.io%2Fwp-content%2Fuploads%2F2022%2F03%2Fkonnect-series-floor-mounted-heat-pumps-lg-1-259x300.png&w=3840&q=75",
            "efficiency": ""
          },
          {
            "name": "Designer Wall Mount MSZ-EF",
            "model_image": "https://www.trane.com/_next/image/?url=https%3A%2F%2Flive-trane-headless-cms.pantheonsite.io%2Fwp-content%2Fuploads%2F2022%2F03%2Fmsz-ef-designer-heat-pumps-lg-300x180.png&w=3840&q=75",
            "efficiency": ""
          },
          {
            "name": "Deluxe Wall Mount PH",
            "model_image": "https://www.trane.com/_next/image/?url=https%3A%2F%2Flive-trane-headless-cms.pantheonsite.io%2Fwp-content%2Fuploads%2F2022%2F03%2Fductless-heat-pump-ph-series-high-efficiency-300x120.png&w=3840&q=75",
            "efficiency": ""
          },
          {
            "name": "Standard Wall Mount ST",
            "model_image": "https://www.trane.com/_next/image/?url=https%3A%2F%2Flive-trane-headless-cms.pantheonsite.io%2Fwp-content%2Fuploads%2F2022%2F03%2Fst-series-heat-pumps-lg-300x120.png&w=3840&q=75",
            "efficiency": ""
          },
          {
            "name": "Multi-Zone Heat Pump MX",
            "model_image": "https://www.trane.com/_next/image/?url=https%3A%2F%2Flive-trane-headless-cms.pantheonsite.io%2Fwp-content%2Fuploads%2F2022%2F03%2Fmx-ph-series-outdoor-units-lg-240x300.png&w=3840&q=75",
            "efficiency": ""
          },
          {
            "name": "Horizontal Ducted \u2013 TPEAD",
            "model_image": "https://www.trane.com/_next/image/?url=https%3A%2F%2Flive-trane-headless-cms.pantheonsite.io%2Fwp-content%2Fuploads%2F2022%2F03%2Fheat-pump-pead-horizontal-ducted-300x183.png&w=3840&q=75",
            "efficiency": ""
          },
          {
            "name": "Horizontal Ducted DKS",
            "model_image": "https://www.trane.com/_next/image/?url=https%3A%2F%2Flive-trane-headless-cms.pantheonsite.io%2Fwp-content%2Fuploads%2F2022%2F03%2Fmulti-split-heat-pump-konnect-series-horizontal-ducted-300x112.png&w=3840&q=75",
            "efficiency": ""
          },
          {
            "name": "Horizontal Ducted \u2013 4MXD23",
            "model_image": "https://www.trane.com/_next/image/?url=https%3A%2F%2Flive-trane-headless-cms.pantheonsite.io%2Fwp-content%2Fuploads%2F2022%2F03%2F4mxd8-lg-259x300.png&w=3840&q=75",
            "efficiency": ""
          }
        ]
      },
      {
        "line": "Single-zone ductless",
        "product_line_image": "https://live-trane-headless-cms.pantheonsite.io/wp-content/uploads/2022/03/4mxw23-lg.png",
        "models": [
          {
            "name": "Single-Zone Four Way Ceiling Cassette \u2013 CKS",
            "model_image": "https://www.trane.com/_next/image/?url=https%3A%2F%2Flive-trane-headless-cms.pantheonsite.io%2Fwp-content%2Fuploads%2F2022%2F03%2Fmulti-split-heat-pump-konnect-series-ceiling-cassette-300x195.png&w=3840&q=75",
            "efficiency": ""
          },
          {
            "name": "Floor Mounted \u2013 FKS",
            "model_image": "https://www.trane.com/_next/image/?url=https%3A%2F%2Flive-trane-headless-cms.pantheonsite.io%2Fwp-content%2Fuploads%2F2022%2F03%2Fmini-split-heat-pump-konnect-series-floor-mounted-259x300.png&w=3840&q=75",
            "efficiency": ""
          },
          {
            "name": "Single-Zone Heat Pump for Floor Mount",
            "model_image": "https://www.trane.com/_next/image/?url=https%3A%2F%2Flive-trane-headless-cms.pantheonsite.io%2Fwp-content%2Fuploads%2F2022%2F09%2Fkonnect-series-outdoor-mini-split-heat-pump-300x120.png&w=3840&q=75",
            "efficiency": ""
          },
          {
            "name": "Standard Wall Mount Cooling Only",
            "model_image": "https://www.trane.com/_next/image/?url=https%3A%2F%2Flive-trane-headless-cms.pantheonsite.io%2Fwp-content%2Fuploads%2F2022%2F03%2Fmini-split-air-conditioner-st-series-300x120.png&w=3840&q=75",
            "efficiency": ""
          },
          {
            "name": "Standard Wall Mount ST",
            "model_image": "https://www.trane.com/_next/image/?url=https%3A%2F%2Flive-trane-headless-cms.pantheonsite.io%2Fwp-content%2Fuploads%2F2022%2F03%2Fmini-split-air-conditioner-st-series-300x120.png&w=3840&q=75",
            "efficiency": ""
          },
          {
            "name": "Deluxe Wall Mount PH",
            "model_image": "https://www.trane.com/_next/image/?url=https%3A%2F%2Flive-trane-headless-cms.pantheonsite.io%2Fwp-content%2Fuploads%2F2022%2F03%2Fph-series-high-efficiency-heat-pumps-lg-300x120.png&w=3840&q=75",
            "efficiency": ""
          },
          {
            "name": "18 SEER Wall Mount \u2013 ML",
            "model_image": "https://www.trane.com/_next/image/?url=https%3A%2F%2Flive-trane-headless-cms.pantheonsite.io%2Fwp-content%2Fuploads%2F2022%2F03%2Fductless-heat-pump-ml-series-300x120.png&w=3840&q=75",
            "efficiency": ""
          },
          {
            "name": "Wall Mount \u2013 EL",
            "model_image": "https://www.trane.com/_next/image/?url=https%3A%2F%2Flive-trane-headless-cms.pantheonsite.io%2Fwp-content%2Fuploads%2F2022%2F03%2Fmini-split-wall-mount-el-300x120.png&w=3840&q=75",
            "efficiency": ""
          },
          {
            "name": "115V Wall Mount MT",
            "model_image": "https://www.trane.com/_next/image/?url=https%3A%2F%2Flive-trane-headless-cms.pantheonsite.io%2Fwp-content%2Fuploads%2F2022%2F03%2Fmini-split-115V-wall-mount-mt-300x120.png&w=3840&q=75",
            "efficiency": ""
          },
          {
            "name": "Single-Zone Cooling Only ST",
            "model_image": "https://www.trane.com/_next/image/?url=https%3A%2F%2Flive-trane-headless-cms.pantheonsite.io%2Fwp-content%2Fuploads%2F2022%2F03%2Fmini-split-heat-pump-st-series-outdoor-259x300.png&w=3840&q=75",
            "efficiency": ""
          },
          {
            "name": "Single-Zone Heat Pump ML",
            "model_image": "https://www.trane.com/_next/image/?url=https%3A%2F%2Flive-trane-headless-cms.pantheonsite.io%2Fwp-content%2Fuploads%2F2022%2F03%2Fmini-split-heat-pump-ml-series-outdoor-259x300.png&w=3840&q=75",
            "efficiency": ""
          },
          {
            "name": "Single-Zone Heat Pump PH",
            "model_image": "https://www.trane.com/_next/image/?url=https%3A%2F%2Flive-trane-headless-cms.pantheonsite.io%2Fwp-content%2Fuploads%2F2022%2F03%2Fph-series-outdoor-heat-pumps-lg-259x300.png&w=3840&q=75",
            "efficiency": ""
          },
          {
            "name": "Single-Zone Heat Pump ST",
            "model_image": "https://www.trane.com/_next/image/?url=https%3A%2F%2Flive-trane-headless-cms.pantheonsite.io%2Fwp-content%2Fuploads%2F2022%2F03%2Fmini-split-heat-pump-st-series-outdoor-259x300.png&w=3840&q=75",
            "efficiency": ""
          },
          {
            "name": "Single-Zone Heat Pump EL",
            "model_image": "https://www.trane.com/_next/image/?url=https%3A%2F%2Flive-trane-headless-cms.pantheonsite.io%2Fwp-content%2Fuploads%2F2022%2F03%2Fmini-split-heat-pump-el-series-outdoor-259x300.png&w=3840&q=75",
            "efficiency": ""
          },
          {
            "name": "115V Single-Zone MT",
            "model_image": "https://www.trane.com/_next/image/?url=https%3A%2F%2Flive-trane-headless-cms.pantheonsite.io%2Fwp-content%2Fuploads%2F2022%2F03%2Fmini-split-115V-single-zone-mt-outdoor-259x300.png&w=3840&q=75",
            "efficiency": ""
          },
          {
            "name": "Multi-Position Air Handler AMT",
            "model_image": "https://www.trane.com/_next/image/?url=https%3A%2F%2Flive-trane-headless-cms.pantheonsite.io%2Fwp-content%2Fuploads%2F2022%2F09%2Fkonnect-series-air-handler-ducted-259x300.png&w=3840&q=75",
            "efficiency": ""
          },
          {
            "name": "Horizontal Ducted \u2013 DKS",
            "model_image": "https://www.trane.com/_next/image/?url=https%3A%2F%2Flive-trane-headless-cms.pantheonsite.io%2Fwp-content%2Fuploads%2F2022%2F03%2Fkonnect-series-horizontal-ducted-heat-pumps-lg-1-300x112.png&w=3840&q=75",
            "efficiency": ""
          },
          {
            "name": "Horizontal Ducted \u2013 TPEAD",
            "model_image": "https://www.trane.com/_next/image/?url=https%3A%2F%2Flive-trane-headless-cms.pantheonsite.io%2Fwp-content%2Fuploads%2F2022%2F03%2Fpead-horizontal-ducted-heat-pumps-lg-1-300x183.png&w=3840&q=75",
            "efficiency": ""
          }
        ]
      },
      {
        "line": "Smart thermostats",
        "product_line_image": "https://live-trane-headless-cms.pantheonsite.io/wp-content/uploads/2022/03/smart-thermostats.png",
        "models": [
          {
            "name": "Trane\u00ae LINK UX360",
            "model_image": "https://www.trane.com/_next/image/?url=https%3A%2F%2Flive-trane-headless-cms.pantheonsite.io%2Fwp-content%2Fuploads%2F2022%2F11%2FTrane-UX360-Smart-Thermostat-lg-300x220.png&w=3840&q=75",
            "efficiency": ""
          },
          {
            "name": "ComfortLink\u00ae II XL850 Thermostat",
            "model_image": "https://www.trane.com/_next/image/?url=https%3A%2F%2Flive-trane-headless-cms.pantheonsite.io%2Fwp-content%2Fuploads%2F2022%2F03%2Fsmart-thermostat-comfortlink-xl850-259x300.png&w=3840&q=75",
            "efficiency": ""
          },
          {
            "name": "ComfortLink\u00ae II XL1050 Thermostat",
            "model_image": "https://www.trane.com/_next/image/?url=https%3A%2F%2Flive-trane-headless-cms.pantheonsite.io%2Fwp-content%2Fuploads%2F2022%2F03%2Fsmart-thermostat-comfortlink-xl1050-259x300.png&w=3840&q=75",
            "efficiency": ""
          },
          {
            "name": "XL824 Thermostat",
            "model_image": "https://www.trane.com/_next/image/?url=https%3A%2F%2Flive-trane-headless-cms.pantheonsite.io%2Fwp-content%2Fuploads%2F2022%2F03%2Fsmart-thermostat-xl824-259x300.png&w=3840&q=75",
            "efficiency": ""
          },
          {
            "name": "XR724 Thermostat",
            "model_image": "https://www.trane.com/_next/image/?url=https%3A%2F%2Flive-trane-headless-cms.pantheonsite.io%2Fwp-content%2Fuploads%2F2022%2F03%2Fsmart-thermostat-xr724-259x300.png&w=3840&q=75",
            "efficiency": ""
          }
        ]
      },
      {
        "line": "Traditional thermostats",
        "product_line_image": "https://live-trane-headless-cms.pantheonsite.io/wp-content/uploads/2022/03/traditional-thermostats.png",
        "models": [
          {
            "name": "XR202 Thermostat",
            "model_image": "https://www.trane.com/_next/image/?url=https%3A%2F%2Flive-trane-headless-cms.pantheonsite.io%2Fwp-content%2Fuploads%2F2022%2F04%2Fthermostat-xr202-lg-259x300.png&w=3840&q=75",
            "efficiency": ""
          },
          {
            "name": "XR203 Thermostat",
            "model_image": "https://www.trane.com/_next/image/?url=https%3A%2F%2Flive-trane-headless-cms.pantheonsite.io%2Fwp-content%2Fuploads%2F2022%2F03%2Fthermostat-xr203-lg-259x300.png&w=3840&q=75",
            "efficiency": ""
          },
          {
            "name": "XR302 Thermostat",
            "model_image": "https://www.trane.com/_next/image/?url=https%3A%2F%2Flive-trane-headless-cms.pantheonsite.io%2Fwp-content%2Fuploads%2F2022%2F03%2Fthermostat-xr302-lg-259x300.png&w=3840&q=75",
            "efficiency": ""
          },
          {
            "name": "XR303 Thermostat",
            "model_image": "https://www.trane.com/_next/image/?url=https%3A%2F%2Flive-trane-headless-cms.pantheonsite.io%2Fwp-content%2Fuploads%2F2022%2F03%2Fthermostat-xr303-lg-259x300.png&w=3840&q=75",
            "efficiency": ""
          },
          {
            "name": "XR102 Thermostat",
            "model_image": "https://www.trane.com/_next/image/?url=https%3A%2F%2Flive-trane-headless-cms.pantheonsite.io%2Fwp-content%2Fuploads%2F2022%2F03%2Fthermostat-xr102-lg-259x300.png&w=3840&q=75",
            "efficiency": ""
          },
          {
            "name": "XR103 Thermostat",
            "model_image": "https://www.trane.com/_next/image/?url=https%3A%2F%2Flive-trane-headless-cms.pantheonsite.io%2Fwp-content%2Fuploads%2F2022%2F03%2Fthermostat-xr103-lg-259x300.png&w=3840&q=75",
            "efficiency": ""
          }
        ]
      },
      {
        "line": "Ventilation",
        "product_line_image": "https://live-trane-headless-cms.pantheonsite.io/wp-content/uploads/2022/03/energy-recovery-ventilator-lg.png",
        "models": [
          {
            "name": "Premium Energy Recovery Ventilator",
            "model_image": "https://www.trane.com/_next/image/?url=https%3A%2F%2Flive-trane-headless-cms.pantheonsite.io%2Fwp-content%2Fuploads%2F2025%2F05%2Fpremium-energy-recovery-ventilator-300x300.jpg&w=3840&q=75",
            "efficiency": ""
          },
          {
            "name": "Energy Recovery Ventilator",
            "model_image": "https://www.trane.com/_next/image/?url=https%3A%2F%2Flive-trane-headless-cms.pantheonsite.io%2Fwp-content%2Fuploads%2F2022%2F03%2Fenergy-recovery-ventilator-lg-259x300.png&w=3840&q=75",
            "efficiency": ""
          },
          {
            "name": "Inline Ventilator",
            "model_image": "https://www.trane.com/_next/image/?url=https%3A%2F%2Flive-trane-headless-cms.pantheonsite.io%2Fwp-content%2Fuploads%2F2022%2F03%2Finline-ventilator-lg-259x300.png&w=3840&q=75",
            "efficiency": ""
          }
        ]
      },
      {
        "line": "Zoning",
        "product_line_image": "https://live-trane-headless-cms.pantheonsite.io/wp-content/uploads/2022/03/zoning-lg.png",
        "models": [
          {
            "name": "Trane Link Zoning",
            "model_image": "https://www.trane.com/_next/image/?url=https%3A%2F%2Flive-trane-headless-cms.pantheonsite.io%2Fwp-content%2Fuploads%2F2023%2F10%2FTRANE_Zoning-Graphic-268x300.png&w=3840&q=75",
            "efficiency": ""
          },
          {
            "name": "ComfortLink\u2122 II",
            "model_image": "https://www.trane.com/_next/image/?url=https%3A%2F%2Flive-trane-headless-cms.pantheonsite.io%2Fwp-content%2Fuploads%2F2022%2F04%2Fzoning-lg-259x300.png&w=3840&q=75",
            "efficiency": ""
          }
        ]
      }
    ]
  },
  {
    "brand": "Daikin",
    "logo": "/logos/Daikin.png",
    "productLines": [
      {
        "line": "Gas Furnaces",
        "product_line_image": "https://d1rpi6kt0akbt7.cloudfront.net/images/default-source/industry-solutions/daikin-delivers/gas-furnaces.png?sfvrsn=40ea2a8c_1",
        "models": [
          {
            "name": "DD97MC",
            "model_image": "https://daikincomfort.com/images/default-source/1-year-warranty/daikin-dm96hs-image1d45a4fb-955c-4248-81c7-4c70a74204e0.png",
            "efficiency": ""
          },
          {
            "name": "DM97MC",
            "model_image": "https://daikincomfort.com/images/default-source/1-year-warranty/daikin-dm97mc-image.png",
            "efficiency": ""
          },
          {
            "name": "DR97MC",
            "model_image": "https://daikincomfort.com/images/default-source/products/heating-and-cooling/whole-house/gas-furnance/daikin-dm97mc-image.png",
            "efficiency": ""
          },
          {
            "name": "DC97MC",
            "model_image": "https://daikincomfort.com/images/default-source/1-year-warranty/daikin-dc92ss-image100aa48b-eaaa-44b2-af0f-7c7fec8b7af9.png",
            "efficiency": ""
          },
          {
            "name": "DC96SN",
            "model_image": "https://daikincomfort.com/images/default-source/1-year-warranty/dc96hs-90percent_downflowd581b410-9685-46f6-b409-0550739bfef2.png",
            "efficiency": ""
          },
          {
            "name": "DC96TN",
            "model_image": "https://daikincomfort.com/images/default-source/1-year-warranty/daikin-dc92ss-image.png",
            "efficiency": ""
          },
          {
            "name": "DC96VC",
            "model_image": "https://daikincomfort.com/images/default-source/1-year-warranty/daikin-dc96vc-image.png",
            "efficiency": ""
          },
          {
            "name": "DD96SC-U",
            "model_image": "https://daikincomfort.com/images/default-source/1-year-warranty/dc96hs-90percent_downflow.png",
            "efficiency": ""
          },
          {
            "name": "DD96SN",
            "model_image": "https://daikincomfort.com/images/default-source/1-year-warranty/dc96hs-90percent_downflow.png",
            "efficiency": ""
          },
          {
            "name": "DD96TC",
            "model_image": "https://daikincomfort.com/images/default-source/products/heating-and-cooling/whole-house/gas-furnance/daikin-dm97mc-image.png",
            "efficiency": ""
          },
          {
            "name": "DD96TN R-32",
            "model_image": "https://daikincomfort.com/images/default-source/1-year-warranty/daikin-dc92ss-imagea330bd67-2358-4dc6-98a8-9e6a35098a0c.png",
            "efficiency": ""
          },
          {
            "name": "DM96SC-U",
            "model_image": "https://daikincomfort.com/images/default-source/1-year-warranty/daikin-dm96hs-imagef1da598c-aee9-4fab-bb6d-0bfe33ac7790.png",
            "efficiency": ""
          },
          {
            "name": "DM96SN",
            "model_image": "https://daikincomfort.com/images/default-source/1-year-warranty/daikin-dm96hs-image1d45a4fb-955c-4248-81c7-4c70a74204e0.png",
            "efficiency": ""
          },
          {
            "name": "DM96SN-U",
            "model_image": "https://daikincomfort.com/images/default-source/1-year-warranty/daikin-dm96hs-imageddfe5dac-7ee5-401c-98b7-b08a212883a7.png",
            "efficiency": ""
          },
          {
            "name": "DM96TN",
            "model_image": "https://daikincomfort.com/images/default-source/1-year-warranty/daikin-dm96vc-image56fd429c28106fdcb7baff010071c566.png",
            "efficiency": ""
          },
          {
            "name": "DM96VC",
            "model_image": "https://daikincomfort.com/images/default-source/1-year-warranty/daikin-dm96vc-image56fd429c28106fdcb7baff010071c5664535d64c-a719-4fbe-a43f-2451f0db57a9.png",
            "efficiency": ""
          },
          {
            "name": "DR96SC-ULN",
            "model_image": "https://daikincomfort.com/images/default-source/1-year-warranty/daikin-dm96vc-image56fd429c28106fdcb7baff010071c566.png",
            "efficiency": ""
          },
          {
            "name": "DR96SN",
            "model_image": "https://daikincomfort.com/images/default-source/1-year-warranty/daikin-dm96hs-image6ebf1816-21c6-4abf-808f-3ec694406590.png",
            "efficiency": ""
          },
          {
            "name": "DR96SN-U",
            "model_image": "https://daikincomfort.com/images/default-source/1-year-warranty/daikin-dm96hs-image8ed66e72-b98c-4264-9e42-cba0c86791cb.png",
            "efficiency": ""
          },
          {
            "name": "DR96TC",
            "model_image": "https://daikincomfort.com/images/default-source/1-year-warranty/daikin-dm96vc-image56fd429c28106fdcb7baff010071c566.png",
            "efficiency": ""
          },
          {
            "name": "DR96TN",
            "model_image": "https://daikincomfort.com/images/default-source/1-year-warranty/daikin-dm96hs-image6ebf1816-21c6-4abf-808f-3ec694406590.png",
            "efficiency": ""
          },
          {
            "name": "DM92SN",
            "model_image": "https://daikincomfort.com/images/default-source/1-year-warranty/daikin-dm96hs-imagee34b293d-597e-4095-b840-6acaaad24072.png",
            "efficiency": ""
          },
          {
            "name": "DR92SN",
            "model_image": "https://daikincomfort.com/images/default-source/1-year-warranty/daikin-dm96hs-image34d1d3b2-dc65-4798-973e-5fab5dada946.png",
            "efficiency": ""
          },
          {
            "name": "DC80VC",
            "model_image": "https://daikincomfort.com/images/default-source/1-year-warranty/dd80vc-rightquarter-case-downflow.png",
            "efficiency": ""
          },
          {
            "name": "DD80SN",
            "model_image": "https://daikincomfort.com/images/default-source/products/heating-and-cooling/whole-house/gas-furnance/dr9s80_1.png",
            "efficiency": ""
          },
          {
            "name": "DD80TC",
            "model_image": "https://daikincomfort.com/images/default-source/products/heating-and-cooling/whole-house/gas-furnance/dr9s80_1.png",
            "efficiency": ""
          },
          {
            "name": "DD80TN",
            "model_image": "https://daikincomfort.com/images/default-source/products/heating-and-cooling/whole-house/gas-furnance/dr9s80_1.png",
            "efficiency": ""
          },
          {
            "name": "DM80VC",
            "model_image": "https://daikincomfort.com/images/default-source/products/heating-and-cooling/whole-house/gas-furnance/dm80vc-rightquarter-case-upflow.png",
            "efficiency": ""
          },
          {
            "name": "DR80SC-U",
            "model_image": "https://daikincomfort.com/images/default-source/products/heating-and-cooling/whole-house/gas-furnance/dm80vc-rightquarter-case-upflow.png",
            "efficiency": ""
          },
          {
            "name": "DR80SN",
            "model_image": "https://daikincomfort.com/images/default-source/products/heating-and-cooling/whole-house/gas-furnance/dr9s80_1.png",
            "efficiency": ""
          },
          {
            "name": "DR80SN-U",
            "model_image": "https://daikincomfort.com/images/default-source/products/heating-and-cooling/whole-house/gas-furnance/dr9s80_1.png",
            "efficiency": ""
          },
          {
            "name": "DR80TC",
            "model_image": "https://daikincomfort.com/images/default-source/products/heating-and-cooling/whole-house/gas-furnance/dr9s80_1.png",
            "efficiency": ""
          },
          {
            "name": "DR80TN",
            "model_image": "https://daikincomfort.com/images/default-source/products/heating-and-cooling/whole-house/gas-furnance/dr9s80_1.png",
            "efficiency": ""
          }
        ]
      },
      {
        "line": "Whole Home Heat Pumps",
        "product_line_image": "https://d1rpi6kt0akbt7.cloudfront.net/images/default-source/tax-credits/home-heat-pump-split.png?sfvrsn=f82f3b0f_3",
        "models": [
          {
            "name": "DAIKIN FIT Aurora Heat Pump - DH9VS",
            "model_image": "https://daikincomfort.com/images/default-source/products/residential-systems/whole-home---heat-pump/dh9vs.png",
            "efficiency": "Up to 21 SEER2 Level"
          },
          {
            "name": "DAIKIN FIT Heat Pump - DH7VS",
            "model_image": "https://daikincomfort.com/images/default-source/products/residential-systems/whole-home---heat-pump/dz6vsa6010_rqtr_rgb_lr.png",
            "efficiency": "Up to 19 SEER2 Level"
          },
          {
            "name": "DAIKIN FIT Heat Pump - DH6VS",
            "model_image": "https://daikincomfort.com/images/default-source/products/residential-systems/whole-home---heat-pump/daikin-fit-unit-r32.png",
            "efficiency": "Up to 19 SEER2 Level"
          },
          {
            "name": "DAIKIN FIT Heat Pump - DZ6VS",
            "model_image": "https://daikincomfort.com/images/default-source/home-solutions/home-additions/daikin-fit-unit.png",
            "efficiency": "Up to 17.5 SEER2 Level"
          },
          {
            "name": "DAIKIN VRV LIFE",
            "model_image": "https://daikincomfort.com/images/default-source/products/residential-systems/whole-home---heat-pump/vrv-life-trans-sm.png",
            "efficiency": "Up to 18 SEER2 Level"
          },
          {
            "name": "SkyAir FTQ Ducted",
            "model_image": "https://daikincomfort.com/images/default-source/products/residential-systems/whole-home---heat-pump/skyair_2.png",
            "efficiency": ""
          },
          {
            "name": "DZ9VC",
            "model_image": "https://daikincomfort.com/images/default-source/1-year-warranty/dx5se.png",
            "efficiency": "Up to 21 SEER2 Level"
          },
          {
            "name": "DH7TC",
            "model_image": "https://daikincomfort.com/images/default-source/1-year-warranty/dz7tce9504dc0-6c7c-4ff8-9456-538304631ee8.png",
            "efficiency": "Up to 17.5 SEER2 Level"
          },
          {
            "name": "DZ7TC",
            "model_image": "https://daikincomfort.com/images/default-source/1-year-warranty/dz7tc.png",
            "efficiency": "Up to 17.2 SEER2 Level"
          },
          {
            "name": "DH5SE",
            "model_image": "https://daikincomfort.com/images/default-source/1-year-warranty/dz7tc148f9d6d-126c-428c-973d-e3c127619e74.png",
            "efficiency": "Up to 15.2 SEER2 Level"
          },
          {
            "name": "DZ5SE",
            "model_image": "https://daikincomfort.com/images/default-source/1-year-warranty/dx5see2df9a07-0d4b-4259-9d54-450fd5ff89d1.png",
            "efficiency": "Up to 15.2 SEER2 Level"
          },
          {
            "name": "DH4SE",
            "model_image": "https://daikincomfort.com/images/default-source/1-year-warranty/dx4se228ecd27-6127-4f2e-aa2c-4a40103b517c.png",
            "efficiency": "Up to 15.2 SEER2 Level"
          },
          {
            "name": "DH4SQ",
            "model_image": "https://daikincomfort.com/images/default-source/1-year-warranty/dx4sed77a9489-a2a7-4dd6-8c59-b2ba7d7dbaaa.png",
            "efficiency": "Up to 15.2 SEER2 Level"
          },
          {
            "name": "DZ4SE",
            "model_image": "https://daikincomfort.com/images/default-source/1-year-warranty/dx4seaac5e36b-55f8-44ec-a93c-bda598b80752.png",
            "efficiency": "Up to 14.3 SEER2 Level"
          },
          {
            "name": "DZ4SQ",
            "model_image": "https://daikincomfort.com/images/default-source/1-year-warranty/dx4se826d2393-a284-4709-a48c-40b3f9de09e9.png",
            "efficiency": "Up to 14.3 SEER2 Level"
          }
        ]
      }
    ]
  }
];

export default hvacData;