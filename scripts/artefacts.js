const artefactsCount = [];

let artefactsList = [
    { name: "Blank Slot", mats: [], imageData: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACIAAAAiCAYAAAA6RwvCAAACuUlEQVRYR5WX61XDMAyFk0HoDDAE+49UjhVL+XQtOaWHH5DGtnRfFufr5/f9fh/HeZ7HcbyP8Ts/4+lxfTV+7DP/POaS+7m9fH18n/GO7plPmHuOQnSxHnYVis2vunJR85ke/K9C7CDfSDbkc3tpduvPvWj/ziqcRX9ahO3x9X0hYjAD1lQAiiNF/j6WXoU6WkJpRUnsMQqJItDNogWcYK/56XONF+i6IW/+SjRaVGSILJtyBaAJAQYfDmHWTEIFCLE5reUqRDCmi1KnXI02lwLpMHENtcXtztfQiMIsGCYqpBUKfenyBiy+6gsR+3puuGUNZrgqdUERMzsmB2r7R7HaOrecdKEdkEalxAtmAHYIUA2GuFFD8TXOUaG5wFlMUFikcIVkekax0mZMeg2vlBOOIBYs0V+gTGdZk46Ier1ycIWKainRjITtgjCaCmqAk0K8xPyEXsNLaVLGK1c5AKddeoAVQXlbToRMTSWBwmFx30igdc6JQFuoKS64XdxU33V3DkeLcI+LlUjQypVoecnpOLALNR0lks0p1sXbxUAU88KnkDf5tBQ8CmFXbqsEdaURzC9coxrTOcdd5YkdzfuEFjYU4apl6YRFeA/pXI2Y3nAp1q4rUqdzbHT65EAZMwPNSFbEZzgIGtEpLCyMOFe0PI84PJNyop3nkcbkDDh9ha7aOkZm4sUYMbNSfJzYwbuKuhL2csCDu0I3VSHdhZc0oiNgM4l9PAYw0NQhHZ/a9ZOznugz6h0R7db/3qGTZt1mBkkXJkSkiXz/XyMvVWhocCXVb7TQzjPzzIRIlYCNiZZZewd9RVsVigmRcgRA1SxMb1Cl0NHjodU7a6Bt+KvcotTtaNLRsQw+TmhpFGg414R9ckQl+mgM4kl3TcfnQomIpyumQq1M33Patxp0KqH+R9Bd+HWU/gFye5V8POZIjAAAAABJRU5ErkJggg==" },
    { name: "Venator Dagger", mats: [{ name: "Third Age iron", qty: 16 }, { name: "Zarosian insignia", qty: 12 }], imageData: "" },
    { name: "Venator Light Crossbow", mats: [{ name: "Third Age iron", qty: 12 }, { name: "Zarosian insignia", qty: 16  }], imageData: "" },
    { name: "Legionary Gladius", mats: [{ name: "Third Age iron", qty: 10 }, { name: "Zarosian insignia", qty: 6 }, { name: "Imperial steel", qty: 12  }], imageData: "" },
    { name: "Legionary Square Shield", mats: [{ name: "Third Age iron", qty: 8 }, { name: "Zarosian insignia", qty: 8 }, { name: "Imperial steel", qty: 12  }], imageData: "" },
    { name: "Primis Elementis Standard", mats: [{ name: "Samite silk", qty: 16 }, { name: "Third Age iron", qty: 12  }], imageData: "" },
    { name: "Zaros Effigy", mats: [{ name: "Samite silk", qty: 8 }, { name: "White oak", qty: 10 }, { name: "Zarosian insignia", qty: 12  }], imageData: "" },
    { name: "Zarosian Training Dummy", mats: [{ name: "Third Age iron", qty: 16 }, { name: "White oak", qty: 14  }], imageData: "" },
    { name: "Hookah Pipe", mats: [{ name: "Third Age iron", qty: 10 }, { name: "Goldrune", qty: 12 }, { name: "Orthenglass", qty: 8  }], imageData: "" },
    { name: "Opulent Wine Goblet", mats: [{ name: "Third Age iron", qty: 14 }, { name: "Goldrune", qty: 16  }], imageData: "" },
    { name: "Crest of Dagon", mats: [{ name: "Goldrune", qty: 14 }, { name: "Orthenglass", qty: 18  }], imageData: "" },
    { name: "Disorder Painting", mats: [{ name: "Samite silk", qty: 6 }, { name: "White oak", qty: 6 }, { name: "Vellum", qty: 6 }, { name: "Cadmium red", qty: 14  }], imageData: "" },
    { name: "Legatus Maximus Figurine", mats: [{ name: "Goldrune", qty: 8 }, { name: "Zarosian insignia", qty: 14 }, { name: "Ancient vis", qty: 10  }], imageData: "" },
    { name: "Solem in Umbra Painting", mats: [{ name: "Samite silk", qty: 8 }, { name: "White oak", qty: 10 }, { name: "Tyrian purple", qty: 14  }], imageData: "" },
    { name: "Lesser Demon Mask", mats: [{ name: "Leather scraps", qty: 6 }, { name: "Chaotic brimstone", qty: 8 }, { name: "Demonhide", qty: 12 }, { name: "Cadmium red", qty: 6  }], imageData: "" },
    { name: "Imp Mask", mats: [{ name: "Leather scraps", qty: 10 }, { name: "Chaotic brimstone", qty: 10 }, { name: "Demonhide", qty: 12  }], imageData: "" },
    { name: "Greater Demon Mask", mats: [{ name: "Third Age iron", qty: 6 }, { name: "Leather scraps", qty: 6 }, { name: "Chaotic brimstone", qty: 8 }, { name: "Demonhide", qty: 12  }], imageData: "" },
    { name: "Order of Dis Robes", mats: [{ name: "Samite silk", qty: 16 }, { name: "Cadmium red", qty: 10 }, { name: "Eye of Dagon", qty: 14  }], imageData: "" },
    { name: "Ritual Dagger", mats: [{ name: "Goldrune", qty: 16 }, { name: "Hellfire metal", qty: 24  }], imageData: "" },
    { name: "Frying Pan", mats: [{ name: "Third Age iron", qty: 20 }, { name: "White marble", qty: 24  }], imageData: "" },
    { name: "Hallowed Lantern", mats: [{ name: "Third Age iron", qty: 20 }, { name: "Keramos", qty: 24  }], imageData: "" },
    { name: "Branding Iron", mats: [{ name: "Third Age iron", qty: 14 }, { name: "Eye of Dagon", qty: 12 }, { name: "Hellfire metal", qty: 20  }], imageData: "" },
    { name: "Manacles", mats: [{ name: "Third Age iron", qty: 14 }, { name: "Chaotic brimstone", qty: 18 }, { name: "Eye of Dagon", qty: 14  }], imageData: "" },
    { name: "Ancient Timepiece", mats: [{ name: "Goldrune", qty: 12 }, { name: "Imperial steel", qty: 16 }, { name: "Ancient vis", qty: 18  }], imageData: "" },
    { name: "Legatus Pendant", mats: [{ name: "Third Age iron", qty: 16 }, { name: "Goldrune", qty: 18 }, { name: "Ancient vis", qty: 12  }], imageData: "" },
    { name: "Ceremonial Unicorn Ornament", mats: [{ name: "Keramos", qty: 26 }, { name: "Cobalt blue", qty: 20  }], imageData: "" },
    { name: "Ceremonial Unicorn Saddle", mats: [{ name: "Leather scraps", qty: 24 }, { name: "Cobalt blue", qty: 22  }], imageData: "" },
    { name: "Tertacompass", mats: [{ name: "Malachite green", qty: 30 },{ name: "Cadmium red", qty: 30 },{ name: "Cobalt blue", qty: 30 },{ name: "Armadylean yellow", qty: 30 },{ name: "Tyrian purple", qty: 30 } ] },
    { name: "Everlight Harp", mats: [{ name: "Everlight silvthril", qty: 30 }, { name: "White oak", qty: 22  }], imageData: "" },
    { name: "Everlight Trumpet", mats: [{ name: "Everlight silvthril", qty: 28 }, { name: "Goldrune", qty: 24  }], imageData: "" },
    { name: "Everlight Violin", mats: [{ name: "Star of Saradomin", qty: 16 }, { name: "White oak", qty: 20 }, { name: "Samite silk", qty: 16  }], imageData: "" },
    { name: "Folded-arm Figurine (female)", mats: [{ name: "White marble", qty: 30 }, { name: "Goldrune", qty: 24  }], imageData: "" },
    { name: "Folded-arm Figurine (male)", mats: [{ name: "White marble", qty: 30 }, { name: "Goldrune", qty: 24  }], imageData: "" },
    { name: "Pontifex Signet Ring", mats: [{ name: "Third Age iron", qty: 16 }, { name: "Goldrune", qty: 18 }, { name: "Ancient vis", qty: 22  }], imageData: "" },
    { name: "Incite Fear Spell Scroll", mats: [{ name: "Vellum", qty: 20 }, { name: "Ancient vis", qty: 18 }, { name: "Blood of Orcus", qty: 18  }], imageData: "" },
    { name: "Dominion Discus", mats: [{ name: "Keramos", qty: 34 }, { name: "Star of Saradomin", qty: 28  }], imageData: "" },
    { name: "Dominion Javelin", mats: [{ name: "Keramos", qty: 32 }, { name: "Third Age iron", qty: 30  }], imageData: "" },
    { name: "Dominion Pelte Shield", mats: [{ name: "Star of Saradomin", qty: 34 }, { name: "Samite silk", qty: 28  }], imageData: "" },
    { name: "The Lake of Fire Painting", mats: [{ name: "Samite silk", qty: 10 }, { name: "White oak", qty: 10 }, { name: "Vellum", qty: 10 }, { name: "Cadmium red", qty: 34  }], imageData: "" },
    { name: "Lust Metal Sculpture", mats: [{ name: "Third Age iron", qty: 16 }, { name: "Eye of Dagon", qty: 24 }, { name: "Goldrune", qty: 24  }], imageData: "" },
    { name: "Chaos Star", mats: [{ name: "Chaotic brimstone", qty: 28 }, { name: "Hellfire metal", qty: 36  }], imageData: "" },
    { name: "Spiked Dog Collar", mats: [{ name: "Third Age iron", qty: 24 }, { name: "Leather scraps", qty: 24 }, { name: "Chaotic brimstone", qty: 16  }], imageData: "" },
    { name: "Bronze Dominion Medal", mats: [{ name: "Everlight silvthril", qty: 36 }, { name: "Star of Saradomin", qty: 26  }], imageData: "" },
    { name: "Silver Dominion Medal", mats: [{ name: "Everlight silvthril", qty: 36 }, { name: "Star of Saradomin", qty: 26  }], imageData: "" },
    { name: "Dominion Torch", mats: [{ name: "Goldrune", qty: 12 }, { name: "Orthenglass", qty: 12 }, { name: "Everlight silvthril", qty: 20 }, { name: "Star of Saradomin", qty: 18  }], imageData: "" },
    { name: "Ivokian Gerege", mats: [{ name: "Third Age iron", qty: 36 }, { name: "Wings of War", qty: 30  }], imageData: "" },
    { name: "Toy Glider", mats: [{ name: "Stormguard steel", qty: 36 }, { name: "White oak", qty: 30  }], imageData: "" },
    { name: "Toy War Golem", mats: [{ name: "Third Age iron", qty: 36 }, { name: "White oak", qty: 30  }], imageData: "" },
    { name: "Decorative Vase", mats: [{ name: "White marble", qty: 36 }, { name: "Cobalt blue", qty: 30  }], imageData: "" },
    { name: "Patera Bowl", mats: [{ name: "Keramos", qty: 36 }, { name: "Goldrune", qty: 30  }], imageData: "" },
    { name: "Kantharos Cup", mats: [{ name: "Everlight silvthril", qty: 30 }, { name: "Orthenglass", qty: 36  }], imageData: "" },
    { name: "Ceremonial Mace", mats: [{ name: "Imperial steel", qty: 20 }, { name: "Third Age iron", qty: 20 }, { name: "Goldrune", qty: 28  }], imageData: "" },
    { name: "Consenus ad Idem Painting", mats: [{ name: "White oak", qty: 10 }, { name: "Samite silk", qty: 10 }, { name: "Tyrian purple", qty: 50  }], imageData: "" },
    { name: "Pontifex Maximus Figurine", mats: [{ name: "Zarosian insignia", qty: 24 }, { name: "Ancient vis", qty: 16 }, { name: "Goldrune", qty: 28  }], imageData: "" },
    { name: "Avian Song-egg Player", mats: [{ name: "Stormguard steel", qty: 36 }, { name: "Armadylean yellow", qty: 32  }], imageData: "" },
    { name: "Keshik Drum", mats: [{ name: "Wings of War", qty: 16 }, { name: "Animal furs", qty: 16 }, { name: "White oak", qty: 20 }, { name: "Leather scraps", qty: 16  }], imageData: "" },
    { name: "Morin Khuur", mats: [{ name: "Armadylean yellow", qty: 36 }, { name: "White oak", qty: 32  }], imageData: "" },
    { name: "Ekeleshuun Blinder Mask", mats: [{ name: "Vulcanised rubber", qty: 24 }, { name: "Malachite green", qty: 20 }, { name: "Vellum", qty: 24  }], imageData: "" },
    { name: "Narogoshuun Hob-da-Gob Ball", mats: [{ name: "Vulcanised rubber", qty: 36 }, { name: "Mark of the Kyzaj", qty: 32  }], imageData: "" },
    { name: "Rekeshuun War Tether", mats: [{ name: "Warforged bronze", qty: 20 }, { name: "Vulcanised rubber", qty: 22 }, { name: "Leather scraps", qty: 26  }], imageData: "" },
    { name: "Aviansie Dreamcoat", mats: [{ name: "Armadylean yellow", qty: 20 }, { name: "Samite silk", qty: 30 }, { name: "Animal furs", qty: 22  }], imageData: "" },
    { name: "Ceremonial Plume", mats: [{ name: "Armadylean yellow", qty: 38 }, { name: "Goldrune", qty: 34  }], imageData: "" },
    { name: "Peacocking Parasol", mats: [{ name: "Armadylean yellow", qty: 22 }, { name: "Samite silk", qty: 30 }, { name: "White oak", qty: 20  }], imageData: "" },
    { name: "Ogre Kyzaj Axe", mats: [{ name: "Warforged bronze", qty: 28 }, { name: "Mark of the Kyzaj", qty: 20 }, { name: "Fossilised bone", qty: 24  }], imageData: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACIAAAAiCAYAAAA6RwvCAAAEqklEQVRYR52X/WsbRxCGX12s4BTbEFLL5MPCUP/SlICbEBqEEMJVC/2fayglmBrTVERNm1DFCNVxKhXVbmRO1lkfZWZvVnN7e6e2i8G6u73dZ2bemdkrbO99NQeAAgD+4Rn0TAbN4ev45nxuf/IUdw39rmwic+QZrykg7v56kjxLLBrfFDDf4oqXAXON1R7RVi/zjDtXNnFhCeD35gG2977M8Le5nfKIzxN6hYIzwRuKmEogql88xfOjYy+MNcAXGp9VifB4aLP0Rd4gkNm7Dg5P/0zByFKFcizWhAjnC9G5cXWFmyV0ec+APMHsXZdtIZiyCpPVFoFkWZOnEy1O3/sC3G0eYL9awVXnN7uc9oz1iJu+PmV7vaLS15txBaD70wHq1Qo/jhSI9ow1iEBEgK5rclNY06mJIlDarF59hgBBwhsC3V+5hXana8PkzZplhc33nLQgo155ZrzQfcv/g/s7/J8E64KQGrf3GjkFTaVgVgHQm9fizWnuJAbQ74Ubd/DRh8H/APGUa70xrUjZAAQJa33W+wwZrK7jTfuEd7EeySu9sghBVJ7SxgDem1RcOu6W7ZQgIOQAQbHIwu2vrqMdg5QpNFxHMsLgAhLMfq3Ki1+dvLHx//noCA8fbPH1tHQfuMF/ODxuplhJwO//6FtvEATtn9n03BUIimtCrQqyLmwbEBnXH9/lKB2/eKnuphsAgXz3/AcOCUPQyAOxrV5VWfJIo1ZFGHvDhaVCpQ8CtJGLYnQW60ItkOsRXabpnf1aBVcniwpJtaA0GeHqdgmr531e1sCYQaU8r2rrdmF7Db1o+40iNeEw1VEgzlZu4d5kZGcNN+6geINUAcymU0wBrN68iePmy9z2nwLJK2AEItkSBAFOez3eUIMIEaVuGIaJiL1ovcps/3piyiPyUB90CEaPyoPNxHV4u8TXzdYrUGG7HA75ut/v47RndEO1IrGxUhPtlQCR8NB/CxL/EBiCWN/9FKMowiVZP51iFkPQe48ffWbCGEUIx2N0OlRzFhnidu3EwUgyJOs8wMVMeWGl/Ik17vtDSkUzqNPOZjOMwpD1YYZKU8clsh97xHbfOE31UVDoBeQMRWyVSlhfW0M0mfCy5xcXaP3y2iN18zaXb4u0IHFPgTZ9U2eOeCadKcQblC3k6ka9iiia4HwwwGg85nYulneb31oA2TavhdjQyFFRXtIZpEOyaFLA4917+Gt4CRTX0Dk984pR6yyh0sUnUaLGsFi5fqh+I11WPEEQNEy3BB7tbKLVkcI1R/nzBv7LedN34rMgQk0Q3zT28ffrFt/SnpCSt7u1gXbvw0KIyghXDz59iLeMlM3wntAoVQlmOpngsv0rSKQmBMDDnU0MLsboXSxAdEVe9kWXFabE5wSTKZF+Xa8xiIzhCjAcjdHR3tBWLTlQZ538/ekb70peoU5LgwqWnD/oWrqsr7tqi20HJ9iYQqetBjN1xJPndEtES98l0fW1gZoRFh16fkx1V1+aZq2tdZLQiO/8YWCoLrjlx8hMipXP5bpa+7yQ0or+9s2zSAqVLEApa0dM8m8+Q3ztxGok4SYnFTM/J9U81zpZL3VQzBHzP/gOWJjXPzIPAAAAAElFTkSuQmCC" },
    { name: "Ork Cleaver Sword", mats: [{ name: "Warforged bronze", qty: 36 }, { name: "Fossilised bone", qty: 36  }], imageData: "" },
    { name: "Larupia Trophy", mats: [{ name: "Cadmium red", qty: 18 }, { name: "Animal furs", qty: 28 }, { name: "Orthenglass", qty: 26  }], imageData: "" },
    { name: "Lion Trophy", mats: [{ name: "Cadmium red", qty: 18 }, { name: "Animal furs", qty: 28 }, { name: "White oak", qty: 26  }], imageData: "" },
    { name: "She-wolf Trophy", mats: [{ name: "Chaotic brimstone", qty: 26 }, { name: "Cadmium red", qty: 18 }, { name: "Animal furs", qty: 28  }], imageData: "" },
    { name: "Pontifex Censer", mats: [{ name: "Third Age iron", qty: 20 }, { name: "Ancient vis", qty: 20 }, { name: "Goldrune", qty: 32  }], imageData: "" },
    { name: "Pontifex Crozier", mats: [{ name: "Imperial steel", qty: 20 }, { name: "Zarosian insignia", qty: 20 }, { name: "Goldrune", qty: 32  }], imageData: "" },
    { name: "Pontifex Mitre", mats: [{ name: "Samite silk", qty: 32 }, { name: "Ancient vis", qty: 20 }, { name: "Zarosian insignia", qty: 20  }], imageData: "" },
    { name: "Thorobshuun Battle Standard", mats: [{ name: "Mark of the Kyzaj", qty: 16 }, { name: "Malachite green", qty: 22 }, { name: "White oak", qty: 16 }, { name: "Samite silk", qty: 20  }], imageData: "" },
    { name: "Yurkolgokh Stink Grenade", mats: [{ name: "Yu'biusk clay", qty: 38 }, { name: "Vulcanised rubber", qty: 36  }], imageData: "" },
    { name: "Dominarian Device", mats: [{ name: "Everlight silvthril", qty: 30 }, { name: "Keramos", qty: 22 }, { name: "Third Age iron", qty: 22  }], imageData: "" },
    { name: "Fishing Trident", mats: [{ name: "Star of Saradomin", qty: 22 }, { name: "Third Age iron", qty: 30 }, { name: "Goldrune", qty: 22  }], imageData: "" },
    { name: "Hawkeye Lens Multi-vision Scope", mats: [{ name: "Stormguard steel", qty: 40 }, { name: "Orthenglass", qty: 34  }], imageData: "" },
    { name: "Talon-3 Razor Wing", mats: [{ name: "Aetherium alloy", qty: 40 }, { name: "Wings of War", qty: 34  }], imageData: "" },
    { name: "Necromantic Focus", mats: [{ name: "Imperial steel", qty: 20 }, { name: "Blood of Orcus", qty: 26 }, { name: "Ancient vis", qty: 30  }], imageData: "" },
    { name: "Exsanguinate Spell Scroll", mats: [{ name: "Vellum", qty: 40 }, { name: "Blood of Orcus", qty: 36  }], imageData: "" },
    { name: "High Priest Crozier", mats: [{ name: "Mark of the Kyzaj", qty: 26 }, { name: "Malachite green", qty: 24 }, { name: "Goldrune", qty: 28  }], imageData: "" },
    { name: "High Priest Mitre", mats: [{ name: "Mark of the Kyzaj", qty: 26 }, { name: "Malachite green", qty: 24 }, { name: "Samite silk", qty: 28  }], imageData: "" },
    { name: "High Priest Orb", mats: [{ name: "Mark of the Kyzaj", qty: 26 }, { name: "Malachite green", qty: 24 }, { name: "Goldrune", qty: 28  }], imageData: "" },
    { name: "Pandemonium Tapestry", mats: [{ name: "White oak", qty: 12 }, { name: "Samite silk", qty: 12 }, { name: "Vellum", qty: 12 }, { name: "Cadmium red", qty: 42  }], imageData: "" },
    { name: "Torment Metal Sculpture", mats: [{ name: "Eye of Dagon", qty: 20 }, { name: "Third Age iron", qty: 20 }, { name: "Hellfire metal", qty: 38  }], imageData: "" },
    { name: "Prototype Gravimeter", mats: [{ name: "Quintessence", qty: 34 }, { name: "Leather scraps", qty: 20 }, { name: "Third Age iron", qty: 26  }], imageData: "" },
    { name: "Songbird Recorder", mats: [{ name: "Stormguard steel", qty: 44 }, { name: "Orthenglass", qty: 36  }], imageData: "" },
    { name: "Amphora", mats: [{ name: "Everlight silvthril", qty: 34 }, { name: "Keramos", qty: 46  }], imageData: "" },
    { name: "Rod of Asclepius", mats: [{ name: "White marble", qty: 30 }, { name: "Star of Saradomin", qty: 24 }, { name: "Goldrune", qty: 26  }], imageData: "" },
    { name: "Zarosian Ewer", mats: [{ name: "Third Age iron", qty: 52 }, { name: "Zarosian insignia", qty: 30  }], imageData: "" },
    { name: "Zarosian Stein", mats: [{ name: "Third Age iron", qty: 16 }, { name: "Imperial steel", qty: 36 }, { name: "Zarosian insignia", qty: 30  }], imageData: "" },
    { name: "Beastkeeper Helm", mats: [{ name: "Warforged bronze", qty: 16 }, { name: "Vulcanised rubber", qty: 24 }, { name: "Animal furs", qty: 20 }, { name: "Fossilised bone", qty: 24  }], imageData: "data:image/png;base64,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" },
    { name: "Idithuun Horn Ring", mats: [{ name: "Yu'biusk clay", qty: 40 }, { name: "Vulcanised rubber", qty: 44  }], imageData: "" },
    { name: "Nosorog! Sculpture", mats: [{ name: "Yu'biusk clay", qty: 30 }, { name: "Malachite green", qty: 24 }, { name: "Soapstone", qty: 30  }], imageData: "data:image/png;base64,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" },
    { name: "Stormguard Gerege", mats: [{ name: "Stormguard steel", qty: 36 }, { name: "Wings of War", qty: 28 }, { name: "Goldrune", qty: 20  }], imageData: "" },
    { name: "Dayguard Shield", mats: [{ name: "Stormguard steel", qty: 36 }, { name: "Wings of War", qty: 28 }, { name: "White oak", qty: 20  }], imageData: "data:image/png;base64,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" },
    { name: "Garagorshuun Anchor", mats: [{ name: "Warforged bronze", qty: 32 }, { name: "Mark of the Kyzaj", qty: 26 }, { name: "Third Age iron", qty: 30  }], imageData: "" },
    { name: "Ourg Megahitter", mats: [{ name: "White oak", qty: 20 }, { name: "Leather scraps", qty: 20 }, { name: "Orthenglass", qty: 26 }, { name: "Malachite green", qty: 22  }], imageData: "" },
    { name: "Ourg Tower/Goblin Cower Shield", mats: [{ name: "Mark of the Kyzaj", qty: 20 }, { name: "Third Age iron", qty: 26 }, { name: "Leather scraps", qty: 22 }, { name: "White oak", qty: 20  }], imageData: "" },
    { name: "Golem Heart", mats: [{ name: "Aetherium alloy", qty: 34 }, { name: "Quintessence", qty: 24 }, { name: "Orthenglass", qty: 16 }, { name: "Soapstone", qty: 16  }], imageData: "" },
    { name: "Golem Instruction", mats: [{ name: "Quintessence", qty: 46 }, { name: "Vellum", qty: 44  }], imageData: "" },
    { name: "Hellfire Haladie", mats: [{ name: "Hellfire metal", qty: 44 }, { name: "Third Age iron", qty: 26 }, { name: "Leather scraps", qty: 20  }], imageData: "" },
    { name: "Hellfire Katar", mats: [{ name: "Hellfire metal", qty: 50 }, { name: "Leather scraps", qty: 40  }], imageData: "" },
    { name: "Hellfire Zaghnal", mats: [{ name: "Hellfire metal", qty: 38 }, { name: "White oak", qty: 26 }, { name: "Orthenglass", qty: 26  }], imageData: "" },
    { name: "Dorgeshuun Spear", mats: [{ name: "Warforged bronze", qty: 50 }, { name: "White oak", qty: 42  }], imageData: "" },
    { name: "Forged in War Sculpture", mats: [{ name: "Warforged bronze", qty: 50 }, { name: "Yu'biusk clay", qty: 42  }], imageData: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACIAAAAiCAYAAAA6RwvCAAAFQ0lEQVRYR6WY709bVRjHv/0BlHVtLlB6R0cJISxdVExtbDAkkojbeMHETE30H9RXvtE3BgNKlkiGmMqCW1zWsMoPCRuWWmAr0h/mee49p+ecewtD7wvannvueT7n+/w4zyUwkr3dAgD6EwgALf7lXPQbaA8qt5z77an8/P+5AmkXRBp2V2QwncNj56L7lwELjLxzu+W3HQniqiUUUHduKngZw+ZcB4SMddDWlL+T8e31JW3tdPbDS3EFOEbIWsuJE833vjFjzA0AW78u4fN7X7hPtxAKhfHV1192BPGDbLtGMepySajz3EFKTE1O8dx0Ks2fwWAI5b//QqsJ9HR18VgoHEKTvjSBb7/7BiaMDFYnQ+Sm+IumkLivUTlqMEizidreY7lELZpG5GRbU2V44gOGoJXT2VvyHi3NrpEGDReJmZLRUG2L1MiTGg5EYagC1IDcoYVQMoPG8ye8RDlsob9eQWGn6gvBiUHpK9UwditlUQB5bgtgiMkpJJM2y731cMkBiQK5oqXHR+IGcPDUF0RuVmQNu8IFEfVBdZXqJvpOsfHp/Gc85Vnhe/4sJCvAVSC3aYDQPR81VFr/GDHi3QOoKEJTa7u/GU8A1ti7qGz+IscFyEj2lm8VvhCkU31Rs4VAatEUIid/smEK1Gu2LUEuUoOe4fQlY2rK+gWp6ToRIzS+srqCyXweZ3tOcP4nEPWsYTJBpGaIGqw8SUlbF2RmekYqcBJN4bqduqQiSvpqwePmrBYfLoQYE2U9O/E2+vsSbJjcQFB0iRh5Ldd4FBEtgWtUwKmxYp4rc7NzaDaa2P/9Jw2kfFjG8VEVxdKmp36Y0e3UEaWKaqoYwUIwBDE3e5fvPN/fQ9K+JiEiQ29gZe0BMuM3EL0aRbVSRR11lEpblwOR9cM9AM1CRwE6PTWNwUQCzwqLGHrzfQlBYNVwwt09MJWJ4+UpEKy3a0in1HWyRu3QzHQxgOhcuTf/Cc/6o7DoqR1nfaNI2UNYWFzAxHATsaiFWgMoFPXS7puhWofmLq02RZy2brcmy3rC5pIuLgrG/HgcVdgIdXfDamyjUqng8X4Q2dE41kttEL+zkxUxg9WIUe0EJpD5uY/Z/s7DH/nTyQhgNjeIhcILricv91axsRPkcRNErO/pf7XTV5klzhMaot6BgnQy/x7shI2dDS/Ei+opzupArAdSDXqWYkW457yuTcsatSWh3WfGb2IolcLy/R9wZ2YWoXAY4VAIuxvLmhIC4uhVBbEuuGq0j0k/VUxlPK4RMAJkoM9Cd+8VhINBlIs/a+64kx3EwfEpB+Oo3UTKshQ1nOaHzyRDFVGHVIV86wjBMEjmJgbiltZ5UUyQUtHeCPBqkyEmRuMQavwTyaABoFh8KoNZBaFBmh/pAdaeVGXL2D59lWQU2THQn8DJybEs1WVYKO1sgZVoXEdhY11ClPad4FSvYTuFaCyK7u5e4GWJjasXgYi2UW8DXLcSCAVmsj+J3UfL0h3jo2MYs47YHegdw9nRJivhQJhJ3965MH54mkBfz4Fk0UBEG2Duhvz40exd7D66z4Fp24OI9cZ4WjzsLFY+EhDO00JyjzTugGNYvdpN9LnBSqrQtbr2gD9JETrAcuNxTlVTahPAz7A6R+vk1Trip8pkLo/VwpomPYE068AV+y2cVdpt4usaNt+byK7+Em6cwiJ71PcQcpkAcUq3LnWnHXdyl+zDRIm/sBUwzhxnYb1Qk9R+uz3vXxYeEJW4E5Q6Z3t9UXtbM3esVmkvslcf7U3PhFG3Z757nfebfa4sdtE/cWjuv8n0zYZLMwlgAAAAAElFTkSuQmCC" },
    { name: "Kopis Dagger", mats: [{ name: "Everlight silvthril", qty: 50 }, { name: "Leather scraps", qty: 42  }], imageData: "" },
    { name: "Xiphos Short Sword", mats: [{ name: "Everlight silvthril", qty: 46 }, { name: "Leather scraps", qty: 46  }], imageData: "" },
    { name: "Smoke Cloud Spell Scroll", mats: [{ name: "Vellum", qty: 40 }, { name: "Ancient vis", qty: 20 }, { name: "Blood of Orcus", qty: 32  }], imageData: "" },
    { name: "Vigorem Vial", mats: [{ name: "Imperial steel", qty: 54 }, { name: "Ancient vis", qty: 38  }], imageData: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACIAAAAiCAYAAAA6RwvCAAAD4klEQVRYR51Yz08TURCeRZrapJoeCsQG1ove25MJMVxo/2rhwoHEkxw1MUYLEivVNNIDmyI1M/tmdt7svAV8l759fT++/eab702b7Q0n6wwA1lC2VD98DVkGsA6T9Vy7Vj/jGm64Vh7DXvic5aPJWm+MCywoWmhOxTl0wDqej/MsUHeePidDIMMJr2tkg3HUPtXBmjUGKPMT84ghBIKh4Q2mH95RNx9NhMr7QlWRXu/Z0NkZ+qUECIJAAOdnR4CxsmA4ZBwmTye88fnZsYsvHx5WWjEzCAiLZ3p2BHvDMSCoLMsgH45FL0J7iC3HnTVR7XEM+wcH8TF3d3B5NYevnz4CgiF98T78mQoNMoOgdKup3YgV5yIbHhDY2IDp5QVcfP4Ce4EZ3o+A6fTFL5AVDM3L0SRiQy9q0gUC2X31Gl5sb9G0q1+/YbDVBwSC7fTkhDjIR2PJuDJ9Q9Zoqr49IDSebyCIN2/3K5x3ZXfmgEFWIrEyEBYrLtQasb4ixhQ6OjMQSK/3HHr9noDZ2d6l/vefPyAflH1hRWkwEisygQ3DwsJ1NaLMiL9nEO1+n4Y6cFsD8/70NIytSX81RvRbo0ixYcbwuKcPncYWBAF5AgB/YzDICoqVNKL2pzBbjWgGuN9kah4Iu8dsPgdY/BE2GARTQlmjLd4DUQuNsurHgSgNPMW0OKs1GAsgMqEMBV0KkzRxfQMFALSfPa29yyyEQmuCQmFmRmKVS8dMtOPTkB0axKJY0tY7QazYr0JSilMD4BfjwWRo9K3JzoaLo3AEJhgEvySD0WxYEKI/rklSYrU3Z+m6cTjorQMTmmkEYtlIZZ7UPnzXeAdrXVgm8GDUhWWDw2PZYEa88CezJkpXR5j3gpB0rbRhVWwtISqMPN94DBOWDS4jmgok0WKTj/wXCMWGV894L0th0xrBAY6hBlFc3wizniZ02nq+oT3DK8xr9QghM5p4CAgJSUIbqStC31fkI8wEf0GuuTsAWJVEtFubUKxu3Qy5D4TOllRmuqEhr9jZgnarBQCbEpJiuYCFlX549nxDG1j0omYPtoh6hcahITCdctkKoChKGBZMyry0B1kP8ZiJgDBYywqyoZt+IiD6YlM/Iy0T2sz0flSz6iqekVLGcHhWm8KGBdPrdmGxXIZao6q6dPbZA5POai2eU01YgY4AaXe7su8MAVCssOCJHTRV8dvskVoAf3ZqRjR6ZgUKvFGqtpBKi8eabbyaVe2hax8eTQJhP6knShxpW/DIxqFjdZG8XL3QxLduWUxz44O9vx90djRd+141KIam/5OIBNXwdwIf7IkzWfmbnyIM6h9GKm6Vd7loVAAAAABJRU5ErkJggg==" },
    { name: "Blackfire Lance", mats: [{ name: "Aetherium alloy", qty: 50 }, { name: "Quintessence", qty: 46  }], imageData: "" },
    { name: "Nightguard Shield", mats: [{ name: "Stormguard steel", qty: 30 }, { name: "Wings of War", qty: 36 }, { name: "White oak", qty: 30  }], imageData: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACIAAAAiCAYAAAA6RwvCAAAFGElEQVRYR42YXW/bNhSGXw8WFMF2oLZGBKyOYQTdjKXdkF7tdsCa/er1NyzDugFB00BIVAfyNESIZTiqlGQ4h6JEUpRdXtgOJR0+es8HD9M7PDl9gjF6AOQk/UYPeKom1GvmczY7NNdagEyyYcWuDUQ1KBeuntOgbPfJOXm/+kL0W7WnAva2gZgP0VtIZVSI67P3/Ofhya9bRVLhTGV705NTm+2afJtlCRAE38LzBgjDj9rtEky6gXwkVTFdpimyy//qdYJ4NX+Ni/O/8Jvv4093yDBypGmMNL3TVDLdrLptp2ukYdWfEoKulQ8P+D5ZoARw6Qd8O0EcI8Und4I4XlhdxiopCjHILiUkjHQFKbFKb3naG+3jKFnw77/dIeZ5hEcABYBwOEMcXfGKhyfvWl6uE4CCWAarmbJmykkVknTJBv3vPGw+lvBGA5AcszQmLViZ0J8DeADKkoEIZloFsmlXKrPVNbSgqkISL+G/8VBGffQnJcrHEsUnUmWA8OIcs9mcQWhkacrf7tCrVZm+fae5Qw3YrSBNLDwgif9jiPTDBq7rwPH2gOAeWQj4RpACLtyZECVfOnCdvlUVtRx0gqgBKZUgCH5LDaSA7/k8H6YxgqMh8EgOAfIbwD0AsHQQxxGAb6wuIqBWjMhY0TIjWAmA2+c4v77E5HiI7J8C/lgA1P4AsHm+xuh+jGRxQyjiuUMXzu0IUXTJgau6SEZwSxEZPFdVneB1FJD4+jPGwQHKhy9sI00oSIFhlbpReI7gZII8LFi5PM8YhFRxnD6i6KqVzvTy1qyRQUppKkHKyz76RyXcxEf+RbiIIIZzcgVQXAFOFSsCJkAeimDFs40GYqaz5ppaomq3NF1DIDym9+gv95EmCwFBgwoHjX/3+GvP9UBxxRA0CITGrfhbprNa7lsFzRYjVLwcRyxSFPd1uk5+nmggQpU9ROEFggmlTQORLwHXaUBaqnRVVlKENrOR/wz3axGsAqTkPaUM1vWcqUjhi/vzGwdpnMEPXAVC1BfA2IfUNsDc1ATIGKu1fJhIyvqtWRHDLVGYwA+Ey1z6OCgUlzQQUpF6I+zq0ChrGOTFGKs7HQRcoELoIANEVEdmLitBI42jxkUcG2TnTtt7apDp29MnsyGhi10gzrQEFgMUZQ7nZYl+POAywhBUzD43HqMqQlWVAzSrXibVQegap68NhC/2gKs/3uPV8U9sSKqignh7LjYrESvOS6BQIMQkffQ7IbSOjUBkd2vbcU33sEtmc1aE4oXfNs8QuFUqS0F2QDS67VCEbmwyZ8w72EpmDwGQ5EUpKqcKUblimzts/Y9105M9JrlGpjC7RwWh9GQI2m+qzd+MB47YdkyoasjfnR2aWti4OR4NkK7W1ZYewvf9CkKYckSiIKuCkkPTgDCPGDUEB2t1wLIdglT3/JhnuKh70pRBNpu16EsqQbIsYdvUNIvRtIjyoFZNN6JUdNqmJx7Vh4wTmhVHhhi/+CkuuB0Eis2aXSSHgBBWdvWp1gOWeXiS7QAluYwVMv46z/CIlPtS6tbfIMUHiL5EQtgAbHGhuabrpGe2+7LA/ZBnOOPiLZqeLldsW9i8pvUjNZ3lWKlWWgHSBuhyhQ3IFrQiWDvOtKYRihff39fc8LUA2nGlIlG3lp1ZY4MRc3pGqE3O176Yals/+3Yoo8YLPXx99ruWEXVqVkdIuqd12ldWtf6/xOxH5P3b/lEj9GhGa1Gb9MoJXHNJZet/43TclJY4agAAAAAASUVORK5CYII=" },
    { name: "Huzamogaarb Chaos Crown", mats: [{ name: "Warforged bronze", qty: 44 }, { name: "Third Age iron", qty: 34 }, { name: "Eye of Dagon", qty: 20  }], imageData: "" },
    { name: "Saragorgak Star Crown", mats: [{ name: "Warforged bronze", qty: 44 }, { name: "Third Age iron", qty: 34 }, { name: "Star of Saradomin", qty: 20  }], imageData: "" },
    { name: "Possession Metal Sculpture", mats: [{ name: "Eye of Dagon", qty: 24 }, { name: "Chaotic brimstone", qty: 30 }, { name: "Third Age iron", qty: 44  }], imageData: "" },
    { name: "Trishula", mats: [{ name: "Hellfire metal", qty: 48 }, { name: "Eye of Dagon", qty: 30 }, { name: "Third Age iron", qty: 20  }], imageData: "" },
    { name: "Tsutsaroth Piercing", mats: [{ name: "Hellfire metal", qty: 44 }, { name: "Chaotic brimstone", qty: 30 }, { name: "Cadmium red", qty: 24  }], imageData: "" },
    { name: "The Pride of Padosan Painting", mats: [{ name: "Cobalt blue", qty: 52 }, { name: "White oak", qty: 16 }, { name: "Samite silk", qty: 16 }, { name: "Vellum", qty: 16  }], imageData: "" },
    { name: "Hallowed Be the Everlight Painting", mats: [{ name: "Cobalt blue", qty: 52 }, { name: "White oak", qty: 16 }, { name: "Samite silk", qty: 16 }, { name: "Vellum", qty: 16  }], imageData: "" },
    { name: "The Lord of Light Painting", mats: [{ name: "Cobalt blue", qty: 52 }, { name: "White oak", qty: 16 }, { name: "Samite silk", qty: 16 }, { name: "Vellum", qty: 16  }], imageData: "" },
    { name: "Ancient Magic Tablet", mats: [{ name: "Ancient vis", qty: 40 }, { name: "Blood of Orcus", qty: 64  }], imageData: "" },
    { name: "Portable Phylactery", mats: [{ name: "Imperial steel", qty: 48 }, { name: "Blood of Orcus", qty: 36 }, { name: "Ancient vis", qty: 20  }], imageData: "" },
    { name: "Animate Dead Spell Scroll", mats: [{ name: "Vellum", qty: 40 }, { name: "Ancient vis", qty: 24 }, { name: "Blood of Orcus", qty: 40  }], imageData: "" },
    { name: "The Enlightened Soul Scroll", mats: [{ name: "Star of Saradomin", qty: 50 }, { name: "Vellum", qty: 60  }], imageData: "" },
    { name: "The Eudoxian Elements Tablet", mats: [{ name: "White marble", qty: 60 }, { name: "Goldrune", qty: 50  }], imageData: "" },
    { name: "Drogokishuun Hook Sword", mats: [{ name: "Warforged bronze", qty: 44 }, { name: "Malachite green", qty: 36 }, { name: "Fossilised bone", qty: 32  }], imageData: "" },
    { name: "Hobgoblin Mansticker", mats: [{ name: "Warforged bronze", qty: 66 }, { name: "Fossilised bone", qty: 46  }], imageData: "" },
    { name: "Chaos Elemental Trophy", mats: [{ name: "Chaotic brimstone", qty: 52 }, { name: "White oak", qty: 30 }, { name: "Hellfire metal", qty: 30  }], imageData: "" },
    { name: "Virius Trophy", mats: [{ name: "Demonhide", qty: 44 }, { name: "White oak", qty: 34 }, { name: "Orthenglass", qty: 34  }], imageData: "" },
    { name: "Flat Cap", mats: [{ name: "Armadylean yellow", qty: 60 }, { name: "Samite silk", qty: 54  }], imageData: "" },
    { name: "Night Owl Flight Goggles", mats: [{ name: "Armadylean yellow", qty: 44 }, { name: "Leather scraps", qty: 40 }, { name: "Orthenglass", qty: 30  }], imageData: "" },
    { name: "Prototype Godbow", mats: [{ name: "Aetherium alloy", qty: 50 }, { name: "Quintessence", qty: 34 }, { name: "Wings of War", qty: 34  }], imageData: "" },
    { name: "Prototype Godstaff", mats: [{ name: "Aetherium alloy", qty: 50 }, { name: "Quintessence", qty: 34 }, { name: "Wings of War", qty: 34  }], imageData: "" },
    { name: "Prototype Godsword", mats: [{ name: "Aetherium alloy", qty: 50 }, { name: "Wings of War", qty: 34 }, { name: "Goldrune", qty: 34  }], imageData: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACIAAAAiCAYAAAA6RwvCAAAE3klEQVRYR41Y32scVRT+dmY33VQNoqwLySYWDA0VAttCoYiU0m4QWSJCIVJQodCH0jf/Eul7oT4IgqgIFURsSomlINbtamkhZQlruyJrfchuNk3zY7Nyzsy9e+6ZudvOS3bmzr33m+985zvnJjNTXhgMEF2Z+K/5Q8/NM/NbvyvvzW+9Fs+NF6LN5D5m3cx0eWFAAy+6qXnXbOZsngHMRnI9+33xuJxrQCWAmIUf15cxUz5jAcoNfewpQhMM03gagwQmY0IjWXlUX8aht0+i+WDFgtGbyHumfTDcxBlT1KV+UGYUkPlTyIZZNOrXMV0+4+CQ4ZHs6PDaMSEKGToHsI+R2fnTQBjyu436zxYMryljLdSsBe2EUM+JGbSRILHyBCE0Cs3sfAVhLsdAVms/MvfT5QrHXWdHGt1pmehjjJ+brDFCIkCP7i5jtlzBs14HrfDNiMHVb5wQSU1pAaaGTjFnwpJgxA7EQIrHLiDX/YMftzANNL4bsqI8QYbEMJvYSBqSEhbPJ43ItDILUPrOHXsfm93/+FEvLGJ99YfnCjctY7RAtW8xLglEUkpAiscvItf9E+jvoofXgDDHYOiiTHLMTbDkpNgL3FgfsfoQDks0EZjS3Dt2qV7/Fbw6HgA7HTRXb6dqxrDuM0BvSZg5ujAwZqRFNmSlbsFkx17H3ta/yI4dQPPBrUSoRhGg13fCOAqIyaDi8UvIdWvDef0+/86Oj6N5b8XxGM2EjyENOCOB8CQB24RnabGATqeN++1hmOjd/NhBIAwc9/WltWOCRgIik9hHRqE2rHy0WMBgr43baxpMHo17N3npmaMV/lDbV6jPTssWpw3wxVUXQgIToM2v//KQAAVRiMKA9WKqdYJ2xbL5cH4vHks4q1kkTbjnFie5/AQh8PRpC3fW3uXX98j0tl8CmsOa5AhR7GzYkiWFh23RE0UpLVQEjGoQXZ+enbT7bPZa2B8Ad/86CYRgZujSPiM/UOuF7r1AfOF6XL/OfH784SQzQzHe2wXQb6HWqOLw1B2eeu3Gk9TUTtQhGRqHxpRybcZl9TTsECC6nu3uYixo4/eHVfSxjyNTNQZDupEM6JBZsermOc0H0tiJsilih65zH0xiZ7uF3lYR99feQj5/EI3GDVsoEwLW7YRJX59IfSDoORczAej82X1c/TbKpNKhE8hnX0aj8fwOLxJrbPGafl+35asVVA7eO1XATzef2IpVKp1APh+BkQKWH2fX48ZI5XmaO4oMtDHXvQeBsZ1c3NcsVSewsQlsdNdxqxY4XuNUb2bE0BzvZnNdxVGmtTww+QRIgq6eJhPcxvbOOjo94Nd6wA48EPbLbYBtFX2tXAzbZozHb3i6GiOGLn1SQHejjfEDJWxtt/Dl96ShqBxIc3MOWLyWaaLT2kEFSjfDNqTxD2JkqbqPqTeAz68GnFl//9PCym9BZHjSKnTW+DwljX6rG0+jQUAuLE3gytddnl6em8CRw+v46lrMSrky1JvUSGqqpulEMGNYNGcMfdQgMJ+dLyCbbWNnF7j8RQRCH00SR07vl+sD9ojapLMuyqahQcyUK8lDv+5HErVANDG6z5BnXl8NYR1Z04MjUicLpcXLAZ8lO7kfv+Q76SXeFZnJliE2SWaN/NeBzBKtC9Xu+Q7XjqBF96bD9z9Whm+V0uCacQAAAABJRU5ErkJggg==" },
    { name: "Praetorian Hood", mats: [{ name: "Ancient vis", qty: 36 }, { name: "Samite silk", qty: 48 }, { name: "Zarosian insignia", qty: 40  }], imageData: "" },
    { name: "Praetorian Robes", mats: [{ name: "Ancient vis", qty: 30 }, { name: "Samite silk", qty: 54 }, { name: "Zarosian insignia", qty: 40  }], imageData: "" },
    { name: "Praetorian Staff", mats: [{ name: "Imperial steel", qty: 36 }, { name: "Ancient vis", qty: 58 }, { name: "Zarosian insignia", qty: 30  }], imageData: "" },
    { name: "Kal-i-kran Chieftain Crown", mats: [{ name: "Yu'biusk clay", qty: 66 }, { name: "Animal furs", qty: 60  }], imageData: "" },
    { name: "Kal-i-kran Mace", mats: [{ name: "Vulcanised rubber", qty: 42 }, { name: "Third Age iron", qty: 44 }, { name: "Fossilised bone", qty: 40  }], imageData: "" },
    { name: "Kal-i-kran Warhorn", mats: [{ name: "Vulcanised rubber", qty: 44 }, { name: "Fossilised bone", qty: 42 }, { name: "Animal furs", qty: 40  }], imageData: "" },
    { name: "Tsutsaroth Helm", mats: [{ name: "Hellfire metal", qty: 50 }, { name: "Eye of Dagon", qty: 40 }, { name: "Goldrune", qty: 40  }], imageData: "" },
    { name: "Tsutsaroth Pauldron", mats: [{ name: "Hellfire metal", qty: 40 }, { name: "Goldrune", qty: 50 }, { name: "Eye of Dagon", qty: 40  }], imageData: "" },
    { name: "Tsutsaroth Urumi", mats: [{ name: "Hellfire metal", qty: 50 }, { name: "Eye of Dagon", qty: 40 }, { name: "Third Age iron", qty: 40  }], imageData: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACIAAAAiCAYAAAA6RwvCAAAFSElEQVRYR5WXfW8bRRDGH8cvR5pgHaSNleBYUeXKlSVXl/IRkvCp2w+AEKmFhUX+QVVcjNwSsEABTOwYPbM7e3N7TgqrKLb39nZ/O/PM7GzlKDtfw7QKAHbYT/5Ym1F8pk3Gmuf63qY52cexbJwvrFEBKh0PoovLqGhh3+Um8CvYxfW53VG8IQUTjsIu3aQBRBcv7dYsPhm+thvd+L2TnRasZQHCZqNFpN+6JjyPLKIAL7MvS4tXt7awwh34x3Yx/DaMIVRsaTVr7P6yRZRmDVx5CxDgYvjNR63BAWma4unxswDVOTktiG6T+8RbtIgVja529eY1sizDcHjxnwB0EEHYkiTBFwedYCECqeDNXp14rUaCCOEs8TLLcLEBotfrbwSr+t7pbBpAgDrqdWD/8YEAdU7OZNUA5CHETZ0TF776kHogxN0KGI5yayjA5eX4AQul6PUO5fl8fk0MsqBWq+Hz9InAHGWnIYRDCAoIwzfSRTbI8HbyI+bzOYAtmbjfe47xgxBAipT/kCBB2trDzfx3oF5DrQYBUTHbyJJO5hGNGvpKdDHI8PP7n7BYLDDnRB6CJndgthHSh4sXquqDpkjTJm5u/hSQpJZgZ7fpNbP2bvJzUSNWrHQLQTj5cPRdyLG93nPMBMSB5a0QnNLNxSnUer2OnZ0mLi9/kH7Osd34RL4PR0NxkbZKpVLMrGUQoHv8FNWkEYHcodVqYTb7AEbD1ZtXBs75ud3uYGfnUQnkl99+xbt3V7JJildSvbpGw3cTyPHxUyRJw0+oFiBIW+DchOfySddqowXYnEXce7Q2raEQfF4A0ZcJwgka1QZGY7oGIMjyr7/R3PsM4/H3fuidJK50N8Vb2Z1rg/4LACv8s1rJb+vOweAFqtgKIEfZmYsRHyghakhmQThGYdqtQ9ziFnt7+5hOJ2Fhirfb7aKKKlCtIg5twlJXCuEikTpbo5Mxp+StEL40ba/7DCussN3YLYEsFsDR4b68PZlONkRRYW4JfULIpkZDsWIAYXJbe6dpGaBZVSxCkOUKSyzx6aM0wLRaT0AQQP6BkTzoHwG0hm+jMf0P9PuD0Dcej8L3Akh2lh+IAnJyvlbB8AnTO3WB5RLL2yWaaVPMTn2kkpRyECDOK7FFyhaiDaiPIA9/0ucg/h1ah5Zh+OF2iVsAewWYprfI/4Fw2TkO2eCacPpGpR6t0m4fghQEcc2JNY8c9uVZdbMtcgA+t5aIU2GpVLR64cutFg+xHIcw19fvJZl9vLnZJEJ8rFIHcZkpbtIU7wyXN753NWTGrIBCte1gf4akDnx9UdxxDCaJzhQhtgBXjYTyo3Pylf/u6oS8SMrLba3UXOQs8Dido5EA05krgvQMCqeqdfV9VXRQq8+uGjXSrwo2BYuOJwwPtLw0cNnVNnso8lDTWlcPOHuVKFvEXiciEE2/tmhyC1upOcEWoRLM5x/Epdv1bTkG7i0VdbZNVbxemmzmy2FeifqthnKrlK3EkkCFHSyjL5jbmESNrVdLtzwljq1VuO9oGeB01eveYf4Hy4RZwVLqOikX7WVNa9bCdVIX9E6876ppo8xW5RMfaZtyjLqPQCJss1bFRY2ziUaN/IgFa1YrhLm9tRn55LXJfUnPhb4ChSre6kETitWKg6tADibf9E5id2avla5yi0ljsC1X2esl3FrA+s+Eu4uV6DiwMWS1prDu7CqXkrnAXW1SvPsWrnzOYyWrGPGqO0s5wa9ihW/HWDAtkELUWMHltOGIKOgnwJmaU6FL75qOODot3EaQ4PsHdmY1E28iVkUcYbGl+Pxf02O/o3bBfnUAAAAASUVORK5CYII=" },
    { name: "Kontos Lance", mats: [{ name: "Everlight silvthril", qty: 70 }, { name: "Samite silk", qty: 62  }], imageData: "" },
    { name: "Doru Spear", mats: [{ name: "Everlight silvthril", qty: 70 }, { name: "White oak", qty: 62  }], imageData: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACIAAAAiCAYAAAA6RwvCAAADbElEQVRYR5VXwU7bQBAdBz4jyaEnjoYLtwrRBNQvrloBQhFC4hKiVv0B+gNUpQLZjV3NrGf9djK7gIWEvVnPvn3z5u24mtfLnoYr3ugAEVVwr7/LWEXUDwM6hx8rfujlL75bjDvEqQTI8DLHxwAIEKbIsIKRF/TSoA54GIrvK3DeUABiLgWTMACseSxFcIXN4DIxRsKI87JLp6HFkJGQk2MAyEvJVEbswjYVNnAu4Fvn/dpc0qz+NGaVgWAKvHRgcDs3EerALIKMuhtSwAD4Ov18TldfvgoYjpFoZAcEVIBqwKZDF/JSgb9xNT3cXwoAvv61La0urgT6rF6MQGy5lVKDv/EConoHNIJ72Pgg5vUiVKqtGqwYXdD+xwqxjHhzQzo6mk6n9OHgIDIxP1yMnjOrl31u95h/TE1pvhU9gzg+roWcu7s11UdHtFlvxpRoxXo+Eg0O3DNrSAXzQhBt29J6/TO6kegCxD2mxtmm5yVvKVsOxZpQJkYQIaKCSMQcGXF2rwKMJRj3M9LgpclnIlSHW30VUfWaRrzDq1RR7wGReFDO0DxTyrmmjudAaInmdCYsocWXyrSkFw70HhDeSS6pQV94zdhsSZdAqCY8Ju3RMAIxK5QaG2wDuDpOzhb09+mJti9/hhLNC9OKVWNFIB4r3mGI2lEQcnY0Dd1cr8QZWBPelTRdpsMLVeOwUfIL9YmT86UcNAgCS9SWfeIb9qSeHy577VBKpYpYWZgI4vfjI/3YfI9s5ITtiVTXdA89zKMVpwUR0hH2yocYNtSe8D2W2OvdntVSqM8C4izkv2kauh00wc9i2ybvtvdF3ey0DWhouTJjUfLlgbCacHccOQvdvwdQGPG6LmTh4+KUJnt7NCGil+dnul3dJHooNlHmE8N2gfFZDQ2rRO+ZCQXRbbeRsKTFM7vFtHpaQ8aSJiwHBD2i6zqirqPJ/j5df7tIvKLEpntkOF+IAlhPX9QHgsBxBOG1lJaB3CeKCxDbAFWypkRATCaiDQWBnVXOF2yaLWseiwkjPIFLVFt+DsjfHtEntON2vl9KpZqULTwkgKxG1CsCA6P0cicpHoC5VCBDO2wMtMbylYDJ19jYX2Luc7vD8R1AmSYctVLsRzR4Lsdeb6KgvTK2Y5Ep7Vnl5UxZeQeYZ2AlU0O2cmn6D5cSIpOfTOt1AAAAAElFTkSuQmCC" },
    { name: "Chuluu Stone", mats: [{ name: "Aetherium alloy", qty: 40 }, { name: "Quintessence", qty: 30 }, { name: "Soapstone", qty: 40 }, { name: "Goldrune", qty: 24  }], imageData: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACIAAAAiCAYAAAA6RwvCAAADqUlEQVRYR5WYMYtTQRDHZ1UsRCRck0ISg6WgJAci2JpgIX6EdEqw9XtYivgBrCxzhwQvrY0YUwg2V2juEF8XsNYnM29n3+zs7HvvXpPLy3uzv/3Pf3Znzw3Hs7KEbpcDAHxWfuKb1j2+LyPje/KS4zoJwgO0YXFAAnAAciZyMB5IA3D8aAIaBKerJZKAWg0ZFP9GMJKo/iAF9eBSSXoPQfjm7uvH8MJwMgsBtPRd0hPJ7qNKhTgG/eQ8CN5ECBz8bHtSzaYs6TvPZrddw3D8KMxU+8XHYzGS7LJSOZjgEQy8257AYDylIAjmnIPheAoIAb0nAPtj+m3ggfRoVgq0Mto3rIwbTmYlTkO+EKvjAOYLgOV5Pa4HwhuoUi4NuSqT/mEl3WA8K6UZEeLWZBbUOduuoQ8zKHpX7WLyUAyUM7YFGxmazOorRSrBKQog89uxKhpLpa2pUiw/BY9oJXicGmQEsPxlqyLvKoXMQUVp86shNT9F6fKPVYowNWhgB8W8IwwG2B+HKrM8oZcAAmFqrJr0chcC6T+ok1KsjiIYCyhRhH1iLfOcHnzJUkUOzoFvrv7C5v51gM/vTWW0qUNq9NIeSs/hmlJVjgbRADi4vjbwgRyB6xFfelGjjPASrxWRxIkiN3rQP/0eAlsA/KMFIoHChOVeI2eTBXlxF+DSZXr08PW31ipqAknXER8uWn7FLhwpgiB4nV+Dw+WXC4HIjS7a9KzUWHWvQUZv/hDAj6f9VpjNwwOAT++yhg2WoCVezL6pagpU4x/A6G0F0gWGK8cyrNyLkqphKMsjxaJKiwTpBOMrh7cNa7LRppdTpkrNFIrFvQSiizJthiU78O4rHcw+CV0y9SprgMXLLEiTMgyCish+N6pSXb5NzQ0qM4LnjZViGVgqkm0zc8eJXCtIyqBP4Jk/WKRcGqYNJKRGh4qOCz5P2NkzXNXXVk/lgA6g7uisEpZpNz1inUFyB7AUKLiLIBlGljD5xDj8hDaAVaFndH357xYQN92sUK1SFQhhNo/vAKxeVZvfxG9+qouuNz3VNcn1hK2eO5vGKatVwbRd6f2G0/0RReeqCQzCA1H5siptja7lKa2WTBuvqvoZmaGki9cNizwvNh1FozVBqItAUolO64gsWQqs3rIaGg0gVdWDGh6t/7Mge1a9NVurbSKvseBEHhCHN2uPCUVigvjdOEmTcQwwhEsO77L7k5OL1it90uPytfyQBFFlHZW+MRm5MoRn6cAP8B9E9A2WjeYM1AAAAABJRU5ErkJggg==" },
    { name: "Quintessence Counter", mats: [{ name: "Quintessence", qty: 54 }, { name: "Stormguard steel", qty: 40 }, { name: "White oak", qty: 40  }], imageData: "" },
    { name: "Spherical Astrolabe", mats: [{ name: "Aetherium alloy", qty: 46 }, { name: "Armadylean yellow", qty: 40 }, { name: "Orthenglass", qty: 48  }], imageData: "" },
    { name: "Ancient Globe", mats: [{ name: "White oak", qty: 20 }, { name: "Tyrian purple", qty: 54 }, { name: "Ancient vis", qty: 60  }], imageData: "" },
    { name: "Battle Plans", mats: [{ name: "Vellum", qty: 40 }, { name: "Tyrian purple", qty: 54 }, { name: "Ancient vis", qty: 34  }], imageData: "" },
    { name: "Prima Legio Painting", mats: [{ name: "White oak", qty: 20 }, { name: "Samite silk", qty: 20 }, { name: "Tyrian purple", qty: 74 }, { name: "Zarosian insignia", qty: 20  }], imageData: "" },
    { name: "Horogothgar Cooking Pot", mats: [{ name: "Yu'biusk clay", qty: 60 }, { name: "Malachite green", qty: 38 }, { name: "Soapstone", qty: 40  }], imageData: "" },
    { name: "Da Boss Man Sculpture", mats: [{ name: "Yu'biusk clay", qty: 50 }, { name: "Malachite green", qty: 44 }, { name: "Soapstone", qty: 44 }] }
]

let loadImages = () => {
    for (let artefact of artefactsList) {
        if (artefact.imageData != undefined && artefact.imageData != "") {
            let artefactImage = new Image(34, 34);
            artefactImage.src = artefact.imageData;
            
            artefact.image = artefactImage;
            // artefactsCount.push({
            //     name: art.name,
            //     image: artefactImg,
            //     qty: 0
            // });
        }
    }
};

let compareItems = (slot) => {
    for (let artefact of artefactsList) {
        if (artefact.image != undefined) {
            let imgToCompare = artefact.image.toBuffer();

            let diff = pixelmatch(imgToCompare.data, slot.buffer.data, null, 34, 34, {threshold: 0.05});
        
            if (diff < 50) {
                artefactsCount.push({
                    name: artefact.name,
                    qty: slot.amount
                });
                return artefact.name;
            }
        }
    }
};

let calculateMats = () => {
    let mats = {};

    artefactsCount.forEach(art => {
        let artefact = artefactsList.find(o => o.name === art.name);

        if (artefact != undefined) {
            artefact.mats.forEach(mat => {
                if (mats[mat.name] === undefined){
                    mats[mat.name] = parseInt(mat.qty) * parseInt(art.qty)
                }
                else{
                    mats[mat.name] =+ mats[mat.name] + (parseInt(mat.qty) * parseInt(art.qty))
                }
            })
        }
    })

    materials.forEach((mat, i) => {
        if (mats[mat.name] == undefined) {
            mats.goal = 0;
        } else {
            mat.goal = parseInt(mats[mat.name])
        }
    });

    buildTable();
}

let artefactInput = {}
if(localStorage.artefactInput)
    artefactInput = JSON.parse(localStorage.artefactInput);
console.log(artefactInput)    
artefactsList.forEach(item => {
    $(".main").append(`
    <div class="row">
        <div class="col-sm-4"></div>
        <div class="col-sm-3">
            ${item.name}    
        </div>
        <div class="col-sm-1">
            <input class="artefactInput" type='number' data-name='${item.name}' value=${artefactInput[item.name] || 0}>
        </div>
        <div class="col-sm-4"></div>
    </div>`)
});
