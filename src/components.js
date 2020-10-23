

export function generateNewsBox(title, description, author, publishedAt, sourcename, link) {
    let container = document.createElement('div');
    container.setAttribute("id", "papi")
    let header = document.createElement('a');
    header.innerText = title;
    header.setAttribute("class", "h3 nounderline link");
    header.setAttribute("href", link);

    console.log(link);

    let desc = document.createElement('p');
    desc.innerText = description;
    let src = document.createElement('h6');
    src.innerText = "Published at " + publishedAt + " by " + author + " for " + sourcename;

    container.appendChild(header);
    container.appendChild(src);
    container.appendChild(desc);

    return container;
}