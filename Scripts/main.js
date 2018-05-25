$("#prop").click(scrollProposta);
$("#prog").click(scrollPrograma);
$("#insc").click(scrollInscricao);
$("#subm").click(scrollSubmissao);
$("#loca").click(scrollLocal);
$("#cont").click(scrollContatos);


function scrollProposta() {
    var posicaoProposta = $("#proposta").offset().top;

    $("html, body").animate(
        {
            scrollTop: posicaoProposta - 60 + "px"
        }, 1000);
}

function scrollPrograma() {
    var posicaoProposta = $("#programa").offset().top;

    $("html, body").animate(
        {
            scrollTop: posicaoProposta - 60 + "px"
        }, 1000);
}
function scrollInscricao() {
    var posicaoProposta = $("#inscricao").offset().top;

    $("html, body").animate(
        {
            scrollTop: posicaoProposta - 60 + "px"
        }, 1000);
}
function scrollSubmissao() {
    var posicaoProposta = $("#submissao").offset().top;

    $("html, body").animate(
        {
            scrollTop: posicaoProposta - 60 + "px"
        }, 1000);
}
function scrollLocal() {
    var posicaoProposta = $("#local").offset().top;

    $("html, body").animate(
        {
            scrollTop: posicaoProposta - 60 + "px"
        }, 1000);
}
function scrollContatos() {
    var posicaoProposta = $("#contatos").offset().top;

    $("html, body").animate(
        {
            scrollTop: posicaoProposta - 60 + "px"
        }, 2000);
}