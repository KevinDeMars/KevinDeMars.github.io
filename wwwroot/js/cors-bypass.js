async function GetUrl(url) {
    return await $.ajax({
        method: 'GET',
        url: url,
        dataType: 'jsonp'
    }).responseText;
}