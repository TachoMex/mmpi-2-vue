const scales = [
  {
    "title": "Response Inconsistency Scales",
    "items": [
      {
        "name": "VRIN",
        "title": "Variable Response Inconsistency",
        "text": "Designed to detect random responding",
        "baseScore": 0,
        "answers": [[3, true, 39, true, 1], [6, true, 90, false, 1], [6, false, 90, true, 1], [9, false, 56, false, 1], [28, true, 59, false, 1], [31, true, 299, false, 1], [32, false, 316, true, 1], [40, true, 176, true, 1], [46, true, 265, false, 1], [48, true, 184, true, 1], [49, true, 280, false, 1], [73, true, 377, false, 1], [81, true, 284, false, 1], [81, false, 284, true, 1], [83, true, 288, true, 1], [84, true, 105, false, 1], [86, true, 359, false, 1], [95, false, 388, true, 1], [99, false, 138, true, 1], [103, true, 344, false, 1], [110, true, 374, false, 1], [125, false, 195, false, 1], [135, false, 482, true, 1], [136, true, 507, false, 1], [136, false, 507, true, 1], [152, false, 464, false, 1], [161, true, 185, false, 1], [161, false, 185, true, 1], [165, false, 565, false, 1], [166, true, 268, false, 1], [166, false, 268, true, 1], [167, true, 243, false, 1], [167, false, 243, true, 1], [196, false, 415, true, 1], [199, true, 467, false, 1], [199, false, 467, true, 1], [226, true, 267, false, 1], [259, false, 333, true, 1], [262, false, 275, false, 1], [290, true, 556, false, 1], [290, false, 556, true, 1], [339, false, 394, true, 1], [349, true, 515, false, 1], [349, false, 515, true, 1], [350, false, 521, true, 1], [353, true, 370, false, 1], [353, false, 370, true, 1], [364, false, 554, true, 1], [369, false, 421, true, 1], [372, true, 405, false, 1], [372, false, 405, true, 1], [380, true, 562, false, 1], [395, true, 435, false, 1], [395, false, 435, true, 1], [396, true, 403, false, 1], [396, false, 403, true, 1], [411, true, 485, false, 1], [414, false, 485, true, 1], [472, true, 533, false, 1], [472, false, 533, true, 1], [491, true, 509, false, 1], [506, true, 520, false, 1], [506, false, 520, true, 1], [513, true, 542, false, 1]],
        "tScores": {
          "male": [31, 34, 38, 42, 46, 50, 54, 57, 61, 65, 69, 73, 76, 80, 84, 88, 92, 96, 99, 103, 107, 111, 115, 118, 120],
          "female": [30, 34, 38, 42, 46, 50, 54, 58, 62, 66, 70, 74, 78, 82, 86, 90, 94, 98, 102, 106, 110, 114, 118, 120]
        },
        "indications": {
          "VRIN>=80": ["random responding"],
          "VRIN<40": ["hypervigilance"]
        }
      },
      {
        "name": "TRIN",
        "title": "True Response Inconsistency",
        "text": "Designed to detect fixed responding",
        "baseScore": 9,
        "answers": [[3, true, 39, true, 1], [12, true, 166, true, 1], [40, true, 176, true, 1], [48, true, 184, true, 1], [63, true, 27, true, 1], [65, true, 95, true, 1], [73, true, 239, true, 1], [83, true, 288, true, 1], [99, true, 314, true, 1], [125, true, 195, true, 1], [209, true, 351, true, 1], [359, true, 367, true, 1], [377, true, 534, true, 1], [556, true, 560, true, 1], [9, false, 56, false, -1], [65, false, 95, false, -1], [125, false, 195, false, -1], [140, false, 196, false, -1], [152, false, 464, false, -1], [265, false, 360, false, -1], [359, false, 367, false, -1]],
        "tScores": {
          "male": [-114, -107, -99, -92, -85, -78, -71, -64, -57, 50, 57, 65, 72, 79, 86, 93, 100, 107, 114, 120],
          "female": [-118, -111, -103, -95, -88, -80, -73, -65, -58, 50, 58, 65, 73, 80, 88, 95, 103, 111, 118, 120]
        },
        "indications": {
          "TRIN<=-80 || TRIN>=80": ["fixed response set"]
        }
      }
    ]
  },
  {
    "title": "Validity Scales",
    "items": [
      {
        "name": "FBS",
        "title": "Fake Bad Scale",
        "text": "TBA",
        "answers": [[11, true], [12, false], [18, true], [28, true], [30, true], [31, true], [39, true], [40, true], [41, false], [44, true], [57, false], [58, false], [59, true], [81, false], [110, false], [111, true], [117, false], [152, false], [164, false], [176, false], [224, false], [227, false], [248, false], [249, false], [250, false], [252, true], [255, false], [264, false], [274, true], [284, false], [325, true], [339, true], [362, false], [373, false], [374, false], [419, false], [433, false], [464, true], [469, true], [496, false], [505, true], [506, true], [561, false]]
      },
      {
        "name": "F", "code": "F",
        "title": "Infrequency",
        "text": "Used to identify over-reporting",
        "answers": [[6, false], [12, false], [18, true], [24, true], [30, true], [36, true], [42, true], [48, true], [54, true], [60, true], [66, true], [72, true], [78, false], [84, true], [90, false], [96, true], [102, false], [108, false], [114, true], [120, false], [126, false], [132, false], [138, true], [144, true], [150, true], [156, true], [162, true], [168, true], [174, false], [180, true], [186, false], [192, false], [198, true], [204, false], [210, false], [216, true], [222, false], [228, true], [234, true], [240, true], [246, true], [252, true], [258, true], [264, true], [270, true], [276, false], [282, true], [288, true], [294, true], [300, true], [306, true], [312, true], [318, false], [324, true], [330, false], [336, true], [343, false], [349, true], [355, true], [361, true]],
        "tScores": {
          "male": [36, 39, 42, 45, 48, 51, 55, 58, 61, 64, 67, 70, 73, 76, 79, 82, 85, 89, 92, 95, 98, 101, 104, 107, 110, 113, 116, 119, 120],
          "female": [37, 41, 44, 48, 51, 55, 58, 61, 65, 68, 72, 75, 79, 82, 85, 89, 92, 96, 99, 103, 106, 109, 113, 116, 120]
        }
      },
      {
        "name": "Fb",
        "title": "Backside F",
        "text": "Designed to detect changes in responding between first and second half of the test",
        "indications": {
          "Fb>F+20": ["significant change in responding"]
        },
        "answers": [[281, true], [291, true], [303, true], [311, true], [317, true], [319, true], [322, true], [323, true], [329, true], [332, true], [333, true], [334, true], [383, false], [387, true], [395, true], [404, false], [407, true], [431, true], [450, true], [454, true], [463, true], [468, true], [476, true], [478, true], [484, true], [489, true], [501, false], [506, true], [516, true], [517, true], [520, true], [524, true], [525, true], [526, true], [528, true], [530, true], [539, true], [540, true], [544, true], [555, true]],
        "tScores": {
          "male": [42, 46, 51, 55, 59, 63, 67, 71, 75, 79, 83, 87, 92, 96, 100, 104, 108, 112, 116, 120],
          "female": [42, 46, 50, 54, 58, 62, 66, 70, 74, 77, 81, 85, 89, 93, 97, 101, 105, 108, 112, 116, 120]
        }
      },
      {
        "name": "Fp",
        "title": "Infrequency Psychopathology",
        "text": "Designed to detect intentional over-reporting in individuals with psychopathology",
        "indications": {
          "Fp>=100 && VRIN<70 && TRIN<70": "intentional over-reporting"
        },
        "answers": [[51, false], [66, true], [77, false], [90, false], [93, false], [102, false], [114, true], [126, false], [162, true], [192, false], [193, true], [216, true], [228, true], [252, true], [270, true], [276, false], [282, true], [291, true], [294, true], [322, true], [323, true], [336, true], [371, true], [387, true], [478, true], [501, false], [555, true]],
        "tScores": {
          "male": [41, 48, 56, 63, 70, 77, 80, 94, 99, 106, 113, 120],
          "female": [41, 49, 57, 65, 73, 81, 89, 97, 105, 113, 120]
        }
      },
      {
        "name": "L", "code": "L",
        "title": "Uncommon Virtues",
        "comment": "Designed to detect intentional under-reporting",
        "answers": [[16, false], [29, false], [41, false], [51, false], [77, false], [93, false], [102, false], [107, false], [123, false], [139, false], [153, false], [183, false], [203, false], [232, false], [260, false]],
        "tScores": {
          "male": [35, 39, 43, 48, 52, 56, 61, 65, 70, 74, 78, 83, 87, 91, 96, 100],
          "female": [33, 38, 42, 47, 52, 57, 62, 66, 71, 76, 81, 86, 90, 95, 100, 105]
        }
      },
      {
        "name": "K", "code": "K",
        "title": "Correction",
        "answers": [[29, false], [37, false], [58, false], [76, false], [83, true], [110, false], [116, false], [122, false], [127, false], [130, false], [136, false], [148, false], [157, false], [158, false], [167, false], [171, false], [196, false], [213, false], [243, false], [267, false], [284, false], [290, false], [330, false], [338, false], [339, false], [341, false], [346, false], [348, false], [356, false], [365, false]],
        "tScores": {
          "male": [30, 33, 35, 37, 39, 41, 43, 45, 47, 49, 51, 54, 56, 58, 60, 62, 64, 66, 68, 70, 72, 75, 77, 79, 81],
          "female": [30, 32, 35, 37, 39, 41, 43, 46, 48, 50, 52, 54, 56, 59, 61, 63, 65, 67, 70, 72, 74, 76, 78, 81, 83]
        },
        "scoreOffsets": {
          "male": 6,
          "female": 6
        }
      },
      {
        "name": "S",
        "title": "Superlative Self-Presentation",
        "comment": "Developed to identify under-reporting with the entire item pool",
        "answers": [[15, false], [50, false], [58, false], [76, false], [81, false], [87, false], [89, false], [104, false], [110, false], [120, false], [121, true], [123, false], [148, true], [154, false], [184, true], [194, true], [196, false], [205, false], [213, false], [225, false], [264, false], [279, false], [284, false], [290, false], [302, false], [337, false], [341, false], [346, false], [352, false], [373, false], [374, false], [403, false], [420, false], [423, false], [428, false], [430, false], [433, false], [442, false], [445, false], [449, false], [461, false], [486, false], [487, false], [523, false], [534, true], [538, false], [542, false], [545, false], [547, false], [560, true]],
        "tScores": {
          "male": [30, 32, 33, 34, 35, 36, 37, 38, 40, 41, 42, 43, 44, 45, 47, 48, 49, 50, 51, 52, 53, 55, 56, 57, 58, 59, 60, 61, 63, 64, 65, 66, 67, 68, 70, 71, 72, 73, 74, 75, 76, 78, 79],
          "female": [30, 31, 33, 34, 35, 36, 37, 39, 40, 41, 42, 43, 45, 46, 47, 48, 49, 51, 52, 53, 54, 55, 57, 58, 59, 60, 61, 63, 64, 65, 66, 68, 69, 70, 71, 72, 74, 75, 76, 77, 78, 80]
        },
        "scoreOffsets": {
          "male": 8,
          "female": 9
        }
      }
    ]
  },
  {
    "title": "Clinical Scales",
    "items": [
      {
        "name": "Hs", "code": "1",
        "title": "Hypochondriasis",
        "indications": {
          "Hs>=75": ["extreme and sometimes bizarre somatic concerns", "consider somatic delusions", "chronic pain"],
          "55<=Hs<=74": ["somatic complaints"],
          "65<=Hs<=74": ["may develop somatic symptoms in times of stress", "chronic pain"],
          "55<=Hs<=64": ["lacks energy", "demanding", "dissatisfied", "complaining", "whiny"]
        },
        "answers": [[2, false], [3, false], [8, false], [10, false], [18, true], [20, false], [28, true], [39, true], [45, false], [47, false], [53, true], [57, false], [59, true], [91, false], [97, true], [101, true], [111, true], [117, false], [141, false], [143, false], [149, true], [152, false], [164, false], [173, false], [175, true], [176, false], [179, false], [208, false], [224, false], [247, true], [249, false], [255, false]],
        "tScores": {
          "male": [30, 31, 31, 32, 33, 35, 37, 39, 42, 45, 48, 51, 54, 57, 59, 62, 64, 66, 68, 70, 73, 75, 77, 79, 81, 84, 86, 88, 90, 92, 94, 97, 99, 101, 103, 105, 108, 110, 112, 114, 116, 119, 120],
          "female": [30, 33, 35, 38, 40, 43, 46, 49, 51, 54, 56, 59, 61, 63, 65, 67, 69, 71, 73, 76, 78, 80, 82, 84, 86, 88, 90, 92, 94, 97, 99, 101, 103, 105, 107, 109, 111, 113, 115, 117, 120]
        },
        "scoreOffsets": {
          "male": 2,
          "female": 6
        },
        "kCorrection": 0.5
      },
      {
        "name": "D", "code": "2",
        "title": "Depression",
        "indications": {
          "D>=75": ["serious clinical depression", "suicidal ideation", "feelings of unworthiness", "feelings of inadequacy"],
          "65<=D<=74": ["moderate depression", "worried", "somatic complaints"]
        },
        "answers": [[2, false], [5, true], [9, false], [10, false], [15, true], [18, true], [20, false], [29, false], [31, true], [33, false], [37, false], [38, true], [39, true], [43, false], [45, false], [46, true], [49, false], [55, false], [56, true], [68, false], [73, true], [75, false], [76, false], [92, true], [95, false], [109, false], [117, true], [118, false], [127, true], [130, true], [134, false], [140, false], [141, false], [142, false], [143, false], [146, true], [147, true], [148, false], [165, false], [170, true], [175, true], [178, false], [181, true], [188, false], [189, false], [212, false], [215, true], [221, false], [223, false], [226, false], [233, true], [238, false], [245, false], [248, false], [260, false], [267, false], [330, false]],
        "tScores": {
          "male": [30, 32, 34, 36, 38, 40, 42, 45, 47, 50, 52, 54, 57, 59, 61, 62, 64, 66, 68, 70, 72, 74, 76, 78, 80, 81, 83, 85, 87, 89, 91, 93, 95, 97, 98, 100, 102, 104, 106, 108, 110, 112, 114, 115, 117, 119, 120],
          "female": [30, 32, 34, 36, 38, 40, 42, 44, 46, 47, 49, 51, 53, 55, 57, 59, 62, 64, 66, 68, 70, 72, 75, 77, 79, 81, 83, 86, 88, 90, 92, 94, 96, 99, 101, 103, 105, 107, 109, 112, 114, 116, 118, 120]
        },
        "scoreOffsets": {
          "male": 9,
          "female": 10
        },
        "subScales": [
          {
            "name": "D-O",
            "title": "Depression, Obvious",
            "answers": [[2, false], [9, false], [10, false], [15, true], [18, true], [20, false], [31, true], [33, false], [38, true], [39, true], [43, false], [45, false], [46, true], [49, false], [56, true], [73, true], [75, false], [92, true], [95, false], [109, false], [118, false], [127, true], [130, true], [140, false], [141, false], [142, false], [146, true], [147, true], [165, false], [170, true], [175, true], [188, false], [215, true], [223, false], [233, true], [245, false], [248, false], [260, false], [330, false]],
            "tScores": {
              "male": [32, 34, 37, 39, 41, 44, 46, 48, 51, 53, 55, 58, 60, 62, 65, 67, 69, 72, 74, 76, 79, 81, 83, 86, 88, 90, 93, 95, 97, 100, 102, 104, 107, 109, 111, 114, 116, 118, 120],
              "female": [32, 34, 36, 38, 40, 42, 44, 46, 48, 51, 53, 55, 57, 59, 61, 63, 65, 67, 69, 71, 73, 75, 77, 79, 81, 83, 85, 87, 89, 92, 94, 96, 98, 100, 102, 104, 106, 108, 110, 112]
            }
          },
          {
            "name": "D-S",
            "title": "Depression, Subtle",
            "answers": [[5, true], [29, false], [37, false], [55, false], [68, false], [76, false], [117, true], [134, false], [143, false], [148, false], [178, false], [189, false], [212, false], [221, false], [226, false], [238, false], [267, false], [282, true]],
            "tScores": {
              "male": [32, 36, 40, 44, 48, 52, 55, 59, 63, 67, 71, 75, 78],
              "female": [32, 36, 40, 44, 48, 53, 57, 61, 65, 69, 73, 77]
            },
            "scoreOffsets": {
              "male": 6,
              "female": 7
            }
          },
          {
            "name": "D1",
            "title": "Subjective Depression",
            "answers": [[2, false], [9, false], [31, true], [38, true], [39, true], [43, false], [46, true], [49, false], [56, true], [73, true], [75, false], [92, true], [95, false], [109, false], [118, false], [127, true], [130, true], [140, false], [146, true], [147, true], [148, false], [170, true], [175, true], [178, false], [188, false], [189, false], [215, true], [223, true], [223, false], [260, false], [267, false], [330, false]],
            "tScores": {
              "male": [32, 35, 37, 40, 42, 45, 48, 50, 53, 56, 58, 61, 64, 66, 69, 71, 74, 77, 79, 82, 85, 87, 90, 93, 95, 98, 100, 103, 106, 108, 111, 114, 116],
              "female": [32, 34, 37, 39, 41, 44, 46, 48, 51, 53, 56, 58, 60, 63, 65, 67, 70, 72, 75, 77, 79, 82, 84, 86, 89, 91, 94, 96, 98, 101, 103, 105, 108]
            }
          },
          {
            "name": "D2",
            "title": "Psychomotor Retardation",
            "answers": [[9, false], [29, false], [37, false], [38, true], [46, true], [49, false], [55, false], [76, false], [134, false], [170, true], [188, false], [189, false], [212, false], [233, true]],
            "tScores": {
              "male": [30, 32, 37, 43, 48, 54, 59, 65, 70, 76, 81, 87, 92, 98],
              "female": [30, 35, 41, 46, 51, 57, 62, 68, 73, 79, 84, 90, 95]
            },
            "scoreOffsets": {
              "male": 1,
              "female": 2
            }
          },
          {
            "name": "D3",
            "title": "Physical Malfunctioning",
            "answers": [[2, false], [18, true], [20, false], [45, false], [117, true], [141, false], [142, false], [143, false], [148, false], [175, true], [181, true]],
            "tScores": {
              "male": [30, 35, 43, 51, 59, 67, 75, 83, 91, 100, 108, 116],
              "female": [30, 34, 41, 48, 56, 63, 70, 78, 85, 93, 100, 107]
            }
          },
          {
            "name": "D4",
            "title": "Mental Dullness",
            "answers": [[9, false], [10, false], [15, true], [31, true], [38, true], [43, false], [73, true], [75, false], [92, true], [109, false], [147, true], [165, false], [170, true], [188, false], [233, true]],
            "tScores": {
              "male": [38, 43, 48, 53, 58, 62, 67, 72, 77, 82, 86, 91, 96, 101, 105, 110],
              "female": [38, 43, 48, 52, 57, 61, 66, 70, 75, 79, 84, 88, 93, 97, 102, 106]
            }
          },
          {
            "name": "D5",
            "title": "Brooding",
            "answers": [[38, true], [56, true], [75, false], [92, true], [95, false], [127, true], [130, true], [146, true], [170, true], [215, true]],
            "tScores": {
              "male": [40, 45, 51, 57, 62, 68, 74, 79, 85, 91, 96],
              "female": [37, 42, 47, 53, 58, 63, 68, 73, 78, 83, 89]
            }
          }
        ]
      },
      {
        "name": "Hy", "code": "3",
        "title": "Hysteria",
        "indications": {
          "Hy>=75": ["extreme somatic complaints", "consider conversion disorder", "somatic symptoms as reaction to stress", "chronic pain"],
          "65<=Hy<=74": ["somatic symptoms", "chronic pain", "lacks insight concerning causes of symptoms"],
          "55<=Hy<=64": ["somatic complaints", "denial", "immature", "self-centered", "demanding", "suggestible", "affiliative"]
        },
        "answers": [[2, false], [3, false], [7, false], [8, false], [9, false], [10, false], [11, true], [14, false], [18, true], [26, false], [29, false], [31, true], [39, true], [40, true], [44, true], [45, false], [47, false], [58, false], [65, true], [76, false], [81, false], [91, false], [95, false], [98, false], [101, true], [110, false], [115, false], [116, false], [124, false], [125, false], [129, false], [135, false], [141, false], [148, false], [151, false], [152, false], [157, false], [159, false], [161, false], [164, false], [166, true], [167, false], [172, true], [173, false], [175, true], [176, false], [179, false], [185, false], [193, false], [208, false], [213, false], [218, true], [224, false], [230, true], [241, false], [243, false], [249, false], [253, false], [263, false], [265, false]],
        "tScores": {
          "male": [30, 31, 32, 33, 34, 35, 37, 39, 40, 42, 43, 45, 47, 50, 52, 54, 57, 59, 61, 64, 66, 69, 71, 74, 76, 79, 81, 84, 86, 89, 91, 94, 96, 99, 101, 104, 106, 109, 111, 114, 116, 119, 120],
          "female": [30, 31, 32, 32, 34, 35, 36, 38, 39, 41, 43, 45, 47, 49, 51, 54, 56, 58, 61, 63, 65, 68, 70, 73, 75, 77, 80, 82, 84, 87, 89, 90, 92, 94, 96, 99, 101, 104, 106, 108, 111, 113, 115, 118, 120]
        },
        "scoreOffsets": {
          "male": 8,
          "female": 9
        },
        "subScales": [
          {
            "name": "Hy-O",
            "title": "Hysteria, Obvious",
            "answers": [[2, false], [3, false], [8, false], [9, false], [10, false], [11, true], [18, true], [31, true], [39, true], [40, true], [44, true], [45, false], [47, false], [65, true], [91, false], [95, false], [101, true], [115, false], [125, false], [141, false], [152, false], [159, false], [164, false], [166, true], [172, true], [173, false], [175, true], [179, false], [208, false], [218, true], [224, false], [249, false]],
            "tScores": {
              "male": [37, 40, 42, 45, 48, 51, 53, 56, 59, 62, 64, 67, 70, 73, 76, 78, 81, 84, 87, 89, 92, 95, 98, 100, 103, 106, 109, 111, 114, 117, 120],
              "female": [37, 39, 41, 44, 46, 48, 51, 53, 56, 58, 60, 63, 65, 67, 70, 72, 75, 77, 79, 82, 84, 86, 89, 91, 93, 96, 98, 101, 103, 105, 108, 110, 112]
            }
          },
          {
            "name": "Hy-S",
            "title": "Hysteria, Subtle",
            "answers": [[7, false], [14, false], [26, false], [29, false], [58, false], [76, false], [81, false], [98, false], [110, false], [116, false], [124, false], [129, false], [135, false], [148, false], [151, false], [157, false], [161, false], [167, false], [176, false], [185, false], [193, false], [213, false], [230, true], [241, false], [243, false], [253, false], [263, false], [265, false]],
            "tScores": {
              "male": [31, 34, 36, 38, 41, 43, 45, 47, 50, 52, 54, 57, 59, 61, 64, 66, 68, 71, 73, 75, 78],
              "female": [32, 34, 37, 39, 42, 44, 47, 49, 51, 54, 56, 59, 61, 64, 66, 69, 71, 73, 76, 78]
            },
            "scoreOffsets": {
              "male": 8,
              "female": 9
            }
          },
          {
            "name": "Hy1",
            "title": "Denial of Social Anxiety",
            "answers": [[129, false], [161, false], [167, false], [185, false], [243, false], [265, false]],
            "tScores": {
              "male": [30, 34, 40, 45, 51, 56, 61],
              "female": [30, 35, 40, 45, 51, 56, 61]
            }
          },
          {
            "name": "Hy2",
            "title": "Need for Affection",
            "answers": [[26, false], [58, false], [76, false], [81, false], [98, false], [110, false], [124, false], [151, false], [213, false], [230, true], [241, false], [263, false]],
            "tScores": {
              "male": [30, 32, 36, 40, 43, 47, 51, 55, 59, 63, 67, 71],
              "female": [30, 34, 38, 42, 46, 50, 55, 59, 63, 67, 71]
            },
            "scoreOffsets": {
              "male": 1,
              "female": 2
            }
          },
          {
            "name": "Hy3",
            "title": "Lassitude-malaise",
            "answers": [[2, false], [3, false], [9, false], [10, false], [31, true], [39, true], [45, false], [65, true], [95, false], [125, false], [141, false], [148, false], [152, false], [175, true], [218, true]],
            "tScores": {
              "male": [38, 43, 48, 52, 57, 61, 66, 70, 75, 79, 84, 88, 93, 97, 102, 106],
              "female": [39, 43, 47, 51, 55, 59, 63, 67, 71, 75, 79, 83, 87, 91, 95, 99]
            }
          },
          {
            "name": "Hy4",
            "title": "Somatic Complaints",
            "answers": [[8, false], [11, true], [18, true], [40, true], [44, true], [47, false], [91, false], [101, true], [159, false], [164, false], [172, true], [173, false], [176, false], [179, false], [208, false], [224, false], [249, false]],
            "tScores": {
              "male": [38, 43, 48, 52, 57, 62, 67, 72, 77, 82, 86, 91, 96, 101, 106, 111, 115, 120],
              "female": [37, 41, 45, 49, 53, 57, 61, 65, 69, 73, 77, 81, 85, 89, 93, 97, 101, 105]
            }
          },
          {
            "name": "Hy5",
            "title": "Inhibition of Aggression",
            "answers": [[7, false], [14, false], [29, false], [115, false], [116, false], [135, false], [157, false]],
            "tScores": {
              "male": [30, 33, 40, 48, 55, 63, 71, 78],
              "female": [30, 31, 39, 46, 54, 62, 70, 77]
            }
          }
        ]
      },
      {
        "name": "Pd", "code": "4",
        "title": "Psychopathic Deviate",
        "indications": {
          "Pd>=75": ["antisocial behavior", "trouble with the law"],
          "65<=Pd<=74": ["rebellious", "non-conforming", "family problems", "impulsive", "angry", "irritable", "dissatisfied", "underachievement", "poor work history"],
          "55<=Pd<=64": ["unconventional", "immature", "self-centered", "superficial relationships", "extroverted", "energetic"]
        },
        "answers": [[9, false], [12, false], [17, true], [21, true], [22, true], [31, true], [32, true], [34, false], [35, true], [42, true], [52, true], [54, true], [56, true], [70, false], [71, true], [79, false], [82, true], [83, false], [89, true], [94, true], [95, false], [99, true], [105, true], [113, true], [122, false], [125, false], [129, false], [143, false], [157, false], [158, false], [160, false], [167, false], [171, false], [185, false], [195, true], [202, true], [209, false], [214, false], [217, false], [219, true], [225, true], [226, false], [243, false], [259, true], [261, false], [263, false], [264, true], [266, false], [267, false], [288, true]],
        "tScores": {
          "male": [30, 31, 33, 34, 35, 37, 39, 40, 42, 44, 46, 48, 50, 52, 54, 57, 59, 62, 64, 67, 69, 72, 74, 77, 79, 82, 84, 87, 90, 92, 95, 97, 100, 102, 105, 107, 110, 112, 115, 117, 120],
          "female": [30, 32, 34, 36, 37, 39, 41, 43, 45, 47, 49, 51, 53, 55, 58, 60, 63, 66, 68, 71, 73, 76, 79, 81, 84, 87, 89, 92, 94, 97, 100, 102, 105, 107, 110, 113, 115, 118, 120]
        },
        "scoreOffsets": {
          "male": 11,
          "female": 12
        },
        "kCorrection": 0.4,
        "subScales": [
          {
            "name": "Pd-O",
            "title": "Psychpathic Deviate, Obvious",
            "answers": [[9, false], [12, false], [17, true], [22, true], [31, true], [32, true], [34, false], [35, true], [42, true], [52, true], [54, true], [56, true], [71, true], [79, false], [82, true], [94, true], [95, false], [99, true], [105, true], [125, false], [195, true], [202, true], [225, true], [259, true], [261, false], [264, true], [266, false], [288, true]],
            "tScores": {
              "male": [34, 36, 39, 42, 44, 47, 50, 52, 55, 58, 60, 63, 66, 68, 71, 74, 76, 79, 82, 84, 87, 90, 92, 95, 98, 100, 103, 106, 108],
              "female": [35, 38, 41, 44, 46, 49, 52, 54, 57, 60, 62, 65, 68, 70, 73, 76, 79, 81, 84, 87, 89, 92, 95, 97, 100, 103, 105, 108, 111]
            }
          },
          {
            "name": "Pd-S",
            "title": "Psychopathic Deviate, Subtle",
            "answers": [[21, true], [70, false], [83, false], [89, true], [113, true], [122, false], [129, false], [143, false], [157, false], [158, false], [160, false], [167, false], [171, false], [185, false], [209, false], [214, false], [217, false], [219, true], [226, false], [243, false], [263, false], [267, false]],
            "tScores": {
              "male": [33, 37, 41, 45, 48, 52, 56, 60, 64, 68, 72, 76, 79, 83, 87, 91, 95],
              "female": [31, 35, 39, 43, 47, 51, 55, 59, 63, 67, 71, 75, 79, 83, 87, 91, 95]
            },
            "scoreOffsets": {
              "male": 6,
              "female": 6
            }
          },
          {
            "name": "Pd1",
            "title": "Familial Discord",
            "answers": [[21, true], [54, true], [83, false], [125, false], [195, true], [202, true], [214, false], [217, false], [288, true]],
            "tScores": {
              "male": [38, 45, 51, 58, 65, 71, 78, 84, 91, 98],
              "female": [38, 44, 50, 56, 62, 68, 74, 80, 86, 92]
            }
          },
          {
            "name": "Pd2",
            "title": "Authority Problems",
            "answers": [[34, false], [35, true], [70, false], [105, true], [129, false], [160, false], [263, false], [266, false]],
            "tScores": {
              "male": [30, 35, 42, 48, 55, 61, 68, 74, 81],
              "female": [30, 38, 46, 53, 61, 69, 77, 84, 92]
            }
          },
          {
            "name": "Pd3",
            "title": "Social Impertubability",
            "answers": [[70, false], [129, false], [158, false], [167, false], [185, false], [243, false]],
            "tScores": {
              "male": [30, 35, 40, 46, 52, 58, 64],
              "female": [30, 35, 41, 47, 52, 58, 64]
            }
          },
          {
            "name": "Pd4",
            "title": "Social Alienation",
            "answers": [[12, false], [17, true], [22, true], [42, true], [56, true], [82, true], [99, true], [113, true], [129, false], [157, false], [219, true], [225, true], [259, true]],
            "tScores": {
              "male": [30, 36, 41, 46, 51, 57, 62, 67, 73, 78, 83, 88, 94, 99],
              "female": [30, 33, 38, 44, 49, 54, 60, 65, 70, 75, 81, 86, 91, 97]
            }
          },
          {
            "name": "Pd5",
            "title": "Self-alienation",
            "answers": [[9, false], [31, true], [32, true], [52, true], [56, true], [71, true], [82, true], [89, true], [94, true], [95, false], [113, true], [264, true]],
            "tScores": {
              "male": [34, 38, 43, 48, 53, 58, 63, 67, 72, 77, 82, 87, 91],
              "female": [34, 39, 43, 48, 53, 58, 63, 68, 72, 77, 82, 87, 92]
            }
          }
        ]
      },
      {
        "name": "Mf", "code": "5", "gender": "male",
        "title": "Masculinity-Femininity",
        "indications": {
          "Mf>=65": ["lacks traditional masculine interests"],
          "45<=Mf<=64": ["interests similar to most men"],
          "Mf<45": ["traditional masculine interests", "macho"]
        },
        "answers": [[1, false], [4, true], [19, false], [25, true], [26, false], [27, false], [62, true], [63, false], [64, true], [67, true], [68, false], [69, false], [74, true], [76, false], [80, true], [86, false], [103, false], [104, false], [107, false], [112, true], [119, true], [120, false], [121, false], [122, true], [128, true], [132, false], [133, false], [137, true], [163, false], [166, true], [177, true], [184, false], [187, true], [191, true], [193, false], [194, false], [196, true], [197, false], [199, false], [201, false], [205, true], [207, false], [209, true], [219, true], [231, false], [235, false], [236, true], [237, false], [239, false], [251, true], [254, false], [256, true], [257, false], [268, true], [271, true], [272, false]],
        "tScores": {
          "male": [30, 32, 34, 36, 38, 40, 42, 44, 46, 48, 50, 52, 54, 56, 58, 60, 62, 64, 666, 68, 70, 72, 72, 76, 78, 79, 81, 83, 85, 87, 89, 91, 93, 95, 97, 99, 101, 103, 105, 107, 109]
        },
        "scoreOffsets": {
          "male": 16
        }
      },
      {
        "name": "Mf", "code": "5", "gender": "female",
        "title": "Masculinity-Femininity",
        "indications": {
          "Mf>=65": ["rejects traditional feminine role"],
          "45<=Mf<=64": ["interests similar to most women"],
          "Mf<45": ["traditional feminine interests", "androgynous"]
        },
        "answers": [[1, false], [4, true], [19, false], [25, true], [26, false], [27, false], [62, true], [63, false], [64, true], [67, true], [68, false], [69, false], [74, true], [76, false], [80, true], [86, false], [103, false], [104, false], [107, false], [112, true], [119, true], [120, false], [121, true], [122, true], [128, true], [132, false], [133, false], [137, true], [163, false], [166, false], [177, true], [184, false], [187, true], [191, true], [193, false], [194, false], [196, true], [197, false], [199, false], [201, false], [205, true], [207, false], [209, false], [219, true], [231, false], [235, false], [236, true], [237, false], [239, false], [251, true], [254, false], [256, true], [257, false], [268, false], [271, true], [272, false]],
        "tScores": {
          "female": [120, 118, 116, 114, 111, 109, 106, 104, 101, 99, 96, 94, 92, 89, 87, 84, 82, 79, 77, 74, 72, 69, 67, 65, 62, 60, 57, 55, 52, 50, 47, 45, 43, 40, 38, 35, 33, 30]
        },
        "scoreOffsets": {
          "female": 7
        }
      },
      {
        "name": "Pa", "code": "6",
        "title": "Paranoia",
        "indications": {
          "Pa>=75": ["psychotic symptoms", "delusions of persecution", "ideas of reference"],
          "65<=Pa<=74": ["paranoid style", "guarded", "extremely sensitive to opinions of others", "may feel mistreated", "blames others", "suspicious", "resentful", "withdrawn", "hostile", "argumentative"],
          "55<=Pa<=64": ["overly sensitive", "guarded", "distrustful", "angry", "resentful"]
        },
        "answers": [[16, true], [17, true], [22, true], [23, true], [24, true], [42, true], [81, false], [95, false], [98, false], [99, true], [100, false], [104, false], [110, false], [113, true], [138, true], [144, true], [145, true], [146, true], [162, true], [234, true], [244, false], [255, false], [259, true], [266, false], [271, true], [277, true], [283, false], [284, false], [285, true], [286, false], [297, false], [305, true], [307, true], [314, false], [315, false], [333, true], [334, true], [336, true], [355, true], [361, true]],
        "tScores": {
          "male": [30, 31, 32, 34, 37, 39, 42, 46, 49, 53, 57, 61, 64, 68, 72, 75, 79, 83, 86, 90, 94, 97, 101, 105, 108, 112, 116, 119, 120],
          "female": [30, 31, 32, 34, 37, 39, 42, 45, 49, 52, 56, 59, 63, 67, 70, 74, 78, 81, 85, 89, 92, 96, 100, 103, 107, 111, 114, 118, 120]
        },
        "scoreOffsets": {
          "male": 2,
          "female": 2
        },
        "subScales": [
          {
            "name": "Pa-O",
            "title": "Paranoia, Obvious",
            "answers": [[17, true], [22, true], [23, true], [24, true], [42, true], [99, true], [138, true], [144, true], [146, true], [162, true], [234, true], [255, false], [259, true], [266, false], [277, true], [285, true], [305, true], [307, true], [314, false], [333, true], [336, true], [355, true], [361, true]],
            "tScores": {
              "male": [38, 43, 47, 52, 57, 61, 66, 70, 75, 80, 84, 89, 93, 98, 102, 107, 112, 116],
              "female": [38, 42, 47, 51, 55, 60, 64, 68, 72, 77, 81, 85, 90, 94, 98, 103, 107, 111, 115, 120]
            }
          },
          {
            "name": "Pa-S",
            "title": "Paranoia, Subtle",
            "answers": [[16, true], [81, false], [95, false], [98, false], [100, false], [104, false], [110, false], [113, true], [145, true], [244, false], [271, true], [283, false], [284, false], [286, false], [297, false], [315, false], [334, true]],
            "tScores": {
              "male": [31, 35, 39, 43, 48, 52, 56, 60, 65, 69, 73, 77, 82, 86, 90],
              "female": [31, 35, 39, 44, 48, 52, 57, 61, 65, 69, 74, 78, 82, 87, 91]
            }
          },
          {
            "name": "Pa1",
            "title": "Persecutory Ideas",
            "answers": [[17, true], [22, true], [42, true], [99, true], [113, true], [138, true], [144, true], [145, true], [162, true], [234, true], [259, true], [305, true], [314, false], [333, true], [336, true], [355, true], [361, true]],
            "tScores": {
              "male": [40, 46, 52, 58, 64, 70, 76, 82, 88, 94, 100, 106, 112, 118, 120],
              "female": [39, 45, 51, 57, 63, 69, 75, 81, 87, 93, 99, 105, 111, 117, 120]
            }
          },
          {
            "name": "Pa2",
            "title": "Poignancy",
            "answers": [[22, true], [100, false], [146, true], [244, false], [271, true], [277, true], [285, true], [307, true], [334, true]],
            "tScores": {
              "male": [34, 41, 48, 55, 62, 69, 76, 82, 89, 96],
              "female": [34, 40, 46, 53, 59, 65, 72, 78, 84, 91]
            }
          },
          {
            "name": "Pa3",
            "title": "Naivete",
            "answers": [[16, true], [81, false], [98, false], [104, false], [110, false], [283, false], [284, false], [286, false], [315, false]],
            "tScores": {
              "male": [30, 32, 36, 41, 46, 51, 56, 60, 65, 70],
              "female": [30, 31, 36, 41, 45, 50, 55, 60, 65, 69]
            }
          }
        ]
      },
      {
        "name": "Pt", "code": "7",
        "title": "Psychasthenia",
        "indications": {
          "Pt>=75": ["extreme psychological turmoil", "intruding thoughts", "unable to concentrate", "obsessive-compulsive symptoms"],
          "65<=Pt<=74": ["moderate anxiety", "depression", "fatigue", "insomnia", "bad dreams", "guilt", "perfectionism", "feels unaccepted"],
          "55<=Pt<=64": ["anxious", "tense", "uncomfortable", "insecure", "lacks self-confidence", "meticulous", "indecisive", "shy", "introverted"]
        },
        "answers": [[3, false], [9, false], [11, true], [16, true], [23, true], [31, true], [33, false], [38, true], [56, true], [65, true], [73, true], [82, true], [89, true], [94, true], [109, false], [130, true], [140, false], [147, true], [165, false], [170, true], [174, false], [175, true], [196, true], [218, true], [242, true], [273, true], [275, true], [277, true], [285, true], [289, true], [293, false], [301, true], [302, true], [304, true], [308, true], [309, true], [310, true], [313, true], [316, true], [317, true], [320, true], [321, false], [325, true], [326, true], [327, true], [328, true], [329, true], [331, true]],
        "tScores": {
          "male": [30, 31, 32, 33, 34, 36, 37, 39, 41, 43, 44, 47, 49, 51, 53, 55, 57, 59, 62, 64, 66, 68, 70, 72, 74, 77, 79, 81, 93, 85, 87, 89, 91, 94, 96, 98, 100, 102, 104, 106, 109, 111, 113, 115, 117, 119, 120],
          "female": [30, 31, 32, 33, 35, 37, 38, 40, 42, 44, 47, 49, 51, 53, 55, 57, 59, 61, 62, 64, 66, 68, 70, 72, 73, 75, 77, 79, 81, 83, 84, 86, 88, 90, 92, 94, 95, 97, 99, 101, 103, 105, 106, 108, 110, 112, 114, 116, 117, 119, 120]
        },
        "scoreOffsets": {
          "male": 14,
          "female": 16
        },
        "kCorrection": 1.0
      },
      {
        "name": "Sc", "code": "8",
        "title": "Schizophrenia",
        "indications": {
          "Sc>=75": ["confused", "disorganized thinking", "hallucinations", "delusions", "impaired contact with reality", "substance abuse"],
          "65<=Sc<=74": ["schizoid life style", "unusual beliefs", "eccentric behaviors", "confused", "fearful", "sad", "somatic complaints", "uninvolved", "excessive fantasy", "daydreaming"],
          "55<=Sc<=64": ["limited interest in other people", "impractical", "feelings of inadequacy", "insecurity"]
        },
        "answers": [[6, false], [9, false], [12, false], [16, true], [17, true], [21, true], [22, true], [23, true], [31, true], [32, true], [34, false], [35, true], [38, true], [42, true], [44, true], [46, true], [48, true], [65, true], [85, true], [90, false], [91, false], [92, true], [106, false], [138, true], [145, true], [147, true], [165, false], [166, true], [168, true], [170, true], [177, false], [179, false], [180, true], [182, true], [190, true], [192, false], [210, false], [218, true], [221, true], [229, true], [233, true], [234, true], [242, true], [247, true], [252, true], [255, false], [256, true], [268, true], [273, true], [274, true], [276, false], [277, true], [278, false], [279, true], [280, false], [281, true], [287, true], [290, false], [291, true], [292, true], [295, false], [296, true], [298, true], [299, true], [303, true], [307, true], [311, true], [316, true], [319, true], [320, true], [322, true], [323, true], [325, true], [329, true], [332, true], [333, true], [343, false], [355, true]],
        "tScores": {
          "male": [30, 31, 32, 33, 34, 35, 36, 37, 39, 4, 42, 44, 45, 47, 49, 51, 53, 55, 56, 58, 60, 62, 63, 65, 67, 69, 70, 72, 74, 75, 77, 79, 81, 82, 84, 86, 87, 89, 91, 93, 94, 96, 98, 99, 101, 103, 105, 106, 108, 110, 111, 113, 115, 117, 118, 120],
          "female": [30, 31, 32, 33, 34, 36, 37, 39, 41, 42, 44, 46, 48, 50, 52, 53, 55, 57, 59, 60, 62, 63, 65, 66, 67, 69, 70, 72, 73, 75, 76, 78, 79, 81, 82, 84, 85, 87, 88, 90, 91, 93, 94, 96, 97, 99, 100, 102, 103, 105, 106, 108, 109, 111, 112, 114, 115, 116, 118, 119, 120]
        },
        "scoreOffsets": {
          "male": 12,
          "female": 13
        },
        "kCorrection": 1.0,
        "subScales": [
          {
            "name": "Sc1",
            "title": "Social Alienation",
            "answers": [[17, true], [21, true], [22, true], [42, true], [46, true], [90, false], [138, true], [145, true], [190, true], [221, true], [256, true], [276, false], [277, true], [278, false], [280, false], [281, true], [291, true], [292, true], [320, true], [333, true], [343, false]],
            "tScores": {
              "male": [39, 43, 47, 51, 55, 59, 64, 68, 72, 76, 80, 84, 88, 92, 97, 101, 105, 109, 113, 117, 120],
              "female": [38, 42, 46, 50, 53, 57, 61, 65, 69, 73, 77, 81, 84, 88, 92, 96, 100, 104, 108, 111, 115, 119]
            }
          },
          {
            "name": "Sc2",
            "title": "Emotional Alienation",
            "answers": [[9, false], [65, true], [92, true], [210, false], [234, true], [273, true], [290, false], [303, true], [323, true], [329, true], [332, true]],
            "tScores": {
              "male": [40, 50, 59, 69, 78, 88, 98, 107, 117, 120],
              "female": [40, 49, 58, 67, 76, 86, 95, 104, 113, 120]
            }
          },
          {
            "name": "Sc3",
            "title": "Lack of Ego Mastery, Cognitive",
            "answers": [[31, true], [32, true], [147, true], [165, false], [170, true], [180, true], [299, true], [311, true], [316, true], [325, true]],
            "tScores": {
              "male": [42, 48, 54, 60, 66, 72, 78, 84, 90, 96, 103],
              "female": [43, 49, 55, 61, 67, 74, 80, 86, 92, 98, 104]
            }
          },
          {
            "name": "Sc4",
            "title": "Lack of Ego Mastery, Conative",
            "answers": [[9, false], [31, true], [38, true], [48, true], [65, true], [92, true], [210, false], [233, true], [234, true], [273, true], [290, false], [299, true], [303, true], [325, true]],
            "tScores": {
              "male": [39, 44, 49, 55, 60, 65, 71, 76, 82, 87, 92, 98, 103, 109, 114],
              "female": [39, 44, 49, 54, 59, 65, 40, 75, 80, 85, 90, 95, 100, 106, 111]
            }
          },
          {
            "name": "Sc5",
            "title": "Lack of Ego Mastery, Defective Inhibition",
            "answers": [[23, true], [85, true], [168, true], [182, true], [218, true], [242, true], [274, true], [320, true], [322, true], [329, true], [355, true]],
            "tScores": {
              "male": [40, 47, 54, 61, 68, 75, 82, 89, 96, 103, 110, 117],
              "female": [40, 46, 53, 59, 65, 72, 78, 85, 91, 97, 104, 110]
            }
          },
          {
            "name": "Sc6",
            "title": "Bizarre Sensory Experiences",
            "answers": [[23, true], [32, true], [44, true], [91, false], [106, false], [168, true], [177, false], [179, false], [182, true], [229, true], [247, true], [252, true], [255, false], [295, false], [296, true], [298, true], [307, true], [311, true], [319, true], [355, true]],
            "tScores": {
              "male": [41, 46, 51, 55, 60, 65, 70, 75, 80, 85, 90, 95, 99, 104, 109, 114, 119, 120],
              "female": [41, 45, 50, 54, 59, 63, 68, 72, 77, 81, 86, 91, 95, 100, 104, 109, 113, 118, 120]
            }
          }
        ]
      },
      {
        "name": "Ma", "code": "9",
        "title": "Hypomania",
        "indications": {
          "Ma>=75": ["manic symptoms", "excessive, purposeless activity", "hallucinations", "delusions of grandeur", "confusion", "flight of ideas"],
          "Ma<=65<=74": ["excessive energy", "lacks direction", "conceptual disorganization", "unrealistic self-appraisal", "impulsive", "low frustration tolerance"],
          "Ma<=55<=64": ["active", "energetic", "extroverted", "creative", "rebellious", "enterprising", "impulsive"]
        },
        "answers": [[13, true], [15, true], [21, true], [23, true], [50, true], [55, true], [61, true], [85, true], [87, true], [88, false], [93, false], [98, true], [100, false], [106, false], [107, false], [113, true], [122, true], [131, true], [136, false], [145, true], [154, false], [155, true], [158, false], [167, false], [168, true], [169, true], [182, true], [190, true], [200, true], [205, true], [206, true], [211, true], [212, true], [218, true], [220, true], [227, true], [229, true], [238, true], [242, true], [243, false], [244, true], [248, true], [250, true], [253, true], [263, false], [269, true]],
        "tScores": {
          "male": [30, 31, 33, 35, 36, 38, 39, 41, 43, 45, 47, 49, 51, 53, 56, 59, 62, 65, 59, 72, 75, 78, 81, 82, 88, 91, 94, 98, 101, 104, 107, 110, 114, 117, 120],
          "female": [30, 31, 33, 35, 37, 39, 41, 43, 45, 47, 49, 51, 53, 56, 59, 62, 65, 68, 71, 74, 76, 79, 82, 85, 88, 91, 94, 97, 100, 103, 106, 109, 112, 115, 118, 120]
        },
        "scoreOffsets": {
          "male": 9,
          "female": 9
        },
        "kCorrection": 0.2,
        "subScales": [
          {
            "name": "Ma-O",
            "title": "Hypomania, Obvious",
            "answers": [[15, true], [23, true], [50, true], [61, true], [85, true], [87, true], [100, false], [106, false], [107, false], [145, true], [155, true], [168, true], [182, true], [190, true], [205, true], [218, true], [227, true], [229, true], [238, true], [242, true], [250, true], [253, true], [269, true]],
            "tScores": {
              "male": [30, 34, 37, 40, 44, 47, 51, 54, 57, 61, 64, 67, 71, 74, 78, 81, 84, 88, 91, 95, 98, 101, 105],
              "female": [32, 35, 39, 42, 45, 49, 52, 55, 59, 62, 66, 69, 72, 76, 79, 82, 86, 89, 92, 96, 99, 103, 106]
            },
            "scoreOffsets": {
              "male": 1,
              "female": 1
            }
          },
          {
            "name": "Ma-S",
            "title": "Hypomania, Subtle",
            "answers": [[13, true], [21, true], [55, true], [88, false], [93, false], [98, true], [113, true], [122, true], [131, true], [136, false], [154, false], [158, false], [167, false], [169, true], [200, true], [206, true], [211, true], [212, true], [220, true], [243, false], [244, true], [248, true], [263, false]],
            "tScores": {
              "male": [31, 35, 39, 42, 46, 50, 54, 57, 61, 65, 69, 72, 76, 80, 83, 87, 91, 95, 98],
              "female": [32, 36, 40, 44, 47, 51, 55, 59, 63, 67, 70, 74, 78, 82, 86, 90, 93, 97, 101]
            },
            "scoreOffsets": {
              "male": 5,
              "female": 5
            }
          },
          {
            "name": "Ma1",
            "title": "Amorality",
            "answers": [[131, true], [227, true], [248, true], [250, true], [263, false], [269, true]],
            "tScores": {
              "male": [35, 42, 50, 58, 66, 74, 81],
              "female": [37, 45, 54, 62, 70, 79, 87]
            }
          },
          {
            "name": "Ma2",
            "title": "Psychomotor Acceleration",
            "answers": [[15, true], [85, true], [87, true], [100, false], [106, false], [122, true], [169, true], [206, true], [218, true], [242, true], [244, true]],
            "tScores": {
              "male": [30, 34, 39, 44, 49, 53, 58, 63, 68, 73, 78],
              "female": [30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80]
            },
            "scoreOffsets": {
              "male": 1,
              "female": 1
            }
          },
          {
            "name": "Ma3",
            "title": "Imperturbability",
            "answers": [[93, false], [136, false], [155, true], [158, false], [167, false], [200, true], [220, true], [243, false]],
            "tScores": {
              "male": [30, 35, 41, 47, 53, 59, 65, 71, 77],
              "female": [30, 37, 43, 50, 56, 62, 69, 75, 82]
            }
          },
          {
            "name": "Ma4",
            "title": "Ego Inflation",
            "answers": [[13, true], [50, true], [55, true], [61, true], [98, true], [145, true], [190, true], [211, true], [212, true]],
            "tScores": {
              "male": [30, 37, 43, 50, 56, 63, 69, 76, 82, 89],
              "female": [31, 37, 43, 49, 56, 62, 68, 74, 80, 86]
            }
          }
        ]
      },
      {
        "name": "Si", "code": "0",
        "title": "Social Introversion",
        "indications": {
          "Si>=75": ["extreme social withdrawal", "extreme avoidance"],
          "Si<=65<=74": ["introverted", "depressed", "guilty", "slow personal tempo", "lacks self-confidence", "lacks interests", "submissive", "compliant", "emotionally overcontrolled"],
          "Si<=55<=64": ["shy", "timid", "lacks self-confidence", "reliable", "dependable"],
          "Si<45": ["extroverted", "gregarious", "self-reliant", "energetic", "competitive", "under-controlled", "manipulative"]
        },
        "answers": [[25, false], [31, true], [32, false], [49, false], [56, true], [70, true], [79, false], [86, false], [100, true], [104, true], [106, false], [110, true], [112, false], [127, true], [131, false], [135, true], [158, true], [161, true], [167, true], [181, false], [185, true], [189, false], [207, false], [209, false], [215, true], [231, false], [237, false], [243, true], [251, true], [255, false], [262, false], [265, true], [267, false], [275, true], [280, false], [284, true], [289, true], [296, true], [302, true], [308, true], [321, false], [326, true], [328, false], [335, false], [337, true], [338, true], [340, false], [342, false], [344, false], [345, false], [347, true], [348, true], [350, false], [351, true], [352, true], [353, false], [354, false], [357, true], [358, false], [359, false], [360, false], [362, false], [363, false], [364, true], [366, false], [367, true], [368, true], [369, true], [370, false]],
        "tScores": {
          "male": [30, 31, 33, 34, 35, 36, 37, 38, 40, 41, 42, 43, 44, 45, 47, 48, 49, 50, 51, 52, 54, 55, 56, 57, 58, 59, 61, 62, 63, 64, 65, 66, 68, 69, 70, 71, 72, 73, 75, 76, 77, 78, 79, 80, 82, 83, 84, 85, 86, 87, 89, 90, 91, 92, 93, 94, 96, 97, 98, 99, 100],
          "female": [30, 31, 32, 33, 34, 35, 36, 37, 38, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 95]
        },
        "scoreOffsets": {
          "male": 9,
          "female": 8
        },
        "subScales": [
          {
            "name": "Si1",
            "title": "Shyness/Self-Consciousness",
            "answers": [[49, false], [158, true], [161, true], [167, true], [185, true], [243, true], [262, false], [265, true], [275, true], [280, false], [289, true], [321, false], [342, false], [360, false]],
            "tScores": {
              "male": [36, 39, 42, 45, 48, 51, 53, 56, 59, 62, 65, 68, 71, 74, 77],
              "female": [36, 38, 41, 44, 46, 49, 52, 55, 57, 60, 63, 65, 68, 71, 74]
            }
          },
          {
            "name": "Si2",
            "title": "Social Avoidance",
            "answers": [[86, false], [337, true], [340, false], [353, false], [359, false], [363, false], [367, true], [370, false]],
            "tScores": {
              "male": [37, 41, 45, 49, 54, 58, 62, 67, 71],
              "female": [37, 42, 47, 51, 56, 60, 65, 69, 74]
            }
          },
          {
            "name": "Si3",
            "title": "Self/Other Alienation",
            "answers": [[31, true], [56, true], [104, true], [110, true], [135, true], [284, true], [302, true], [308, true], [326, true], [328, true], [338, true], [347, true], [348, true], [358, true], [364, true], [368, true], [369, true]],
            "tScores": {
              "male": [35, 38, 41, 44, 47, 50, 53, 56, 59, 62, 65, 68, 71, 74, 77, 80, 83, 86],
              "female": [35, 38, 41, 44, 47, 49, 52, 55, 58, 61, 63, 66, 69, 72, 74, 77, 80, 83]
            }
          }
        ]
      }
    ]
  },
  {
    "title": "RC Scales",
    "items": [
      {
        "name": "dem", "code": "RCd",
        "title": "Demoralization",
        "answers": [[31, true], [56, true], [64, true], [73, true], [82, true], [94, true], [95, false], [130, true], [180, true], [215, true], [233, true], [273, true], [277, true], [339, true], [388, false], [400, true], [411, true], [464, true], [469, true], [482, true], [485, true], [491, true], [505, true], [554, true]],
        "tScores": {
          "male": [37, 42, 47, 50, 52, 54, 56, 57, 58, 60, 62, 64, 66, 68, 70, 71, 73, 75, 77, 79, 81, 83, 85, 86, 88],
          "female": [36, 41, 45, 48, 50, 52, 53, 54, 55, 56, 58, 60, 61, 63, 65, 67, 69, 71, 73, 75, 77, 79, 81, 83, 85]
        }
      },
      {
        "name": "som", "code": "RC1",
        "title": "Somatic Complaints",
        "answers": [[2, false], [8, false], [11, true], [18, true], [20, false], [28, true], [40, true], [47, false], [57, false], [91, false], [97, true], [101, true], [106, false], [111, true], [141, false], [149, true], [164, false], [172, true], [176, false], [177, false], [179, false], [208, false], [224, false], [247, true], [255, false], [295, false], [536, true]],
        "tScores": {
          "male": [37, 43, 48, 52, 55, 58, 60, 63, 65, 68, 71, 73, 76, 79, 81, 84, 86, 89, 92, 94, 97, 100],
          "female": [36, 41, 45, 49, 52, 55, 57, 59, 62, 64, 66, 68, 70, 72, 74, 76, 78, 80, 82, 85, 87, 89, 91, 93, 95, 97, 99, 100]
        }
      },
      {
        "name": "lpe", "code": "RC2",
        "title": "Low Positive Emotions",
        "answers": [[9, false], [10, false], [49, false], [61, false], [75, false], [109, false], [148, false], [188, false], [206, false], [239, false], [244, false], [280, false], [318, false], [330, false], [494, false], [521, false], [552, false]],
        "tScores": {
          "male": [34, 39, 43, 46, 50, 53, 57, 60, 64, 68, 72, 75, 79, 83, 86, 90, 94, 97],
          "female": [33, 38, 42, 46, 50, 54, 58, 62, 66, 70, 74, 79, 83, 87, 91, 95, 99, 100]
        }
      },
      {
        "name": "cyn", "code": "RC3",
        "title": "Cynicism",
        "answers": [[58, true], [76, true], [81, true], [104, true], [110, true], [241, true], [254, true], [284, true], [286, true], [352, true], [436, true], [445, true], [538, true], [563, true], [567, true]],
        "tScores": {
          "male": [34, 38, 41, 43, 45, 47, 48, 50, 53, 56, 60, 64, 69, 74, 78, 83],
          "female": [33, 38, 41, 44, 46, 48, 50, 52, 55, 58, 62, 66, 70, 74, 78, 82]
        }
      },
      {
        "name": "asb", "code": "RC4",
        "title": "Antisocial Behavior",
        "answers": [[21, true], [34, false], [35, true], [83, false], [84, true], [105, true], [160, false], [202, true], [240, true], [264, true], [266, false], [362, true], [379, true], [412, true], [429, false], [431, true], [455, false], [487, true], [489, true], [511, true], [540, true], [548, true]],
        "tScores": {
          "male": [33, 37, 41, 44, 47, 49, 52, 54, 57, 59, 62, 65, 68, 71, 74, 77, 80, 83, 86, 89, 92, 95, 98],
          "female": [35, 40, 44, 48, 52, 55, 58, 60, 63, 66, 69, 71, 74, 77, 80, 83, 85, 88, 91, 94, 96, 99, 100]
        }
      },
      {
        "name": "per", "code": "RC6",
        "title": "Ideas of Persecution",
        "answers": [[24, true], [42, true], [99, true], [138, true], [144, true], [145, true], [162, true], [216, true], [228, true], [259, true], [314, false], [333, true], [336, true], [355, true], [361, true], [484, true], [490, true]],
        "tScores": {
          "male": [41, 56, 62, 65, 67, 70, 73, 76, 79, 82, 85, 88, 90, 93, 96, 99, 100],
          "female": [43, 58, 64, 67, 70, 73, 76, 79, 82, 85, 88, 91, 94, 97, 99, 100]
        }
      },
      {
        "name": "dne", "code": "RC7",
        "title": "Dysfunctional Negative Emotions",
        "answers": [[37, true], [127, true], [161, true], [251, true], [274, true], [289, true], [301, true], [302, true], [310, true], [320, true], [327, true], [328, true], [329, true], [390, true], [421, true], [424, true], [430, true], [442, true], [451, true], [463, true], [471, true], [507, true], [513, true], [519, true]],
        "tScores": {
          "male": [34, 38, 42, 45, 47, 49, 52, 54, 56, 58, 60, 63, 65, 67, 70, 72, 75, 77, 80, 82, 85, 87, 90, 92, 95],
          "female": [32, 36, 40, 42, 45, 47, 49, 50, 52, 54, 55, 58, 60, 63, 65, 68, 71, 74, 76, 79, 82, 84, 87, 90, 92]
        }
      },
      {
        "name": "abx", "code": "RC8",
        "title": "Aberrant Experiences",
        "answers": [[32, true], [60, true], [72, true], [96, true], [168, true], [182, true], [198, true], [229, true], [296, true], [298, true], [307, true], [311, true], [316, true], [319, true], [427, false], [466, true], [508, true], [551, true]],
        "tScores": {
          "male": [39, 47, 52, 56, 59, 63, 66, 70, 73, 76, 80, 83, 87, 90, 93, 97, 100],
          "female": [39, 47, 52, 56, 60, 63, 66, 69, 73, 76, 79, 82, 85, 89, 92, 95, 98, 100]
        }
      },
      {
        "name": "hpm", "code": "RC9",
        "title": "Hypomanic Activation",
        "answers": [[27, true], [50, true], [55, true], [86, true], [100, false], [122, true], [134, true], [153, true], [169, true], [189, true], [209, true], [212, true], [213, true], [226, true], [242, true], [250, true], [267, true], [304, true], [324, true], [345, true], [346, true], [366, true], [389, true], [393, true], [406, true], [414, true], [423, true], [542, true]],
        "tScores": {
          "male": [30, 30, 31, 33, 36, 38, 39, 41, 42, 44, 45, 47, 48, 50, 51, 53, 56, 58, 61, 64, 67, 70, 73, 76, 79, 82, 85, 88, 91],
          "female": [30, 30, 32, 34, 37, 38, 40, 42, 44, 46, 48, 49, 51, 53, 56, 58, 61, 64, 66, 69, 72, 74, 77, 80, 83, 85, 88, 91, 94]
        }
      }
    ]
  },
  {
    "title": "Content Scales",
    "items": [
      {
        "name": "ANX",
        "title": "Anxiety",
        "answers": [[15, true], [30, true], [31, true], [39, true], [140, false], [170, true], [196, true], [208, false], [223, false], [273, true], [290, true], [299, true], [301, true], [305, true], [339, true], [405, false], [408, true], [415, true], [463, true], [469, true], [496, false], [509, true], [556, true]],
        "tScores": {
          "male": [35, 39, 42, 45, 47, 50, 52, 53, 55, 57, 60, 62, 65, 67, 70, 72, 75, 77, 80, 82, 85, 87, 90, 92],
          "female": [34, 37, 40, 43, 45, 47, 49, 51, 53, 55, 56, 59, 61, 64, 66, 69, 71, 74, 76, 79, 81, 84, 86, 89]
        }
      },
      {
        "name": "FRS",
        "title": "Fears",
        "answers": [[115, false], [154, true], [163, false], [186, false], [317, true], [322, true], [329, true], [334, true], [385, false], [392, true], [395, true], [397, true], [401, false], [435, true], [438, true], [441, true], [447, true], [453, false], [458, true], [462, false], [468, true], [471, true], [555, true]],
        "tScores": {
          "male": [35, 41, 45, 48, 51, 54, 57, 60, 64, 67, 70, 74, 77, 80, 84, 87, 90, 93, 97, 100, 103, 107, 110, 113],
          "female": [31, 35, 38, 41, 43, 46, 48, 51, 53, 56, 59, 62, 65, 68, 72, 75, 78, 81, 85, 88, 91, 94, 98, 101]
        },
        "subScales": [
          {
            "name": "FRS1",
            "title": "Generalized Fearfulness",
            "answers": [[186, false], [317, true], [322, true], [329, true], [334, true], [395, true], [435, true], [441, true], [447, true], [468, true], [471, true], [555, true]],
            "tScores": {
              "male": [44, 53, 62, 71, 80, 89, 98, 107, 113, 120],
              "female": [42, 48, 55, 61, 68, 74, 81, 88, 94, 101, 107]
            }
          },
          {
            "name": "FRS2",
            "title": "Multiple Fears",
            "answers": [[115, false], [154, true], [163, false], [385, false], [392, true], [401, false], [438, true], [453, false], [458, true], [462, false]],
            "tScores": {
              "male": [37, 41, 45, 50, 54, 59, 63, 67, 72, 76, 81],
              "female": [30, 33, 37, 41, 45, 49, 53, 58, 62, 66, 70]
            }
          }
        ]
      },
      {
        "name": "OBS",
        "title": "Obsessiveness",
        "answers": [[55, true], [87, true], [135, true], [196, true], [309, true], [313, true], [327, true], [328, true], [394, true], [442, true], [482, true], [491, true], [497, true], [509, true], [547, true], [553, true]],
        "tScores": {
          "male": [33, 37, 41, 44, 47, 50, 53, 56, 59, 63, 66, 70, 73, 77, 80, 84, 87],
          "female": [32, 37, 41, 44, 46, 48, 50, 53, 56, 59, 63, 67, 71, 75, 79, 83, 87]
        }
      },
      {
        "name": "DEP",
        "title": "Depression",
        "answers": [[3, false], [9, false], [38, true], [52, true], [56, true], [65, true], [71, true], [75, false], [82, true], [92, true], [95, false], [130, true], [146, true], [215, true], [234, true], [246, true], [277, true], [303, true], [306, true], [331, true], [377, true], [388, false], [399, true], [400, true], [411, true], [454, true], [506, true], [512, true], [516, true], [520, true], [539, true], [546, true], [554, true]],
        "tScores": {
          "male": [36, 41, 45, 48, 51, 53, 55, 56, 58, 59, 61, 63, 65, 66, 68, 70, 71, 73, 75, 77, 78, 80, 82, 83, 85, 87, 88, 90, 92, 94, 95, 97, 99, 100],
          "female": [34, 39, 42, 45, 48, 50, 52, 54, 55, 57, 58, 60, 62, 63, 65, 67, 68, 70, 72, 73, 75, 77, 78, 80, 82, 83, 85, 87, 88, 90, 92, 93, 95, 97]
        },
        "subScales": [
          {
            "name": "DEP1",
            "title": "Lack of Drive",
            "answers": [[3, false], [9, false], [38, true], [71, true], [75, false], [92, true], [399, true], [400, true], [512, true], [516, true], [539, true], [554, true]],
            "tScores": {
              "male": [40, 46, 51, 57, 62, 68, 73, 79, 84, 89, 95, 100, 106],
              "female": [40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90, 95, 100]
            }
          },
          {
            "name": "DEP2",
            "title": "Dysphoria",
            "answers": [[56, true], [65, true], [95, false], [146, true], [215, true], [388, false]],
            "tScores": {
              "male": [42, 50, 58, 66, 74, 82, 90],
              "female": [40, 47, 53, 60, 66, 73, 79]
            }
          },
          {
            "name": "DEP3",
            "title": "Self-Depreciation",
            "answers": [[52, true], [82, true], [130, true], [234, true], [246, true], [377, true], [411, true]],
            "tScores": {
              "male": [41, 48, 55, 62, 69, 76, 83, 91],
              "female": [40, 47, 54, 61, 68, 75, 82, 89]
            }
          },
          {
            "name": "DEP4",
            "title": "Suicidal Ideation",
            "answers": [[303, true], [454, true], [506, true], [520, true], [546, true]],
            "tScores": {
              "male": [45, 62, 79, 95, 112, 120],
              "female": [45, 61, 77, 93, 109, 120]
            }
          }
        ]
      },
      {
        "name": "HEA",
        "title": "Health Concerns",
        "answers": [[11, true], [18, true], [20, false], [28, true], [33, false], [36, true], [40, true], [44, true], [45, false], [47, false], [53, true], [57, false], [59, true], [91, false], [97, true], [101, true], [111, true], [117, false], [118, false], [141, false], [142, false], [149, true], [159, false], [164, false], [175, true], [176, false], [179, false], [181, false], [194, false], [204, false], [224, false], [247, true], [249, false], [255, false], [295, false], [404, false]],
        "tScores": {
          "male": [33, 37, 41, 44, 48, 51, 53, 56, 58, 60, 62, 64, 66, 68, 70, 72, 74, 76, 78, 80, 81, 83, 85, 87, 89, 91, 93, 95, 97, 99, 101, 103, 105, 106, 108, 110, 112],
          "female": [32, 36, 40, 43, 46, 49, 51, 53, 55, 57, 59, 61, 63, 64, 66, 68, 70, 72, 74, 76, 77, 79, 81, 83, 85, 87, 89, 90, 92, 94, 96, 98, 100, 101, 103, 105, 107]
        },
        "subScales": [
          {
            "name": "HEA1",
            "title": "Gastrointestinal Symptoms",
            "answers": [[18, true], [20, false], [47, false], [59, true], [111, true]],
            "tScores": {
              "male": [44, 57, 70, 83, 96, 109],
              "female": [43, 54, 64, 75, 86, 97]
            }
          },
          {
            "name": "HEA2",
            "title": "Neurological Symptoms",
            "answers": [[44, true], [53, true], [91, false], [101, true], [142, false], [149, true], [159, false], [164, false], [179, false], [247, true], [255, false], [295, false]],
            "tScores": {
              "male": [40, 47, 54, 60, 67, 74, 80, 87, 94, 100, 107, 114, 120],
              "female": [39, 45, 50, 56, 61, 67, 72, 78, 83, 89, 94, 99, 105]
            }
          },
          {
            "name": "HEA3",
            "title": "General Health Concerns",
            "answers": [[33, false], [45, false], [118, false], [141, false], [175, true], [224, false]],
            "tScores": {
              "male": [40, 48, 56, 64, 72, 81, 89],
              "female": [40, 48, 56, 64, 71, 79, 87]
            }
          }
        ]
      },
      {
        "name": "BIZ",
        "title": "Bizarre Mentation",
        "answers": [[24, true], [32, true], [60, true], [96, true], [138, true], [162, true], [198, true], [228, true], [259, true], [298, true], [311, true], [316, true], [319, true], [333, true], [336, true], [355, true], [361, true], [427, false], [466, true], [490, true], [508, true], [543, true], [551, true]],
        "tScores": {
          "male": [39, 46, 51, 54, 57, 60, 63, 67, 70, 74, 77, 81, 84, 88, 91, 94, 98, 101, 105, 108, 112, 115, 119, 120],
          "female": [39, 47, 52, 56, 58, 61, 64, 67, 70, 73, 76, 79, 81, 84, 87, 90, 93, 96, 99, 102, 105, 108, 110, 113]
        },
        "subScales": [
          {
            "name": "BIZ1",
            "title": "Psychotic Symptomatology",
            "answers": [[24, true], [60, true], [96, true], [138, true], [162, true], [228, true], [336, true], [355, true], [361, true], [508, true], [551, true]],
            "tScores": {
              "male": [44, 54, 64, 74, 84, 94, 104, 114, 120],
              "female": [44, 54, 65, 76, 86, 97, 108, 118, 120]
            }
          },
          {
            "name": "BIZ2",
            "title": "Schizotypal Characteristics",
            "answers": [[32, true], [259, true], [298, true], [311, true], [316, true], [319, true], [333, true], [466, true], [543, true]],
            "tScores": {
              "male": [41, 47, 54, 60, 67, 73, 80, 86, 93, 99],
              "female": [41, 47, 54, 60, 66, 72, 79, 85, 91, 97]
            }
          }
        ]
      },
      {
        "name": "ANG",
        "title": "Anger",
        "answers": [[29, true], [37, true], [116, true], [134, true], [302, true], [389, true], [410, true], [414, true], [430, true], [461, true], [486, true], [513, true], [540, true], [542, true], [548, true], [564, false]],
        "tScores": {
          "male": [32, 36, 40, 43, 46, 48, 50, 53, 56, 59, 63, 67, 70, 74, 78, 82, 86],
          "female": [31, 36, 39, 42, 45, 47, 50, 53, 56, 60, 64, 68, 72, 76, 80, 84, 88]
        },
        "subScales": [
          {
            "name": "ANG1",
            "title": "Explosive Behavior",
            "answers": [[37, true], [134, true], [389, true], [414, true], [540, true], [548, true], [564, false]],
            "tScores": {
              "male": [39, 45, 52, 58, 64, 71, 77, 83],
              "female": [39, 47, 54, 61, 69, 76, 84, 91]
            }
          },
          {
            "name": "ANG2",
            "title": "Irritability",
            "answers": [[116, true], [302, true], [430, true], [461, true], [486, true], [513, true], [542, true]],
            "tScores": {
              "male": [35, 41, 46, 51, 56, 61, 67, 72],
              "female": [33, 39, 44, 49, 54, 59, 65, 70]
            }
          }
        ]
      },
      {
        "name": "CYN",
        "title": "Cynicism",
        "answers": [[50, true], [58, true], [76, true], [81, true], [104, true], [110, true], [124, true], [225, true], [241, true], [254, true], [283, true], [284, true], [286, true], [315, true], [346, true], [352, true], [358, true], [374, true], [399, true], [403, true], [445, true], [470, true], [538, true]],
        "tScores": {
          "male": [32, 35, 38, 40, 41, 43, 44, 46, 47, 48, 49, 51, 52, 54, 56, 59, 62, 65, 68, 71, 74, 77, 80, 83],
          "female": [32, 35, 38, 40, 42, 44, 46, 47, 48, 50, 51, 53, 54, 56, 58, 61, 64, 67, 69, 72, 75, 77, 80, 83]
        },
        "subScales": [
          {
            "name": "CYN1",
            "title": "Misanthropic Beliefs",
            "answers": [[58, true], [76, true], [81, true], [104, true], [110, true], [241, true], [254, true], [283, true], [284, true], [286, true], [352, true], [374, true], [399, true], [470, true], [538, true]],
            "tScores": {
              "male": [33, 36, 39, 41, 44, 47, 50, 52, 55, 58, 60, 63, 66, 69, 71, 74],
              "female": [34, 37, 40, 42, 45, 48, 51, 54, 56, 59, 62, 65, 68, 70, 73, 76]
            }
          },
          {
            "name": "CYN2",
            "title": "Interpersonal Suspiciousness",
            "answers": [[50, true], [124, true], [225, true], [315, true], [346, true], [358, true], [403, true], [445, true]],
            "tScores": {
              "male": [34, 39, 43, 48, 53, 57, 62, 66, 71],
              "female": [35, 40, 45, 49, 54, 59, 64, 68, 73]
            }
          }
        ]
      },
      {
        "name": "ASP",
        "title": "Antisocial Practices",
        "answers": [[26, true], [35, true], [66, true], [81, true], [84, true], [104, true], [105, true], [110, true], [123, true], [227, true], [240, true], [248, true], [250, true], [254, true], [266, false], [269, true], [283, true], [284, true], [374, true], [412, true], [418, true], [419, true]],
        "tScores": {
          "male": [30, 34, 37, 40, 42, 44, 46, 47, 49, 51, 53, 55, 58, 62, 65, 69, 72, 76, 79, 83, 87, 90, 94],
          "female": [33, 36, 39, 42, 45, 47, 49, 42, 54, 56, 59, 63, 66, 69, 72, 75, 79, 82, 85, 88, 91, 94, 98]
        },
        "subScales": [
          {
            "name": "ASP1",
            "title": "Antisocial Attitudes",
            "answers": [[26, true], [66, true], [81, true], [104, true], [110, true], [123, true], [227, true], [248, true], [250, true], [254, true], [269, true], [283, true], [284, true], [374, true], [418, true], [419, true]],
            "tScores": {
              "male": [32, 35, 37, 40, 43, 46, 49, 52, 55, 57, 60, 63, 66, 69, 72, 75, 79],
              "female": [33, 36, 39, 42, 45, 48, 52, 55, 58, 61, 64, 67, 70, 73, 76, 79, 82]
            }
          },
          {
            "name": "ASP2",
            "title": "Antisocial Behavior",
            "answers": [[35, true], [84, true], [105, true], [266, false], [412, true]],
            "tScores": {
              "male": [38, 45, 52, 59, 67, 74],
              "female": [42, 51, 61, 71, 81, 90]
            }
          }
        ]
      },
      {
        "name": "TPA",
        "title": "Type A",
        "answers": [[27, true], [136, true], [151, true], [212, true], [302, true], [358, true], [414, true], [419, true], [420, true], [423, true], [430, true], [437, true], [507, true], [510, true], [523, true], [531, true], [535, true], [541, true], [545, true]],
        "tScores": {
          "male": [30, 32, 36, 38, 41, 43, 44, 46, 48, 50, 53, 56, 60, 64, 68, 72, 77, 81, 85, 89],
          "female": [30, 33, 36, 38, 41, 43, 45, 48, 50, 53, 56, 60, 64, 69, 73, 77, 81, 85, 90, 94]
        },
        "subScales": [
          {
            "name": "TPA1",
            "title": "Impatience",
            "answers": [[302, true], [420, true], [430, true], [507, true], [523, true], [535, true]],
            "tScores": {
              "male": [34, 39, 45, 51, 57, 63, 68],
              "female": [34, 40, 46, 52, 58, 64, 70]
            }
          },
          {
            "name": "TPA2",
            "title": "Competitive Drive",
            "answers": [[27, true], [151, true], [212, true], [358, true], [419, true], [423, true], [510, true], [531, true], [545, true]],
            "tScores": {
              "male": [33, 39, 44, 50, 55, 60, 66, 71, 77, 82],
              "female": [34, 40, 46, 52, 58, 64, 70, 76, 82, 89]
            }
          }
        ]
      },
      {
        "name": "LSE",
        "title": "Low Self-esteem",
        "answers": [[61, false], [70, true], [73, true], [78, false], [109, false], [130, true], [235, true], [326, true], [369, true], [376, true], [380, true], [411, true], [421, true], [450, true], [457, true], [475, true], [476, true], [483, true], [485, true], [503, true], [504, true], [519, true], [526, true], [562, true]],
        "tScores": {
          "male": [35, 41, 45, 48, 51, 53, 55, 57, 59, 62, 64, 67, 70, 72, 75, 77, 80, 83, 85, 88, 91, 93, 96, 98, 101],
          "female": [35, 40, 44, 47, 49, 51, 52, 54, 55, 57, 60, 62, 65, 68, 70, 73, 76, 78, 81, 84, 86, 89, 92, 94, 97]
        },
        "subScales": [
          {
            "name": "LSE1",
            "title": "Self-Doubt",
            "answers": [[61, false], [73, true], [78, false], [109, false], [130, true], [326, true], [411, true], [450, true], [483, true], [485, true], [504, true]],
            "tScores": {
              "male": [39, 44, 49, 54, 59, 64, 70, 75, 80, 85, 90, 95],
              "female": [39, 43, 48, 53, 57, 62, 66, 71, 75, 80, 85, 89]
            }
          },
          {
            "name": "LSE2",
            "title": "Submissiveness",
            "answers": [[70, true], [369, true], [421, true], [457, true], [503, true], [519, true]],
            "tScores": {
              "male": [41, 48, 55, 62, 69, 76, 83],
              "female": [39, 45, 51, 57, 63, 69, 75]
            }
          }
        ]
      },
      {
        "name": "SOD",
        "title": "Social Discomfort",
        "answers": [[46, true], [49, false], [86, false], [158, true], [167, true], [185, true], [262, false], [265, true], [275, true], [280, false], [281, true], [321, false], [337, true], [340, false], [349, true], [353, false], [359, false], [360, false], [363, false], [367, true], [370, false], [479, true], [480, true], [515, true]],
        "tScores": {
          "male": [32, 35, 39, 41, 43, 45, 47, 49, 50, 52, 54, 55, 58, 60, 63, 65, 68, 71, 73, 76, 78, 81, 84, 86, 89],
          "female": [32, 35, 39, 41, 44, 46, 48, 49, 51, 52, 54, 56, 58, 60, 63, 65, 68, 70, 72, 75, 77, 80, 82, 84, 87]
        },
        "subScales": [
          {
            "name": "SOD1",
            "title": "Introversion",
            "answers": [[46, true], [49, false], [86, false], [265, true], [280, false], [281, true], [337, true], [340, false], [349, true], [353, false], [359, false], [363, false], [367, true], [370, false], [480, true], [515, true]],
            "tScores": {
              "male": [36, 39, 42, 45, 47, 50, 53, 56, 59, 62, 65, 68, 71, 73, 76, 79, 82],
              "female": [37, 40, 43, 46, 49, 52, 55, 58, 61, 64, 67, 70, 73, 76, 79, 82, 85]
            }
          },
          {
            "name": "SOD2",
            "title": "Shyness",
            "answers": [[158, true], [167, true], [185, true], [262, false], [275, true], [321, false], [360, false]],
            "tScores": {
              "male": [36, 41, 47, 52, 58, 63, 68, 74],
              "female": [35, 40, 45, 50, 55, 60, 65, 69]
            }
          }
        ]
      },
      {
        "name": "FAM",
        "title": "Family Problems",
        "answers": [[21, true], [54, true], [83, false], [125, false], [145, true], [190, true], [195, true], [205, true], [217, false], [256, true], [292, true], [300, true], [323, true], [378, true], [379, true], [382, true], [383, false], [413, true], [449, true], [455, false], [478, true], [543, true], [550, true], [563, true], [567, true]],
        "tScores": {
          "male": [33, 37, 41, 44, 47, 50, 52, 55, 57, 60, 63, 66, 68, 71, 74, 77, 80, 82, 85, 88, 91, 94, 97, 99, 102, 105],
          "female": [32, 36, 39, 42, 45, 47, 50, 52, 55, 57, 60, 62, 65, 68, 70, 73, 75, 78, 81, 83, 86, 89, 91, 94, 96, 99]
        },
        "subScales": [
          {
            "name": "FAM1",
            "title": "Family Discord",
            "answers": [[21, true], [54, true], [83, false], [190, true], [205, true], [256, true], [323, true], [378, true], [382, true], [449, true], [478, true], [563, true]],
            "tScores": {
              "male": [35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90, 95],
              "female": [33, 38, 42, 47, 52, 57, 62, 67, 71, 76, 81, 86, 91]
            }
          },
          {
            "name": "FAM2",
            "title": "Familial Alienation",
            "answers": [[195, true], [217, false], [383, false], [455, false], [550, true]],
            "tScores": {
              "male": [40, 49, 58, 67, 76, 84],
              "female": [41, 50, 59, 68, 77, 86]
            }
          }
        ]
      },
      {
        "name": "WRK",
        "title": "Work Interference",
        "answers": [[10, false], [15, true], [17, true], [31, true], [54, true], [73, true], [98, true], [108, false], [135, true], [233, true], [243, true], [299, true], [302, true], [318, false], [339, true], [364, true], [368, true], [394, true], [409, true], [428, true], [445, true], [464, true], [491, true], [505, true], [509, true], [517, true], [521, false], [525, true], [545, true], [554, true], [559, true], [561, false], [566, true]],
        "tScores": {
          "male": [33, 36, 39, 41, 44, 46, 48, 50, 52, 54, 56, 57, 59, 61, 63, 65, 67, 68, 70, 72, 74, 76, 78, 79, 81, 83, 85, 87, 89, 90, 92, 94, 96, 98],
          "female": [31, 34, 37, 40, 43, 45, 46, 48, 50, 51, 52, 54, 55, 57, 59, 61, 63, 65, 67, 69, 70, 73, 76, 78, 80, 82, 84, 86, 88, 90, 92, 95, 97, 99]
        }
      },
      {
        "name": "TRT",
        "title": "Negative Treatment Indicators",
        "answers": [[22, true], [92, true], [274, true], [306, true], [364, true], [368, true], [373, true], [375, true], [376, true], [377, true], [391, true], [399, true], [482, true], [488, true], [491, true], [493, false], [494, false], [495, true], [497, true], [499, true], [500, true], [501, false], [504, true], [528, true], [539, true], [554, true]],
        "tScores": {
          "male": [35, 39, 43, 47, 49, 52, 54, 56, 59, 61, 64, 66, 69, 71, 74, 76, 79, 81, 84, 86, 89, 91, 94, 96, 99, 101, 104],
          "female": [35, 39, 43, 46, 49, 51, 53, 55, 57, 59, 61, 64, 67, 69, 72, 74, 77, 79, 82, 84, 87, 89, 92, 95, 97, 100, 102]
        },
        "subScales": [
          {
            "name": "TRT1",
            "title": "Low Motivation",
            "answers": [[92, true], [364, true], [368, true], [376, true], [491, true], [494, false], [497, true], [500, true], [528, true], [539, true], [554, true]],
            "tScores": {
              "male": [42, 48, 54, 60, 66, 71, 77, 83, 89, 95, 101, 107],
              "female": [41, 46, 51, 56, 61, 66, 71, 76, 81, 86, 91, 96]
            }
          },
          {
            "name": "TRT2",
            "title": "Inability to Disclose",
            "answers": [[274, true], [373, true], [375, true], [391, true], [495, true]],
            "tScores": {
              "male": [37, 45, 52, 60, 68, 75],
              "female": [38, 46, 53, 60, 68, 75]
            }
          }
        ]
      }
    ]
  },
  {
    "title": "Generalized Emotional Distress Scales",
    "items": [
      {
        "name": "A",
        "title": "Anxiety",
        "answers": [[31, true], [38, true], [56, true], [65, true], [82, true], [127, true], [135, true], [215, true], [233, true], [243, true], [251, true], [273, true], [277, true], [289, true], [301, true], [309, true], [310, true], [311, true], [325, true], [328, true], [338, true], [339, true], [341, true], [347, true], [388, false], [390, true], [391, true], [394, true], [400, true], [408, true], [411, true], [415, true], [421, true], [428, true], [442, true], [448, true], [451, true], [464, true], [469, true]],
        "tScores": {
          "male": [36, 37, 39, 40, 42, 43, 44, 46, 47, 49, 50, 51, 53, 54, 56, 57, 58, 60, 61, 63, 64, 65, 67, 68, 70, 71, 73, 74, 75, 77, 78, 80, 81, 82, 84, 85, 87, 88, 89, 91],
          "female": [35, 37, 38, 39, 40, 42, 43, 44, 45, 47, 48, 49, 50, 52, 53, 54, 56, 57, 58, 59, 61, 62, 63, 64, 66, 67, 68, 69, 71, 72, 73, 74, 76, 77, 76, 80, 81, 82, 83, 85]
        }
      },
      {
        "name": "Mt",
        "title": "College Maladjustment",
        "answers": [[2, false], [3, false], [9, false], [10, false], [15, true], [16, true], [20, false], [28, true], [31, true], [38, true], [43, false], [71, true], [73, true], [81, true], [82, true], [95, false], [110, true], [130, true], [131, false], [140, false], [148, false], [152, false], [215, true], [218, true], [223, false], [233, true], [269, true], [273, true], [299, true], [302, true], [325, true], [331, true], [339, true], [357, true], [405, false], [408, true], [411, true], [449, true], [464, true], [469, true], [472, true]],
        "tScores": {
          "male": [32, 34, 36, 37, 39, 40, 42, 43, 45, 46, 48, 50, 51, 53, 54, 56, 57, 59, 60, 62, 64, 65, 67, 68, 70, 71, 73, 74, 76, 77, 79, 81, 82, 84, 85, 87, 88, 30, 31, 93, 95, 96],
          "female": [32, 34, 35, 37, 38, 40, 41, 42, 44, 45, 47, 48, 50, 51, 52, 54, 55, 57, 58, 60, 61, 62, 64, 65, 67, 68, 70, 71, 72, 74, 75, 77, 78, 80, 81, 82, 84, 85, 87, 88, 90, 91]
        }
      },
      {
        "name": "PK",
        "title": "Keane Post-traumatic Stress Disorder",
        "answers": [[2, false], [3, false], [9, false], [16, true], [17, true], [22, true], [23, true], [30, true], [31, true], [32, true], [37, true], [39, true], [48, true], [49, false], [52, true], [56, true], [59, true], [65, true], [75, false], [82, true], [85, true], [92, true], [94, true], [95, false], [101, true], [125, false], [135, true], [140, false], [150, true], [168, true], [170, true], [196, true], [221, true], [274, true], [277, true], [302, true], [303, true], [305, true], [316, true], [319, true], [327, true], [328, true], [339, true], [347, true], [349, true], [367, true]],
        "tScores": {
          "male": [37, 38, 40, 42, 43, 45, 47, 48, 50, 52, 53, 55, 57, 58, 60, 62, 63, 65, 67, 68, 70, 72, 73, 75, 77, 78, 80, 82, 83, 85, 87, 88, 90, 92, 93, 95, 97, 98, 100, 102, 103, 105, 107, 108, 110, 112, 113],
          "female": [37, 39, 40, 42, 43, 45, 46, 48, 49, 51, 52, 54, 55, 57, 58, 60, 61, 63, 64, 66, 67, 69, 71, 72, 74, 75, 77, 78, 80, 81, 83, 84, 86, 87389, 90, 92, 93, 95, 96, 98, 99, 101, 103, 104, 106, 107]
        }
      },
      {
        "name": "PS",
        "title": "Post-traumatic Stress Disorder",
        "answers": [[3, false], [9, false], [17, true], [21, true], [22, true], [31, true], [32, true], [37, true], [38, true], [44, true], [45, false], [48, true], [56, true], [59, true], [65, true], [75, false], [85, true], [94, true], [95, false], [116, true], [135, true], [141, false], [145, true], [150, true], [165, false], [168, true], [170, true], [180, true], [208, false], [218, true], [221, true], [223, false], [273, true], [274, true], [277, true], [280, false], [299, true], [301, true], [304, true], [305, true], [311, true], [316, true], [319, true], [325, true], [328, true], [372, false], [377, true], [386, true], [400, true], [405, false], [463, true], [464, true], [469, true], [471, true], [475, true], [479, true], [515, true], [516, true], [564, false], [565, true]],
        "tScores": {
          "male": [37, 38, 39, 41, 42, 43, 44, 46, 47, 48, 49, 51, 52, 53, 54, 56, 57, 58, 59, 61, 62, 63, 64, 66, 67, 68, 69, 71, 72, 73, 74, 76, 77, 78, 79, 81, 82, 83, 84, 86, 87, 88, 89, 91, 92, 93, 94, 96, 97, 98, 99, 101, 102, 103, 104, 106, 107, 108, 110, 111, 112],
          "female": [37, 38, 39, 40, 41, 42, 43, 45, 46, 47, 48, 49, 50, 51, 52, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 66, 68, 69, 70, 71, 73, 74, 75, 76, 77, 78, 79, 80, 81, 83, 84, 85, 86, 87, 88, 89, 90, 92, 93, 94, 95, 97, 98, 99, 100, 102, 103, 104]
        }
      },
      {
        "name": "MDS",
        "title": "Marital Distress",
        "answers": [[12, false], [21, true], [22, true], [83, false], [95, false], [125, false], [135, true], [195, true], [219, true], [382, true], [484, true], [493, false], [494, false], [563, true]],
        "tScores": {
          "male": [37, 42, 46, 51, 56, 60, 65, 69, 74, 79, 83, 88, 92, 97, 102],
          "female": [38, 42, 46, 50, 55, 59, 63, 68, 72, 76, 80, 85, 89, 93, 98]
        }
      }
    ]
  },
  {
    "title": "Broad Personality Characteristic Scales",
    "items": [
      {
        "name": "R",
        "title": "Repression",
        "answers": [[1, false], [7, false], [10, false], [14, false], [37, false], [45, false], [69, false], [112, false], [118, false], [120, false], [128, false], [134, false], [142, false], [168, false], [178, false], [189, false], [197, false], [199, false], [248, false], [255, false], [256, false], [297, false], [330, false], [346, false], [350, false], [353, false], [354, false], [359, false], [363, false], [365, false], [422, false], [423, false], [430, false], [432, false], [449, false], [456, false], [465, false]],
        "tScores": {
          "male": [30, 32, 34, 36, 39, 41, 43, 45, 47, 50, 52, 54, 56, 58, 61, 63, 65, 67, 69, 72, 74, 76, 81, 83, 85, 87, 89, 92, 94, 96, 98],
          "female": [30, 31, 33, 36, 39, 41, 44, 46, 49, 52, 54, 57, 60, 62, 65, 67, 70, 73, 75, 78, 81, 83, 86, 88, 91, 94, 96, 99, 102, 104]
        },
        "scoreOffsets": {
          "male": 6,
          "female": 8
        }
      },
      {
        "name": "Es",
        "title": "Ego Strength",
        "answers": [[2, true], [23, false], [31, false], [32, false], [33, true], [36, false], [39, false], [45, true], [53, false], [60, false], [70, false], [82, false], [87, false], [98, true], [119, false], [128, false], [141, true], [159, true], [169, true], [175, false], [177, true], [179, true], [189, true], [196, false], [199, true], [209, true], [213, true], [215, false], [221, false], [225, false], [229, false], [230, true], [236, false], [245, true], [246, false], [307, false], [310, false], [316, false], [325, true], [328, false], [385, true], [391, false], [394, false], [406, true], [413, true], [425, true], [441, false], [447, false], [458, false], [464, false], [469, false], [471, false]],
        "tScores": {
          "male": [30, 31, 34, 36, 38, 40, 42, 45, 47, 49, 51, 54, 56, 58, 60, 63, 65, 67, 69, 72, 74, 76, 78, 81, 83],
          "female": [30, 31, 33, 35, 37, 39, 41, 43, 45, 47, 49, 51, 53, 55, 57, 59, 61, 64, 66, 68, 70, 72, 74, 76, 78, 80, 82, 84, 86]
        },
        "scoreOffsets": {
          "male": 28,
          "female": 24
        }
      },
      {
        "name": "Do",
        "title": "Dominance",
        "answers": [[31, false], [52, false], [55, true], [70, false], [73, false], [82, false], [172, false], [201, false], [202, false], [207, true], [220, false], [227, false], [232, true], [243, false], [244, false], [245, true], [275, false], [309, false], [325, false], [386, true], [399, false], [412, false], [416, true], [470, false], [473, false]],
        "tScores": {
          "male": [30, 31, 34, 38, 41, 45, 48, 51, 55, 58, 61, 65, 68, 72, 75, 78],
          "female": [30, 32, 35, 39, 42, 46, 49, 53, 56, 59, 63, 66, 70, 73, 77, 80]
        },
        "scoreOffsets": {
          "male": 10,
          "female": 10
        }
      },
      {
        "name": "Re",
        "title": "Social Responsibility",
        "answers": [[7, false], [27, false], [29, false], [32, false], [84, false], [100, true], [103, false], [105, false], [145, false], [160, true], [164, false], [169, false], [199, true], [201, false], [202, false], [235, false], [266, true], [275, false], [358, false], [412, false], [417, false], [418, false], [430, false], [431, false], [432, false], [440, true], [456, false], [467, true], [468, false], [470, false]],
        "tScores": {
          "male": [30, 32, 34, 37, 39, 42, 45, 47, 50, 52, 55, 57, 60, 63, 65, 68, 70, 73, 76],
          "female": [30, 32, 35, 38, 41, 44, 47, 50, 53, 56, 59, 62, 65, 68, 71, 74, 77]
        },
        "scoreOffsets": {
          "male": 12,
          "female": 14
        }
      }
    ]
  },
  {
    "title": "Behavior Dyscontrol Scales",
    "items": [
      {
        "name": "Ho",
        "title": "Hostility",
        "answers": [[19, true], [27, true], [46, true], [50, true], [58, true], [76, true], [81, true], [99, true], [104, true], [110, true], [124, true], [136, true], [145, true], [171, true], [205, true], [217, false], [225, true], [227, true], [230, false], [241, true], [248, true], [251, true], [254, true], [259, true], [265, true], [286, true], [306, true], [315, true], [338, true], [346, true], [347, true], [352, true], [357, true], [358, true], [372, false], [386, true], [393, true], [398, true], [406, true], [414, true], [419, true], [423, true], [425, true], [436, true], [443, true], [445, true], [452, true], [457, true], [466, true], [470, true]],
        "tScores": {
          "male": [30, 31, 32, 33, 34, 35, 36, 38, 39, 40, 41, 42, 44, 45, 46, 47, 48, 50, 51, 52, 53, 54, 56, 57, 58, 59, 60, 62, 63, 64, 65, 66, 67, 69, 70, 71, 72, 73, 75, 76, 77, 78, 79, 81, 82, 83, 84, 85, 87, 88],
          "female": [30, 31, 32, 34, 35, 36, 37, 39, 40, 41, 42, 44, 45, 46, 47, 49, 50, 51, 52, 54, 55, 56, 58, 59, 60, 61, 63, 64, 65, 66, 68, 69, 70, 71, 73, 74, 75, 76, 78, 79, 80, 82, 83, 84, 85, 87, 88, 89, 90, 92]
        },
        "scoreOffsets": {
          "male": 1,
          "female": 1
        }
      },
      {
        "name": "O-H",
        "title": "Overcontrolled Hostility",
        "answers": [[1, false], [15, false], [29, false], [67, true], [69, false], [77, false], [79, true], [89, false], [98, false], [116, false], [117, false], [129, false], [153, false], [169, false], [171, false], [207, true], [286, true], [293, false], [305, true], [344, false], [390, false], [398, true], [400, false], [420, false], [433, false], [440, false], [460, false], [471, true]],
        "tScores": {
          "male": [30, 31, 35, 38, 41, 45, 48, 52, 55, 59, 62, 65, 69, 72, 76, 79, 82, 86, 89, 93, 96, 99, 103],
          "female": [30, 33, 37, 41, 44, 48, 52, 55, 59, 63, 66, 70, 74, 77, 81, 85, 88, 92, 96, 99, 103]
        },
        "scoreOffsets": {
          "male": 6,
          "female": 8
        }
      },
      {
        "name": "MAC-R",
        "title": "MacAndrew Alcoholism Scale-Revised",
        "answers": [[7, true], [24, true], [36, true], [49, true], [52, true], [69, true], [72, true], [73, false], [82, true], [84, true], [103, true], [105, true], [107, false], [113, true], [115, true], [117, false], [128, true], [137, false], [160, false], [166, false], [168, true], [172, true], [202, true], [214, true], [224, true], [229, true], [238, true], [251, false], [257, true], [266, false], [280, true], [287, false], [299, false], [325, false], [342, true], [344, true], [387, false], [407, true], [412, true], [414, true], [422, true], [434, true], [439, true], [445, true], [456, true], [473, true], [502, true], [506, true], [549, true]],
        "tScores": {
          "male": [30, 32, 34, 37, 39, 41, 44, 46, 48, 51, 53, 55, 58, 60, 62, 64, 67, 69, 72, 74, 76, 78, 81, 83, 85, 88, 90, 92, 95, 97, 99, 102, 104, 106, 109, 111, 113],
          "female": [30, 31, 34, 37, 40, 42, 45, 48, 50, 53, 56, 59, 61, 64, 67, 69, 72, 75, 78, 80, 83, 86, 88, 91, 94, 96, 99, 102, 105, 107, 110, 113, 115, 116, 120]
        },
        "scoreOffsets": {
          "male": 13,
          "female": 11
        }
      },
      {
        "name": "AAS",
        "title": "Addiction Acknowledgement",
        "answers": [[172, true], [264, true], [266, false], [288, true], [362, true], [387, true], [429, false], [487, true], [489, true], [501, false], [511, true], [527, true], [544, true]],
        "tScores": {
          "male": [36, 41, 46, 51, 56, 60, 65, 70, 75, 80, 85, 90, 95, 100],
          "female": [39, 44, 50, 56, 61, 67, 7, 78, 84, 90, 95, 101, 107, 113]
        }
      },
      {
        "name": "APS",
        "title": "Addiction Potential",
        "answers": [[4, false], [7, true], [29, true], [41, true], [43, false], [76, false], [89, true], [103, true], [104, false], [113, true], [120, true], [137, false], [157, false], [168, true], [183, true], [189, true], [196, true], [217, true], [220, false], [239, false], [242, true], [260, true], [267, true], [306, false], [312, false], [341, true], [342, true], [344, true], [349, false], [377, true], [422, true], [440, false], [495, false], [496, false], [500, false], [502, true], [504, false], [523, true], [540, true]],
        "tScores": {
          "male": [30, 33, 35, 38, 41, 44, 46, 49, 52, 54, 57, 60, 63, 65, 68, 71, 73, 76, 79, 82, 84, 87, 90, 92],
          "female": [30, 31, 33, 36, 39, 42, 44, 47, 50, 52, 55, 58, 60, 63, 66, 69, 71, 74, 77, 79, 82, 85, 87, 90, 93]
        },
        "scoreOffsets": {
          "male": 16,
          "female": 15
        }
      }
    ]
  },
  {
    "title": "Gender Role Scales",
    "items": [
      {
        "name": "GM",
        "title": "Masculine Gender Role",
        "answers": [[4, false], [8, true], [20, true], [23, false], [44, false], [64, false], [70, false], [73, false], [74, false], [80, false], [100, false], [137, false], [143, true], [146, false], [152, true], [159, true], [163, true], [176, true], [187, false], [199, true], [214, true], [237, true], [289, false], [321, true], [331, true], [350, true], [351, false], [364, false], [385, true], [388, true], [392, false], [395, false], [401, true], [435, false], [438, false], [440, true], [441, false], [462, true], [467, true], [469, false], [471, false], [474, true], [498, false], [509, false], [519, false], [532, false], [536, false]],
        "tScores": {
          "male": [30, 31, 34, 36, 38, 40, 42, 45, 47, 49, 51, 53, 56, 58, 60, 62, 64, 66, 69, 71],
          "female": [30, 32, 33, 35, 36, 38, 40, 41, 43, 44, 46, 47, 49, 50, 52, 53, 55, 56, 58, 59, 61, 63, 64, 66, 67, 69, 70, 72, 73, 75, 76, 78]
        },
        "scoreOffsets": {
          "male": 28,
          "female": 16
        }
      },
      {
        "name": "GF",
        "title": "Feminine Gender Role",
        "answers": [[1, false], [27, false], [62, true], [63, false], [67, true], [68, false], [79, false], [84, false], [105, false], [119, true], [121, true], [123, false], [128, true], [133, false], [155, false], [197, false], [201, false], [203, false], [220, false], [231, false], [238, false], [239, false], [250, false], [257, false], [263, true], [264, false], [266, true], [272, false], [287, false], [353, true], [384, true], [406, false], [417, false], [426, true], [449, true], [456, true], [465, false], [475, true], [477, false], [487, false], [510, false], [511, false], [537, false], [548, false], [550, false], [552, true]],
        "tScores": {
          "male": [30, 32, 34, 37, 39, 41, 43, 45, 47, 49, 51, 54, 56, 58, 60, 62, 64, 66, 68, 71, 73, 75, 77, 79, 81, 83, 85, 88, 90],
          "female": [30, 33, 35, 38, 40, 43, 46, 48, 51, 53, 56, 59, 61, 64, 66, 69, 71]
        },
        "scoreOffsets": {
          "male": 18,
          "female": 30
        }
      }
    ]
  },
  {
    "title": "Personality Psychopathology Five",
    "items": [
      {
        "name": "AGGR",
        "title": "Aggressiveness",
        "answers": [[27, true], [50, true], [70, false], [85, true], [134, true], [239, true], [323, true], [324, true], [346, true], [350, true], [358, true], [414, true], [423, true], [446, false], [452, true], [503, false], [521, true], [548, true]],
        "tScores": {
          "male": [30, 33, 36, 38, 40, 43, 45, 48, 51, 54, 59, 64, 69, 74, 79, 84, 89, 94],
          "female": [30, 32, 35, 38, 41, 44, 46, 49, 53, 57, 61, 66, 71, 76, 81, 86, 91, 96, 101]
        },
        "scoreOffsets": {
          "male": 1,
          "female": 0
        }
      },
      {
        "name": "PSYC",
        "title": "Psychoticism",
        "answers": [[24, true], [42, true], [48, true], [72, true], [96, true], [99, true], [138, true], [144, true], [184, false], [198, true], [241, true], [259, true], [315, true], [319, true], [336, true], [355, true], [361, true], [374, true], [427, false], [448, true], [466, true], [490, true], [508, true], [549, true], [551, true]],
        "tScores": {
          "male": [35, 40, 45, 49, 52, 56, 59, 62, 65, 68, 72, 75, 78, 81, 84, 88, 91, 94, 97, 101, 104, 107, 110, 114, 117, 120],
          "female": [35, 41, 46, 50, 53, 56, 60, 63, 66, 69, 72, 75, 78, 81, 84, 87, 90, 93, 96, 99, 103, 106, 109, 112, 115, 118]
        }
      },
      {
        "name": "DISC",
        "title": "Disconstraint",
        "answers": [[34, false], [35, true], [84, true], [88, true], [100, false], [103, true], [105, true], [121, false], [123, true], [126, false], [154, false], [209, true], [222, true], [250, true], [263, false], [266, false], [284, true], [309, false], [344, true], [351, false], [362, true], [385, true], [402, false], [412, true], [417, true], [418, true], [431, true], [477, true], [497, false]],
        "tScores": {
          "male": [30, 31, 33, 35, 37, 39, 41, 42, 44, 46, 49, 51, 54, 57, 60, 64, 67, 71, 75, 78, 82, 82, 89, 93, 96, 100],
          "female": [30, 31, 34, 37, 39, 42, 44, 46, 49, 51, 54, 56, 60, 63, 66, 69, 73, 76, 79, 83, 86, 89, 93, 96, 99, 102, 106, 109]
        },
        "scoreOffsets": {
          "male": 4,
          "female": 2
        }
      },
      {
        "name": "NEGE",
        "title": "Negative Emotionality / Neuroticism",
        "answers": [[37, true], [52, true], [63, false], [82, true], [93, true], [116, true], [166, true], [196, true], [213, true], [223, false], [290, true], [301, true], [305, true], [329, true], [372, false], [375, true], [389, true], [390, true], [395, true], [397, true], [405, false], [407, true], [409, true], [415, true], [435, true], [442, true], [444, true], [451, true], [496, false], [513, true], [542, true], [556, true], [564, false]],
        "tScores": {
          "male": [31, 34, 36, 39, 41, 43, 44, 46, 48, 49, 51, 52, 54, 56, 57, 59, 61, 64, 66, 68, 70, 72, 74, 76, 78, 80, 82, 84, 86, 89, 91, 93, 95, 97],
          "female": [30, 31, 34, 36, 38, 40, 42, 44, 45, 46, 48, 49, 50, 52, 53, 55, 57, 59, 61, 63, 66, 68, 70, 72, 75, 77, 79, 81384, 86, 88, 90, 93, 95]
        }
      },
      {
        "name": "INTR",
        "title": "Introversion / Low Positive Emotionality",
        "answers": [[9, false], [38, true], [49, false], [56, true], [61, false], [75, false], [78, false], [86, false], [95, false], [109, false], [131, false], [174, false], [188, false], [189, false], [207, false], [226, false], [231, false], [233, true], [244, false], [267, false], [318, false], [330, false], [340, false], [342, false], [343, false], [353, false], [356, false], [359, false], [370, false], [460, false], [515, true], [517, true], [531, false], [534, false]],
        "tScores": {
          "male": [30, 31, 33, 35, 37, 39, 41, 43, 45, 48, 50, 52, 54, 56, 59, 61, 64, 66, 68, 71, 73, 76, 78, 80, 83, 85, 88, 90, 92, 95, 97, 100, 102, 105],
          "female": [30, 32, 34, 37, 39, 42, 44, 46, 48, 50, 53, 55, 57, 60, 63, 65, 68, 70, 73, 76, 78, 81, 83, 86, 89, 91, 94, 96, 99, 102, 104, 107, 109]
        },
        "scoreOffsets": {
          "male": 1,
          "female": 2
        }
      }
    ]
  },
  {
    "title": "Koss-Butcher Critical Items",
    "items": [
      {
        "name": "KB1",
        "title": "Acute Anxiety Scale",
        "answers": [[2, false], [3, false], [5, true], [10, false], [15, true], [28, true], [39, true], [59, true], [140, false], [172, true], [208, false], [218, true], [223, false], [301, true], [444, true], [463, true], [469, true]]
      },
      {
        "name": "KB2",
        "title": "Depressed Suicidal Ideation",
        "answers": [[9, false], [38, true], [65, true], [71, true], [75, false], [92, true], [95, false], [130, true], [146, true], [215, true], [233, true], [273, true], [303, true], [306, true], [388, false], [411, true], [454, true], [485, true], [506, true], [518, true], [520, true], [524, true]]
      },
      {
        "name": "KB3",
        "title": "Threatened Assault",
        "answers": [[37, true], [85, true], [134, true], [213, true], [389, true]]
      },
      {
        "name": "KB4",
        "title": "Situational Stress Due to Alcoholism",
        "answers": [[125, false], [264, true], [487, true], [489, true], [502, true], [511, true], [518, true]]
      },
      {
        "name": "KB5",
        "title": "Mental Confusion",
        "answers": [[24, true], [31, true], [32, true], [72, true], [96, true], [180, true], [198, true], [299, true], [311, true], [316, true], [325, true]]
      },
      {
        "name": "KB6",
        "title": "Persecutory Ideas",
        "answers": [[17, true], [42, true], [99, true], [124, true], [138, true], [144, true], [145, true], [162, true], [216, true], [228, true], [241, true], [251, true], [259, true], [314, false], [333, true], [361, true]]
      }
    ]
  },
  {
    "title": "Lachar-Wrobel Critical Items",
    "items": [
      {
        "name": "LW1",
        "title": "Anxiety and Tension",
        "answers": [[15, true], [17, true], [172, true], [218, true], [223, false], [261, false], [299, true], [301, true], [320, true], [405, false], [463, true]]
      },
      {
        "name": "LW2",
        "title": "Depression and Worry",
        "answers": [[2, false], [3, false], [10, false], [65, true], [73, true], [75, false], [130, true], [150, true], [165, false], [180, true], [273, true], [303, true], [339, true], [411, true], [415, true], [454, true]]
      },
      {
        "name": "LW3",
        "title": "Sleep Disturbance",
        "answers": [[5, true], [30, true], [39, true], [140, false], [328, true], [471, true]]
      },
      {
        "name": "LW4",
        "title": "Deviant Beliefs",
        "answers": [[42, true], [99, true], [106, false], [138, true], [144, true], [162, true], [216, true], [228, true], [259, true], [314, false], [333, true], [336, true], [355, true], [466, true]]
      },
      {
        "name": "LW5",
        "title": "Deviant Thinking and Experience",
        "answers": [[32, true], [60, true], [96, true], [122, true], [198, true], [298, true], [307, true], [316, true], [319, true], [427, true]]
      },
      {
        "name": "LW6",
        "title": "Substance Abuse",
        "answers": [[168, true], [264, true], [429, false]]
      },
      {
        "name": "LW7",
        "title": "Antisocial Attitude",
        "answers": [[27, true], [35, true], [84, true], [105, true], [227, true], [240, true], [254, true], [266, false], [324, true]]
      },
      {
        "name": "LW8",
        "title": "Family Conflict",
        "answers": [[21, true], [83, false], [125, false], [288, true]]
      },
      {
        "name": "LW9",
        "title": "Problematic Anger",
        "answers": [[85, true], [134, true], [213, true], [389, true]]
      },
      {
        "name": "LW10",
        "title": "Sexual Concern and Deviation",
        "answers": [[12, false], [34, false], [62, true], [121, false], [166, true], [268, true]]
      },
      {
        "name": "LW11",
        "title": "Somatic Symptoms",
        "answers": [[18, true], [28, true], [33, false], [40, true], [44, true], [47, false], [53, true], [57, true], [59, true], [101, true], [111, true], [142, false], [159, false], [164, false], [175, true], [176, false], [182, true], [224, false], [229, true], [247, true], [255, false], [295, false], [464, true]]
      }
    ]
  }
]

export default scales;