var ancho_pagina = jQuery(window).width();

jQuery(window).resize(function(){
    ancho_pagina = jQuery(window).width();
});

! function(u) {
    var m, p, f, o, e, n, l, s = "",
        c = 767,
        i = [],
        v = [],
        d = !1,
        t = !1,
        a = [],
        r = Number(localStorage.getItem("latitude")),
        h = Number(localStorage.getItem("longitude")),
        b = !1;
    (s = s || {}).fn = {
        init: function() {
            s.fn.header(),
            s.fn.menuMobile(),
            s.fn.slider(),
            s.fn.imagenesFondo(),
            s.fn.map(),
            s.fn.galerias(),
            s.fn.modelos(),
            s.fn.filtersCaracteristicas(),
            s.fn.globalEvents(),
            s.fn.formsValidation(),
            s.fn.goTo(),
            s.fn.share(),
            s.fn.search(),
            s.fn.escoger(),
            s.fn.comparador(),
            s.fn.noticiasList(),
            s.fn.cotizar(),
            s.fn.verEspecificaciones(),
             s.fn.llamado(),
             s.fn.eventos(),
             s.fn.tripticoHome(),
             s.fn.financiamiento(),
             s.fn.imprimir()
        },
        menuMobile: function() {
            if (u(window).width() <= c) {
				u('<div class="submenu-mobile"><ul></ul></div>').appendTo(".navbar-collapse"),
				u(".submenu-mobile").prepend('<div class="title-mobile"><h4></h4></div>'),
				u("header nav li.dropdown").on("click", function() {
					u(".submenu-mobile .title-mobile h4").html(""),
					u(".submenu-mobile ul").html("");
                    var e = u(this).find(".dropdown-menu").html(),
                        t = u(this).find("> a").text();
                    u(".submenu-mobile .title-mobile h4").append(t),
                    u(".submenu-mobile ul").append(e),
                    setTimeout(function() {
                        u(".submenu-mobile").addClass("visible")
                    }, 50),
                    u(".title-mobile").on("click", function() {
                        u(".submenu-mobile").removeClass("visible")
                    })
                })
            }
        },
        header: function() {
            30 <= u(document).scrollTop() ? (u("header.header").addClass("transform"), u(".bloque-search.open").addClass("transform"), u(".bloque-comparador.open").addClass("transform"), u(".bloque-especificaciones.open").addClass("transform")) : (u("header.header").removeClass("transform"), u(".bloque-search.open").removeClass("transform"), u(".bloque-comparador.open").removeClass("transform"), u(".bloque-especificaciones.open").removeClass("transform")), u(".dropdown-menu li.subnivel").hover(function() {
                u('<div class="espacio-activo"></div>').appendTo(this)
            }, function() {
                u(".espacio-activo").remove()
            })

            jQuery(".cerrar-layer").click(function(e)
            {
                e.preventDefault();
                jQuery(".trama").fadeOut("slow");
            })
            jQuery(".cerrar-layer-video").click(function(e)
            {
                e.preventDefault();
                jQuery(".trama-vido").fadeOut("slow",function(){
                    jQuery(".cuerpo-layer-video").html('');
                });

            })

            jQuery(".previo-video").click(function(e)
            {
                e.preventDefault();
                var video_id = jQuery(this).data("video");
                if(ancho_pagina < 768)
                {
                    var url_video = 'https://www.youtube.com/watch?v='+video_id;
                    window.location.href = url_video;
                }else{
                    jQuery(".cuerpo-layer-video").html('<iframe width="560" height="315" src="https://www.youtube.com/embed/'+video_id+'" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>');
                    jQuery(".seccion-bloque-video .trama-vido").fadeIn("slow");
                }

            })

            jQuery(".link-open-video").click(function(e)
            {
                e.preventDefault();
                var video_id = jQuery(this).data("video");
                var indice = jQuery(".link-open-video").index(this);
                var trama_video = jQuery("#detalle-modelo-renovado .trama-vido, .bloque-boxes .trama-vido").eq(indice);

                if(ancho_pagina < 768)
                {
                    var url_video = 'https://www.youtube.com/watch?v='+video_id;
                    window.location.href = url_video;
                }else{
                    trama_video.find(".cuerpo-layer-video").html('<iframe width="560" height="315" src="https://www.youtube.com/embed/'+video_id+'" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>');
                    trama_video.fadeIn("slow");
                }

            })

        },
        tripticoHome: function() {
            u(".bloque-triptico-home > div").hover(function() {
                u(this).find("ul li:last-child").addClass("background-white")
            }, function() {
                u(this).find("ul li:last-child").removeClass("background-white")
            })
        },
        llamado: function() {
            u(".bloque-llamado select").selectpicker()
        },
        eventos: function() {
            u(".box-inscribete .form-actions button").addClass("link-red-arrow"), u(".bloque-evento-interno .container-form .form-actions button").addClass("link-red-arrow"), u(".btn-inscribete").on("click", function() {
                u(this).parent().parent().find(".box-inscribete").addClass("open")
            }), u(".box-inscribete .close").on("click", function() {
                u(this).parent().removeClass("open")
            })
        },
        cotizar: function() {
            u(".cotizar").click(function() {
                var e = u("#selector-modelo-cotizar").val();
                if("0" != e && null != e )
                {
                    location.href = e;
                }
            })
        },
        imprimir: function() {
            u(".bloque-promociones .centros-lubricacion .box-icon .print").click(function() {
                u(".centros-lubricacion .img-box").removeAttr("id"), u(this).parents(".col-md-4").find(".img-box").attr("id", "selected-print"), setTimeout(function() {
                    var e = document.getElementById("selected-print"),
                        t = window.open("", "_blank");
                    t.document.write(e.innerHTML), t.document.close(), t.print(), t.close()
                }, 300)
            })
        },
        financiamiento: function() {

            u(".bloque-disena-financiamiento .selectores select").selectpicker(),
            u("#filter-inicial").is(":visible") && (u("#filter-inicial").slider({
                min: 0,
                max: 30,
                val: 0,
                slide: function(e, t) {
                    u("#filter-inicial span.ui-slider-handle").html('<span class="number">' + (t.value + 10) + "%</span>")
                },
                create: function(e, t) {
                    u("#filter-inicial").append('<ul class="steps"></ul>');
                    for (var o = 0; o < 2; o++) 0 == o ? u("<li><span>10%</span></li>").appendTo("#filter-inicial .steps") : u("<li><span>40%</span></li>").appendTo("#filter-inicial .steps");
                    u("#filter-inicial .steps li").css({
                        width: "100%"
                    })
                },
                change: function(e, t) {
                    u("#filter-version").change()
                }
            }), u("#filter-meses").slider({
                min: 0,
                max: 12,
                val: 0,
                slide: function(e, t) {
                    u("#filter-meses span.ui-slider-handle").html('<span class="number">' + (t.value + 24) + "</span>"), u(".slider-filter4 .valor").html(t.value + 24 + " meses")
                },
                create: function(e, t) {
                    u("#filter-meses").append('<ul class="steps"></ul>');
                    for (var o = 0; o < 2; o++) 0 == o ? u("<li><span>24</span></li>").appendTo("#filter-meses .steps") : u("<li><span>36</span></li>").appendTo("#filter-meses .steps");
                    u("#filter-meses .steps li").css({
                        width: "100%"
                    })
                },
                change: function(e, t) {
                    u("#filter-version").change()
                }
            }), u("#filter-final").slider({
                min: 0,
                max: 40,
                val: 0,
                slide: function(e, t) {
                    u("#filter-final span.ui-slider-handle").html('<span class="number">' + (t.value + 10) + "%</span>")
                },
                create: function(e, t) {
                    u("#filter-final").append('<ul class="steps"></ul>');
                    for (var o = 0; o < 2; o++) 0 == o ? u("<li><span>10%</span></li>").appendTo("#filter-final .steps") : u("<li><span>50%</span></li>").appendTo("#filter-final .steps");
                    u("#filter-final .steps li").css({
                        width: "100%"
                    })
                },
                change: function(e, t) {
                    u("#filter-version").change()
                }
            }))
        },
        escoger: function() {
            // var contadorli = jQuery("#filter-capacidad ul li").length ;
            // var anchili =  100 / (contadorli - 1);
            // u("#filter-capacidad ul li").css({
            //     width: anchili+"%"
            // })


            u(".bloque-escoger .filtros select").selectpicker(),
            u("#filter-asientos").is(":visible") && (
                u("#filter-asientos").slider({
                val: 3,
                min: 3,
                max: 8,
                slide: function(e, t) {},
                create: function(e, t) {
                    u("#filter-asientos").append('<ul class="steps"></ul>');
                    for (var o = 0; o < 6; o++) 0 == o ? u("<li><span>Todos</span></li>").appendTo("#filter-asientos .steps") : 5 == o ? u("<li><span>" + (o + 3) + "+</span></li>").appendTo("#filter-asientos .steps") : u("<li><span>" + (o + 3) + "</span></li>").appendTo("#filter-asientos .steps");
                    u("#filter-asientos .steps li").css({
                        width: "20%"
                    })
                }
                })

                // u("#filter-capacidad").slider({
                //     min: 0,
                //     max: contadorli - 1,
                //     val: 0,
                //   slide: function(e, t) {},
                //     create: function(e, t) {
                //         u("#filter-capacidad").append('<ul class="steps"></ul>');
                //         for (var o = 0; o < 6; o++) 0 == o ? u("<li><span>Todos</span></li>").appendTo("#filter-capacidad .steps") : u("<li><span>" + o + "k</span></li>").appendTo("#filter-capacidad .steps");
                //         u("#filter-capacidad .steps li").css({
                //             width: "20%"
                //         })
                //     }
                // })
            ),

            u("#btn-comparar-especificacion").append('<span class="number">0</span>'),
            u(".btn-comparar").on("click", function() {
                n = this, s.fn.seleccionarComparar(n)
            }),

            u("#modelo1").on("change", function() {
                if (0 == t) {
                    var e = u(this).val();
                    u.ajax({
                        type: "POST",
                        url: "/traer/versiones",
                        data: {
                            nid: e
                        },
                        success: function(e) {
                            u("#tipomodelo1").html(e), u("#tipomodelo1").selectpicker("refresh"), u("#tipomodelo1").val(u("#tipomodelo1 option:eq(1)").val()).trigger("change"), null != u("#modelo1").val() && s.fn.compararModelos()
                        }
                    })
                }
            }),

            u("#modelo2").on("change", function() {
                if (0 == t) {
                    var e = u(this).val();
                    u.ajax({
                        type: "POST",
                        url: "/traer/versiones",
                        data: {
                            nid: e
                        },
                        success: function(e) {
                            u("#tipomodelo2").html(e), u("#tipomodelo2").selectpicker("refresh"), u("#tipomodelo2").val(u("#tipomodelo2 option:eq(1)").val()).trigger("change"), null != u("#modelo2").val() && s.fn.compararModelos()
                        }
                    })
                }
            }),

            u("#modelo3").on("change", function() {
                if (0 == t) {
                    var e = u(this).val();
                    u.ajax({
                        type: "POST",
                        url: "/traer/versiones",
                        data: {
                            nid: e
                        },
                        success: function(e) {
                            u("#tipomodelo3").html(e), u("#tipomodelo3").selectpicker("refresh"), u("#tipomodelo3").val(u("#tipomodelo3 option:eq(1)").val()).trigger("change"), null != u("#modelo3").val() && s.fn.compararModelos()
                        }
                    })
                }
            }),

            u("#filter-combustibles,#filter-categorias,#filter-capacidad-motor").on("change", function() {
                if (0 == d) {
                    var e = u("#filter-capacidad-motor").val(),
                        t = u("#filter-combustibles").val(),
                        o = u("#filter-categorias").val();
                    if (3 == u("#filter-asientos").slider("value")) var i = 0;
                    else i = u("#filter-asientos").slider("value");
                    u.ajax({
                        type: "GET",
                        url: "/filtro/comparador",
                        data: {
                            categoria: o,
                            combustible: t,
                            asientos: i,
                            motor: e
                        },
                        success: function(e) {
                            u(".resultados-filtros").html(e), s.fn.pintarComparar(), u(".btn-comparar").on("click", function() {
                                n = this, s.fn.seleccionarComparar(n)
                            })
                        }
                    })
                }
            });
            // var capacidadmotor = 0;

            // u("#filter-capacidad").on("slidechange", function( event, ui) {
            //    capacidadmotor = jQuery("#filter-capacidad ul li").eq(ui.value).data("motor");
            // })


            u("#filter-asientos, #filter-capacidad").on("slidechange", function(e, t) {
                if (0 == d) {
                    var e = u("#filter-capacidad-motor").val(),
                        i = u("#filter-combustibles").val(),
                        a = u("#filter-categorias").val();
                    if (3 == u("#filter-asientos").slider("value"))
                        var r = 0;
                    else r = u("#filter-asientos").slider("value");
                    u.ajax({
                        type: "GET",
                        url: "/filtro/comparador",
                        data: {
                            categoria: a,
                            combustible: i,
                            asientos: r,
                            motor: e
                        },
                        success: function(e) {
                            u(".resultados-filtros").html(e), s.fn.pintarComparar(), u(".btn-comparar").on("click", function() {
                                n = this, s.fn.seleccionarComparar(n)
                            })
                        }
                    })
                }
            }),

            u("#btn-reiniciar-seccion").on("click", function() {
                1 == (d = !0) && u.ajax({
                    type: "GET",
                    url: "/filtro/comparador",
                    data: {
                        general: 1
                    },
                    success: function(e) {
                        u("#filter-categorias").val("0").trigger("change"),
                        u("#filter-combustibles").val("0").trigger("change"),
                        u("#filter-asientos").slider("value", 0),
                        u("#filter-capacidad-motor").val("0").trigger("change"),
                        u(".resultados-filtros").html(e), s.fn.reiniciarSeleccionComparar(), u(".btn-comparar").on("click", function() {
                            n = this, s.fn.seleccionarComparar(n)
                        }), d = !1
                    }
                })
            }),

            u("#btn-comparar-especificacion").on("click", function() {
                s.fn.restablecerModelos();
                for (var e = 0; e < a.length; e++) {
                    var t = a[e];
                    u("#modelo" + (e + 1)).val(t).trigger("change")
                }
            }),

            u(".btn-comparar-especificacion").on("click", function() {
                u(".bloque-comparador").addClass("open")
            })
        },
        verEspecificaciones: function() {
            var t, a;
            jQuery(".node-type-modelos-detalle .btn-especificacion,.node-type-modelos-contenido .btn-especificacion").on("click", function(xi) {
                xi.preventDefault();
                jQuery(this).attr("data-nid");
                var e = jQuery(this).attr("data-tid"),
                    i = jQuery(this).attr("data-nombre");
                jQuery.ajax({
                    type: "GET",
                    url: "/traer/especificaciones",
                    data: {
                        tid: e
                    },
                    success: function(e) {
                        jQuery(".data-especificaciones").html(e), jQuery(".bloque-especificaciones .nombre-modelo").html(i),
                        a = jQuery(".data-especificaciones table tr td");
                        for (var t = 0; t < a.length; t++) {
                            var o = a[t];
                            "--" == jQuery(o).html() && jQuery(o).parent().remove()
                        }
                    }
                }), jQuery(".bloque-especificaciones").addClass("open")
            }), jQuery(".bloque-especificaciones .close").on("click", function() {
                jQuery(".bloque-especificaciones").removeClass("open")
            }), jQuery(".node-type-modelos-detalle .btn-especificacion, .node-type-modelos-contenido .btn-especificacion").click(function() {
                t = jQuery(this).attr("data-tid")
            }), jQuery("#btn-descargar-2").on("click", function() {
                var e = "/generar/pdf?v1=" + t + "|ty&all=1";
                window.open(e, "_blank")
            })
        },
        pintarComparar: function() {
            for (var e = u(".btn-comparar"), t = 0; t < e.length; t++) {
                var o = e[t];
                var padre = u(o).parent().parent().parent().parent();
                0 <= a.indexOf(padre.attr("data-tid")) && u(o).addClass("active");
            }
        },
        seleccionarComparar: function(e) {
            var padre = u(e).parent().parent().parent().parent();
            a.length <= 2 ? 0 <= a.indexOf(padre.attr("data-tid")) ? (a.splice(a.indexOf(padre.attr("data-tid")), 1), u(e).removeClass("active"), padre.find(".box-modelo").removeClass("opacidad")) : (a.push(padre.attr("data-tid")), u(e).addClass("active"), padre.find(".box-modelo").addClass("opacidad")) : 0 <= a.indexOf(padre.attr("data-tid")) && (a.splice(a.indexOf(padre.attr("data-tid")), 1), u(e).removeClass("active"),padre.find(".box-modelo").removeClass("opacidad")), u("#btn-comparar-especificacion .number").html(a.length)
        },
        comparador: function() {
            u(".bloque-comparador select").selectpicker(), u(".comparar").on("click", function() {
                u(".bloque-comparador").addClass("open"), s.fn.header()
            }), u(".bloque-comparador .close").on("click", function() {
                u(".bloque-comparador").removeClass("open")
            }), u("#btn-comparar").on("click", function() {
                for (var e = u(".bloque-comparador select"), t = 0; t < e.length; t++) {
                    var o = e[t];
                    null != u(o).val() && s.fn.compararModelos()
                }
            }), u("#btn-imprimir").on("click", function() {
                window.print()
            }), u("#btn-descargar").on("click", function() {
                var e = u("#tipomodelo1").val(),
                    t = u("#tipomodelo2").val(),
                    o = u("#tipomodelo3").val();
                null != e && (e = e + "|" + u("#modelo1 option:selected").text()), null != t && (t = t + "|" + u("#modelo2 option:selected").text()), null != o && (o = o + "|" + u("#modelo3 option:selected").text());
                var i = "/generar/pdf?v1=" + e + "&v2=" + t + "&v3=" + o;
                window.open(i, "_blank")
            }), u("#btn-reestablecer").on("click", function() {
                s.fn.restablecerModelos(), s.fn.reiniciarSeleccionComparar()
            }), "http://dev-toyotaperu.ariadna.co/" == u("table img").attr("src") && u("table img").hide()
        },
        reiniciarSeleccionComparar: function() {
            a = [], u(".btn-comparar.active").removeClass("active"), u("#btn-comparar-especificacion .number").html("0")
        },
        restablecerModelos: function() {
            1 == (t = !0) && (u("#modelo1").val("0").trigger("change"), u("#modelo2").val("0").trigger("change"), u("#modelo3").val("0").trigger("change"), u("#tipomodelo1").val("0").trigger("change"), u("#tipomodelo2").val("0").trigger("change"), u("#tipomodelo3").val("0").trigger("change"), u(".version-table").html(""), u(".bloque-comparador .container>.row:nth-child(5)").hide(), t = !1)
        },
        compararModelos: function() {
            var e = u("#tipomodelo1").val(),
                t = u("#tipomodelo2").val(),
                o = u("#tipomodelo3").val();
            null != e && (e = e + "|" + u("#modelo1 option:selected").text()), null != t && (t = t + "|" + u("#modelo2 option:selected").text()), null != o && (o = o + "|" + u("#modelo3 option:selected").text()), u.ajax({
                type: "GET",
                url: "/generar/tabla/comparador",
                data: {
                    v1: e,
                    v2: t,
                    v3: o
                },
                success: function(e) {
                    u(".version-table").html(e), u(".bloque-comparador .container>.row").show()
                }
            })
        },
        noticiasList: function() {
            u("#btn-submit").on("click", function() {
                var e = u("#filtro-tid").val(),
                    t = u("#filtro-word").val();
                u.ajax({
                    type: "POST",
                    url: "/buscar/noticias",
                    data: {
                        tid: e,
                        word: t
                    },
                    success: function(e) {
                        u(".text-center").remove(), u(".list-noticias").html(e), s.fn.share(), FB.XFBML.parse()
                    }
                })
            }), u("#filtro-tid").on("change", function() {
                var e = u("#filtro-tid").val(),
                    t = u("#filtro-word").val();
                u.ajax({
                    type: "POST",
                    url: "/buscar/noticias",
                    data: {
                        tid: e,
                        word: t
                    },
                    success: function(e) {
                        u(".text-center").remove(), u(".list-noticias").html(e), s.fn.share(), FB.XFBML.parse()
                    }
                })
            })
        },
        search: function() {
            u('.header form input,.bloque-search #text_search').bind('copy paste', function (e) {
               e.preventDefault();
            });

            
            u(".header form input,.bloque-search #text_search").keypress(function(a) {
                var c = a.which,
                    d = a.keyCode,
                    e = String.fromCharCode(c).toLowerCase(),
                    f = "abcdefghijklmnñopqrstuvwxyzáéíóú0123456789- ";
                return (-1 != f.indexOf(e) || 9 == d || 37 != c && 37 == d || 39 == d && 39 != c || 8 == d || 46 == d && 46 != c) && 161 != c || a.preventDefault();
            }),
            u(".header form").on("submit", function(e) {
                if (e.preventDefault(), u(".bloque-search").addClass("open"), s.fn.header(), u("#text_search").val(u(".header form input").val()), u("ul.resultados").html(""), "" != u(".header form input").val()) {
                    var t = u(".header form input").val();
                    u(".bloque-search .container-loader").addClass("visible"), s.fn.setSearch(t)
                } else u(".resultados").append("<li>Debes escribir algo para realizar una búsqueda.</li>")
            }), u(".bloque-search form").on("submit", function(e) {
                if (e.preventDefault(), u(".header form input").val(u("#text_search").val()), u("ul.resultados").html(""), "" != u(".bloque-search #text_search").val()) {
                    var t = u(".bloque-search #text_search").val();
                    u(".bloque-search .container-loader").addClass("visible"), s.fn.setSearch(t)
                } else u(".resultados").append("<li>Debes escribir algo para realizar una búsqueda.</li>")
            }), u(".bloque-search .close").on("click", function() {
                u(".bloque-search").removeClass("open")
            })
        },
        setSearch: function(e) {
            jQuery.ajax({
                type: "POST",
                url: "/buscar/contenido",
                data: {
                    word: e
                },
                success: function(e) {
                    if (0 == e) u("ul.resultados").html(""), u('<li>No se encontraron resultados bajo el término "' + u("#text_search").val() + '"</li>').appendTo("ul.resultados"), u(".bloque-search .container-loader").removeClass("visible");
                    else {
                        for (var t = (t = u.parseJSON(e)).resultados, o = 0; o < t.length; o++) {
                            var i = t[o],
                                a = '<li><a href="' + i.url + '"><h2>' + i.title + "</h2><p>" + i.text + "</p></a></li>";
                            u(a).appendTo("ul.resultados")
                        }
                        u(".bloque-search .container-loader").removeClass("visible")
                    }
                }
            })
        },
        share: function() {
            u(".share_fb").on("click", function() {
                FB.ui({
                    method: "feed",
                    name: u(this).attr("data-title"),
                    link: u(this).attr("data-url"),
                    picture: u(this).attr("data-img"),
                    caption: u(this).attr("data-text"),
                    description: u(this).attr("data-text"),
                    message: u(this).attr("data-text")
                })
            }), u(".share_tw").on("click", function() {
                window.open("https://twitter.com/share?text=" + u(this).attr("data-title") + "&url=" + encodeURIComponent(u(this).attr("data-url")))
            })
        },
        slider: function() {
            u(".flexslider.bloque-slider").flexslider({
                controlNav: !0,
                animation: "slider",
                prevText: "",
                nextText: "",
                touch: !0,
                slideshow: !0,
                slideshowSpeed: 10000
            }), u(".flexslider.slider-historia").flexslider({
                controlNav: !0,
                animation: "slider",
                prevText: "",
                nextText: "",
                touch: !0,
                slideshow: !1,
                animationLoop: !1,
                start: function() {
                    u(".slider-historia").append('<div class="puntos-historia"><h4>historia</h4></div>'), u(".flexslider.slider-historia .flex-control-nav").appendTo(".puntos-historia");
                    for (var e = u(".flexslider.slider-historia .slides li"), t = u(".flexslider.slider-historia .flex-control-nav li"), o = 0; o < e.length; o++) {
                        var i = e[o],
                            a = t[o];
                        u(a).find("a").html(""), u(a).find("a").append("<span>" + u(i).attr("data-date") + "</span>")
                    }
                    if (u(window).width() < c) {
                        var r = 34 * u(".flex-control-nav li").length;
                        u(".flexslider.slider-historia .flex-control-nav").css("width", r)
                    }
                }
            }), u(".slider-noticias.flexslider").flexslider({
                animation: "slide",
                controlNav: "thumbnails",
                directionNav: !0,
                prevText: "",
                nextText: "",
                touch: !0
            }), u(".bloque-comunicados .flexslider").flexslider({
                prevText: "",
                nextText: ""
            }), u(".bloque-videos .flexslider").flexslider({
                prevText: "",
                nextText: ""
            }), u(".bloque-color .flexslider").flexslider({
                controlNav: !0,
                directionNav: !1,
                animation: "fade",
                prevText: "",
                nextText: "",
                touch: !0,
                slideshow: !1,
                start: function() {
                    u('<div class="container-color"></div>').insertBefore(".bloque-color h2.titulo-bloque"), u(".bloque-color h2.titulo-bloque").appendTo(".container-color"), u(".bloque-color .flex-control-nav").appendTo(".container-color"), u(".container-color").insertBefore(".bloque-color ul.slides"), u(window).width() < c && (u(".bloque-color .flex-control-nav").addClass("owl-carousel"), u(".bloque-color .flex-control-nav.owl-carousel").owlCarousel({
                        margin: 2,
                        responsiveClass: !0,
                        navText: ["", ""],
                        dots: !1,
                        loop: !1,
                        items: 4,
                        nav: !0,
                        onInitialized: function() {
                            u('<div class="color-mobile"></div>').insertAfter(".bloque-color .flex-control-nav");
                            var e = u(u(".container-color .owl-item")[0]).find("li p").text();
                            u(".color-mobile").html(e)
                        }
                    }))
                },
                after: function() {
                    var e = u(".flex-active").parent().find("p").text();
                    u(".color-mobile").html(e)
                }
            });
            for (var e = u(".bloque-color .slides li"), t = u(".bloque-color .flex-control-nav li"), o = 0; o < e.length; o++) u(t[o]).find("a").css({
                "background-color": u(e[o]).attr("data-color")
            }), u(t[o]).append("<p>" + u(e[o]).attr("data-name") + "</p>");
            u(window).width() < c && (u(".bloque-caracteristicas .filtros-caracteristicas ul").addClass("owl-carousel"), u(".bloque-caracteristicas .filtros-caracteristicas ul.owl-carousel").owlCarousel({
                margin: 2,
                responsiveClass: !0,
                navText: ["", ""],
                dots: !1,
                loop: !1,
                items: 2,
                nav: !0
            })), u(".carousel-modelos.owl-carousel").owlCarousel({
                margin: 20,
                responsiveClass: !0,
                navText: ["", ""],
                dots: !1,
                loop: !0,
                nav: true,
                responsive: {
                    0: {
                        items: 1,
                    },
                    600: {
                        items: 2,
                    },
                    1e3: {
                        items: 4,
                    }
                }
            }),
            u(".node-type-modelos-detalle").is(":visible") && u(window).width() < c && (u(".node-type-modelos-detalle .carousel-modelos.owl-carousel").owlCarousel("destroy"), u(".node-type-modelos-detalle .carousel-modelos.owl-carousel").removeClass("owl-carousel")),

            u(".bloque-modelos-home select.categoria").on("change", function() {
                var variable = u(this).val();
                if( variable == -0)
                {
                    variable = "";
                }

                u.ajax({
                    type: "POST",
                    url: "/modelo/home",
                    dataType: "JSON",
                    data: {
                        tid: variable,
                    },
                    success: function(data) {
                        u(".carousel-modelos.owl-carousel").owlCarousel("destroy");
                        // u(".carousel-modelos.owl-carousel").removeClass("owl-carousel");
                        // u(".carousel-modelos").addClass("one");

                        if(data.lista != null || data.html != null)
                        {
                            u(".bloque-modelos-home select.modelo .primero").nextAll("option").remove();
                            u.each(data.lista, function(e, t) {
                                u(".bloque-modelos-home select.modelo").append("<option value=" + t.id + " >" + t.titulo + "</option>");
                            })

                            u(".modelo").selectpicker("refresh");
                            u(".carousel-modelos").html(data.html);


                            u(".carousel-modelos").addClass("owl-carousel");
                            u(".carousel-modelos.owl-carousel").owlCarousel({
                                margin: 20,
                                responsiveClass: !0,
                                navText: ["", ""],
                                dots: !1,
                                loop: !0,
                                nav: true,
                                responsive: {
                                    0: {
                                        items: 1,
                                    },
                                    600: {
                                        items: 2,
                                    },
                                    1e3: {
                                        items: 4,
                                    }
                                }
                            })

                        }
                    }
                })
            })

            u(".bloque-modelos-home select.modelo").on("change", function() {
                -0 == u(this).val() ? (u(".carousel-modelos").addClass("owl-carousel"), u(".carousel-modelos.owl-carousel").owlCarousel({
                    margin: 20,
                    responsiveClass: !0,
                    navText: ["", ""],
                    dots: !1,
                    loop: !0,
                    nav: true,
                    responsive: {
                        0: {
                            items: 1,
                        },
                        600: {
                            items: 3,
                        },
                        1e3: {
                            items: 4,
                        }
                    }
                })) : (u(".carousel-modelos.owl-carousel").owlCarousel("destroy"), u(".carousel-modelos.owl-carousel").removeClass("owl-carousel"), u(".carousel-modelos").addClass("one"), u(".carousel-modelos > li").removeClass("visible"), u(".carousel-modelos > .item-" + u(this).val()).addClass("visible"))
            }), u(".carousel-news.owl-carousel").owlCarousel({
                margin: 40,
                responsiveClass: !0,
                navText: ["", ""],
                dots: !0,
                loop: !0,
                responsive: {
                    0: {
                        items: 1,
                        nav: !0
                    },
                    600: {
                        items: 2,
                        nav: !1
                    },
                    1e3: {
                        items: 3,
                        nav: !0
                    }
                }
            }), u(".carousel-tipos-modelos.owl-carousel").owlCarousel({
                margin: 40,
                responsiveClass: !0,
                navText: ["", ""],
                dots: !0,
                loop: !1,
                responsive: {
                    0: {
                        items: 1,
                        nav: !0
                    },
                    600: {
                        items: 1,
                        nav: !1
                    },
                    1e3: {
                        items: 2,
                        nav: !0
                    }
                }
            }), u(".bloque-servicio-posventa .icons.owl-carousel").owlCarousel({
                margin: 30,
                responsiveClass: !0,
                navText: ["", ""],
                dots: !0,
                loop: !0,
                responsive: {
                    0: {
                        items: 1,
                        nav: !0
                    },
                    600: {
                        items: 3,
                        nav: !1
                    },
                    1200: {
                        items: 3,
                        nav: !0
                    }
                }
            }), u(".bloque-valores .icons.owl-carousel").owlCarousel({
                margin: 30,
                responsiveClass: !0,
                navText: ["", ""],
                dots: !0,
                loop: !1,
                responsive: {
                    0: {
                        items: 1,
                        nav: !0
                    },
                    600: {
                        items: 3,
                        nav: !1
                    },
                    1200: {
                        items: 5,
                        nav: !0
                    }
                }
            }), u(window).width() < c && (u(".beneficios .container").addClass("owl-carousel"), u(".beneficios .container hr").remove(), u(".beneficios .container").owlCarousel({
                margin: 2,
                responsiveClass: !0,
                navText: ["", ""],
                dots: !0,
                loop: !1,
                items: 1,
                nav: !0
            }))
        },
        modelos: function() {
            u(".bloque-modelos .container-filters-red  ul li").click(function() {
                u(".bloque-modelos .container-filters-red  ul li").removeClass("active"),
                u(this).addClass("active")
            }), u(window).width() > c && u(".bloque-modelos .list-modulos").prepend('<h2 class="title">Todos</h2>'), u(".container-filters-red .filters li").on("click", function() {
                var e = u(this).attr("tid"),
                    t = u(this).html();
                jQuery.ajax({
                    type: "POST",
                    url: "/modelo/concesionario",
                    data: {
                        tid: e
                    },
                    success: function(e) {
                        u(".bloque-modelos .list-modulos").html(e), u(window).width() > c && u(".bloque-modelos .list-modulos").prepend('<h2 class="title">' + t + "</h2>")
                    }
                })
            }), u(".container-filters-mobile select").selectpicker(), u(window).width() < c && (u(".bloque-modelos .list-modulos").addClass("owl-carousel"), u(".bloque-modelos .list-modulos").owlCarousel({
                responsiveClass: !0,
                navText: ["", ""],
                dots: !0,
                loop: !0,
                items: 1
            })), u(".bloque-modelos .container-filters-mobile select").on("change", function() {
                var e = u(this).val();
                jQuery.ajax({
                    type: "POST",
                    url: "/modelo/concesionario",
                    data: {
                        tid: e
                    },
                    success: function(e) {
                        jQuery(".bloque-modelos .list-modulos").html(e), u(window).width() < c && (u(".bloque-modelos .list-modulos").owlCarousel("destroy"), u(".bloque-modelos .list-modulos").owlCarousel({
                            responsiveClass: !0,
                            navText: ["", ""],
                            dots: !0,
                            loop: !0,
                            items: 1
                        }))
                    }
                })
            })
        },
        galerias: function() {
            u(".grid").masonry({
                itemSelector: ".grid-item",
                percentPosition: !0
            }), u("[data-fancybox]").fancybox({
                loop: !0,
                buttons: ["close"]
            })
        },
        map: function() {
            u("#mapa").is(":visible") && u.getJSON("/traer/puntos/general", function(e) {
                o = e, u.each(o, function(e, t) {
                    i.push(t)
                }), s.fn.initMap(i)
            }), 0 != r && (b = !0), u(".bloque-concesionarios-home .ubicacion").on("click", function() {
                if (0 == b)
                    if (0 == r) {
                        u(".bloque-concesionarios-home .map").prepend('<div class="loader-map"><div class="loader"></div></div>'), u(".ubicacion").attr("disabled", "disabled"), navigator.geolocation ? navigator.geolocation.getCurrentPosition(function(e) {
                            r = e.coords.latitude, h = e.coords.longitude, localStorage.setItem("latitude", r), localStorage.setItem("longitude", h), u(".loader-map").remove(), u(".ubicacion").removeAttr("disabled"), s.fn.geolocationMap()
                        }, function(e) {
                            u(".loader-map").remove(), alert("No se pudo encontrar tu ubicación. Inténtalo nuevamente."), u(".ubicacion").removeAttr("disabled"), console.log("Error occurred. Error code: " + e.code)
                        }, {
                            timeout: 3e4,
                            maximumAge: 3e5
                        }) : alert("no geolocation support")
                    } else s.fn.geolocationMap2();
                else s.fn.geolocationMap()
            }), u(".bloque-concesionarios-home .filtros ul li").click(function() {
                u(".bloque-concesionarios-home .filtros ul li").removeClass("active"), u(this).addClass("active")
            })
        },
        initMap: function(e) {
            f = e[0], m = new google.maps.Map(document.getElementById("mapa"), {
                mapTypeId: google.maps.MapTypeId.ROADMAP,
                styles: [{
                    featureType: "landscape",
                    elementType: "labels",
                    stylers: [{
                        visibility: "off"
                    }]
                }, {
                    featureType: "transit",
                    elementType: "labels",
                    stylers: [{
                        visibility: "off"
                    }]
                }, {
                    featureType: "poi",
                    elementType: "labels",
                    stylers: [{
                        visibility: "off"
                    }]
                }, {
                    featureType: "water",
                    elementType: "labels",
                    stylers: [{
                        visibility: "off"
                    }]
                }, {
                    featureType: "road",
                    elementType: "labels.icon",
                    stylers: [{
                        visibility: "off"
                    }]
                }, {
                    stylers: [{
                        hue: "#00aaff"
                    }, {
                        saturation: -100
                    }, {
                        gamma: 2.15
                    }, {
                        lightness: 12
                    }]
                }, {
                    featureType: "road",
                    elementType: "labels.text.fill",
                    stylers: [{
                        visibility: "on"
                    }, {
                        lightness: 24
                    }]
                }, {
                    featureType: "road",
                    elementType: "geometry",
                    stylers: [{
                        lightness: 57
                    }]
                }]
            }), s.fn.setMarkers(), u(".filtros ul li").on("click", function() {
                s.fn.filtersMap(u(this).attr("data-value"))
            }), u(".bloque-concesionarios-home form select").on("change", function() {
                s.fn.filtersMap(u(this).val())
            })
        },
        filtersMap: function(e) {
            if (s.fn.setMapOnAll(null), v = [], f = [], u(".list-concensionarios").html(""), "todos" == e) f = i[0];
            else
                for (var t = 0; t < o.marcadores.length; t++) 0 <= o.marcadores[t].servicios.indexOf(e) && f.push(o.marcadores[t]);
            s.fn.setMarkers()
        },
        setMapOnAll: function(e) {
            for (var t = 0; t < v.length; t++) v[t].setMap(e)
        },
        setMarkers: function() {
            p = new google.maps.InfoWindow;
            var e, t, o = new google.maps.LatLngBounds;
            for (t = 0; t < f.length; t++) {
                e = new google.maps.Marker({
                    position: new google.maps.LatLng(f[t].lat, f[t].long),
                    icon: "/sites/all/themes/toyota/img/pin.png",
                    map: m
                }), v.push(e), o.extend(e.position), m.fitBounds(o);
                var i, a, r;

                r = "<li data-lat='" + f[t].lat + "' data-lng='" + f[t].long + "'><div class='col-md-7 col-sm-6 col-xs-12'><h5>" + f[t].nombre + "</h5><p class='info-txt'>";

                if(f[t].direccion)
                {
                    r+="<p class='direccion_conces'>" + f[t].direccion + "</p>";
                }

                if(f[t].telefono)
                {
                    r+="<p class='tel_conces'> TEL:" + f[t].telefono + "</p>";
                }

                if(f[t].fax)
                {
                    r+="<p class='fax_conces'>FAX:<span class='txt'>" + f[t].fax + "</span></p>";
                }

                if(f[t].horario)
                {
                    r+="<p class='horario_conces'>Horario:<span class='txt'>" + f[t].horario + "</span></p>";
                }

                if(f[t].web)
                {
                    r+="<a class='enlace_conces' target='_blank' href='" + f[t].web + "'>" + f[t].web + "</a>";
                }

                r+= "</div><div class='col-md-5 col-sm-6 col-xs-12'><ul class='list-servicios" + t + "'></ul></div></li>";

                u(".list-concensionarios").append(r), null == f[t].web && u(".enlace_conces").hide(), jQuery(".bloque-concesionarios-home .list-concensionarios > li").each(function(e, t) {
                    i = jQuery(t), "" == jQuery(i).find(".fax_conces .txt").html() && jQuery(i).find(".fax_conces").remove()
                }), jQuery(".bloque-concesionarios-home .list-concensionarios > li").each(function(e, t) {
                    a = jQuery(t), "" == jQuery(a).find(".horario_conces .txt").html() && jQuery(a).find(".horario_conces").remove()
                });
                for (var n = f[t].servicios, l = 0; l < n.length; l++) {
                    var s = n[l],
                        c = '<li class="' + s + '">' + s + "</li>";
                    u(".list-servicios" + t).append(c)
                }
                var d = u("ul.list-concensionarios").find("[data-lat='" + f[t].lat + "']");
                u(d).on("click", function(r, n) {
                    return function() {
                        var e = "https://www.google.com/maps/dir/?api=1&destination=" + f[n].lat + "," + f[n].long,
                            t = "<div class='info-map'><img src='" + f[n].logo + "' class='img-responsive'><h3>" + f[n].nombre + "</h3>";

                            if(f[n].direccion != "")
                            {
                                t+="<p>" + f[n].direccion + "</p>";
                            }

                            if(f[n].telefono != "")
                            {
                                t+= "<p class='tel_marker'>TEL: <span class='txt'>" + f[n].telefono + "</span></p>";
                            }

                            if(f[n].fax  != "")
                            {
                                t+= "<p class='fax_marker'>FAX: <span class='txt'>" + f[n].fax + "</span></p>";
                            }

                            if(f[n].horario  != "")
                            {
                                t+= "<p class='horario_marker'>Horario: <span class='txt'>" + f[n].horario + "</span></p>";
                            }

                            if(f[n].web)
                            {
                                t+= "<a class='link_marker' target='_blank' href='" + f[n].web + "'>" + f[n].web + "</a>";
                            }

                            t+= "<a class='link-map' target='_blank' href='" + e + "'>¿Cómo llegar?</a><ul class='lista-map'></ul></div>";
                        p.setContent(t), p.open(m, r);
                        for (var o = f[n].servicios, i = 0; i < o.length; i++) {
                            var a = '<li class="' + o[i] + '"></li>';
                            u(".lista-map").append(a)
                        }
                        null == f[n].web && u(".link_marker").hide(), null == f[n].logo && u(".info-map img.img-responsive").hide(), jQuery(".info-map .fax_marker .txt").is(":empty") && jQuery(".info-map .fax_marker").remove(), jQuery(".info-map .horario_marker .txt").is(":empty") && jQuery(".info-map .horario_marker").remove(), jQuery(".info-map .link_marker").is(":empty") && jQuery(".info-map .link_marker").remove(), jQuery(".info-map .tel_marker .txt").is(":empty") && jQuery(".info-map .tel_marker").remove()
                    }
                }(e, t)), google.maps.event.addListener(e, "click", function(r, n) {
                    return function() {
                        var e = "https://www.google.com/maps/dir/?api=1&destination=" + f[n].lat + "," + f[n].long,
                            t = "<div class='info-map'><img src='" + f[n].logo + "'class='img-responsive'><h3>" + f[n].nombre + "</h3><p>" + f[n].direccion + "</p><p class='tel_marker'>TEL: <span class='txt'>" + f[n].telefono + "</span></p><p class='fax_marker'>FAX: <span class='txt'>" + f[n].fax + "</span></p><a class='link_marker' target='_blank' href='" + f[n].web + "'>" + f[n].web + "</a><a class='link-map' target='_blank' href='" + e + "'>¿Cómo llegar?</a><ul class='lista-map'></ul></div>";
                        p.setContent(t), p.open(m, r);
                        for (var o = f[n].servicios, i = 0; i < o.length; i++) {
                            var a = '<li class="' + o[i] + '"></li>';
                            u(".lista-map").append(a)
                        }
                        null == f[n].web && u(".link_marker").hide(), null == f[n].logo && u(".info-map img.img-responsive").hide(), jQuery(".info-map .fax_marker .txt").is(":empty") && jQuery(".info-map .fax_marker").remove(), jQuery(".info-map .horario_marker .txt").is(":empty") && jQuery(".info-map .horario_marker").remove(), jQuery(".info-map .tel_marker .txt").is(":empty") && jQuery(".info-map .tel_marker").remove()
                    }
                }(e, t))
            }
        },
        geolocationMap: function() {
            var e = new google.maps.InfoWindow({
                    map: m
                }),
                t = {
                    lat: r,
                    lng: h
                };
            e.setPosition(t), e.setContent("Mi Ubicación"), m.setCenter(t), m.setZoom(13);
            new google.maps.Circle({
                strokeColor: "#FF0000",
                strokeOpacity: .8,
                strokeWeight: 2,
                fillColor: "#FF0000",
                fillOpacity: .01,
                map: m,
                center: {
                    lat: r,
                    lng: h
                },
                radius: 4e3
            });
            b = !1
        },
        geolocationMap2: function() {
            new google.maps.InfoWindow({
                map: m
            });
            var e = {
                lat: r,
                lng: h
            };
            m.setCenter(e), m.setZoom(13)
        },
        formsValidation: function() {
            Parsley.addMessages("es", {
                defaultMessage: "Este valor parece ser inválido.",
                type: {
                    email: "Este valor debe ser un correo válido.",
                    url: "Este valor debe ser una URL válida.",
                    number: "Este valor debe ser un número válido.",
                    integer: "Este valor debe ser un número válido.",
                    digits: "Este valor debe ser un dígito válido.",
                    alphanum: "Este valor debe ser alfanumérico."
                },
                notblank: "Este valor no debe estar en blanco.",
                required: "Este valor es requerido.",
                pattern: "Este valor es incorrecto.",
                min: "Este valor no debe ser menor que %s.",
                max: "Este valor no debe ser mayor que %s.",
                range: "Este valor debe estar entre %s y %s.",
                minlength: "Este valor es muy corto. La longitud mínima es de %s caracteres.",
                maxlength: "Este valor es muy largo. La longitud máxima es de %s caracteres.",
                length: "La longitud de este valor debe estar entre %s y %s caracteres.",
                mincheck: "Debe seleccionar al menos %s opciones.",
                maxcheck: "Debe seleccionar %s opciones o menos.",
                check: "Debe seleccionar entre %s y %s opciones.",
                equalto: "Este valor debe ser idéntico."
            }),

            Parsley.setLocale("es"),
            u(".select-categoria .categoria").selectpicker(),
            u(".modelo").selectpicker(),
            u(".buscador-noticias select").selectpicker(),
            u("#webform-client-form-527 #edit-submitted-telefono").on("input", function() {
                this.value = this.value.replace(/[^0-9]/g, "")
            }),

            u("#edit-submitted-datos-del-vehiculo-modelo").on("change", function() {
                var e = u(this).val(),
                    t = u("#edit-submitted-datos-del-vehiculo-color").val();
                u("#edit-submitted-datos-del-vehiculo-color").attr("data-default", t), u.ajax({
                    type: "GET",
                    url: "/traer/ws/version",
                    data: {
                        model: e
                    },
                    success: function(o) {
                        o = JSON.parse(o), u("#edit-submitted-datos-del-vehiculo-version").html("<option value>Seleccione una versión</option>"), "string" != typeof o.return.desVerMod ? u.each(o.return, function(e, t) {
                            u("#edit-submitted-datos-del-vehiculo-version").append("<option value=" + o.return[e].idVerMod + " >" + o.return[e].desVerMod + "</option>")
                        }) : u("#edit-submitted-datos-del-vehiculo-version").append("<option value=" + o.return.idVerMod + " >" + o.return.desVerMod + "</option>"), u("#edit-submitted-datos-del-vehiculo-version").selectpicker("refresh");
                        var e = u("button[data-id='edit-submitted-datos-del-vehiculo-modelo']").attr("title"),
                            t = u("button[data-id='edit-submitted-datos-del-vehiculo-version']").attr("title");
                        u("#v-name").attr("value", t), u("#m-name").attr("value", e), 0 != u("#edit-submitted-datos-del-vehiculo-version").attr("data-default") && (u("#edit-submitted-datos-del-vehiculo-version").val(u("#edit-submitted-datos-del-vehiculo-version").attr("data-default")), u("#edit-submitted-datos-del-vehiculo-version").change())
                    }
                }),

                u.ajax({
                    type: "GET",
                    url: "/traer/ws/ubicacion",
                    data: {
                        model: e
                    },
                    success: function(o) {
                        u("#ubicacion-select").html("<option selected value>Seleccione una ubicación</option>"), o = JSON.parse(o), u.each(o.return, function(e, t) {
                            u("#ubicacion-select").append("<option value=" + o.return[e].idDep + " >" + o.return[e].desDep + "</option>")
                        }), u("#ubicacion-select").selectpicker("refresh")
                    }
                }),

                u.ajax({
                    type: "POST",
                    dataType: "JSON",
                    url: "/traer/calculadora",
                    data: {
                        c: e
                    },
                    success: function(e) {
                        jQuery(".personalizar").attr("href", e.url)
                    }
                })
            }),

            // u.ajax({
            //     type: "POST",
            //     url: "/traer/webservice/1",
            //     success: function(o) {
            //         o = JSON.parse(o), u.each(o.documentos[0].return, function(e, t) {
            //             u("#edit-submitted-tipo-de-documento").append("<option value=" + o.documentos[0].return[e].idTipDoc + " >" + o.documentos[0].return[e].desTipDoc + "</option>")
            //         }), u.each(o.telefonos[0].return, function(e, t) {
            //             u("#edit-submitted-f1-indicativo").append("<option value=" + o.telefonos[0].return[e].codTel + " >" + o.telefonos[0].return[e].desDep + "</option>")
            //         }), u.each(o.departamentos[0].return, function(e, t) {
            //             u("#edit-submitted-departamento").append("<option value=" + o.departamentos[0].return[e].idDep + " >" + o.departamentos[0].return[e].desDep + "</option>")
            //         });
            //         var d = {
            //                 _keyStr: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
            //                 encode: function(e) {
            //                     var t, o, i, a, r, n, l, s = "",
            //                         c = 0;
            //                     for (e = d._utf8_encode(e); c < e.length;) a = (t = e.charCodeAt(c++)) >> 2, r = (3 & t) << 4 | (o = e.charCodeAt(c++)) >> 4, n = (15 & o) << 2 | (i = e.charCodeAt(c++)) >> 6, l = 63 & i, isNaN(o) ? n = l = 64 : isNaN(i) && (l = 64), s = s + this._keyStr.charAt(a) + this._keyStr.charAt(r) + this._keyStr.charAt(n) + this._keyStr.charAt(l);
            //                     return s
            //                 },
            //                 decode: function(e) {
            //                     var t, o, i, a, r, n, l = "",
            //                         s = 0;
            //                     for (e = e.replace(/[^A-Za-z0-9+/=]/g, ""); s < e.length;) t = this._keyStr.indexOf(e.charAt(s++)) << 2 | (a = this._keyStr.indexOf(e.charAt(s++))) >> 4, o = (15 & a) << 4 | (r = this._keyStr.indexOf(e.charAt(s++))) >> 2, i = (3 & r) << 6 | (n = this._keyStr.indexOf(e.charAt(s++))), l += String.fromCharCode(t), 64 != r && (l += String.fromCharCode(o)), 64 != n && (l += String.fromCharCode(i));
            //                     return l = d._utf8_decode(l)
            //                 },
            //                 _utf8_encode: function(e) {
            //                     e = e.replace(/rn/g, "n");
            //                     for (var t = "", o = 0; o < e.length; o++) {
            //                         var i = e.charCodeAt(o);
            //                         i < 128 ? t += String.fromCharCode(i) : (127 < i && i < 2048 ? t += String.fromCharCode(i >> 6 | 192) : (t += String.fromCharCode(i >> 12 | 224), t += String.fromCharCode(i >> 6 & 63 | 128)), t += String.fromCharCode(63 & i | 128))
            //                     }
            //                     return t
            //                 },
            //                 _utf8_decode: function(e) {
            //                     for (var t = "", o = 0, i = c1 = c2 = 0; o < e.length;)(i = e.charCodeAt(o)) < 128 ? (t += String.fromCharCode(i), o++) : 191 < i && i < 224 ? (c2 = e.charCodeAt(o + 1), t += String.fromCharCode((31 & i) << 6 | 63 & c2), o += 2) : (c2 = e.charCodeAt(o + 1), c3 = e.charCodeAt(o + 2), t += String.fromCharCode((15 & i) << 12 | (63 & c2) << 6 | 63 & c3), o += 3);
            //                     return t
            //                 }
            //             },
            //             e = sessionStorage.getItem("csteps");
            //         if (null != e) {
            //             var t = JSON.parse(e);
            //             u("#edit-submitted-tipo-de-documento").val(d.decode(t[0])).trigger("change"), u("#edit-submitted-f1-indicativo").val(d.decode(t[5])), u("#edit-submitted-departamento").val(d.decode(t[8]))
            //         }
            //         u("select").selectpicker("refresh");


            //     }
            // }),

            // u.ajax({
            //     type: "POST",
            //     url: "/traer/ws/modelos",
            //     success: function(o) {
            //         u("#edit-submitted-datos-del-vehiculo-modelo").html(""), o = JSON.parse(o), u.each(o.return, function(e, t) {
            //             u("#edit-submitted-datos-del-vehiculo-modelo").append("<option value=" + o.return[e].idModMar + " >" + o.return[e].desModMar + "</option>")
            //         }), u("select").selectpicker("refresh"), 0 != u("#edit-submitted-datos-del-vehiculo-modelo").attr("data-default") && u("#edit-submitted-datos-del-vehiculo-modelo").val(u("#edit-submitted-datos-del-vehiculo-modelo").attr("data-default")).trigger("change")
            //     }
            // }),

            u("#edit-submitted-datos-del-vehiculo-version").on("change", function() {
                var e = u(this).val(),
                    t = u("#edit-submitted-datos-del-vehiculo-modelo").val();
                u.ajax({
                    type: "GET",
                    url: "/traer/ws/colores",
                    data: {
                        model: t,
                        version: e
                    },
                    success: function(o) {
                        u("#edit-submitted-datos-del-vehiculo-color").html("<option selected value=>Seleccione un color</option>"), "string" != typeof(o = JSON.parse(o)).return.desCol ? u.each(o.return, function(e, t) {
                            u("#edit-submitted-datos-del-vehiculo-color").append("<option value=" + o.return[e].idCol + " >" + o.return[e].desCol + "</option>")
                        }) : u("#edit-submitted-datos-del-vehiculo-color").append("<option value=" + o.return.idCol + " >" + o.return.desCol + "</option>"), u("#edit-submitted-datos-del-vehiculo-color").selectpicker("refresh");
                        var e = u("button[data-id='edit-submitted-datos-del-vehiculo-modelo']").attr("title"),
                            t = u("button[data-id='edit-submitted-datos-del-vehiculo-version']").attr("title");
                        u("#v-name").attr("value", t), u("#m-name").attr("value", e)
                    }
                })
            }),

            u("#plazo-en-meses").on("change", function() {
                var e = u("#edit-submitted-datos-del-vehiculo-version").val(),
                    t = u(this).val();
                u.ajax({
                    type: "POST",
                    dataType: "JSON",
                    url: "/traer/precios/version",
                    data: {
                        p: t,
                        ci: "10",
                        cf: "10",
                        v: e
                    },
                    success: function(e) {
                        jQuery("#valor-cotizador").html("$" + e.precio),
                        jQuery("#ci-cotizador").html("$" + e.cuota_inicial),
                        jQuery("#cuota-irresistible-cotizador").html("$" + e.cuota_mensual)
                    }
                })
            }),

            u("#ubicacion-select").on("change", function() {
                var e = u(this).val(),
                    t = u("#edit-submitted-datos-del-vehiculo-modelo").val();
                u.ajax({
                    type: "POST",
                    url: "/traer/ws/concesionarios",
                    data: {
                        model: t,
                        dpto: e
                    },
                    success: function(o) {
                        u("#concesionario-select").html("<option selected value>Seleccione un Concesionario</option>"), "string" != typeof(o = JSON.parse(o)).return.desLocCon ? u.each(o.return, function(e, t) {
                            u("#concesionario-select").append("<option value=" + o.return[e].idLocCon + " >" + o.return[e].desLocCon + "</option>")
                        }) : u("#concesionario-select").append("<option value=" + o.return.idLocCon + " >" + o.return.desLocCon + "</option>"), u("#concesionario-select").selectpicker("refresh")
                    }
                })
            }),

            u("#concesionario-select").on("change", function() {
                u("#link-modal").attr("data-target", "#terminos-cotizador-modal");
                var e = u("#concesionario-select option:selected").text();
                u.ajax({
                    type: "POST",
                    url: "/traer/terminos/concesionario",
                    data: {
                        n: e
                    },
                    success: function(e) {
                        u("#terminos-cotizador-contenido").html(e)
                    }
                })
            });

            var e = u("#modelo").val();
            0 != e && (u("#edit-submitted-datos-del-vehiculo-modelo option[value=" + e + "]").attr("selected", "selected"),
                u("#edit-submitted-datos-del-vehiculo-modelo").selectpicker("refresh")),

            // u.ajax({
            //     type: "GET",
            //     url: "/grabar/ws/solicitud",
            //     data: {
            //         model: e
            //     },
            //     success: function(e) {
            //         e = JSON.parse(e), u("#numero-operacion").attr("value", e.return)
            //     }
            // }),

            // u.ajax({
            //     type: "POST",
            //     url: "/traer/ws/modelos",
            //     success: function(o) {
            //         o = JSON.parse(o);
            //         var e = jQuery("#filter-modelo").attr("data-model");
            //         u.each(o.return, function(e, t) {
            //             jQuery("#filter-modelo").append("<option value=" + o.return[e].idModMar + " >" + o.return[e].desModMar + "</option>")
            //         }), "" != e && (u("#filter-modelo option[value=" + e + "]").attr("selected", "selected"), jQuery("#filter-modelo").change()), jQuery("select").selectpicker("refresh")
            //     }
            // }),
            jQuery("select").selectpicker("refresh"),
            jQuery("#filter-modelo").on("change", function() {
                var e = jQuery(this).val(),
                    t = jQuery(".bloque-disena-financiamiento").attr("data-maf");
                    jQuery.ajax({
                        type: "GET",
                        url: "/traer/ws/version",
                        data: {
                            model: e
                        },
                        success: function(o) {
                            o = JSON.parse(o),
                            jQuery("#filter-version").html("<option value>Seleccione una versión</option>"), "string" != typeof o.return.desVerMod ? u.each(o.return, function(e, t) {
                                u("#filter-version").append("<option value=" + o.return[e].idVerMod + " >" + o.return[e].desVerMod + "</option>")
                            }) : u("#filter-version").append("<option value=" + o.return.idVerMod + " >" + o.return.desVerMod + "</option>"),
                            jQuery("#filter-version").selectpicker("refresh"),
                            jQuery("#filter-version").val(jQuery("#filter-version option:eq(1)").val()).trigger("change"),
                            jQuery("#filter-version").selectpicker("refresh");
                            var e = jQuery("button[data-id='filter-modelo']").attr("title"),
                                t = jQuery("button[data-id='filter-version']").attr("title");
                            jQuery("#v-name").attr("value", t),
                            jQuery("#m-name").attr("value", e),
                            "Seleccione una versión" == u("#filter-version option:selected").text() ? u(".model-name-c").html(u("#filter-modelo option:selected").text()) : u(".model-name-c").html(u("#filter-modelo option:selected").text() + " <span>" + u("#filter-version option:selected").text() + "</span>")
                        }
                    }),

                    jQuery.ajax({
                            type: "POST",
                            dataType: "JSON",
                            url: "/traer/modelo/codigo",
                            data: {
                                c: e,
                                maf: t
                            },
                            success: function(e) {
                                u(".car-modelo").attr("src", e.img), u(".link-red-arrow").attr("href", e.btncotizar)
                            }
                        })
                    }),
                    // u.ajax({
                    //     type: "POST",
                    //     url: "/traer/ws/modelos",
                    //     success: function(o) {
                    //         o = JSON.parse(o);
                    //         var e = jQuery("#edit-submitted-datos-del-vehiculo-modelo").attr("data-model");
                    //         u.each(o.return, function(e, t) {
                    //             jQuery("#edit-submitted-datos-del-vehiculo-modelo").append("<option value=" + o.return[e].idModMar + " >" + o.return[e].desModMar + "</option>")
                    //         }), "" != e && (u("#edit-submitted-datos-del-vehiculo-modelo option[value=" + e + "]").attr("selected", "selected"),
                    //         jQuery("#edit-submitted-datos-del-vehiculo-modelo").change()),
                    //         jQuery("select").selectpicker("refresh")
                    //     }
                    // }),

                    jQuery("#edit-submitted-datos-del-vehiculo-modelo").on("change", function() {
                        var e = jQuery(this).val();
                        jQuery(".bloque-disena-financiamiento").attr("data-maf");
                        jQuery.ajax({
                            type: "GET",
                            url: "/traer/ws/version",
                            data: {
                                model: e
                            },
                            success: function(o) {
                                o = JSON.parse(o), jQuery("#edit-submitted-datos-del-vehiculo-version").html("<option value>Seleccione una versión</option>"), "string" != typeof o.return.desVerMod ? u.each(o.return, function(e, t) {
                                    u("#edit-submitted-datos-del-vehiculo-version").append("<option value=" + o.return[e].idVerMod + " >" + o.return[e].desVerMod + "</option>")
                                }) : u("#edit-submitted-datos-del-vehiculo-version").append("<option value=" + o.return.idVerMod + " >" + o.return.desVerMod + "</option>"), jQuery("#edit-submitted-datos-del-vehiculo-version").selectpicker("refresh"), jQuery("#edit-submitted-datos-del-vehiculo-version").val(jQuery("#edit-submitted-datos-del-vehiculo-version option:eq(1)").val()).trigger("change"), jQuery("#edit-submitted-datos-del-vehiculo-version").selectpicker("refresh");
                                var e = jQuery("button[data-id='edit-submitted-datos-del-vehiculo-modelo']").attr("title"),
                                    t = jQuery("button[data-id='edit-submitted-datos-del-vehiculo-version']").attr("title");
                                jQuery("#v-name").attr("value", t), jQuery("#m-name").attr("value", e)
                            }
                        })
                    }),

                    u("#filter-version").on("change", function() {
                        jQuery(".version-name-c").html(u("#filter-version option:selected").text());
                        var e = jQuery(this).val(),
                            t = jQuery(".bloque-disena-financiamiento .box1 #filter-meses .number").text(),
                            o = jQuery(".bloque-disena-financiamiento .box1 #filter-inicial .number").text().split("%").join(""),
                            i = jQuery(".bloque-disena-financiamiento .box1 #filter-final .number").text().split("%").join(""),
                            a = jQuery("#filter-modelo option:selected").text();
                        t = "" == t ? "24" : t, o = "" == o ? "10" : o, i = "" == i ? "10" : i,
                        u.ajax({
                            type: "POST",
                            dataType: "JSON",
                            url: "/traer/precios/version",
                            data: {
                                p: t,
                                ci: o,
                                cf: i,
                                v: e,
                                m: a
                            },
                            success: function(e) {

                                u.ajax({
                                    type: "GET",
                                    dataType: "JSON",
                                    url: '/traer/conversion',
                                    success: function(obj) {
                                        console.log("comobo1");

                                        var solPrecio = e.precio.replace(',','');
                                        //var resuPre = solPrecio * obj.GetTipoCambioTDPResult.TipoCambio;
                                        // u("#precio-vehiculo").html("$" + e.precio +'<span>'+'S/'+cambiomoneda(resuPre)+'</span>');
                                        u("#precio-vehiculo").html("$" + e.precio);
                                        var solInicio = e.cuota_inicial.replace(',','');
                                        //var resul = solInicio * obj.GetTipoCambioTDPResult.TipoCambio;
                                         // u("#cuota-inicial").html("$" + e.cuota_inicial+'<p class="valor soles">'+'S/'+cambiomoneda(resul)+'</p>');
                                         u("#cuota-inicial").html("$" + e.cuota_inicial);

                                        var cuotaFija = e.cuota_balon.replace(',','');
                                        //var resulFija = cuotaFija * obj.GetTipoCambioTDPResult.TipoCambio;
                                        // u("#cuota-final").html("$" + e.cuota_balon+'<p class="valor soles">'+'S/'+cambiomoneda(resulFija)+'</p>');
                                        u("#cuota-final").html("$" + e.cuota_balon);

                                        var cuotaMensual = e.cuota_mensual.replace(',','');
                                        //var resulMen = cuotaMensual * obj.GetTipoCambioTDPResult.TipoCambio;
                                        // u("#cuota-irresistible").html("$" + e.cuota_mensual+'<p class="valor soles">'+'S/'+cambiomoneda(resulMen)+'</p>');
                                        u("#cuota-irresistible").html("$" + e.cuota_mensual);

                                        u(".bloque-legal p.legal").html(e.terminos),
                                        jQuery("#p-c").val(t), jQuery("#valor-c").val(e.precio),
                                        jQuery("#ci-c").val(e.cuota_inicial),
                                        jQuery("#cf-c").val(e.cuota_balon),
                                        jQuery("#i-c").val(e.cuota_mensual),
                                        jQuery("#por-ci-c").val(o),
                                        jQuery("#por-cf-c").val(i),
                                         "Seleccione una versión" == u("#filter-version option:selected").text() ? u(".model-name-c").html(u("#filter-modelo option:selected").text()) : u(".model-name-c").html(u("#filter-modelo option:selected").text() + " <span>" + u("#filter-version option:selected").text() + "</span>")
                                    }
                                });
                            }
                        })
                    }),

            u("#edit-submitted-datos-del-vehiculo-version").on("change", function() {
                var e = jQuery(this).val(),
                    t = jQuery(".bloque-disena-financiamiento .box1 #filter-meses .number").text(),
                    o = jQuery(".bloque-disena-financiamiento .box1 #filter-inicial .number").text().split("%").join(""),
                    i = jQuery(".bloque-disena-financiamiento .box1 #filter-final .number").text().split("%").join(""),
                    a = jQuery("#edit-submitted-datos-del-vehiculo-modelo option:selected").text();
                t = "" == t ? "24" : t, o = "" == o ? "10" : o, i = "" == i ? "10" : i, u.ajax({
                    type: "POST",
                    dataType: "JSON",
                    url: "/traer/precios/version",
                    data: {
                        p: t,
                        ci: o,
                        cf: i,
                        v: e,
                        m: a
                    },
                    success: function(e) {
                        u("#precio-vehiculo").html("$" + e.precio),
                        u("#valor-c").val(e.precio),
                        u("#cuota-inicial").html("$" + e.cuota_inicial),
                        u("#cuota-final").html("$" + e.cuota_balon),
                        u("#cuota-irresistible").html("$" + e.cuota_mensual),
                        u(".bloque-legal p.legal").html(e.terminos)
                    }
                })
            }),

            u("#cotizar-calculadora").click(function(e) {
                e.preventDefault();
                var t = [],
                    o = jQuery(".bloque-disena-financiamiento .box1 #filter-meses .number").text();
                t[0] = "" == o ? "24" : o, t[1] = jQuery("#precio-vehiculo").html(), t[2] = jQuery("#cuota-inicial").html(), t[3] = jQuery("#cuota-final").html(), t[4] = jQuery("#cuota-irresistible").html(), t[5] = jQuery("#filter-modelo").val(), t[6] = jQuery("#filter-version").val(), t[7] = jQuery(".bloque-disena-financiamiento .box1 #filter-inicial .number").text().split("%").join(""), t[8] = jQuery(".bloque-disena-financiamiento .box1 #filter-final .number").text().split("%").join(""), localStorage.setItem("cotizacion", JSON.stringify(t)), window.location.href = jQuery("#cotizar-calculadora").attr("href")
            }), u("#edit-submitted-n-de-documento").attr("data-parsley-type", "number"), u("#edit-submitted-n-de-documento").on("input", function() {
                this.value = this.value.replace(/[^0-9]/g, "")
            }), u("#edit-submitted-n-de-documento").parent().hide(), u("#edit-submitted-empresa").removeAttr("required"), u("#edit-submitted-empresa").parent().hide(), u("#edit-submitted-empresa").attr("maxlength", "100"), u("#edit-submitted-tipo-de-documento").on("change", function() {
                "" != u("#edit-submitted-tipo-de-documento").val() ? (u("#edit-submitted-n-de-documento").parent().show(), u("#edit-submitted-n-de-documento").parent().find("ul li.parsley-required").html("")) : u("#edit-submitted-n-de-documento").parent().hide(), "1" == u("#edit-submitted-tipo-de-documento").val() && (u("#edit-submitted-n-de-documento").attr("maxlength", "8"), u("#edit-submitted-n-de-documento").attr("minlength", "8"), u("#edit-submitted-n-de-documento").parent().find("ul li.parsley-custom-error-message").html(""), u("#edit-submitted-n-de-documento").attr("data-parsley-error-message", "El tipo de documento debe ser de 8 caracteres.")), "2" == u("#edit-submitted-tipo-de-documento").val() ? (u("#edit-submitted-n-de-documento").attr("maxlength", "11"), u("#edit-submitted-n-de-documento").attr("minlength", "11"), u("#edit-submitted-n-de-documento").parent().find("ul li.parsley-custom-error-message").html(""), u("#edit-submitted-n-de-documento").attr("data-parsley-error-message", "El tipo de documento debe ser de 11 caracteres."), u("#edit-submitted-empresa").attr("required"), u("#edit-submitted-empresa").addClass("required"), u("#edit-submitted-empresa").parent().show()) : (u("#edit-submitted-empresa").removeAttr("required"), u("#edit-submitted-empresa").parent().hide(), u("#edit-submitted-empresa").removeClass("required")), "3" == u("#edit-submitted-tipo-de-documento").val() && (u("#edit-submitted-n-de-documento").attr("maxlength", "9"), u("#edit-submitted-n-de-documento").attr("minlength", "9"), u("#edit-submitted-n-de-documento").parent().find("ul li.parsley-custom-error-message").html(""), u("#edit-submitted-n-de-documento").attr("data-parsley-error-message", "El tipo de documento debe ser de 9 caracteres.")), "4" == u("#edit-submitted-tipo-de-documento").val() && (u("#edit-submitted-n-de-documento").attr("maxlength", "7"), u("#edit-submitted-n-de-documento").attr("minlength", "7"), u("#edit-submitted-n-de-documento").parent().find("ul li.parsley-custom-error-message").html(""), u("#edit-submitted-n-de-documento").attr("data-parsley-error-message", "El tipo de documento debe ser de 7 caracteres."))
            }), u("#edit-submitted-nombres").attr("maxlength", "40"), u("#edit-submitted-nombres").attr("data-parsley-pattern", "^[a-zA-ZÁÉÍÓÚáéíóúüñÑ ]+$"), u("#edit-submitted-nombres").on("input", function(e) {
                u(this).val(function(e, t) {
                    return t.toUpperCase()
                })
            }), u("#edit-submitted-apellidos").attr("maxlength", "30"), u("#edit-submitted-apellidos").attr("data-parsley-pattern", "^[a-zA-ZÁÉÍÓÚáéíóúüñÑ ]+$"), u("#edit-submitted-apellidos").on("input", function(e) {
                u(this).val(function(e, t) {
                    return t.toUpperCase()
                })
            }), u("#edit-submitted-email").attr("maxlength", "40"),
            u(".paso1 button").click(function(e) {
                e.preventDefault(e), "" == u("#edit-submitted-f1-telefono").val() && "" == u("#edit-submitted-f1-celular").val() && (u("#edit-submitted-f1-telefono").attr("required"), u("#edit-submitted-f1-telefono").addClass("required"), u("#edit-submitted-f1-celular").attr("required"), u("#edit-submitted-f1-celular").addClass("required"))
            }),
            u("#edit-submitted-f1-telefono").keyup(function() {
                u("#edit-submitted-f1-celular").removeAttr("required"),
                u("#edit-submitted-f1-celular").removeClass("required"),
                u("#edit-submitted-f1-celular").removeClass("parsley-error"),
                u("#edit-submitted-f1-celular").parent().find(".parsley-errors-list").remove()
            }),
            u("#edit-submitted-f1-celular").keyup(function() {
                u("#edit-submitted-f1-telefono").removeAttr("required"),
                u("#edit-submitted-f1-telefono").removeClass("required"),
                u("#edit-submitted-f1-telefono").removeClass("parsley-error"),
                u("#edit-submitted-f1-telefono").parent().find(".parsley-errors-list").remove()
            }),

            u("#edit-submitted-f1-telefono").attr("data-parsley-type", "number"),
            u("#edit-submitted-f1-telefono").on("input", function() {
                this.value = this.value.replace(/[^0-9]/g, "")
            }),
            u("#edit-submitted-f1-telefono").attr("maxlength", "7"),
            u("#edit-submitted-f1-telefono").attr("minlength", "6"),
            u("#edit-submitted-f1-telefono").attr("data-parsley-error-message", "El teléfono debe ser de al menos 6 caracteres."), u("#edit-submitted-f1-celular").attr("data-parsley-type", "number"), u("#edit-submitted-f1-celular").on("input", function() {
                this.value = this.value.replace(/[^0-9]/g, "")
            }),
            u("#edit-submitted-f1-celular").attr("maxlength", "9"),
            u("#edit-submitted-f1-celular").attr("minlength", "9"),
            u("#edit-submitted-f1-celular").attr("data-parsley-error-message", "El celular debe ser de 9 caracteres."), l = u(".paso"), u(".formulario .previous").click(function() {
                s.fn.navigateTo(s.fn.curIndex() - 1), jQuery("html, body").animate({
                    scrollTop: 0
                }, "fast")
            }), u(".formulario .next").click(function() {
                u("#webform-client-form-38").parsley().whenValidate({
                    group: "block-" + s.fn.curIndex()
                }).done(function() {
                    if (0 == s.fn.curIndex()) {
                        var e = [],
                            d = {
                                _keyStr: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
                                encode: function(e) {
                                    var t, o, i, a, r, n, l, s = "",
                                        c = 0;
                                    for (e = d._utf8_encode(e); c < e.length;) a = (t = e.charCodeAt(c++)) >> 2, r = (3 & t) << 4 | (o = e.charCodeAt(c++)) >> 4, n = (15 & o) << 2 | (i = e.charCodeAt(c++)) >> 6, l = 63 & i, isNaN(o) ? n = l = 64 : isNaN(i) && (l = 64), s = s + this._keyStr.charAt(a) + this._keyStr.charAt(r) + this._keyStr.charAt(n) + this._keyStr.charAt(l);
                                    return s
                                },
                                decode: function(e) {
                                    var t, o, i, a, r, n, l = "",
                                        s = 0;
                                    for (e = e.replace(/[^A-Za-z0-9+/=]/g, ""); s < e.length;) t = this._keyStr.indexOf(e.charAt(s++)) << 2 | (a = this._keyStr.indexOf(e.charAt(s++))) >> 4, o = (15 & a) << 4 | (r = this._keyStr.indexOf(e.charAt(s++))) >> 2, i = (3 & r) << 6 | (n = this._keyStr.indexOf(e.charAt(s++))), l += String.fromCharCode(t), 64 != r && (l += String.fromCharCode(o)), 64 != n && (l += String.fromCharCode(i));
                                    return l = d._utf8_decode(l)
                                },
                                _utf8_encode: function(e) {
                                    e = e.replace(/rn/g, "n");
                                    for (var t = "", o = 0; o < e.length; o++) {
                                        var i = e.charCodeAt(o);
                                        i < 128 ? t += String.fromCharCode(i) : (127 < i && i < 2048 ? t += String.fromCharCode(i >> 6 | 192) : (t += String.fromCharCode(i >> 12 | 224), t += String.fromCharCode(i >> 6 & 63 | 128)), t += String.fromCharCode(63 & i | 128))
                                    }
                                    return t
                                },
                                _utf8_decode: function(e) {
                                    for (var t = "", o = 0, i = c1 = c2 = 0; o < e.length;)(i = e.charCodeAt(o)) < 128 ? (t += String.fromCharCode(i), o++) : 191 < i && i < 224 ? (c2 = e.charCodeAt(o + 1), t += String.fromCharCode((31 & i) << 6 | 63 & c2), o += 2) : (c2 = e.charCodeAt(o + 1), c3 = e.charCodeAt(o + 2), t += String.fromCharCode((15 & i) << 12 | (63 & c2) << 6 | 63 & c3), o += 3);
                                    return t
                                }
                            };
                        e[0] = d.encode(jQuery("#edit-submitted-tipo-de-documento").val()), e[1] = d.encode(jQuery("#edit-submitted-n-de-documento").val()), e[2] = d.encode(jQuery("#edit-submitted-nombres").val()), e[3] = d.encode(jQuery("#edit-submitted-apellidos").val()), e[4] = d.encode(jQuery("#edit-submitted-email").val()), e[5] = d.encode(jQuery("#edit-submitted-f1-indicativo").val()), e[6] = d.encode(jQuery("#edit-submitted-f1-telefono").val()), e[7] = d.encode(jQuery("#edit-submitted-f1-celular").val()), e[8] = d.encode(jQuery("#edit-submitted-departamento").val()), sessionStorage.setItem("csteps", JSON.stringify(e))
                    }
                    s.fn.navigateTo(s.fn.curIndex() + 1)
                })
            }), u("#webform-client-form-38").is(":visible") && u("#webform-client-form-38").parsley().on("form:submit", function() {
                u("#webform-client-form-38 .webform-submit").attr("disabled", "disabled")
            }), l.each(function(e, t) {
                u(t).find(":input").attr("data-parsley-group", "block-" + e)
            }), s.fn.navigateTo(0), u(".bloque-datos form").parsley()
        },
        navigateTo: function(e) {
            l.removeClass("current").eq(e).addClass("current"), jQuery("html, body").animate({
                scrollTop: 0
            }, "fast"), u(".formulario .previous").toggle(0 < e);
            var t = e >= l.length - 1;
            if (u(".formulario .next").toggle(!t), u(".webform-progressbar li").removeClass("current"), u(".webform-progressbar li:nth-child(" + (e + 1) + ")").addClass("current"), u(".paso2").hasClass("current")) {
                u("#modelo").val();
                if ("cotizacion" in localStorage) {
                    var o = JSON.parse(localStorage.getItem("cotizacion")),
                        i = o[8],
                        a = o[7],
                        r = o[0];
                    "" == i && (i = 10, jQuery("#filter-final span.ui-slider-handle").html('<span class="number"></span>')), "" == a && (a = 10, jQuery("#filter-inicial span.ui-slider-handle").html('<span class="number"></span>')), 24 == r && jQuery("#filter-meses span.ui-slider-handle").html('<span class="number"></span>'), jQuery("#filter-inicial span.ui-slider-handle").html('<span class="number">' + a + NaN), jQuery("#filter-meses span.ui-slider-handle").html('<span class="number">' + r + "</span>"), jQuery("#filter-final span.ui-slider-handle").html('<span class="number">' + i + NaN), jQuery(".bloque-cotizar.trespasos div#filter-meses").slider("value", r - 24), jQuery(".bloque-cotizar.trespasos div#filter-meses span.number").html(r), jQuery(".bloque-cotizar.trespasos .slider-filter4 .row .valor").html(r + " meses"), jQuery(".bloque-cotizar.trespasos #precio-vehiculo").html(o[1]), jQuery(".bloque-cotizar.trespasos p#cuota-inicial").html(o[2]), jQuery(".bloque-cotizar.trespasos p#cuota-final").html(o[3]), jQuery(".bloque-cotizar.trespasos p#cuota-irresistible").html(o[4]), jQuery("select#edit-submitted-datos-del-vehiculo-version").val(o[6]).trigger("change"), jQuery(".bloque-cotizar.trespasos div#filter-inicial .number").html(a + "%"), jQuery(".bloque-cotizar.trespasos div#filter-inicial").slider("value", a - 10), jQuery(".bloque-cotizar.trespasos div#filter-final .number").html(i + "%"), jQuery(".bloque-cotizar.trespasos div#filter-final").slider("value", i - 10), localStorage.removeItem("cotizacion")
                }
            }
        },
        curIndex: function() {
            return l.index(l.filter(".current"))
        },
        filtersCaracteristicas: function() {
            e = u(".filtros-caracteristicas ul li:first-child").attr("data-id"), s.fn.setFilters(e), u(".filtros-caracteristicas ul li").on("click", function() {
                u(".filtros-caracteristicas ul li").removeClass("active"), u(this).addClass("active"), e = u(this).attr("data-id"), s.fn.setFilters(e)
            })
        },
        setFilters: function(e) {
            for (var t = u(".list-caracteristicas > div"), o = 0; o < t.length; o++) {
                var i = t[o];
                u(i).removeClass("visible"), u(i).attr("data-id") == e && u(i).addClass("visible")
            }
            u(window).width() < c && (u(".list-caracteristicas > div:first-child").addClass("auto"), u(".list-caracteristicas > div").on("click", function() {
                u(".list-caracteristicas > div").removeClass("auto"), u(this).addClass("auto")
            }))
        },
        imagenesFondo: function() {
            if (u(window).width() > c)
                for (var e = u(".img-background"), t = 0; t < e.length; t++) {
                    var o = e[t];
                    u(o).parent().css({
                        "background-image": "url(" + u(o).attr("src") + ")"
                    })
                } else if (u(".img-background-mobile").is(":visible"))
                    for (e = u(".img-background-mobile"), t = 0; t < e.length; t++) {
                        o = e[t];
                        u(o).parent().css({
                            "background-image": "url(" + u(o).attr("src") + ")"
                        })
                    } else
                        for (e = u(".img-background"), t = 0; t < e.length; t++) {
                            o = e[t];
                            u(o).parent().css({
                                "background-image": "url(" + u(o).attr("src") + ")"
                            })
                        }
        },
        goTo: function() {
            u(".bloque-conocelo .container-filters-red ul.filters li").on("click", function() {
                u(".bloque-conocelo .container-filters-red ul.filters li").removeClass("active"), u(this).addClass("active");
                var e = u("." + u(this).attr("id")).offset().top - u(".header").height() - u(".filters").height();
                u("html, body").animate({
                    scrollTop: e
                }, 1e3)
            }), jQuery(window).width() < 767 && jQuery(".container-filters-red .owl-carousel").owlCarousel({
                loop: !1,
                margin: 5,
                dots: !1,
                responsiveClass: !0,
                responsive: {
                    0: {
                        items: 1,
                        nav: !0
                    },
                    480: {
                        items: 2,
                        nav: !1
                    },
                    600: {
                        items: 3,
                        nav: !1
                    },
                    767: {
                        items: 4,
                        nav: !1
                    }
                }
            }), 767 < jQuery(window).width() && jQuery(".container-filters-red ul").removeClass("owl-carousel")
        },
        globalEvents: function() {
            u(".bloque-galeria .link-black").removeAttr("href"), u(".bloque-galeria .link-black").on("click", function() {
                u.fancybox.open(u("[data-fancybox]"), {
                    loop: !0,
                    buttons: ["close"]
                }, u("[data-fancybox]").index(0))
            })
        }
    }, s.documentOnReady = {
        init: function() {
            s.fn.init()
        }
    }, s.documentOnLoad = {
        init: function() {
            u(".grid").masonry({
                itemSelector: ".grid-item",
                percentPosition: !0
            }), u("[data-fancybox]").fancybox({
                loop: !0,
                buttons: ["close"]
            })

        }
    }, s.documentOnResize = {
        init: function() {}
    }, s.documentOnScroll = {
        init: function() {
            s.fn.header(), u(".bloque-conocelo").is(":visible") && (u(document).scrollTop() >= u(".bloque-conocelo").offset().top - 200 ? u(".bloque-conocelo .container-filters-red").addClass("fixed") : u(".bloque-conocelo .container-filters-red").removeClass("fixed"));
            for (var e = u(window).scrollTop(), t = u(".filters li"), o = 0; o < t.length; o++) {
                var i = t[o];
                if (null != u(i).attr("id")) u("." + u(i).attr("id")).offset().top - u(".header").height() - 1 <= e && (u(".filters li").removeClass("active"), u(i).addClass("active"))
            }
            u(".bloque-concesionarios-ubicacion").is(":visible") && (u(document).scrollTop() >= u(".bloque-concesionarios-ubicacion").offset().top - 200 ? u(".bloque-conocelo .container-filters-red").addClass("hide") : u(".bloque-conocelo .container-filters-red").removeClass("hide"))
        }
    }, s.run = {
        init: function() {
            u(document).on("ready", s.documentOnReady.init),
            u(window).on("load", s.documentOnLoad.init),
            u(window).on("resize", s.documentOnResize.init), u(window).on("scroll", s.documentOnScroll.init)
        }
    }, s.run.init()
}($);

function cambiomoneda(num) {
    var valor = num.toFixed(2).replace(',', '.').replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
    valor = valor.substring(0,valor.length - 3);
    return valor;
}

jQuery(document).on("click",".abrir-detalle",function(e){
    e.preventDefault();
    jQuery(this).find("i").toggleClass("fa-plus-square").toggleClass("fa-minus-square");
    jQuery(this).closest(".fila-contenido").find(".columna-detalle").toggleClass("open");
});
