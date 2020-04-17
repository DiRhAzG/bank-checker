///<reference path="/alt1lib.js">
///<reference path="/runeappslib.js">
///<reference path="/imagedetect.js">
///<reference path="/apps/alt1/alt1doc.js">
///<reference path="/imagelibs/tooltip.js">
///<reference path="tooltip.js">
"use strict";

MaterialsReader.storageinterface = new InterfaceTracker(new Rect(1, 1, 1, 1), 'data:image/png;base64,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');
MaterialsReader.itemnumbers = new ImageSet("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEsAAAAICAIAAAA+4JV/AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAC8SURBVEhLjYsBDoAwDAL9/6dnDYYR6KoXE+nBLrDWG4iayvgUM21rm8IMN61UUtoA5Kv9s8c8zX8GYCc4jYu2+imtVf9kq4lmkpLGqmGZaNXmQWpVUO5WF6cMzNSZexq07UAlMINNygy2KZpXqk65sJPQI+RMBzYG9mSu8OlpmHlOVX+ywaoCP0UH5JSLoQKUCMPz4j3nqXlwatO3y1aCdqbk2+HJPrPAp5kG2AnmAYxtkpwp9DpoZbHWdQOh12Sq5X4vpQAAAABJRU5ErkJggg==", [0, 7, 11, 18, 24, 29, 35, 42, 48, 55, 62, 69]);
ImageData.fromBase64(function (i) { MaterialsReader.scrollstart = i }, "iVBORw0KGgoAAAANSUhEUgAAAAYAAAAGCAIAAABvrngfAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAABXSURBVBhXY+QWFGFiYWWAgX9/fjPzCgg0p4jOyOAP0vrCy/zrwjN25o4i1TQvPg7GP98/flLi+8n49w9TmIsAVA8YeKr9ZBLgZYbywICb7T8TlAkHDAwADXcVzjK/SlwAAAAASUVORK5CYII=");
ImageData.fromBase64(function (i) { MaterialsReader.scrollend = i }, "iVBORw0KGgoAAAANSUhEUgAAAAYAAAAGCAIAAABvrngfAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAABNSURBVBhXY/h+3vX7Mbvvu01uTJE41ch3uJSD4fkhJ2ShHfmc2IQm1hkhCxV4CjAISUhNqtJ7vsH4TI9kZbAwkMvALSjKJyYFR9yCogB+Zy26T7r+mgAAAABJRU5ErkJggg==");
ImageData.fromBase64(function (i) { MaterialsReader.bankback = i }, "iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAMAAAD04JH5AAADAFBMVEUBDhYEEBYEEhsNEhQKFRwMGB4RGR0GFiAGGCMJFiAMGiMMHSkRHSMQHigNICoSICYTIisWKC4ZJS0aKC4UJzIUKzsbKzQfLjgcMDorOkMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABvA+HbAAAeF0lEQVR4Xo3biXbjyJGFYQommwJAimiVRu55/xed7w/Ixz6enmlDLBJLZqw3lkyyLstlWR7bshzLZT3uj8u2Xq/bsq1uLT4vXq6X5c2w5XEs2+H9emve/li27fDQEGePmXE9Prblspm6bPe7p9uyL8fdP48fr1e31/u2bwdC2/K4RN4MJC7Htl2Jc13uF/cMvXh8OZb12dz5uz4idLleH84RmMvrtm0mL69ER6RH9+3w1B8yx+Ni6n5/Lre36wtnvI/969gO4y/35bEu63W7GYzshc7kJ8CFriPaZXs8ssRxGPBa3ggxsmyPK8GW42A6mm+vy3bftteNeOa9swxjdro9XpffX4gdGQmx7e8u3u/35f69Xz6MWLbrcZjMpAx03jC1OSztTpplMvxpQ3zDY84S63YlKT6P23IYPDyvhq/bmhGu1xdhj19kRJ4jKfd5fS1f+/Gdg9LWrWWN7bLsaZ3XKXS73S5fqebeM28SAPPtO1GPnWF+8+9Yee92WxI39ryXZbbX4zger1uIObZ7dxKA+FeU8sFx/3hHiPOzErVQ2AZ72+UtYciAWC6mMVQeGfzr/dg+tv37sdzv2y1MPh7XG1AwRnMceZSLXvibvWK73P8ILEwfht5eHPlc3i7Pgx2OsQDLLcEPRyokklOvxHIjNzgl/LJfH+H+uL+Or++Gbcclpfk/C5ETm5BA68dbMdJtasGyaKChz9XH+/FbJuHRV6wMM3AVCfisA8Tnfhl/RH6YAx1TXtjOW4A167jQ09zM/oCj017g/bwvl5tTU5/bhfoNfLyawpn36/7f4HTZ3h48mQNScg3+vD/8RuPHImaijhYqRS007vnZ+c3Henx97YUhmxcXNAq738edlgtDN3uRX2SEVAT8UMTu37md8w9BFuQuCxgtZ35Z3WFdRgWVbXVH/HXDcSPUyObR44bIvr/w3B5viXHxYfJt+f7+xOhRfmKQgQpjFxcH2RPg9VaSWb5RT5ArTFzeiFEIDSpERVZYBwesVoQxI3uVyy4BKiznxpyTW9zJd0yVMseLyQK7QfffCfU4Pj97gxPqPFgMpdS6rlf2aj6m4xF/2/qG7uVKicsFqGKfXFy9wdaLdx/b/vW5PY/lN9jDFcBfEl/2en27cXs8jm/jEqB3RqEeWEp92+cmCX0LEi5IaLjzLC22dSeIzwWfBz+sppW0JULC3oTx+LsR1/sHFYCPNSXRt8fjLk96cP/FMuIwC2BPjO+DMCYtn9LI220dSHyqEL8qBTkdQR7tRZBORU2KQxp7S5Py0cEKPcf/HYXyMdPfSFdUPB8MsDyYC1+4uK737+NVKqzKfKL5wH5SapG8HZ/bIbkAIQNecgvazF7hCcJe6KqRCRR0E1FNYLHjUfLPXB7eiPhiy/0O/hL0oc49PqsTAaD8+HY5fn0Kg88S0+t6kZod1wdnrL9yroO+vZdZ/HkKzVh3u4rlBMdle0qwMg1XldbE5OVx/5oKdt/fn8f+ffx9/+MPQ19vD4jN/v1b77+29fvX9rm8qRdy9Pr5ef30eDuAJf54jCmyMEiUj7geb7lhrfpUQhOVfUNUYk7YisuZu13cXf/42Pe/75X4x4sLtq8KQQX0WJ6ssX1+YvlipfXz8Kzop8NAE/4n8ItK4rBE4WhiuLxQeuejB9cIrZVkD1OF0iHTZ2u3jWMBMQracp6rAl4uRcz7voqJT/kB0e/9a/v+xv/zN1krrl6KKBLE7noQmd6sB9iOu2wyj5B83MsNl+X5ORm/+hXSTP8As7fH9x8Z/mDqAKAiTgxNG/L9vW/C8VsA3sfoHp2ZMGZRzRKC0DsF7sf1/mSjQkQyRSQAEoh4YVtkKK3H87k8dTdlVz5ajr+rcOkkSDyVd3YtyvIpC13Vgc+aholdAaA46GYkaDxKuWMMUPBEWLhCRIgShzVz/7iNpNgVezDdR9y+IDzUR+IbzMaMwOJG/QwJVrnBReNFiZDhHVPKx5jgxgzjhP5JP/V1+PegNGUecPxoRuy6QQxcTl/zVJFgpOkvCNAgHPUddQEnIkjyKQzInnkXhlCk1XOZs+ZHXyIDuJz+02fgmKiY3KNTKTJyhVfW3za1xCBpCN/lRkIN1Dz53n8lOVq/3UDz1/aLoWKrRzMlIo7X8a03lhmICgeAhFvRxxyjC2S9MTYHhEbVq7anx8a59a4p1ARqhlhXOwtPUJr/QO0P5e97+XW9rvmEu3UmOVD9Ebwhcllf1UXm+FRYOR/2CPVQ+rY9LsEhaEKZ9tHQ2yYjDHs6Q0hg+b4rQ9f7HbCX0jGpa3dgXXE09oT2IlSvNz2RDvKRyrlOTj42PYtUOHkghtFEdXiTh0cw43VyouMpBCXtnE7cCGrR9Hz/r2+tlnmarih8vd9f0/owxt2koLFmsDBBLKMeshHs/B6KapXKKE0YVE3aJYG5ZnwFITqP3WsYZwg2tdcB6uBk8Rj/FDnzkPB/+fdQ5vnTbSshIvOAxOEz8D60at2hlG5jFcgFYtiBh0MMttgoXybQpGaRF4BcSX7mQV8gX48nSIO861qQdx5whhZCAdSJBropdSBZwd9DOiFAeEcwh6VDYeRTNZsAK/4nEni/hlTPkRuqhy0BHm83qHTj2N+PN3W11BtQD423AZiQIV3fx7B16PDUk/rYWJYsjss9VHzFD5/yy5gWuFvPhevSQu9iyKBSQhaxVBCihLY42YFPUDD2k1VLDJYGgTI+1+PdiVyQTVho4IFyvfp2Veq2wTlWkwcyQhFQc52cP4vONKdegnkqalrJ5SDZNchDzLB4TNv7qeT4i+hyvE/XDJEMG5MoMeXzNHOgx2WDg4qKaKUGbzkl2/RN7MH8ik1VYbkVBff9zpLirXr7/JAvv1oA14QhS4bfP+oXcL0rEtyQBK2ltz1yDNLd6+8EmXLcUKHiQYg9h/dxFQTuSsXjM427BeMxK/vk4oNjv+NE+se3ZtCSld3hq1Sgakoi6/P9JLcyFMNXJGDlqS0A+mwsx/GHPrScMyHjTRCQB8JE3lHxdXrjAebTJ+rSRk5iWKJWVsfUoeONGzRpBrJFcAql6KM7ajI93wKzZ60FRNQMORXO3CMBrQvXnDbxGweUz+wT0InHhRdrEeH33RoUSda+ytfINS6Lkxpb50wX/0kiUS6oxi7eAiEjz4yZq3+hlDSgYFer6sj4vVTsdrl/JBCTAOF9sQg84QQQzE76NMJRBh6llhbbUe+Bd4v5jGPS2nWAZ/u62244ESduwkoh7bqIdAufPV+0VqkdYGg6jvb7XUGxZk+MXJxu1amfFBMWPELKR1WhflNyij0XuOGouzEihm78pG1V6nG7gEklQ6wlN+SljX/iXs4+9i8jSdgSUG9+unxma/HNCFkjWOsvh7NY6HjnzOoY47YqfGSLxLLymg4pt0s1cmRrk24M6XLUcruJjYf2shj4zcqy/j0/VDodNCrT/AhTYhI+8bfgUmmctYSJwQzpGk/LxJEwFNaZtyqeh0EnraNgChHaqmINpN6fJnpqEOuQ4h9H9zxQr520Xs/ADJIpWqEq3yGEZye6SkS4ESsHOMxta6YEyKwxSy4OmXKsHL5kcG5Z9w/BIKpl9I/Zxxl3axPi8c7NloA7yRilmGsAyk7wWtdzyb3t+pZai2uldQxosfccvriHAM3sJKGuCNefzF7XOOa5SD4S01cYrHqkb8lN3zEsEd12OmWNjPJBYQmcBUqNE57Yp3WpZmbryAN/mXeEEhPajTu4tDtSp1UqshpWf/PWu5k68w8ZsOlMgX8IZEC39qh6MDjb5eRyH4qAxVBOzufDarLXOOSi+RzhV96ognxtvxeL96tVHhCUi8hxXbUcCDxnq6EX60aCvm2Bvm7rB5aus1yKZYj2MQkww1zEurMzavrI45LA9T59+Tv3GlO+WWdxIohrX39CR9X5fFlxTx5Y75ljrBCVQBfuwSB1Y+/wyNxNv+ViuJV9Z5p/vbjw1lN3JqLMAIbjlVtgYbaLpZrphjQUfIL3cDt1iXufQsu6AUIWfUPkMM49pzdqeEwTcNbkJjfgfJNrrRw9baE9IWtKp3JXtnjuxy0oJMANKeIG3ZJbOmQk47JsiTDuo1rv7q03y5nOcvEgWT01JRFMqB7KdKUr976McVUH1tahvofLzrhsjyizSgvZY7rbM4MlwcCwdcvyscOVFJwAUtdz3duWS9USESEu17fZR77vNY43D86GsgYq/U/+kvJXq5VTvePK5ev9w0Ojr7wFNCmdb09fW4HUh+TNdix/hBKYM4JnJTxmRFslbfOluu/Ink2v761Lvbjd3hW7ZJO9rfhGvX8RfwREjQkIOqzC/nKvEig+jFq7ZGrrPOVzMECQHq/Pmq2/JU1UhruTiYEgKXZqwSrBklnnP6BfnzNyL8NRnxFy3rCco+2c4dEeQUASrJjStqfmEDRRFdibxVbMT0WI8E6aM4De7zL4GJSJVgJcV7LEPzpDlEEmk0ayQ2qaz/oRDHs91tneuHt/vTHntNc9at0w4HaiSQs+BasnadWhZrfwHn63Qkj3EUnI6r2wRUoZ3gktxt0KBCNchChf06/sNaX2rarVo2ueaZckEE7s3eH7g29dFFLbcVM3pY09nxISiQ+TB8ftoAVb0cViXy2qCoTIDK064vBg0rkBkWgVuev1vcL+A7RGIFwYiuQi9aThGqoTOR115nQauu+lI/7MQw2DCOWNRQ0/SUrYTfPoenvyhc9pnsAJ+b2VGxZk8i4r6N/XXUMi5itzY7na1OF//sV4FoQ9fc/E5VXYo+AtoIDITnAymzf1JdHefNTPiSKPSBpYyp3tZKDSvbzdFANfw6daOPgqAqaklNUMluBCZKS9K+1rJZifZnCRT8IakY/0hTBNokeQxnTHvn99zMnjZlVQ0kGkxWJpzLg75aKT8/D9R9+WuBMlPTql6LnklRD5d/ak0c11VYOZ3Em1A3bSgKV6Ld/F2rJ9vR8t9Jd2DZBKOzbuuy9TyjH+6RF+6jamDkQBiMtwdasWpF18zLVYLnKYsod6+On2qLAeA1tLUkqkDraIvKNcsht1Rn7DlVukEa0HEqkeHOu1bygyisHFoFbxlu3mor2gQUombBMgBWJ+V7hnjX7OGwathFhMBZkWc/IdSocOfiQz7nRLcgeU1EhT4kYGytv46HZo6U5haXDjEKD+3+bC4WGBXaqdoQlWqJD0MzHiLYSqZuWem2sneszz6CvnrFpDZYhUGwbaxT+t6W0WUE5XigOxTv334wCGQsmg1j8R/flzi62yExMEmzMA0mYco7FQ/nJBxLf9w4S68sLrdOls+jiCmBYr50XCM30mqoSuDXkc7+2ci8BoO4wq9WUFNr5AQBscpxTt7+rGp9aQbcfwovZPY+uY3JZwvcb0ybDOdVD4edbaOiktUAdCIDGJJgt4WhCGy5+d6Mq3FHto6+bp8XVQOc0wWPV7LBC5q6z7IBCo0MvQeJtQih8cgObsEJib7/L0cBRneXuEO2cM9glA7ZXTKa5aHJKABe70F3Vnjod/93uj0A0YkSbMfb8l0A1kfb6Xsp57udZTE3P2ubCtfB7bB+tpR6zMZ39CXWtgX3eNDsI1AB5Z4Ghvu6QZ+1EEMgNhnMZ6jkLx1hbFxEIcjSOE86Z0s68DA/PeNjVRSODDM0/B7vEUT6LVTDkRBvoG5bhI37S01M35U9aMAgEpo6bih/11+9JjMEoBVSaARdkqS/5wd7udceHvIknwf70FhDntfT2+3/f3syFobzUscks7Cyg+jnK/u6bXFlZrDrjEu0tQqgLHO8xRBpe7InIr69BeokRah2HhrqIlREgMPaTPGWPf46PRY8HCJwdkZJNKclULdmzRM0gqpAIU1TWsqe3eKLPs+6F05C1GXu71gN13sExfDk8fyq1e2WVIJMDvwlAFoOzTar+vW5LlIfQfT51bYsYnKNPUzLkuJ8TBq086ncvqn9rp72x7fBBHNrsxb5peJgaLBIf5bOSip3G6bi+xwPsXLYBRN/5LJU6a7T/2Xs8VZcv0N6I7JVKCoA4AuIF8ThV0s/ErsARlAETiFhbGgFkg6T2/kZzO69oeMGu4kJOY/3n97SasxpGITjCnOVY7/v/QI9YnwZGMRQqfM9s3b87kb9MnmVoXBAlQIN4umKYCvkG9LFWeYxZeG6mujUzFR3ly2BR1N0trBliUNIoZ4V8fcZvvJzGutKxgbAWk/WILGH6rJP1xJzf4mpIhjuP+FkoGoTD9aoOnnZWzThWmJaOWEpfNAoK3MGh2yWXfJzl+TPTP1l8R7mP+SGzQIO2bhgnmcv8qCpLXQ3+TP1uo3fo2pwTsYQz88UiL6uOw2q9LUlRrQqjhqdcqFKPVTlXBJVnkFZYzc72h6q8t2l2n004Ydhfrx3Hj7Ga4EViNpnTfoH3NRr0HHC4RtZubi9mBA7/KpQEdJdni9Hhezcmxrs61jfHGSX0F+SDsl+uEUt3u823Y9rCCJbGjZrCWjWH6Vj70sS6Lt9B8Xdp6zgeOPR9cvvbta75IpW6OCPwxMWTsPrqPoW+u28acXChFRNif1U6hMhakRJlIXN6oQ0gDHOiHC+eh7qmJcP8JF8JLki0mssKoDxa8qDk8p8auFHmffqp5bs9u111qLGMLZyugtjKHTZm+TJf5jc0G9QD++FahoSdBZn3y4MdbJhFfHm2KYJoC2bAtnDMFZhM7mau4rli1AdB3fXe+qM18JfKAoK0kM18RSquRd/6yRl8AlO2C4ScxHTplKe/mZuvM+ALGfJoAtaUIdvJZLQmPRO0zD1o2wes0VtZyvA+dZQsi8CEJY768zTcLX0UHos/geShRAxScLlPK62mmY/ZwpBjZJwMPEdpNlRnLDcNakoaWRM4b/CfBTCZ7o93bpRRqWVPI398FwLmwzggBzEilEgibjkwNaQAW0PQeCDLpv+znTbeaEjnKyHjvH90UmO/X5338gNqjn9m0fipcEa24stdzooMc8/1a+ejcf7xcb4zXJuBPPp8f8DmwKpEUG7OfB+Uj6ph3hLwtFsYBpCXH/dhnr3DoPHMgeUiPERFhlEfANoS5UT7wIJuRqK1643cljtZ3q02jWgGdh0dV4FOYdHc5G5ItmFOzNcSzzbJDkp4saeA0wafDOpAZQxA8L5/7j0VKteAZPE87H+rEV1mzGX0/0qTMHufs88yAoS/LisyE3T5mV9ds2otutkraJMg/cEDfKbcnPzP/Zf8RtrNy/Me57h8WCelhfhEy+3nPHOhx0stpjeMUIzql6CROz++iFSDrTqjLDJWimiDuaFQ3xefsP5YPSXRqmKqjosmY8KThe/t55xdRQQCfsVLIalYlzIRZ0YU06tSAzBf6k4U87HdtJGpyyDeqLMzSCJ37j5cQkI/jkpDDLnkiy3GJNVErVfX9RFGVP4jTlx/j8uwZSQfBz+a7V8EZKTeScuql8CDTP/cfNaqtMZWq064nGe8ZIzOWjkyzDNLMsEPfbXOJx+jPnJaVTGEsriJhIsqkbuGVbEIH0hxOxWDLxfaf2n+UDJ5sNqJ7Xxv0w//nrYpR4XLaN7HhKhXnUW/9NCwWwYW13WtnGqO8RLJcAKtPNxQxA6vkcpqRAKhNubFm2DQp7RZBxXPzhRdiiEgvuK+fWbGf0NadTeKWHNMy7S2vknbeZGcft1Pz6hivGdNPnk513q2XwMFsyxIdEaal1gx46vTD26eGhIuqZoMidx6/xbk9qpaK977lzNzN16Q1DDRvQ8Ww063znDDODJkfNIyCRJCPv1rWjk/OkHARtmP24wL/5oThLUDy39YGOH3clvdWPQG3er5rT4yCDWafXxaiNwQCThx8sH397/U+Hflyef92Y9rDHgwnR49mtvpy7ueJzbf2Ccr0UxfGQSVoQW/wWDhe4T4hvGuWrtOLtEJIy3DhWEtlY/iULmmcGwOLhq/vAs4/h7epiIlyfFtdVJi4S5k78465TDfaj+grH0et5UICJVNhNMHarxugLdkNrdvLGJdaulmLrNcX7uGYNdBNAxMJ6l67Z7oigkWzPFUPefdXpZlGf3TIw0UuAcb/ziByhDlxFV0ssoKFjYsLkBrhtDbBmfXfY7npMv5tPw+77G12MsrIK/Sego6/bpZCJ9Big3uumEsjDLcoS3BDIM149zN6JjFzgisRy279zsQCbWpp4xrNosdnttf2BBekWP1v2dHUlB2MGWpS7hnWCLuf9vd+8UkOVB3pOatClKZrwb27Ln2s/U+JPM0I/7Kf14+htu+BUysGy2hCVMENaNpZoMfWY5LRp6NaMhBJHzT6yiAb9NigOv4UjCSbdk4c1Vqri8g/9/OqGXSj7ODgvVIGoefWhdYwLPRtk9nIRuTUtV+KTNZwcX9PvvTF1jPUZERM+5YqvMFFJw1O+kzD3ed+3lJ+q097XO8vIjS/76kO5XMKc+luDjMnFJO+7aXzwoMy1wiQ3Zrf/UEEOeeH3o3k4RyJgyRoEuTMfl7gS+c8hQw+YH82ffQ7FLnbOPHnOLlWu1I6H2hvqsSsOwq285PbglFCeVGurs6YZvz7fp5hWW0kT/bOyzStbYzouYKzalRnTyM/jMujR5XROsA6y7axTfFJjEO3kdYVH+3nWWqYOc2Po/RV+g5nlZFihsslY/1XtPtu8KoEskZaTPcyAgYGp9MILOfuQ2pg1IAY98vlbhcqI5lGmF5/tp/Xd6Z1I6NVM4zQJJReV8UaJINzDhvyDgUSsx/K7T/2/Nx/nFhlMU6+qKuzuitA0DyD5E/28yTftDFPIQvsq/5EA5Z13c/ik7ZGwNMImSzlHcwSgwZlAYXTu3/69cBUEHlkBKatwYj97/t57Rpc2xd9JGI2iKzp2azLM4Qk5X6qZdVQ8vzxgEvsna+tpIPl+/mTSIuz2jk3mKDQ/CH2Z/t5AKHYkrBvEhoz7XdUeoqHUxF0fuvgMCIUx9aTAJCm3SjEDpXEA1pYERYJHv3Fft5Vkm4BniqhJyP3w3CBXHoam+IhnfVTHsdpexMzw7Pa1UWzM/Z+vHc1zMVx5bNg+P/289L7UgGiUV9GJpZlPbmssAOA67h+bNtnTCvxjXVz0nS6YIZ/op3fPvtsKyOKUxG8suef7ueVi2+JHJXm5Mr1eG9WFuzuWGbTPHqPLpR0Q0+L/9T8UTqPNTSlcwF9OhFJp3pFOOKGVOYb3H5e2fMnyDKxcKxTbqbqBCvhsXC2Nop2epeAyj1WWl2N3AnQhwGJ07YDJzq//dV+nkjIFxnqnNsvq6dfNtJly5DRhNKjiQMbdycm39hoADQaeZEHxua/V40wt7/az+uW3BRVImTB+bhI6ZmfNRLlR8EGn/uPzmL44fbsP2baeW4OA2YBh2XyX+7nwcA+Dl8Cxo8JY4TpuK74rCziMj+o+dl/nHG92n90ompNGvVydQbxf7SfV3/4x72ZDRyaZy8tWt9VCioLdiXZkAj/n/uPzfXHYmwDOh4PGuNUnAcxlv1f+3l0mh9ZeonO7O++UKVXi9Y80n97UvSq0Y/j+//Yf0zUme6SE+CtAP8P9vNk69ttUlEzBcooOoDb58dNP1pcr19pDIppMs5JfSWL6AmSQdyaBoqRWx+2mhnB+ovOn+3njfcuz68fKXtFNxGAfIK0EseseV66+cf+48dt8kc5P5ERVvFfAXfugB+B4v8X+3nMgEzBOHkgndxFrv9PxPUFMykgpCJyfdzIcKOEZ8Nq9h89xS2Em5mFs/1/uJ9XyQ9zLZYeErEn+2tR8/r2rm6N1Ketyyk+//f+Y8bFeN74of91B2pK72SC/f51DiImER79TE0Xgh6D+CgpOSNJ/+u26GB2Y4Uew7fKgce+8ZA+LQj7pg+8TBxtKUvytVjKVHPj1KhfqhU6l0MUJWLSVB4RnyVbiFWPVqn6+1HuimmV+YEFAtrR6RdXa6ywkAnGRa7GxlPM1yiVGoZe+721/W5bnu9HORAs+u8qWf9C6lkkBJzygjnS0qtvbGhTe/Z+/LIm4VExRzGTWH9WpC3CkjIxtPkew4HzEJM1+y3i85BAuhEwKPlBRiSMZrQpBP3HieXYi9L57VfjZcj2vw9OpxqEy4tZDKX2S3Ii0XA0K18lCeHLoUTp22ai998JDvonSemST/pNKcoL4PRbbdFeNarxxa2rJEcgmmyfSxJ8DEpuV9e3y/UjtclPBBZuQ2b5zulmx6y4GNPLcBDM2/reyheiqVwCnmCpMpmj70gKYum78O/LZ1K3ruAMA8UnG2S+yI5b64qMlx1jyQi3vsT+Fijga8XNDJMH+0kwyfp5bpVs2/4HVFnb3kHtJ9gAAAAASUVORK5CYII=");
ImageData.fromBase64(function (i) { MaterialsReader.slotoutline = i }, "iVBORw0KGgoAAAANSUhEUgAAACgAAAAlCAYAAAAwYKuzAAACFElEQVRYR83YzStEYRTH8aMYxrssWGCB1HiJYjakxIaVnZVCWJCaDc1ixOSluHPNGO/XRpONTFNKSaT508b53q5/4TqL33Sfe5/pfDpPz3SfkXQ6XbX2+Vmd+vqqSaXeIyaiFkzYhIv49Nxw/+DIdk9/7MxCsGDCJsfH3zXciLR3ZjWuJqM5/6dQG0MWEzaAEVX/TTit6+g+0qQ1hyGHmkcYsGDCJvulkg/koWY/2tWX1OxpdkMONZMYsGDCJo7zAdAJcExKaHYaeoe2www1g9p7WDBhk0KhUKvr7egDOpfQyVuaTc16yKHmVoBMYsImnucBzCDX0LnNpoGxVc1KyFmlNgYsmLDpJinVBcBdnUC71/lCc2x8OcxQk9oYsGDCJq77CtA1CHSxSfLpxywQmzjFYlQHFwaBF9jYJNHY2ETWGhATNr+DVoF+B/WjXgc5g8AcNvtAXeeG0fjUpTUgJmz8DgLMGwTmsQFsNAxslHz+BeCVQeAVNjYJwGuDwGtsLHGTVSA2OfHeAN4YBN5gA9isJ6hba0BM2CT3/GwWiI1dDPDOIPAOG0vcooN7g8B7bLywmgVio4OtOngwCHzAxiYxC8Tmd3BydsGzBsTkd1BP72aB2OTMK7YFQFMHd0zY/CWemV880Jum/vpQ4IECW3ijrl/aSMyB1JuPFoIFEzYpl8tVXNBJWmohWDBhk0qlYjgV+QUq5JJ+2gDDBQAAAABJRU5ErkJggg==");

ImageData.fromBase64(function (i) { MaterialsReader.topleft = i }, "iVBORw0KGgoAAAANSUhEUgAAABUAAAAWCAIAAACg4UBvAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAJRSURBVDhPfZJPb9NAFMRN2gIOtqkd2/IfYtlxgTYhEbRFguIiIlUIBFTi0FOFxIkTB/gAXPkAfGJ+2zEbFySk0Wr89s2b2fU6bjLdjspo2i5OzrwwubFzx8uqkR8/fLp+9/nrZDb/9vNXPj+iAocsl4f12F0E/nF498UkcryiZcSj9Qe27z3u4AIT9w67T99/sCKmQoPEVg+MHtDESh8p6KNbczHccj3qxd41sfRdnjiaTVoEHAQwgnEQ6gDCxNOjk3/FJj8dbDer5woCV3KcIXxaZ27HxkZ5VqQmP+ORIaAVThywvZtSYejQeWgOxHs9+aWEKzZ/QSmwLW7e+muE5f39YWXNpTezsgrAOQKD2uUGjBbM+QH+nHYoFgHU/4P+/aD3i9mWH4+TUtiJiqjah6jISiWctiI0q80hofRsUGUPsOFnlT7VN3IDGtDbBs3t35/xzyo20AhsG6swpckN037on4z9blRs9OO01p4FngxVq7Y0DmgQccz5GWH0SXk7SLSa7SAbtooM9SZRWju8kFHS8GaphnnvRuDzyy/d6/OXbz+C9fsLQZ8Cu1RMfumZJx9WfObHXRDnu2kZ5RXEi9KyPYjLhgorRVaw+X9KpatiBHq2UWb1fckYYbmGQq78/Xh5+kZHAiKrZ6/UyoozmC2eiIiDan9l9PjzEvFHNmkOuFU4/pigpxuCORx/JdJKcZOfzBLrLyg/SnxQKi0rRdWVrn9/+Ef1A2Sc31xEVtnzo1cQPjGUHmjEtfvjwZg3c/W2Ob/c0LOit57UhbhsfgPFBZL0VJl1mQAAAABJRU5ErkJggg==");
ImageData.fromBase64(function (i) { MaterialsReader.botright = i }, "iVBORw0KGgoAAAANSUhEUgAAABkAAAAZCAIAAABLixI0AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAAYdEVYdFNvZnR3YXJlAHBhaW50Lm5ldCA0LjAuNWWFMmUAAAPQSURBVEhLZZRpb9tGEIaJRCRFiaJ4LndJLqnD8RHHdp3YCdLYKRoEaPux///P9BmOIxgoMFjO+e5cy6Cwvup2db+r3LQ1PWJWu93lrdtfIF4/PseFiUubtj6pRUSJCYfc9PB5O0Clm/KmC0o3zsIIFTB2zBrXHS+5ALr58ke4rZO8XTX9snKIqsfB7c+B4OLG78lgCxbwcBCM8O0Af7i+F7HpPnz+Hm7KpLTL0kZZg4gSEw4S0g7gAkemiIHk4ibJzki2FHvCooT7bz9BSSoXbk2YG0Spa8YikXY6g2+GA4jEBtyzbXqFq/u9VN4Ocu18593XH2Fhl4VJqm7VDIgoMeEwh4hzOx7nhEapUa/ixA+VGY+7qzu9au6XCbdtVNh47hdKTOpACEVAcxIjvRd4qVEK3ONRdZN/d41yU7Ufn/9aG580U2J8WDpElJhwoEbjj5yKLlisAhxtUqCi9WiPHz5xltazBBs3hbklu7iyiCjVgZbb6R288QfK4oJAgIUbZ0RJlbU4u31IS8PUKWpZdWHeLusuLqVGlJhwIJiMKBBQTS3gHuBoHoiS6nxtf7ySSe/OSYQVjUoXFY4JIKLEpA7MkZMQECUvalageXCTJkw7BNdNJLKqu2XRAvc2qxFRYsJh9pcFIgREyUsLFKz5MeFKjYwJVxaH5WS5ksomTRdVFhElJhykxqbTp4aGcO2XviHPNki91usczXhgoeLCkhr7xUARUWKSOc5rpGnK3Jjj9eMTi3d283D16dvl/RfO87tHu5MB4fH+4WljelKLtvWqdog6HxwufvtMIIRSz0BLlVc2b7Deo0AUzqPhJ7E2Q+p2qZ0QUSocDLF6ooFesCgYM8NWUbEQuS3rdiszUCa/CkSUiqVw6vaChfk1MXWGdRK///MvO7Fi9cuWvwXiyfR/CthAHu1KAsak9lHRLeth0+1TO/LDghbbZl56F1c9ZZId6IuticqWlwDPSTg9DaSEZuDfFOX8DOy6negOuIvMRIV6s/c8b3EASOptx1juHngS+OAvV2Z1wOftpuaV0JFYgqUv4lSesuhAFO9NRRaziWn4td3hjHXdepSLrKFGSxWL3CLoJXPagoifJDIzSdOHJesK9TRB2mI8sZQv/iX77IIob2M6kjW0lrD018iwSSNegDoqAkigjU/dXlqWSR/5r5HXmhCwLh7/vHn+++zjEwwndP37T+g1r+L+9ivMye21Awz6IO2OSknjlVmU/ZtNzQml45UqVYMPjIqlF311eP+m2cNgClBpmLpqpKD8YpRwIwxGsSB1ViumtDv+B/DVwnNlYwupAAAAAElFTkSuQmCC");

function MaterialsReader() {
	var me = this;
	this.tooltipReader = new PC.TooltipReader();
	this.pos = null;
	this.state = null;
	this.overlayState = null;
	this.tooltipState = null;
	this.tracking = false;
	this.config = {
		timers: {
			scrollcheck: 70,
			tooltipMeta: 200,
			tooltip: 40,
			overlay: 5000
		},
		overlay: {
			scrolldelay: 0,
			notext: true
		},
		maxcoldif: 130,
		maxrowcombinedist: 13//max px distance between the estimated y coord to merge 2 rows
	};

	this.isopen = false;
	this.message = qw;

	//private vars
	var hoverwaiting = [];//reads that are waiting for confirmation that scroll didnt change
	var readcount = 0;
	var trackTooltipInterval = null;
	var trackInterval = null;
	var trackCallback = null;

	//constants
	var slotsize = 36;
	var iconsize = 36;

	var backcolor = [30, 49, 70];
	var backcolorlegacy = [62, 53, 40];

	this.find = function (img) {
		if (!img) { img = a1lib.bindfullrs(); }

		//==== find bank ====
		//TODO ditch the interfacereader structure

		var botright = a1lib.findsubimg(img, MaterialsReader.botright);
		var topleft = a1lib.findsubimg(img, MaterialsReader.topleft);
		if (botright.length == 0 || topleft.length == 0) {
			// me.message("Couldn't find Material Storage interface");
			return false;
		}
		var loc = { x: topleft[0].x, y: topleft[0].y, width: -1, height: -1 };
		loc.width = botright[0].x - loc.x;
		loc.height = botright[0].y - loc.y;
		me.message("Material Storage found at " + loc.x + "," + loc.y  + "," + loc.width  + "," +  loc.height);

		//==== init vars ====
		var storagearea = {
			x: loc.x,
			y: loc.y,
			w: loc.width,
			h: loc.height,
			scrollbar: null,
		};
		var storageinner = {
			x: storagearea.x + 15,
			y: storagearea.y + 22,
			w: storagearea.w - 12,
			h: storagearea.h - 80
		};

		//==== initial run ====
		me.pos = {
			area: storagearea,
			inner: storageinner,
			columns: Math.floor(storageinner.w / 40),
			legacy: false
		};
		me.message("Material Storage inner at " + me.pos.inner.x + "," + me.pos.inner.y  + "," + me.pos.inner.w  + "," +  me.pos.inner.h);

		if (!me.state) {
			me.state = {
				slots: [],
				tab: null,
				tabs: [],
				tabspaces: [],
				rows: [],
				scrollbar: null,
				rowoffset: -1,
				pxoffset: -1,
				rawscrolltop: 0,
				tooltip: null,
				allslotsvalid: true,
				scanretried: 0,
				firstscan: 0,
				lastScroll: 0
			};
		}

		return true;
	}

	this.read = function (img, forceread) {
		if (window.alt1 && !alt1.rsActive) {
			me.isopen = false;
			// me.stopOverlay();
			return null;
		}
		if (!me.pos) { return null; }
		if (!img) {
			if (window.alt1) {
				img = a1lib.bindregion(me.pos.area.x, me.pos.area.y, me.pos.area.w, me.pos.area.h);
				if (!img) { qw("failed to get image"); return null; }
			}
			else { qw("Can't obtain an image"); return null; }
		}
		var changed = false;
		//can not have a tooltip, added benifit of ignoring it when user is searching
        var searchbuf = img.toData(me.pos.area.x, me.pos.area.y, MaterialsReader.topleft.width, MaterialsReader.topleft.height);
    
		var isopen = a1lib.simplecompare(searchbuf, MaterialsReader.topleft, 0, 0) !== false;
		if (!isopen) {
			if (isopen != me.isopen) {
				me.isopen = false;
				// me.stopOverlay();
				qw("bank window closed");
			}
			return null;
		}
		if (isopen != me.isopen) {
			me.isopen = true;
			// me.startOverlay();
		}

		//=== find bank state ===
		var tab = me.readTabNr(img);
		var scrollbar = me.readScrollbar(img, me.state && me.state.scrollbar);

		//check if we are looking at a new screen
		var scrollchanged = (!(me.state.rawscrolltop == 0 && !scrollbar) && me.state.rawscrolltop != scrollbar.scrolltop);
		var tabchanged = me.state.tab != tab;
		var loadretry = false;
		if (scrollchanged) {
			me.state.lastScroll = Date.now();
		}
		if (tabchanged || scrollchanged) {
			me.state.firstscan = Date.now();
			me.state.scanretried = 0;
		}
		else if (me.state.scanretried < 2 && me.state.firstscan + (me.state.scanretried + 1) * 500 < Date.now()) {
			loadretry = true;
			me.state.scanretried++;
		}

		//update bank state with what we know
		me.state.tab = tab;
		me.state.scrollbar = scrollbar;
		me.state.rawscrolltop = (scrollbar && scrollbar.scrolltop) || 0;

		//check if the state changed enough to read the items again
		if (forceread || tabchanged || scrollchanged || loadretry || !me.state.allslotsvalid || !window.alt1) {
			var buffer = img.toData(me.pos.area.x, me.pos.area.y, me.pos.area.w, me.pos.area.h);
			qw(new Date().toLocaleTimeString(), "reading bank images");
			if (me.readInner(buffer, scrollbar, tab)) {
				me.readItems(buffer);
				calculateMats();
				changed = true;
			}
		}
		//scroll didnt change, add reads that needed this confirmation
		if (me.state && !tabchanged && !scrollchanged) {
			for (var a = hoverwaiting.length - 1; a >= 0; a--) {
				if (!me.tooltipIntersect(hoverwaiting[a].slot, me.tooltipState && me.tooltipState.area, 10)) {
					if (me.confirmItem(hoverwaiting[a].slot, img)) {
						hoverwaiting[a].slot.nameread = hoverwaiting[a].nameread;
						changed = true;
					}
					else {
						qw("bank changed");
					}
					hoverwaiting.splice(a, 1);
				}
			}
		}

		if (changed && trackCallback) { trackCallback(me.state); }
		// if (changed) { me.invalidateOverlay(); }
		return me.state;
	}

	this.readTabNr = function (img) {
		var x = 55;
		//TODO get exact bound width
		for (var tabnr = 0; tabnr * 48 + 48 < this.pos.area.w; tabnr++) {
			var pixel = img.toData(me.pos.area.x + 54 + 7 * tabnr, me.pos.area.y + 13, 1, 1);
			var sum = pixel.data[0] + pixel.data[1] + pixel.data[2];
			if (sum > 400) { return tabnr + 1; }
			if (sum < 200) { break }
		}
		return 0;
	}

	var isNumberCol = function (data, i) {
		var r =
			data[i] == 255 && data[i + 1] == 255 && data[i + 2] == 0 ||//yellow (1)
			data[i] == 255 && data[i + 1] == 255 && data[i + 2] == 255 ||//white (K)
			data[i] == 0 && data[i + 1] == 255 && data[i + 2] == 128 ||//green (M)
			data[i] == 255 && data[i + 1] == 203 && data[i + 2] == 5;//yellowish (tab seperator)

		//data[i] = data[i + 1] = data[i + 2] = data[i + 3] = 255;
		return r;
	}

	var readbuffer = function (img, slot, imgx, imgy, backx, backy) {
		var clone = img.toData(backx + imgx, backy + imgy, 36, 32);
		var data = clone.data;

				// create off-screen canvas element
				var canvas = document.createElement('canvas'),
				ctx = canvas.getContext('2d');
		
				canvas.width = 36;
				canvas.height = 32;
		
				// create imageData object
				var idata = ctx.createImageData(36, 32);
		
				// set our buffer as source
				idata.data.set(data);
		
				// update canvas with new data
				ctx.putImageData(idata, 0, 0);
				var dataUri = canvas.toDataURL(); // produces a PNG file
		
				console.log(dataUri);

		return clone;
	}

	this.tooltipIntersect = function (slot, ttarea, margin) {
		if (ttarea) {
			var hhit = ttarea.x - margin < slot.readinfo.x + slotsize && ttarea.x + ttarea.w + margin > slot.readinfo.x;
			var vhit = ttarea.y - margin < slot.readinfo.y + slotsize && ttarea.y + ttarea.h + margin > slot.readinfo.y;
			if (hhit && vhit) { return true; }
		}
		return false;
	}

	this.readItems = function (buffer) {
		qw("reading Items");
		qw("Columns: " + me.pos.columns);
		qw("Rows: " + me.state.rows.length);
        qw("Slot Size: " + slotsize);
        
        if (!window.alt1) {
            var c = document.getElementById("myCanvas");
            var ctx = c.getContext("2d");
            
            ctx.beginPath();
            ctx.strokeStyle = "red";
            ctx.rect(me.pos.inner.x, me.pos.inner.y, me.pos.inner.w, me.pos.inner.h);
            ctx.stroke();
        }

		readcount++;
		var allvalid = true;
		var hadempty = false;
		var bufref = new ImgRefData(buffer, new Rect(0, 0, buffer.width, buffer.height));
		for (var bankx = 0; bankx < me.pos.columns; bankx++) {
			var imgx = me.pos.inner.x - me.pos.area.x + bankx * (slotsize + 7) + 7; // Inner bank x - outer bank x + bankx which is the current column * size of each slot in the row
			for (var banky = 0; banky < me.state.rows.length; banky++) {
				var slot = me.state.slots[bankx + banky * me.pos.columns];
				var imgy = me.pos.inner.y - me.pos.area.y + me.state.rows[banky].y;
				slot.readinfo = { x: imgx, y: imgy, readnr: readcount };
				if (slot.isempty) { continue; }
				if (slot.imginfo && slot.imginfo.valid) {
					let itemName = compareMats(slot);

					console.log(itemName);

					continue;
				}

				//check if we hit a tooltip
				if (me.tooltipIntersect(slot, me.state.tooltip, 5)) {
					allvalid = false;
					continue;
				}

					// // create off-screen canvas element
					// var canvas = document.createElement('canvas'),
					// ctx = canvas.getContext('2d');
			
					// canvas.width = buffer.width;
					// canvas.height = buffer.height;
			
					// // create imageData object
					// var idata = ctx.createImageData(buffer.width, buffer.height);
			
					// // set our buffer as source
					// idata.data.set(buffer.data);
			
					// // update canvas with new data
					// ctx.putImageData(idata, 0, 0);
					// var dataUri = canvas.toDataURL(); // produces a PNG file
			
					// console.log(dataUri);

				var transbuf = readbuffer(bufref, slot, imgx, imgy, 0, 0);
				// // create off-screen canvas element
				// 	var canvas = document.createElement('canvas'),
				// 	ctx = canvas.getContext('2d');
			
				// 	canvas.width = 35;
				// 	canvas.height = 31;
			
				// 	// create imageData object
				// 	var idata = ctx.createImageData(36, 21);
			
				// 	// set our buffer as source
				// 	idata.data.set(transbuf.data);
			
				// 	// update canvas with new data
				// 	ctx.putImageData(idata, 0, 0);
				// 	var dataUri = canvas.toDataURL(); // produces a PNG file
			
				// 	console.log(dataUri);
																 
				slot.setBuffer(transbuf);
				
				// const canvas = document.getElementById('myCanvas');
				// const ctx = canvas.getContext('2d');

				// const diff = ctx.createImageData(36, 21);
				
				// let img = new Image();
				// img.src = imgData;
				// let imgToCompare = img.toBuffer();

				// var data = pixelmatch(imgToCompare.data, slot.buffer.data, null, 36, 32, {threshold: 0.1});

				// if (data < 100) {
				// 	console.log("Nosorog! Sculpture");
				// }
				// console.log(data);
				// ctx.putImageData(diff, 0, 0);


				let itemName = compareMats(slot);

				console.log(itemName);

				if (itemName == "Blank Slot") {
					break;
				}

				if (!slot.imginfo.valid) {
					if (!slot.imginfo.empty) { allvalid = false; }
					else { hadempty = true; }
				}
				
			
					var x = slot.readinfo.x + me.pos.area.x;
					var y = slot.readinfo.y + me.pos.area.y;
					var t = me.config.timers.overlay + 500;
					var backcolor = a1lib.mixcolor(255, 0, 0);
					//alt1.overLayRect(backcolor, imgx, imgy, 36, 32, 60000, 1);
					// ctx.beginPath();
					// ctx.rect(x, y, 36, 32);
					// ctx.stroke();
				// if (bankx == 0 && banky == 0)
				//  {
				// 	qw(x + " | " + y + " | " + imgx + " | " + imgy);
				// 	qw(me.pos.area.x + " | " + me.pos.area.y + " | " + slot.readinfo.x + " | " + slot.readinfo.y);
				//  }
			}
		}
		me.state.allslotsvalid = allvalid;
	}

	this.readScrollbar = function (img, old) {
		var bar = {
			raillength: me.pos.inner.h - 40,
			start: -1,
			end: -1,
			x: me.pos.inner.x + me.pos.inner.w - 10,
			y: me.pos.inner.y + 16
        };
        
        if (!window.alt1) {
            var c = document.getElementById("myCanvas");
            var ctx = c.getContext("2d");
            
            ctx.beginPath();
            ctx.strokeStyle = "red";
            ctx.rect(bar.x, bar.y, 2, bar.raillength);
            ctx.stroke();
        }

		var buffer = img.toData(bar.x, bar.y, 3, bar.raillength);

        // // create off-screen canvas element
		// var canvas = document.createElement('canvas'),
		// ctx = canvas.getContext('2d');

		// canvas.width = buffer.width;
		// canvas.height = buffer.height;

		// // create imageData object
		// var idata = ctx.createImageData(buffer.width, buffer.height);

		// // set our buffer as source
		// idata.data.set(buffer.data);

		// // update canvas with new data
		// ctx.putImageData(idata, 0, 0);
        // var dataUri = canvas.toDataURL(); // produces a PNG file
        // console.log(dataUri);

		//==== find bar imgs ====
		var isbar = function (y) {
			var i1 = 4 * 0 + 4 * buffer.width * y;
			var i2 = 4 * 2 + 4 * buffer.width * y;
			return coldiff(239, 181, 51, buffer.data[i1], buffer.data[i1 + 1], buffer.data[i1 + 2]) < 20
				&& coldiff(121, 83, 19, buffer.data[i2], buffer.data[i2 + 1], buffer.data[i2 + 2]) < 20;
		}
		var israil = function (y) {
			var i = 4 * 0 + 4 * buffer.width * y;
			return coldiff(14, 22, 26, buffer.data[i], buffer.data[i + 1], buffer.data[i + 2]) < 10;
		}

		var lastrail = true;
		for (var y = 0; y < bar.raillength; y++) {
			if (lastrail && isbar(y)) {
				bar.start = y;
				break;
			}
			lastrail = israil(y);
		}
		var lastbar = false;
		for (var y = 0; y < bar.raillength; y++) {
			if (lastbar && israil(y)) {
				bar.end = y;
				break;
			}
			lastbar = isbar(y);
		}
		if (lastbar) { bar.end = y; }

		//==== check results ===-
		if (bar.start == -1) {
			if (bar.end != -1 && old) { bar.start = bar.end - (old.end - old.start); }
			else if (israil(0) || israil(bar.raillength - 1)) { return old; }
			else { return false; }
		}
		if (bar.end == -1) {
			if (bar.start != -1 && old) { bar.end = bar.start + (old.end - old.start); }
			else if (israil(0) || israil(bar.raillength - 1)) { return old; }
			else { return false; }
		}

		//==== calc scroll ====
		bar.barlength = bar.end - bar.start;
		bar.barfrac = (bar.barlength + 1) / bar.raillength;//The +1 seems to approximate the actual result better
		bar.scrollfrac = (bar.raillength == bar.barlength ? 0 : bar.start / (bar.raillength - bar.barlength));
		bar.scrollheight = Math.round(me.pos.inner.h / bar.barfrac);
		bar.scrolltop = Math.round((bar.scrollheight - me.pos.inner.h) * bar.scrollfrac);
		return bar;
	}

	this.readInner = function (buffer, scrollbar, tab) {
		var tabspaces = [];//(tab == 0 ? findTabSpaces(buffer) : []);
		me.state.slots = [];
		me.state.tabspaces = tabspaces;
		me.state.rowoffset = -1;
		me.state.pxoffset = -1;
		me.state.tooltip = null;
		me.state.allslotsvalid = true;

		if (!me.state.tabs[tab]) {
			var tabname = (tab == 0 ? "all" : "tab " + tab);
			me.state.tabs[tab] = { name: tabname, rows: [], tabspaces: [], height: (scrollbar ? scrollbar.scrollheight : me.pos.inner.h) };
		}

		//==== find the y offset of the first row ====
		if (tabspaces.length != 0) {
			if (tabspaces[0].y - 6 - slotsize >= -5) { me.state.pxoffset = (tabspaces[0].y - 6 + 5) % slotsize - 5; }
			else { me.state.pxoffset = (tabspaces[0].y + 9); }
		}
		else if (!me.state.scrollbar) { me.state.pxoffset = 4; }
		else {
			var a = me.getRowOffset(buffer);
			if (a != null) {
                me.state.pxoffset = (a % slotsize) + 4;
            }
			else { me.message("Need at least one item with a stack amount in the screen to be able to read the icons"); return false; }
		}

		//==== check if we know the exact scroll offset ====
		if (tab != 0) { me.state.rowoffset = Math.round((me.state.rawscrolltop + me.state.pxoffset) / slotsize); }
		else if (!me.state.scrollbar) { me.state.rowoffset = 0; }
		else if (tabspaces.length != 0) {
			var ntabs = (tabspaces[0].y < me.state.pxoffset ? tabspaces[0].tabnr : tabspaces[0].tabnr - 1);
			me.state.rowoffset = Math.round((me.state.scrollbar.scrolltop - ntabs * 15) / slotsize);
		}
		else {
			me.message("Unknown rowoffset");
		}

		me.state.rows = [];
		me.state.slots = [];
		for (var rowy = me.state.pxoffset; rowy + slotsize < me.pos.inner.h + 5; rowy += slotsize) {
			//find any matching rows
			var matchrow = null;
			for (var a = 0; a < me.state.tabs[tab].rows.length; a++) {
				if (Math.abs(me.state.tabs[tab].rows[a].scrolly - rowy - me.state.rawscrolltop) <= me.config.maxrowcombinedist) {
					matchrow = me.state.tabs[tab].rows[a];
				}
			}

			//make and combine new row
			var tabrow = { y: rowy, scrolly: rowy + me.state.rawscrolltop, slots: [] };
			if (!matchrow) { me.state.tabs[tab].rows.push(tabrow); }
			me.state.rows.push(tabrow);
			for (var column = 0; column < me.pos.columns; column++) {
				var slot = matchrow ? matchrow.slots[column] : null;
				if (!slot) {
					var hasborder = false;
					if (tab != 0 && column == 0 && rowy + me.state.rawscrolltop < 10) { hasborder = true; }
					else if (tab == 0 && column == 0 && tabspaces.find(function (space) { return rowy - 30 < space.y && rowy > space.y; })) {
						hasborder = true;
					}
					slot = new ItemSlot(hasborder);
				}
				me.state.slots.push(slot);
				tabrow.slots[column] = slot;
			}

			//check if we have to skip a tabseperator for next row
			if (tabspaces.find(function (space) { return rowy + slotsize / 2 < space.y && rowy + slotsize / 2 * 3 > space.y + 15; })) {
				rowy += 15;
			}
		}

		//add tabspaces
		for (var a = 0; a < tabspaces.length; a++) {
			var tabmatch = false;
			for (var b = 0; b < me.state.tabs[tab].tabspaces.length; b++) {
				if (Math.abs(me.state.tabs[tab].tabspaces[b].scrolly - tabspaces[a].y - me.state.rawscrolltop) <= me.config.maxrowcombinedist) { tabmatch = true; break; }
			}
			if (!tabmatch) { me.state.tabs[tab].tabspaces.push({ y: tabspaces[a].y, scrolly: tabspaces[a].y + me.state.rawscrolltop, tabnr: tabspaces[a].tabnr }); }
		}

		//find possible tooltips
		me.state.tooltip = PC.TooltipReader.searchBuffer(buffer);
		if (me.state.tooltip) {
			var tooltiprect = me.state.tooltip;
			var bordersize = 5;
			tooltiprect.x -= bordersize; tooltiprect.y -= bordersize; tooltiprect.w += 2 * bordersize; tooltiprect.h += 2 * bordersize;
		}
		return true;
	}

	me.confirmItem = function (slot, img) {
		var readinfo = slot.readinfo;
		if (readinfo.readnr != readcount) {
			qw("couldn't confirm slot as it was read in the last read.");
			return true;//TODO handle this?
		}
		if (!slot.imginfo) {
			qw("tried to confirm slot without imginfo");
			return false;
		}
		var buf = readbuffer(img, slot, readinfo.x, readinfo.y, me.pos.area.x, me.pos.area.y);
		var imginfo = getImageInfo(buf, new Rect(0, 9, 32, 32 - 9));
		var r = imginfo.maskhash == slot.imginfo.maskhash;
		if (!r) {
			slot.reset();
			slot.setBuffer(buf);
		}
		return r;
	}

	me.getRowOffset = function (buffer) {
		for (var bankx = 0; bankx < 10; bankx++) {
			var previousyellow = 0;
			for (var imgy = 0; imgy < me.pos.inner.h - 10; imgy++) {
				var yellow = 0;
				for (var imgdx = 0; imgdx < 5; imgdx++) {
					var i = 4 * (me.pos.inner.x - me.pos.area.x + bankx * 43 + 10 + imgdx) + 4 * buffer.width * (imgy + me.pos.inner.y - me.pos.area.y);
					if (isNumberCol(buffer.data, i)) { yellow++; }
				}

				if (yellow != 0 || previousyellow == 0) {
					previousyellow = yellow;
					continue;
				}
				previousyellow = yellow;

				var amount = readAmount(buffer, me.pos.inner.x - me.pos.area.x + bankx * 43 + 10, me.pos.inner.y - me.pos.area.y + imgy - 8);
				if (amount) { return imgy - 8 - 5; }
			}
		}
		return null;
	}
	var findTabSpaces = function (buffer) {
		var locs = a1lib.findsubimg(buffer, MaterialsReader.tabsep, null, 8, me.pos.inner.y - me.pos.area.y, 7, me.pos.inner.h);
		var r = [];
		for (var a = 0; a < locs.length; a++) {
			var n = readAmount(buffer, locs[a].x + 21, locs[a].y);
			r.push({ y: locs[a].y - (me.pos.inner.y - me.pos.area.y) + 1, tabnr: +n - 1 });
		}
		return r;
	}

	me.allTabSlots = function (tab) {
		var slots = [];
		if (!tab) {
			return slots;
		}
		for (var b = 0; b < tab.rows.length; b++) {
			var row = tab.rows[b];
			for (var c = 0; c < row.slots.length; c++) {
				slots.push(row.slots[c]);
			}
		}
		return slots;
	}

	me.getSlotsValue = function (slots) {
		var mintot = 0;
		var maxtot = 0;

		for (var a = 0; a < slots.length; a++) {
			var slot = slots[a];
			var price = slots[a].price;
			if (price) {
				var min = 0;
				var max = 0;
				if (price.userconfirmed) {
					min = max = price.selected.value;
				} else if (price.options.length != 0) {
					min = Infinity;
					for (var b = 0; b < price.options.length; b++) {
						max = Math.max(max, price.options[b].value);
						min = Math.min(min, price.options[b].value);
					}
				}
				mintot += min * slot.amount;
				maxtot += max * slot.amount;
			}
		}

		return { min: mintot, max: maxtot, avg: (maxtot + mintot) / 2, maxdif: (maxtot - mintot) / 2 };
	}

	//==========================================================================================
	//======================================== overlays ========================================
	//==========================================================================================
	// me.startOverlay = function () {
	// 	me.stopOverlay();
	// 	me.overlayState = {
	// 		timer: 0,
	// 		lastOverlay: 0,
	// 		invalidated: true
	// 	};
	// 	// me.drawOverlay();
	// }
	// me.stopOverlay = function () {
	// 	if (window.alt1) {
	// 		alt1.overLayClearGroup("missingslots");
	// 		alt1.overLayContinueGroup("missingslots");
	// 		alt1.overLayClearGroup("bankscroll");
	// 		alt1.overLayContinueGroup("bankscroll");
	// 	}
	// 	if (me.overlayState) {
	// 		clearTimeout(me.overlayState.timer);
	// 	}
	// 	me.overlayState = null;
	// }
	// me.invalidateOverlay = function () {
	// 	if (me.overlayState) {
	// 		me.overlayState.invalidated = true;
	// 		me.drawOverlay();
	// 	}
	// }
	// me.drawOverlay = function () {
	// 	if (!window.alt1) { return; }
	// 	if (!me.pos) { return; }
	// 	if (!me.overlayState) { return; }
	// 	//fix timing stuff

	// 	var scrolltimeout = me.state.lastScroll + me.config.overlay.scrolldelay - Date.now();
	// 	if (scrolltimeout > 0) {
	// 		clearTimeout(me.overlayState.timer);
	// 		me.overlayState.timer = setTimeout(me.drawOverlay, scrolltimeout);
	// 		alt1.overLayClearGroup("missingslots");
	// 		alt1.overLayRefreshGroup("missingslots");
	// 		me.overlayState.invalidated = true;
	// 		return;
	// 	}
	// 	if (!me.overlayState.invalidated && me.overlayState.lastOverlay + me.config.timers.overlay * 0.7 > Date.now()) {
	// 		return;
	// 	}
	// 	clearTimeout(me.overlayState.timer);
	// 	me.overlayState.timer = setTimeout(me.drawOverlay, me.config.timers.overlay);
	// 	me.overlayState.lastOverlay = Date.now();

	// 	me.drawScrollOverlay();

	// 	//draw stuff
	// 	alt1.overLaySetGroup("missingslots");
	// 	alt1.overLayFreezeGroup("missingslots");
	// 	alt1.overLayClearGroup("missingslots");
	// 	for (var a = 0; a < me.state.rows.length; a++) {
	// 		var row = me.state.rows[a];
	// 		var y = me.pos.inner.y + row.y;
	// 		for (var b = 0; b < row.slots.length; b++) {
	// 			var slot = row.slots[b];
	// 			var x = me.pos.inner.x + slotsize * b;
	// 			me.drawItemOverlayInner(slot, x, y);
	// 		}
	// 	}
	// 	var tab = me.state.tabs[me.state.tab];
	// 	var tabvalue = me.getSlotsValue(me.allTabSlots(tab));
	// 	var valuestr = smallu(tabvalue.avg, true) + (tabvalue.maxdif != 0 ? " \u00B1 " + smallu(tabvalue.maxdif, true) : "");
	// 	alt1.overLayText("Tab: " + valuestr, a1lib.mixcolor(255, 203, 5), 12, me.pos.area.x + 6, me.pos.area.y + 5, 10 * 1000);

	// 	//PC.TooltipReader.drawOverlay(me.tooltipState,true);
	// 	alt1.overLayRefreshGroup("missingslots");
	// 	alt1.overLaySetGroup("");
	// }
	// me.drawScrollOverlay = function () {
	// 	if (!window.alt1) { return; }
	// 	alt1.overLaySetGroup("bankscroll");
	// 	alt1.overLayFreezeGroup("bankscroll");
	// 	alt1.overLayClearGroup("bankscroll");
	// 	var scrollbar = me.state.scrollbar;
	// 	if (!scrollbar) {
	// 		alt1.overLayRefreshGroup("bankscroll");
	// 		return;
	// 	}
	// 	var tab = me.state.tabs[me.state.tab];
	// 	if (!tab) { return; }
	// 	var rows = tab.rows.concat(tab.tabspaces).sort(function (a, b) { return a.scrolly - b.scrolly; });

	// 	var drawgap = function (start, end, col) {
	// 		alt1.overLayRect(col, scrollbar.x, Math.round(scrollbar.y + start / scrollh * scrollbar.raillength), 5, Math.round((end - start) / scrollh * scrollbar.raillength), t, 4);
	// 	}

	// 	var t = me.config.timers.overlay + 500;
	// 	var scrollh = scrollbar.scrollheight;
	// 	var lasty = 0;
	// 	for (var a = 0; a < rows.length; a++) {
	// 		var row = rows[a];
	// 		if (row.scrolly > lasty + 0.5 * slotsize) {
	// 			drawgap(lasty, row.scrolly, a1lib.mixcolor(255, 0, 0));
	// 		}
	// 		var pricelessitem = false;
	// 		var missingitem = false;
	// 		if (row.slots) {
	// 			for (var b in row.slots) {
	// 				var slot = row.slots[b];
	// 				if ((!slot.price || !slot.price.selected) && !slot.isempty && slot.amount > 0) {
	// 					if (slot.price && slot.price.nameattempts.length != 0 && !slot.price.selected && !slot.loading) {
	// 						pricelessitem = true;;
	// 					} else {
	// 						missingitem = true;
	// 					}
	// 				}
	// 			}
	// 		}
	// 		if (missingitem) {
	// 			drawgap(row.scrolly, row.scrolly + slotsize, a1lib.mixcolor(255, 100, 0));
	// 		}
	// 		else if (pricelessitem) {
	// 			drawgap(row.scrolly, row.scrolly + slotsize, a1lib.mixcolor(255, 255, 0));
	// 		}

	// 		lasty = row.scrolly + slotsize;
	// 	}
	// 	if (scrollbar.scrollheight > lasty + 0.5 * slotsize) {
	// 		drawgap(lasty, scrollbar.scrollheight, a1lib.mixcolor(255, 0, 0));
	// 	}
	// 	//PC.TooltipReader.drawOverlay(me.tooltipState, true);
	// 	alt1.overLayRefreshGroup("bankscroll");
	// 	alt1.overLaySetGroup("");
	// }

	// me.drawItemOverlay = function (slot) {
	// 	alt1.overLaySetGroup("missingslots");
	// 	me.drawItemOverlayInner(slot);
	// 	alt1.overLayRefreshGroup("missingslots");
	// }
	// me.drawItemOverlayInner = function (slot) {
	// 	if (!slot.imginfo || !slot.imginfo.valid || slot.readinfo.readnr != readcount) { return; }
	// 	var x = slot.readinfo.x + me.pos.area.x;
	// 	var y = slot.readinfo.y + me.pos.area.y;
	// 	var t = me.config.timers.overlay + 500;

	// 	var tx = x
	// 	var ty = y + 24;
	// 	var backcolor = 0;
	// 	if ((slot.price && slot.price.selected) || slot.amount <= 0) {
	// 		backcolor = a1lib.mixcolor(1, 0, 0);
	// 	} else if (slot.price && slot.price.nameattempts.length != 0 && !slot.price.selected && !slot.loading) {
	// 		backcolor = a1lib.mixcolor(255, 128, 0);
	// 	} else {
	// 		backcolor = a1lib.mixcolor(255, 0, 0);
	// 	}
	// 	if (backcolor != 0) {
	// 		alt1.overLayRect(backcolor, tx, ty, 32, 13, t, 10);
	// 	}

	// 	if (slot.price && slot.price.selected) {
	// 		alt1.overLayText(smallu(slot.price.selected.value * slot.amount), a1lib.mixcolor(255, 255, 255), 8, tx, ty, t);
	// 	}

	// 	if (!me.config.overlay.notext) {
	// 		if (slot.item) { alt1.overLayText(slot.item.name.slice(0, 4), a1lib.mixcolor(255, 255, 255), 12, x, y + 8, t); }
	// 		else { alt1.overLayText(slot.matches.length + "", a1lib.mixcolor(255, 255, 255), 12, x, y + 8, t); }
	// 	}
	// }
	//==========================================================================================
	//======================================== tracking ========================================
	//==========================================================================================
	this.track = function (callback) {
		if (!me.pos) { return; }
		me.stopTrack();
		trackInterval = setInterval(trackTick, me.config.timers.scrollcheck);
		trackTooltipInterval = setInterval(tooltipTick, me.config.timers.tooltipMeta);
		trackCallback = callback;
		me.tracking = true;
	}
	this.stopTrack = function () {
		if (trackInterval) { clearInterval(trackInterval); }
		if (trackTooltipInterval) { clearInterval(trackTooltipInterval); }
		trackInterval = null;
		trackTooltipInterval = null;
		me.tracking = false;
	}
	var trackTick = function () {
		me.read();
	}
	var tooltipTick = function () {
		var mp = a1lib.mousePosition();

		var inbank = (mp.x >= me.pos.inner.x && mp.x <= me.pos.inner.x + me.pos.inner.w && mp.y >= me.pos.inner.y && mp.y <= me.pos.inner.y + me.pos.inner.h);
		if (window.alt1 && (document.hasFocus() || alt1.rsActive) && inbank && !me.tooltipReader.tracking) {
			me.tooltipReader.track(tooltipRead, me.config.timers.tooltip);
		}
		if (!inbank && me.tooltipReader.tracking) {
			me.tooltipReader.stopTrack();
			me.tooltipState = null;
			//PC.TooltipReader.drawOverlay(null);
			//me.drawOverlay();
		}
	}
	var tooltipRead = function (tooltip) {
		if (!tooltip) {
			if (me.tooltipState != null) {
				me.tooltipState = null;
				//PC.TooltipReader.drawOverlay(null);
				//me.drawOverlay();
				qw("tooltip cleared");
			}
			return;
		}
		var changed = true;
		if (me.tooltipState) {
			var a1 = tooltip.area, a2 = me.tooltipState.area;
			var changed = a1.x != a2.x || a1.y != a2.y || a1.w != a2.w || a1.h != a2.h;
		}
		me.tooltipState = tooltip;
		if (changed) {
			//PC.TooltipReader.drawOverlay(me.tooltipState);
			//me.drawOverlay();
		}
		var rely = tooltip.mousepos.y - me.pos.inner.y;
		var relx = tooltip.mousepos.x - me.pos.inner.x - 5;
		if (relx < 0 || relx >= me.pos.columns * slotsize) { return; }
		var colnr = Math.floor(relx / slotsize);
		var colx = relx % slotsize;
		if (colx < 5 || colx >= iconsize - 5) { return; }
		for (var a = 0; a < me.state.rows.length; a++) {
			var row = me.state.rows[a];
			if (rely >= row.y + 9 && rely < row.y + iconsize - 5) {
				var slot = row.slots[colnr];
				if (slot) {
					var name = tooltip.readBankItem();
					if (row.slots[colnr].nameread != name) {
						hoverwaiting.push({ slot: row.slots[colnr], nameread: name });
						// if (window.alt1) {
						// 	me.drawItemOverlay(slot);
						// }
						break;
					}
				}
			}
		}
	}

	var ItemSlot = function (hasborder) {
		this.hasborder = hasborder;
		this.readinfo = null;
		this._orderindex = 0;//Trying to prevent trowing bricks
		this.reset();
	}
	ItemSlot.prototype.reset = function () {
		this.amount = -1;
		this.buffer = null;
		this.cachedimg = null;
		this.imginfo = null;
		this.nameread = null;
		this.price = null;
		this.readattempts = 0;
		this.isempty = false;
	}
	ItemSlot.prototype.setBuffer = function (buffer) {
		this.imginfo = getImageInfo(buffer, new Rect(0, 0, 36, 32));
		this.readattempts++;
		if (!this.imginfo.valid) {
			if (this.readattempts >= 3) {
				this.isempty = true;
			}
		}
		else {
			var amount = readAmount(buffer, 3, 1);
			this.amount = (amount == -1 ? 0 : amount || 1);
			this.buffer = buffer;
		}
	}

	var getImageInfo = function (buf, rect) {
		if (!rect) { rect = new Rect(0, 0, buf.width, buf.height); }
		//=== alpha mask+total hash ===
		var mask = fillarray(Math.ceil(rect.width * rect.height / 8), 0);
		var total = 0;
		var imghash = fillarray(4, 0);
		var maskhash = fillarray(4, 0);

		var index = 0;
		var chr = 0;
		for (var x = rect.x; x < rect.x + rect.width; x++) {
			for (var y = rect.y; y < rect.y + rect.height; y++) {
				var pi = 4 * x + 4 * buf.width * y;
				var hi = (x - rect.x) + rect.width * (y - rect.y);
				if (buf.data[pi + 3] != 0) {
					mask[Math.floor(hi / 8)] += 1 << (hi % 8);
					total++;
				}
				var pixel = (buf.data[pi] << 24) + (buf.data[pi + 1] << 16) + (buf.data[pi + 2] << 8) + (buf.data[pi + 3]);
				imghash[hi % imghash.length] = (((imghash[hi % imghash.length] << 5) - imghash[hi % imghash.length]) + pixel) | 0;
			}
		}
		for (var a = 0; a < mask.length; a++) {
			maskhash[a % maskhash.length] = (((maskhash[a % maskhash.length] << 5) - maskhash[a % maskhash.length]) + mask[a]) | 0;
		}

		//=== color data ===
		var ncols = 6;
		var nrows = 4;
		var undersampled = buf.underSample(ncols, nrows, rect, 4);
		var coldata = [];
		var maincols = [0, 0, 0, 0];
		for (var a = 0; a < ncols * nrows; a++) {
			coldata[a * 4 + 0] = undersampled.data[a * 4 + 0];
			coldata[a * 4 + 1] = undersampled.data[a * 4 + 1];
			coldata[a * 4 + 2] = undersampled.data[a * 4 + 2];
			coldata[a * 4 + 3] = undersampled.data[a * 4 + 3];
			maincols[0] += undersampled.data[a * 4 + 0];
			maincols[1] += undersampled.data[a * 4 + 1];
			maincols[2] += undersampled.data[a * 4 + 2];
			maincols[3] += undersampled.data[a * 4 + 3];
		}
		maincols[0] = Math.round(maincols[0] / ncols / nrows);
		maincols[1] = Math.round(maincols[1] / ncols / nrows);
		maincols[2] = Math.round(maincols[2] / ncols / nrows);
		maincols[3] = Math.round(maincols[3] / ncols / nrows);

		var blackcorner = buf.getPixelInt(rect.x, rect.y) == a1lib.mixcolor(0, 0, 0, 255)
			|| buf.getPixelInt(rect.x + rect.width - 1, rect.y) == a1lib.mixcolor(0, 0, 0, 255)
			|| buf.getPixelInt(rect.x + rect.width - 1, rect.y + rect.height - 1) == a1lib.mixcolor(0, 0, 0, 255)
			|| buf.getPixelInt(rect.x, rect.y + rect.height - 1) == a1lib.mixcolor(0, 0, 0, 255);
		if (blackcorner) { qw("blackcorner"); }


		var filled = total / rect.width / rect.height;
		var empty = filled < 0.05;
		var valid = !empty && filled <= 1 && !blackcorner;

		return {
			coldata: bytesToHex(coldata, 1),
			maincols: bytesToHex(maincols, 1),
			mask: bytesToHex(mask, 1),
			maskhash: bytesToHex(maskhash, 4),
			imghash: bytesToHex(imghash, 4),
			filled: filled,
			valid: valid,
			empty: empty
		};
	}

	//damn js sucks with binary operations, hope the compiler can save this a bit
	var bytesToHex = function (bytes, bytesperindex) {
		return bytes.map(function (byte) {
			var r = "";
			for (var a = (bytesperindex - 1) * 8; a >= 0; a -= 8) {
				var d = (byte >> a) & 0xff;
				if (d < 16) { r += "0"; }
				r += d.toString(16);
			}
			return r;
		}).join("");
	}

	var readAmount = function (buffer, ox, oy) {
		var str = "";
		var dx = 0;
		var anymatch = true;

		
		// // create off-screen canvas element
		// var canvas = document.createElement('canvas'),
		// ctx = canvas.getContext('2d');

		// canvas.width = buffer.width;
		// canvas.height = buffer.height;

		// // create imageData object
		// var idata = ctx.createImageData(buffer.width, buffer.height);

		// // set our buffer as source
		// idata.data.set(buffer.data);

		// // update canvas with new data
		// ctx.putImageData(idata, 0, 0);
		// var dataUri = canvas.toDataURL(); // produces a PNG file

		// console.log(dataUri);
		// console.log(buffer.data.toString());

		while (anymatch && dx < slotsize) {
			anymatch = false;
			for (var a = 0; a < MaterialsReader.itemnumbers.buffers.length; a++) {
				var buf = MaterialsReader.itemnumbers.buffers[a];
				var match = true;

						// create off-screen canvas element
		// var canvas = document.createElement('canvas'),
		// ctx = canvas.getContext('2d');

		// canvas.width = buf.width;
		// canvas.height = buf.height;

		// // create imageData object
		// var idata = ctx.createImageData(buf.width, buf.height);

		// // set our buffer as source
		// idata.data.set(buf.data);

		// // update canvas with new data
		// ctx.putImageData(idata, 0, 0);
		// var dataUri = canvas.toDataURL(); // produces a PNG file

		// console.log(dataUri);
		// console.log(buffer.data.toString());

				for (var x = 0; x < buf.width; x++) {
					if (ox + dx + x >= buffer.width && x > 2) {
						//guess cut off chars that have at least 2 columns already
						continue;
					}
					for (var y = 0; y < buf.height; y++) {
						if (buf.data[4 * x + 4 * buf.width * y] != 255) { continue; }
						var i = 4 * (ox + dx + x) + 4 * buffer.width * (oy + y);
						if (isNumberCol(buffer.data, i)) { continue; }
						match = false;
						break;
					}
					if (!match) { break; }
				}
				if (!match) { continue; }
				str += "0123456789KM"[a];
				dx += buf.width;
				anymatch = true;
				break;
			}
		}
		var m;
		var amount = 0;
		if (m = str.match(/^(\d+)$/)) { amount = +m[1]; }
		if (m = str.match(/^(\d+)K$/)) { amount = m[1] * 1000; }
		if (m = str.match(/^(\d+)M$/)) { amount = m[1] * 1000 * 1000; }
		return amount;
	}
}
