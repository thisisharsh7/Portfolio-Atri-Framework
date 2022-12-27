import create from "zustand";

// unsafe merge state
// and mew properties will added or existing properties will be changed
// but the type of value of the property must not change
function mergeState(baseState, newState) {
  if (
    typeof newState === "object" &&
    !Array.isArray(newState) &&
    newState !== null
  ) {
    const keys = Object.keys(newState);
    keys.forEach((key) => {
      // create a new key in base if not exists
      if (!(key in baseState)) {
        baseState[key] = {};
      }
      if (typeof newState[key] === "object" && !Array.isArray(newState[key]))
        mergeState(baseState[key], newState[key]);
      else baseState[key] = newState[key];
    });
  }
}

const useStore = create((set) => {
  return {
    setPage: (pageName, newState) =>
      set((state) => {
        const pageState = JSON.parse(JSON.stringify(state[pageName]));
        mergeState(pageState, newState);
        return { [pageName]: pageState };
      }),
  };
});

export function updateStoreStateFromController(pageName, newState) {
  useStore.getState().setPage(pageName, newState);
}

const desktopModeProps = {
  ...{
  "Home": {
    "footer": {
      "callbacks": {}
    },
    "Flex7": {
      "callbacks": {}
    },
    "Flex9": {
      "callbacks": {}
    },
    "Flex10": {
      "callbacks": {}
    },
    "Flex11": {
      "callbacks": {}
    },
    "Flex13": {
      "callbacks": {
        "onClick": [
          {
            "navigate": {
              "type": "external",
              "url": "mailto:hi@folio.com?subject=Email",
              "target": "_blank"
            }
          }
        ]
      }
    },
    "Flex12": {
      "callbacks": {}
    },
    "Flex14": {
      "callbacks": {}
    },
    "Flex15": {
      "callbacks": {}
    },
    "Flex16": {
      "callbacks": {}
    },
    "Flex17": {
      "callbacks": {}
    },
    "main": {
      "callbacks": {}
    },
    "Flex5": {
      "callbacks": {}
    },
    "Flex148": {
      "callbacks": {}
    },
    "Flex149": {
      "callbacks": {}
    },
    "Flex150": {
      "callbacks": {}
    },
    "Flex199": {
      "callbacks": {}
    },
    "Flex204": {
      "callbacks": {}
    },
    "Flex316": {
      "callbacks": {}
    },
    "Flex315": {
      "callbacks": {}
    },
    "Flex321": {
      "callbacks": {}
    },
    "Flex320": {
      "callbacks": {}
    },
    "Flex1": {
      "callbacks": {}
    },
    "Flex2": {
      "callbacks": {}
    },
    "Flex132": {
      "callbacks": {}
    },
    "Flex133": {
      "callbacks": {}
    },
    "Flex135": {
      "callbacks": {}
    },
    "Flex136": {
      "callbacks": {
        "onClick": [
          {
            "navigate": {
              "type": "external",
              "url": "https://webflow.com/",
              "target": "_blank"
            }
          }
        ]
      }
    },
    "Flex827": {
      "callbacks": {
        "onClick": [
          {
            "navigate": {
              "type": "internal",
              "url": "/BookCall"
            }
          }
        ]
      }
    },
    "Flex3": {
      "callbacks": {}
    },
    "Flex4": {
      "callbacks": {}
    },
    "Flex145": {
      "callbacks": {}
    },
    "Flex178": {
      "callbacks": {}
    },
    "Flex177": {
      "callbacks": {}
    },
    "Flex176": {
      "callbacks": {}
    },
    "Flex226": {
      "callbacks": {}
    },
    "Flex1562": {
      "callbacks": {}
    },
    "Flex866": {
      "callbacks": {
        "onClick": [
          {
            "navigate": {
              "type": "internal",
              "url": "/Projects"
            }
          }
        ]
      }
    },
    "Flex335": {
      "callbacks": {}
    },
    "Flex343": {
      "callbacks": {}
    },
    "Flex175": {
      "callbacks": {}
    },
    "Flex328": {
      "callbacks": {}
    },
    "Flex327": {
      "callbacks": {}
    },
    "Flex326": {
      "callbacks": {}
    },
    "Flex1546": {
      "callbacks": {}
    },
    "Flex1545": {
      "callbacks": {}
    },
    "Flex1544": {
      "callbacks": {}
    },
    "Flex1549": {
      "callbacks": {}
    },
    "Flex1548": {
      "callbacks": {}
    },
    "Flex1547": {
      "callbacks": {}
    },
    "Flex1558": {
      "callbacks": {}
    },
    "Flex1557": {
      "callbacks": {}
    },
    "Flex1556": {
      "callbacks": {}
    },
    "Flex1561": {
      "callbacks": {}
    },
    "Flex1560": {
      "callbacks": {}
    },
    "Flex1559": {
      "callbacks": {}
    },
    "Flex1531": {
      "callbacks": {}
    },
    "Flex342": {
      "callbacks": {}
    },
    "Flex340": {
      "callbacks": {}
    },
    "Flex341": {
      "callbacks": {}
    },
    "Flex182": {
      "callbacks": {}
    },
    "Flex181": {
      "callbacks": {}
    },
    "Flex179": {
      "callbacks": {}
    },
    "Flex238": {
      "callbacks": {}
    },
    "Flex239": {
      "callbacks": {}
    },
    "Flex345": {
      "callbacks": {
        "onClick": [
          {
            "navigate": {
              "type": "internal",
              "url": "/Blog/design-tips-for-designers"
            }
          }
        ]
      }
    },
    "Flex395": {
      "callbacks": {}
    },
    "Flex393": {
      "callbacks": {
        "onClick": [
          {
            "navigate": {
              "type": "internal",
              "url": "/Blog/how-to-build-rapport"
            }
          }
        ]
      }
    },
    "Flex394": {
      "callbacks": {}
    },
    "Flex398": {
      "callbacks": {}
    },
    "Flex396": {
      "callbacks": {
        "onClick": [
          {
            "navigate": {
              "type": "internal",
              "url": "/Blog/free-website-tools"
            }
          }
        ]
      }
    },
    "Flex397": {
      "callbacks": {}
    },
    "Flex401": {
      "callbacks": {}
    },
    "Flex399": {
      "callbacks": {
        "onClick": [
          {
            "navigate": {
              "type": "internal",
              "url": "/Blog/logo-design-trends-to-avoid"
            }
          }
        ]
      }
    },
    "Flex400": {
      "callbacks": {}
    },
    "Flex404": {
      "callbacks": {}
    },
    "Flex402": {
      "callbacks": {
        "onClick": [
          {
            "navigate": {
              "type": "internal",
              "url": "/Blog/best-UI-design-tools"
            }
          }
        ]
      }
    },
    "Flex403": {
      "callbacks": {}
    },
    "Flex180": {
      "callbacks": {}
    },
    "Flex237": {
      "callbacks": {
        "onClick": [
          {
            "navigate": {
              "type": "internal",
              "url": "/Blog"
            }
          }
        ]
      }
    },
    "Flex186": {
      "callbacks": {}
    },
    "Flex185": {
      "callbacks": {}
    },
    "Flex183": {
      "callbacks": {}
    },
    "Flex657": {
      "callbacks": {}
    },
    "Flex266": {
      "callbacks": {}
    },
    "Flex184": {
      "callbacks": {}
    },
    "Flex253": {
      "callbacks": {}
    },
    "Flex190": {
      "callbacks": {}
    },
    "Flex189": {
      "callbacks": {}
    },
    "Flex297": {
      "callbacks": {}
    },
    "Flex295": {
      "callbacks": {}
    },
    "Flex705": {
      "callbacks": {}
    },
    "Flex703": {
      "callbacks": {}
    },
    "Flex704": {
      "callbacks": {}
    },
    "Flex291": {
      "callbacks": {}
    },
    "Flex381": {
      "callbacks": {}
    },
    "Flex701": {
      "callbacks": {}
    },
    "Flex699": {
      "callbacks": {}
    },
    "Flex700": {
      "callbacks": {}
    },
    "Flex713": {
      "callbacks": {}
    },
    "Flex711": {
      "callbacks": {}
    },
    "Flex709": {
      "callbacks": {}
    },
    "Flex706": {
      "callbacks": {}
    },
    "Flex707": {
      "callbacks": {}
    },
    "Flex710": {
      "callbacks": {}
    },
    "Flex708": {
      "callbacks": {}
    },
    "Flex712": {
      "callbacks": {}
    },
    "Flex721": {
      "callbacks": {}
    },
    "Flex719": {
      "callbacks": {}
    },
    "Flex717": {
      "callbacks": {}
    },
    "Flex714": {
      "callbacks": {}
    },
    "Flex715": {
      "callbacks": {}
    },
    "Flex718": {
      "callbacks": {}
    },
    "Flex716": {
      "callbacks": {}
    },
    "Flex720": {
      "callbacks": {}
    },
    "Flex296": {
      "callbacks": {}
    },
    "Flex380": {
      "callbacks": {}
    },
    "Flex378": {
      "callbacks": {}
    },
    "Flex379": {
      "callbacks": {}
    },
    "Flex377": {
      "callbacks": {}
    },
    "Flex673": {
      "callbacks": {}
    },
    "Flex373": {
      "callbacks": {}
    },
    "Flex374": {
      "callbacks": {}
    },
    "Flex368": {
      "callbacks": {}
    },
    "Flex671": {
      "callbacks": {}
    },
    "Flex674": {
      "callbacks": {}
    },
    "Flex684": {
      "callbacks": {}
    },
    "Flex682": {
      "callbacks": {}
    },
    "Flex683": {
      "callbacks": {}
    },
    "Flex680": {
      "callbacks": {}
    },
    "Flex678": {
      "callbacks": {}
    },
    "Flex679": {
      "callbacks": {}
    },
    "Flex681": {
      "callbacks": {}
    },
    "Flex691": {
      "callbacks": {}
    },
    "Flex689": {
      "callbacks": {}
    },
    "Flex690": {
      "callbacks": {}
    },
    "Flex687": {
      "callbacks": {}
    },
    "Flex685": {
      "callbacks": {}
    },
    "Flex686": {
      "callbacks": {}
    },
    "Flex688": {
      "callbacks": {}
    },
    "Flex194": {
      "callbacks": {}
    },
    "Flex193": {
      "callbacks": {}
    },
    "Flex191": {
      "callbacks": {}
    },
    "Flex298": {
      "callbacks": {}
    },
    "Flex300": {
      "callbacks": {}
    },
    "Flex301": {
      "callbacks": {}
    },
    "Flex307": {
      "callbacks": {}
    },
    "Flex308": {
      "callbacks": {}
    },
    "Flex309": {
      "callbacks": {}
    },
    "Flex392": {
      "callbacks": {}
    },
    "Flex299": {
      "callbacks": {}
    },
    "Flex405": {
      "callbacks": {}
    },
    "Flex192": {
      "callbacks": {}
    },
    "Flex198": {
      "callbacks": {}
    },
    "Flex197": {
      "callbacks": {}
    },
    "Flex195": {
      "callbacks": {}
    },
    "Flex305": {
      "callbacks": {}
    },
    "Flex306": {
      "callbacks": {}
    },
    "Flex196": {
      "callbacks": {}
    },
    "header": {
      "callbacks": {}
    },
    "Flex128": {
      "callbacks": {}
    },
    "Menu3": {
      "custom": {
        "open": false,
        "iconHeight": 24,
        "iconWidth": 24,
        "gap": "",
        "alignRight": true
      },
      "callbacks": {
        "onClick": []
      }
    },
    "Flex651": {
      "callbacks": {}
    },
    "Flex654": {
      "callbacks": {}
    },
    "Flex656": {
      "callbacks": {}
    },
    "Flex655": {
      "callbacks": {
        "onClick": [
          {
            "navigate": {
              "type": "internal",
              "url": "/BookCall"
            }
          }
        ]
      }
    },
    "Flex634": {
      "callbacks": {}
    },
    "Flex633": {
      "callbacks": {
        "onClick": [
          {
            "navigate": {
              "type": "internal",
              "url": "/BookCall"
            }
          }
        ]
      }
    },
    "TextBox3": {
      "custom": {
        "text": "Ready to make something kickass?"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox4": {
      "custom": {
        "text": "Let's get on a call."
      },
      "callbacks": {
        "onClick": [
          {
            "navigate": {
              "type": "external",
              "url": "tel:+889-776-899",
              "target": "_blank"
            }
          }
        ]
      }
    },
    "Image3": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/flogo.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "navigate": {
              "type": "internal",
              "url": "/"
            }
          }
        ]
      }
    },
    "TextBox5": {
      "custom": {
        "text": "4353 Delaware Avenue, San Francisco, USA"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image4": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/mailIco.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox6": {
      "custom": {
        "text": "hi@thefolio.com"
      },
      "callbacks": {
        "onClick": []
      }
    },
    "TextBox541": {
      "custom": {
        "text": "Services"
      },
      "callbacks": {
        "onClick": [
          {
            "navigate": {
              "type": "external",
              "url": "/#Services",
              "target": "_self"
            }
          }
        ]
      }
    },
    "TextBox542": {
      "custom": {
        "text": "Blog"
      },
      "callbacks": {
        "onClick": [
          {
            "navigate": {
              "type": "internal",
              "url": "/Blog"
            }
          }
        ]
      }
    },
    "TextBox543": {
      "custom": {
        "text": "Instagram"
      },
      "callbacks": {
        "onClick": [
          {
            "navigate": {
              "type": "external",
              "url": "https://www.instagram.com/",
              "target": "_blank"
            }
          }
        ]
      }
    },
    "TextBox544": {
      "custom": {
        "text": "Experience"
      },
      "callbacks": {
        "onClick": [
          {
            "navigate": {
              "type": "external",
              "url": "/#Experience",
              "target": "_blank"
            }
          }
        ]
      }
    },
    "TextBox545": {
      "custom": {
        "text": "Projects"
      },
      "callbacks": {
        "onClick": [
          {
            "navigate": {
              "type": "internal",
              "url": "/Projects"
            }
          }
        ]
      }
    },
    "TextBox546": {
      "custom": {
        "text": "Twitter"
      },
      "callbacks": {
        "onClick": [
          {
            "navigate": {
              "type": "external",
              "url": "https://twitter.com/home",
              "target": "_blank"
            }
          }
        ]
      }
    },
    "TextBox538": {
      "custom": {
        "text": "About"
      },
      "callbacks": {
        "onClick": [
          {
            "navigate": {
              "type": "external",
              "url": "/#About",
              "target": "_self"
            }
          }
        ]
      }
    },
    "TextBox539": {
      "custom": {
        "text": "Driblle"
      },
      "callbacks": {
        "onClick": [
          {
            "navigate": {
              "type": "external",
              "url": "https://dribbble.com/",
              "target": "_blank"
            }
          }
        ]
      }
    },
    "TextBox540": {
      "custom": {
        "text": "Contact"
      },
      "callbacks": {
        "onClick": [
          {
            "navigate": {
              "type": "internal",
              "url": "/BookCall"
            }
          }
        ]
      }
    },
    "TextBox7": {
      "custom": {
        "text": "© All rights reserved. "
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Link15": {
      "custom": {
        "text": "Conversionflow",
        "url": "/"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox8": {
      "custom": {
        "text": ". Powered by"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Link16": {
      "custom": {
        "text": "Weflow",
        "url": "/"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox9": {
      "custom": {
        "text": "/"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Link17": {
      "custom": {
        "text": "Changelog",
        "url": "/"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox10": {
      "custom": {
        "text": "/"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox11": {
      "custom": {
        "text": "/"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox13": {
      "custom": {
        "text": "/"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Link18": {
      "custom": {
        "text": "Image License Info",
        "url": "/"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Link19": {
      "custom": {
        "text": "Instructions",
        "url": "/"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Link20": {
      "custom": {
        "text": "Style Guide",
        "url": "/"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox86": {
      "custom": {
        "text": "SERVICES"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox87": {
      "custom": {
        "text": "Design that solves problems, one product at a time."
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox89": {
      "custom": {
        "text": "Faster, better products that your users love. Here's all the services I provide:"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox91": {
      "custom": {
        "text": "What I can do for you"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image46": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/service1.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "UnorderedList1": {
      "custom": {
        "type": "disc",
        "titleColor": "#000000",
        "descriptionColor": "#00000073",
        "items": [
          {
            "title": "Design Strategy"
          },
          {
            "title": "Web and Mobile App",
            "description": "",
            "icon": ""
          },
          {
            "title": "Front-end Development",
            "description": "",
            "icon": ""
          }
        ]
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image87": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/service2.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox225": {
      "custom": {
        "text": "Applications I'm fluent in"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox226": {
      "custom": {
        "text": "Every designer needs the right tools to do the perfect job. Thankfully, I'm multilingual."
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "UnorderedList2": {
      "custom": {
        "type": "disc",
        "titleColor": "#000000",
        "descriptionColor": "#00000073",
        "items": [
          {
            "title": "Sketch"
          },
          {
            "title": "Webflow",
            "description": "",
            "icon": ""
          },
          {
            "title": "Figma",
            "description": "",
            "icon": ""
          }
        ]
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image88": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/service3.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox230": {
      "custom": {
        "text": "What you can expect"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox231": {
      "custom": {
        "text": "I design products that are more than pretty. I make them shippable and usable."
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "UnorderedList3": {
      "custom": {
        "type": "disc",
        "titleColor": "#000000",
        "descriptionColor": "#00000073",
        "items": [
          {
            "title": "Clean and functional"
          },
          {
            "title": "Device and user friendly",
            "description": "",
            "icon": ""
          },
          {
            "title": "Efficient and maintainable",
            "description": "",
            "icon": ""
          }
        ]
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image37": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/jake.jpeg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox25": {
      "custom": {
        "text": "Hi! I’m Jake, a product designer based in Berlin. I create user-friendly interfaces for fast-growing startups."
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox82": {
      "custom": {
        "text": "I design products"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox83": {
      "custom": {
        "text": "that delight and inspire people."
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox84": {
      "custom": {
        "text": "Download a CV"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image38": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/blackArrow.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox694": {
      "custom": {
        "text": "Book a call"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox731": {
      "custom": {
        "text": "Book a call"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox85": {
      "custom": {
        "text": "Trusted by"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image42": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/trusti1.png"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image43": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/trusti2.png"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image44": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/trusti3.png"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image45": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/trusti4.png"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox119": {
      "custom": {
        "text": "PROJECTS"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox120": {
      "custom": {
        "text": "I bring results."
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox1759": {
      "custom": {
        "text": "My clients are proof."
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox732": {
      "custom": {
        "text": "View all projects"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox733": {
      "custom": {
        "text": "View all projects"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image92": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/project1.png"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox236": {
      "custom": {
        "text": "BRANDING"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox237": {
      "custom": {
        "text": "Soulful Rebrand"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox235": {
      "custom": {
        "text": "View Project"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image91": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/blackArrow.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image427": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/project2.png"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox1741": {
      "custom": {
        "text": "Datadash Product design"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox1742": {
      "custom": {
        "text": "PRODUCT DESIGN"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image426": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/blackArrow.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox1740": {
      "custom": {
        "text": "View Project"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image429": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/project5.png"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox1744": {
      "custom": {
        "text": "Joggr Website Design"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox1745": {
      "custom": {
        "text": "WEB DESIGN"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image428": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/blackArrow.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox1743": {
      "custom": {
        "text": "View Project"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image435": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/project4.png"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox1753": {
      "custom": {
        "text": "GorillaX Branding"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox1754": {
      "custom": {
        "text": "BRANDING"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image434": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/blackArrow.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox1752": {
      "custom": {
        "text": "View Project"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image437": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/project3.png"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox1756": {
      "custom": {
        "text": "Maize Website Design"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox1757": {
      "custom": {
        "text": "WEB DESIGN"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image436": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/blackArrow.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox1755": {
      "custom": {
        "text": "View Project"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox309": {
      "custom": {
        "text": "<"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox310": {
      "custom": {
        "text": ">"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox142": {
      "custom": {
        "text": "Design tips for designers, that cover everything you need"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox139": {
      "custom": {
        "text": "April 16, 2021 "
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox140": {
      "custom": {
        "text": "•"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox141": {
      "custom": {
        "text": "6 mins"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image98": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/warrow.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox245": {
      "custom": {
        "text": "Read the article"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox293": {
      "custom": {
        "text": "How to build rapport with your web design clients"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox289": {
      "custom": {
        "text": "Read the article"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image113": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/warrow.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox290": {
      "custom": {
        "text": "5 mins"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox291": {
      "custom": {
        "text": "•"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox292": {
      "custom": {
        "text": "April 16, 2021 "
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox298": {
      "custom": {
        "text": "Top 6 free website mockup tools 2021"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox294": {
      "custom": {
        "text": "Read the article"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image114": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/warrow.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox295": {
      "custom": {
        "text": "5 mins"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox296": {
      "custom": {
        "text": "•"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox297": {
      "custom": {
        "text": "April 16, 2021 "
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox303": {
      "custom": {
        "text": "Logo design trends to avoid in 2021"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox299": {
      "custom": {
        "text": "Read the article"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image115": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/warrow.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox300": {
      "custom": {
        "text": "7 mins"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox301": {
      "custom": {
        "text": "•"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox302": {
      "custom": {
        "text": "April 16, 2021 "
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox308": {
      "custom": {
        "text": "22 best UI design tools"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox304": {
      "custom": {
        "text": "Read the article"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image116": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/warrow.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox305": {
      "custom": {
        "text": "7 mins"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox306": {
      "custom": {
        "text": "•"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox307": {
      "custom": {
        "text": "April 16, 2021 "
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox136": {
      "custom": {
        "text": "Latest Blogs"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox137": {
      "custom": {
        "text": "BLOGS"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox138": {
      "custom": {
        "text": "View all"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image63": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/warrow.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image73": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/product1.png"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image74": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/product2.png"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image75": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/product4.png"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image76": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/product3.png"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox164": {
      "custom": {
        "text": "Over the past 12 years, I've worked with a diverse range of clients, from startups to Fortune 500 companies. I love crafting interfaces that delight users and help businesses grow."
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox165": {
      "custom": {
        "text": "PRODUCT DESIGNER"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox166": {
      "custom": {
        "text": "That's me!"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox529": {
      "custom": {
        "text": "• April2019-Current"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image108": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/work1.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox205": {
      "custom": {
        "text": "SpaceFleet"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox206": {
      "custom": {
        "text": "Senior Product Designer"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox526": {
      "custom": {
        "text": "• April2019-Current"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image206": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/arrow-rotate.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image207": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/arrow-rotate.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox530": {
      "custom": {
        "text": "• April2019-Current"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image208": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/work3.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox531": {
      "custom": {
        "text": "Kingdom"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox532": {
      "custom": {
        "text": "UI Designer"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox533": {
      "custom": {
        "text": "• April2019-Current"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image209": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/arrow-rotate.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox534": {
      "custom": {
        "text": "• April2019-Current"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image210": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/work2.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox535": {
      "custom": {
        "text": "MusicMash"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox536": {
      "custom": {
        "text": "Information Architect"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox537": {
      "custom": {
        "text": "• April2019-Current"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox207": {
      "custom": {
        "text": "Work Experience"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox208": {
      "custom": {
        "text": "💼"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox281": {
      "custom": {
        "text": "📚"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox282": {
      "custom": {
        "text": "Education"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox278": {
      "custom": {
        "text": "MSc (Human Computer Interaction)"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox279": {
      "custom": {
        "text": "Stanford University"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image107": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/arrow-rotate.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox280": {
      "custom": {
        "text": "• 2013-2015"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox512": {
      "custom": {
        "text": "• 2013-2015"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox517": {
      "custom": {
        "text": "• 2013-2014"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox514": {
      "custom": {
        "text": "• 2013-2014"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image203": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/arrow-rotate.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox515": {
      "custom": {
        "text": "MIT Summer School"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox516": {
      "custom": {
        "text": "UX Training Bootcamp"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox521": {
      "custom": {
        "text": "• 2009-2012"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox518": {
      "custom": {
        "text": "• 2009-2012"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image204": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/arrow-rotate.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox519": {
      "custom": {
        "text": "California State University"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox520": {
      "custom": {
        "text": "BSc in Software Engineering"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox212": {
      "custom": {
        "text": "Founder, Double Bunch"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox213": {
      "custom": {
        "text": "John Frankin"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox311": {
      "custom": {
        "text": "<"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox313": {
      "custom": {
        "text": ">"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox211": {
      "custom": {
        "text": "Jade helped us build a software so intuitive that it didn't need a walkthrough. He solved complex problems with brilliant design."
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image84": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/comma.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image83": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/testimonial1.jpeg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox209": {
      "custom": {
        "text": "TESTIMONIALS"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox210": {
      "custom": {
        "text": "Word on the street"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Accordion5": {
      "custom": {
        "title": [
          "How do you charge for projects ?",
          "What does your design process look like?",
          "What metrics do you use to measure success?",
          "What if I need help after the project is complete?"
        ],
        "description": [
          "I quote a price upfront--so that you know exactly what you're paying and for what, and there are no surprises later. The exact cost of your project depends on the scope and requirements!",
          "I take a problem-forward approach. Whether we're iterating on an existing product or building a new one from scratch, how to solve the user's problem in the simplest way possible is my first concern.  Send me an email to understand my process in depth!",
          "The best metrics are customer adoption, happiness, task success, and engagement. There are a number of frameworks such as the System Usability Scale that help us understand product performance and I'm happy to help with that.",
          "I always make sure to help out my clients one month after the project ends, for free. For any help post that, we can work out an ongoing arrangement!"
        ],
        "open": [
          false,
          false,
          false,
          false
        ]
      },
      "callbacks": {}
    },
    "Accordion3": {
      "custom": {
        "title": [
          "What type of projects do you take on?",
          "What is your hourly rate?",
          "What time-zone do you work in?",
          "What is the typical timeline for a project?"
        ],
        "description": [
          " I usually work on B2C software, that's my forte--where I shine best. But I also have about 15 B2B software products in my portfolio. I do end-to-end product design + branding.",
          "I only charge hourly for my ongoing projects that need work on the regular. One-time projects are charged upfront to keep it transparent and clean! My hourly rate is $100.",
          "I work Pacific Standard Time, but I'm always ready to help out in emergencies, no matter the hour.",
          "Depends on the scope of the project, really. Some projects take less than a week. Some take months. The best way to find out is to get on a quick call with me, and discuss it. No strings attached!"
        ],
        "open": [
          false,
          false,
          false,
          false
        ]
      },
      "callbacks": {}
    },
    "TextBox214": {
      "custom": {
        "text": "FAQ"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox216": {
      "custom": {
        "text": "Frequently asked questions"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image36": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/logo.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "navigate": {
              "type": "internal",
              "url": "/"
            }
          }
        ]
      }
    },
    "TextBox498": {
      "custom": {
        "text": "Services"
      },
      "callbacks": {
        "onClick": [
          {
            "navigate": {
              "type": "external",
              "url": "/#Services",
              "target": "_self"
            }
          }
        ]
      }
    },
    "TextBox499": {
      "custom": {
        "text": "Projects"
      },
      "callbacks": {
        "onClick": [
          {
            "navigate": {
              "type": "internal",
              "url": "/Projects"
            }
          }
        ]
      }
    },
    "TextBox500": {
      "custom": {
        "text": "Blog"
      },
      "callbacks": {
        "onClick": [
          {
            "navigate": {
              "type": "internal",
              "url": "/Blog"
            }
          }
        ]
      }
    },
    "TextBox501": {
      "custom": {
        "text": "About"
      },
      "callbacks": {
        "onClick": [
          {
            "navigate": {
              "type": "external",
              "url": "/#About",
              "target": "_self"
            }
          }
        ]
      }
    },
    "TextBox497": {
      "custom": {
        "text": "Book a call"
      },
      "callbacks": {
        "onClick": [
          {
            "navigate": {
              "type": "internal",
              "url": "/BookCall"
            }
          }
        ]
      }
    },
    "Image199": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/blackArrow.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox468": {
      "custom": {
        "text": "About"
      },
      "callbacks": {
        "onClick": [
          {
            "navigate": {
              "type": "external",
              "url": "/#About",
              "target": "_self"
            }
          }
        ]
      }
    },
    "TextBox469": {
      "custom": {
        "text": "Blog"
      },
      "callbacks": {
        "onClick": [
          {
            "navigate": {
              "type": "internal",
              "url": "/Blog"
            }
          }
        ]
      }
    },
    "TextBox470": {
      "custom": {
        "text": "Projects"
      },
      "callbacks": {
        "onClick": [
          {
            "navigate": {
              "type": "internal",
              "url": "/Projects"
            }
          }
        ]
      }
    },
    "TextBox471": {
      "custom": {
        "text": "Services"
      },
      "callbacks": {
        "onClick": [
          {
            "navigate": {
              "type": "external",
              "url": "/#Services",
              "target": "_self"
            }
          }
        ]
      }
    },
    "Image193": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/blackArrow.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox467": {
      "custom": {
        "text": "Book a call"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    }
  },
  "Projects": {
    "Flex958": {
      "callbacks": {}
    },
    "Flex957": {
      "callbacks": {}
    },
    "Flex954": {
      "callbacks": {}
    },
    "Flex955": {
      "callbacks": {}
    },
    "Flex952": {
      "callbacks": {}
    },
    "Flex948": {
      "callbacks": {}
    },
    "Flex949": {
      "callbacks": {}
    },
    "Flex950": {
      "callbacks": {}
    },
    "Flex953": {
      "callbacks": {}
    },
    "Flex951": {
      "callbacks": {
        "onClick": [
          {
            "navigate": {
              "type": "external",
              "url": "mailto:hi@folio.com?subject=Email",
              "target": "_blank"
            }
          }
        ]
      }
    },
    "Flex956": {
      "callbacks": {}
    },
    "Link269": {
      "custom": {
        "text": "Style Guide",
        "url": "/"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Link270": {
      "custom": {
        "text": "Instructions",
        "url": "/"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Link271": {
      "custom": {
        "text": "Image License Info",
        "url": "/"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox873": {
      "custom": {
        "text": "/"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox874": {
      "custom": {
        "text": "/"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox875": {
      "custom": {
        "text": "/"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Link272": {
      "custom": {
        "text": "Changelog",
        "url": "/"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox876": {
      "custom": {
        "text": "/"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Link273": {
      "custom": {
        "text": "Weflow",
        "url": "/"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox877": {
      "custom": {
        "text": ". Powered by"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Link274": {
      "custom": {
        "text": "Conversionflow",
        "url": "/"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox878": {
      "custom": {
        "text": "© All rights reserved. "
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox862": {
      "custom": {
        "text": "Contact"
      },
      "callbacks": {
        "onClick": [
          {
            "navigate": {
              "type": "internal",
              "url": "/BookCall"
            }
          }
        ]
      }
    },
    "TextBox863": {
      "custom": {
        "text": "Driblle"
      },
      "callbacks": {
        "onClick": [
          {
            "navigate": {
              "type": "external",
              "url": "https://dribbble.com/",
              "target": "_blank"
            }
          }
        ]
      }
    },
    "TextBox864": {
      "custom": {
        "text": "About"
      },
      "callbacks": {
        "onClick": [
          {
            "navigate": {
              "type": "external",
              "url": "/#About",
              "target": "_self"
            }
          }
        ]
      }
    },
    "TextBox865": {
      "custom": {
        "text": "Twitter"
      },
      "callbacks": {
        "onClick": [
          {
            "navigate": {
              "type": "external",
              "url": "https://twitter.com/home",
              "target": "_blank"
            }
          }
        ]
      }
    },
    "TextBox866": {
      "custom": {
        "text": "Projects"
      },
      "callbacks": {
        "onClick": [
          {
            "navigate": {
              "type": "internal",
              "url": "/Projects"
            }
          }
        ]
      }
    },
    "TextBox867": {
      "custom": {
        "text": "Experience"
      },
      "callbacks": {
        "onClick": [
          {
            "navigate": {
              "type": "external",
              "url": "/#Experience",
              "target": "_blank"
            }
          }
        ]
      }
    },
    "TextBox868": {
      "custom": {
        "text": "Instagram"
      },
      "callbacks": {
        "onClick": [
          {
            "navigate": {
              "type": "external",
              "url": "https://www.instagram.com/",
              "target": "_blank"
            }
          }
        ]
      }
    },
    "TextBox869": {
      "custom": {
        "text": "Blog"
      },
      "callbacks": {
        "onClick": [
          {
            "navigate": {
              "type": "internal",
              "url": "/Blog"
            }
          }
        ]
      }
    },
    "TextBox870": {
      "custom": {
        "text": "Services"
      },
      "callbacks": {
        "onClick": [
          {
            "navigate": {
              "type": "external",
              "url": "/#Services",
              "target": "_self"
            }
          }
        ]
      }
    },
    "TextBox872": {
      "custom": {
        "text": "4353 Delaware Avenue, San Francisco, USA"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image280": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/flogo.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "navigate": {
              "type": "internal",
              "url": "/"
            }
          }
        ]
      }
    },
    "TextBox871": {
      "custom": {
        "text": "hi@thefolio.com"
      },
      "callbacks": {
        "onClick": []
      }
    },
    "Image279": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/mailIco.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox879": {
      "custom": {
        "text": "Let's get on a call."
      },
      "callbacks": {
        "onClick": [
          {
            "navigate": {
              "type": "external",
              "url": "tel:+889-776-899",
              "target": "_blank"
            }
          }
        ]
      }
    },
    "TextBox880": {
      "custom": {
        "text": "Ready to make something kickass?"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    }
  },
  "Blog": {
    "Flex532": {
      "callbacks": {}
    },
    "Flex531": {
      "callbacks": {}
    },
    "Flex530": {
      "callbacks": {}
    },
    "Flex528": {
      "callbacks": {
        "onClick": [
          {
            "navigate": {
              "type": "internal",
              "url": "/Blog/design-tips-for-designers"
            }
          }
        ]
      }
    },
    "Flex523": {
      "callbacks": {}
    },
    "Flex516": {
      "callbacks": {}
    },
    "Flex517": {
      "callbacks": {}
    },
    "Flex546": {
      "callbacks": {}
    },
    "Flex551": {
      "callbacks": {
        "onClick": [
          {
            "navigate": {
              "type": "internal",
              "url": "/Blog/how-to-build-rapport"
            }
          }
        ]
      }
    },
    "Flex549": {
      "callbacks": {}
    },
    "Flex550": {
      "callbacks": {}
    },
    "Flex547": {
      "callbacks": {}
    },
    "Flex548": {
      "callbacks": {}
    },
    "Flex574": {
      "callbacks": {
        "onClick": [
          {
            "navigate": {
              "type": "internal",
              "url": "/Blog/free-website-tools"
            }
          }
        ]
      }
    },
    "Flex572": {
      "callbacks": {}
    },
    "Flex570": {
      "callbacks": {}
    },
    "Flex571": {
      "callbacks": {}
    },
    "Flex573": {
      "callbacks": {}
    },
    "Flex579": {
      "callbacks": {
        "onClick": [
          {
            "navigate": {
              "type": "internal",
              "url": "/Blog/logo-design-trends-to-avoid"
            }
          }
        ]
      }
    },
    "Flex577": {
      "callbacks": {}
    },
    "Flex575": {
      "callbacks": {}
    },
    "Flex576": {
      "callbacks": {}
    },
    "Flex578": {
      "callbacks": {}
    },
    "Flex584": {
      "callbacks": {
        "onClick": [
          {
            "navigate": {
              "type": "internal",
              "url": "/Blog/best-UI-design-tools"
            }
          }
        ]
      }
    },
    "Flex582": {
      "callbacks": {}
    },
    "Flex580": {
      "callbacks": {}
    },
    "Flex581": {
      "callbacks": {}
    },
    "Flex583": {
      "callbacks": {}
    },
    "Flex969": {
      "callbacks": {}
    },
    "Flex968": {
      "callbacks": {}
    },
    "Flex965": {
      "callbacks": {}
    },
    "Flex966": {
      "callbacks": {}
    },
    "Flex963": {
      "callbacks": {}
    },
    "Flex959": {
      "callbacks": {}
    },
    "Flex960": {
      "callbacks": {}
    },
    "Flex961": {
      "callbacks": {}
    },
    "Flex964": {
      "callbacks": {}
    },
    "Flex962": {
      "callbacks": {
        "onClick": [
          {
            "navigate": {
              "type": "external",
              "url": "mailto:hi@folio.com?subject=Email",
              "target": "_blank"
            }
          }
        ]
      }
    },
    "Flex967": {
      "callbacks": {}
    },
    "Flex977": {
      "callbacks": {}
    },
    "Flex976": {
      "callbacks": {}
    },
    "Flex975": {
      "callbacks": {}
    },
    "Flex973": {
      "callbacks": {
        "onClick": [
          {
            "navigate": {
              "type": "internal",
              "url": "/BookCall"
            }
          }
        ]
      }
    },
    "Menu16": {
      "custom": {
        "open": false,
        "iconHeight": 24,
        "iconWidth": 24,
        "gap": "",
        "alignRight": true
      },
      "callbacks": {
        "onClick": []
      }
    },
    "Flex974": {
      "callbacks": {}
    },
    "Flex972": {
      "callbacks": {}
    },
    "Flex971": {
      "callbacks": {}
    },
    "Flex970": {
      "callbacks": {
        "onClick": [
          {
            "navigate": {
              "type": "internal",
              "url": "/BookCall"
            }
          }
        ]
      }
    },
    "Image154": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/warrow.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox399": {
      "custom": {
        "text": "View Blog Post"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox400": {
      "custom": {
        "text": "APRIL 16, 2021"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox401": {
      "custom": {
        "text": "Design tips for designers, that cover everything you need"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image159": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/project4.png"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image164": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/project1.png"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox415": {
      "custom": {
        "text": "How to build rapport with your web design clients"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox949": {
      "custom": {
        "text": "APRIL 16, 2021"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox417": {
      "custom": {
        "text": "View Blog Post"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image163": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/warrow.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image172": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/warrow.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox430": {
      "custom": {
        "text": "View Blog Post"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox432": {
      "custom": {
        "text": "Top 6 free website mockup tools 2021"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox950": {
      "custom": {
        "text": "APRIL 16, 2021"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image173": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/project5.png"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image174": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/warrow.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox433": {
      "custom": {
        "text": "View Blog Post"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox435": {
      "custom": {
        "text": "Logo design trends to avoid in 2021"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox951": {
      "custom": {
        "text": "APRIL 16, 2021"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image175": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/project3.png"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image176": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/warrow.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox436": {
      "custom": {
        "text": "View Blog Post"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox438": {
      "custom": {
        "text": "22 best UI design tools"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox952": {
      "custom": {
        "text": "APRIL 16, 2021"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image177": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/project6.png"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Link275": {
      "custom": {
        "text": "Style Guide",
        "url": "/"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Link276": {
      "custom": {
        "text": "Instructions",
        "url": "/"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Link277": {
      "custom": {
        "text": "Image License Info",
        "url": "/"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox892": {
      "custom": {
        "text": "/"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox893": {
      "custom": {
        "text": "/"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox894": {
      "custom": {
        "text": "/"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Link278": {
      "custom": {
        "text": "Changelog",
        "url": "/"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox895": {
      "custom": {
        "text": "/"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Link279": {
      "custom": {
        "text": "Weflow",
        "url": "/"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox896": {
      "custom": {
        "text": ". Powered by"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Link280": {
      "custom": {
        "text": "Conversionflow",
        "url": "/"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox897": {
      "custom": {
        "text": "© All rights reserved. "
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox881": {
      "custom": {
        "text": "Contact"
      },
      "callbacks": {
        "onClick": [
          {
            "navigate": {
              "type": "internal",
              "url": "/BookCall"
            }
          }
        ]
      }
    },
    "TextBox882": {
      "custom": {
        "text": "Driblle"
      },
      "callbacks": {
        "onClick": [
          {
            "navigate": {
              "type": "external",
              "url": "https://dribbble.com/",
              "target": "_blank"
            }
          }
        ]
      }
    },
    "TextBox883": {
      "custom": {
        "text": "About"
      },
      "callbacks": {
        "onClick": [
          {
            "navigate": {
              "type": "external",
              "url": "/#About",
              "target": "_self"
            }
          }
        ]
      }
    },
    "TextBox884": {
      "custom": {
        "text": "Twitter"
      },
      "callbacks": {
        "onClick": [
          {
            "navigate": {
              "type": "external",
              "url": "https://twitter.com/home",
              "target": "_blank"
            }
          }
        ]
      }
    },
    "TextBox885": {
      "custom": {
        "text": "Projects"
      },
      "callbacks": {
        "onClick": [
          {
            "navigate": {
              "type": "internal",
              "url": "/Projects"
            }
          }
        ]
      }
    },
    "TextBox886": {
      "custom": {
        "text": "Experience"
      },
      "callbacks": {
        "onClick": [
          {
            "navigate": {
              "type": "external",
              "url": "/#Experience",
              "target": "_blank"
            }
          }
        ]
      }
    },
    "TextBox887": {
      "custom": {
        "text": "Instagram"
      },
      "callbacks": {
        "onClick": [
          {
            "navigate": {
              "type": "external",
              "url": "https://www.instagram.com/",
              "target": "_blank"
            }
          }
        ]
      }
    },
    "TextBox888": {
      "custom": {
        "text": "Blog"
      },
      "callbacks": {
        "onClick": [
          {
            "navigate": {
              "type": "internal",
              "url": "/Blog"
            }
          }
        ]
      }
    },
    "TextBox889": {
      "custom": {
        "text": "Services"
      },
      "callbacks": {
        "onClick": [
          {
            "navigate": {
              "type": "external",
              "url": "/#Services",
              "target": "_self"
            }
          }
        ]
      }
    },
    "TextBox891": {
      "custom": {
        "text": "4353 Delaware Avenue, San Francisco, USA"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image282": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/flogo.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "navigate": {
              "type": "internal",
              "url": "/"
            }
          }
        ]
      }
    },
    "TextBox890": {
      "custom": {
        "text": "hi@thefolio.com"
      },
      "callbacks": {
        "onClick": []
      }
    },
    "Image281": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/mailIco.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox898": {
      "custom": {
        "text": "Let's get on a call."
      },
      "callbacks": {
        "onClick": [
          {
            "navigate": {
              "type": "external",
              "url": "tel:+889-776-899",
              "target": "_blank"
            }
          }
        ]
      }
    },
    "TextBox899": {
      "custom": {
        "text": "Ready to make something kickass?"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image285": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/logo.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "navigate": {
              "type": "internal",
              "url": "/"
            }
          }
        ]
      }
    },
    "TextBox906": {
      "custom": {
        "text": "Services"
      },
      "callbacks": {
        "onClick": [
          {
            "navigate": {
              "type": "external",
              "url": "/#Services",
              "target": "_self"
            }
          }
        ]
      }
    },
    "TextBox907": {
      "custom": {
        "text": "Projects"
      },
      "callbacks": {
        "onClick": [
          {
            "navigate": {
              "type": "internal",
              "url": "/Projects"
            }
          }
        ]
      }
    },
    "TextBox908": {
      "custom": {
        "text": "Blog"
      },
      "callbacks": {
        "onClick": [
          {
            "navigate": {
              "type": "internal",
              "url": "/Blog"
            }
          }
        ]
      }
    },
    "TextBox909": {
      "custom": {
        "text": "About"
      },
      "callbacks": {
        "onClick": [
          {
            "navigate": {
              "type": "external",
              "url": "/#About",
              "target": "_self"
            }
          }
        ]
      }
    },
    "TextBox905": {
      "custom": {
        "text": "Book a call"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image284": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/blackArrow.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox901": {
      "custom": {
        "text": "About"
      },
      "callbacks": {
        "onClick": [
          {
            "navigate": {
              "type": "external",
              "url": "/#About",
              "target": "_self"
            }
          }
        ]
      }
    },
    "TextBox902": {
      "custom": {
        "text": "Blog"
      },
      "callbacks": {
        "onClick": [
          {
            "navigate": {
              "type": "internal",
              "url": "/Blog"
            }
          }
        ]
      }
    },
    "TextBox903": {
      "custom": {
        "text": "Projects"
      },
      "callbacks": {
        "onClick": [
          {
            "navigate": {
              "type": "internal",
              "url": "/Projects"
            }
          }
        ]
      }
    },
    "TextBox904": {
      "custom": {
        "text": "Services"
      },
      "callbacks": {
        "onClick": [
          {
            "navigate": {
              "type": "external",
              "url": "/#Services",
              "target": "_self"
            }
          }
        ]
      }
    },
    "Image283": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/blackArrow.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox900": {
      "custom": {
        "text": "Book a call"
      },
      "callbacks": {
        "onClick": [
          {
            "navigate": {
              "type": "internal",
              "url": "/BookCall"
            }
          }
        ]
      }
    }
  },
  "BookCall": {
    "Flex419": {
      "callbacks": {}
    },
    "Flex587": {
      "callbacks": {}
    },
    "Flex585": {
      "callbacks": {}
    },
    "Flex594": {
      "callbacks": {}
    },
    "Flex588": {
      "callbacks": {}
    },
    "Flex598": {
      "callbacks": {}
    },
    "Flex603": {
      "callbacks": {}
    },
    "Flex604": {
      "callbacks": {}
    },
    "Flex596": {
      "callbacks": {}
    },
    "Flex606": {
      "callbacks": {}
    },
    "Flex597": {
      "callbacks": {}
    },
    "Flex601": {
      "callbacks": {}
    },
    "Flex605": {
      "callbacks": {}
    },
    "Flex868": {
      "callbacks": {
        "onClick": [
          {
            "navigate": {
              "type": "internal",
              "url": "/BookCall"
            }
          }
        ]
      }
    },
    "Flex586": {
      "callbacks": {}
    },
    "Flex607": {
      "callbacks": {}
    },
    "Flex608": {
      "callbacks": {
        "onClick": [
          {
            "navigate": {
              "type": "external",
              "url": "mailto:hi@folio.com?subject=Email",
              "target": "_blank"
            }
          }
        ]
      }
    },
    "Flex611": {
      "callbacks": {
        "onClick": [
          {
            "navigate": {
              "type": "external",
              "url": "tel:+889-776-899",
              "target": "_blank"
            }
          }
        ]
      }
    },
    "Flex610": {
      "callbacks": {}
    },
    "Flex988": {
      "callbacks": {}
    },
    "Flex987": {
      "callbacks": {}
    },
    "Flex984": {
      "callbacks": {}
    },
    "Flex985": {
      "callbacks": {}
    },
    "Flex982": {
      "callbacks": {}
    },
    "Flex978": {
      "callbacks": {}
    },
    "Flex979": {
      "callbacks": {}
    },
    "Flex980": {
      "callbacks": {}
    },
    "Flex983": {
      "callbacks": {}
    },
    "Flex981": {
      "callbacks": {
        "onClick": [
          {
            "navigate": {
              "type": "external",
              "url": "mailto:hi@folio.com?subject=Email",
              "target": "_blank"
            }
          }
        ]
      }
    },
    "Flex986": {
      "callbacks": {}
    },
    "Flex996": {
      "callbacks": {}
    },
    "Flex995": {
      "callbacks": {}
    },
    "Flex994": {
      "callbacks": {}
    },
    "Flex992": {
      "callbacks": {
        "onClick": [
          {
            "navigate": {
              "type": "internal",
              "url": "/BookCall"
            }
          }
        ]
      }
    },
    "Menu17": {
      "custom": {
        "open": false,
        "iconHeight": 24,
        "iconWidth": 24,
        "gap": "",
        "alignRight": true
      },
      "callbacks": {
        "onClick": []
      }
    },
    "Flex993": {
      "callbacks": {}
    },
    "Flex991": {
      "callbacks": {}
    },
    "Flex990": {
      "callbacks": {}
    },
    "Flex989": {
      "callbacks": {
        "onClick": [
          {
            "navigate": {
              "type": "internal",
              "url": "/BookCall"
            }
          }
        ]
      }
    },
    "Input7": {
      "custom": {
        "value": "",
        "placeholder": "First Name"
      },
      "callbacks": {}
    },
    "TextBox448": {
      "custom": {
        "text": "First Name"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Input8": {
      "custom": {
        "value": "",
        "placeholder": "Last Name"
      },
      "callbacks": {}
    },
    "TextBox449": {
      "custom": {
        "text": "Last Name"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox444": {
      "custom": {
        "text": "Your Budget"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image179": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/budget.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Input9": {
      "custom": {
        "value": "",
        "placeholder": "1k - 3k",
        "isPasswordField": false
      },
      "callbacks": {}
    },
    "Input4": {
      "custom": {
        "value": "",
        "placeholder": "Example Text"
      },
      "callbacks": {}
    },
    "TextBox445": {
      "custom": {
        "text": "Tell me a bit more what you are looking for?"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox446": {
      "custom": {
        "text": "Your E-mail"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Input5": {
      "custom": {
        "value": "",
        "placeholder": " Enter your e-mail",
        "isPasswordField": false
      },
      "callbacks": {}
    },
    "Image178": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/emailHolder.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox734": {
      "custom": {
        "text": "Submit Now!"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox735": {
      "custom": {
        "text": "Submit Now!"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox439": {
      "custom": {
        "text": "hi@thefolio.com"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image180": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/emailHolder.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image182": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/call.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox451": {
      "custom": {
        "text": "+889-776-899"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox440": {
      "custom": {
        "text": "Get in touch"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox441": {
      "custom": {
        "text": "Have a project in mind? Looking to partner or work together? Reach out through the form and I'll get back to you in the next 48 hours."
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Link281": {
      "custom": {
        "text": "Style Guide",
        "url": "/"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Link282": {
      "custom": {
        "text": "Instructions",
        "url": "/"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Link283": {
      "custom": {
        "text": "Image License Info",
        "url": "/"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox921": {
      "custom": {
        "text": "/"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox922": {
      "custom": {
        "text": "/"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox923": {
      "custom": {
        "text": "/"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Link284": {
      "custom": {
        "text": "Changelog",
        "url": "/"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox924": {
      "custom": {
        "text": "/"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Link285": {
      "custom": {
        "text": "Weflow",
        "url": "/"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox925": {
      "custom": {
        "text": ". Powered by"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Link286": {
      "custom": {
        "text": "Conversionflow",
        "url": "/"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox926": {
      "custom": {
        "text": "© All rights reserved. "
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox910": {
      "custom": {
        "text": "Contact"
      },
      "callbacks": {
        "onClick": [
          {
            "navigate": {
              "type": "internal",
              "url": "/BookCall"
            }
          }
        ]
      }
    },
    "TextBox911": {
      "custom": {
        "text": "Driblle"
      },
      "callbacks": {
        "onClick": [
          {
            "navigate": {
              "type": "external",
              "url": "https://dribbble.com/",
              "target": "_blank"
            }
          }
        ]
      }
    },
    "TextBox912": {
      "custom": {
        "text": "About"
      },
      "callbacks": {
        "onClick": [
          {
            "navigate": {
              "type": "external",
              "url": "/#About",
              "target": "_self"
            }
          }
        ]
      }
    },
    "TextBox913": {
      "custom": {
        "text": "Twitter"
      },
      "callbacks": {
        "onClick": [
          {
            "navigate": {
              "type": "external",
              "url": "https://twitter.com/home",
              "target": "_blank"
            }
          }
        ]
      }
    },
    "TextBox914": {
      "custom": {
        "text": "Projects"
      },
      "callbacks": {
        "onClick": [
          {
            "navigate": {
              "type": "internal",
              "url": "/Projects"
            }
          }
        ]
      }
    },
    "TextBox915": {
      "custom": {
        "text": "Experience"
      },
      "callbacks": {
        "onClick": [
          {
            "navigate": {
              "type": "external",
              "url": "/#Experience",
              "target": "_blank"
            }
          }
        ]
      }
    },
    "TextBox916": {
      "custom": {
        "text": "Instagram"
      },
      "callbacks": {
        "onClick": [
          {
            "navigate": {
              "type": "external",
              "url": "https://www.instagram.com/",
              "target": "_blank"
            }
          }
        ]
      }
    },
    "TextBox917": {
      "custom": {
        "text": "Blog"
      },
      "callbacks": {
        "onClick": [
          {
            "navigate": {
              "type": "internal",
              "url": "/Blog"
            }
          }
        ]
      }
    },
    "TextBox918": {
      "custom": {
        "text": "Services"
      },
      "callbacks": {
        "onClick": [
          {
            "navigate": {
              "type": "external",
              "url": "/#Services",
              "target": "_self"
            }
          }
        ]
      }
    },
    "TextBox920": {
      "custom": {
        "text": "4353 Delaware Avenue, San Francisco, USA"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image287": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/flogo.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "navigate": {
              "type": "internal",
              "url": "/"
            }
          }
        ]
      }
    },
    "TextBox919": {
      "custom": {
        "text": "hi@thefolio.com"
      },
      "callbacks": {
        "onClick": []
      }
    },
    "Image286": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/mailIco.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox927": {
      "custom": {
        "text": "Let's get on a call."
      },
      "callbacks": {
        "onClick": [
          {
            "navigate": {
              "type": "external",
              "url": "tel:+889-776-899",
              "target": "_blank"
            }
          }
        ]
      }
    },
    "TextBox928": {
      "custom": {
        "text": "Ready to make something kickass?"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image290": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/logo.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "navigate": {
              "type": "internal",
              "url": "/"
            }
          }
        ]
      }
    },
    "TextBox935": {
      "custom": {
        "text": "Services"
      },
      "callbacks": {
        "onClick": [
          {
            "navigate": {
              "type": "external",
              "url": "/#Services",
              "target": "_self"
            }
          }
        ]
      }
    },
    "TextBox936": {
      "custom": {
        "text": "Projects"
      },
      "callbacks": {
        "onClick": [
          {
            "navigate": {
              "type": "internal",
              "url": "/Projects"
            }
          }
        ]
      }
    },
    "TextBox937": {
      "custom": {
        "text": "Blog"
      },
      "callbacks": {
        "onClick": [
          {
            "navigate": {
              "type": "internal",
              "url": "/Blog"
            }
          }
        ]
      }
    },
    "TextBox938": {
      "custom": {
        "text": "About"
      },
      "callbacks": {
        "onClick": [
          {
            "navigate": {
              "type": "external",
              "url": "/#About",
              "target": "_self"
            }
          }
        ]
      }
    },
    "TextBox934": {
      "custom": {
        "text": "Book a call"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image289": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/blackArrow.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox930": {
      "custom": {
        "text": "About"
      },
      "callbacks": {
        "onClick": [
          {
            "navigate": {
              "type": "external",
              "url": "/#About",
              "target": "_self"
            }
          }
        ]
      }
    },
    "TextBox931": {
      "custom": {
        "text": "Blog"
      },
      "callbacks": {
        "onClick": [
          {
            "navigate": {
              "type": "internal",
              "url": "/Blog"
            }
          }
        ]
      }
    },
    "TextBox932": {
      "custom": {
        "text": "Projects"
      },
      "callbacks": {
        "onClick": [
          {
            "navigate": {
              "type": "internal",
              "url": "/Projects"
            }
          }
        ]
      }
    },
    "TextBox933": {
      "custom": {
        "text": "Services"
      },
      "callbacks": {
        "onClick": [
          {
            "navigate": {
              "type": "external",
              "url": "/#Services",
              "target": "_self"
            }
          }
        ]
      }
    },
    "Image288": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/blackArrow.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox929": {
      "custom": {
        "text": "Book a call"
      },
      "callbacks": {
        "onClick": [
          {
            "navigate": {
              "type": "internal",
              "url": "/BookCall"
            }
          }
        ]
      }
    }
  },
  "design-tips-for-designers": {
    "Flex1122": {
      "callbacks": {}
    },
    "Flex1121": {
      "callbacks": {}
    },
    "Flex1118": {
      "callbacks": {}
    },
    "Flex1119": {
      "callbacks": {}
    },
    "Flex1116": {
      "callbacks": {}
    },
    "Flex1112": {
      "callbacks": {}
    },
    "Flex1113": {
      "callbacks": {}
    },
    "Flex1114": {
      "callbacks": {}
    },
    "Flex1117": {
      "callbacks": {}
    },
    "Flex1115": {
      "callbacks": {
        "onClick": [
          {
            "navigate": {
              "type": "external",
              "url": "mailto:hi@folio.com?subject=Email",
              "target": "_blank"
            }
          }
        ]
      }
    },
    "Flex1120": {
      "callbacks": {}
    },
    "Flex1192": {
      "callbacks": {}
    },
    "Flex1191": {
      "callbacks": {}
    },
    "Flex1190": {
      "callbacks": {}
    },
    "Flex1187": {
      "callbacks": {}
    },
    "Flex1181": {
      "callbacks": {}
    },
    "Flex1182": {
      "callbacks": {}
    },
    "Flex1183": {
      "callbacks": {}
    },
    "Flex1188": {
      "callbacks": {}
    },
    "Flex1184": {
      "callbacks": {}
    },
    "Flex1185": {
      "callbacks": {}
    },
    "Flex1186": {
      "callbacks": {}
    },
    "Flex1189": {
      "callbacks": {}
    },
    "Flex1198": {
      "callbacks": {}
    },
    "Flex1197": {
      "callbacks": {}
    },
    "Flex1194": {
      "callbacks": {}
    },
    "Flex1195": {
      "callbacks": {}
    },
    "Flex1193": {
      "callbacks": {}
    },
    "Flex1196": {
      "callbacks": {}
    },
    "Flex1206": {
      "callbacks": {}
    },
    "Flex1205": {
      "callbacks": {}
    },
    "Flex1204": {
      "callbacks": {}
    },
    "Flex1202": {
      "callbacks": {
        "onClick": [
          {
            "navigate": {
              "type": "internal",
              "url": "/BookCall"
            }
          }
        ]
      }
    },
    "Menu21": {
      "custom": {
        "open": false,
        "iconHeight": 24,
        "iconWidth": 24,
        "gap": "",
        "alignRight": true
      },
      "callbacks": {
        "onClick": []
      }
    },
    "Flex1203": {
      "callbacks": {}
    },
    "Flex1201": {
      "callbacks": {}
    },
    "Flex1200": {
      "callbacks": {}
    },
    "Flex1199": {
      "callbacks": {
        "onClick": [
          {
            "navigate": {
              "type": "internal",
              "url": "/BookCall"
            }
          }
        ]
      }
    },
    "Flex1180": {
      "callbacks": {}
    },
    "Flex1179": {
      "callbacks": {}
    },
    "Flex1178": {
      "callbacks": {}
    },
    "Flex1482": {
      "callbacks": {}
    },
    "Flex1477": {
      "callbacks": {}
    },
    "Flex1467": {
      "callbacks": {}
    },
    "Flex1468": {
      "callbacks": {
        "onClick": [
          {
            "navigate": {
              "type": "internal",
              "url": "/Blog/design-tips-for-designers"
            }
          }
        ]
      }
    },
    "Flex1478": {
      "callbacks": {}
    },
    "Flex1469": {
      "callbacks": {
        "onClick": [
          {
            "navigate": {
              "type": "internal",
              "url": "/Blog/how-to-build-rapport"
            }
          }
        ]
      }
    },
    "Flex1470": {
      "callbacks": {}
    },
    "Flex1479": {
      "callbacks": {}
    },
    "Flex1471": {
      "callbacks": {
        "onClick": [
          {
            "navigate": {
              "type": "internal",
              "url": "/Blog/free-website-tools"
            }
          }
        ]
      }
    },
    "Flex1472": {
      "callbacks": {}
    },
    "Flex1480": {
      "callbacks": {}
    },
    "Flex1473": {
      "callbacks": {
        "onClick": [
          {
            "navigate": {
              "type": "internal",
              "url": "/Blog/logo-design-trends-to-avoid"
            }
          }
        ]
      }
    },
    "Flex1474": {
      "callbacks": {}
    },
    "Flex1481": {
      "callbacks": {}
    },
    "Flex1475": {
      "callbacks": {
        "onClick": [
          {
            "navigate": {
              "type": "internal",
              "url": "/Blog/best-UI-design-tools"
            }
          }
        ]
      }
    },
    "Flex1476": {
      "callbacks": {}
    },
    "Link299": {
      "custom": {
        "text": "Style Guide",
        "url": "/"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Link300": {
      "custom": {
        "text": "Instructions",
        "url": "/"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Link301": {
      "custom": {
        "text": "Image License Info",
        "url": "/"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox1117": {
      "custom": {
        "text": "/"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox1118": {
      "custom": {
        "text": "/"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox1119": {
      "custom": {
        "text": "/"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Link302": {
      "custom": {
        "text": "Changelog",
        "url": "/"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox1120": {
      "custom": {
        "text": "/"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Link303": {
      "custom": {
        "text": "Weflow",
        "url": "/"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox1121": {
      "custom": {
        "text": ". Powered by"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Link304": {
      "custom": {
        "text": "Conversionflow",
        "url": "/"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox1122": {
      "custom": {
        "text": "© All rights reserved. "
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox1106": {
      "custom": {
        "text": "Contact"
      },
      "callbacks": {
        "onClick": [
          {
            "navigate": {
              "type": "internal",
              "url": "/BookCall"
            }
          }
        ]
      }
    },
    "TextBox1107": {
      "custom": {
        "text": "Driblle"
      },
      "callbacks": {
        "onClick": [
          {
            "navigate": {
              "type": "external",
              "url": "https://dribbble.com/",
              "target": "_blank"
            }
          }
        ]
      }
    },
    "TextBox1108": {
      "custom": {
        "text": "About"
      },
      "callbacks": {
        "onClick": [
          {
            "navigate": {
              "type": "external",
              "url": "/#About",
              "target": "_self"
            }
          }
        ]
      }
    },
    "TextBox1109": {
      "custom": {
        "text": "Twitter"
      },
      "callbacks": {
        "onClick": [
          {
            "navigate": {
              "type": "external",
              "url": "https://twitter.com/home",
              "target": "_blank"
            }
          }
        ]
      }
    },
    "TextBox1110": {
      "custom": {
        "text": "Projects"
      },
      "callbacks": {
        "onClick": [
          {
            "navigate": {
              "type": "internal",
              "url": "/Projects"
            }
          }
        ]
      }
    },
    "TextBox1111": {
      "custom": {
        "text": "Experience"
      },
      "callbacks": {
        "onClick": [
          {
            "navigate": {
              "type": "external",
              "url": "/#Experience",
              "target": "_blank"
            }
          }
        ]
      }
    },
    "TextBox1112": {
      "custom": {
        "text": "Instagram"
      },
      "callbacks": {
        "onClick": [
          {
            "navigate": {
              "type": "external",
              "url": "https://www.instagram.com/",
              "target": "_blank"
            }
          }
        ]
      }
    },
    "TextBox1113": {
      "custom": {
        "text": "Blog"
      },
      "callbacks": {
        "onClick": [
          {
            "navigate": {
              "type": "internal",
              "url": "/Blog"
            }
          }
        ]
      }
    },
    "TextBox1114": {
      "custom": {
        "text": "Services"
      },
      "callbacks": {
        "onClick": [
          {
            "navigate": {
              "type": "external",
              "url": "/#Services",
              "target": "_self"
            }
          }
        ]
      }
    },
    "TextBox1116": {
      "custom": {
        "text": "4353 Delaware Avenue, San Francisco, USA"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image317": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/flogo.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "navigate": {
              "type": "internal",
              "url": "/"
            }
          }
        ]
      }
    },
    "TextBox1115": {
      "custom": {
        "text": "hi@thefolio.com"
      },
      "callbacks": {
        "onClick": []
      }
    },
    "Image316": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/mailIco.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox1123": {
      "custom": {
        "text": "Let's get on a call."
      },
      "callbacks": {
        "onClick": [
          {
            "navigate": {
              "type": "external",
              "url": "tel:+889-776-899",
              "target": "_blank"
            }
          }
        ]
      }
    },
    "TextBox1124": {
      "custom": {
        "text": "Ready to make something kickass?"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox1220": {
      "custom": {
        "text": "We can make it convenient. Where is the debt option is most times to. He repels, for nothing is asperated. And even from where no one. But he accepts that."
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox1221": {
      "custom": {
        "text": "The distinction, or what the accusers like , does not matter. That is the pleasure which the flexibility of accepting the pains from the pleasure of repudiating. That he was laborious but a pleasure, or"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox1222": {
      "custom": {
        "text": "Let him be repulsed by those who have softened those times. And even from where no one. But he accepts that. They are in the accusers when they are in the rejection of things or. There is pleasure from there is pleasure from wise times. From the pleasures of things I want to reveal something to those who know nothing."
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox1223": {
      "custom": {
        "text": "We can make it convenient. Where is the debt option is most times to. He repels, for nothing is repulsed."
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox1224": {
      "custom": {
        "text": "The distinction, or what the accusers like, does not matter"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox1225": {
      "custom": {
        "text": "And even from where no one. But he accepts that"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox1226": {
      "custom": {
        "text": "They are among the accusers"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox1227": {
      "custom": {
        "text": "What we can do is to bear those things"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox1228": {
      "custom": {
        "text": "Dissolved by pleasures and pleasures, the pain of which you owe here results in a laborious one"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox1229": {
      "custom": {
        "text": "A little something and a great pain from him to us. And that whosoever shall receive it shall come with labor. The distinction, or what the accusers like, does not matter. That is the pleasure which the flexibility of accepting the pains from the pleasure of repudiating. That he was laborious but a pleasure, or"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox1207": {
      "custom": {
        "text": "And even from where no one. But he accepts that."
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox1208": {
      "custom": {
        "text": "•"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox1209": {
      "custom": {
        "text": "•"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox1210": {
      "custom": {
        "text": "We can make it convenient. Where is the debt option is most times to."
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox1211": {
      "custom": {
        "text": "•"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox1212": {
      "custom": {
        "text": "That he was laborious but a pleasure, or"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox1213": {
      "custom": {
        "text": "That he was laborious but a pleasure, or"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox1214": {
      "custom": {
        "text": "3."
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox1215": {
      "custom": {
        "text": "We can make it convenient. Where is the debt option is most times to."
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox1216": {
      "custom": {
        "text": "2."
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox1217": {
      "custom": {
        "text": "1. "
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox1218": {
      "custom": {
        "text": "And even from where no one. But he accepts that."
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox1219": {
      "custom": {
        "text": "Because they really are. The very flight of them. It is difficult to avoid the option and to distinguish the great services."
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image334": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/darrow.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox1233": {
      "custom": {
        "text": "Design tips for designers, that cover everything you need"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox1230": {
      "custom": {
        "text": "April 16, 2021"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox1231": {
      "custom": {
        "text": "•"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox1232": {
      "custom": {
        "text": "7 mins"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image335": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/project4.png"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image338": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/logo.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "navigate": {
              "type": "internal",
              "url": "/"
            }
          }
        ]
      }
    },
    "TextBox1240": {
      "custom": {
        "text": "Services"
      },
      "callbacks": {
        "onClick": [
          {
            "navigate": {
              "type": "external",
              "url": "/#Services",
              "target": "_self"
            }
          }
        ]
      }
    },
    "TextBox1241": {
      "custom": {
        "text": "Projects"
      },
      "callbacks": {
        "onClick": [
          {
            "navigate": {
              "type": "internal",
              "url": "/Projects"
            }
          }
        ]
      }
    },
    "TextBox1242": {
      "custom": {
        "text": "Blog"
      },
      "callbacks": {
        "onClick": [
          {
            "navigate": {
              "type": "internal",
              "url": "/Blog"
            }
          }
        ]
      }
    },
    "TextBox1243": {
      "custom": {
        "text": "About"
      },
      "callbacks": {
        "onClick": [
          {
            "navigate": {
              "type": "external",
              "url": "/#About",
              "target": "_self"
            }
          }
        ]
      }
    },
    "TextBox1239": {
      "custom": {
        "text": "Book a call"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image337": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/blackArrow.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox1235": {
      "custom": {
        "text": "About"
      },
      "callbacks": {
        "onClick": [
          {
            "navigate": {
              "type": "external",
              "url": "/#About",
              "target": "_self"
            }
          }
        ]
      }
    },
    "TextBox1236": {
      "custom": {
        "text": "Blog"
      },
      "callbacks": {
        "onClick": [
          {
            "navigate": {
              "type": "internal",
              "url": "/Blog"
            }
          }
        ]
      }
    },
    "TextBox1237": {
      "custom": {
        "text": "Projects"
      },
      "callbacks": {
        "onClick": [
          {
            "navigate": {
              "type": "internal",
              "url": "/Projects"
            }
          }
        ]
      }
    },
    "TextBox1238": {
      "custom": {
        "text": "Services"
      },
      "callbacks": {
        "onClick": [
          {
            "navigate": {
              "type": "external",
              "url": "/#Services",
              "target": "_self"
            }
          }
        ]
      }
    },
    "Image336": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/blackArrow.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox1234": {
      "custom": {
        "text": "Book a call"
      },
      "callbacks": {
        "onClick": [
          {
            "navigate": {
              "type": "internal",
              "url": "/BookCall"
            }
          }
        ]
      }
    },
    "TextBox1205": {
      "custom": {
        "text": "Related Posts"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox1206": {
      "custom": {
        "text": "BLOGS"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox1647": {
      "custom": {
        "text": "Design tips for designers, that cover everything you need"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox1627": {
      "custom": {
        "text": "April 16, 2021 "
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox1628": {
      "custom": {
        "text": "•"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox1629": {
      "custom": {
        "text": "6 mins"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image398": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/warrow.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox1630": {
      "custom": {
        "text": "Read the article"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox1648": {
      "custom": {
        "text": "How to build rapport with your web design clients"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox1631": {
      "custom": {
        "text": "Read the article"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image399": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/warrow.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox1632": {
      "custom": {
        "text": "5 mins"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox1633": {
      "custom": {
        "text": "•"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox1634": {
      "custom": {
        "text": "April 16, 2021 "
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox1649": {
      "custom": {
        "text": "Top 6 free website mockup tools 2021"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox1635": {
      "custom": {
        "text": "Read the article"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image400": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/warrow.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox1636": {
      "custom": {
        "text": "5 mins"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox1637": {
      "custom": {
        "text": "•"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox1638": {
      "custom": {
        "text": "April 16, 2021 "
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox1650": {
      "custom": {
        "text": "Logo design trends to avoid in 2021"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox1639": {
      "custom": {
        "text": "Read the article"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image401": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/warrow.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox1640": {
      "custom": {
        "text": "7 mins"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox1641": {
      "custom": {
        "text": "•"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox1642": {
      "custom": {
        "text": "April 16, 2021 "
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox1651": {
      "custom": {
        "text": "22 best UI design tools"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox1643": {
      "custom": {
        "text": "Read the article"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image402": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/warrow.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox1644": {
      "custom": {
        "text": "7 mins"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox1645": {
      "custom": {
        "text": "•"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox1646": {
      "custom": {
        "text": "April 16, 2021 "
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    }
  },
  "how-to-build-rapport": {
    "Flex1291": {
      "callbacks": {}
    },
    "Flex1290": {
      "callbacks": {}
    },
    "Flex1287": {
      "callbacks": {}
    },
    "Flex1288": {
      "callbacks": {}
    },
    "Flex1285": {
      "callbacks": {}
    },
    "Flex1281": {
      "callbacks": {}
    },
    "Flex1282": {
      "callbacks": {}
    },
    "Flex1283": {
      "callbacks": {}
    },
    "Flex1286": {
      "callbacks": {}
    },
    "Flex1284": {
      "callbacks": {
        "onClick": [
          {
            "navigate": {
              "type": "external",
              "url": "mailto:hi@folio.com?subject=Email",
              "target": "_blank"
            }
          }
        ]
      }
    },
    "Flex1289": {
      "callbacks": {}
    },
    "Flex1310": {
      "callbacks": {}
    },
    "Flex1309": {
      "callbacks": {}
    },
    "Flex1308": {
      "callbacks": {}
    },
    "Flex1514": {
      "callbacks": {}
    },
    "Flex1509": {
      "callbacks": {}
    },
    "Flex1499": {
      "callbacks": {}
    },
    "Flex1500": {
      "callbacks": {
        "onClick": [
          {
            "navigate": {
              "type": "internal",
              "url": "/Blog/design-tips-for-designers"
            }
          }
        ]
      }
    },
    "Flex1510": {
      "callbacks": {}
    },
    "Flex1501": {
      "callbacks": {
        "onClick": [
          {
            "navigate": {
              "type": "internal",
              "url": "/Blog/how-to-build-rapport"
            }
          }
        ]
      }
    },
    "Flex1502": {
      "callbacks": {}
    },
    "Flex1511": {
      "callbacks": {}
    },
    "Flex1503": {
      "callbacks": {
        "onClick": [
          {
            "navigate": {
              "type": "internal",
              "url": "/Blog/free-website-tools"
            }
          }
        ]
      }
    },
    "Flex1504": {
      "callbacks": {}
    },
    "Flex1512": {
      "callbacks": {}
    },
    "Flex1505": {
      "callbacks": {
        "onClick": [
          {
            "navigate": {
              "type": "internal",
              "url": "/Blog/logo-design-trends-to-avoid"
            }
          }
        ]
      }
    },
    "Flex1506": {
      "callbacks": {}
    },
    "Flex1513": {
      "callbacks": {}
    },
    "Flex1507": {
      "callbacks": {
        "onClick": [
          {
            "navigate": {
              "type": "internal",
              "url": "/Blog/best-UI-design-tools"
            }
          }
        ]
      }
    },
    "Flex1508": {
      "callbacks": {}
    },
    "Flex1322": {
      "callbacks": {}
    },
    "Flex1321": {
      "callbacks": {}
    },
    "Flex1320": {
      "callbacks": {}
    },
    "Flex1317": {
      "callbacks": {}
    },
    "Flex1311": {
      "callbacks": {}
    },
    "Flex1312": {
      "callbacks": {}
    },
    "Flex1313": {
      "callbacks": {}
    },
    "Flex1318": {
      "callbacks": {}
    },
    "Flex1314": {
      "callbacks": {}
    },
    "Flex1315": {
      "callbacks": {}
    },
    "Flex1316": {
      "callbacks": {}
    },
    "Flex1319": {
      "callbacks": {}
    },
    "Flex1328": {
      "callbacks": {}
    },
    "Flex1327": {
      "callbacks": {}
    },
    "Flex1324": {
      "callbacks": {}
    },
    "Flex1325": {
      "callbacks": {}
    },
    "Flex1323": {
      "callbacks": {}
    },
    "Flex1326": {
      "callbacks": {}
    },
    "Flex1336": {
      "callbacks": {}
    },
    "Flex1335": {
      "callbacks": {}
    },
    "Flex1334": {
      "callbacks": {}
    },
    "Flex1332": {
      "callbacks": {
        "onClick": [
          {
            "navigate": {
              "type": "internal",
              "url": "/BookCall"
            }
          }
        ]
      }
    },
    "Menu23": {
      "custom": {
        "open": false,
        "iconHeight": 24,
        "iconWidth": 24,
        "gap": "",
        "alignRight": true
      },
      "callbacks": {
        "onClick": []
      }
    },
    "Flex1333": {
      "callbacks": {}
    },
    "Flex1331": {
      "callbacks": {}
    },
    "Flex1330": {
      "callbacks": {}
    },
    "Flex1329": {
      "callbacks": {
        "onClick": [
          {
            "navigate": {
              "type": "internal",
              "url": "/BookCall"
            }
          }
        ]
      }
    },
    "Link311": {
      "custom": {
        "text": "Style Guide",
        "url": "/"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Link312": {
      "custom": {
        "text": "Instructions",
        "url": "/"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Link313": {
      "custom": {
        "text": "Image License Info",
        "url": "/"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox1365": {
      "custom": {
        "text": "/"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox1366": {
      "custom": {
        "text": "/"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox1367": {
      "custom": {
        "text": "/"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Link314": {
      "custom": {
        "text": "Changelog",
        "url": "/"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox1368": {
      "custom": {
        "text": "/"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Link315": {
      "custom": {
        "text": "Weflow",
        "url": "/"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox1369": {
      "custom": {
        "text": ". Powered by"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Link316": {
      "custom": {
        "text": "Conversionflow",
        "url": "/"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox1370": {
      "custom": {
        "text": "© All rights reserved. "
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox1354": {
      "custom": {
        "text": "Contact"
      },
      "callbacks": {
        "onClick": [
          {
            "navigate": {
              "type": "internal",
              "url": "/BookCall"
            }
          }
        ]
      }
    },
    "TextBox1355": {
      "custom": {
        "text": "Driblle"
      },
      "callbacks": {
        "onClick": [
          {
            "navigate": {
              "type": "external",
              "url": "https://dribbble.com/",
              "target": "_blank"
            }
          }
        ]
      }
    },
    "TextBox1356": {
      "custom": {
        "text": "About"
      },
      "callbacks": {
        "onClick": [
          {
            "navigate": {
              "type": "external",
              "url": "/#About",
              "target": "_self"
            }
          }
        ]
      }
    },
    "TextBox1357": {
      "custom": {
        "text": "Twitter"
      },
      "callbacks": {
        "onClick": [
          {
            "navigate": {
              "type": "external",
              "url": "https://twitter.com/home",
              "target": "_blank"
            }
          }
        ]
      }
    },
    "TextBox1358": {
      "custom": {
        "text": "Projects"
      },
      "callbacks": {
        "onClick": [
          {
            "navigate": {
              "type": "internal",
              "url": "/Projects"
            }
          }
        ]
      }
    },
    "TextBox1359": {
      "custom": {
        "text": "Experience"
      },
      "callbacks": {
        "onClick": [
          {
            "navigate": {
              "type": "external",
              "url": "/#Experience",
              "target": "_blank"
            }
          }
        ]
      }
    },
    "TextBox1360": {
      "custom": {
        "text": "Instagram"
      },
      "callbacks": {
        "onClick": [
          {
            "navigate": {
              "type": "external",
              "url": "https://www.instagram.com/",
              "target": "_blank"
            }
          }
        ]
      }
    },
    "TextBox1361": {
      "custom": {
        "text": "Blog"
      },
      "callbacks": {
        "onClick": [
          {
            "navigate": {
              "type": "internal",
              "url": "/Blog"
            }
          }
        ]
      }
    },
    "TextBox1362": {
      "custom": {
        "text": "Services"
      },
      "callbacks": {
        "onClick": [
          {
            "navigate": {
              "type": "external",
              "url": "/#Services",
              "target": "_self"
            }
          }
        ]
      }
    },
    "TextBox1364": {
      "custom": {
        "text": "4353 Delaware Avenue, San Francisco, USA"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image354": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/flogo.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "navigate": {
              "type": "internal",
              "url": "/"
            }
          }
        ]
      }
    },
    "TextBox1363": {
      "custom": {
        "text": "hi@thefolio.com"
      },
      "callbacks": {
        "onClick": []
      }
    },
    "Image353": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/mailIco.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox1371": {
      "custom": {
        "text": "Let's get on a call."
      },
      "callbacks": {
        "onClick": [
          {
            "navigate": {
              "type": "external",
              "url": "tel:+889-776-899",
              "target": "_blank"
            }
          }
        ]
      }
    },
    "TextBox1372": {
      "custom": {
        "text": "Ready to make something kickass?"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox1398": {
      "custom": {
        "text": "Related Posts"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox1399": {
      "custom": {
        "text": "BLOGS"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox1697": {
      "custom": {
        "text": "Design tips for designers, that cover everything you need"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox1677": {
      "custom": {
        "text": "April 16, 2021 "
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox1678": {
      "custom": {
        "text": "•"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox1679": {
      "custom": {
        "text": "6 mins"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image408": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/warrow.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox1680": {
      "custom": {
        "text": "Read the article"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox1698": {
      "custom": {
        "text": "How to build rapport with your web design clients"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox1681": {
      "custom": {
        "text": "Read the article"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image409": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/warrow.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox1682": {
      "custom": {
        "text": "5 mins"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox1683": {
      "custom": {
        "text": "•"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox1684": {
      "custom": {
        "text": "April 16, 2021 "
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox1699": {
      "custom": {
        "text": "Top 6 free website mockup tools 2021"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox1685": {
      "custom": {
        "text": "Read the article"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image410": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/warrow.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox1686": {
      "custom": {
        "text": "5 mins"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox1687": {
      "custom": {
        "text": "•"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox1688": {
      "custom": {
        "text": "April 16, 2021 "
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox1700": {
      "custom": {
        "text": "Logo design trends to avoid in 2021"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox1689": {
      "custom": {
        "text": "Read the article"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image411": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/warrow.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox1690": {
      "custom": {
        "text": "7 mins"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox1691": {
      "custom": {
        "text": "•"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox1692": {
      "custom": {
        "text": "April 16, 2021 "
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox1701": {
      "custom": {
        "text": "22 best UI design tools"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox1693": {
      "custom": {
        "text": "Read the article"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image412": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/warrow.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox1694": {
      "custom": {
        "text": "7 mins"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox1695": {
      "custom": {
        "text": "•"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox1696": {
      "custom": {
        "text": "April 16, 2021 "
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox1413": {
      "custom": {
        "text": "We can make it convenient. Where is the debt option is most times to. He repels, for nothing is asperated. And even from where no one. But he accepts that."
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox1414": {
      "custom": {
        "text": "The distinction, or what the accusers like , does not matter. That is the pleasure which the flexibility of accepting the pains from the pleasure of repudiating. That he was laborious but a pleasure, or"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox1415": {
      "custom": {
        "text": "Let him be repulsed by those who have softened those times. And even from where no one. But he accepts that. They are in the accusers when they are in the rejection of things or. There is pleasure from there is pleasure from wise times. From the pleasures of things I want to reveal something to those who know nothing."
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox1416": {
      "custom": {
        "text": "We can make it convenient. Where is the debt option is most times to. He repels, for nothing is repulsed."
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox1417": {
      "custom": {
        "text": "The distinction, or what the accusers like, does not matter"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox1418": {
      "custom": {
        "text": "And even from where no one. But he accepts that"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox1419": {
      "custom": {
        "text": "They are among the accusers"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox1420": {
      "custom": {
        "text": "What we can do is to bear those things"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox1421": {
      "custom": {
        "text": "Dissolved by pleasures and pleasures, the pain of which you owe here results in a laborious one"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox1422": {
      "custom": {
        "text": "A little something and a great pain from him to us. And that whosoever shall receive it shall come with labor. The distinction, or what the accusers like, does not matter. That is the pleasure which the flexibility of accepting the pains from the pleasure of repudiating. That he was laborious but a pleasure, or"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox1400": {
      "custom": {
        "text": "And even from where no one. But he accepts that."
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox1401": {
      "custom": {
        "text": "•"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox1402": {
      "custom": {
        "text": "•"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox1403": {
      "custom": {
        "text": "We can make it convenient. Where is the debt option is most times to."
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox1404": {
      "custom": {
        "text": "•"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox1405": {
      "custom": {
        "text": "That he was laborious but a pleasure, or"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox1406": {
      "custom": {
        "text": "That he was laborious but a pleasure, or"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox1407": {
      "custom": {
        "text": "3."
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox1408": {
      "custom": {
        "text": "We can make it convenient. Where is the debt option is most times to."
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox1409": {
      "custom": {
        "text": "2."
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox1410": {
      "custom": {
        "text": "1. "
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox1411": {
      "custom": {
        "text": "And even from where no one. But he accepts that."
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox1412": {
      "custom": {
        "text": "Because they really are. The very flight of them. It is difficult to avoid the option and to distinguish the great services."
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image360": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/darrow.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox1426": {
      "custom": {
        "text": "How to build rapport with your web design clients"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox1423": {
      "custom": {
        "text": "April 16, 2021"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox1424": {
      "custom": {
        "text": "•"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox1425": {
      "custom": {
        "text": "7 mins"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image361": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/project1.png"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image364": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/logo.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "navigate": {
              "type": "internal",
              "url": "/"
            }
          }
        ]
      }
    },
    "TextBox1433": {
      "custom": {
        "text": "Services"
      },
      "callbacks": {
        "onClick": [
          {
            "navigate": {
              "type": "external",
              "url": "/#Services",
              "target": "_self"
            }
          }
        ]
      }
    },
    "TextBox1434": {
      "custom": {
        "text": "Projects"
      },
      "callbacks": {
        "onClick": [
          {
            "navigate": {
              "type": "internal",
              "url": "/Projects"
            }
          }
        ]
      }
    },
    "TextBox1435": {
      "custom": {
        "text": "Blog"
      },
      "callbacks": {
        "onClick": [
          {
            "navigate": {
              "type": "internal",
              "url": "/Blog"
            }
          }
        ]
      }
    },
    "TextBox1436": {
      "custom": {
        "text": "About"
      },
      "callbacks": {
        "onClick": [
          {
            "navigate": {
              "type": "external",
              "url": "/#About",
              "target": "_self"
            }
          }
        ]
      }
    },
    "TextBox1432": {
      "custom": {
        "text": "Book a call"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image363": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/blackArrow.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox1428": {
      "custom": {
        "text": "About"
      },
      "callbacks": {
        "onClick": [
          {
            "navigate": {
              "type": "external",
              "url": "/#About",
              "target": "_self"
            }
          }
        ]
      }
    },
    "TextBox1429": {
      "custom": {
        "text": "Blog"
      },
      "callbacks": {
        "onClick": [
          {
            "navigate": {
              "type": "internal",
              "url": "/Blog"
            }
          }
        ]
      }
    },
    "TextBox1430": {
      "custom": {
        "text": "Projects"
      },
      "callbacks": {
        "onClick": [
          {
            "navigate": {
              "type": "internal",
              "url": "/Projects"
            }
          }
        ]
      }
    },
    "TextBox1431": {
      "custom": {
        "text": "Services"
      },
      "callbacks": {
        "onClick": [
          {
            "navigate": {
              "type": "external",
              "url": "/#Services",
              "target": "_self"
            }
          }
        ]
      }
    },
    "Image362": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/blackArrow.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox1427": {
      "custom": {
        "text": "Book a call"
      },
      "callbacks": {
        "onClick": [
          {
            "navigate": {
              "type": "internal",
              "url": "/BookCall"
            }
          }
        ]
      }
    }
  },
  "free-website-tools": {
    "Flex1217": {
      "callbacks": {}
    },
    "Flex1216": {
      "callbacks": {}
    },
    "Flex1213": {
      "callbacks": {}
    },
    "Flex1214": {
      "callbacks": {}
    },
    "Flex1211": {
      "callbacks": {}
    },
    "Flex1207": {
      "callbacks": {}
    },
    "Flex1208": {
      "callbacks": {}
    },
    "Flex1209": {
      "callbacks": {}
    },
    "Flex1212": {
      "callbacks": {}
    },
    "Flex1210": {
      "callbacks": {
        "onClick": [
          {
            "navigate": {
              "type": "external",
              "url": "mailto:hi@folio.com?subject=Email",
              "target": "_blank"
            }
          }
        ]
      }
    },
    "Flex1215": {
      "callbacks": {}
    },
    "Flex1236": {
      "callbacks": {}
    },
    "Flex1235": {
      "callbacks": {}
    },
    "Flex1234": {
      "callbacks": {}
    },
    "Flex1498": {
      "callbacks": {}
    },
    "Flex1493": {
      "callbacks": {}
    },
    "Flex1483": {
      "callbacks": {}
    },
    "Flex1484": {
      "callbacks": {
        "onClick": [
          {
            "navigate": {
              "type": "internal",
              "url": "/Blog/design-tips-for-designers"
            }
          }
        ]
      }
    },
    "Flex1494": {
      "callbacks": {}
    },
    "Flex1485": {
      "callbacks": {
        "onClick": [
          {
            "navigate": {
              "type": "internal",
              "url": "/Blog/how-to-build-rapport"
            }
          }
        ]
      }
    },
    "Flex1486": {
      "callbacks": {}
    },
    "Flex1495": {
      "callbacks": {}
    },
    "Flex1487": {
      "callbacks": {
        "onClick": [
          {
            "navigate": {
              "type": "internal",
              "url": "/Blog/free-website-tools"
            }
          }
        ]
      }
    },
    "Flex1488": {
      "callbacks": {}
    },
    "Flex1496": {
      "callbacks": {}
    },
    "Flex1489": {
      "callbacks": {
        "onClick": [
          {
            "navigate": {
              "type": "internal",
              "url": "/Blog/logo-design-trends-to-avoid"
            }
          }
        ]
      }
    },
    "Flex1490": {
      "callbacks": {}
    },
    "Flex1497": {
      "callbacks": {}
    },
    "Flex1491": {
      "callbacks": {
        "onClick": [
          {
            "navigate": {
              "type": "internal",
              "url": "/Blog/best-UI-design-tools"
            }
          }
        ]
      }
    },
    "Flex1492": {
      "callbacks": {}
    },
    "Flex1266": {
      "callbacks": {}
    },
    "Flex1265": {
      "callbacks": {}
    },
    "Flex1264": {
      "callbacks": {}
    },
    "Flex1261": {
      "callbacks": {}
    },
    "Flex1255": {
      "callbacks": {}
    },
    "Flex1256": {
      "callbacks": {}
    },
    "Flex1257": {
      "callbacks": {}
    },
    "Flex1262": {
      "callbacks": {}
    },
    "Flex1258": {
      "callbacks": {}
    },
    "Flex1259": {
      "callbacks": {}
    },
    "Flex1260": {
      "callbacks": {}
    },
    "Flex1263": {
      "callbacks": {}
    },
    "Flex1272": {
      "callbacks": {}
    },
    "Flex1271": {
      "callbacks": {}
    },
    "Flex1268": {
      "callbacks": {}
    },
    "Flex1269": {
      "callbacks": {}
    },
    "Flex1267": {
      "callbacks": {}
    },
    "Flex1270": {
      "callbacks": {}
    },
    "Flex1280": {
      "callbacks": {}
    },
    "Flex1279": {
      "callbacks": {}
    },
    "Flex1278": {
      "callbacks": {}
    },
    "Flex1276": {
      "callbacks": {
        "onClick": [
          {
            "navigate": {
              "type": "internal",
              "url": "/BookCall"
            }
          }
        ]
      }
    },
    "Menu22": {
      "custom": {
        "open": false,
        "iconHeight": 24,
        "iconWidth": 24,
        "gap": "",
        "alignRight": true
      },
      "callbacks": {
        "onClick": []
      }
    },
    "Flex1277": {
      "callbacks": {}
    },
    "Flex1275": {
      "callbacks": {}
    },
    "Flex1274": {
      "callbacks": {}
    },
    "Flex1273": {
      "callbacks": {
        "onClick": [
          {
            "navigate": {
              "type": "internal",
              "url": "/BookCall"
            }
          }
        ]
      }
    },
    "Link305": {
      "custom": {
        "text": "Style Guide",
        "url": "/"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Link306": {
      "custom": {
        "text": "Instructions",
        "url": "/"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Link307": {
      "custom": {
        "text": "Image License Info",
        "url": "/"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox1255": {
      "custom": {
        "text": "/"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox1256": {
      "custom": {
        "text": "/"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox1257": {
      "custom": {
        "text": "/"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Link308": {
      "custom": {
        "text": "Changelog",
        "url": "/"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox1258": {
      "custom": {
        "text": "/"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Link309": {
      "custom": {
        "text": "Weflow",
        "url": "/"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox1259": {
      "custom": {
        "text": ". Powered by"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Link310": {
      "custom": {
        "text": "Conversionflow",
        "url": "/"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox1260": {
      "custom": {
        "text": "© All rights reserved. "
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox1244": {
      "custom": {
        "text": "Contact"
      },
      "callbacks": {
        "onClick": [
          {
            "navigate": {
              "type": "internal",
              "url": "/BookCall"
            }
          }
        ]
      }
    },
    "TextBox1245": {
      "custom": {
        "text": "Driblle"
      },
      "callbacks": {
        "onClick": [
          {
            "navigate": {
              "type": "external",
              "url": "https://dribbble.com/",
              "target": "_blank"
            }
          }
        ]
      }
    },
    "TextBox1246": {
      "custom": {
        "text": "About"
      },
      "callbacks": {
        "onClick": [
          {
            "navigate": {
              "type": "external",
              "url": "/#About",
              "target": "_self"
            }
          }
        ]
      }
    },
    "TextBox1247": {
      "custom": {
        "text": "Twitter"
      },
      "callbacks": {
        "onClick": [
          {
            "navigate": {
              "type": "external",
              "url": "https://twitter.com/home",
              "target": "_blank"
            }
          }
        ]
      }
    },
    "TextBox1248": {
      "custom": {
        "text": "Projects"
      },
      "callbacks": {
        "onClick": [
          {
            "navigate": {
              "type": "internal",
              "url": "/Projects"
            }
          }
        ]
      }
    },
    "TextBox1249": {
      "custom": {
        "text": "Experience"
      },
      "callbacks": {
        "onClick": [
          {
            "navigate": {
              "type": "external",
              "url": "/#Experience",
              "target": "_blank"
            }
          }
        ]
      }
    },
    "TextBox1250": {
      "custom": {
        "text": "Instagram"
      },
      "callbacks": {
        "onClick": [
          {
            "navigate": {
              "type": "external",
              "url": "https://www.instagram.com/",
              "target": "_blank"
            }
          }
        ]
      }
    },
    "TextBox1251": {
      "custom": {
        "text": "Blog"
      },
      "callbacks": {
        "onClick": [
          {
            "navigate": {
              "type": "internal",
              "url": "/Blog"
            }
          }
        ]
      }
    },
    "TextBox1252": {
      "custom": {
        "text": "Services"
      },
      "callbacks": {
        "onClick": [
          {
            "navigate": {
              "type": "external",
              "url": "/#Services",
              "target": "_self"
            }
          }
        ]
      }
    },
    "TextBox1254": {
      "custom": {
        "text": "4353 Delaware Avenue, San Francisco, USA"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image340": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/flogo.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "navigate": {
              "type": "internal",
              "url": "/"
            }
          }
        ]
      }
    },
    "TextBox1253": {
      "custom": {
        "text": "hi@thefolio.com"
      },
      "callbacks": {
        "onClick": []
      }
    },
    "Image339": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/mailIco.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox1261": {
      "custom": {
        "text": "Let's get on a call."
      },
      "callbacks": {
        "onClick": [
          {
            "navigate": {
              "type": "external",
              "url": "tel:+889-776-899",
              "target": "_blank"
            }
          }
        ]
      }
    },
    "TextBox1262": {
      "custom": {
        "text": "Ready to make something kickass?"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox1288": {
      "custom": {
        "text": "Related Posts"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox1289": {
      "custom": {
        "text": "BLOGS"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox1672": {
      "custom": {
        "text": "Design tips for designers, that cover everything you need"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox1652": {
      "custom": {
        "text": "April 16, 2021 "
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox1653": {
      "custom": {
        "text": "•"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox1654": {
      "custom": {
        "text": "6 mins"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image403": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/warrow.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox1655": {
      "custom": {
        "text": "Read the article"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox1673": {
      "custom": {
        "text": "How to build rapport with your web design clients"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox1656": {
      "custom": {
        "text": "Read the article"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image404": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/warrow.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox1657": {
      "custom": {
        "text": "5 mins"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox1658": {
      "custom": {
        "text": "•"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox1659": {
      "custom": {
        "text": "April 16, 2021 "
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox1674": {
      "custom": {
        "text": "Top 6 free website mockup tools 2021"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox1660": {
      "custom": {
        "text": "Read the article"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image405": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/warrow.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox1661": {
      "custom": {
        "text": "5 mins"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox1662": {
      "custom": {
        "text": "•"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox1663": {
      "custom": {
        "text": "April 16, 2021 "
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox1675": {
      "custom": {
        "text": "Logo design trends to avoid in 2021"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox1664": {
      "custom": {
        "text": "Read the article"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image406": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/warrow.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox1665": {
      "custom": {
        "text": "7 mins"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox1666": {
      "custom": {
        "text": "•"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox1667": {
      "custom": {
        "text": "April 16, 2021 "
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox1676": {
      "custom": {
        "text": "22 best UI design tools"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox1668": {
      "custom": {
        "text": "Read the article"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image407": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/warrow.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox1669": {
      "custom": {
        "text": "7 mins"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox1670": {
      "custom": {
        "text": "•"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox1671": {
      "custom": {
        "text": "April 16, 2021 "
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox1330": {
      "custom": {
        "text": "We can make it convenient. Where is the debt option is most times to. He repels, for nothing is asperated. And even from where no one. But he accepts that."
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox1331": {
      "custom": {
        "text": "The distinction, or what the accusers like , does not matter. That is the pleasure which the flexibility of accepting the pains from the pleasure of repudiating. That he was laborious but a pleasure, or"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox1332": {
      "custom": {
        "text": "Let him be repulsed by those who have softened those times. And even from where no one. But he accepts that. They are in the accusers when they are in the rejection of things or. There is pleasure from there is pleasure from wise times. From the pleasures of things I want to reveal something to those who know nothing."
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox1333": {
      "custom": {
        "text": "We can make it convenient. Where is the debt option is most times to. He repels, for nothing is repulsed."
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox1334": {
      "custom": {
        "text": "The distinction, or what the accusers like, does not matter"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox1335": {
      "custom": {
        "text": "And even from where no one. But he accepts that"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox1336": {
      "custom": {
        "text": "They are among the accusers"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox1337": {
      "custom": {
        "text": "What we can do is to bear those things"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox1338": {
      "custom": {
        "text": "Dissolved by pleasures and pleasures, the pain of which you owe here results in a laborious one"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox1339": {
      "custom": {
        "text": "A little something and a great pain from him to us. And that whosoever shall receive it shall come with labor. The distinction, or what the accusers like, does not matter. That is the pleasure which the flexibility of accepting the pains from the pleasure of repudiating. That he was laborious but a pleasure, or"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox1317": {
      "custom": {
        "text": "And even from where no one. But he accepts that."
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox1318": {
      "custom": {
        "text": "•"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox1319": {
      "custom": {
        "text": "•"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox1320": {
      "custom": {
        "text": "We can make it convenient. Where is the debt option is most times to."
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox1321": {
      "custom": {
        "text": "•"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox1322": {
      "custom": {
        "text": "That he was laborious but a pleasure, or"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox1323": {
      "custom": {
        "text": "That he was laborious but a pleasure, or"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox1324": {
      "custom": {
        "text": "3."
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox1325": {
      "custom": {
        "text": "We can make it convenient. Where is the debt option is most times to."
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox1326": {
      "custom": {
        "text": "2."
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox1327": {
      "custom": {
        "text": "1. "
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox1328": {
      "custom": {
        "text": "And even from where no one. But he accepts that."
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox1329": {
      "custom": {
        "text": "Because they really are. The very flight of them. It is difficult to avoid the option and to distinguish the great services."
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image348": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/darrow.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox1343": {
      "custom": {
        "text": "Top 6 free website mockup tools 2021"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox1340": {
      "custom": {
        "text": "April 16, 2021"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox1341": {
      "custom": {
        "text": "•"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox1342": {
      "custom": {
        "text": "7 mins"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image349": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/project5.png"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image352": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/logo.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "navigate": {
              "type": "internal",
              "url": "/"
            }
          }
        ]
      }
    },
    "TextBox1350": {
      "custom": {
        "text": "Services"
      },
      "callbacks": {
        "onClick": [
          {
            "navigate": {
              "type": "external",
              "url": "/#Services",
              "target": "_self"
            }
          }
        ]
      }
    },
    "TextBox1351": {
      "custom": {
        "text": "Projects"
      },
      "callbacks": {
        "onClick": [
          {
            "navigate": {
              "type": "internal",
              "url": "/Projects"
            }
          }
        ]
      }
    },
    "TextBox1352": {
      "custom": {
        "text": "Blog"
      },
      "callbacks": {
        "onClick": [
          {
            "navigate": {
              "type": "internal",
              "url": "/Blog"
            }
          }
        ]
      }
    },
    "TextBox1353": {
      "custom": {
        "text": "About"
      },
      "callbacks": {
        "onClick": [
          {
            "navigate": {
              "type": "external",
              "url": "/#About",
              "target": "_self"
            }
          }
        ]
      }
    },
    "TextBox1349": {
      "custom": {
        "text": "Book a call"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image351": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/blackArrow.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox1345": {
      "custom": {
        "text": "About"
      },
      "callbacks": {
        "onClick": [
          {
            "navigate": {
              "type": "external",
              "url": "/#About",
              "target": "_self"
            }
          }
        ]
      }
    },
    "TextBox1346": {
      "custom": {
        "text": "Blog"
      },
      "callbacks": {
        "onClick": [
          {
            "navigate": {
              "type": "internal",
              "url": "/Blog"
            }
          }
        ]
      }
    },
    "TextBox1347": {
      "custom": {
        "text": "Projects"
      },
      "callbacks": {
        "onClick": [
          {
            "navigate": {
              "type": "internal",
              "url": "/Projects"
            }
          }
        ]
      }
    },
    "TextBox1348": {
      "custom": {
        "text": "Services"
      },
      "callbacks": {
        "onClick": [
          {
            "navigate": {
              "type": "external",
              "url": "/#Services",
              "target": "_self"
            }
          }
        ]
      }
    },
    "Image350": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/blackArrow.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox1344": {
      "custom": {
        "text": "Book a call"
      },
      "callbacks": {
        "onClick": [
          {
            "navigate": {
              "type": "internal",
              "url": "/BookCall"
            }
          }
        ]
      }
    }
  },
  "logo-design-trends-to-avoid": {
    "Flex1394": {
      "callbacks": {}
    },
    "Flex1393": {
      "callbacks": {}
    },
    "Flex1392": {
      "callbacks": {}
    },
    "Flex1530": {
      "callbacks": {}
    },
    "Flex1525": {
      "callbacks": {}
    },
    "Flex1515": {
      "callbacks": {}
    },
    "Flex1516": {
      "callbacks": {
        "onClick": [
          {
            "navigate": {
              "type": "internal",
              "url": "/Blog/design-tips-for-designers"
            }
          }
        ]
      }
    },
    "Flex1526": {
      "callbacks": {}
    },
    "Flex1517": {
      "callbacks": {
        "onClick": [
          {
            "navigate": {
              "type": "internal",
              "url": "/Blog/how-to-build-rapport"
            }
          }
        ]
      }
    },
    "Flex1518": {
      "callbacks": {}
    },
    "Flex1527": {
      "callbacks": {}
    },
    "Flex1519": {
      "callbacks": {
        "onClick": [
          {
            "navigate": {
              "type": "internal",
              "url": "/Blog/free-website-tools"
            }
          }
        ]
      }
    },
    "Flex1520": {
      "callbacks": {}
    },
    "Flex1528": {
      "callbacks": {}
    },
    "Flex1521": {
      "callbacks": {
        "onClick": [
          {
            "navigate": {
              "type": "internal",
              "url": "/Blog/logo-design-trends-to-avoid"
            }
          }
        ]
      }
    },
    "Flex1522": {
      "callbacks": {}
    },
    "Flex1529": {
      "callbacks": {}
    },
    "Flex1523": {
      "callbacks": {
        "onClick": [
          {
            "navigate": {
              "type": "internal",
              "url": "/Blog/best-UI-design-tools"
            }
          }
        ]
      }
    },
    "Flex1524": {
      "callbacks": {}
    },
    "Flex1406": {
      "callbacks": {}
    },
    "Flex1405": {
      "callbacks": {}
    },
    "Flex1404": {
      "callbacks": {}
    },
    "Flex1401": {
      "callbacks": {}
    },
    "Flex1395": {
      "callbacks": {}
    },
    "Flex1396": {
      "callbacks": {}
    },
    "Flex1397": {
      "callbacks": {}
    },
    "Flex1402": {
      "callbacks": {}
    },
    "Flex1398": {
      "callbacks": {}
    },
    "Flex1399": {
      "callbacks": {}
    },
    "Flex1400": {
      "callbacks": {}
    },
    "Flex1403": {
      "callbacks": {}
    },
    "Flex1412": {
      "callbacks": {}
    },
    "Flex1411": {
      "callbacks": {}
    },
    "Flex1408": {
      "callbacks": {}
    },
    "Flex1409": {
      "callbacks": {}
    },
    "Flex1407": {
      "callbacks": {}
    },
    "Flex1410": {
      "callbacks": {}
    },
    "Flex1420": {
      "callbacks": {}
    },
    "Flex1419": {
      "callbacks": {}
    },
    "Flex1418": {
      "callbacks": {}
    },
    "Flex1416": {
      "callbacks": {
        "onClick": [
          {
            "navigate": {
              "type": "internal",
              "url": "/BookCall"
            }
          }
        ]
      }
    },
    "Menu24": {
      "custom": {
        "open": false,
        "iconHeight": 24,
        "iconWidth": 24,
        "gap": "",
        "alignRight": true
      },
      "callbacks": {
        "onClick": []
      }
    },
    "Flex1417": {
      "callbacks": {}
    },
    "Flex1415": {
      "callbacks": {}
    },
    "Flex1414": {
      "callbacks": {}
    },
    "Flex1413": {
      "callbacks": {
        "onClick": [
          {
            "navigate": {
              "type": "internal",
              "url": "/BookCall"
            }
          }
        ]
      }
    },
    "Flex1431": {
      "callbacks": {}
    },
    "Flex1430": {
      "callbacks": {}
    },
    "Flex1427": {
      "callbacks": {}
    },
    "Flex1428": {
      "callbacks": {}
    },
    "Flex1425": {
      "callbacks": {}
    },
    "Flex1421": {
      "callbacks": {}
    },
    "Flex1422": {
      "callbacks": {}
    },
    "Flex1423": {
      "callbacks": {}
    },
    "Flex1426": {
      "callbacks": {}
    },
    "Flex1424": {
      "callbacks": {
        "onClick": [
          {
            "navigate": {
              "type": "external",
              "url": "mailto:hi@folio.com?subject=Email",
              "target": "_blank"
            }
          }
        ]
      }
    },
    "Flex1429": {
      "callbacks": {}
    },
    "TextBox1517": {
      "custom": {
        "text": "Related Posts"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox1518": {
      "custom": {
        "text": "BLOGS"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox1722": {
      "custom": {
        "text": "Design tips for designers, that cover everything you need"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox1702": {
      "custom": {
        "text": "April 16, 2021 "
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox1703": {
      "custom": {
        "text": "•"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox1704": {
      "custom": {
        "text": "6 mins"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image413": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/warrow.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox1705": {
      "custom": {
        "text": "Read the article"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox1723": {
      "custom": {
        "text": "How to build rapport with your web design clients"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox1706": {
      "custom": {
        "text": "Read the article"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image414": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/warrow.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox1707": {
      "custom": {
        "text": "5 mins"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox1708": {
      "custom": {
        "text": "•"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox1709": {
      "custom": {
        "text": "April 16, 2021 "
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox1724": {
      "custom": {
        "text": "Top 6 free website mockup tools 2021"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox1710": {
      "custom": {
        "text": "Read the article"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image415": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/warrow.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox1711": {
      "custom": {
        "text": "5 mins"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox1712": {
      "custom": {
        "text": "•"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox1713": {
      "custom": {
        "text": "April 16, 2021 "
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox1725": {
      "custom": {
        "text": "Logo design trends to avoid in 2021"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox1714": {
      "custom": {
        "text": "Read the article"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image416": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/warrow.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox1715": {
      "custom": {
        "text": "7 mins"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox1716": {
      "custom": {
        "text": "•"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox1717": {
      "custom": {
        "text": "April 16, 2021 "
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox1726": {
      "custom": {
        "text": "22 best UI design tools"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox1718": {
      "custom": {
        "text": "Read the article"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image417": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/warrow.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox1719": {
      "custom": {
        "text": "7 mins"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox1720": {
      "custom": {
        "text": "•"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox1721": {
      "custom": {
        "text": "April 16, 2021 "
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox1532": {
      "custom": {
        "text": "We can make it convenient. Where is the debt option is most times to. He repels, for nothing is asperated. And even from where no one. But he accepts that."
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox1533": {
      "custom": {
        "text": "The distinction, or what the accusers like , does not matter. That is the pleasure which the flexibility of accepting the pains from the pleasure of repudiating. That he was laborious but a pleasure, or"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox1534": {
      "custom": {
        "text": "Let him be repulsed by those who have softened those times. And even from where no one. But he accepts that. They are in the accusers when they are in the rejection of things or. There is pleasure from there is pleasure from wise times. From the pleasures of things I want to reveal something to those who know nothing."
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox1535": {
      "custom": {
        "text": "We can make it convenient. Where is the debt option is most times to. He repels, for nothing is repulsed."
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox1536": {
      "custom": {
        "text": "The distinction, or what the accusers like, does not matter"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox1537": {
      "custom": {
        "text": "And even from where no one. But he accepts that"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox1538": {
      "custom": {
        "text": "They are among the accusers"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox1539": {
      "custom": {
        "text": "What we can do is to bear those things"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox1540": {
      "custom": {
        "text": "Dissolved by pleasures and pleasures, the pain of which you owe here results in a laborious one"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox1541": {
      "custom": {
        "text": "A little something and a great pain from him to us. And that whosoever shall receive it shall come with labor. The distinction, or what the accusers like, does not matter. That is the pleasure which the flexibility of accepting the pains from the pleasure of repudiating. That he was laborious but a pleasure, or"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox1519": {
      "custom": {
        "text": "And even from where no one. But he accepts that."
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox1520": {
      "custom": {
        "text": "•"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox1521": {
      "custom": {
        "text": "•"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox1522": {
      "custom": {
        "text": "We can make it convenient. Where is the debt option is most times to."
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox1523": {
      "custom": {
        "text": "•"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox1524": {
      "custom": {
        "text": "That he was laborious but a pleasure, or"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox1525": {
      "custom": {
        "text": "That he was laborious but a pleasure, or"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox1526": {
      "custom": {
        "text": "3."
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox1527": {
      "custom": {
        "text": "We can make it convenient. Where is the debt option is most times to."
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox1528": {
      "custom": {
        "text": "2."
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox1529": {
      "custom": {
        "text": "1. "
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox1530": {
      "custom": {
        "text": "And even from where no one. But he accepts that."
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox1531": {
      "custom": {
        "text": "Because they really are. The very flight of them. It is difficult to avoid the option and to distinguish the great services."
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image381": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/darrow.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox1545": {
      "custom": {
        "text": "Logo design trends to avoid in 2021"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox1542": {
      "custom": {
        "text": "April 16, 2021"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox1543": {
      "custom": {
        "text": "•"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox1544": {
      "custom": {
        "text": "7 mins"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image382": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/project3.png"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image385": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/logo.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "navigate": {
              "type": "internal",
              "url": "/"
            }
          }
        ]
      }
    },
    "TextBox1552": {
      "custom": {
        "text": "Services"
      },
      "callbacks": {
        "onClick": [
          {
            "navigate": {
              "type": "external",
              "url": "/#Services",
              "target": "_self"
            }
          }
        ]
      }
    },
    "TextBox1553": {
      "custom": {
        "text": "Projects"
      },
      "callbacks": {
        "onClick": [
          {
            "navigate": {
              "type": "internal",
              "url": "/Projects"
            }
          }
        ]
      }
    },
    "TextBox1554": {
      "custom": {
        "text": "Blog"
      },
      "callbacks": {
        "onClick": [
          {
            "navigate": {
              "type": "internal",
              "url": "/Blog"
            }
          }
        ]
      }
    },
    "TextBox1555": {
      "custom": {
        "text": "About"
      },
      "callbacks": {
        "onClick": [
          {
            "navigate": {
              "type": "external",
              "url": "/#About",
              "target": "_self"
            }
          }
        ]
      }
    },
    "TextBox1551": {
      "custom": {
        "text": "Book a call"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image384": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/blackArrow.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox1547": {
      "custom": {
        "text": "About"
      },
      "callbacks": {
        "onClick": [
          {
            "navigate": {
              "type": "external",
              "url": "/#About",
              "target": "_self"
            }
          }
        ]
      }
    },
    "TextBox1548": {
      "custom": {
        "text": "Blog"
      },
      "callbacks": {
        "onClick": [
          {
            "navigate": {
              "type": "internal",
              "url": "/Blog"
            }
          }
        ]
      }
    },
    "TextBox1549": {
      "custom": {
        "text": "Projects"
      },
      "callbacks": {
        "onClick": [
          {
            "navigate": {
              "type": "internal",
              "url": "/Projects"
            }
          }
        ]
      }
    },
    "TextBox1550": {
      "custom": {
        "text": "Services"
      },
      "callbacks": {
        "onClick": [
          {
            "navigate": {
              "type": "external",
              "url": "/#Services",
              "target": "_self"
            }
          }
        ]
      }
    },
    "Image383": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/blackArrow.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox1546": {
      "custom": {
        "text": "Book a call"
      },
      "callbacks": {
        "onClick": [
          {
            "navigate": {
              "type": "internal",
              "url": "/BookCall"
            }
          }
        ]
      }
    },
    "Link317": {
      "custom": {
        "text": "Style Guide",
        "url": "/"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Link318": {
      "custom": {
        "text": "Instructions",
        "url": "/"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Link319": {
      "custom": {
        "text": "Image License Info",
        "url": "/"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox1567": {
      "custom": {
        "text": "/"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox1568": {
      "custom": {
        "text": "/"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox1569": {
      "custom": {
        "text": "/"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Link320": {
      "custom": {
        "text": "Changelog",
        "url": "/"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox1570": {
      "custom": {
        "text": "/"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Link321": {
      "custom": {
        "text": "Weflow",
        "url": "/"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox1571": {
      "custom": {
        "text": ". Powered by"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Link322": {
      "custom": {
        "text": "Conversionflow",
        "url": "/"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox1572": {
      "custom": {
        "text": "© All rights reserved. "
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox1556": {
      "custom": {
        "text": "Contact"
      },
      "callbacks": {
        "onClick": [
          {
            "navigate": {
              "type": "internal",
              "url": "/BookCall"
            }
          }
        ]
      }
    },
    "TextBox1557": {
      "custom": {
        "text": "Driblle"
      },
      "callbacks": {
        "onClick": [
          {
            "navigate": {
              "type": "external",
              "url": "https://dribbble.com/",
              "target": "_blank"
            }
          }
        ]
      }
    },
    "TextBox1558": {
      "custom": {
        "text": "About"
      },
      "callbacks": {
        "onClick": [
          {
            "navigate": {
              "type": "external",
              "url": "/#About",
              "target": "_self"
            }
          }
        ]
      }
    },
    "TextBox1559": {
      "custom": {
        "text": "Twitter"
      },
      "callbacks": {
        "onClick": [
          {
            "navigate": {
              "type": "external",
              "url": "https://twitter.com/home",
              "target": "_blank"
            }
          }
        ]
      }
    },
    "TextBox1560": {
      "custom": {
        "text": "Projects"
      },
      "callbacks": {
        "onClick": [
          {
            "navigate": {
              "type": "internal",
              "url": "/Projects"
            }
          }
        ]
      }
    },
    "TextBox1561": {
      "custom": {
        "text": "Experience"
      },
      "callbacks": {
        "onClick": [
          {
            "navigate": {
              "type": "external",
              "url": "/#Experience",
              "target": "_blank"
            }
          }
        ]
      }
    },
    "TextBox1562": {
      "custom": {
        "text": "Instagram"
      },
      "callbacks": {
        "onClick": [
          {
            "navigate": {
              "type": "external",
              "url": "https://www.instagram.com/",
              "target": "_blank"
            }
          }
        ]
      }
    },
    "TextBox1563": {
      "custom": {
        "text": "Blog"
      },
      "callbacks": {
        "onClick": [
          {
            "navigate": {
              "type": "internal",
              "url": "/Blog"
            }
          }
        ]
      }
    },
    "TextBox1564": {
      "custom": {
        "text": "Services"
      },
      "callbacks": {
        "onClick": [
          {
            "navigate": {
              "type": "external",
              "url": "/#Services",
              "target": "_self"
            }
          }
        ]
      }
    },
    "TextBox1566": {
      "custom": {
        "text": "4353 Delaware Avenue, San Francisco, USA"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image387": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/flogo.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "navigate": {
              "type": "internal",
              "url": "/"
            }
          }
        ]
      }
    },
    "TextBox1565": {
      "custom": {
        "text": "hi@thefolio.com"
      },
      "callbacks": {
        "onClick": []
      }
    },
    "Image386": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/mailIco.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox1573": {
      "custom": {
        "text": "Let's get on a call."
      },
      "callbacks": {
        "onClick": [
          {
            "navigate": {
              "type": "external",
              "url": "tel:+889-776-899",
              "target": "_blank"
            }
          }
        ]
      }
    },
    "TextBox1574": {
      "custom": {
        "text": "Ready to make something kickass?"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    }
  },
  "best-UI-design-tools": {
    "Flex1023": {
      "callbacks": {}
    },
    "Flex1022": {
      "callbacks": {}
    },
    "Flex1021": {
      "callbacks": {}
    },
    "Flex1019": {
      "callbacks": {
        "onClick": [
          {
            "navigate": {
              "type": "internal",
              "url": "/BookCall"
            }
          }
        ]
      }
    },
    "Menu19": {
      "custom": {
        "open": false,
        "iconHeight": 24,
        "iconWidth": 24,
        "gap": "",
        "alignRight": true
      },
      "callbacks": {
        "onClick": []
      }
    },
    "Flex1020": {
      "callbacks": {}
    },
    "Flex1018": {
      "callbacks": {}
    },
    "Flex1017": {
      "callbacks": {}
    },
    "Flex1016": {
      "callbacks": {
        "onClick": [
          {
            "navigate": {
              "type": "internal",
              "url": "/BookCall"
            }
          }
        ]
      }
    },
    "Flex1025": {
      "callbacks": {}
    },
    "Flex1037": {
      "callbacks": {}
    },
    "Flex1038": {
      "callbacks": {}
    },
    "Flex1040": {
      "callbacks": {}
    },
    "Flex1043": {
      "callbacks": {}
    },
    "Flex1046": {
      "callbacks": {}
    },
    "Flex1047": {
      "callbacks": {}
    },
    "Flex1048": {
      "callbacks": {}
    },
    "Flex1052": {
      "callbacks": {}
    },
    "Flex1049": {
      "callbacks": {}
    },
    "Flex1050": {
      "callbacks": {}
    },
    "Flex1051": {
      "callbacks": {}
    },
    "Flex1036": {
      "callbacks": {}
    },
    "Flex1035": {
      "callbacks": {}
    },
    "Flex1033": {
      "callbacks": {}
    },
    "Flex1034": {
      "callbacks": {}
    },
    "Flex1032": {
      "callbacks": {}
    },
    "Flex1054": {
      "callbacks": {}
    },
    "Flex1065": {
      "callbacks": {}
    },
    "Flex1064": {
      "callbacks": {}
    },
    "Flex1061": {
      "callbacks": {}
    },
    "Flex1062": {
      "callbacks": {}
    },
    "Flex1059": {
      "callbacks": {}
    },
    "Flex1055": {
      "callbacks": {}
    },
    "Flex1056": {
      "callbacks": {}
    },
    "Flex1057": {
      "callbacks": {}
    },
    "Flex1060": {
      "callbacks": {}
    },
    "Flex1058": {
      "callbacks": {
        "onClick": [
          {
            "navigate": {
              "type": "external",
              "url": "mailto:hi@folio.com?subject=Email",
              "target": "_blank"
            }
          }
        ]
      }
    },
    "Flex1063": {
      "callbacks": {}
    },
    "Flex1085": {
      "callbacks": {}
    },
    "Flex1084": {
      "callbacks": {}
    },
    "Flex1082": {
      "callbacks": {}
    },
    "Flex1447": {
      "callbacks": {}
    },
    "Flex1442": {
      "callbacks": {}
    },
    "Flex1432": {
      "callbacks": {}
    },
    "Flex1433": {
      "callbacks": {
        "onClick": [
          {
            "navigate": {
              "type": "internal",
              "url": "/Blog/best-UI-design-tools"
            }
          }
        ]
      }
    },
    "Flex1443": {
      "callbacks": {}
    },
    "Flex1434": {
      "callbacks": {}
    },
    "Flex1435": {
      "callbacks": {
        "onClick": [
          {
            "navigate": {
              "type": "internal",
              "url": "/Blog/logo-design-trends-to-avoid"
            }
          }
        ]
      }
    },
    "Flex1444": {
      "callbacks": {}
    },
    "Flex1436": {
      "callbacks": {}
    },
    "Flex1437": {
      "callbacks": {
        "onClick": [
          {
            "navigate": {
              "type": "internal",
              "url": "/Blog/free-website-tools"
            }
          }
        ]
      }
    },
    "Flex1445": {
      "callbacks": {}
    },
    "Flex1438": {
      "callbacks": {}
    },
    "Flex1439": {
      "callbacks": {
        "onClick": [
          {
            "navigate": {
              "type": "internal",
              "url": "/Blog/how-to-build-rapport"
            }
          }
        ]
      }
    },
    "Flex1446": {
      "callbacks": {}
    },
    "Flex1440": {
      "callbacks": {
        "onClick": [
          {
            "navigate": {
              "type": "internal",
              "url": "/Blog/design-tips-for-designers"
            }
          }
        ]
      }
    },
    "Flex1441": {
      "callbacks": {}
    },
    "Image298": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/logo.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "navigate": {
              "type": "internal",
              "url": "/"
            }
          }
        ]
      }
    },
    "TextBox978": {
      "custom": {
        "text": "Services"
      },
      "callbacks": {
        "onClick": [
          {
            "navigate": {
              "type": "external",
              "url": "/#Services",
              "target": "_self"
            }
          }
        ]
      }
    },
    "TextBox979": {
      "custom": {
        "text": "Projects"
      },
      "callbacks": {
        "onClick": [
          {
            "navigate": {
              "type": "internal",
              "url": "/Projects"
            }
          }
        ]
      }
    },
    "TextBox980": {
      "custom": {
        "text": "Blog"
      },
      "callbacks": {
        "onClick": [
          {
            "navigate": {
              "type": "internal",
              "url": "/Blog"
            }
          }
        ]
      }
    },
    "TextBox981": {
      "custom": {
        "text": "About"
      },
      "callbacks": {
        "onClick": [
          {
            "navigate": {
              "type": "external",
              "url": "/#About",
              "target": "_self"
            }
          }
        ]
      }
    },
    "TextBox977": {
      "custom": {
        "text": "Book a call"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image297": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/blackArrow.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox973": {
      "custom": {
        "text": "About"
      },
      "callbacks": {
        "onClick": [
          {
            "navigate": {
              "type": "external",
              "url": "/#About",
              "target": "_self"
            }
          }
        ]
      }
    },
    "TextBox974": {
      "custom": {
        "text": "Blog"
      },
      "callbacks": {
        "onClick": [
          {
            "navigate": {
              "type": "internal",
              "url": "/Blog"
            }
          }
        ]
      }
    },
    "TextBox975": {
      "custom": {
        "text": "Projects"
      },
      "callbacks": {
        "onClick": [
          {
            "navigate": {
              "type": "internal",
              "url": "/Projects"
            }
          }
        ]
      }
    },
    "TextBox976": {
      "custom": {
        "text": "Services"
      },
      "callbacks": {
        "onClick": [
          {
            "navigate": {
              "type": "external",
              "url": "/#Services",
              "target": "_self"
            }
          }
        ]
      }
    },
    "Image296": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/blackArrow.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox972": {
      "custom": {
        "text": "Book a call"
      },
      "callbacks": {
        "onClick": [
          {
            "navigate": {
              "type": "internal",
              "url": "/BookCall"
            }
          }
        ]
      }
    },
    "TextBox990": {
      "custom": {
        "text": "A little something and a great pain from him to us. And that whosoever shall receive it shall come with labor. The distinction, or what the accusers like, does not matter. That is the pleasure which the flexibility of accepting the pains from the pleasure of repudiating. That he was laborious but a pleasure, or"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox991": {
      "custom": {
        "text": "Dissolved by pleasures and pleasures, the pain of which you owe here results in a laborious one"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox995": {
      "custom": {
        "text": "What we can do is to bear those things"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox996": {
      "custom": {
        "text": "They are among the accusers"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox997": {
      "custom": {
        "text": "And even from where no one. But he accepts that"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox998": {
      "custom": {
        "text": "The distinction, or what the accusers like, does not matter"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox1000": {
      "custom": {
        "text": "We can make it convenient. Where is the debt option is most times to. He repels, for nothing is repulsed."
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox1001": {
      "custom": {
        "text": "Let him be repulsed by those who have softened those times. And even from where no one. But he accepts that. They are in the accusers when they are in the rejection of things or. There is pleasure from there is pleasure from wise times. From the pleasures of things I want to reveal something to those who know nothing."
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox1002": {
      "custom": {
        "text": "The distinction, or what the accusers like , does not matter. That is the pleasure which the flexibility of accepting the pains from the pleasure of repudiating. That he was laborious but a pleasure, or"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox1021": {
      "custom": {
        "text": "We can make it convenient. Where is the debt option is most times to. He repels, for nothing is asperated. And even from where no one. But he accepts that."
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox999": {
      "custom": {
        "text": "Because they really are. The very flight of them. It is difficult to avoid the option and to distinguish the great services."
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox1005": {
      "custom": {
        "text": "And even from where no one. But he accepts that."
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox1007": {
      "custom": {
        "text": "1. "
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox1008": {
      "custom": {
        "text": "2."
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox1009": {
      "custom": {
        "text": "We can make it convenient. Where is the debt option is most times to."
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox1010": {
      "custom": {
        "text": "3."
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox1011": {
      "custom": {
        "text": "That he was laborious but a pleasure, or"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox1012": {
      "custom": {
        "text": "That he was laborious but a pleasure, or"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox1019": {
      "custom": {
        "text": "•"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox1014": {
      "custom": {
        "text": "We can make it convenient. Where is the debt option is most times to."
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox1018": {
      "custom": {
        "text": "•"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox1016": {
      "custom": {
        "text": "•"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox1017": {
      "custom": {
        "text": "And even from where no one. But he accepts that."
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image301": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/project6.png"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox989": {
      "custom": {
        "text": "22 best UI design tools"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox986": {
      "custom": {
        "text": "7 mins"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox987": {
      "custom": {
        "text": "•"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox988": {
      "custom": {
        "text": "April 16, 2021"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image302": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/darrow.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Link293": {
      "custom": {
        "text": "Style Guide",
        "url": "/"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Link294": {
      "custom": {
        "text": "Instructions",
        "url": "/"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Link295": {
      "custom": {
        "text": "Image License Info",
        "url": "/"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox1033": {
      "custom": {
        "text": "/"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox1034": {
      "custom": {
        "text": "/"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox1035": {
      "custom": {
        "text": "/"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Link296": {
      "custom": {
        "text": "Changelog",
        "url": "/"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox1036": {
      "custom": {
        "text": "/"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Link297": {
      "custom": {
        "text": "Weflow",
        "url": "/"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox1037": {
      "custom": {
        "text": ". Powered by"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Link298": {
      "custom": {
        "text": "Conversionflow",
        "url": "/"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox1038": {
      "custom": {
        "text": "© All rights reserved. "
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox1022": {
      "custom": {
        "text": "Contact"
      },
      "callbacks": {
        "onClick": [
          {
            "navigate": {
              "type": "internal",
              "url": "/BookCall"
            }
          }
        ]
      }
    },
    "TextBox1023": {
      "custom": {
        "text": "Driblle"
      },
      "callbacks": {
        "onClick": [
          {
            "navigate": {
              "type": "external",
              "url": "https://dribbble.com/",
              "target": "_blank"
            }
          }
        ]
      }
    },
    "TextBox1024": {
      "custom": {
        "text": "About"
      },
      "callbacks": {
        "onClick": [
          {
            "navigate": {
              "type": "external",
              "url": "/#About",
              "target": "_self"
            }
          }
        ]
      }
    },
    "TextBox1025": {
      "custom": {
        "text": "Twitter"
      },
      "callbacks": {
        "onClick": [
          {
            "navigate": {
              "type": "external",
              "url": "https://twitter.com/home",
              "target": "_blank"
            }
          }
        ]
      }
    },
    "TextBox1026": {
      "custom": {
        "text": "Projects"
      },
      "callbacks": {
        "onClick": [
          {
            "navigate": {
              "type": "internal",
              "url": "/Projects"
            }
          }
        ]
      }
    },
    "TextBox1027": {
      "custom": {
        "text": "Experience"
      },
      "callbacks": {
        "onClick": [
          {
            "navigate": {
              "type": "external",
              "url": "/#Experience",
              "target": "_blank"
            }
          }
        ]
      }
    },
    "TextBox1028": {
      "custom": {
        "text": "Instagram"
      },
      "callbacks": {
        "onClick": [
          {
            "navigate": {
              "type": "external",
              "url": "https://www.instagram.com/",
              "target": "_blank"
            }
          }
        ]
      }
    },
    "TextBox1029": {
      "custom": {
        "text": "Blog"
      },
      "callbacks": {
        "onClick": [
          {
            "navigate": {
              "type": "internal",
              "url": "/Blog"
            }
          }
        ]
      }
    },
    "TextBox1030": {
      "custom": {
        "text": "Services"
      },
      "callbacks": {
        "onClick": [
          {
            "navigate": {
              "type": "external",
              "url": "/#Services",
              "target": "_self"
            }
          }
        ]
      }
    },
    "TextBox1032": {
      "custom": {
        "text": "4353 Delaware Avenue, San Francisco, USA"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image304": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/flogo.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "navigate": {
              "type": "internal",
              "url": "/"
            }
          }
        ]
      }
    },
    "TextBox1031": {
      "custom": {
        "text": "hi@thefolio.com"
      },
      "callbacks": {
        "onClick": []
      }
    },
    "Image303": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/mailIco.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox1039": {
      "custom": {
        "text": "Let's get on a call."
      },
      "callbacks": {
        "onClick": [
          {
            "navigate": {
              "type": "external",
              "url": "tel:+889-776-899",
              "target": "_blank"
            }
          }
        ]
      }
    },
    "TextBox1040": {
      "custom": {
        "text": "Ready to make something kickass?"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox1067": {
      "custom": {
        "text": "BLOGS"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox1068": {
      "custom": {
        "text": "Related Posts"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox1595": {
      "custom": {
        "text": "22 best UI design tools"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox1575": {
      "custom": {
        "text": "April 16, 2021 "
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox1576": {
      "custom": {
        "text": "•"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox1577": {
      "custom": {
        "text": "7 mins"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image388": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/warrow.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox1578": {
      "custom": {
        "text": "Read the article"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox1596": {
      "custom": {
        "text": "Logo design trends to avoid in 2021"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox1579": {
      "custom": {
        "text": "April 16, 2021 "
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox1580": {
      "custom": {
        "text": "•"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox1581": {
      "custom": {
        "text": "7 mins"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image389": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/warrow.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox1582": {
      "custom": {
        "text": "Read the article"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox1597": {
      "custom": {
        "text": "Top 6 free website mockup tools 2021"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox1583": {
      "custom": {
        "text": "April 16, 2021 "
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox1584": {
      "custom": {
        "text": "•"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox1585": {
      "custom": {
        "text": "5 mins"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image390": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/warrow.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox1586": {
      "custom": {
        "text": "Read the article"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox1598": {
      "custom": {
        "text": "How to build rapport with your web design clients"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox1587": {
      "custom": {
        "text": "April 16, 2021 "
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox1588": {
      "custom": {
        "text": "•"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox1589": {
      "custom": {
        "text": "5 mins"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image391": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/warrow.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox1590": {
      "custom": {
        "text": "Read the article"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox1599": {
      "custom": {
        "text": "Design tips for designers, that cover everything you need"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox1591": {
      "custom": {
        "text": "Read the article"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image392": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/warrow.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox1592": {
      "custom": {
        "text": "6 mins"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox1593": {
      "custom": {
        "text": "•"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox1594": {
      "custom": {
        "text": "April 16, 2021 "
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    }
  },
  "pic": {
    "Overlay6": {
      "custom": {
        "open": false,
        "closeOverlayAfter": ""
      },
      "callbacks": {}
    },
    "Image439": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/testimonial1.jpeg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    }
  }
}};

useStore.setState(desktopModeProps);

export default useStore;
