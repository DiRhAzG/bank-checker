let materials = [
    {
        name: "Blank Slot",
        qty: 0,
        goal: 0,
        hide: true,
        level: "0",
        faction: "Agnostic",
        location: "",
        imageData: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAgCAYAAAB6kdqOAAAGr0lEQVRYR12Y6Y7kNgyEKcvuniwmCfJnc2yQC3n/x0vGbcsOvirS3RsDg75kmSxWFalp7z/+esYZES2iT1Nsj0dMfQ6u4xjRWovzOK7vzmNEtKbf+Z5bp2mK8zzZQp9537XH6bV8GWdMvcdxHBHHGcd5aG8t4f7g/hbt/fOvJw+Z5jla88YOoAffa/Nlif2xaQNu9pXrph5j7NHnJY6x529+uRIbQ5+X2y3G8J7sNU0t9n2Pk6CUyBHtQmjq0XuPxqJtU2bLMguxNvU4htGqv9rUr5ORJF3tTuaCRe+5V+iMcSEHUkoOAFibyLf3z1/O1mfBTon6cs9yDGUNEmPfo7V+wcqCwdrev0KEDM/DgZCY4/FDwaDKUjeNscXUmlBziY9o333585znOfbdULKgL7OCOI4z+I3vyYgAgJg1xQcSqcvrXJ7i2HJ/c1LbLkRcsiPmeblKx97Qg9/btz//fk5Tj0a5El7Bn5DPtyWO/dAmfZ7jGBDZBGZzAoOMlAbumQwQtsd5UubkGAhkKSUWiJyiWJYlHh//CID2w29/n0G5dgjpjesCkUKHoCHtpRTIXugNRDAlV6wuHlYCKKGAvBJK0cApl7VZfSQKQg7ChOUhwPlYP/RwLjbhgWw8k836IW6o1BtBuhRKhT0kDgI0strjGHG7fxPb+nFxCRXOc4/14yPLF9G+//LnGW2SBHmVEijNcVx86N2SJkAkTjBPxOaAnJBSZUZ1iaaCOkZ8+vQe67pqj+V+i+3Beidrvh8xtqHf2/df/jqLxPNyi7FTX5dNRJ66KlmcsoR5uAMGTSG0j9j3TZ9LAFazeQavDhAWqluiD1cPCYg9MMz23S9/nFO3vNkI89q2hwIpr5DPpNRVlXRjIzbs1HAmjZP7bCO8so/XXEkWN8cuCmC6AQgE9P7TbycZ0zbQj+wbVNI+JVVl9ERlud0lAhPRF2WuS4ht+fuLSAgKBCk7iRAM6MgcHa1JTQAs5vVCAk/qcGkkL0CB7yrz8h/s36Wy92CucM4KKpSqxKC93PCgUKJ8JkC1Kjgk2bcp9sca83IXf+CLVYPqLP2SKr8/1tVckfpckv9fIu3UhFSVFBSgAi4vXU/0S/eyae4xaFOUjIAgGwt50KsxEpDlq/yvrG/3uyRf/CiX1v3JKZLiRsrJnrj8UyTeT022tXg8Hv4sDnGDuDOZ7dkj6wap5cqqDBCewcNDXHgtEUHMdHZ1cnzXZdEzRHzEsOlz8Uh+RV+ml7nr2qS90bgIC/Q8rOYeKU+jhUtZxtkX4H8iWF3fa/w9fub3ODNGeY/133+v+WnsWTK6ukqD7ODT7i4sOGcTHt6w1QzxU8KQHucluFJPuflrOV/lT6Dqf5qH7F/iIFmSLMYoZ01iVr1r3iGzMj7eS1FSX/mOe5zXWZX2HOag7H1ppnLiLFlRoMTg0SXHD/UfOTKDVrkybyBzZqTxds22YclXU1QQtJM0yvIll/C0WwvZ5xShCWFq0dsUj8cq4qN0ObXITEBfdXs7t/wpxxE+39/e1Is8vxhZfKUaMK9cqJamCenZW+OLOEQ72UXY6oeaj5YltnW1MfblJnk+5xsP3tVoJdAc0m63u5AyqZ/SrfdwEb69ffNJJCd7lTNbSfnPvrs9aaKk/59n7NsjA5pvbpSLHbQyZDOdDPKEUbNSdWpNepK1eQTsdH14Vhf3lx8Vmb+aQGWcnoeE+reULKPUvEJjTUlbbebL60ji+TengUSqSFnk9kmGg4PHYaNsRAt597xhj5KZDozx95Oxw+OmiYm+ce0L6heVvPY3zUA5fCno8iY1ZpeiyF+oaE8mxDRMc8rPlg9hjJoWIeKNwLxJuXMFVYj4c0o9iVlolDHia1Kk+lU24eTg6+FA7zU14EU+YDigHL7d8T0TX8aV5zEPW0+/0WCFz7RJ5WRzBi9zxt+7eXpAq0RzmrKPJaqIgBg4KF0Dmk6NeSS2m+ZRONnpk4XV9hxja+jyEUoK5JCZ3nWdgNVg+9WSpDgSzSasPihQOLnmgFZ+U0HVqMo6DWL1kIL+mgg9LYorkvHTIiSIl5OrzvfTdB0Mal/PH0nq4hCLGV+P4S5brcR8Kdht76WkIq0cOrlQCgSR9WPVnnCL0sn8ts0lVmC2h6aJkVJvySEcOUdLHYU6fuSjtKVvRyZ7Dn71XxGLuJSUjq7TyhH3+5tM0WXEHH3aRYkERZK4PjOSx1h7mkrmc9SsLIAOtuvIrN5jOb/OzzU6MFTN+i3dNB25Bn/3Osrk856OVsOnE7l0HpMseZ9E/gMq25cwq9C1VgAAAABJRU5ErkJggg=="
    },
    {
        name: "Third Age iron",
        qty: 0,
        goal: 0,
        hide: false,
        level: "5",
        faction: "Agnostic",
        location: "Varrock Dig Site\nKharid-et\nInfernal Source\nEverlight\nStormguard Citadel\nWarforge!",
        imageData: "data:image/png;base64,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"
    },
    {
        name: "Zarosian insignia",
        qty: 0,
        goal: 0,
        hide: false,
        level: "5",
        faction: "Zarosian",
        location: "Kharid-et (barracks)\nEmpty Throne Room"
    },
    {
        name: "Samite silk",
        qty: 0,
        goal: 0,
        hide: false,
        level: "12",
        faction: "Agnostic",
        location: "Kharid-et (barracks)\nKharid-et entrance"
    },
    {
        name: "Imperial steel",
        qty: 0,
        goal: 0,
        hide: false,
        level: "12",
        faction: "Zarosian",
        location: "Kharid-et (barracks)\nEmpty Throne Room (east)"
    },
    {
        name: "White oak",
        qty: 0,
        goal: 0,
        hide: false,
        level: "17",
        faction: "Agnostic",
        location: "Ice Mountain\nKharid-et\nInfernal Source\nEverlight\nStormguard Citadel\nWarforge!"
    },
    {
        name: "Goldrune",
        qty: 0,
        goal: 0,
        hide: false,
        level: "20",
        faction: "Agnostic",
        location: "Kharid-et\nCamdozaal"
    },
    {
        name: "Orthenglass",
        qty: 0,
        goal: 0,
        hide: false,
        level: "20",
        faction: "Agnostic",
        location: "Anachronia (north)"
    },
    {
        name: "Vellum",
        qty: 0,
        goal: 0,
        hide: false,
        level: "24",
        faction: "Agnostic",
        location: "First Tower"
    },
    {
        name: "Cadmium red",
        qty: 0,
        goal: 0,
        hide: false,
        level: "24",
        faction: "Zamorakian",
        location: "Infernal Source (Star Lodge cellar)\nInfernal Source (Dagon Overlook south-west)\nFirst Tower"
    },
    {
        name: "Ancient vis",
        qty: 0,
        goal: 0,
        hide: false,
        level: "25",
        faction: "Zarosian",
        location: "Kharid-et (Culinarum)\nSlayer Tower"
    },
    {
        name: "Tyrian purple",
        qty: 0,
        goal: 0,
        hide: false,
        level: "25",
        faction: "Zarosian",
        location: "Kharid-et (barracks)\nEmpty Throne Room (south)"
    },
    {
        name: "Leather scraps",
        qty: 0,
        goal: 0,
        hide: false,
        level: "29",
        faction: "Agnostic",
        location: "Morytania (north)"
    },
    {
        name: "Chaotic brimstone",
        qty: 0,
        goal: 0,
        hide: false,
        level: "29",
        faction: "Zamorakian",
        location: "Infernal Source (Vestibule of Futility, south)\nDaemonheim (south-west)"
    },
    {
        name: "Demonhide",
        qty: 0,
        goal: 0,
        hide: false,
        level: "29",
        faction: "Zamorakian",
        location: "Infernal Source (The Harrowing, north-east)\nGod Wars Dungeon (Zamorak's Fortress, east)"
    },
    {
        name: "Eye of Dagon",
        qty: 0,
        goal: 0,
        hide: false,
        level: "36",
        faction: "Zamorakian",
        location: "Infernal Source (Dungeon of Disorder, south-east)\nDaemonheim (south-west)"
    },
    {
        name: "Hellfire metal",
        qty: 0,
        goal: 0,
        hide: false,
        level: "36",
        faction: "Zamorakian",
        location: "Infernal Source (Dungeon of Disorder)\nInfernal Source (Vestibule of Futility, north-east)\nInfernal Source (Dagon Overlook, north)\nGod Wars Dungeon (Zamorak's Fortress. north)"
    },
    {
        name: "Keramos",
        qty: 0,
        goal: 0,
        hide: false,
        level: "42",
        faction: "Saradominist",
        location: "Everlight (mass grave)\nEverlight (Oikoi)\nGod Wars Dungeon (Saradominist, south-east)"
    },
    {
        name: "White marble",
        qty: 0,
        goal: 0,
        hide: false,
        level: "42",
        faction: "Saradominist",
        location: "Everlight (Dominion Games stadium)\nEverlight (Acroplois)\nFirst Tower"
    },
    {
        name: "Cobalt blue",
        qty: 0,
        goal: 0,
        hide: false,
        level: "48",
        faction: "Saradominist",
        location: "Everlight (Amphitheatre)\nGod Wars Dungeon (Saradominist, south-east)"
    },
    {
        name: "Everlight silvthril",
        qty: 0,
        goal: 0,
        hide: false,
        level: "51",
        faction: "Saradominist",
        location: "Everlight (Dominion Games stadium)\nBarrows mounds"
    },
    {
        name: "Star of Saradomin",
        qty: 0,
        goal: 0,
        hide: false,
        level: "51",
        faction: "Saradominist",
        location: "Everlight (Acropolis)\nBarrows mounds"
    },
    {
        name: "Blood of Orcus",
        qty: 0,
        goal: 0,
        hide: false,
        level: "58",
        faction: "Zarosian",
        location: "Kharid-et (Chapel)\nSlayer Tower"
    },
    {
        name: "Stormguard steel",
        qty: 0,
        goal: 0,
        hide: false,
        level: "70",
        faction: "Armadylean",
        location: "Stormguard Citadel (Research & Development, south-west)\nGod Wars Dungeon (Armadylean, south-west)"
    },
    {
        name: "Wings of War",
        qty: 0,
        goal: 0,
        hide: false,
        level: "70",
        faction: "Armadylean",
        location: "Stormguard Citadel (Dayguard tower)\nStormguard Citadel (Nightguard)\nGod Wars Dungeon (Armadylean, south-west)"
    },
    {
        name: "Animal furs",
        qty: 0,
        goal: 0,
        hide: false,
        level: "76",
        faction: "Agnostic",
        location: "Feldip"
    },
    {
        name: "Armadylean yellow",
        qty: 0,
        goal: 0,
        hide: false,
        level: "76",
        faction: "Armadylean",
        location: "Stormguard Citadel (Keshik memorial)\nStormguard Citadel (Relay station)\nEmpyrean Citadel"
    },
    {
        name: "Malachite green",
        qty: 0,
        goal: 0,
        hide: false,
        level: "76",
        faction: "Bandosian",
        location: "Warforge! (Crucible arena)\nWarforge! (north goblin tunnels)\nGod Wars Dungeon (Bandos's Stronghold)"
    },
    {
        name: "Mark of the Kyzaj",
        qty: 0,
        goal: 0,
        hide: false,
        level: "76",
        faction: "Bandosian",
        location: "Warforge! (north goblin tunnels)\nGod Wars Dungeon (Bandosian west)"
    },
    {
        name: "Vulcanised rubber",
        qty: 0,
        goal: 0,
        hide: false,
        level: "76",
        faction: "Bandosian",
        location: "Warforge! (south goblin tunnels)\nFeldip (shores)"
    },
    {
        name: "Warforged bronze",
        qty: 0,
        goal: 0,
        hide: false,
        level: "76",
        faction: "Bandosian",
        location: "Warforge! (Crucible arena)\nWarforge! (north goblin tunnels)\nGod Wars Dungeon (Bandosian, north)\nGod Wars Dungeon (Bandos's Stronghold)"
    },
    {
        name: "Fossilised bone",
        qty: 0,
        goal: 0,
        hide: false,
        level: "81",
        faction: "Agnostic",
        location: "Ancient cavern\nOdd old man"
    },
    {
        name: "Yu'biusk clay",
        qty: 0,
        goal: 0,
        hide: false,
        level: "83",
        faction: "Bandosian",
        location: "Warforge! (animal pens)\nFeldip (shores)"
    },
    {
        name: "Aetherium alloy",
        qty: 0,
        goal: 0,
        hide: false,
        level: "85",
        faction: "Armadylean",
        location: "Stormguard Citadel (Research & Development, north-east)\nStormguard Citadel (Research & Development, north-west)\nEmpyrean Citadel"
    },
    {
        name: "Quintessence",
        qty: 0,
        goal: 0,
        hide: false,
        level: "91",
        faction: "Armadylean",
        location: "Stormguard Citadel (Research & Development, north-east)\nStormguard Citadel (Howl's workshop)\nEmpyrean Citadel"
    },
    {
        name: "Soapstone",
        qty: 0,
        goal: 0,
        hide: false,
        level: "98",
        faction: "Agnostic",
        location: "Waiko"
    }
];

if (localStorage.getItem("mats") != null) {
    if (JSON.parse(localStorage.mats)[0].goal === undefined) {
        materials = JSON.parse(localStorage.mats);
        materials.forEach(mat => {
            if (mat.goal === undefined)
                mat.goal = 0
        })
        localStorage.mats = JSON.stringify(materials);
        location.reload();
    } else {
        materials = JSON.parse(localStorage.mats);
    }
}