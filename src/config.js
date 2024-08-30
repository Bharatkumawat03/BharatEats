export const IMG_CDN_URL = "https://www.swiggy.com/mapi/homepage/getCards?lat=26.912185&lng=75.783304";
// export const IMG_CDN_URL2 = "https://www.swiggy.com/dapi/restaurants/list/v5?lat=26.912185&lng=75.783304&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING";

// export const IMG_CDN_URL2 = 
// "https://corsproxy.org/?" +
// encodeURIComponent(
//   "https://www.swiggy.com/dapi/restaurants/list/v5?lat=26.912185&lng=75.783304&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
// );

// export const IMG_CDN_URL2 = 
//   "https://cors-anywhere.herokuapp.com/" +
//   encodeURIComponent(
//     "https://www.swiggy.com/dapi/restaurants/list/v5?lat=26.912185&lng=75.783304&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
//   );

// export const IMG_CDN_URL2 = 
//   "https://cors-anywhere.herokuapp.com/https://www.swiggy.com/dapi/restaurants/list/v5?lat=26.912185&lng=75.783304&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING";

  export const IMG_CDN_URL2 = 'https://thingproxy.freeboard.io/fetch/https://www.swiggy.com/dapi/restaurants/list/v5?lat=26.912185&lng=75.783304&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING';




// export const swiggy_menu_api_URL =
// "https://foodfire.onrender.com/api/menu?page-type=REGULAR_MENU&complete-menu=true&lat=21.1702401&lng=72.83106070000001&&submitAction=ENTER&restaurantId=";

export const MENU_API =
  "https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=21.1702401&lng=72.83106070000001&page_type=DESKTOP_WEB_LISTING";
  
export const swiggy_menu_api_URL =
  "https://corsproxy.io/?https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=21.1702401&lng=72.83106070000001&&submitAction=ENTER&restaurantId=";


export const MENU_ITEM_TYPE_KEY =
  "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory";
export const RESTAURANT_TYPE_KEY =
  "type.googleapis.com/swiggy.presentation.food.v2.Restaurant";

// export const swiggy_api_URL =
//   "https://corsproxy.org/?" +
//   encodeURIComponent(
//     "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING"
//   );

// export const swiggy_api_URL =
//     "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING";

export const swiggy_api_URL ="https://cors-anywhere.herokuapp.com/https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING";

// Swiggy API to get Restaurant Menu data with corsproxy
// export const swiggy_menu_api_URL =
//   "https://corsproxy.org/?" +
//   encodeURIComponent(
//     "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9351929&lng=77.62448069999999&restaurantId="
//   );


export const RestaurentList = [
    
    {
      "info": {
        "id": "51240",
        "name": "Mahaveer Rabri Bhandar-Tonk Road",
        "cloudinaryImageId": "pm6y5bnbhltff9vfxg2g",
        "locality": "Gopalpura",
        "areaName": "Gopalpura",
        "costForTwo": "₹300 for two",
        "cuisines": [
          "Rajasthani",
          "North Indian",
          "Desserts",
          "Thalis",
          "Snacks",
          "Beverages"
        ],
        "avgRating": 3.8,
        "parentId": "130072",
        "avgRatingString": "3.8",
        "totalRatingsString": "10K+",
        "promoted": true,
        "adTrackingId": "cid=10607815~p=1~eid=0000018d-0423-c3a6-67aa-563a00e9015c~srvts=1705171469222~45995",
        "sla": {
          "deliveryTime": 31,
          "lastMileTravel": 6.2,
          "serviceability": "SERVICEABLE",
          "slaString": "30-35 mins",
          "lastMileTravelString": "6.2 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2024-01-14 02:00:00",
          "opened": true
        },
        "badges": {
          
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "textBased": {
              
            },
            "imageBased": {
              
            },
            "textExtendedBadges": {
              
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "60% OFF",
          "subHeader": "UPTO ₹100"
        },
        "loyaltyDiscoverPresentationInfo": {
          "logoCtx": {
            "logo": "Swiggy%20One%20Lite/One_lite_vertical_logo.png"
          },
          "freedelMessage": "FREE DELIVERY",
          "badgeType": "BADGE_TYPE_ONE_LITE"
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        }
      },
      "analytics": {
        
      },
      "cta": {
        "link": "swiggy://menu?restaurant_id=51240",
        "text": "RESTAURANT_MENU",
        "type": "DEEPLINK"
      }
    },
    {
      "info": {
        "id": "620980",
        "name": "Domino's Pizza",
        "cloudinaryImageId": "fdp3q8xkahfooggbqmbx",
        "locality": "Sawai Jai Singh Road",
        "areaName": "Sindhi Camp",
        "costForTwo": "₹400 for two",
        "cuisines": [
          "Pizzas",
          "Italian",
          "Pastas",
          "Desserts"
        ],
        "avgRating": 4.1,
        "parentId": "2456",
        "avgRatingString": "4.1",
        "totalRatingsString": "500+",
        "sla": {
          "deliveryTime": 30,
          "serviceability": "SERVICEABLE",
          "slaString": "30 mins",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2024-01-14 00:59:00",
          "opened": true
        },
        "badges": {
          
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "textExtendedBadges": {
              
            },
            "textBased": {
              
            },
            "imageBased": {
              
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "40% OFF",
          "subHeader": "UPTO ₹80"
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        }
      },
      "analytics": {
        
      },
      "cta": {
        "link": "swiggy://menu?restaurant_id=620980",
        "text": "RESTAURANT_MENU",
        "type": "DEEPLINK"
      }
    },
    {
      "info": {
        "id": "249749",
        "name": "McDonald's",
        "cloudinaryImageId": "6dc3ed2ca21d71acff7c2a51dfe4c720",
        "locality": "Civil Lines",
        "areaName": "Civil Lines",
        "costForTwo": "₹400 for two",
        "cuisines": [
          "American"
        ],
        "avgRating": 4.2,
        "parentId": "630",
        "avgRatingString": "4.2",
        "totalRatingsString": "10K+",
        "sla": {
          "deliveryTime": 28,
          "lastMileTravel": 2.6,
          "serviceability": "SERVICEABLE",
          "slaString": "25-30 mins",
          "lastMileTravelString": "2.6 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2024-01-14 00:50:00",
          "opened": true
        },
        "badges": {
          
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "textBased": {
              
            },
            "imageBased": {
              
            },
            "textExtendedBadges": {
              
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "50% OFF",
          "subHeader": "UPTO ₹80"
        },
        "loyaltyDiscoverPresentationInfo": {
          "logoCtx": {
            "logo": "Swiggy%20One%20Lite/One_lite_vertical_logo.png"
          },
          "freedelMessage": "FREE DELIVERY",
          "badgeType": "BADGE_TYPE_ONE_LITE"
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        }
      },
      "analytics": {
        
      },
      "cta": {
        "link": "swiggy://menu?restaurant_id=249749",
        "text": "RESTAURANT_MENU",
        "type": "DEEPLINK"
      }
    },
    {
      "info": {
        "id": "706724",
        "name": "La Pino'z Pizza",
        "cloudinaryImageId": "5fe4444a065b60c4fe39ef975222c12b",
        "locality": "C Scheme",
        "areaName": "Ahinsa Circle",
        "costForTwo": "₹400 for two",
        "cuisines": [
          "Pizzas",
          "Pastas",
          "Beverages",
          "Fast Food",
          "Italian",
          "Desserts"
        ],
        "avgRating": 3.6,
        "parentId": "4961",
        "avgRatingString": "3.6",
        "totalRatingsString": "500+",
        "sla": {
          "deliveryTime": 28,
          "lastMileTravel": 2.9,
          "serviceability": "SERVICEABLE",
          "slaString": "25-30 mins",
          "lastMileTravelString": "2.9 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2024-01-14 06:00:00",
          "opened": true
        },
        "badges": {
          
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "textBased": {
              
            },
            "imageBased": {
              
            },
            "textExtendedBadges": {
              
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "40% OFF",
          "subHeader": "UPTO ₹80"
        },
        "loyaltyDiscoverPresentationInfo": {
          "logoCtx": {
            "logo": "Swiggy%20One%20Lite/One_lite_vertical_logo.png"
          },
          "freedelMessage": "FREE DELIVERY",
          "badgeType": "BADGE_TYPE_ONE_LITE"
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        }
      },
      "analytics": {
        
      },
      "cta": {
        "link": "swiggy://menu?restaurant_id=706724",
        "text": "RESTAURANT_MENU",
        "type": "DEEPLINK"
      }
    },
    {
      "info": {
        "id": "789477",
        "name": "Mahotsav",
        "cloudinaryImageId": "2008d7215a133753898fd45fce3ee08b",
        "locality": "22 godown",
        "areaName": "22 godown jaipur ",
        "costForTwo": "₹300 for two",
        "cuisines": [
          "Indian",
          "Chaat",
          "Fast Food",
          "Snacks"
        ],
        "avgRating": 3.1,
        "parentId": "468185",
        "avgRatingString": "3.1",
        "totalRatingsString": "20+",
        "promoted": true,
        "adTrackingId": "cid=10629907~p=2~eid=0000018d-0423-c3a6-67aa-563b00e90209~srvts=1705171469222~45995",
        "sla": {
          "deliveryTime": 21,
          "lastMileTravel": 2.1,
          "serviceability": "SERVICEABLE",
          "slaString": "20-25 mins",
          "lastMileTravelString": "2.1 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2024-01-14 02:45:00",
          "opened": true
        },
        "badges": {
          
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "textBased": {
              
            },
            "imageBased": {
              
            },
            "textExtendedBadges": {
              
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "60% OFF",
          "subHeader": "UPTO ₹100"
        },
        "loyaltyDiscoverPresentationInfo": {
          "logoCtx": {
            "logo": "Swiggy%20One%20Lite/One_lite_vertical_logo.png"
          },
          "freedelMessage": "FREE DELIVERY",
          "badgeType": "BADGE_TYPE_ONE_LITE"
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "isNewlyOnboarded": true,
        "restaurantOfferPresentationInfo": {
          
        }
      },
      "analytics": {
        
      },
      "cta": {
        "link": "swiggy://menu?restaurant_id=789477",
        "text": "RESTAURANT_MENU",
        "type": "DEEPLINK"
      }
    },
    {
      "info": {
        "id": "45216",
        "name": "Subway",
        "cloudinaryImageId": "1ace5fa65eff3e1223feb696c956b38b",
        "locality": "Subhash Marg",
        "areaName": "C Scheme",
        "costForTwo": "₹200 for two",
        "cuisines": [
          "Fast Food",
          "Healthy Food",
          "Salads",
          "Desserts",
          "Beverages",
          "Snacks",
          "Continental",
          "Italian",
          "Italian-American",
          "American"
        ],
        "avgRating": 3.8,
        "parentId": "2",
        "avgRatingString": "3.8",
        "totalRatingsString": "10K+",
        "sla": {
          "deliveryTime": 31,
          "lastMileTravel": 2.8,
          "serviceability": "SERVICEABLE",
          "slaString": "30-35 mins",
          "lastMileTravelString": "2.8 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2024-01-14 03:30:00",
          "opened": true
        },
        "badges": {
          
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "textBased": {
              
            },
            "imageBased": {
              
            },
            "textExtendedBadges": {
              
            }
          }
        },
        "loyaltyDiscoverPresentationInfo": {
          "logoCtx": {
            "logo": "Swiggy%20One%20Lite/One_lite_vertical_logo.png"
          },
          "freedelMessage": "FREE DELIVERY",
          "badgeType": "BADGE_TYPE_ONE_LITE"
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        }
      },
      "analytics": {
        
      },
      "cta": {
        "link": "swiggy://menu?restaurant_id=45216",
        "text": "RESTAURANT_MENU",
        "type": "DEEPLINK"
      }
    },
    {
      "info": {
        "id": "763838",
        "name": "Frozen Bottle - Milkshakes, Desserts And Ice Cream",
        "cloudinaryImageId": "1e9f1e0407cb8bd63d5fdac484408706",
        "locality": "LAL KOTHI",
        "areaName": "SAHAKAR MARG",
        "costForTwo": "₹250 for two",
        "cuisines": [
          "Beverages",
          "Desserts",
          "Ice Cream",
          "Waffle",
          "Bakery",
          "Healthy Food"
        ],
        "parentId": "5655",
        "avgRatingString": "NEW",
        "sla": {
          "deliveryTime": 31,
          "lastMileTravel": 3.6,
          "serviceability": "SERVICEABLE",
          "slaString": "30-35 mins",
          "lastMileTravelString": "3.6 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2024-01-14 01:00:00",
          "opened": true
        },
        "badges": {
          
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "textBased": {
              
            },
            "imageBased": {
              
            },
            "textExtendedBadges": {
              
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "60% OFF",
          "subHeader": "UPTO ₹100"
        },
        "loyaltyDiscoverPresentationInfo": {
          "logoCtx": {
            "logo": "Swiggy%20One%20Lite/One_lite_vertical_logo.png"
          },
          "freedelMessage": "FREE DELIVERY",
          "badgeType": "BADGE_TYPE_ONE_LITE"
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "isNewlyOnboarded": true,
        "restaurantOfferPresentationInfo": {
          
        }
      },
      "analytics": {
        
      },
      "cta": {
        "link": "swiggy://menu?restaurant_id=763838",
        "text": "RESTAURANT_MENU",
        "type": "DEEPLINK"
      }
    },
    {
      "info": {
        "id": "702108",
        "name": "CakeZone by Nora Fatehi",
        "cloudinaryImageId": "e386a679bad57c2527925e5a22cd283a",
        "locality": "Lal Kothi",
        "areaName": "Sahakar Marg",
        "costForTwo": "₹200 for two",
        "cuisines": [
          "Bakery",
          "Desserts",
          "Beverages",
          "Ice Cream",
          "Sweets"
        ],
        "avgRating": 4.2,
        "parentId": "7003",
        "avgRatingString": "4.2",
        "totalRatingsString": "100+",
        "sla": {
          "deliveryTime": 25,
          "lastMileTravel": 3.6,
          "serviceability": "SERVICEABLE",
          "slaString": "25-30 mins",
          "lastMileTravelString": "3.6 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2024-01-14 02:00:00",
          "opened": true
        },
        "badges": {
          "textExtendedBadges": [
            {
              "iconId": "guiltfree/GF_Logo_android_3x",
              "shortDescription": "options available",
              "fontColor": "#7E808C"
            }
          ]
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "textExtendedBadges": {
              "badgeObject": [
                {
                  "attributes": {
                    "iconId": "guiltfree/GF_Logo_android_3x",
                    "description": "",
                    "shortDescription": "options available",
                    "fontColor": "#7E808C"
                  }
                }
              ]
            },
            "textBased": {
              
            },
            "imageBased": {
              
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "60% OFF",
          "subHeader": "UPTO ₹120"
        },
        "loyaltyDiscoverPresentationInfo": {
          "logoCtx": {
            "logo": "Swiggy%20One%20Lite/One_lite_vertical_logo.png"
          },
          "freedelMessage": "FREE DELIVERY",
          "badgeType": "BADGE_TYPE_ONE_LITE"
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        }
      },
      "analytics": {
        
      },
      "cta": {
        "link": "swiggy://menu?restaurant_id=702108",
        "text": "RESTAURANT_MENU",
        "type": "DEEPLINK"
      }
    },
    {
      "info": {
        "id": "470871",
        "name": "Cake Paradise",
        "cloudinaryImageId": "r19axz6y2nbtgq9wzid6",
        "locality": "Square Main Nandpuri",
        "areaName": "Bais Godam",
        "costForTwo": "₹150 for two",
        "cuisines": [
          "Bakery"
        ],
        "avgRating": 3.7,
        "veg": true,
        "parentId": "11823",
        "avgRatingString": "3.7",
        "totalRatingsString": "100+",
        "promoted": true,
        "adTrackingId": "cid=10603191~p=3~eid=0000018d-0423-c3a6-67aa-563c00e9037b~srvts=1705171469222~45995",
        "sla": {
          "deliveryTime": 18,
          "lastMileTravel": 2.1,
          "serviceability": "SERVICEABLE",
          "slaString": "15-20 mins",
          "lastMileTravelString": "2.1 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2024-01-14 03:00:00",
          "opened": true
        },
        "badges": {
          "imageBadges": [
            {
              "imageId": "v1695133679/badges/Pure_Veg111.png",
              "description": "pureveg"
            }
          ]
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "textBased": {
              
            },
            "imageBased": {
              "badgeObject": [
                {
                  "attributes": {
                    "imageId": "v1695133679/badges/Pure_Veg111.png",
                    "description": "pureveg"
                  }
                }
              ]
            },
            "textExtendedBadges": {
              
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "₹125 OFF",
          "subHeader": "ABOVE ₹249",
          "discountTag": "FLAT DEAL"
        },
        "loyaltyDiscoverPresentationInfo": {
          "logoCtx": {
            "logo": "Swiggy%20One%20Lite/One_lite_vertical_logo.png"
          },
          "freedelMessage": "FREE DELIVERY",
          "badgeType": "BADGE_TYPE_ONE_LITE"
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        }
      },
      "analytics": {
        
      },
      "cta": {
        "link": "swiggy://menu?restaurant_id=470871",
        "text": "RESTAURANT_MENU",
        "type": "DEEPLINK"
      }
    }
]